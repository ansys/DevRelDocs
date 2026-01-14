# Structure dvs\_part\_info

<a id="structdvs__part__info"></a>

![][C++]
![][public]


Struct holding information for a part's definition.



## Members

* [\_chunking](structdvs__part__info.md#structdvs__part__info_1af688078624a42e9ab53d3c194e2861c3)
* [\_id](structdvs__part__info.md#structdvs__part__info_1ab4e6fd830f27fdfa60c7bf6c2c137695)
* [\_metadata\_keys](structdvs__part__info.md#structdvs__part__info_1aef3ab830a0bfcab49d9cbed978e315c2)
* [\_metadata\_num\_pairs](structdvs__part__info.md#structdvs__part__info_1adb36557a49efa5373a258141dd472385)
* [\_metadata\_vals](structdvs__part__info.md#structdvs__part__info_1a59c04a77c663b68008a1f69b62574337)
* [\_name](structdvs__part__info.md#structdvs__part__info_1aa3ef86ed8620b0419f05e4e255dd01fb)
* [\_structured](structdvs__part__info.md#structdvs__part__info_1ab458569530b84c8a2403b2610af98989)

## Public attributes

<a id="structdvs__part__info_1ab4e6fd830f27fdfa60c7bf6c2c137695"></a>
### Variable \_id

![][public]



```cpp
uint32_t dvs_part_info::_id
```


Unique identifier for part, MUST BE > 0.





**Type**: uint32_t

<a id="structdvs__part__info_1aa3ef86ed8620b0419f05e4e255dd01fb"></a>
### Variable \_name

![][public]



```cpp
char* dvs_part_info::_name
```


UTF-8 Compatible name of part [null terminated], max name length visible in GUI == 79, must be unique from other part names.





**Type**: char *

<a id="structdvs__part__info_1ab458569530b84c8a2403b2610af98989"></a>
### Variable \_structured

![][public]



```cpp
uint8_t dvs_part_info::_structured
```


Structured flag. 0 if unstructured, 1 if structured.





**Type**: uint8_t

<a id="structdvs__part__info_1af688078624a42e9ab53d3c194e2861c3"></a>
### Variable \_chunking

![][public]



```cpp
uint8_t dvs_part_info::_chunking
```


1 if using chunks





**Type**: uint8_t

<a id="structdvs__part__info_1adb36557a49efa5373a258141dd472385"></a>
### Variable \_metadata\_num\_pairs

![][public]



```cpp
uint32_t dvs_part_info::_metadata_num_pairs
```


Number of arrays in _metadata_keys/_metadata_vals.





**Type**: uint32_t

<a id="structdvs__part__info_1aef3ab830a0bfcab49d9cbed978e315c2"></a>
### Variable \_metadata\_keys

![][public]



```cpp
char** dvs_part_info::_metadata_keys
```


UTF-8 Compatible key , each array should be null terminated.





**Type**: char **

<a id="structdvs__part__info_1a59c04a77c663b68008a1f69b62574337"></a>
### Variable \_metadata\_vals

![][public]



```cpp
char** dvs_part_info::_metadata_vals
```


UTF-8 Compatible value, each array should be null terminate.





**Type**: char **

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)