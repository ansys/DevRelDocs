# Class libuserd::LibUserd

<a id="classlibuserd_1_1_lib_userd"></a>

![][C++]
![][public]




[LibUserd](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd) is the primary interface to the USERD library. All interaction starts at this object. One object instance exists in a process.

**Inherits from**:

* ILibUserd

## Members

* [get\_active\_reader](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a73ee8a229d727fb13ebfa5471e5d640f)
* [get\_all\_readers](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a05b8b7865b8533aed03258f9a1c72c8e)
* [get\_available\_reader\_count](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1abc9b7f863123234d479f0cea920f1a7a)
* [initialize](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a45879b10fc6744a3828e49e139cb49bd)
* [initReaderExtensions](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1aa52c15cea6b18da06b1372636b57a359)
* [library\_interface](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a99ef641c05ea827c864b5c3508992a5a)
* [LibUserd](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a9c671f62b479a0f04edb8eb1c2371889)
* [LibUserd](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1aa26b58778c9c4e9f7cc129f12e9eb183)
* [m\_reader\_extensions](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a862322ede4477d6da88961fab302fa08)
* [processFilename](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a7d3cd705594b5d5745f71ca909bee71b)
* [query\_format](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a4b79f486dd05d6ca1b742b322994ddd5)
* [ReaderInfo](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a73671c5be9cbf13d42ff337755c2af76)
* [s\_active\_reader](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1aa261712a254d7bcf43a1f0b833e7f727)
* [s\_libuserd](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a4bce86fe6c17680dab9f8be0b1064d0e)
* [set\_active\_reader](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a4eae223afec932c51934d0c89dcc025a)
* [set\_message\_handler](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a67572dc4ae228b2a4a4f41e2324b9861)
* [set\_reader\_path](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1aaa0ee8e3f6005ad1a1df4a61181a8408)
* [shutdown](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a2e5152aa6407bd82e08c5759aea37f32)

## Private static attributes

<a id="classlibuserd_1_1_lib_userd_1a4bce86fe6c17680dab9f8be0b1064d0e"></a>
### Variable s\_libuserd

![][private]
![][static]



```cpp
LibUserd* libuserd::LibUserd::s_libuserd
```








**Type**: LibUserd *

<a id="classlibuserd_1_1_lib_userd_1aa261712a254d7bcf43a1f0b833e7f727"></a>
### Variable s\_active\_reader

![][private]
![][static]



```cpp
Reader* libuserd::LibUserd::s_active_reader
```








**Type**: [Reader](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader) *

## Private attributes

<a id="classlibuserd_1_1_lib_userd_1a862322ede4477d6da88961fab302fa08"></a>
### Variable m\_reader\_extensions

![][private]



```cpp
std::vector<fileExtensions> libuserd::LibUserd::m_reader_extensions
```








**Type**: std::vector< [fileExtensions](structlibuserd_1_1file_extensions.md#structlibuserd_1_1file_extensions) >

## Friends

<a id="classlibuserd_1_1_lib_userd_1a73671c5be9cbf13d42ff337755c2af76"></a>
### Friend ReaderInfo

![][C++]
![][private]








## Public static functions

<a id="classlibuserd_1_1_lib_userd_1a99ef641c05ea827c864b5c3508992a5a"></a>
### Function library\_interface

![][public]
![][static]


```cpp
static LibUserd * libuserd::LibUserd::library_interface()
```


library_interface

Get the pointer to the library interface.





Note: [LibUserd](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd) is a singleton and this function will return the existing instance or create a new instance.






**Returns**:

[libuserd::LibUserd](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd)* The library interface



**Return type**: LibUserd *

<a id="classlibuserd_1_1_lib_userd_1a73ee8a229d727fb13ebfa5471e5d640f"></a>
### Function get\_active\_reader

![][public]
![][static]


```cpp
static Reader * libuserd::LibUserd::get_active_reader()
```


get_active_reader

Return the currently active reader if any.






**Returns**:

[libuserd::Reader](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader)* The currently active reader or nullptr if [ReaderInfo::read\_dataset](classlibuserd_1_1_reader_info.md#classlibuserd_1_1_reader_info_1a4075a3b737a9e328acd27290d6203c5e) has not been called.



**Return type**: [Reader](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader) *

## Public functions

<a id="classlibuserd_1_1_lib_userd_1aaa0ee8e3f6005ad1a1df4a61181a8408"></a>
### Function set\_reader\_path

![][public]


```cpp
ErrorCode libuserd::LibUserd::set_reader_path(const std::string &path) override
```


set_reader_path

By default, the library looks for reader shared libraries by looking for Ansys distributions that align with the version number of the libuserd library. A user may override this search path using this function.





Note: This function must be called before [initialize()](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a45879b10fc6744a3828e49e139cb49bd) is called and once intialize() has been called, this method will return






**Parameters**:

* **const**: std::string & path


**Returns**:

ErrorCode returns IGNORED_AFTER_INITIALIZE if called after [initialize()](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd_1a45879b10fc6744a3828e49e139cb49bd)



**Parameters**:

* const std::string & **path**

**Return type**: ErrorCode

<a id="classlibuserd_1_1_lib_userd_1a67572dc4ae228b2a4a4f41e2324b9861"></a>
### Function set\_message\_handler

![][public]


```cpp
ErrorCode libuserd::LibUserd::set_message_handler(ErrorProc, void *userdata) override
```


set_message_handler

Many readers can output diagnostic information. This function allows an application to intercept and handle that type of information.






**Parameters**:

* **ErrorProc**: The called supplied function to be called when output is generated
* **void**: * userdata A user supplied pointer that is passed to the function.


**Returns**:

ErrorCode



**Parameters**:

* ErrorProc
* void * **userdata**

**Return type**: ErrorCode

<a id="classlibuserd_1_1_lib_userd_1a45879b10fc6744a3828e49e139cb49bd"></a>
### Function initialize

![][public]


```cpp
ErrorCode libuserd::LibUserd::initialize(int32_t number_of_ranks=0) override
```


initialize

This call initializes the libuserd system. It causes the library to scan for available readers and set up any required reduction engine bits. It can only be called once.






?> number_of_ranks is not currently implemented. It is used to specify the number of parallel servers to use to read the dataset. The values 0 and 1 both represent serial data access. Current code should use the value 0.


**Returns**:

ErrorCode



**Parameters**:

* int32_t **number_of_ranks** = 0 

**Return type**: ErrorCode

<a id="classlibuserd_1_1_lib_userd_1abc9b7f863123234d479f0cea920f1a7a"></a>
### Function get\_available\_reader\_count

![][public]


```cpp
size_t libuserd::LibUserd::get_available_reader_count() override
```


get_available_reader_count

Return a count of the readers that are available.






**Returns**:

size_t Number of available readers



**Return type**: size_t

<a id="classlibuserd_1_1_lib_userd_1a05b8b7865b8533aed03258f9a1c72c8e"></a>
### Function get\_all\_readers

![][public]


```cpp
ErrorCode libuserd::LibUserd::get_all_readers(std::vector< IReaderInfo * > &info) override
```


get_all_readers

Return a list of the readers that are available.






**Parameters**:

* **std::vector<ReaderInfo>**: & info


**Returns**:

ErrorCode



**Parameters**:

* std::vector< IReaderInfo * > & **info**

**Return type**: ErrorCode

<a id="classlibuserd_1_1_lib_userd_1a4b79f486dd05d6ca1b742b322994ddd5"></a>
### Function query\_format

![][public]


```cpp
ErrorCode libuserd::LibUserd::query_format(const std::string &name1, const std::string &name2, std::vector< IReaderInfo * > &reader_info) override
```


query_format

For a given dataset (filename(s)), ask the readers if they should be able to read that data.






**Parameters**:

* **const**: std::string & name1 Primary input filename
* **const**: std::string & name2 Optional, secondary input filename
* **std::vector<ReaderInfo>**: & reader_info a list of readers that might be able to read the dataset


**Returns**:

ErrorCode



**Parameters**:

* const std::string & **name1**
* const std::string & **name2**
* std::vector< IReaderInfo * > & **reader_info**

**Return type**: ErrorCode

<a id="classlibuserd_1_1_lib_userd_1a2e5152aa6407bd82e08c5759aea37f32"></a>
### Function shutdown

![][public]


```cpp
ErrorCode libuserd::LibUserd::shutdown() override
```


shutdown

Shutdown the libuserd library, stopping any active reader and any reduction engine. Once this is called, the [LibUserd](classlibuserd_1_1_lib_userd.md#classlibuserd_1_1_lib_userd) interface can no longer be used in the current process.






**Returns**:

ErrorCode



**Return type**: ErrorCode

## Private functions

<a id="classlibuserd_1_1_lib_userd_1a9c671f62b479a0f04edb8eb1c2371889"></a>
### Function LibUserd

![][private]


```cpp
libuserd::LibUserd::LibUserd()
```








**Return type**: 

<a id="classlibuserd_1_1_lib_userd_1aa26b58778c9c4e9f7cc129f12e9eb183"></a>
### Function LibUserd

![][private]


```cpp
libuserd::LibUserd::LibUserd(const LibUserd &)=delete
```








**Parameters**:

* const LibUserd &

**Return type**: 

<a id="classlibuserd_1_1_lib_userd_1aa52c15cea6b18da06b1372636b57a359"></a>
### Function initReaderExtensions

![][private]


```cpp
void libuserd::LibUserd::initReaderExtensions()
```








**Return type**: void

<a id="classlibuserd_1_1_lib_userd_1a7d3cd705594b5d5745f71ca909bee71b"></a>
### Function processFilename

![][private]


```cpp
std::string libuserd::LibUserd::processFilename(const std::string &filename)
```








**Parameters**:

* const std::string & **filename**

**Return type**: std::string

## Private static functions

<a id="classlibuserd_1_1_lib_userd_1a4eae223afec932c51934d0c89dcc025a"></a>
### Function set\_active\_reader

![][private]
![][static]


```cpp
static void libuserd::LibUserd::set_active_reader(Reader *reader)
```








**Parameters**:

* [Reader](classlibuserd_1_1_reader.md#classlibuserd_1_1_reader) * **reader**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)