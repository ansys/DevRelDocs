# File mainpage.md

<a id="mainpage_8md"></a>

![][Markdown]

## Source


```markdown
Introduction {#mainpage}
===

The Postprocessing tools can be used to leverage various EnSight components in other applications. These
include gRPC, vnc, shared memory and in-situ data interfaces.
Additionally, some of these APIs can be used outside of the EnSight
application entirely.  These pages serve as the documentation for
the various APIs that were generated as part of this project.

* @subpage dvs_main API for high-performance visualization file and in-situ I/O
* @subpage grpc The EnSight client gRPC interface
* @subpage shmem Memory mapped file (shared memory) image transport system
* @subpage gltf GLTFWriter interface used to export AVZ/GLTF files from C++ applications
* @subpage userd LibUserd interface (Preliminary: 2025 R1 release)

@defgroup grpc EnSight gRPC Interface
@brief The gRPC server API exposed by the EnSight client

===
The EnSight client supports a gRPC based rpc system that makes it possible to access
various aspects of the EnSight client in a service-orientated fashion. This functionality
is enabled at EnSight launch via the -grpc_server {port} command line option.\n 
There is a raw gRPC interface accessed via the ensight.proto and ensight_fluent.proto files and
a higher-level Python interface in the ensight_rpc module named ensight_grpc.py.  Details
on how to leverage this interface cen be found in [EnSight Command and Control API](@ref ensightprotobuf.md).

@defgroup gltf GLTFWriter Interface
@brief A C++ API to write AVZ and GLTF format geometry files.

===
The GLTFWriter API allows for an application to be able to export geometric scenes in several
formats.  These scenes can be static or time varying. The lines, triangles and spheres are
captured into "AVZ" or glTF 2.0 format files.  The AVZ format is basically an extended
form of the glTF 1.0 format that includes support for time varying data, variable
transformations and 2D overlay options like annotations and palettes.  It also supports
"meta" entities like spheres. 

```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)