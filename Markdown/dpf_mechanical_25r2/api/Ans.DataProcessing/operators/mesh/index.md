---
uid: Ans.DataProcessing.operators.mesh
---

# Ans.DataProcessing.operators.mesh Namespace

## Classes

| Class | Description |
|-------|-------------|
| [acmo_mesh_provider](Ans_DataProcessing_operators_mesh_acmo_mesh_provider.md) | Converts an Assembly Mesh into a DPF Meshes container   ///available inputs: assembly_mesh (AnsDispatchHolder), unit (string) (optional) |
| [beam_properties](Ans_DataProcessing_operators_mesh_beam_properties.md) | Reads the beam's properties from the result files contained in the streams or data sources.   ///available inputs: streams (StreamsContainer) (optional), data_sources (DataSources) |
| [change_cs](Ans_DataProcessing_operators_mesh_change_cs.md) | Applies a transformation (rotation and displacement) matrix on a mesh or meshes container.   ///available inputs: meshes (MeshedRegion, MeshesContainer), coordinate_system (Field) |
| [combine_levelset](Ans_DataProcessing_operators_mesh_combine_levelset.md) | Takes two level sets and computes their binary union.   ///available inputs: fieldA (Field), fieldB (Field) |
| [exclude_levelset](Ans_DataProcessing_operators_mesh_exclude_levelset.md) | Takes two level sets and excludes the second one from the first.   ///available inputs: fieldA (Field), fieldB (Field) |
| [external_layer](Ans_DataProcessing_operators_mesh_external_layer.md) | Extracts the external layer (thick skin) of the mesh (3D elements) in a new meshed region.   ///available inputs: mesh (MeshedRegion) |
| [from_field](Ans_DataProcessing_operators_mesh_from_field.md) | Returns the meshed region contained in the support of the mesh.   ///available inputs: field (Field) |
| [from_scoping](Ans_DataProcessing_operators_mesh_from_scoping.md) | Extracts a meshed region from another meshed region based on a scoping. Regarding the property fields of the meshed region: the 'Elemental', 'Face', and 'Nodal' property fields are scoped to the elements, faces or nodes of the output mesh, the 'Global' property fields are transferred from the input mesh to the output mesh without changes, and the rest of the property fields are not present in the output mesh.   ///available inputs: scoping (Scoping), inclusive (Int32) (optional), nodes_only (bool) (optional), mesh (MeshedRegion) |
| [from_scopings](Ans_DataProcessing_operators_mesh_from_scopings.md) | Extracts multiple meshed region base on a scoping and saved in a MeshesContainer   ///available inputs: scopings_container (ScopingsContainer), inclusive (Int32) (optional), nodes_only (bool) (optional), mesh (MeshedRegion) |
| [iso_surfaces](Ans_DataProcessing_operators_mesh_iso_surfaces.md) | iso_surfaces() |
| [make_plane_levelset](Ans_DataProcessing_operators_mesh_make_plane_levelset.md) | Computes the level set for a plane using coordinates.   ///available inputs: coordinates (MeshedRegion, Field), normal (Field), origin (Field) |
| [make_sphere_levelset](Ans_DataProcessing_operators_mesh_make_sphere_levelset.md) | Computes the level set for a sphere using coordinates.   ///available inputs: coordinates (MeshedRegion, Field), origin (Field), radius (double) |
| [mesh_clip](Ans_DataProcessing_operators_mesh_mesh_clip.md) | mesh_clip() |
| [mesh_cut](Ans_DataProcessing_operators_mesh_mesh_cut.md) | Extracts a skin of the mesh in triangles in a new meshed region.   ///available inputs: field (Field), iso_value (double), closed_surface (Int32), mesh (MeshedRegion) (optional), slice_surfaces (bool) |
| [mesh_extraction](Ans_DataProcessing_operators_mesh_mesh_extraction.md) | Take a mesh and a scoping (elemental or nodal) and create a new mesh that contains this selection only.   ///available inputs: mesh (MeshedRegion), mesh_scoping (Scoping), extension (Int32) (optional) |
| [mesh_get_attribute](Ans_DataProcessing_operators_mesh_mesh_get_attribute.md) | Uses the MeshedRegion APIs to return a given attribute of the mesh in input.   ///available inputs: meshed_region (MeshedRegion), property_name (string), property_identifier (Int32, string) (optional) |
| [mesh_plan_clip](Ans_DataProcessing_operators_mesh_mesh_plan_clip.md) | Clips a volume mesh along a plane and keeps one side.   ///available inputs: mesh_or_field (MeshedRegion, Field), normal (Field), origin (Field) |
| [mesh_provider](Ans_DataProcessing_operators_mesh_mesh_provider.md) | Reads a mesh from result files.   ///available inputs: time_scoping (Int32) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources), read_cyclic (Int32) (optional), region_scoping (Scoping, Int32, IList int, System.Collections.IEnumerable) (optional), laziness (DataTree) (optional) |
| [mesh_to_graphics](Ans_DataProcessing_operators_mesh_mesh_to_graphics.md) | Generate tessellation for input mesh   ///available inputs: mesh_scoping (Scoping) (optional), node_normals (bool) (optional), mesh (MeshedRegion) |
| [mesh_to_graphics_edges](Ans_DataProcessing_operators_mesh_mesh_to_graphics_edges.md) | Generate edges of surface elements for input mesh   ///available inputs: mesh_scoping (Scoping) (optional), include_mid_nodes (bool) (optional), mesh (MeshedRegion) |
| [mesh_to_tetra](Ans_DataProcessing_operators_mesh_mesh_to_tetra.md) | mesh_to_tetra() |
| [meshes_provider](Ans_DataProcessing_operators_mesh_meshes_provider.md) | Reads meshes from result files. Meshes can be spatially or temporally varying.   ///available inputs: time_scoping (Scoping, IList int, Int32, System.Collections.IEnumerable) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources), read_cyclic (Int32) (optional), region_scoping (Scoping, Int32, IList int, System.Collections.IEnumerable) (optional) |
| [node_coordinates](Ans_DataProcessing_operators_mesh_node_coordinates.md) | Returns the node coordinates of the mesh(es) in input.   ///available inputs: mesh (MeshedRegion, MeshesContainer) |
| [point_cloud_search](Ans_DataProcessing_operators_mesh_point_cloud_search.md) | point_cloud_search() |
| [points_from_coordinates](Ans_DataProcessing_operators_mesh_points_from_coordinates.md) | Extract a mesh made of points elements. This mesh is made from input meshes coordinates on the input scopings.   ///available inputs: nodes_to_keep (Scoping, ScopingsContainer), mesh (MeshedRegion, MeshesContainer) |
| [skin](Ans_DataProcessing_operators_mesh_skin.md) | Extracts a skin of the mesh in a new meshed region. The material ID of initial elements are propagated to their facets.   ///available inputs: mesh (MeshedRegion), mesh_scoping (Scoping) (optional), duplicate_shell (bool) (optional), add_beam_point (bool) (optional) |
| [split_fields](Ans_DataProcessing_operators_mesh_split_fields.md) | Split the input field or fields container based on the input mesh regions    ///available inputs: field_or_fields_container (Field, FieldsContainer), meshes (MeshesContainer) |
| [split_mesh](Ans_DataProcessing_operators_mesh_split_mesh.md) | Split the input mesh into several meshes based on a given property (material property be default)   ///available inputs: mesh_scoping (Scoping) (optional), mesh (MeshedRegion), property (string) |
| [stl_export](Ans_DataProcessing_operators_mesh_stl_export.md) | export a mesh into a stl file.   ///available inputs: mesh (MeshedRegion), file_path (string) |
| [tri_mesh_skin](Ans_DataProcessing_operators_mesh_tri_mesh_skin.md) | Extracts a skin of the mesh in triangles in a new meshed region.   ///available inputs: mesh (MeshedRegion), include_surfaces (bool) (optional), mesh_scoping (Scoping) (optional) |
| [wireframe](Ans_DataProcessing_operators_mesh_wireframe.md) | Take a mesh and extracts its sharp edges, using pin 1 value as a threshold angle.   ///available inputs: mesh (MeshedRegion), threshold (double) |
