# File dvs\_reader.md

<a id="dvs__reader_8md"></a>

![][Markdown]

## Source


```markdown
@defgroup dvs_reader DVS Reader
@ingroup dvs_main

@brief DVS Reader API can be used to read data from a cache

The DVS Reader API is an external API to allow applications to read data from a DVS Cache

The API is built around using chained queries and filtering (@ref dvs_filtering_overview) to select what data you are interested in and then iterate over that data. You start with a high level DVS::IQuery, add filters based on what you are interesting in looking at and then make calls to iterate over the data. The filtering mechanism is used to let you iterate over the data in different axis. Eg. A single part over all of time or all parts over a specific timestep. The filtering also allows for letting you set your parallelism model. I.E. if the data was written with 3 DVS servers you can easily tell it if you want to process all data at once (eg. 1 postprocessing processes) or possibly round robin them (eg. 2 postprocessing processes). This should be clearer in the examples @ref dvs_reader_examples.

============
### Table of Contents
***
- @ref dvs_reader_data_model
- @ref dvs_reader_examples

***

***
@subsection dvs_reader_data_model DVS Reader Data Model

A conceptual view of the DVS Reader data model is below.

\image{inline} html dvs_reader_data_model_concept.png "DVS Reader Data Model"

For a high level view of the overall DVS Data model see @ref dvs_data_model. A high level summary is that you start with a DVS::IQuery object, point it towards a DVS URI, interrogate the data model, set filters, and then begin iterating over DVS::IPlotChunk, DVS::IMeshChunk, and DVS::IElementBlock objects. The DVS::IPlotChunk and DVS::IMeshChunk objects each refer to a unique tuple of {Time,Object,Rank,Chunk} where Object is based on the Part or Plot they refer to.

DVS::IPlotChunk objects shouldn't need to be split into rank/chunks. Currently EnSight expects to only see one DVS::IPlotChunk per time over all ranks/chunks.

DVS::IMeshChunk is a subportion of the mesh and contains methods to get coordinates of the mesh for this chunk and nodal variable data. The elemental connectivity data for the current DVS::IMeshChunk is stored on an DVS::IElementBlock for each element type.

DVS::IElementBlock contains the connectivity for unstructured meshes (Structured mesh connectivity is implied) and elemental variable data.

All coordinates, connectivity, and variables also contain a hash which can be used for comparison so see if the internal data is different.

***
@section dvs_reader_getting_started Getting started with the DVS Reader API

The latest stable code and binaries and can be found in [Artifactory](http://canartifactory.ansys.com:8080/artifactory/webapp/#/artifacts/browse/tree/General/CEI_Upload/dvs). They can also be found in the EnSight install under: CEI/ensightXXX/src/readers/dvs if pulling from artifactory make sure to grab the version which matches your EnSight install if using them together.

The binaries to statically link against can be found under either linux_2.6_64 for Linux and win64 for Windows. For the DVS Reader API you will need the libdvsreader.lib/dll or libdvsreader.so depending on the platform.

All the headers needed for the DVS Reader API are under the include directory. The top level header being the dvs_query_interface.h which includes the DVS::IQuery interface.

For examples of using the API refer to @ref dvs_reader_examples.
***
@subsection dvs_reader_examples DVS Reader Examples

@subsection dvs_example_hello_world Hello World Example
Simple application to open a cache and iterate over all of the high level information it contains (datasets, timesteps, objects etc.)

\code{.cpp}
#include "dvs_query_interface.h"
#include "logger_verbose.h"
#include <functional>
#include <memory>

static void logging_function(void* user_data, const char* message)
{
    fprintf(stdout, message);
}

int main(int argc, char** argv)
{
    std::unique_ptr<DVS::IQuery, std::function<void(DVS::IQuery*)>> dataset_query(DVS::CREATE_QUERY_INSTANCE(),
                                                                                  [](DVS::IQuery* p){p->release();});
    dataset_query->set_logger(new DVS::LoggerVerbose(nullptr, dvs_verbosity::DVS_VERBOSE, &logging_function));
    //Add a cache uri to open
    auto err = dataset_query->add_uri("hdf5://localhost/D:/my/cache");
    if (DVS_NONE != err) {
        return err;
    }

    //Get all of the datasets in the cache
    uint32_t num_datasets = 0;
    err = dataset_query->get_num_datasets(num_datasets);
    if (DVS_NONE != err) {
        fprintf (stdout, "Error getting number of datasets\n");
        return err;
    }

    for (uint32_t index = 0; index < num_datasets; index++)
    {
        DVS::IDataset* dataset = dataset_query->get_dataset(index);
    }

    //Get all of the available timesteps
    uint32_t num_timesteps = 0;
    err = dataset_query->get_num_timesteps(num_timesteps);
    if (DVS_NONE != err) {
        fprintf(stdout, "Error getting number of timesteps\n");
        return err;
    }
    std::vector<float> timesteps(num_timesteps, 0.f);
    dataset_query->get_timesteps(timesteps.data());

    //Get all of the ranks
    uint32_t num_ranks = 0;
    err = dataset_query->get_num_ranks(num_ranks);
    if (DVS_NONE != err) {
        fprintf(stdout, "Error getting number of ranks\n");
        return err;
    }
    std::vector<uint32_t> global_ranks(num_ranks, 0);
    dataset_query->get_ranks(global_ranks.data());

    //Get all of the chunks for every rank
    uint32_t num_chunks_per_rank = 0;
    err = dataset_query->get_num_chunks_per_rank(num_chunks_per_rank);
    if (DVS_NONE != err) {
        fprintf(stdout, "Error getting number of chunks per rank\n");
        return err;
    }
    std::vector<uint32_t> global_chunk_max(num_chunks_per_rank, 0);
    dataset_query->get_chunks_per_rank(global_chunk_max.data());

    //Get all of the parts
    uint32_t num_parts = 0;
    err = dataset_query->get_num_parts(num_parts);
    if (DVS_NONE != err) {
        fprintf(stdout, "Error getting number of parts\n");
        return err;
    }

    for (uint32_t part_index = 0; part_index < num_parts; part_index++) {
        DVS::IObject* part = dataset_query->get_part(part_index);
    }

    //Get all the plots
    uint32_t num_plots = 0;
    err = dataset_query->get_num_plots(num_plots);
    if (DVS_NONE != err) {
        fprintf(stdout, "Error getting number of plots\n");
        return err;
    }

    for (uint32_t plot_index = 0; plot_index < num_plots; plot_index++)
    {
        DVS::IObject* plot = dataset_query->get_plot(plot_index);
    }

    //Get all the variables
    uint32_t num_vars = 0;
    err = dataset_query->get_num_variables(num_vars);
    if (DVS_NONE != err) {
        fprintf(stdout, "Error getting number of vars\n");
        return err;
    }
    for (uint32_t var_index = 0; var_index < num_vars; var_index++)
    {
        DVS::IVar* var = dataset_query->get_variable(var_index);
    }
    return 0;
}

\endcode

@subsection dvs_example_using_filters Using Filters Example

This is a simple example of filtering down to a specific dataset and part and then iterating over the mesh chunks. Note that since we
didn't filter based on time we will find mesh chunks across all of time and will want to look at the time of each mesh chunk returned.

\code{.cpp}

int main(int argc, char** argv)
{
    std::unique_ptr<DVS::IQuery, std::function<void(DVS::IQuery*)>> dataset_query(DVS::CREATE_QUERY_INSTANCE(),
                                                                                  [](DVS::IQuery* p){p->release();});
    dataset_query->set_logger(new DVS::LoggerVerbose(nullptr, dvs_verbosity::DVS_VERBOSE, &logging_function));
    //Add a cache uri to open
    auto err = dataset_query->add_uri("hdf5://localhost/D:/my/cache");
    if (DVS_NONE != err) {
        return err;
    }

    //Down select to only Parts name Part1 in dataset Dataset1
    std::string filter = "/dataset.name/eq/Dataset1//and/part.name/eq/Part1";

    //child_query will be released when the parent query is released. You can release it
    //early however. If a query has a child it can no longer be modified until the children
    //are all released.
    DVS::IQuery* child_query = dataset_query->filter(filter);
    if (!child_query) {
        fprintf(stdout, "Error creating child query\n");
    }

    uint32_t num_mesh_chunks = 0;
    err = child_query->get_num_mesh_chunks(num_mesh_chunks);
    if (DVS_NONE != err) {
        return err;
    }
    for (uint32_t index = 0; index < num_mesh_chunks; index++) {
        DVS::IMeshChunk* current_chunk = child_query->get_mesh_chunk(index);
    }

    return 0;
}

\endcode

@subsection dvs_example_parallelism Setting up for parallel reads of cache

This is an example of querying a cache for how many servers it was written with and round robining the cache across parallel readers.

**Server 1 of 2**
\code{.cpp}

int main(int argc, char** argv)
{
    std::string cache_uri = hdf5://localhost/D:/my/cache;
    uint32_t num_servers = 0;
    {
        DVS::IQuery* server_query = DVS::CREATE_QUERY_INSTANCE();
        auto err = server_query->get_num_servers(cache, num_servers);
        if (err != DVS_NONE) {
            //There might be an error if the cache uri is invalid or
            //if there is a problem with the cache
            fprintf(stdout, "Error getting number of servers\n");
            return err;
        }
        server_query->release();
    }

    if (num_servers == 0 ) {
        fprintf(stdout, "Number of servers should be >= 1);
        return -1;
    }
    else if (num_server == 1) {
        //This isn't a problem except the round robining won't work in this example
        //since the second parallel reader won't get any data.
        fprintf(stdout, "Warning, cache was written with only one server\n");
    }

    std::unique_ptr<DVS::IQuery, std::function<void(DVS::IQuery*)>> query(DVS::CREATE_QUERY_INSTANCE(),
                                                                                  [](DVS::IQuery* p){p->release();});
    query->set_logger(new DVS::LoggerVerbose(nullptr, dvs_verbosity::DVS_VERBOSE, &logging_function));

    //Add a cache uri to open
    auto err = query->add_uri("hdf5://localhost/D:/my/cache");
    if (DVS_NONE != err) {
        return err;
    }
    //reader_number and num_readers should be programatically determined, not hardcoded like this
    uint32_t reader_number = 0;
    uint32_t num_readers = 2;
    //This will round robin the cache folders across readers
    //Setting num_readers = 0 tells the query to read the folder corresponding to reader_number and
    //no others.
    query->set_server_mod(reader_number, num_readers);

    //Get all of the parts
    uint32_t num_parts = 0;
    err = dataset_query->get_num_parts(num_parts);
    if (DVS_NONE != err) {
        fprintf(stdout, "Error getting number of parts\n");
        return err;
    }

    for (uint32_t part_index = 0; part_index < num_parts; part_index++) {
        DVS::IObject* part = dataset_query->get_part(part_index);
    }

    return 0;
}

\endcode

**Server 2 of 2**
\code{.cpp}

int main(int argc, char** argv)
{
    std::string cache_uri = hdf5://localhost/D:/my/cache;
    uint32_t num_servers = 0;
    {
        DVS::IQuery* server_query = DVS::CREATE_QUERY_INSTANCE();
        auto err = server_query->get_num_servers(cache, num_servers);
        if (err != DVS_NONE) {
            //There might be an error if the cache uri is invalid or
            //if there is a problem with the cache
            fprintf(stdout, "Error getting number of servers\n");
            return err;
        }
        server_query->release();
    }

    if (num_servers == 0 ) {
        fprintf(stdout, "Number of servers should be >= 1);
        return -1;
    }
    else if (num_server == 1) {
        //This isn't a problem except the round robining won't work in this example
        //since the second parallel reader won't get any data.
        fprintf(stdout, "Warning, cache was written with only one server\n");
    }

    std::unique_ptr<DVS::IQuery, std::function<void(DVS::IQuery*)>> query(DVS::CREATE_QUERY_INSTANCE(),
                                                                                  [](DVS::IQuery* p){p->release();});
    query->set_logger(new DVS::LoggerVerbose(nullptr, dvs_verbosity::DVS_VERBOSE, &logging_function));

    //Add a cache uri to open
    auto err = query->add_uri("hdf5://localhost/D:/my/cache");
    if (DVS_NONE != err) {
        return err;
    }
    //reader_number and num_readers should be programatically determined, not hardcoded like this
    uint32_t reader_number = 1;
    uint32_t num_readers = 2;
    //This will round robin the cache folders across readers
    //Setting num_readers = 0 tells the query to read the folder corresponding to reader_number and
    //no others.
    query->set_server_mod(reader_number, num_readers);

    //Get all of the parts
    uint32_t num_parts = 0;
    err = dataset_query->get_num_parts(num_parts);
    if (DVS_NONE != err) {
        fprintf(stdout, "Error getting number of parts\n");
        return err;
    }

    for (uint32_t part_index = 0; part_index < num_parts; part_index++) {
        DVS::IObject* part = dataset_query->get_part(part_index);
    }

    return 0;
}

\endcode
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)