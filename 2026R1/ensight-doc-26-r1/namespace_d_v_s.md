# Namespace DVS

<a id="namespace_d_v_s"></a>

![][C++]






## Classes

* [DVS::IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset)
* [DVS::IElementBlock](class_d_v_s_1_1_i_element_block.md#class_d_v_s_1_1_i_element_block)
* [DVS::IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash)
* [DVS::IMeshChunk](class_d_v_s_1_1_i_mesh_chunk.md#class_d_v_s_1_1_i_mesh_chunk)
* [DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object)
* [DVS::IPlotChunk](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk)
* [DVS::IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query)
* [DVS::IVarHash](class_d_v_s_1_1_i_var_hash.md#class_d_v_s_1_1_i_var_hash)
* [DVS::IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var)
* [DVS::IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client)
* [DVS::IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server)
* [DVS::ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger)
* [DVS::LoggerVerbose](class_d_v_s_1_1_logger_verbose.md#class_d_v_s_1_1_logger_verbose)

## Enumeration types

<a id="dvs__var__interface_8h_1a84856d33cb231d1d87a603758b8b8066"></a>
### Enumeration type VAR\_TYPE

![][public]



```cpp
enum VAR_TYPE {
  FLOAT,
  INT64
}
```


Variable type enum definition.

Support FLOAT and INT64 Usage example: if VAR_TYPE::INT64 is passed in as an argument of a method. Only int64_t data will be processed. By default, VAR_TYPE::FLOAT is used.



<a id="dvs__var__interface_8h_1a84856d33cb231d1d87a603758b8b8066ae738c26bf4ce1037fa81b039a915cbf6"></a>
#### Enumerator FLOAT





<a id="dvs__var__interface_8h_1a84856d33cb231d1d87a603758b8b8066a4e866b275c85fbb439f6484251cfb31c"></a>
#### Enumerator INT64





## Functions

<a id="dvs__query__interface_8h_1ac614cf475eca0727cdb5b42faabcca7d"></a>
### Function CREATE\_QUERY\_INSTANCE

![][public]


```cpp
DVS_DLL_EXPORT IQuery * DVS::CREATE_QUERY_INSTANCE()
```


Create a query interface object.

**Returns**:

[DVS::IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query) object instance, call release to destroy this object



**Return type**: DVS_DLL_EXPORT [IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query) *

<a id="dvs__client__interface_8h_1a2475075c9ab4c2e57a8f0b4ab5bc5df4"></a>
### Function CREATE\_CLIENT\_INSTANCE

![][public]


```cpp
DVS_DLL_EXPORT DVS::IClient * DVS::CREATE_CLIENT_INSTANCE(DVS::IServer *server, dvs_client_flags flags, const char *secret)
```


Factory method to create a dynamic data client interface instance.

**Parameters**:

* **server**: Server instance to connect to
* **flags**: config flags for client setup see [dvs\_client\_flags](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1aec8cbac60b9cafe5d1c0ad6593f05e9f) ([dynamic\_visualization\_store\_enums.h](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h))
* **secret**: secret shared secret to use to connect to server, can be empty


**Returns**:

[DVS::IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client)* instance of a dvs client, (nullptr if failure), must be destroyed with DESTROY_CLIENT_INSTANCE



**Parameters**:

* [DVS::IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server) * **server**
* [dvs\_client\_flags](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1aec8cbac60b9cafe5d1c0ad6593f05e9f) **flags**
* const char * **secret**

**Return type**: DVS_DLL_EXPORT [DVS::IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client) *

<a id="dvs__client__interface_8h_1a3f13d009a9a07278cbca3449113d78fc"></a>
### Function DESTROY\_CLIENT\_INSTANCE

![][public]


```cpp
DVS_DLL_EXPORT void DVS::DESTROY_CLIENT_INSTANCE(DVS::IClient *destroy)
```


Destruction method for a client created with CREATE_CLIENT_INSTANCE.

**Parameters**:

* **destroy**: Instance of a client to destroy



**Parameters**:

* [DVS::IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client) * **destroy**

**Return type**: DVS_DLL_EXPORT void

<a id="dvs__server__interface_8h_1a852580b9a49ac305e4ae26ca637bcc75"></a>
### Function CREATE\_SERVER\_INSTANCE

![][public]


```cpp
DVS_DLL_EXPORT IServer * DVS::CREATE_SERVER_INSTANCE(const char *uri)
```


Create a [DVS::IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server) instance for clients to connect to.

There are currently 2 types of server communication, grpc over a network or "null" which uses direct method calls.






**Parameters**:

* **uri**: URI of server to create of the format protocol://hostname:port, i.e. grpc://localhost:50055 or null:// see [Server URIs](#group__group__dvs__uri_1dvs_server_uri) for more info.


**Returns**:

IServer* instance to be later destroyed by calling [DVS::DESTROY\_SERVER\_INSTANCE()](namespace_d_v_s.md#dvs__server__interface_8h_1adcdcbab1954ec53631a7136af7fc49b8)



**Parameters**:

* const char * **uri**

**Return type**: DVS_DLL_EXPORT [IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server) *

<a id="dvs__server__interface_8h_1adcdcbab1954ec53631a7136af7fc49b8"></a>
### Function DESTROY\_SERVER\_INSTANCE

![][public]


```cpp
DVS_DLL_EXPORT void DVS::DESTROY_SERVER_INSTANCE(DVS::IServer *destroy)
```


Destroy the server instance (also shutting it down if needed).

**Parameters**:

* **destroy**: [DVS::IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server) instance to destroy



**Parameters**:

* [DVS::IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server) * **destroy**

**Return type**: DVS_DLL_EXPORT void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)