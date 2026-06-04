# DVS Metadata

<a id="dvs__metadata"></a>

Description of supported metadata for the DVS API.

## DVS Dataset Metadata

The DVS API supports writing dataset metadata via the [dvs\_add\_metadata()](../reference/files/dynamic__visualization__store__api_8h.md#function-dvs_add_metadata) or [DVS::IClient::add\_metadata()](../reference/classes/class_d_v_s_1_1_i_client.md#class-dvsiclient) methods for the C/C++ API (similarly named methods for the Python API). This must be done during the initialization step between `begin_init` and `end_init`.

### Supported EnSight Dataset Metadata

The EnSight DVS reader reserves specific metadata key/value pairs for specific operations within EnSight. Below is a list of currently supported tags.

| KEY | VALUE/DESCRIPTION |
| --- | --- |
| `_DVS::REMOVE_ELEMENT_VAR` | The name of the variable definition being used to filter elements, see [EnSight DVS Element Filtering](#ensight-dvs-element-filtering) |
| `_DVS::REMOVE_ELEMENT_FILTER` | The logical equation to use when filtering elements based on a variable's value, see [EnSight DVS Element Filtering](#ensight-dvs-element-filtering) |

### EnSight DVS Element Filtering

EnSight will automatically filter out elements based on a scalar variable value if the metadata tags are set on a dataset. To do this you first set `_DVS::REMOVE_ELEMENT_VAR` to the name of the variable definition that will be used and then set `_DVS::REMOVE_ELEMENT_FILTER` to the filtering equation. The filtering equation follows the standard format for [Query Stanzas](./dvs-filtering.md#query-stanzas). There are some limitations however. Element filtering only works with scalar variables and the object/attribute must be `var.value`. It also only supports the operators `gt` (>), `lt` (<), `eq` (==), and `neq` (!=). Lastly it only works for a max of 2 chained query stanzas. A few examples should help this make sense.

### Example 1

A user would like to filter out elements if the value of `my_filter_var` is equal to `1.1` or `1.2`.

| KEY | VALUE |
| --- | --- |
| `_DVS::REMOVE_ELEMENT_VAR` | `my_filter_var` |
| `_DVS::REMOVE_ELEMENT_FILTER` | `/var.value/eq/1.1//or/var.value/eq/1.2` |

### Example 2

A user would like to filter out elements based on the variable `pressure` if they are above the threshold of `2.0` and below the threshold of `15.4`.

| KEY | VALUE |
| --- | --- |
| `_DVS::REMOVE_ELEMENT_VAR` | `pressure` |
| `_DVS::REMOVE_ELEMENT_FILTER` | `/var.value/gt/2.0//and/var.value/lt/15.4` |

### Example 3

A user would like to filter out elements based on the variable `delete_element` if the value is not equal to `1.0`.

| KEY | VALUE |
| --- | --- |
| `_DVS::REMOVE_ELEMENT_VAR` | `delete_element` |
| `_DVS::REMOVE_ELEMENT_FILTER` | `/var.value/neq/1.0` |

## DVS Part Metadata

The DVS API supports writing part metadata via [dvs\_add\_part\_info()](../reference/files/dynamic__visualization__store__api_8h.md#function-dvs_add_part_info) or [DVS::IClient::add\_part\_info()](../reference/classes/class_d_v_s_1_1_i_client.md#function-add_part_info) methods for the C/C++ API through the [dvs\_part\_info::\_metadata\_keys](../reference/structures/structdvs__part__info.md#variable-_metadata_keys) and [dvs\_part\_info::\_metadata\_vals](../reference/structures/structdvs__part__info.md#variable-_metadata_vals). The Python API method is dvs_add_part_info and metadata is passed via the tags dictionary on an object.

### Supported EnSight Part Metadata


| KEY | VALUE |
| --- | --- |
| `_DVS::PATHNAME` | Used to setup groups in the user interface. eg. `My\|Group` would create 2 group levels (My->Group) and put the part under the "Group" group. |
| `_DVS::OBJATTR` | See https://nexusdemo.ensight.com/docs/python/html/Python.html?ENS_OBJATTRSchema.html |
| `_DVS::KIND` | Used to set part kind. eg. `Inlet` |
| `_DVS::NO_AUTOLOAD` | Set to anything to not autoload the part when EnSight loads the dataset. Part must be manually loaded. |

## DVS Plot Metadata

The DVS API supports writing plot metadata via [dvs\_add\_plot\_info()](../reference/files/dynamic__visualization__store__api_8h.md#function-dvs_add_plot_info) or [DVS::IClient::add\_plot\_info()](../reference/classes/class_d_v_s_1_1_i_client.md#function-add_plot_info) methods for the C/C++ API through the [dvs\_plot\_info::\_metadata\_keys](../reference/structures/structdvs__plot__info.md#variable-_metadata_keys) and [dvs\_plot\_info::\_metadata\_vals](../reference/structures/structdvs__plot__info.md#variable-_metadata_vals). The Python API method is dvs_add_plot_info and metadata is passed via the tags dictionary on an object.

## DVS Variable Metadata

The DVS API supports writing variable metadata via [dvs\_add\_var\_info()](../reference/files/dynamic__visualization__store__api_8h.md#function-dvs_add_var_info) or [DVS::IClient::add\_var\_info()](../reference/classes/class_d_v_s_1_1_i_client.md#function-add_var_info) methods for the C/C++ API through the [dvs\_var\_info::\_metadata\_keys](../reference/structures/structdvs__var__info.md#variable-_metadata_keys) and [dvs\_var\_info::\_metadata\_vals](../reference/structures/structdvs__var__info.md#variable-_metadata_vals). The Python API method is dvs_add_var_info and metadata is passed via the tags dictionary on an object.

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)