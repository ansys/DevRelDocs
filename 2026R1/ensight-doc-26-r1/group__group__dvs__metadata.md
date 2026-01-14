# DVS Metadata

<a id="group__group__dvs__metadata"></a>

Description of supported metadata for the DVS API.

---

 ### Table of Contents







* [DVS Dataset Metadata](#group__group__dvs__metadata_1dvs_dataset_metadata)

* [DVS Part Metadata](#group__group__dvs__metadata_1dvs_part_metadata)

* [DVS Plot Metadata](#group__group__dvs__metadata_1dvs_plot_metadata)

* [DVS Variable Metadata](#group__group__dvs__metadata_1dvs_variable_metadata)







---

 





### DVS Dataset Metadata

The DVS API supports writing dataset metadata via the [dvs\_add\_metadata()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ac5c67fdc3806bf89eebbe49e6daea5c2) or [DVS::IClient::add\_metadata()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1ab4144e59bfdcf9c095c6510c4298d160) methods for the C/C++ API (similarly named methods for the Python API). This must be done during the initialization step between begin_init and end_init.





#### Supported EnSight Dataset Metadata

The EnSight DVS reader reserves specific metadata key/value pairs for specific operations within EnSight. Below is a list of currently supported tags.






| KEY | VALUE/DESCRIPTION |
| --- | --- |
| _DVS::REMOVE_ELEMENT_VAR | The name of the variable definition being used to filter elements, see [EnSight DVS Element Filtering](#group__group__dvs__metadata_1dvs_element_filtering) |
| _DVS::REMOVE_ELEMENT_FILTER | The logical equation to use when filtering elements based on a variable's value, see [EnSight DVS Element Filtering](#group__group__dvs__metadata_1dvs_element_filtering) |





#### EnSight DVS Element Filtering

EnSight will automatically filter out elements based on a scalar variable value if the metadata tags are set on a dataset. To do this you first set _DVS::REMOVE_ELEMENT_VAR to the name of the variable definition that will be used and then set _DVS::REMOVE_ELEMENT_FILTER to the filtering equation. The filtering equation follows the standard format for [Query Stanzas](#group__group__dvs__filtering_1dvs_query_stanzas). There are some limitations however. Element filtering only works with scalar variables and the object/attribute must be "var.value". It also only supports the operators gt (>), lt (<), eq (==), and neq (!=). Lastly it only works for a max of 2 chained query stanzas. A few examples should help this make sense.




#### Example 1

A user would like to filter out elements if the value of "my_filter_var" is equal to 1.1 or 1.2.






| KEY | VALUE |
| --- | --- |
| _DVS::REMOVE_ELEMENT_VAR | my_filter_var |
| _DVS::REMOVE_ELEMENT_FILTER | /var.value/eq/1.1//or/var.value/eq/1.2 |





#### Example 2

A user would like to filter out elements based on the variable "pressure" if they are above the threshold of 2.0 and below the threshold of 15.4.






| KEY | VALUE |
| --- | --- |
| _DVS::REMOVE_ELEMENT_VAR | pressure |
| _DVS::REMOVE_ELEMENT_FILTER | /var.value/gt/2.0//and/var.value/lt/15.4 |





#### Example 3

A user would like to filter out elements based on the variable "delete_element" if the value is not equal to 1.0.






| KEY | VALUE |
| --- | --- |
| _DVS::REMOVE_ELEMENT_VAR | delete_element |
| _DVS::REMOVE_ELEMENT_FILTER | /var.value/neq/1.0 |







---




### DVS Part Metadata

The DVS API supports writing part metadata via [dvs\_add\_part\_info()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a4e8a904ae19fd7f2b0c300543bc42576) or [DVS::IClient::add\_part\_info()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a5e9ee6af237e76a6e270d99ec8cd4388) methods for the C/C++ API through the [dvs\_part\_info::\_metadata\_keys](structdvs__part__info.md#structdvs__part__info_1aef3ab830a0bfcab49d9cbed978e315c2) and [dvs\_part\_info::\_metadata\_vals](structdvs__part__info.md#structdvs__part__info_1a59c04a77c663b68008a1f69b62574337). The Python API method is dvs_add_part_info and metadata is passed via the tags dictionary on an object.





#### Supported EnSight Part Metadata


| KEY | VALUE |
| --- | --- |
| _DVS::PATHNAME | Used to setup groups in the user interface. eg. My|Group would create 2 group levels (My->Group) and put the part under the "Group" group. |
| _DVS::OBJATTR | See https://nexusdemo.ensight.com/docs/python/html/Python.html?ENS_OBJATTRSchema.html |
| _DVS::KIND | Used to set part kind. eg. Inlet |
| _DVS::NO_AUTOLOAD | Set to anything to not autoload the part when EnSight loads the dataset. Part must be manually loaded. |







---




### DVS Plot Metadata

The DVS API supports writing plot metadata via [dvs\_add\_plot\_info()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1afe298f932fd909b7caabd6f430489b16) or [DVS::IClient::add\_plot\_info()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a1bdb7ca9cf25c63e533f47fe26132af6) methods for the C/C++ API through the [dvs\_plot\_info::\_metadata\_keys](structdvs__plot__info.md#structdvs__plot__info_1a6182c10a62849ada795123fd6707d612) and [dvs\_plot\_info::\_metadata\_vals](structdvs__plot__info.md#structdvs__plot__info_1a467b2e79ceb431c9358423647de59699). The Python API method is dvs_add_plot_info and metadata is passed via the tags dictionary on an object.





---




### DVS Variable Metadata

The DVS API supports writing variable metadata via [dvs\_add\_var\_info()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a0b9bbed0db0a5f3e91af8a02aed48e1e) or [DVS::IClient::add\_var\_info()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a82f841d7f6f33071bf8c709623ca215d) methods for the C/C++ API through the [dvs\_var\_info::\_metadata\_keys](structdvs__var__info.md#structdvs__var__info_1a9c656726edeeb5c0cf5b9a42f870b3a2) and [dvs\_var\_info::\_metadata\_vals](structdvs__var__info.md#structdvs__var__info_1abe0afbff61a368336c7750c831a3c056). The Python API method is dvs_add_var_info and metadata is passed via the tags dictionary on an object.

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)