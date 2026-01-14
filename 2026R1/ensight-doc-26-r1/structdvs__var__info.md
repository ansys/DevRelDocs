# Structure dvs\_var\_info

<a id="structdvs__var__info"></a>

![][C++]
![][public]


Struct holding information for a variable's definiton.



## Members

* [\_id](structdvs__var__info.md#structdvs__var__info_1abcef03f7b1e419ae39c7511de2385a9b)
* [\_location](structdvs__var__info.md#structdvs__var__info_1abfd6a4461939e798ebdc5d6714a4558f)
* [\_metadata\_keys](structdvs__var__info.md#structdvs__var__info_1a9c656726edeeb5c0cf5b9a42f870b3a2)
* [\_metadata\_num\_pairs](structdvs__var__info.md#structdvs__var__info_1a9f99fd8ad9d004f44939c830747ebfc8)
* [\_metadata\_vals](structdvs__var__info.md#structdvs__var__info_1abe0afbff61a368336c7750c831a3c056)
* [\_name](structdvs__var__info.md#structdvs__var__info_1ad1b4aeadeb75d6ab2a446fef37f11d0a)
* [\_type](structdvs__var__info.md#structdvs__var__info_1a721f90cd12b7e98cf0d2fcf99ed9c7a9)
* [\_unit](structdvs__var__info.md#structdvs__var__info_1a3d7cdb8a063eaf6c94f95f3b589c8624)
* [\_unit\_label](structdvs__var__info.md#structdvs__var__info_1a262ba1165d1929418e03a2a250774525)

## Public attributes

<a id="structdvs__var__info_1abcef03f7b1e419ae39c7511de2385a9b"></a>
### Variable \_id

![][public]



```cpp
uint32_t dvs_var_info::_id
```


Unique id for variable.





**Type**: uint32_t

<a id="structdvs__var__info_1ad1b4aeadeb75d6ab2a446fef37f11d0a"></a>
### Variable \_name

![][public]



```cpp
char* dvs_var_info::_name
```


UTF-8 Compatible name of variable [null terminated], max name length visible in the GUI == 49, must be unique from other variable names.





**Type**: char *

<a id="structdvs__var__info_1a721f90cd12b7e98cf0d2fcf99ed9c7a9"></a>
### Variable \_type

![][public]



```cpp
enum dvs_var_type dvs_var_info::_type
```


Type of variable, see [dvs\_var\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0) enum ([dynamic\_visualization\_store\_enums.h](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h)).





**Type**: enum [dvs\_var\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0)

<a id="structdvs__var__info_1abfd6a4461939e798ebdc5d6714a4558f"></a>
### Variable \_location

![][public]



```cpp
enum dvs_var_location dvs_var_info::_location
```


Location of variable (case/part/element/node), see [dvs\_var\_location](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af4f0eba512eff253854b44d7ce078491) enum ([dynamic\_visualization\_store\_enums.h](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h)).





**Type**: enum [dvs\_var\_location](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af4f0eba512eff253854b44d7ce078491)

<a id="structdvs__var__info_1a3d7cdb8a063eaf6c94f95f3b589c8624"></a>
### Variable \_unit

![][public]



```cpp
char* dvs_var_info::_unit
```


UTF-8 Compatible unit type, see: [https://nexusdemo.ensight.com/docs/python/html/ENS_UNITSSchema.html](https://nexusdemo.ensight.com/docs/python/html/ENS_UNITSSchema.html).





**Type**: char *

<a id="structdvs__var__info_1a262ba1165d1929418e03a2a250774525"></a>
### Variable \_unit\_label

![][public]



```cpp
char* dvs_var_info::_unit_label
```


UTF-8 Compatible label, see: [https://nexusdemo.ensight.com/docs/python/html/ENS_UNITSSchema.html](https://nexusdemo.ensight.com/docs/python/html/ENS_UNITSSchema.html).





**Type**: char *

<a id="structdvs__var__info_1a9f99fd8ad9d004f44939c830747ebfc8"></a>
### Variable \_metadata\_num\_pairs

![][public]



```cpp
uint32_t dvs_var_info::_metadata_num_pairs
```


Number of arrays in _metadata_keys/_metadata_vals.





**Type**: uint32_t

<a id="structdvs__var__info_1a9c656726edeeb5c0cf5b9a42f870b3a2"></a>
### Variable \_metadata\_keys

![][public]



```cpp
char** dvs_var_info::_metadata_keys
```


UTF-8 Compatible key , each array should be null terminated.





**Type**: char **

<a id="structdvs__var__info_1abe0afbff61a368336c7750c831a3c056"></a>
### Variable \_metadata\_vals

![][public]



```cpp
char** dvs_var_info::_metadata_vals
```


UTF-8 Compatible value, each array should be null terminated.





**Type**: char **

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)