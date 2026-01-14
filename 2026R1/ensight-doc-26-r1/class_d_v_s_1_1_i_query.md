# Class DVS::IQuery

<a id="class_d_v_s_1_1_i_query"></a>

![][C++]
![][public]


The query interface for the DVS Reader API.

An instance of this object can be initially created by calling [DVS::CREATE\_QUERY\_INSTANCE()](namespace_d_v_s.md#dvs__query__interface_8h_1ac614cf475eca0727cdb5b42faabcca7d). A URI must then be added via [DVS::IQuery::add\_uri()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1ae1b22e6a7c4f0c76ade9105f30d1bc2d). Then you can either start querying the dataset or you can add filters by chaining queries via [DVS::IQuery::filter()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a8a810da09342690eb371b324079f206e). When finished to clean up memory call [DVS::IQuery::release()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a257f79d7de21658c07dc602dfa6bbf34).





**IMPORTANT**: Calling [DVS::IQuery::release()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a257f79d7de21658c07dc602dfa6bbf34) destroys all chained queries as well and any object references retrieved from the query from calls such as [DVS::IQuery::get\_part()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a53ec579c40465ee2aebf87ac60dc90fb)





The overall intended usage would be something like: 
```cpp
DVS::IQuery* my_query = DVS::CREATE_QUERY_INSTANCE(); //Create an instance of a query
my_query->add_uri("hdf5://localhost/D:/my/cache/location"); //Add a cache URI for the query to open
DVS::IQuery* dataset_query = my_query->filter("/dataset.id/eq/my+dataset+name"); // Create chained query filtering on a specific dataset name
DVS::IQuery* part_query = dataset_query->filter("/part.id/eq/my+part+name"); // Create chained query filtering on a specific part name
//Loop over all th mesh chunks for part: my part name in dataset: my dataset name
for (uint32_t i = 0; i < part_query->get_num_mesh_chunks(); i++ )
{
     DVS::IMeshChunk* mesh_chunk = part_query->get_mesh_chunk(i);
     //Do important things
}
my_query->release(); // Release top level query and all child queries and their objects
```
 See [Cache URIs](#group__group__dvs__uri_1dvs_cache_uri) and [Query Stanzas](#group__group__dvs__filtering_1dvs_query_stanzas) for more information on cache URIs and queries.

## Members

* [add\_uri](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1ae1b22e6a7c4f0c76ade9105f30d1bc2d)
* [clear\_data](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a2d3edc4b63b016009ef81553ab4e8b06)
* [filter](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a8a810da09342690eb371b324079f206e)
* [get\_chunks\_per\_rank](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a4d1a83603bec00bdebc8430a5c48e742)
* [get\_dataset](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a574de84a9a4d7a5e3e777a35b1b6c2bc)
* [get\_hash\_available](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a818f3065fbaa299112d3efa4257bbfec)
* [get\_mesh\_chunk](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a00a3a6962690c69ea8cef8815a72c011)
* [get\_num\_chunks\_per\_rank](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1aaae39d1931433b35162c3b37dc82c4f1)
* [get\_num\_datasets](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a48165c3147ae5d084577b9b8acb05638)
* [get\_num\_mesh\_chunks](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a0e4ef2e5ffb8a6e3cfe1d1841ef4007b)
* [get\_num\_parts](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a2dab5f63a6c619a1ee6d3138679c9eac)
* [get\_num\_plot\_chunks](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a955bed02a8706e13c972f45c9263f84e)
* [get\_num\_plots](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1ab2f64cb2c3a336c0d86fb0b3799c13e5)
* [get\_num\_ranks](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1ab09b8c2d9204f66e88b1ac56b3e0e40d)
* [get\_num\_servers](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a05dc766c5d6789ca3dcbab72cf4ca4e9)
* [get\_num\_timesteps](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a43880c6392208deb0a4685fb05cd55e0)
* [get\_num\_variables](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a336a2553eb96266550f737539e85b2a8)
* [get\_part](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a53ec579c40465ee2aebf87ac60dc90fb)
* [get\_plot](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a590a1eff5cb7906028f736810e079ed6)
* [get\_plot\_chunk](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a074055c68ba05d544d653095683405c7)
* [get\_ranks](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a469f214b6c9976e81d93510410c00b70)
* [get\_timesteps](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1ad1d56e910ffc40d8f432152a1028d53b)
* [get\_variable](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1ac1ca725d3c7e7354ab38b4b3e971e2b3)
* [get\_variable\_data](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a8ec063e869d5ef051a276b0b0fab0f42)
* [IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a1d09babef55223dfb491ee9294c6e4c8)
* [IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a3ed55ea32809b9f41a7d8b870e7e6f2e)
* [IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1af5d66aa7947f611ff10ed32cfcccfe43)
* [operator=](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a54ec70d8a25eca733cc353625b446a19)
* [operator=](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a214fdde5a18f2eb2853bf56eb7354280)
* [release](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a257f79d7de21658c07dc602dfa6bbf34)
* [set\_logger](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1ab6ce54c68281ea1676af650ebc5716a0)
* [set\_server\_mod](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1acfefd0ed3856da6599599f15109ece9a)
* [~IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a5427e50031b1599477846464cb025283)

## Public functions

<a id="class_d_v_s_1_1_i_query_1a1d09babef55223dfb491ee9294c6e4c8"></a>
### Function IQuery

![][public]


```cpp
DVS::IQuery::IQuery()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_query_1a5427e50031b1599477846464cb025283"></a>
### Function ~IQuery

![][public]


```cpp
virtual DVS::IQuery::~IQuery()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_query_1a3ed55ea32809b9f41a7d8b870e7e6f2e"></a>
### Function IQuery

![][public]


```cpp
DVS::IQuery::IQuery(IQuery &&)=default
```


default





**Parameters**:

* IQuery &&

**Return type**: 

<a id="class_d_v_s_1_1_i_query_1a54ec70d8a25eca733cc353625b446a19"></a>
### Function operator=

![][public]


```cpp
IQuery & DVS::IQuery::operator=(IQuery &&)=default
```


default





**Parameters**:

* [IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a1d09babef55223dfb491ee9294c6e4c8) &&

**Return type**: [IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a1d09babef55223dfb491ee9294c6e4c8) &

<a id="class_d_v_s_1_1_i_query_1af5d66aa7947f611ff10ed32cfcccfe43"></a>
### Function IQuery

![][public]


```cpp
DVS::IQuery::IQuery(const IQuery &)=default
```


support copying





**Parameters**:

* const IQuery &

**Return type**: 

<a id="class_d_v_s_1_1_i_query_1a214fdde5a18f2eb2853bf56eb7354280"></a>
### Function operator=

![][public]


```cpp
IQuery & DVS::IQuery::operator=(const IQuery &)=default
```


default





**Parameters**:

* const [IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a1d09babef55223dfb491ee9294c6e4c8) &

**Return type**: [IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a1d09babef55223dfb491ee9294c6e4c8) &

<a id="class_d_v_s_1_1_i_query_1a257f79d7de21658c07dc602dfa6bbf34"></a>
### Function release

![][public]


```cpp
virtual void DVS::IQuery::release()=0
```


Release the memory of the query.

This will release the memory of the query, any objects returned from it (i.e. parts/plots/variables) and release the memory of any chained queries.



**Return type**: void

<a id="class_d_v_s_1_1_i_query_1ab6ce54c68281ea1676af650ebc5716a0"></a>
### Function set\_logger

![][public]


```cpp
virtual void DVS::IQuery::set_logger(DVS::ILogger *logger)=0
```


Set the logger object.

Set a logger interface for the client to use. This object will have [DVS::ILogger::release()](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a753d496b0ca488a74e6209f330b13458) invoked on it. If [release()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a257f79d7de21658c07dc602dfa6bbf34) is not implemented the memory should be destroyed by the caller after the query is released.






**Parameters**:

* **logger**: logger to use, will be released if [DVS::ILogger::release()](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a753d496b0ca488a74e6209f330b13458) is implemented



**Parameters**:

* [DVS::ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger) * **logger**

**Return type**: void

<a id="class_d_v_s_1_1_i_query_1ae1b22e6a7c4f0c76ade9105f30d1bc2d"></a>
### Function add\_uri

![][public]


```cpp
virtual dvs_ret DVS::IQuery::add_uri(const char *uri)=0
```


Add a URI for the reader API to iterate over.

This method will only "set" the current URI. In the future we will support multiple URIs queried at once.





**IMPORTANT**: Calling this will invalidate any objects returned from the query and any chained queries.





Errors:
* DVS_NONE: Success

* DVS_PARAM_NULL: uri passed in was nullptr

* DVS_QUERY_HAS_CHILDREN: Cannot add a uri to a query which already has children

* DVS_QUERY_INVALID_URI: URI passed in did not parse, invalid uri

* DVS_QUERY_INVALID_FILTER: Filter in URI did not parse, invalid filter








**Parameters**:

* **uri**: URI of a cache. See [Cache URIs](#group__group__dvs__uri_1dvs_cache_uri)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, otherwise see method description



**Parameters**:

* const char * **uri**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1a05dc766c5d6789ca3dcbab72cf4ca4e9"></a>
### Function get\_num\_servers

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_num_servers(const char *uri, uint32_t &num_servers)=0
```


Get the num servers object.

Get the number of servers the cache in the uri was written with.





Errors:
* DVS_NONE: Success

* DVS_PARAM_NULL: uri passed in was nullptr

* DVS_INVALID_CACHE: uri passed in was invalid or cache isn't accessible

* DVS_CACHE_MISSING_SERVERS: Cache has a gap in the number of servers, bad cache?

* DVS_CACHE_EMPTY: No server folders in cache

* DVS_UNKNOWN: Internal unhandled case








**Parameters**:

* **uri**: URI of a cache. See [Cache URIs](#group__group__dvs__uri_1dvs_cache_uri)
* **num_servers**: number of servers this cache was written with


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, otherwise see method description



**Parameters**:

* const char * **uri**
* uint32_t & **num_servers**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1acfefd0ed3856da6599599f15109ece9a"></a>
### Function set\_server\_mod

![][public]


```cpp
virtual void DVS::IQuery::set_server_mod(uint32_t server_num, uint32_t server_mod)=0
```


Set a filter based on the server number and a modulus.

Data in DVS is normally splitup between multiple servers. This method lets you setup the parallelism paradigm for reading in the server data. I.E. if the data was written with 4 servers but you want to read it back in with 2 servers you should have one reader use set_server_mod(0, 2) and the other use set_server_mod(1, 2). This will round robin the data so reader "0" will reader the data from 0 and 2 and server "1" will read the data from 1 and 3. To set it so that a server will read only its data set server_mod=0.





Use [get\_num\_servers()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a05dc766c5d6789ca3dcbab72cf4ca4e9) to determine the number of servers to use






**Parameters**:

* **server_num**: the base server number to read from the cache
* **server_mod**: the modulus for round-robining server data between queries/readers



**Parameters**:

* uint32_t **server_num**
* uint32_t **server_mod**

**Return type**: void

<a id="class_d_v_s_1_1_i_query_1a8a810da09342690eb371b324079f206e"></a>
### Function filter

![][public]


```cpp
virtual DVS::IQuery * DVS::IQuery::filter(const char *filter)=0
```


The filter method will allocate a new chained query with the passed in filter appended to it.

The filter method allocates a new chained query with the passed in filter appended to it. The current query is not modified. This query however is a chained child of the current query meaning that any changes to the parent will invalidate the objects of the child. [IQuery::release()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a257f79d7de21658c07dc602dfa6bbf34) will release any child chained queries created from the it.





This lets a user create a top level query, say for a specific dataset name. Then have multiple chained queries that filter for specific parts etc which can be iterated over in parallel.





**IMPORTANT**: Chained queries will have all of their objects destroyed when a parent query changes.






**Parameters**:

* **[filter](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a8a810da09342690eb371b324079f206e)**: the filter to append to the new chained child query. See [Query Stanzas](#group__group__dvs__filtering_1dvs_query_stanzas).


**Returns**:

[DVS::IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query)* a pointer to a newly allocated chained child query



**Parameters**:

* const char * **filter**

**Return type**: [DVS::IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query) *

<a id="class_d_v_s_1_1_i_query_1ab09b8c2d9204f66e88b1ac56b3e0e40d"></a>
### Function get\_num\_ranks

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_num_ranks(uint32_t &num_ranks)=0
```


Get the number of ranks for this filtered query.

This call will return all of the unique ranks across all datasets. I.E. if you are loading 2 datasets one with ranks: 0, 1, 2 and one with 0, 1, 2, 3, 4, this will return 5 representing 0,1,2,3,4.





Errors:
* DVS_NONE: Success

* DVS_INVALID_CACHE: Problem accessing cache

* DVS_DATA_FAILED_LOAD: Problem reading cache, data bad/corrupt








**Parameters**:

* **num_ranks**: the size of the buffer to allocate for [IQuery::get\_ranks()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a469f214b6c9976e81d93510410c00b70)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, otherwise see method description



**Parameters**:

* uint32_t & **num_ranks**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1a469f214b6c9976e81d93510410c00b70"></a>
### Function get\_ranks

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_ranks(uint32_t *ranks)=0
```


Get the unique ranks for this filtered query.

This call will return all of the unique ranks across all datasets. I.E. if you are loading 2 datasets one with ranks: 0, 1, 2 and one with 0, 1, 2, 3, 4, this will return 5 representing 0,1,2,3,4.





Errors:
* DVS_NONE: Success

* DVS_PARAM_NULL: ranks passed in is nullptr

* DVS_INVALID_CACHE: Problem accessing cache

* DVS_DATA_FAILED_LOAD: Problem reading cache, data bad/corrupt








**Parameters**:

* **ranks**: an array of the unique ranks for this query, call [IQuery::get\_num\_ranks()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1ab09b8c2d9204f66e88b1ac56b3e0e40d) for buffer size to allocate


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, otherwise see method description



**Parameters**:

* uint32_t * **ranks**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1aaae39d1931433b35162c3b37dc82c4f1"></a>
### Function get\_num\_chunks\_per\_rank

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_num_chunks_per_rank(uint32_t &num_chunks)=0
```


Get the number of chunks for each rank.

This method returns the size of the buffer needed to pass in for get_chunks_per_rank. This will be of the same size as [IQuery::get\_num\_ranks()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1ab09b8c2d9204f66e88b1ac56b3e0e40d).





This call will return all of the chunk information for every rank returned from [IQuery::get\_ranks()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a469f214b6c9976e81d93510410c00b70).





Errors:
* DVS_NONE: Success

* DVS_INVALID_CACHE: Problem accessing cache

* DVS_DATA_FAILED_LOAD: Problem reading cache, data bad/corrupt








**Parameters**:

* **num_chunks**: if success returns the size of the buffer to allocate for [IQuery::get\_chunks\_per\_rank()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a4d1a83603bec00bdebc8430a5c48e742)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, otherwise see method description



**Parameters**:

* uint32_t & **num_chunks**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1a4d1a83603bec00bdebc8430a5c48e742"></a>
### Function get\_chunks\_per\_rank

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_chunks_per_rank(uint32_t *chunks)=0
```


Get an array of the number of chunks for every rank for this query.

This method will return an array of max number of chunks for every rank. The size of the buffer needed can be retrieved from [IQuery::get\_num\_chunks\_per\_rank()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1aaae39d1931433b35162c3b37dc82c4f1). These values correspond to the ranks returned from [IQuery::get\_ranks()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a469f214b6c9976e81d93510410c00b70). Since there might be multiple datasets in the query this will return the max for each rank across the datasets and parts.





This call will return all of the chunk information for every rank returned from [IQuery::get\_ranks()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a469f214b6c9976e81d93510410c00b70).





Errors:
* DVS_NONE: Success

* DVS_PARAM_NULL: chunks passed in is nullptr

* DVS_INVALID_CACHE: Problem accessing cache

* DVS_DATA_FAILED_LOAD: Problem reading cache, data bad/corrupt








**Parameters**:

* **chunks**: buffer to save chunk information in, an array of the chunks for each rank


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE if success, otherwise see method description



**Parameters**:

* uint32_t * **chunks**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1a48165c3147ae5d084577b9b8acb05638"></a>
### Function get\_num\_datasets

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_num_datasets(uint32_t &num_datasets)=0
```


Get the number of datasets objects.

**IMPORTANT**: The number of datasets will be invalid if this query or any parent queries' filters are modified.





Errors:
* DVS_NONE: Success

* DVS_INVALID_CACHE: Problem accessing cache

* DVS_DATA_FAILED_LOAD: Problem reading cache, data bad/corrupt








**Parameters**:

* **num_datasets**: if success, returns the number of datasets for this query


**Returns**:

DVS_NONE on success, else see method description



**Parameters**:

* uint32_t & **num_datasets**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1a574de84a9a4d7a5e3e777a35b1b6c2bc"></a>
### Function get\_dataset

![][public]


```cpp
virtual DVS::IDataset * DVS::IQuery::get_dataset(uint32_t index)=0
```


Get the dataset object.

**IMPORTANT**: This object will be destroyed if this query or parent queries' filters are modified.






**Parameters**:

* **index**: index of the dataset to retrieve


**Returns**:

[DVS::IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset)* dataset for the index, or nullptr if not found



**Parameters**:

* uint32_t **index**

**Return type**: [DVS::IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset) *

<a id="class_d_v_s_1_1_i_query_1a2dab5f63a6c619a1ee6d3138679c9eac"></a>
### Function get\_num\_parts

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_num_parts(uint32_t &num_parts)=0
```


Get the number of parts for this query.

**IMPORTANT**: The number of parts will be invalid if this query or any parent queries' filters are modifed.





Errors:
* DVS_NONE: Success

* DVS_INVALID_CACHE: Problem accessing cache

* DVS_DATA_FAILED_LOAD: Problem reading cache, data bad/corrupt








**Parameters**:

* **num_parts**: if success, returns the number of parts for this query


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, else see method description



**Parameters**:

* uint32_t & **num_parts**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1a53ec579c40465ee2aebf87ac60dc90fb"></a>
### Function get\_part

![][public]


```cpp
virtual const DVS::IObject * DVS::IQuery::get_part(uint32_t index)=0
```


Get the part based on the index.

**IMPORTANT**: This object will be destroyed if this query or parent queries' filters are modified.






**Parameters**:

* **index**: index of the part to retrieve


**Returns**:

[DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object)* part based on the index, or nullptr if not found



**Parameters**:

* uint32_t **index**

**Return type**: const [DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object) *

<a id="class_d_v_s_1_1_i_query_1ab2f64cb2c3a336c0d86fb0b3799c13e5"></a>
### Function get\_num\_plots

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_num_plots(uint32_t &num_plots)=0
```


Get the number of plots for this query.

**IMPORTANT**: The number of plots will be invalid if this query or any parent queries' filters are modifed.





Errors:
* DVS_NONE: Success

* DVS_INVALID_CACHE: Problem accessing cache

* DVS_DATA_FAILED_LOAD: Problem reading cache, data bad/corrupt








**Parameters**:

* **num_plots**: if success, returns the number of plots for this query


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, else see method description



**Parameters**:

* uint32_t & **num_plots**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1a590a1eff5cb7906028f736810e079ed6"></a>
### Function get\_plot

![][public]


```cpp
virtual const DVS::IObject * DVS::IQuery::get_plot(uint32_t index)=0
```


Get the plot object based on the index.

**IMPORTANT**: This object will be destroyed if this query or parent queries' filters are modified.






**Parameters**:

* **index**: index of the plot to retrieve


**Returns**:

[DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object)* plot based on the index, or nullptr if not found



**Parameters**:

* uint32_t **index**

**Return type**: const [DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object) *

<a id="class_d_v_s_1_1_i_query_1a8ec063e869d5ef051a276b0b0fab0f42"></a>
### Function get\_variable\_data

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_variable_data(const DVS::IObject *object, const DVS::IVar *var, float time, float *values)=0
```


Get variable values for dataset and part objects.

Dataset (Case) or part objects can have variable values per timestep. This method retrieves those values or returns if they do not exist. There does not need to be a value set for every part variable on every part. DVS_NO_DATA will be returned in this case.





Error Codes:
* DVS_NONE: No error

* DVS_PARAM_NULL: Null param passed in

* DVS_PARAM_INVALID_VAR: Invalid variable passed in, should not be possible

* DVS_PARAM_INVALID_VAR_LOC: Variable passed in not a case or part variable

* DVS_PARAM_INVALID_OBJECT_TYPE: Object passed in not a case or part object

* DVS_PARAM_INVALID_OBJECT: Invalid object passed in, should not be possible

* DVS_PARAM_INVALID_TIME: Timestep does not exist for the dataset the object belongs to

* DVS_PARAM_OBJECT_DATASET_MISMATCH: Object and variable are from different datasets








**Parameters**:

* **object**: The case/dataset or part object to find values for
* **var**: the variable to retrieve the data for
* **time**: the time value to retrieve the variable data for
* **values**: the array of data to return, should be of size [DVS::IVar::get\_float\_count\_per\_value()](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1a9dbdd84e6f6342deae82ede6dcf2156e)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE if no errors, DVS_NO_DATA if no data found, otherwise see method description



**Parameters**:

* const [DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object) * **object**
* const [DVS::IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) * **var**
* float **time**
* float * **values**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1a336a2553eb96266550f737539e85b2a8"></a>
### Function get\_num\_variables

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_num_variables(uint32_t &num_vars)=0
```


Get the number of variables for this query.

**IMPORTANT**: The number of variables will be invalid if this query or any parent queries' filters are modifed.





Errors:
* DVS_NONE: Success

* DVS_INVALID_CACHE: Problem accessing cache

* DVS_DATA_FAILED_LOAD: Problem reading cache, data bad/corrupt








**Parameters**:

* **num_vars**: if success, returns the number of variables for this query


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, else see method description



**Parameters**:

* uint32_t & **num_vars**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1ac1ca725d3c7e7354ab38b4b3e971e2b3"></a>
### Function get\_variable

![][public]


```cpp
virtual const DVS::IVar * DVS::IQuery::get_variable(uint32_t index)=0
```


Get the variable object based on the index.

**IMPORTANT**: This object will be destroyed if this query or parent queries' filters are modified.






**Parameters**:

* **index**: index of the variable to retrieve


**Returns**:

[DVS::IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var)* variable based on the index, or nullptr if not found



**Parameters**:

* uint32_t **index**

**Return type**: const [DVS::IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) *

<a id="class_d_v_s_1_1_i_query_1a43880c6392208deb0a4685fb05cd55e0"></a>
### Function get\_num\_timesteps

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_num_timesteps(uint32_t &num_timesteps)=0
```


Get the number of timesteps.

NOT YET IMPLEMENTED





**IMPORTANT**: The number of timesteps will be invalid if this query or any parent queries' filters are modified.





Errors:
* DVS_NONE: Success

* DVS_INVALID_CACHE: Problem accessing cache

* DVS_DATA_FAILED_LOAD: Problem reading cache, data bad/corrupt

* DVS_QUERY_INVALID_FILTER: Invalid filter for query

* DVS_METADATA_ERROR: Error loading metadata








**Parameters**:

* **num_timesteps**: if success, returns the number of timesteps to allocate for [IQuery::get\_timesteps()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1ad1d56e910ffc40d8f432152a1028d53b)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, else see method description



**Parameters**:

* uint32_t & **num_timesteps**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1ad1d56e910ffc40d8f432152a1028d53b"></a>
### Function get\_timesteps

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_timesteps(float *timesteps)=0
```


Get the timesteps object.

NOT YET IMPLEMENTED





**IMPORTANT**: The timesteps will be invalid if this query or any parent queries' filters are modified.





Errors:
* DVS_NONE: Success

* DVS_PARAM_NULL: timesteps param is nullptr

* DVS_INVALID_CACHE: Problem accessing cache

* DVS_DATA_FAILED_LOAD: Problem reading cache, data bad/corrupt

* DVS_QUERY_INVALID_FILTER: Invalid filter for query

* DVS_METADATA_ERROR: Error loading metadata








**Parameters**:

* **timesteps**: buffer for timesteps to be saved in, call [IQuery::get\_num\_timesteps()](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query_1a43880c6392208deb0a4685fb05cd55e0) to determine size


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, else see method description



**Parameters**:

* float * **timesteps**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1a0e4ef2e5ffb8a6e3cfe1d1841ef4007b"></a>
### Function get\_num\_mesh\_chunks

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_num_mesh_chunks(uint32_t &num_mesh_chunks)=0
```


Get the number of mesh chunks for this query.

NOT YET IMPLEMENTED





**IMPORTANT**: The number of mesh chunks will be invalid if this query or any parent queries' filters are modified.





Errors:
* DVS_NONE: Success

* DVS_INVALID_CACHE: Problem accessing cache

* DVS_DATA_FAILED_LOAD: Problem reading cache, data bad/corrupt

* DVS_QUERY_INVALID_FILTER: Invalid filter for query

* DVS_METADATA_ERROR: Error loading metadata








**Parameters**:

* **num_mesh_chunks**: if success, returns the number of mesh chunks for this query


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, else see method description



**Parameters**:

* uint32_t & **num_mesh_chunks**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1a00a3a6962690c69ea8cef8815a72c011"></a>
### Function get\_mesh\_chunk

![][public]


```cpp
virtual DVS::IMeshChunk * DVS::IQuery::get_mesh_chunk(uint32_t index)=0
```


Get the mesh chunk based on the index.

**IMPORTANT**: This object will be destroyed if this query or parent queries' filters are modified.






**Parameters**:

* **index**: the index of the mesh chunk to retrieve


**Returns**:

[DVS::IMeshChunk](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk)* the mesh chunk for the index, or nullptr if not found



**Parameters**:

* uint32_t **index**

**Return type**: [DVS::IMeshChunk](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk) *

<a id="class_d_v_s_1_1_i_query_1a955bed02a8706e13c972f45c9263f84e"></a>
### Function get\_num\_plot\_chunks

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_num_plot_chunks(uint32_t &num_plot_chunks)=0
```


Get the number of plot chunks for this query.

NOT YET IMPLEMENTED





**IMPORTANT**: The number of plot chunks will be invalid if this query or any parent queries' filters are modified.





Errors:
* DVS_NONE: Success

* DVS_INVALID_CACHE: Problem accessing cache

* DVS_DATA_FAILED_LOAD: Problem reading cache, data bad/corrupt

* DVS_QUERY_INVALID_FILTER: Invalid filter for query

* DVS_METADATA_ERROR: Error loading metadata








**Parameters**:

* **num_plot_chunks**: if success, returns the number of plot chunks for this query


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, else see method description



**Parameters**:

* uint32_t & **num_plot_chunks**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1a074055c68ba05d544d653095683405c7"></a>
### Function get\_plot\_chunk

![][public]


```cpp
virtual DVS::IPlotChunk * DVS::IQuery::get_plot_chunk(uint32_t index)=0
```


Get the plot chunk based on the index.

**IMPORTANT**: This object will be destroyed if this query or parent queries' filters are modified.






**Parameters**:

* **index**: index of the plot chunk to retrieve


**Returns**:

[DVS::IPlotChunk](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk)* the plot chunk based on the index, or nullptr if not found



**Parameters**:

* uint32_t **index**

**Return type**: [DVS::IPlotChunk](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk) *

<a id="class_d_v_s_1_1_i_query_1a818f3065fbaa299112d3efa4257bbfec"></a>
### Function get\_hash\_available

![][public]


```cpp
virtual dvs_ret DVS::IQuery::get_hash_available(const char *hash, bool &available)=0
```


Get if the hash is available in the blobstore.

Checks the blobstore to see if the hash is available or not. This is mainly used for validation purposes.





Errors:
* DVS_NONE: Success

* DVS_PARAM_NULL: hash passed in nullptr

* DVS_INVALID_CACHE: Invalid cache, bad data

* DVS_INVALID_HASH: Hash passed in invalid








**Parameters**:

* **hash**: hash to check availability of, retrieved via [DVS::IHash::get\_hash()](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a51eaee86a6e2db4dda7f4326daa33874) or [DVS::IVarHash::get\_var\_hash()](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash_1a17fff1548eb276edd326a0af08f6a7c4)
* **available**: if success, returns true if found in blobstore, else false


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, else see method description



**Parameters**:

* const char * **hash**
* bool & **available**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_query_1a2d3edc4b63b016009ef81553ab4e8b06"></a>
### Function clear\_data

![][public]


```cpp
virtual void DVS::IQuery::clear_data()=0
```


Clear the current query.





**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)