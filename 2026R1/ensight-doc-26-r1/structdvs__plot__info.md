# Structure dvs\_plot\_info

<a id="structdvs__plot__info"></a>

![][C++]
![][public]


Struct holding information for a plot's definition.



## Members

* [\_id](structdvs__plot__info.md#structdvs__plot__info_1a7721b22bb882c90e84d68979a748daf3)
* [\_metadata\_keys](structdvs__plot__info.md#structdvs__plot__info_1a6182c10a62849ada795123fd6707d612)
* [\_metadata\_num\_pairs](structdvs__plot__info.md#structdvs__plot__info_1a2d0bc2ca11580a27d9a8637a848d6e14)
* [\_metadata\_vals](structdvs__plot__info.md#structdvs__plot__info_1a467b2e79ceb431c9358423647de59699)
* [\_name](structdvs__plot__info.md#structdvs__plot__info_1a00c93696be3b5f9f3c2288daf9975f19)
* [\_x\_axis\_title](structdvs__plot__info.md#structdvs__plot__info_1a6cdeb2ede603f7aa96c515e2691e11a0)
* [\_x\_axis\_units](structdvs__plot__info.md#structdvs__plot__info_1aac4a7335b4bcda68808eea67e280346b)
* [\_y\_axis\_title](structdvs__plot__info.md#structdvs__plot__info_1aae1ce6d97a55e3da272f552508f61e11)
* [\_y\_axis\_units](structdvs__plot__info.md#structdvs__plot__info_1a368da9b3c7dd1b8b8b37daed5d97554d)

## Public attributes

<a id="structdvs__plot__info_1a7721b22bb882c90e84d68979a748daf3"></a>
### Variable \_id

![][public]



```cpp
uint32_t dvs_plot_info::_id
```


Unique id for plot.





**Type**: uint32_t

<a id="structdvs__plot__info_1a00c93696be3b5f9f3c2288daf9975f19"></a>
### Variable \_name

![][public]



```cpp
char* dvs_plot_info::_name
```


UTF-8 Compatible name for plot, must be unique from other plot names.





**Type**: char *

<a id="structdvs__plot__info_1a6cdeb2ede603f7aa96c515e2691e11a0"></a>
### Variable \_x\_axis\_title

![][public]



```cpp
char* dvs_plot_info::_x_axis_title
```


UTF-8 Compatible x axis title.





**Type**: char *

<a id="structdvs__plot__info_1aac4a7335b4bcda68808eea67e280346b"></a>
### Variable \_x\_axis\_units

![][public]



```cpp
char* dvs_plot_info::_x_axis_units
```


///< UTF-8 Compatible unit type, see: [https://nexusdemo.ensight.com/docs/python/html/ENS_UNITSSchema.html](https://nexusdemo.ensight.com/docs/python/html/ENS_UNITSSchema.html)





**Type**: char *

<a id="structdvs__plot__info_1aae1ce6d97a55e3da272f552508f61e11"></a>
### Variable \_y\_axis\_title

![][public]



```cpp
char* dvs_plot_info::_y_axis_title
```


UTF-8 Compatible y axis title.





**Type**: char *

<a id="structdvs__plot__info_1a368da9b3c7dd1b8b8b37daed5d97554d"></a>
### Variable \_y\_axis\_units

![][public]



```cpp
char* dvs_plot_info::_y_axis_units
```


///< UTF-8 Compatible unit type, see: [https://nexusdemo.ensight.com/docs/python/html/ENS_UNITSSchema.html](https://nexusdemo.ensight.com/docs/python/html/ENS_UNITSSchema.html)





**Type**: char *

<a id="structdvs__plot__info_1a2d0bc2ca11580a27d9a8637a848d6e14"></a>
### Variable \_metadata\_num\_pairs

![][public]



```cpp
uint32_t dvs_plot_info::_metadata_num_pairs
```


Number of arrays in _metadata_keys/_metadata_vals.





**Type**: uint32_t

<a id="structdvs__plot__info_1a6182c10a62849ada795123fd6707d612"></a>
### Variable \_metadata\_keys

![][public]



```cpp
char** dvs_plot_info::_metadata_keys
```


UTF-8 Compatible key , each array should be null terminated.





**Type**: char **

<a id="structdvs__plot__info_1a467b2e79ceb431c9358423647de59699"></a>
### Variable \_metadata\_vals

![][public]



```cpp
char** dvs_plot_info::_metadata_vals
```


UTF-8 Compatible value, each array should be null terminated.





**Type**: char **

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)