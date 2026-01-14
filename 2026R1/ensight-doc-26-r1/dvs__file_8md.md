# File dvs\_file.md

<a id="dvs__file_8md"></a>

![][Markdown]

## Source


```markdown
@defgroup group_dvs_file DVS Files
@ingroup dvs_main
@brief Description of DVS files used to load datasets created by the DVS project
@ingroup group_dvs_file

***
A DVS file (.dvs extension) is used to load the @ref dvs_cache. It contains a @ref dvs_cache_uri which specifies the location of the cache and filters on what to load from it. It also can contain @ref dvs_server_options for the @ref dvs_server such as port ranges to use for incoming connections, see @ref dvs_server_options for more information.

<br>
In a future release we will support specifying multiple DVS caches in this file to allow fusing data from multiple sources into one.
***


```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)