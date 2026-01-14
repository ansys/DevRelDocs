# Current Limitations

<a id="group__dvs__limitations"></a>

A list of limitations for each DVS release.

---







### Version 2022 R1







* Plots
* If using plots and sending data in parallel all plot data needs to be sent to Server 0. This requirement will be removed in future iterations.



* Caches
* The number of ranks being used needs to stay consistent and consistently connect to the same data servers when writing and appending data to a cache. I.E. You start writing a dataset in parallel with 5 nodes/ranks to 2 dynamic connections/servers. The first 3 nodes connect to server 0 and the second 2 nodes connect to server 1. You send 2 timesteps/updates to the API and then shut the DVS servers down. If you start them up again to write another timestep then you need to connect the same number of nodes/ranks to the servers in the same configuration to write another update. This requirement will be removed in future iterations and the number of nodes/ranks can change per timestep once calling a reinitialize method or restarting the DVS servers.

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)