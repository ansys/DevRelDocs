# Dynamic Visualization Store

<a id="group__dvs__main"></a>

API for high-performance postprocessing visualization.

The Dynamic Visualization Store (DVS) API is a parallel capable, high performance API for postprocessing data. This can be used to implement one API in a solver to send data to a postprocessor in parallel (in this case EnSight) while the solver is running<br/>






High Level Features:






* In-situ investigation of data from solver while solver is running.
* Auto reconnect if postprocessor is shutdown and restarted during simulation.



* Scalable design allows for distrubuted parallel solver <-> distributed parallel postprocessor if needed (not required).

* Data can be cached if needed. Adding sources behind the API so no change to solver code.

* Does not need postprocessor to be running to cache data

* Read API to interrogate caches.

* Out of the box C/C++/Python APIs for Windows/Linux

## Submodules

* [Changelog](group__dvs__changelog.md#group__dvs__changelog)
* [Current Limitations](group__dvs__limitations.md#group__dvs__limitations)
* [Get DVS](group__dvs__get.md#group__dvs__get)
* [Available APIs](group__dvs__apis.md#group__dvs__apis)
* [Getting started](group__dvs__get__started.md#group__dvs__get__started)
* [DVS URIs](group__group__dvs__uri.md#group__group__dvs__uri)
* [DVS Files](group__group__dvs__file.md#group__group__dvs__file)
* [DVS Filtering](group__group__dvs__filtering.md#group__group__dvs__filtering)
* [DVS Cache](group__group__dvs__cache.md#group__group__dvs__cache)
* [DVS Features](group__group__dvs__features.md#group__group__dvs__features)
* [DVS Reader](group__dvs__reader.md#group__dvs__reader)
* [DVS Data Model](group__group__dvs__data__model.md#group__group__dvs__data__model)
* [DVS Metadata](group__group__dvs__metadata.md#group__group__dvs__metadata)
* [DVS Server](group__group__dvs__server.md#group__group__dvs__server)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)