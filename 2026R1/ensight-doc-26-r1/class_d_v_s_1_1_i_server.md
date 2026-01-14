# Class DVS::IServer

<a id="class_d_v_s_1_1_i_server"></a>

![][C++]
![][public]


Interface class used to run a dynamic data server in a thread accepting incoming client connections.

Usage: <br/>
1.) Instantiate [DVS::IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server) using [DVS::CREATE\_SERVER\_INSTANCE()](namespace_d_v_s.md#dvs__server__interface_8h_1a852580b9a49ac305e4ae26ca637bcc75) method <br/>
2.) Set options using [DVS::IServer::set\_options()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a964b0420773ec5f47dbcea04334ba0d3) or [DVS::IServer::set\_option()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a1edb4dec67086f10bc0329b6adf9084c) <br/>
3.) Startup server using [DVS::IServer::startup()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a6699cf48b29583ab3391b9b8397e611c) <br/>
4.) If needed see if it's running via [DVS::IServer::running()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a5fdee3f663dbe7b7dab11621f76737e2) <br/>
5.) Shutdown server using [DVS::IServer::shutdown()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a7ce6bb49a2d383b0821267415a93802d) <br/>
6.) Destroy instance using [DVS::DESTROY\_SERVER\_INSTANCE()](namespace_d_v_s.md#dvs__server__interface_8h_1adcdcbab1954ec53631a7136af7fc49b8) <br/>

## Members

* [clear\_options](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1acf90686fce61dd0bc59af6e411f7861b)
* [create\_query](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1aee25312f757c5bc4f6dd304dd7da68a9)
* [create\_transport](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a68fca8531459488f5694507ad5df0482)
* [get\_timestep\_count](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a8a5339f222bcd46b06c2fa9a474b2c37)
* [get\_uri](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a087c3fed77651e0f62d7189f44a32443)
* [IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a54d47cdb16aa41fb6f101db7d88286bb)
* [IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a1bfc7399b2562a0b219ae556708556da)
* [IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a79d4ea86ffdb968a03c9b81aa3fc8612)
* [operator=](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1aba394d20a8b4ee8a89e02550a0d88640)
* [operator=](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a9910b6c51adf4489bc1bc8c86b9fabb3)
* [running](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a5fdee3f663dbe7b7dab11621f76737e2)
* [set\_option](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a1edb4dec67086f10bc0329b6adf9084c)
* [set\_options](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a964b0420773ec5f47dbcea04334ba0d3)
* [shutdown](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a7ce6bb49a2d383b0821267415a93802d)
* [startup](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a6699cf48b29583ab3391b9b8397e611c)
* [startup\_unthreaded](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1ac61ce2698eec1adb521bbbf60cb78756)
* [terminating](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a6cb1f69ad4b9213dde48d4cd5b3f2111)
* [update](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1add6fcb530763dc217f5b3c17b25093c0)
* [~IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1ad41fe7a344c5b6d1d37d71278bce012c)

## Public functions

<a id="class_d_v_s_1_1_i_server_1a54d47cdb16aa41fb6f101db7d88286bb"></a>
### Function IServer

![][public]


```cpp
DVS::IServer::IServer()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_server_1ad41fe7a344c5b6d1d37d71278bce012c"></a>
### Function ~IServer

![][public]


```cpp
virtual DVS::IServer::~IServer()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_server_1a1bfc7399b2562a0b219ae556708556da"></a>
### Function IServer

![][public]


```cpp
DVS::IServer::IServer(IServer &&)=default
```


default





**Parameters**:

* IServer &&

**Return type**: 

<a id="class_d_v_s_1_1_i_server_1aba394d20a8b4ee8a89e02550a0d88640"></a>
### Function operator=

![][public]


```cpp
IServer & DVS::IServer::operator=(IServer &&)=default
```


default





**Parameters**:

* [IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a54d47cdb16aa41fb6f101db7d88286bb) &&

**Return type**: [IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a54d47cdb16aa41fb6f101db7d88286bb) &

<a id="class_d_v_s_1_1_i_server_1a79d4ea86ffdb968a03c9b81aa3fc8612"></a>
### Function IServer

![][public]


```cpp
DVS::IServer::IServer(const IServer &)=default
```


support copying





**Parameters**:

* const IServer &

**Return type**: 

<a id="class_d_v_s_1_1_i_server_1a9910b6c51adf4489bc1bc8c86b9fabb3"></a>
### Function operator=

![][public]


```cpp
IServer & DVS::IServer::operator=(const IServer &)=default
```


default





**Parameters**:

* const [IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a54d47cdb16aa41fb6f101db7d88286bb) &

**Return type**: [IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a54d47cdb16aa41fb6f101db7d88286bb) &

<a id="class_d_v_s_1_1_i_server_1a964b0420773ec5f47dbcea04334ba0d3"></a>
### Function set\_options

![][public]


```cpp
virtual void DVS::IServer::set_options(const std::map< const char *, const char * > &options)=0
```


Set a collection of options on the server. Overwrites previous options See. See [Server Options](#group__group__dvs__server_1dvs_server_options).

**Parameters**:

* **options**: options to set on the server, see [DVS::IServer::set\_option()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a1edb4dec67086f10bc0329b6adf9084c) for options available



**Parameters**:

* const std::map< const char *, const char * > & **options**

**Return type**: void

<a id="class_d_v_s_1_1_i_server_1a1edb4dec67086f10bc0329b6adf9084c"></a>
### Function set\_option

![][public]


```cpp
virtual void DVS::IServer::set_option(const char *key, const char *value)=0
```


Set a specific option on the server, these are used during startup See See [Server Options](#group__group__dvs__server_1dvs_server_options).

Current available options: <br/>
CACHE_URI: This will set the location and type of cache to store data to.






**Parameters**:

* **key**: Name of option to set
* **value**: Value of option



**Parameters**:

* const char * **key**
* const char * **value**

**Return type**: void

<a id="class_d_v_s_1_1_i_server_1acf90686fce61dd0bc59af6e411f7861b"></a>
### Function clear\_options

![][public]


```cpp
virtual void DVS::IServer::clear_options()=0
```


Clear all options from the server.





**Return type**: void

<a id="class_d_v_s_1_1_i_server_1a5fdee3f663dbe7b7dab11621f76737e2"></a>
### Function running

![][public]
![][const]


```cpp
virtual bool DVS::IServer::running() const =0
```


Check to see if the server is running.

Currently this is a dumb check to see if the server was tried to start. If port listening failed this will call will not fail currently.






**Returns**:

true if running/started



**Return type**: bool

<a id="class_d_v_s_1_1_i_server_1a8a5339f222bcd46b06c2fa9a474b2c37"></a>
### Function get\_timestep\_count

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IServer::get_timestep_count(uint32_t &num_pending, uint32_t &num_complete) const =0
```


return the current number of pending and complete timesteps in the server

Simple count of the current state of the timesteps in the server






**Parameters**:

* **num_pending**: the number of pending timesteps not complete yet
* **num_complete**: num_complete the number of complete timesteps


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_SERVER_NOT_STARTED or DVS_NONE



**Parameters**:

* uint32_t & **num_pending**
* uint32_t & **num_complete**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_server_1a6699cf48b29583ab3391b9b8397e611c"></a>
### Function startup

![][public]


```cpp
virtual dvs_ret DVS::IServer::startup(uint32_t server_number, uint32_t local_ranks)=0
```


Start the server.

server_number is used by the DVS server, for each group of servers this number should be unique and monotonically increasing with no gaps (valid: 0, 1, 2 invalid: 0, 2)





local_ranks is used to determine how many clients will be connecting to this server






**Parameters**:

* **server_number**: The server number (zero based) for this server, should be unique for each server in this server group
* **local_ranks**: Number of local ranks this server will handle


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, else error code



**Parameters**:

* uint32_t **server_number**
* uint32_t **local_ranks**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_server_1ac61ce2698eec1adb521bbbf60cb78756"></a>
### Function startup\_unthreaded

![][public]


```cpp
virtual dvs_ret DVS::IServer::startup_unthreaded(uint32_t server_number, uint32_t local_ranks)=0
```


Startup a server manually without threads.

This method is for when a user wants to manually run their own server to more tightly control the execution and threading model. This call WILL block until the first timestep is received and will not return unless [terminating()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a6cb1f69ad4b9213dde48d4cd5b3f2111) has been called from another thread or interrupt.





server_number is used by the DVS server, for each group of servers this number should be unique and monotonically increasing with no gaps (valid: 0, 1, 2 invalid: 0, 2)





local_ranks is used to determine how many clients will be connecting to this server





The normal call chain would be to call [startup\_unthreaded()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1ac61ce2698eec1adb521bbbf60cb78756) and then loop calling [update()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1add6fcb530763dc217f5b3c17b25093c0) until some end condition is met. Please see [test\_dvs\_server.cpp](test__dvs__server_8cpp.md#test__dvs__server_8cpp) for an example.






**Parameters**:

* **server_number**: The server number (zero based) for this server, should be unique for each server in this server group
* **local_ranks**: Number of local ranks this server will handle


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, else error code



**Parameters**:

* uint32_t **server_number**
* uint32_t **local_ranks**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_server_1add6fcb530763dc217f5b3c17b25093c0"></a>
### Function update

![][public]


```cpp
virtual dvs_ret DVS::IServer::update()=0
```


Perform a server update.

This method performs a server update. This will: 1.) Perform a complete timestep check and flush complete timesteps to the cache 2.) Perform a check if any new delete_item calls should be processed 3.) Perform a check to see if the dataset definition needs to be updated





The number of pending timesteps from [get\_timestep\_count()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a8a5339f222bcd46b06c2fa9a474b2c37) will not update unless this is called.





Important: This is not needed to be called if using the normal [startup()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a6699cf48b29583ab3391b9b8397e611c) procedure and should only be used when manually running the server with startup_unthreaded. This must be called periodically for the server to function properly.






**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success



**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_server_1a6cb1f69ad4b9213dde48d4cd5b3f2111"></a>
### Function terminating

![][public]


```cpp
virtual dvs_ret DVS::IServer::terminating()=0
```


Call to begin terminating the server.

This method begins terminating the server when [startup\_unthreaded()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1ac61ce2698eec1adb521bbbf60cb78756) is invoked. This will cause new updates sending new timesteps, to fail and exit early from any waiting calls on the server.





Important: This call is not needed if using the normal startup method as it will handle this for you.






**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, DVS_SERVER_FAILED_READER_CREATE if the server wasn't started



**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_server_1a7ce6bb49a2d383b0821267415a93802d"></a>
### Function shutdown

![][public]


```cpp
virtual void DVS::IServer::shutdown()=0
```


Shutdown the server, also called on server destruction by [DVS::DESTROY\_SERVER\_INSTANCE()](namespace_d_v_s.md#dvs__server__interface_8h_1adcdcbab1954ec53631a7136af7fc49b8).





**Return type**: void

<a id="class_d_v_s_1_1_i_server_1a68fca8531459488f5694507ad5df0482"></a>
### Function create\_transport

![][public]


```cpp
virtual ITransport * DVS::IServer::create_transport(const std::string &shared_secret)=0
```


Create a transport object to communicate with server, must be destroyed.

**Parameters**:

* **shared_secret**: The transport protocol shared secret string used to validate connections. It may be an empty string. If "SERVER_SECURITY_SECRET" is set as a server option shared_secret will be ignored.


**Returns**:

ITransport* instance to transport object owned by Server instance



**Parameters**:

* const std::string & **shared_secret**

**Return type**: ITransport *

<a id="class_d_v_s_1_1_i_server_1a087c3fed77651e0f62d7189f44a32443"></a>
### Function get\_uri

![][public]


```cpp
virtual const char * DVS::IServer::get_uri()=0
```


Get URI of this server.

**Returns**:

URI this server was created with



**Return type**: const char *

<a id="class_d_v_s_1_1_i_server_1aee25312f757c5bc4f6dd304dd7da68a9"></a>
### Function create\_query

![][public]


```cpp
virtual DVS::IQuery * DVS::IServer::create_query(const std::string &filter=std::string(), DVS::IQuery *parent=nullptr)=0
```


Create a DVS query instance. This will inherit the DVS server reader instance.

**Parameters**:

* **parent**: An eventual parent query to create the new query with. Defaults to nullptr
* **filter**: An eventual filter string to apply to the new query. Defaults to the empty string


**Returns**:

The query instance created.



**Parameters**:

* const std::string & **filter** = std::string() 
* [DVS::IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query) * **parent** = nullptr 

**Return type**: [DVS::IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query) *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)