# File dvs\_metadata.md

<a id="dvs__metadata_8md"></a>

![][Markdown]

## Source


```markdown
@defgroup group_dvs_metadata DVS Metadata
@ingroup dvs_main
@brief Description of supported metadata for the DVS API
@ingroup group_dvs_metadata

***
### Table of Contents
- @ref dvs_dataset_metadata
- @ref dvs_part_metadata
- @ref dvs_plot_metadata
- @ref dvs_variable_metadata

\tableofcontents

***
@subsection dvs_dataset_metadata DVS Dataset Metadata

The DVS API supports writing dataset metadata via the dvs_add_metadata() or DVS::IClient::add_metadata()
methods for the C/C++ API (similarly named methods for the Python API). This must be done during
the initialization step between begin_init and end_init.

@subsubsection dvs_dataset_metadata_ensight_supported Supported EnSight Dataset Metadata

The EnSight DVS reader reserves specific metadata key/value pairs for specific operations within EnSight.
Below is a list of currently supported tags.

KEY                             | VALUE/DESCRIPTION
------------------------------- | -----------------
_DVS::REMOVE_ELEMENT_VAR        | The name of the variable definition being used to filter elements, see @ref dvs_element_filtering
_DVS::REMOVE_ELEMENT_FILTER     | The logical equation to use when filtering elements based on a variable's value, see @ref dvs_element_filtering

@subsubsection dvs_element_filtering EnSight DVS Element Filtering

EnSight will automatically filter out elements based on a scalar variable value if the metadata tags
are set on a dataset. To do this you first set _DVS::REMOVE_ELEMENT_VAR to the name of the variable
definition that will be used and then set _DVS::REMOVE_ELEMENT_FILTER to the filtering equation.
The filtering equation follows the standard format for @ref dvs_query_stanzas. There are some
limitations however. Element filtering only works with scalar variables and the object/attribute
must be "var.value". It also only supports the operators gt (>), lt (<), eq (==), and neq (!=).
Lastly it only works for a max of 2 chained query stanzas. A few examples should help this make sense.

@subsubsection dvs_element_filter_example_1 Example 1

A user would like to filter out elements if the value of "my_filter_var" is equal to 1.1 or 1.2.

KEY                         | VALUE
---                         | -----
_DVS::REMOVE_ELEMENT_VAR    | my_filter_var
_DVS::REMOVE_ELEMENT_FILTER | /var.value/eq/1.1//or/var.value/eq/1.2

@subsubsection dvs_element_filter_example_2 Example 2

A user would like to filter out elements based on the variable "pressure" if they are above the
threshold of 2.0 and below the threshold of 15.4.

KEY                         | VALUE
---                         | -----
_DVS::REMOVE_ELEMENT_VAR    | pressure
_DVS::REMOVE_ELEMENT_FILTER | /var.value/gt/2.0//and/var.value/lt/15.4

@subsubsection dvs_element_filter_example_3 Example 3

A user would like to filter out elements based on the variable "delete_element" if the value is not
equal to 1.0.

KEY                         | VALUE
---                         | -----
_DVS::REMOVE_ELEMENT_VAR    | delete_element
_DVS::REMOVE_ELEMENT_FILTER | /var.value/neq/1.0

***
@subsection dvs_part_metadata DVS Part Metadata

The DVS API supports writing part metadata via dvs_add_part_info() or DVS::IClient::add_part_info()
methods for the C/C++ API through the dvs_part_info::_metadata_keys and dvs_part_info::_metadata_vals.
The Python API method is dvs_add_part_info and metadata is passed via the tags dictionary on an object.

@subsubsection dvs_part_metadata_ensight_supported Supported EnSight Part Metadata

KEY               | VALUE
----------------- | -----
_DVS::PATHNAME    | Used to setup groups in the user interface. eg. My\|Group would create 2 group levels (My->Group) and put the part under the "Group" group.
_DVS::OBJATTR     | See https://nexusdemo.ensight.com/docs/python/html/Python.html?ENS_OBJATTRSchema.html
_DVS::KIND        | Used to set part kind. eg. Inlet
_DVS::NO_AUTOLOAD | Set to anything to not autoload the part when EnSight loads the dataset. Part must be manually loaded.

***
@subsection dvs_plot_metadata DVS Plot Metadata

The DVS API supports writing plot metadata via dvs_add_plot_info() or DVS::IClient::add_plot_info()
methods for the C/C++ API through the dvs_plot_info::_metadata_keys and dvs_plot_info::_metadata_vals.
The Python API method is dvs_add_plot_info and metadata is passed via the tags dictionary on an object.

***
@subsection dvs_variable_metadata DVS Variable Metadata

The DVS API supports writing variable metadata via dvs_add_var_info() or DVS::IClient::add_var_info()
methods for the C/C++ API through the dvs_var_info::_metadata_keys and dvs_var_info::_metadata_vals.
The Python API method is dvs_add_var_info and metadata is passed via the tags dictionary on an object.
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)