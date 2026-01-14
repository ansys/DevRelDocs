# File dvs\_data\_model.md

<a id="dvs__data__model_8md"></a>

![][Markdown]

## Source


```markdown
@defgroup group_dvs_data_model DVS Data Model
@ingroup dvs_main
@brief Description of the DVS Data Model
@ingroup group_dvs_data_model


A conceptual view of the DVS Data Model is below. A @ref dvs_uri points to a cache of data which is composed of 1 or many datasets. These datasets contain a set of object (part, plot, variable) definitions and a set of timesteps. Timesteps are then composed of blobs of data based on their associated rank, chunk, and object. These blobs of data represent the coordinates, connectivity, plots, variables etc.

\image{inline} html dvs_data_model_concept.png "DVS Data Model"


### Table of Contents
***
- @ref dvs_ranks_chunks
- @ref dvs_elements

***

***
@subsection dvs_ranks_chunks DVS Ranks and Chunks

The DVS api separates mesh data for parallelism and scalability into "ranks" and "chunks".

A very simplistic 2D view is in the diagram below. The general idea is that a rank is a sub-section of the mesh that is handled by a single process (or MPI rank) and then if needed a chunk is a sub-portion of the rank's mesh which is being handled by an internal thread. The main difference between a rank and a chunk conceptually is that we generally want overlapping ghost elements between rank partitions and we don't expect those between chunks. We need ghost elements between ranks so that during postprocessing cross server communication isn't needed.

If a rank is surrounded by ghost elements on boundaries between ranks then postprocessors can dynamically decide on the load distribution of ranks across servers without the need for cross server communication. For small numbers of elements (< 10 mil) the data can generally be viewed with one EnSight server so ghost elements explicitly needed for smaller meshes.

\image{inline} html dvs_ranks_chunks.png "DVS Ranks and Chunks"

***
@subsection dvs_elements DVS Zoo Element Definitions

The zoo element definition that DVS prefers is below.

**Note:** If elements are not stored in this way postprocessors such as EnSight will not be able to read the data correctly.

\image{inline} html dvs_element_types.png "DVS Zoo Element Types"
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)