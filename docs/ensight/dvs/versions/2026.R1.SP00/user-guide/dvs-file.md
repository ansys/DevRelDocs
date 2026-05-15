# DVS Files

<a id="dvs__file"></a>

Description of DVS files used to load datasets created by the DVS project.

A DVS file (`.dvs` extension) is used to load the dvs_cache. It contains a [Cache URIs](./dvs-uri.md#cache-uris) which specifies the location of the cache and filters on what to load from it. It also can contain [Server Options](./dvs-server.md#server-options) for the dvs_server such as port ranges to use for incoming connections, see [Server Options](./dvs-server.md#server-options) for more information.

 In a future release we will support specifying multiple DVS caches in this file to allow fusing data from multiple sources into one.

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)