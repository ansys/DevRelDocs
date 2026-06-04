# Class libuserd::ReaderInfo

<a id="classlibuserd_1_1_reader_info"></a>

![][C++]
![][public]




This class represents an available reader, before it has been instantiated. The [read\_dataset()](classlibuserd_1_1_reader_info.md#classlibuserd_1_1_reader_info_1a4075a3b737a9e328acd27290d6203c5e) function actually tries to open a dataset and returns an actual [Reader](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader) instance that is reading the data.

**Inherits from**:

* IReaderInfo

## Members

* [get\_userd\_xtra\_gui\_values](classlibuserd_1_1_reader_info.md#classlibuserd_1_1_reader_info_1a54f1a4221009a860ada8e57dd1fd374a)
* [LibUserd](classlibuserd_1_1_reader_info.md#classlibuserd_1_1_reader_info_1a0d111acc2fa060cde5732eaccf8685eb)
* [read\_dataset](classlibuserd_1_1_reader_info.md#classlibuserd_1_1_reader_info_1a4075a3b737a9e328acd27290d6203c5e)
* [ReaderInfo](classlibuserd_1_1_reader_info.md#classlibuserd_1_1_reader_info_1a6250d41b218e601079931912d3198def)

## Friends

<a id="classlibuserd_1_1_reader_info_1a0d111acc2fa060cde5732eaccf8685eb"></a>
### Friend LibUserd

![][C++]
![][private]








## Public functions

<a id="classlibuserd_1_1_reader_info_1a4075a3b737a9e328acd27290d6203c5e"></a>
### Function read\_dataset

![][public]


```cpp
ErrorCode libuserd::ReaderInfo::read_dataset(const std::string &file1, const std::string &file2, IReader *&reader) override
```


read_dataset

Attempt to read some files on disk using this reader and the specified options. If successful, return an actual reader instance. <br/>







?> The returned [Reader](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader) pointer is owned by the [LibUserd](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd) instance. It should not be deleted by the caller.


**Parameters**:

* **const**: std::string & file1 ///< the pimary filename (e.g. .cas)
* **const**: std::string & file2 ///< an optional secondary filename (e.g. .dat)
* **[Reader](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader)**: * & reader ///< the actual reader instance


**Returns**:

ErrorCode



**Parameters**:

* const std::string & **file1**
* const std::string & **file2**
* IReader *& **reader**

**Return type**: ErrorCode

## Public static functions

<a id="classlibuserd_1_1_reader_info_1a54f1a4221009a860ada8e57dd1fd374a"></a>
### Function get\_userd\_xtra\_gui\_values

![][public]
![][static]


```cpp
static bool libuserd::ReaderInfo::get_userd_xtra_gui_values(int reader_id, Options &userd_options)
```


Retrieves extra GUI values for a specified reader.

This static method fetches additional GUI values associated with the given reader ID and stores them in the provided Options object.






**Parameters**:

* **reader_id**: The ID of the reader for which to retrieve the GUI values.
* **userd_options**: The Options object where the retrieved GUI values will be stored.


**Returns**:

True if there are any extra GUI values and false otherwise.



**Parameters**:

* int **reader_id**
* Options & **userd_options**

**Return type**: bool

## Private functions

<a id="classlibuserd_1_1_reader_info_1a6250d41b218e601079931912d3198def"></a>
### Function ReaderInfo

![][private]


```cpp
libuserd::ReaderInfo::ReaderInfo(const uint32_t id, const std::string name, const std::string description, const std::string file_labels[2], struct Options options)
```








**Parameters**:

* const uint32_t **id**
* const std::string **name**
* const std::string **description**
* const std::string **file_labels**
* struct Options **options**

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)