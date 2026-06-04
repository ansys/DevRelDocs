# Introduction

<a id="dvs__main"></a>

API for high-performance postprocessing visualization.

The Dynamic Visualization Store (DVS) API is a parallel capable, high performance API for postprocessing data. This can be used to implement one API in a solver to send data to a postprocessor in parallel (in this case EnSight) while the solver is running.

High level features:

* In-situ investigation of data from solver while solver is running.
* Auto reconnect if postprocessor is shutdown and restarted during simulation.
* Scalable design allows for distrubuted parallel solver <-> distributed parallel postprocessor if needed (not required).
* Data can be cached if needed. Adding sources behind the API so no change to solver code.
* Does not need postprocessor to be running to cache data
* Read API to interrogate caches.
* Out of the box C/C++/Python APIs for Windows/Linux


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)