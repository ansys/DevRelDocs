# File test\_dvs\_python\_reader\_api.py

<a id="test__dvs__python__reader__api_8py"></a>

![][Python]

## Namespaces

* [test\_dvs\_python\_reader\_api](namespacetest__dvs__python__reader__api.md#namespacetest__dvs__python__reader__api)

## Source


```python




# @cond Suppress Doxygen Warnings

import dynamic_visualization_store as dvs
import argparse
import time
import numpy

parser = argparse.ArgumentParser()  
parser.add_argument("-c", "--cache_uri", help="Provide valid cache uri to read")
parser.add_argument("--debug_wait", type=int)

args      = parser.parse_args()
cache_uri = args.cache_uri 
debug_wait = args.debug_wait

if debug_wait:
    time.sleep(debug_wait)

query = dvs.create_query_instance()







print("\n***\n cache_uri = ", cache_uri, "\n***")
query.add_uri(cache_uri)

dataset_query = query.filter("/dataset.name/eq/dvsnode")
print("\n***\nSub Query Test\n***")
numdatasets = dataset_query.get_num_datasets()
print("\n Number of datasets = ", numdatasets)
for d in range(numdatasets):
    dataset = query.get_dataset(d)
    #print(dir(datasetobj))
    dataset_name = dataset.get_name()
    dataset_unit_system = dataset.get_unit_system()
    print(" Dataset Name: ", dataset_name)
    print("  Unit System: ", dataset_unit_system)
    num_ranks = dataset.get_num_ranks()
    print("  Number of ranks: ", num_ranks)
    ranks = dataset.get_ranks()
    for r in range(num_ranks):
        print("   Rank: ", ranks[r])
    num_chunks = dataset.get_num_chunks_per_rank()
    print("  Number of chunks per rank: ", num_chunks)
    chunks = dataset.get_chunks_per_rank()
    for c in range(num_chunks):
        print("   Chunk: ", chunks[c])
    num_parts = dataset.get_num_parts()
    print("  Num Parts: ", num_parts)
    for p in range(num_parts):
        part = dataset.get_part(p)
        print("   Part Name: ", part.get_name())
    num_plots =  dataset.get_num_plots()
    print("  Number of plots: ", num_plots)
    for p in range(num_plots):
        plot = dataset.get_plot(p)
        print("   Plot: ", plot.get_name())
    num_vars = dataset.get_num_variables()
    print("  Num variables: ", num_vars)
    for v in range(num_vars):
        var = dataset.get_variable(v) 
        print("   Var Name: ", var.get_name())    
part_query    = dataset_query.filter("/part.name/eq/volume-volume")
num_mesh_chunks = part_query.get_num_mesh_chunks()
print(" Num mesh chunks = ", num_mesh_chunks)

for m in range(num_mesh_chunks):
    mesh_chunk = part_query.get_mesh_chunk(m)
    #print(dir(mesh_chunk))
    if isinstance(mesh_chunk, dvs.IMeshChunkObject):
        mesh_type  = mesh_chunk.get_type()
        part       = mesh_chunk.get_object()
        time       = mesh_chunk.get_time()
        rank       = mesh_chunk.get_rank()
        chunk      = mesh_chunk.get_chunk()
        coord_hash = mesh_chunk.get_hash()
        coord_size = 0
        print("\n***\n Mesh Chunk: ", m, "\n***") 
        print("  Type:{0}, Part:{1}, Rank:{2}, Chunk:{3}, Time:{4}, Hash:{5}".format(mesh_type, part.get_name(), rank, chunk, time, coord_hash))
        if mesh_type == dvs.MESHCHUNK_UNSTRUCTURED:
            # coord size 
            coord_size = mesh_chunk.get_coords_size()
            # Get x,y,z coords list
            result   = mesh_chunk.get_coords()
            x_coords, y_coords, z_coords = result
            print("  \nFirst 3 coordinates out of : ", coord_size)
            for c in range(3):
                print("   X: {0}, Y: {1}, Z: {2}".format(x_coords[c], y_coords[c], z_coords[c]))
            # Get interleaved coords
            coord_interleaved  = mesh_chunk.get_coords_interleaved()
            print("   \n No. Interleaved coordinates :", coord_size)
        elif mesh_type == dvs.MESHCHUNK_CURVILIEAR:
            # Get coords size
            coord_size = mesh_chunk.get_coords_curv_component_size()
            print("   \nCurvilinear coordinates component size :", coord_size) 
            # Get localIJKMin, localIJKMax, globalIJKMax, x_coords, y_coords, z_coords
            coords     = mesh_chunk.get_coords_curv()
            local_ijk_min, local_ijk_max, global_ijk_max, x_coords, y_coords, z_coords = coords
            # Get Interleaved Coordinates
            coords         = mesh_chunk.get_coords_curv_interleaved()
            local_ijk_min, local_ijk_max, global_ijk_max, coords_interleaved = coords
        elif mesh_type == dvs.MESHCHUNK_PARALLELEPIPED:
            # origin, dir_vec_i, dir_vec_j, dir_vec_k, local_ijk_max, local_ijk_min, global_ijk_max, ivals, jvals, kvals 
            coords = mesh_chunk.get_coords_parallele()
            origin, dir_vec_i, dir_vec_j, dir_vec_k, local_ijk_max, local_ijk_min, global_ijk_max, ivals, jvals, kvals = coords
            print(" Origin : ", origin)
            print(" DirVecI: ", dir_vec_i)
            print(" DirVecJ: ", dir_vec_j)
            print(" DirVecK: ", dir_vec_k)
            print(" LocalIJKMax : ", local_ijk_max)
            print(" LocalIJKMin : ", local_ijk_min)
            print(" GlobalIJKMax: ", global_ijk_max)

        num_nodal_vars = mesh_chunk.get_num_variables()
        print("\n Num Nodal Var: ", num_nodal_vars)
        for nv in range(num_nodal_vars):
            var = mesh_chunk.get_variable(nv)
            #print(dir(var))
            if isinstance(var, dvs.IVarObject):
                var_loc  = var.get_var_location()
                var_name = var.get_name()
                if var_loc == dvs.LOCATION_NODE:
                    # Get Hash by var_index
                    #nodal_var_hash_size_by_index = mesh_chunk.get_var_hash_size_by_var_index(nv)
                    #nodal_var_hash_size_by_def   = mesh_chunk.get_var_hash_size_by_var_def(var)
                    #nodal_var_hash_by_index      = mesh_chunk.get_var_hash_by_var_index(nv, nodal_var_hash_size_by_index)
                    #nodal_var_hash_by_def        = mesh_chunk.get_var_hash_by_var_def(var, nodal_var_hash_size_by_def)
                    #if nodal_var_hash_by_index:
                    #    print("Nodal VAR Hash by Index: ", nodal_var_hash_by_index)
                    #if nodal_var_hash_by_index != nodal_var_hash_by_def:
                    #    print("Nodal var hash by var index is different that Nodal var hash by def")
                    var_values = mesh_chunk.get_variable_data(nv)
                    num_values = mesh_chunk.get_variable_data_size(nv)
                    print(" Var Name: {0}, Nodal values: {1}, Mesh Chunk: {2}".format(var_name, num_values, m))
                    print(" First 10 Values: ")
                    for n in range(10):
                        print("  ", var_values[n])
        # Element Blocks
        num_elem_blocks = mesh_chunk.get_num_element_blocks()
        print("\n Num Element Blocks: ", num_elem_blocks)

        element_block_types = mesh_chunk.get_element_block_types()
        for et in element_block_types:
            elem_block   = mesh_chunk.get_element_block_by_type(et)
            num_elements = 0
            conn_size    = 0
            faces_per_elem_size = 0
            nodes_per_face_size = 0
            indices_size        = 0
            if isinstance(elem_block, dvs.IElemBlockObject):
                match elem_block.get_element_type():
                    case dvs.ELEMTYPE_TETRAHEDRON | dvs.ELEMTYPE_TRIANGLE | dvs.ELEMTYPE_QUADRANGLE | dvs.ELEMTYPE_HEXAHEDRON:    
                        num_elements = elem_block.get_num_elements()
                        connectivity = elem_block.get_connectivity()
                        connsize     = elem_block.get_connectivity_size()
                        print(" Element Type: Standard")
                        print(" Connectivity Size: ", connsize)
                        for s in range(10):
                            print(" ",connectivity[s])
                    case dvs.ELEMTYPE_N_SIDED_POLYGON | dvs.ELEMTYPE_N_SIDED_POLYGON_GHOST:
                        print(" Element Type          : ", elem_block.get_element_type())
                        num_elements = elem_block.get_num_elements()
                        print(" Num Elements          : ", num_elements)
                        polygon_size = elem_block.get_connectivity_polygon_size()
                        nodes_per_polygon_size, indices_size = polygon_size 
                        print(" Nodes per Polygon Size: ", nodes_per_polygon_size)
                        print(" Polygon Indices Size  : ", indices_size)
                        connectivity = elem_block.get_connectivity_polygon()
                        nodes_per_polygon, indices = connectivity
                        #print(" Nodes Per Polygon: ")
                        #for np in nodes_per_polygon:
                        #    print("  ", np)
                        #print(" Polygon Indices   : ")
                        #for pi in indices:
                        #    print("  ", pi)
                    case dvs.ELEMTYPE_CONVEX_POLYHEDRON | dvs.ELEMTYPE_CONVEX_POLYHEDRON_GHOST:
                        num_element = elem_block.get_num_elements()
                        print(" Element Type: POLYHEDRON", "Number of elements: ", num_element)
                        # Get connectivity Polyhedral
                        polyhedral_size = elem_block.get_connectivity_polyhedral_size()
                        faces_per_elem_size, nodes_per_face_size, indices_size = polyhedral_size
                        print(" Faces Per Elem Size :",faces_per_elem_size)
                        print(" Nodes Per Face Size :",nodes_per_face_size)
                        print(" Conn Indices Size   :",indices_size)
                        conn_polyhedral = elem_block.get_connectivity_polyhedral()
                        faces_per_elem, nodes_per_face, conn_indices = conn_polyhedral
                        #print(" Faces Per Elem: ")
                        #for fp in faces_per_elem:
                        #    print("  ", fp)
                        #print(" Nodes Per Face: ")
                        #for nf in nodes_per_face:
                        #    print("  ", nf)    
                        #print("  Conn Indices : ")
                        #for ci in conn_indices:
                        #    print("  ", ci)
                    case dvs.ELEMTYPE_STRUCTURED:
                        num_elements   = elem_block.get_num_elements()
                        nodes_per_elem = elem_block.get_nodes_per_element()
                        print(" Structured Element: Type:{0}, NPE:{1}".format(elem_block.get_element_type(), nodes_per_elem))
                    case dvs.ELEMTYPE_UNDEFINED | dvs.ELEMTYPE_UNDEFINED_PARALLELEPIPED | dvs.ELEMTYPE_UNDEFINED_CURVILINEAR:
                        print(" Undefined element type found")
                    case _:
                        print(" Default Element Type")
                        num_elements   = elem_block.get_num_elements()
                        nodes_per_elem = elem_block.get_nodes_per_elem()
                        # Get Connectivity List
                        connectivity = elem_block.get_connectivity()
                        #print(" Print Connectivity: ")
                        #for i in connectivity:
                        #    print("  ", i)
print("\n***\nSub Queries Finished\n***")


numtimesteps = query.get_num_timesteps()
print("\n***\n Num timesteps = ", numtimesteps, "\n***")
# Get timestep objects
timesteps    = query.get_timesteps()
for timestep in timesteps:
    print(" Time = ", timestep)


numranks = query.get_num_ranks()
print("\n***\n Number of Ranks: ", numranks, "\n***")
#Get the unique ranks
ranks     = query.get_ranks()
for rank in ranks:
    print(" Rank : ", rank)   


numchunks_per_rank = query.get_num_chunks_per_rank()
print("\n***\n Num Chunks Per Rank = ", numchunks_per_rank, "\n***")
#Get chunks per rank
#global_chunk_max = [None]*numchunks_per_rank
global_chunks    = query.get_chunks_per_rank()
for chunk in global_chunks:
    print(" Chunk: ", chunk)


numparts = query.get_num_parts()
print("\n***\n Number of parts = ", numparts, "\n***")
for np in range(numparts):
    part = query.get_part(np)
    print(" Part {0}:{1} ".format(np+1, part.get_name()))


numplots = query.get_num_plots()
print("\n***\n NumPlots =  ", numplots, "\n***")
for pl in range(numplots):
    plot = query.get_plot(pl)
    print(" Plot {0}:{1}".format(pl+1, plot.get_name()))


num_vars = query.get_num_variables()
if num_vars > 0:
    for nv in range(num_vars):
        var = query.get_variable(nv)
        var_name = var.get_name()
        if isinstance(var, dvs.IVarObject) and var.get_var_location() == dvs.LOCATION_CASE:
            print(" CASE Variable : ", var.get_name())
            dataset      = query.get_dataset(0)
            dataset_name = dataset.get_name()
            num_values   = var.get_component_count_per_value()
            for time in timesteps:
                var_values = dataset.get_variable_data(dataset, var, time)
                print("\nDataset:{0}, Var{1}, Time:{2}, Value{3}".format(dataset_name, var_name, time, var_values(0)))


numvars = query.get_num_variables()
#print("\n***\n Number of vars = ", numvars, "\n***")
for v in range(numvars):
     #Get IVar Object
     varobj   = query.get_variable(v)
     #print(dir(varobj))
     var_name = varobj.get_name()
     var_location = varobj.get_var_location()
     if isinstance(var, dvs.IVarObject) and var_location == dvs.LOCATION_PART:
        dataset      = varobj.get_dataset()
        dataset_name = dataset.get_name()
        numparts     = dataset.get_num_parts()
        num_vals     = varobj.get_component_count_per_value()
        for timestep in timesteps:
            for p in range(numparts):
                part         = dataset.get_part(p)
                part_name    = part.get_name()
                var_values   = query.get_variable_data(part, varobj, time)
                print("\n Dataset:{0}, Part{1}, Var{2}, Time:{3}, Value{4}".format(dataset_name, part_name, var_name, time, var_values(0)))
    

print("\n--------------------------------")
print(" Listing All Datasets for Query")
print("\n--------------------------------")
numdatasets = query.get_num_datasets()
print("\n Number of datasets = ", numdatasets)

for d in range(numdatasets):
    dataset = query.get_dataset(d)
    #print(dir(datasetobj))
    dataset_name = dataset.get_name()
    dataset_unit_system = dataset.get_unit_system()
    print(" Dataset Name: ", dataset_name)
    print("  Unit System: ", dataset_unit_system)
    num_ranks = dataset.get_num_ranks()
    print("  Number of ranks: ", num_ranks)
    ranks = dataset.get_ranks()
    for r in range(num_ranks):
        print("   Rank: ", ranks[r])
    num_chunks = dataset.get_num_chunks_per_rank()
    print("  Number of chunks per rank: ", num_chunks)
    chunks = dataset.get_chunks_per_rank()
    for c in range(num_chunks):
        print("   Chunk: ", chunks[c])
    num_parts = dataset.get_num_parts()
    print("  Num Parts: ", num_parts)
    for p in range(num_parts):
        part = dataset.get_part(p)
        metadata = part.get_metadata()
        print("   Metadata:", metadata)
        print("   Part Name: ", part.get_name())
    num_plots =  dataset.get_num_plots()
    print("  Number of plots: ", num_plots)
    for p in range(num_plots):
        plot = dataset.get_plot(p)
        metadata = plot.get_metadata()
        print("   Metadata", metadata)
        print("   Plot: ", plot.get_name())
    num_vars = dataset.get_num_variables()
    print("  Num variables: ", num_vars)
    for v in range(num_vars):
        var = dataset.get_variable(v) 
        metadata = var.get_metadata()
        print("   Metadata: ", metadata)
        print("   Var Name: ", var.get_name()) 




print("------------------------------------")
print(" Listing All Mesh Chunks for Query")
print("------------------------------------")
num_mesh_chunks = query.get_num_mesh_chunks()
print(" Num mesh chunks = ", num_mesh_chunks)

for m in range(num_mesh_chunks):
    mesh_chunk = query.get_mesh_chunk(m)
    #print(dir(mesh_chunk))
    if isinstance(mesh_chunk, dvs.IMeshChunkObject):
        mesh_type  = mesh_chunk.get_type()
        part       = mesh_chunk.get_object()
        time       = mesh_chunk.get_time()
        rank       = mesh_chunk.get_rank()
        chunk      = mesh_chunk.get_chunk()
        coord_hash = mesh_chunk.get_hash()
        coord_size = 0
        print("\n***\n Mesh Chunk: ", m, "\n***") 
        print("  Type:{0}, Part:{1}, Rank:{2}, Chunk:{3}, Time:{4}, Hash:{5}".format(mesh_type, part.get_name(), rank, chunk, time, coord_hash))
        if mesh_type == dvs.MESHCHUNK_UNSTRUCTURED:
            # Get containing x,y,z coords list
            coord_size = mesh_chunk.get_coords_size()
            result     = mesh_chunk.get_coords()
            x_coords, y_coords, z_coords = result
            print("  \nFirst 3 coordinates out of : ", coord_size)
            for c in range(3):
                print("   X: {0}, Y: {1}, Z: {2}".format(x_coords[c], y_coords[c], z_coords[c]))
            # Get interleaved coords
            coords = mesh_chunk.get_coords_interleaved()
        elif mesh_type == dvs.MESHCHUNK_CURVILIEAR:
            # Get Tuple containing localIJKMin, localIJKMax, globalIJKMax, x_coords, y_coords, z_coords
            coords         = mesh_chunk.get_coords_curv()
            local_ijk_min, local_ijk_max, global_ijk_max, x_coords, y_coords, z_coords = coords
            # Get Interleaved Coordinates
            icoords         = mesh_chunk.get_coords_curv_interleaved()
            local_ijk_min, local_ijk_max, global_ijk_max, coords_interleaved = icoords
        elif mesh_type == dvs.MESHCHUNK_PARALLELEPIPED:
            # Get Tuple
            # origin, dir_vec_i, dir_vec_j, dir_vec_k, local_ijk_max, local_ijk_min, global_ijk_max, ivals, jvals, kvals 
            coords = mesh_chunk.get_coords_parallele()
            origin, dir_vec_i, dir_vec_j, dir_vec_k, local_ijk_max, local_ijk_min, global_ijk_max, ivals, jvals, kvals = coords
            print(" Origin : ", origin)
            print(" DirVecI: ", dir_vec_i)
            print(" DirVecJ: ", dir_vec_j)
            print(" DirVecK: ", dir_vec_k)
            print(" LocalIJKMax : ", local_ijk_max)
            print(" LocalIJKMin : ", local_ijk_min)
            print(" GlobalIJKMax: ", global_ijk_max)

        num_nodal_vars = mesh_chunk.get_num_variables()
        print("\n Num Nodal Var: ", num_nodal_vars)
        for nv in range(num_nodal_vars):
            var = mesh_chunk.get_variable(nv)
            #print(dir(var))
            if isinstance(var, dvs.IVarObject):
                var_loc  = var.get_var_location()
                var_name = var.get_name()
                if var_loc == dvs.LOCATION_NODE:
                    # Get Hash by var_index
                    #nodal_var_hash_size_by_def   = mesh_chunk.get_var_hash(var)
                    #if nodal_var_hash_size_by_def:
                    #    print("Nodal VAR Hash by Def: ", nodal_var_hash_size_by_def)
                    num_values = mesh_chunk.get_variable_data_size(nv)
                    var_values = mesh_chunk.get_variable_data(nv)
                    print(" Var Name: {0}, Nodal values: {1}, Mesh Chunk: {2}".format(var_name, num_values, m))
                    print(" First 10 Values: ")
                    for n in range(10):
                        print("  ", var_values[n])
        # Element Blocks
        num_elem_blocks = mesh_chunk.get_num_element_blocks()
        print("\n Num Element Blocks: ", num_elem_blocks)

        element_block_types = mesh_chunk.get_element_block_types()
        for et in element_block_types:
            elem_block   = mesh_chunk.get_element_block_by_type(et)
            num_elements = 0
            conn_size    = 0
            faces_per_elem_size = 0
            nodes_per_face_size = 0
            indices_size        = 0
            if isinstance(elem_block, dvs.IElemBlockObject):
                match elem_block.get_element_type():
                    case dvs.ELEMTYPE_TETRAHEDRON | dvs.ELEMTYPE_TRIANGLE | dvs.ELEMTYPE_QUADRANGLE | dvs.ELEMTYPE_HEXAHEDRON:    
                        num_elements = elem_block.get_num_elements()
                        connsize     = elem_block.get_connectivity_size()
                        connectivity = elem_block.get_connectivity()
                        print(" Element Type: ", elem_block.get_element_type())
                        print(" Connectivity Size: ", connsize)
                        for s in range(10):
                            print(" ",connectivity[s])
                    case dvs.ELEMTYPE_N_SIDED_POLYGON | dvs.ELEMTYPE_N_SIDED_POLYGON_GHOST:
                        print(" Element Type          : ", elem_block.get_element_type())
                        num_elements = elem_block.get_num_elements()
                        print(" Num Elements          : ", num_elements)
                        
                        polygon_size = elem_block.get_connectivity_polygon_size()
                        nodes_per_polygon_size, indices_size = polygon_size
                        connectivity = elem_block.get_connectivity_polygon()
                        nodes_per_polygon, indices = connectivity
                        print(" Nodes per Polygon Size: ", nodes_per_polygon_size)
                        print(" Polygon Indices Size  : ", indices_size)
                        #print(" Nodes Per Polygon: ")
                        #for np in nodes_per_polygon:
                        #    print("  ", np)
                        #print(" Polygon Indices   : ")
                        #for pi in polygon_indices:
                        #    print("  ", pi)
                    case dvs.ELEMTYPE_CONVEX_POLYHEDRON | dvs.ELEMTYPE_CONVEX_POLYHEDRON_GHOST:
                        num_element = elem_block.get_num_elements()
                        print(" Element Type: ",elem_block.get_element_type()) 
                        print(" Number of elements: ", num_element)
                        # Get connectivity Polyhedral
                        polyhedral_size = elem_block.get_connectivity_polyhedral_size()
                        faces_per_elem_size, nodes_per_face_size, indices_size = polyhedral_size
                        conn_polyhedral = elem_block.get_connectivity_polyhedral()
                        faces_per_elem, nodes_per_face, conn_indices = conn_polyhedral
                        print(" Faces Per Elem Size :",faces_per_elem_size)
                        print(" Nodes Per Face Size :",nodes_per_face_size)
                        print(" Conn Indices Size   :",indices_size)
                        #print(" Faces Per Elem: ")
                        #for fp in faces_per_elem:
                        #    print("  ", fp)
                        #print(" Nodes Per Face: ")
                        #for nf in nodes_per_face:
                        #    print("  ", nf)    
                        #print("  Conn Indices : ")
                        #for ci in conn_indices:
                        #    print("  ", ci)
                    case dvs.ELEMTYPE_STRUCTURED:
                        num_elements   = elem_block.get_num_elements()
                        nodes_per_elem = elem_block.get_nodes_per_element()
                        print(" Structured Element: Type:{0}, NPE:{1}".format(elem_block.get_element_type(), nodes_per_elem))
                    case dvs.ELEMTYPE_UNDEFINED | dvs.ELEMTYPE_UNDEFINED_PARALLELEPIPED | dvs.ELEMTYPE_UNDEFINED_CURVILINEAR:
                        print(" Undefined element type found")
                    case _:
                        print(" Default Element Type")
                        num_elements   = elem_block.get_num_elements()
                        nodes_per_elem = elem_block.get_nodes_per_element()
                        # Get Connectivity List
                        result  = elem_block.get_connectivity()
                        connsize, connectivity = result
                        #print(" Print Connectivity: ")
                        #for i in connectivity:
                        #    print("  ", i)

print("\n-----------------------------------")
print(" Listing All Plot Chunks for Query")
print("-------------------------------------")
num_plot_chunks = query.get_num_plot_chunks()
for np in range(num_plot_chunks):
    plot = query.get_plot_chunk(np)
    if isinstance(plot, dvs.IPlotChunkObject):
        plot_def   = plot.get_object()
        plot_name  = plot_def.get_name()
        time       = plot.get_time()
        rank       = plot.get_rank()
        plot_hash  = plot.get_hash()
        print(" Plot Name: ", plot_name)
        plot_data = plot.get_data()
        x_values, y_values = plot_data
        print(" Plot Hash: ", plot_hash)
        print(" X Values: ")
        for x in x_values:
            print("  ", x)
            print(" Y Values: ")
        for y in y_values:
            print("  ", y)




            
                        


                        


            
                    
    


```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)