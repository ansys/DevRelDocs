# PyFluent to OpenUSD Tutorial

This tutorial demonstrates how to use Ansys Fluent's Python API (`pyfluent`) to extract simulation data and export it to the OpenUSD format. We'll walk through each step, from importing libraries to exporting the final USD file.


```python
import os
import ansys.fluent.core as pyfluent
from ansys.fluent.core import (
    examples,
    FluentMode,
    FluentVersion,
    Precision,
    UIMode,
    SurfaceFieldDataRequest,
    SurfaceDataType,
    ScalarFieldDataRequest,
    VectorFieldDataRequest  
)
from pxr import Vt, Sdf, Usd, UsdGeom, UsdShade
```

## Download Example Files

First, we download the example Fluent case and data files required for the simulation. These files will be used to demonstrate the workflow.


```python
# Download example files
case_file = examples.download_file(
    "mixing_elbow.cas.h5",
    "pyfluent/mixing_elbow",
    save_path=os.getcwd(),
)
data_file = examples.download_file(
    "mixing_elbow.dat.h5",
    "pyfluent/mixing_elbow",
    save_path=os.getcwd(),
)
```


```python
solver_session = pyfluent.launch_fluent(
    precision=Precision.DOUBLE,
    processor_count=2,
    mode=FluentMode.SOLVER,
    product_version=FluentVersion.v252,
    ui_mode=UIMode.GUI,
)
print(solver_session.get_fluent_version())
```

## Read Case and Data Files

Load the case and data files into the Fluent solver session to access simulation results.


```python
solver_session.settings.file.read_case_data(file_name=case_file)
```

## Access Field Data

Retrieve the field data object from the solver session. This object provides access to surface and field information needed for export.


```python
field_data = solver_session.fields.field_data
```

## List Available Surfaces and Scalar Fields

Define helper functions to print the names of all available surfaces and scalar fields in the loaded Fluent case. This helps identify what data can be exported.


```python
# Print surface names
def print_surface_names(solver, field_data=field_data):  
    """Prints the names of all surfaces in the field data."""    
    for surface_name in field_data.surfaces.allowed_values():
        print(surface_name)

# Print scalar field names  
def print_scalar_field_names(solver, field_data=field_data):  
    """Prints the names of all scalar fields in the field data."""
    for field_name in field_data.scalar_fields.allowed_values():  
        print(field_name)  
```

### Print Surface Names

Display the names of all surfaces present in the simulation.


```python
print_surface_names(solver_session, field_data=field_data)
```

### Print Scalar Field Names

Display the names of all scalar fields available for export.


```python
print_scalar_field_names(solver_session, field_data=field_data)
```

## Print solution variables

Define and call a function to print all solution variables available in the solver session. These variables can be exported to USD.


```python
def print_solution_variables(solver): 
    """Prints the names of all solution variables in the solver session.""" 
    solution_variable_info = solver.fields.solution_variable_info  
    zones_info = solution_variable_info.get_zones_info()  
    domain = zones_info.domains[0]  
    for zone in zones_info.zone_names:  
        zone_info = zones_info[zone]  
        if zone_info.zone_type == "fluid":  
            variable_info = solution_variable_info.get_variables_info(zone_names=[zone_info.name], domain_name=domain)  
            for variable_name in variable_info.solution_variables:  
                print(variable_name)  

print_solution_variables(solver_session)
```

## Collect Data for Export

Gather the names of solution variables, surfaces, scalar fields, and vector fields. Also, set the path for the output USD file.


```python
solution_variable_info = solver_session.fields.solution_variable_info
solution_variable_data = solver_session.fields.solution_variable_data

zones_info = solution_variable_info.get_zones_info()
zone_names = zones_info.zone_names
```


```python
sv_names = solver_session.fields.solution_variable_info.get_variables_info(zones_info.zone_names).solution_variables
surface_names = solver_session.fields.field_data.surfaces.allowed_values()
scalar_field_names = solver_session.fields.field_data.scalar_fields.allowed_values()
vector_field_names = solver_session.fields.field_data.vector_fields.allowed_values()
usd_base_path = os.path.join(os.getcwd(), "mixing_elbow.usda")

print(sv_names, surface_names, scalar_field_names, vector_field_names, usd_base_path )

```

## Define Export Constants

Set constants for scaling between Fluent and Omniverse units, and define tokens used in the USD export process.


```python
# Constants  
FLUENT_TO_OMNIVERSE_SCALE = 100  #Omniverse uses centimeters as the base unit, while Fluent uses meters
POINT_SCALE = 1  
FLUENT_FIELD_TOKEN = "ansys:fluent:surface_name"  
```

## Sanitize USD Paths

Define a helper function to sanitize names for use as USD paths, ensuring compatibility with USD naming conventions.


```python
# Sanitize USD paths
def sanitize_path(path):  
    if path[0].isdigit():  
        path = "_" + path  
    return (
        path.replace('.', '_')
            .replace('#', '_')
            .replace('-', '_')
            .replace(' ', '_')
            .replace('<', '_')
            .replace('>', '_')
            .replace(':', '_')
            .replace('+', '_')  # Add this line to handle '+'
    )
```

## Export Mesh Surfaces to USD

Define a function to export mesh surfaces from Fluent to USD. This includes geometry and (optionally) field data for each surface.


```python
def export_mesh_surfaces(
    usd_stage,
    rootxform_path,
    field_data,
    surface_names,
    scalar_field_names,
    vector_field_names,
):

    for surface_name in surface_names:

        surfaceXform = UsdGeom.Xform.Define(
            usd_stage, rootxform_path.AppendPath(sanitize_path(surface_name))
        )

        usd_mesh = UsdGeom.Mesh.Define(
            usd_stage, surfaceXform.GetPath().AppendPath("Mesh")
        )

        usd_mesh.GetPrim().CreateAttribute(
            FLUENT_FIELD_TOKEN, Sdf.ValueTypeNames.String
        ).Set(surface_name)


        surface_data = field_data.get_field_data(
            SurfaceFieldDataRequest(

                data_types=[
                    SurfaceDataType.Vertices,
                    SurfaceDataType.FacesConnectivity,
                ],

                surfaces=[surface_name],
            )
        )

        connectivity_data = surface_data[surface_name].connectivity
        vertices_data = surface_data[surface_name].vertices

        if len(vertices_data) > 2:
            faceCounts = [len(node) for node in connectivity_data]
            indices = [int(index) for node in connectivity_data for index in node]
            usd_mesh.GetFaceVertexIndicesAttr().Set(indices)
            usd_mesh.GetFaceVertexCountsAttr().Set(faceCounts)

            usd_mesh.GetPointsAttr().Set(vertices_data)

            for scalar_field_name in scalar_field_names:                
                fieldAttr = usd_mesh.GetPrim().CreateAttribute(
                    "primvars:" + sanitize_path(scalar_field_name),
                    Sdf.ValueTypeNames.FloatArray,
                )
                fieldAttr.SetMetadata("interpolation", "vertex")
                scalar_values_request = ScalarFieldDataRequest(
                    field_name=scalar_field_name, surfaces=[surface_name]
                )
                scalar_values = field_data.get_field_data(scalar_values_request)
                fieldAttr.Set(scalar_values[surface_name])


            for vector_field_name in vector_field_names:
                vectorAttr = usd_mesh.GetPrim().CreateAttribute(
                    "primvars:" + sanitize_path(vector_field_name),
                    Sdf.ValueTypeNames.Float3Array,
                )
                vectorAttr.SetMetadata("interpolation", "vertex")                
                vector_values_request = VectorFieldDataRequest(
                    field_name=vector_field_name, surfaces=[surface_name]
                )
                vector_values = field_data.get_field_data(vector_values_request)

                vectorAttr.Set(vector_values[surface_name])
```

## Export Volume Points to USD

Define a function to export volume points (centroids) and associated solution variables from Fluent to USD.


```python
def export_volume_points(usd_stage, rootxform_path, solver, sv_names, zones_info, domain):
    import numpy as np
    for zone in zones_info.zone_names:
        zone_info = zones_info[zone]
        if zone_info.zone_type == "fluid":
            centroid_data = solver.fields.solution_variable_data.get_data(
                variable_name="SV_CENTROID",
                zone_names=[zone_info.name],
                domain_name=domain
            )[zone_info.name]
            centroid_data = np.array(centroid_data).reshape(-1, 3)
            usd_points = UsdGeom.Points.Define(usd_stage, rootxform_path.AppendPath(sanitize_path(zone_info.name)))
            usd_points.GetPointsAttr().Set(centroid_data)
            usd_points.GetWidthsAttr().Set(np.full(len(centroid_data), POINT_SCALE / FLUENT_TO_OMNIVERSE_SCALE))
            for sv_name in sv_names:
                colorAttr = usd_points.GetPrim().CreateAttribute(
                    "primvars:" + sanitize_path(sv_name),
                    Sdf.ValueTypeNames.FloatArray
                )
                colorAttr.SetMetadata("interpolation", "vertex")
                sv_values = solver.fields.solution_variable_data.get_data(
                    variable_name=sv_name,
                    zone_names=[zone_info.name],
                    domain_name=domain
                )[zone_info.name]
                colorAttr.Set(sv_values)
```

## Setup and Export USD Scene

Combine all previous steps to set up the USD scene, export mesh surfaces and volume points, and save the USD file.


```python
def setup_fluent_usd_scene(solver, sv_names, surface_names, scalar_field_names, vector_field_names, usd_base_path):  
    import numpy as np

    usd_stage = Usd.Stage.CreateInMemory()  
    designRootXform = UsdGeom.Xform.Define(usd_stage, "/Fluent")  
    usd_stage.SetDefaultPrim(designRootXform.GetPrim())  
    rootxform_path = designRootXform.GetPath()  

    field_data = solver.fields.field_data  
    solution_variable_info = solver.fields.solution_variable_info  
    zones_info = solution_variable_info.get_zones_info()  
    domain = zones_info.domains[0]  

    export_mesh_surfaces(usd_stage, rootxform_path, field_data, surface_names, scalar_field_names, vector_field_names)
    export_volume_points(usd_stage, rootxform_path, solver, sv_names, zones_info, domain)

    # Export the USD stage to the specified file  
    usd_stage.GetRootLayer().Export(usd_base_path)  
    print("USD stage saved:", usd_base_path)
```

## Run the Export Process

Call the setup function to execute the export process and generate the USD file from the Fluent simulation data.


```python
setup_fluent_usd_scene(
    solver_session, 
    sv_names, 
    surface_names, 
    scalar_field_names, 
    vector_field_names, 
    usd_base_path
)
```

## Exit Fluent Session

Exit the Fluent solver session after the export is complete.


```python
solver_session.exit()
```

## How to Run in Omniverse Python Script Environment

1. Open Omniverse Kit.
2. Open the Script Editor. Menu: Window -> Script Editor
3. Paste and run the Python script. Make sure to update the paths for the USD file and MDL material as needed.
4. The script will assign the FieldToColor MDL material and rainbow colormap to `/Fluent`.
5. Load the USDA file in Omniverse to visualize the temperature field mapped to the colormap.

This workflow enables postprocessing and visualization using Omniverse's MDL and texture capabilities.


```python
# Omniverse Python script example: visualize temperature field with colormap
# Run this in Omniverse Kit or Omniverse Code Python environment
import omni.usd
from pxr import Usd, UsdShade, UsdGeom, Sdf

usd_path = r"d:/Repos/CAE-OpenUSD-Lab/src/mixing_elbow.usda"
colormap_path = r"d:/Repos/CAE-OpenUSD-Lab/presets/rainbow_colormap.png"

# Open the USD stage
omni.usd.get_context().open_stage(usd_path)
stage = omni.usd.get_context().get_stage()

# Get mesh prim (update path as needed)
mesh = stage.GetPrimAtPath("/Fluent/symmetry_xyplane/Mesh")

# Access existing temperature primvar
primvars_api = UsdGeom.PrimvarsAPI(mesh)
temp_primvar = primvars_api.GetPrimvar("primvars:temperature")
temperature_data = temp_primvar.Get()  # Use the already available data

# Normalize temperature and create 'st' primvar
min_temp, max_temp = min(temperature_data), max(temperature_data)
norm_temp = [(t - min_temp) / (max_temp - min_temp) if max_temp > min_temp else 0.0 for t in temperature_data]
primvars_api.CreatePrimvar("st", Sdf.ValueTypeNames.TexCoord2fArray, UsdGeom.Tokens.varying).Set([(u, 0.0) for u in norm_temp])

# Material and colormap setup
material = UsdShade.Material.Define(stage, "/World/FieldMaterial")
pbr = UsdShade.Shader.Define(stage, "/World/FieldMaterial/PBRShader")
pbr.CreateIdAttr("UsdPreviewSurface")
pbr.CreateInput("roughness", Sdf.ValueTypeNames.Float).Set(0.5)
pbr.CreateInput("metallic", Sdf.ValueTypeNames.Float).Set(0.0)
material.CreateSurfaceOutput().ConnectToSource(pbr.ConnectableAPI(), "surface")

st_reader = UsdShade.Shader.Define(stage, "/World/FieldMaterial/stReader")
st_reader.CreateIdAttr("UsdPrimvarReader_float2")
diffuse_tex = UsdShade.Shader.Define(stage, "/World/FieldMaterial/diffuseTexture")
diffuse_tex.CreateIdAttr("UsdUVTexture")
diffuse_tex.CreateInput("file", Sdf.ValueTypeNames.Asset).Set(colormap_path)
diffuse_tex.CreateInput("st", Sdf.ValueTypeNames.Float2).ConnectToSource(st_reader.ConnectableAPI(), "results")
diffuse_tex.CreateOutput("rgb", Sdf.ValueTypeNames.Float3)
pbr.CreateInput("diffuseColor", Sdf.ValueTypeNames.Color3f).ConnectToSource(diffuse_tex.ConnectableAPI(), "rgb")

st_input = material.CreateInput("frame:stPrimvarName", Sdf.ValueTypeNames.Token)
st_input.Set("st")
st_reader.CreateInput("varname", Sdf.ValueTypeNames.Token).ConnectToSource(st_input)

UsdShade.MaterialBindingAPI(mesh).Bind(material)
print("Temperature field and colormap material assigned for visualization.")
```
