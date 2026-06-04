# Class libuserd::Reader

<a id="classlibuserd_1_1_reader"></a>

![][C++]
![][public]




This class represents is an instance of a reader that is actively reading a dataset.

**Inherits from**:

* IReader

## Members

* [dynamic\_update\_check](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1acc74635760c8d32bcf419742b045a5ac)
* [get\_geometry\_info](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a50470693f96fd3bd89b4b6794f9880b1)
* [get\_meta\_data\_string](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1aaed6a90e43d8f5a966347acee272d848)
* [get\_number\_of\_time\_sets](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1ac718bff5521bb117682365c0b4736c62)
* [get\_part\_hints](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a47bfbf355ac7e03438fae069601270ef)
* [info](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a43cd80ff9eaeb8facddfe4d210e4da7a)
* [is\_geometry\_changing](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a4959411676a96742b9aab19159ee05a7)
* [m\_part\_metatags](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a7ec945342ac1fcf6691b71b4e01715ce)
* [m\_query\_metatags](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a2aa4ba40207402c934b1bce304fc3939)
* [m\_reader\_info](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1adaca0845cebce7561a480d94e6e75bb9)
* [m\_var\_metatags](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a908d32adfeda5983fd3728bd346f821e)
* [number\_of\_geometries](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a4300b48b74502c10a0b3ca458fc29890)
* [parse\_metatags](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1aadccfb4ac38dae26319df006b269e94e)
* [parts](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a9af836eaf529c4b15dd72dcdacbe9ee5)
* [queries](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a363a7851bf38059c82a467d332707a1b)
* [Reader](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a8013bb983be4036d2167b18c6ae9ab8f)
* [ReaderInfo](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a73671c5be9cbf13d42ff337755c2af76)
* [set\_timestep](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a46d51aa0cada0a873605f070e974c6ae)
* [set\_timevalue](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1abe71a1756dd41d6234d4c0afcaf27dc9)
* [timevalues](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a09cfa421c471be3c98c779633a0dd8e2)
* [variable\_value](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a8bc9be5f6cb37f6893b9a5ce9ccd5352)
* [variables](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader_1a41de518241c05fa09f65e64feeed9b45)

## Friends

<a id="classlibuserd_1_1_reader_1a73671c5be9cbf13d42ff337755c2af76"></a>
### Friend ReaderInfo

![][C++]
![][private]








## Private attributes

<a id="classlibuserd_1_1_reader_1adaca0845cebce7561a480d94e6e75bb9"></a>
### Variable m\_reader\_info

![][private]



```cpp
ReaderInfo libuserd::Reader::m_reader_info
```


the [ReaderInfo](classlibuserd_1_1_reader_info.md#classlibuserd_1_1_reader_info) used to construct this object





**Type**: ReaderInfo

<a id="classlibuserd_1_1_reader_1a7ec945342ac1fcf6691b71b4e01715ce"></a>
### Variable m\_part\_metatags

![][private]



```cpp
std::map<const std::string, std::string> libuserd::Reader::m_part_metatags
```








**Type**: std::map< const std::string, std::string >

<a id="classlibuserd_1_1_reader_1a908d32adfeda5983fd3728bd346f821e"></a>
### Variable m\_var\_metatags

![][private]



```cpp
std::map<const std::string, std::string> libuserd::Reader::m_var_metatags
```








**Type**: std::map< const std::string, std::string >

<a id="classlibuserd_1_1_reader_1a2aa4ba40207402c934b1bce304fc3939"></a>
### Variable m\_query\_metatags

![][private]



```cpp
std::map<const std::string, std::string> libuserd::Reader::m_query_metatags
```








**Type**: std::map< const std::string, std::string >

## Public functions

<a id="classlibuserd_1_1_reader_1a9af836eaf529c4b15dd72dcdacbe9ee5"></a>
### Function parts

![][public]


```cpp
ErrorCode libuserd::Reader::parts(std::vector< IPart * > &part_list) override
```


parts

The list of part objects (mesh blocks) defined by this dataset.






?> The returned [Part](classlibuserd_1_1_part.md#classlibuserd_1_1_part) pointers must be deleted by the caller.


**Parameters**:

* **std::vector<IPart**: * > & part_list


**Returns**:

ErrorCode



**Parameters**:

* std::vector< IPart * > & **part_list**

**Return type**: ErrorCode

<a id="classlibuserd_1_1_reader_1a41de518241c05fa09f65e64feeed9b45"></a>
### Function variables

![][public]


```cpp
ErrorCode libuserd::Reader::variables(std::vector< IVariable * > &variable_list) override
```


variables

The list of variables defined by this dataset.






?> The returned [Variable](classlibuserd_1_1_variable.md#classlibuserd_1_1_variable) pointers must be deleted by the caller.


**Parameters**:

* **std::vector<IVariable**: * > & variable_list


**Returns**:

ErrorCode



**Parameters**:

* std::vector< IVariable * > & **variable_list**

**Return type**: ErrorCode

<a id="classlibuserd_1_1_reader_1a363a7851bf38059c82a467d332707a1b"></a>
### Function queries

![][public]


```cpp
ErrorCode libuserd::Reader::queries(std::vector< IQuery * > &query_list) override
```


queries

The list of queries present in this dataset.






?> The returned [Query](classlibuserd_1_1_query.md#classlibuserd_1_1_query) pointers must be deleted by the caller.


**Parameters**:

* **std::vector<IQuery**: * > & query_list


**Returns**:

ErrorCode



**Parameters**:

* std::vector< IQuery * > & **query_list**

**Return type**: ErrorCode

<a id="classlibuserd_1_1_reader_1ac718bff5521bb117682365c0b4736c62"></a>
### Function get\_number\_of\_time\_sets

![][public]


```cpp
ErrorCode libuserd::Reader::get_number_of_time_sets(uint32_t &number_of_time_sets) override
```


timevalues

The list of valid timeset values






**Parameters**:

* **uint32_t**: number_of_time_sets is the total number of timesets available in this dataset


**Returns**:

ErrorCode



**Parameters**:

* uint32_t & **number_of_time_sets**

**Return type**: ErrorCode

<a id="classlibuserd_1_1_reader_1a09cfa421c471be3c98c779633a0dd8e2"></a>
### Function timevalues

![][public]


```cpp
ErrorCode libuserd::Reader::timevalues(std::vector< float > &timevalues, uint32_t timeset_number=0) override
```


timevalues

The list of valid timestep values.






**Parameters**:

* **std::vector<float>**: & timevalues The "time" values available in this dataset
* **uint32_t**: timeset_number This optional argument can be ignored for v1.0 but needs to be supplied for version 2 & 3 (otherwise it would be defaulted to 0th timeset)


**Returns**:

ErrorCode



**Parameters**:

* std::vector< float > & **timevalues**
* uint32_t **timeset_number** = 0 

**Return type**: ErrorCode

<a id="classlibuserd_1_1_reader_1abe71a1756dd41d6234d4c0afcaf27dc9"></a>
### Function set\_timevalue

![][public]


```cpp
ErrorCode libuserd::Reader::set_timevalue(float timevalue, uint32_t timeset_number=0) override
```


timevalue

The time value to change the reader to.






**Parameters**:

* **float**: timevalue The time value. Note: this value must be present in timesteps();
* **uint32_t**: timeset_number This optional argument can be ignored for v1.0 but needs to be supplied for version 2 & 3 (otherwise it would be defaulted to 0th timeset)


**Returns**:

ErrorCode



**Parameters**:

* float **timevalue**
* uint32_t **timeset_number** = 0 

**Return type**: ErrorCode

<a id="classlibuserd_1_1_reader_1a46d51aa0cada0a873605f070e974c6ae"></a>
### Function set\_timestep

![][public]


```cpp
ErrorCode libuserd::Reader::set_timestep(uint32_t timestep, uint32_t timeset_number=0) override
```


set_timestep

The timestep index to change the reader to.






**Parameters**:

* **uint32_t**: timestep This is the time value index: [0,timevalues.size()-1]
* **uint32_t**: timeset_number This optional argument can be ignored for v1.0 but needs to be supplied for version 2 & 3 (otherwise it would be defaulted to 0th timeset)


**Returns**:

ErrorCode



**Parameters**:

* uint32_t **timestep**
* uint32_t **timeset_number** = 0 

**Return type**: ErrorCode

<a id="classlibuserd_1_1_reader_1a8bc9be5f6cb37f6893b9a5ce9ccd5352"></a>
### Function variable\_value

![][public]


```cpp
ErrorCode libuserd::Reader::variable_value(const IVariable *var, float &value, int32_t rank=0) override
```


variable_value

For DATASET variables, return the value for a DATASET constant at the current timestep.






**Parameters**:

* **const**: IVariable & var The [Variable](classlibuserd_1_1_variable.md#classlibuserd_1_1_variable) corresponding to a DATASET constant
* **float**: & value The value of the variable
* **int32_t**: rank The rank number to return values for. Unimplemented, use 0.


**Returns**:

ErrorCode



**Parameters**:

* const IVariable * **var**
* float & **value**
* int32_t **rank** = 0 

**Return type**: ErrorCode

<a id="classlibuserd_1_1_reader_1acc74635760c8d32bcf419742b045a5ac"></a>
### Function dynamic\_update\_check

![][public]


```cpp
UpdateHints libuserd::Reader::dynamic_update_check(UpdateHints changes_allowed) override
```


dynamic_update_check

When this call is made, the active reader is allowed to change the current data values (e.g. variable values, connectivity, etc) as well as the structure of the data (e.g. part_list, var_list, query_list). The returned value describes what things changed. For example, an in situ reader might change the mesh and variable values in response to this call. <br/>







?> : a reader is not allowed to change the underlying data nor structure if this method is never called and only the bits set in the input flags are allowed to change.


**Parameters**:

* **UpdateHints**: changes_allowed Bitfield of the types of changes that are allowed.


**Returns**:

libuserd::UpdateHints What aspects of the dataset has changed.



**Parameters**:

* UpdateHints **changes_allowed**

**Return type**: UpdateHints

<a id="classlibuserd_1_1_reader_1a4959411676a96742b9aab19159ee05a7"></a>
### Function is\_geometry\_changing

![][public]


```cpp
bool libuserd::Reader::is_geometry_changing() override
```


is_geometry_changing

**Parameters**:

* **bool**: - returns true if the geometry is changing (timestep dependent) and false otherwise


**Returns**:

ErrorCode



**Return type**: bool

<a id="classlibuserd_1_1_reader_1a43cd80ff9eaeb8facddfe4d210e4da7a"></a>
### Function info

![][public]


```cpp
const IReaderInfo * libuserd::Reader::info() override
```


info

Get the [ReaderInfo](classlibuserd_1_1_reader_info.md#classlibuserd_1_1_reader_info) class used to create this [Reader](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader) instance.






**Returns**:

const libuserd::IReaderInfo*



**Return type**: const IReaderInfo *

## Public static functions

<a id="classlibuserd_1_1_reader_1a50470693f96fd3bd89b4b6794f9880b1"></a>
### Function get\_geometry\_info

![][public]
![][static]


```cpp
static ErrorCode libuserd::Reader::get_geometry_info(int reader_id, int part_index, std::vector< int > &geoms_vector)
```








**Parameters**:

* int **reader_id**
* int **part_index**
* std::vector< int > & **geoms_vector**

**Return type**: ErrorCode

<a id="classlibuserd_1_1_reader_1a4300b48b74502c10a0b3ca458fc29890"></a>
### Function number\_of\_geometries

![][public]
![][static]


```cpp
static ErrorCode libuserd::Reader::number_of_geometries(int reader_id, int part_index, int &number_of_geoms)
```








**Parameters**:

* int **reader_id**
* int **part_index**
* int & **number_of_geoms**

**Return type**: ErrorCode

## Private functions

<a id="classlibuserd_1_1_reader_1a8013bb983be4036d2167b18c6ae9ab8f"></a>
### Function Reader

![][private]


```cpp
libuserd::Reader::Reader(ReaderInfo info)
```








**Parameters**:

* ReaderInfo **info**

**Return type**: 

<a id="classlibuserd_1_1_reader_1aaed6a90e43d8f5a966347acee272d848"></a>
### Function get\_meta\_data\_string

![][private]


```cpp
ErrorCode libuserd::Reader::get_meta_data_string()
```








**Return type**: ErrorCode

<a id="classlibuserd_1_1_reader_1aadccfb4ac38dae26319df006b269e94e"></a>
### Function parse\_metatags

![][private]


```cpp
void libuserd::Reader::parse_metatags(std::map< const std::string, std::string > &map, const char *section_name)
```








**Parameters**:

* std::map< const std::string, std::string > & **map**
* const char * **section_name**

**Return type**: void

<a id="classlibuserd_1_1_reader_1a47bfbf355ac7e03438fae069601270ef"></a>
### Function get\_part\_hints

![][private]


```cpp
ErrorCode libuserd::Reader::get_part_hints(int reader_id, int part_index, PartHints &part_hints)
```








**Parameters**:

* int **reader_id**
* int **part_index**
* PartHints & **part_hints**

**Return type**: ErrorCode

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)