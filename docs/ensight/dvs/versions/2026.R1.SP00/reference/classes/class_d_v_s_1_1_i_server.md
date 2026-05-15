# Class DVS::IServer

<a id="class_d_v_s_1_1_i_server"></a>

![][C++]
![][public]


Interface class used to run a dynamic data server in a thread accepting incoming client connections.

Usage: <br/>
1.) Instantiate [DVS::IServer](#class-dvsiserver) using [DVS::CREATE\_SERVER\_INSTANCE()](../namespaces/namespace_d_v_s.md#function-create_server_instance) method <br/>
2.) Set options using [DVS::IServer::set\_options()](class_d_v_s_1_1_i_server.md#function-set_options) or [DVS::IServer::set\_option()](class_d_v_s_1_1_i_server.md#function-set_option) <br/>
3.) Startup server using [DVS::IServer::startup()](class_d_v_s_1_1_i_server.md#function-startup) <br/>
4.) If needed see if it's running via [DVS::IServer::running()](class_d_v_s_1_1_i_server.md#function-running) <br/>
5.) Shutdown server using [DVS::IServer::shutdown()](class_d_v_s_1_1_i_server.md#function-shutdown) <br/>
6.) Destroy instance using [DVS::DESTROY\_SERVER\_INSTANCE()](../namespaces/namespace_d_v_s.md#function-destroy_server_instance) <br/>

## Members

* [clear\_options](class_d_v_s_1_1_i_server.md#function-clear_options)
* [create\_query](class_d_v_s_1_1_i_server.md#function-create_query)
* [create\_transport](class_d_v_s_1_1_i_server.md#function-create_transport)
* [get\_timestep\_count](class_d_v_s_1_1_i_server.md#function-get_timestep_count)
* [get\_uri](class_d_v_s_1_1_i_server.md#function-get_uri)
* [IServer](class_d_v_s_1_1_i_server.md#function-iserver)
* [IServer](class_d_v_s_1_1_i_server.md#function-iserver-1)
* [IServer](class_d_v_s_1_1_i_server.md#function-iserver-2)
* [operator=](class_d_v_s_1_1_i_server.md#function-operator)
* [operator=](class_d_v_s_1_1_i_server.md#function-operator-1)
* [running](class_d_v_s_1_1_i_server.md#function-running)
* [set\_option](class_d_v_s_1_1_i_server.md#function-set_option)
* [set\_options](class_d_v_s_1_1_i_server.md#function-set_options)
* [shutdown](class_d_v_s_1_1_i_server.md#function-shutdown)
* [startup](class_d_v_s_1_1_i_server.md#function-startup)
* [startup\_unthreaded](class_d_v_s_1_1_i_server.md#function-startup_unthreaded)
* [terminating](class_d_v_s_1_1_i_server.md#function-terminating)
* [update](class_d_v_s_1_1_i_server.md#function-update)
* [~IServer](class_d_v_s_1_1_i_server.md#function-iserver)

## Public Functions

<a id="class_d_v_s_1_1_i_server_1a54d47cdb16aa41fb6f101db7d88286bb"></a>
### Function IServer

![][public]


```cpp
DVS::IServer::IServer()=default
```


Default





**Return type**: 

<a id="class_d_v_s_1_1_i_server_1ad41fe7a344c5b6d1d37d71278bce012c"></a>
### Function ~IServer

![][public]


```cpp
virtual DVS::IServer::~IServer()=default
```


Default





**Return type**: 

<a id="class_d_v_s_1_1_i_server_1a1bfc7399b2562a0b219ae556708556da"></a>
### Function IServer

![][public]


```cpp
DVS::IServer::IServer(IServer &&)=default
```


Default





**Parameters**:

* IServer &&

**Return type**: 

<a id="class_d_v_s_1_1_i_server_1aba394d20a8b4ee8a89e02550a0d88640"></a>
### Function operator=

![][public]


```cpp
IServer & DVS::IServer::operator=(IServer &&)=default
```


Default





**Parameters**:

* [IServer](#class-dvsiserver) &&

**Return type**: [IServer](#class-dvsiserver) &

<a id="class_d_v_s_1_1_i_server_1a79d4ea86ffdb968a03c9b81aa3fc8612"></a>
### Function IServer

![][public]


```cpp
DVS::IServer::IServer(const IServer &)=default
```


Support Copying





**Parameters**:

* const IServer &

**Return type**: 

<a id="class_d_v_s_1_1_i_server_1a9910b6c51adf4489bc1bc8c86b9fabb3"></a>
### Function operator=

![][public]


```cpp
IServer & DVS::IServer::operator=(const IServer &)=default
```


Default





**Parameters**:

* const [IServer](#class-dvsiserver) &

**Return type**: [IServer](#class-dvsiserver) &

<a id="class_d_v_s_1_1_i_server_1a964b0420773ec5f47dbcea04334ba0d3"></a>
### Function set\_options

![][public]


```cpp
virtual void DVS::IServer::set_options(const std::map< const char *, const char * > &options)=0
```


Set a Collection of Options on the Server. Overwrites Previous Options See. See [Server Options](../../user-guide/dvs-server.md#server-options).

**Parameters**:

* **options**: Options to Set on the Server, See [DVS::IServer::set\_option()](class_d_v_s_1_1_i_server.md#function-set_option) for Options Available



**Parameters**:

* const std::map< const char *, const char * > & **options**

**Return type**: void

<a id="class_d_v_s_1_1_i_server_1a1edb4dec67086f10bc0329b6adf9084c"></a>
### Function set\_option

![][public]


```cpp
virtual void DVS::IServer::set_option(const char *key, const char *value)=0
```


Set a Specific Option on the Server, These Are Used During Startup See See [Server Options](../../user-guide/dvs-server.md#server-options).

Current available options: <br/>
CACHE_URI: This will set the location and type of cache to store data to.






**Parameters**:

* **key**: Name of Option to Set
* **value**: Value of Option



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


Clear All Options From the Server.





**Return type**: void

<a id="class_d_v_s_1_1_i_server_1a5fdee3f663dbe7b7dab11621f76737e2"></a>
### Function running

![][public]
![][const]


```cpp
virtual bool DVS::IServer::running() const =0
```


Check to See if the Server Is Running.

Currently this is a dumb check to see if the server was tried to start. If port listening failed this will call will not fail currently.






**Returns**:

True if Running/Started



**Return type**: bool

<a id="class_d_v_s_1_1_i_server_1a8a5339f222bcd46b06c2fa9a474b2c37"></a>
### Function get\_timestep\_count

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IServer::get_timestep_count(uint32_t &num_pending, uint32_t &num_complete) const =0
```


Return the Current Number of Pending and Complete Timesteps in the Server

Simple count of the current state of the timesteps in the server






**Parameters**:

* **num_pending**: The Number of Pending Timesteps Not Complete Yet
* **num_complete**: num_complete the Number of Complete Timesteps


**Returns**:

[dvs\_ret](../files/dynamic__visualization__store__error__codes_8h.md#typedef-dvs_ret) DVS_SERVER_NOT_STARTED or DVS_NONE



**Parameters**:

* uint32_t & **num_pending**
* uint32_t & **num_complete**

**Return type**: [dvs\_ret](../files/dynamic__visualization__store__error__codes_8h.md#typedef-dvs_ret)

<a id="class_d_v_s_1_1_i_server_1a6699cf48b29583ab3391b9b8397e611c"></a>
### Function startup

![][public]


```cpp
virtual dvs_ret DVS::IServer::startup(uint32_t server_number, uint32_t local_ranks)=0
```


Start the Server.

server_number is used by the DVS server, for each group of servers this number should be unique and monotonically increasing with no gaps (valid: 0, 1, 2 invalid: 0, 2)





local_ranks is used to determine how many clients will be connecting to this server






**Parameters**:

* **server_number**: The Server Number (Zero Based) for This Server, Should Be Unique for Each Server in This Server Group
* **local_ranks**: Number of Local Ranks This Server Will Handle


**Returns**:

[dvs\_ret](../files/dynamic__visualization__store__error__codes_8h.md#typedef-dvs_ret) DVS_NONE on success, else error code



**Parameters**:

* uint32_t **server_number**
* uint32_t **local_ranks**

**Return type**: [dvs\_ret](../files/dynamic__visualization__store__error__codes_8h.md#typedef-dvs_ret)

<a id="class_d_v_s_1_1_i_server_1ac61ce2698eec1adb521bbbf60cb78756"></a>
### Function startup\_unthreaded

![][public]


```cpp
virtual dvs_ret DVS::IServer::startup_unthreaded(uint32_t server_number, uint32_t local_ranks)=0
```


Startup a Server Manually Without Threads.

This method is for when a user wants to manually run their own server to more tightly control the execution and threading model. This call WILL block until the first timestep is received and will not return unless [terminating()](class_d_v_s_1_1_i_server.md#function-terminating) has been called from another thread or interrupt.





server_number is used by the DVS server, for each group of servers this number should be unique and monotonically increasing with no gaps (valid: 0, 1, 2 invalid: 0, 2)





local_ranks is used to determine how many clients will be connecting to this server





The normal call chain would be to call [startup\_unthreaded()](class_d_v_s_1_1_i_server.md#function-startup_unthreaded) and then loop calling [update()](class_d_v_s_1_1_i_server.md#function-update) until some end condition is met. Please see [test\_dvs\_server.cpp](../files/test__dvs__server_8cpp.md#test__dvs__server_8cpp) for an example.






**Parameters**:

* **server_number**: The Server Number (Zero Based) for This Server, Should Be Unique for Each Server in This Server Group
* **local_ranks**: Number of Local Ranks This Server Will Handle


**Returns**:

[dvs\_ret](../files/dynamic__visualization__store__error__codes_8h.md#typedef-dvs_ret) DVS_NONE on success, else error code



**Parameters**:

* uint32_t **server_number**
* uint32_t **local_ranks**

**Return type**: [dvs\_ret](../files/dynamic__visualization__store__error__codes_8h.md#typedef-dvs_ret)

<a id="class_d_v_s_1_1_i_server_1add6fcb530763dc217f5b3c17b25093c0"></a>
### Function update

![][public]


```cpp
virtual dvs_ret DVS::IServer::update()=0
```


Perform a Server Update.

This method performs a server update. This will: 1.) Perform a complete timestep check and flush complete timesteps to the cache 2.) Perform a check if any new delete_item calls should be processed 3.) Perform a check to see if the dataset definition needs to be updated





The number of pending timesteps from [get\_timestep\_count()](class_d_v_s_1_1_i_server.md#function-get_timestep_count) will not update unless this is called.





Important: This is not needed to be called if using the normal [startup()](class_d_v_s_1_1_i_server.md#function-startup) procedure and should only be used when manually running the server with startup_unthreaded. This must be called periodically for the server to function properly.






**Returns**:

[dvs\_ret](../files/dynamic__visualization__store__error__codes_8h.md#typedef-dvs_ret) DVS_NONE on Success



**Return type**: [dvs\_ret](../files/dynamic__visualization__store__error__codes_8h.md#typedef-dvs_ret)

<a id="class_d_v_s_1_1_i_server_1a6cb1f69ad4b9213dde48d4cd5b3f2111"></a>
### Function terminating

![][public]


```cpp
virtual dvs_ret DVS::IServer::terminating()=0
```


Call to Begin Terminating the Server.

This method begins terminating the server when [startup\_unthreaded()](class_d_v_s_1_1_i_server.md#function-startup_unthreaded) is invoked. This will cause new updates sending new timesteps, to fail and exit early from any waiting calls on the server.





Important: This call is not needed if using the normal startup method as it will handle this for you.






**Returns**:

[dvs\_ret](../files/dynamic__visualization__store__error__codes_8h.md#typedef-dvs_ret) DVS_NONE on Success, DVS_SERVER_FAILED_READER_CREATE if the Server Wasn't Started



**Return type**: [dvs\_ret](../files/dynamic__visualization__store__error__codes_8h.md#typedef-dvs_ret)

<a id="class_d_v_s_1_1_i_server_1a7ce6bb49a2d383b0821267415a93802d"></a>
### Function shutdown

![][public]


```cpp
virtual void DVS::IServer::shutdown()=0
```


Shutdown the Server, Also Called on Server Destruction by [DVS::DESTROY\_SERVER\_INSTANCE()](../namespaces/namespace_d_v_s.md#function-destroy_server_instance).





**Return type**: void

<a id="class_d_v_s_1_1_i_server_1a68fca8531459488f5694507ad5df0482"></a>
### Function create\_transport

![][public]


```cpp
virtual ITransport * DVS::IServer::create_transport(const std::string &shared_secret)=0
```


Create a Transport Object to Communicate With Server, Must Be Destroyed.

**Parameters**:

* **shared_secret**: The Transport Protocol Shared Secret String Used to Validate Connections. It May Be an Empty String. If "SERVER_SECURITY_SECRET" Is Set as a Server Option shared_secret Will Be Ignored.


**Returns**:

ITransport* Instance to Transport Object Owned by Server Instance



**Parameters**:

* const std::string & **shared_secret**

**Return type**: ITransport *

<a id="class_d_v_s_1_1_i_server_1a087c3fed77651e0f62d7189f44a32443"></a>
### Function get\_uri

![][public]


```cpp
virtual const char * DVS::IServer::get_uri()=0
```


Get URI of This Server.

**Returns**:

URI This Server Was Created With



**Return type**: const char *

<a id="class_d_v_s_1_1_i_server_1aee25312f757c5bc4f6dd304dd7da68a9"></a>
### Function create\_query

![][public]


```cpp
virtual DVS::IQuery * DVS::IServer::create_query(const std::string &filter=std::string(), DVS::IQuery *parent=nullptr)=0
```


Create a DVS Query Instance. This Will Inherit the DVS Server Reader Instance.

**Parameters**:

* **parent**: An Eventual Parent Query to Create the New Query With. Defaults to nullptr
* **filter**: An Eventual Filter String to Apply to the New Query. Defaults to the Empty String


**Returns**:

The Query Instance Created.



**Parameters**:

* const std::string & **filter** = std::string() 
* [DVS::IQuery](class_d_v_s_1_1_i_query.md) * **parent** = nullptr 

**Return type**: [DVS::IQuery](class_d_v_s_1_1_i_query.md) *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)