# Class libuserd::Query

<a id="classlibuserd_1_1_query"></a>

![][C++]
![][public]




This class is basically a wrapper around an query (f(x)=y) that can change over time.

**Inherits from**:

* IQuery

## Members

* [data](classlibuserd_1_1_query.md#classlibuserd_1_1_query_1acbe09d10fcd3e9a7260c7b03b1d19661)
* [m\_reader\_id](classlibuserd_1_1_query.md#classlibuserd_1_1_query_1ab25823cc6dd31efd1f55f6d042d5328a)
* [num\_points](classlibuserd_1_1_query.md#classlibuserd_1_1_query_1a6752296f06ad53305522f14cc45b3867)
* [Query](classlibuserd_1_1_query.md#classlibuserd_1_1_query_1ae06e78ff07b1d55ea917307f3c9b59bc)
* [Reader](classlibuserd_1_1_query.md#classlibuserd_1_1_query_1a35cb182752752c74a30050705acc3c06)

## Friends

<a id="classlibuserd_1_1_query_1a35cb182752752c74a30050705acc3c06"></a>
### Friend Reader

![][C++]
![][private]








## Private attributes

<a id="classlibuserd_1_1_query_1ab25823cc6dd31efd1f55f6d042d5328a"></a>
### Variable m\_reader\_id

![][private]



```cpp
uint32_t libuserd::Query::m_reader_id
```








**Type**: uint32_t

## Public functions

<a id="classlibuserd_1_1_query_1a6752296f06ad53305522f14cc45b3867"></a>
### Function num\_points

![][public]


```cpp
size_t libuserd::Query::num_points() override
```


num_points

Return the number of points in the query






**Returns**:

size_t



**Return type**: size_t

<a id="classlibuserd_1_1_query_1acbe09d10fcd3e9a7260c7b03b1d19661"></a>
### Function data

![][public]


```cpp
ErrorCode libuserd::Query::data(float *x, float *y) override
```


data

Return the data points for the query.





Note: the x and y arrays must be at least [num\_points()](classlibuserd_1_1_query.md#classlibuserd_1_1_query_1a6752296f06ad53305522f14cc45b3867) in size.






**Returns**:

ErrorCode


**Parameters**:

* **float**: * x <br/>
* **float**: * y



**Parameters**:

* float * **x**
* float * **y**

**Return type**: ErrorCode

## Private functions

<a id="classlibuserd_1_1_query_1ae06e78ff07b1d55ea917307f3c9b59bc"></a>
### Function Query

![][private]


```cpp
libuserd::Query::Query(const uint32_t id, const uint32_t reader_id, const std::string &name, const std::string &x_title, const std::string &y_title, const std::map< const std::string, std::string > &metadata)
```








**Parameters**:

* const uint32_t **id**
* const uint32_t **reader_id**
* const std::string & **name**
* const std::string & **x_title**
* const std::string & **y_title**
* const std::map< const std::string, std::string > & **metadata**

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)