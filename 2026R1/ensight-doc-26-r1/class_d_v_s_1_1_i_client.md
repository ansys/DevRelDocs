# Class DVS::IClient

<a id="class_d_v_s_1_1_i_client"></a>

![][C++]
![][public]


API for solvers to use to send data to EnSight servers.

This interface class wraps the client type and other functionality such as data deduplication so the user doesn't need to worry about it. We can add functionality to this without needing solver code to be modified. This will also hide Ensight sessions potentially being taken down and brought up dynamically.

## Members

* [add\_metadata](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1ab4144e59bfdcf9c095c6510c4298d160)
* [add\_part\_info](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a5e9ee6af237e76a6e270d99ec8cd4388)
* [add\_plot\_info](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a1bdb7ca9cf25c63e533f47fe26132af6)
* [add\_var\_info](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a82f841d7f6f33071bf8c709623ca215d)
* [begin\_init](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aff782ecd341fddd87a22a15107efeb3b)
* [begin\_update](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1abd1cbbd2007346ad616dc74eab9d0553)
* [clear\_options](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1ae5fb936fc51a517a4da05c1da74c4140)
* [convert\_rotation\_to\_quaternion](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a70720b911b5f26697cdbe12b518e485c)
* [delete\_item](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a5e8f192f5c683a8265dd94020506a0aa)
* [end\_init](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aaf1641a1afbf8bb6257940be28dd94b2)
* [end\_update](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a6396cc4ae967ad5f0da8e234429a97cd)
* [get\_num\_parts](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1af609f80df51a124a137c6476b7d3c958)
* [get\_num\_plots](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a80325aaa83f2d2f27f1aa8e5f167c4c6)
* [get\_num\_vars](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a85adbf75ade9d0ffc6d258c34dae1eb3)
* [get\_part\_id](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a4e3e6fbf66582927a17b54c9fba3464c)
* [get\_part\_info](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a9a1e02d1e1764788a58db0f0ccce4cd4)
* [get\_plot\_id](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a5dc7f1a7c19c068b04a384c1891e435f)
* [get\_plot\_info](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a7753d7dfb238856722825403a5cb6d32)
* [get\_var\_id](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1ac4a86f03c9eb353cb1d92e326945cb9c)
* [get\_var\_info](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1afb50715fd6d0ed4aa2df49b8cd9d93bb)
* [get\_version](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aa5d98105d78c61e4e0c4043e28174fe1)
* [IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a64eedec7e83a7e05ae9b3ca96c9f79b6)
* [IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a3833003a214593bcf229917fe9f677d0)
* [IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a7cf4e8dfda9a6d9de1ab8ca4ea64961f)
* [operator=](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aa3a67114d90c513c43bd76c461ea6df3)
* [operator=](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a9250ff94c04d2465a17ac1e637350ec7)
* [set\_logger](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a024475b03496bc310e211632d153517d)
* [set\_option](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a0008e01c5980fe4fdd9e85f9fbb23db4)
* [set\_options](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a40102bb90549d96d5978b562ae5ce955)
* [set\_unit\_system](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a284f922fec402e03365c7873502d1fde)
* [update\_copy\_previous\_part](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a3de23c0dcfc5c614f3047ff6284167d3)
* [update\_elements](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a41aa2ad12fbfa456f3ec8e48530ea6f6)
* [update\_elements\_polygon](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1ac6b3990562f507eda4abedf53e021647)
* [update\_elements\_polyhedral](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a7a9ccf04ed8502d23913d8eef21607ec)
* [update\_nodes](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a87ab36c2f16d093c0beaba60da2cd661)
* [update\_nodes\_structured](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a1588c437020e0ba5702ec48460a792a9)
* [update\_nodes\_structured](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aee6c79370e423a70f4b73c08794cdf9b)
* [update\_part\_rigid\_body\_motion](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a119a2ae01cb95e70b82cb3d4aa9550f4)
* [update\_plot](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1afcf7811f22d58bd328bed415116a4c41)
* [update\_var\_case](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a8f2e7174f9e89ef5285043dd9357f9b0)
* [update\_var\_element](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aec8ed14b290237049976f68cb81b200f)
* [update\_var\_element](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a722ee94dc27c54a0f563229d4677ac3f)
* [update\_var\_field](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a3834c25cf5ed35a17f08ecefa4b73417)
* [update\_var\_field](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a89c8b5cf33a733071bcc6b4bc35615b2)
* [update\_var\_node](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1ae67a2884dd8f68f4757d8d7fac3828d3)
* [update\_var\_node](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1ae1eb49e0bf598055279b8ebbbc1815e6)
* [update\_var\_part](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1ab18cc3827eda737ea73c31aa7fe6ef68)
* [~IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1ab54b2523137180da43fa39b2e597eb0d)

## Public functions

<a id="class_d_v_s_1_1_i_client_1a64eedec7e83a7e05ae9b3ca96c9f79b6"></a>
### Function IClient

![][public]


```cpp
DVS::IClient::IClient()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_client_1ab54b2523137180da43fa39b2e597eb0d"></a>
### Function ~IClient

![][public]


```cpp
virtual DVS::IClient::~IClient()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_client_1a3833003a214593bcf229917fe9f677d0"></a>
### Function IClient

![][public]


```cpp
DVS::IClient::IClient(IClient &&)=default
```


default





**Parameters**:

* IClient &&

**Return type**: 

<a id="class_d_v_s_1_1_i_client_1aa3a67114d90c513c43bd76c461ea6df3"></a>
### Function operator=

![][public]


```cpp
IClient & DVS::IClient::operator=(IClient &&)=default
```


default





**Parameters**:

* [IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a64eedec7e83a7e05ae9b3ca96c9f79b6) &&

**Return type**: [IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a64eedec7e83a7e05ae9b3ca96c9f79b6) &

<a id="class_d_v_s_1_1_i_client_1a7cf4e8dfda9a6d9de1ab8ca4ea64961f"></a>
### Function IClient

![][public]


```cpp
DVS::IClient::IClient(const IClient &)=default
```


support copying





**Parameters**:

* const IClient &

**Return type**: 

<a id="class_d_v_s_1_1_i_client_1a9250ff94c04d2465a17ac1e637350ec7"></a>
### Function operator=

![][public]


```cpp
IClient & DVS::IClient::operator=(const IClient &)=default
```


default





**Parameters**:

* const [IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a64eedec7e83a7e05ae9b3ca96c9f79b6) &

**Return type**: [IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a64eedec7e83a7e05ae9b3ca96c9f79b6) &

<a id="class_d_v_s_1_1_i_client_1a024475b03496bc310e211632d153517d"></a>
### Function set\_logger

![][public]


```cpp
virtual void DVS::IClient::set_logger(ILogger *logger)=0
```


Set the logger interface to use.

Set a logger interface for the client to use. This object will have [DVS::ILogger::release()](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a753d496b0ca488a74e6209f330b13458) invoked on it. If release() is not implemented the memory should be destroyed by the caller after the client is destroyed.






**Parameters**:

* **logger**: logger to use, will be released if [DVS::ILogger::release()](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger_1a753d496b0ca488a74e6209f330b13458) is implemented



**Parameters**:

* [ILogger](class_d_v_s_1_1_i_logger.md#class_d_v_s_1_1_i_logger) * **logger**

**Return type**: void

<a id="class_d_v_s_1_1_i_client_1a0008e01c5980fe4fdd9e85f9fbb23db4"></a>
### Function set\_option

![][public]


```cpp
virtual void DVS::IClient::set_option(const std::string &key, const std::string &value)=0
```


Set an option for the client.

**Parameters**:

* **key**: key to set
* **value**: value to set



**Parameters**:

* const std::string & **key**
* const std::string & **value**

**Return type**: void

<a id="class_d_v_s_1_1_i_client_1a40102bb90549d96d5978b562ae5ce955"></a>
### Function set\_options

![][public]


```cpp
virtual void DVS::IClient::set_options(const std::map< std::string, std::string > &options)=0
```


Set options for the client.

Set the client options, this will overwrite/remove any existing options






**Parameters**:

* **options**: options to set



**Parameters**:

* const std::map< std::string, std::string > & **options**

**Return type**: void

<a id="class_d_v_s_1_1_i_client_1ae5fb936fc51a517a4da05c1da74c4140"></a>
### Function clear\_options

![][public]


```cpp
virtual void DVS::IClient::clear_options()=0
```


Clear all options for the client.





**Return type**: void

<a id="class_d_v_s_1_1_i_client_1aa5d98105d78c61e4e0c4043e28174fe1"></a>
### Function get\_version

![][public]


```cpp
virtual const char * DVS::IClient::get_version()=0
```


Get the version of the client API.

NOTE: The version is of the format X.Y.Z where X=MAJOR, Y = MINOR, and Z = PATCH. Anything other than a change in Z or PATCH is incompatible with another version and needs to be upgraded to the latest library






**Returns**:

const char* the semantic version of the API



**Return type**: const char *

<a id="class_d_v_s_1_1_i_client_1aff782ecd341fddd87a22a15107efeb3b"></a>
### Function begin\_init

![][public]


```cpp
virtual dvs_ret DVS::IClient::begin_init(const char *dataset_name, uint32_t current_rank, uint32_t total_ranks, uint32_t num_chunks)=0
```


Begins initialization for this rank.

**Parameters**:

* **dataset_name**: name for dataset
* **current_rank**: the rank we are sending init info for (zero based)
* **total_ranks**: the total number of ranks being used across solver nodes
* **num_chunks**: the number of chunks being used for this rank (usually 1)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* const char * **dataset_name**
* uint32_t **current_rank**
* uint32_t **total_ranks**
* uint32_t **num_chunks**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a284f922fec402e03365c7873502d1fde"></a>
### Function set\_unit\_system

![][public]


```cpp
virtual dvs_ret DVS::IClient::set_unit_system(const char *system)=0
```


Set the unit system we are using for this session (optional).

NOTE: This cannot be changed once [end\_init()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aaf1641a1afbf8bb6257940be28dd94b2) is called.






**Parameters**:

* **system**: unit system to set, see: [https://nexusdemo.ensight.com/docs/python/html/ENS_UNITSSchema.html](https://nexusdemo.ensight.com/docs/python/html/ENS_UNITSSchema.html)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* const char * **system**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1ab4144e59bfdcf9c095c6510c4298d160"></a>
### Function add\_metadata

![][public]


```cpp
virtual dvs_ret DVS::IClient::add_metadata(const char *const keys[], const char *const vals[], uint32_t num_metadata_pairs)=0
```


Add metadata for the current dataset.

Errors:
* DVS_NONE: Success

* DVS_PARAM_NULL: Method called with NULL params or num_metadata_pairs == 0

* DVS_CLIENT_INVALID_TRANSPORT: Internal error, should not happen

* DVS_TRANSPORT_NULL_INVALID_SERVER: Internal error, should not happen

* DVS_VERSION_MISMATCH: Client version out of date with server version, update server and client to match

* DVS_VERSION_UNKNOWN: Unable to determine server version, update the server to match the client

* DVS_TRANSPORT_SERVICE_FAILURE: Normally caused by server call retry time out or invalid secret key








**Parameters**:

* **keys**: string array of UTF-8 Compatible string keys, each string should be null terminated
* **vals**: string array of UTF-8 Compatible string values, each string should be null terminated
* **num_metadata_pairs**: number of key/value pairs in the arrays


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, otherwise see method description



**Parameters**:

* const char *const **keys**
* const char *const **vals**
* uint32_t **num_metadata_pairs**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a5e9ee6af237e76a6e270d99ec8cd4388"></a>
### Function add\_part\_info

![][public]


```cpp
virtual dvs_ret DVS::IClient::add_part_info(const dvs_part_info *part_info, uint32_t num_parts)=0
```


Add part information for session.

NOTE: These cannot be changed once [end\_init()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aaf1641a1afbf8bb6257940be28dd94b2) is called.






**Parameters**:

* **part_info**: array of global parts across entire simulaton
* **num_parts**: number of part info objects in part_info


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* const [dvs\_part\_info](structdvs__part__info.md#structdvs__part__info) * **part_info**
* uint32_t **num_parts**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a82f841d7f6f33071bf8c709623ca215d"></a>
### Function add\_var\_info

![][public]


```cpp
virtual dvs_ret DVS::IClient::add_var_info(const dvs_var_info *var_info, uint32_t num_vars)=0
```


Add variable information for session.

NOTE: These cannot be changed once [end\_init()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aaf1641a1afbf8bb6257940be28dd94b2) is called.






**Parameters**:

* **var_info**: array of global variable information across entire simulation
* **num_vars**: number of var info objects in var_info


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* const [dvs\_var\_info](structdvs__var__info.md#structdvs__var__info) * **var_info**
* uint32_t **num_vars**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a1bdb7ca9cf25c63e533f47fe26132af6"></a>
### Function add\_plot\_info

![][public]


```cpp
virtual dvs_ret DVS::IClient::add_plot_info(const dvs_plot_info *plot_info, uint32_t num_plots)=0
```


Add plot information for session.

NOTE: These cannot be changed once [end\_init()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aaf1641a1afbf8bb6257940be28dd94b2) is called.






**Parameters**:

* **plot_info**: array of global plot information across entire simulation
* **num_plots**: number of plot_info objects in plot_info


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* const [dvs\_plot\_info](structdvs__plot__info.md#structdvs__plot__info) * **plot_info**
* uint32_t **num_plots**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1af609f80df51a124a137c6476b7d3c958"></a>
### Function get\_num\_parts

![][public]
![][const]


```cpp
virtual uint32_t DVS::IClient::get_num_parts() const =0
```


Get the number of [dvs\_part\_info](structdvs__part__info.md#structdvs__part__info) objects this client has stored.

Note: This gets the number of part info objects this client has. It does not query the server for the information.






**Returns**:

uint32_t number of [dvs\_part\_info](structdvs__part__info.md#structdvs__part__info) objects



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_client_1a85adbf75ade9d0ffc6d258c34dae1eb3"></a>
### Function get\_num\_vars

![][public]
![][const]


```cpp
virtual uint32_t DVS::IClient::get_num_vars() const =0
```


Get the number of [dvs\_var\_info](structdvs__var__info.md#structdvs__var__info) objects this client has stored.

Note: This gets the number of part info objects this client has. It does not query the server for the information.






**Returns**:

uint32_t number of [dvs\_var\_info](structdvs__var__info.md#structdvs__var__info) objects



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_client_1a80325aaa83f2d2f27f1aa8e5f167c4c6"></a>
### Function get\_num\_plots

![][public]
![][const]


```cpp
virtual uint32_t DVS::IClient::get_num_plots() const =0
```


Get the number of [dvs\_plot\_info](structdvs__plot__info.md#structdvs__plot__info) objects this client has stored.

Note: This gets the number of plot info objects this client has. It does not query the server for the information.






**Returns**:

uint32_t number of [dvs\_plot\_info](structdvs__plot__info.md#structdvs__plot__info) objects



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_client_1a9a1e02d1e1764788a58db0f0ccce4cd4"></a>
### Function get\_part\_info

![][public]
![][const]


```cpp
virtual const dvs_part_info * DVS::IClient::get_part_info(uint32_t index) const =0
```


Get the [dvs\_part\_info](structdvs__part__info.md#structdvs__part__info) object for a specific index.

Note: This only gets the [dvs\_part\_info](structdvs__part__info.md#structdvs__part__info) objects from the current client it does not query the server for the information






**Parameters**:

* **index**: index of the [dvs\_part\_info](structdvs__part__info.md#structdvs__part__info) object to retrieve


**Returns**:

const dvs_part_info* found object, nullptr if not found



**Parameters**:

* uint32_t **index**

**Return type**: const [dvs\_part\_info](structdvs__part__info.md#structdvs__part__info) *

<a id="class_d_v_s_1_1_i_client_1a4e3e6fbf66582927a17b54c9fba3464c"></a>
### Function get\_part\_id

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IClient::get_part_id(const std::string &name, uint32_t &id) const =0
```


Get the ID being used by the client for the named part.

Errors: DVS_NONE: Success DVS_INVALID_NAME: No object with name found DVS_ID_NO_VALID_SESSION: No session found matching session_id DVS_ID_INVALID_TYPE: Session id is of wrong type (possibly server) DVS_PARAM_NULL: Null param passed in






**Parameters**:

* **name**: the name of the part to search for
* **id**: UINT32_MAX on failure, otherwise the id of the part for this client


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, else see method description



**Parameters**:

* const std::string & **name**
* uint32_t & **id**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1afb50715fd6d0ed4aa2df49b8cd9d93bb"></a>
### Function get\_var\_info

![][public]
![][const]


```cpp
virtual const dvs_var_info * DVS::IClient::get_var_info(uint32_t index) const =0
```


Get the [dvs\_var\_info](structdvs__var__info.md#structdvs__var__info) object for a specific index.

Note: This only gets the [dvs\_var\_info](structdvs__var__info.md#structdvs__var__info) objects from the current client it does not query the server for the information






**Parameters**:

* **index**: index of the [dvs\_var\_info](structdvs__var__info.md#structdvs__var__info) object to retrieve


**Returns**:

const dvs_var_info* found object, nullptr if not found



**Parameters**:

* uint32_t **index**

**Return type**: const [dvs\_var\_info](structdvs__var__info.md#structdvs__var__info) *

<a id="class_d_v_s_1_1_i_client_1ac4a86f03c9eb353cb1d92e326945cb9c"></a>
### Function get\_var\_id

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IClient::get_var_id(const std::string &name, uint32_t &id) const =0
```


Get the ID being used by the client for the named var.

Errors: DVS_NONE: Success DVS_INVALID_NAME: No object with name found DVS_ID_NO_VALID_SESSION: No session found matching session_id DVS_ID_INVALID_TYPE: Session id is of wrong type (possibly server) DVS_PARAM_NULL: Null param passed in






**Parameters**:

* **name**: the name of the var to search for
* **id**: UINT32_MAX on failure, otherwise the id of the var for this client


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, else see method description



**Parameters**:

* const std::string & **name**
* uint32_t & **id**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a7753d7dfb238856722825403a5cb6d32"></a>
### Function get\_plot\_info

![][public]
![][const]


```cpp
virtual const dvs_plot_info * DVS::IClient::get_plot_info(uint32_t index) const =0
```


Get the [dvs\_plot\_info](structdvs__plot__info.md#structdvs__plot__info) object for a specific index.

Note: This only gets the [dvs\_plot\_info](structdvs__plot__info.md#structdvs__plot__info) objects from the current client it does not query the server for the information






**Parameters**:

* **index**: index of the [dvs\_plot\_info](structdvs__plot__info.md#structdvs__plot__info) object to retrieve


**Returns**:

const dvs_plot_info* found object, nullptr if not found



**Parameters**:

* uint32_t **index**

**Return type**: const [dvs\_plot\_info](structdvs__plot__info.md#structdvs__plot__info) *

<a id="class_d_v_s_1_1_i_client_1a5dc7f1a7c19c068b04a384c1891e435f"></a>
### Function get\_plot\_id

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IClient::get_plot_id(const std::string &name, uint32_t &id) const =0
```


Get the ID being used by the client for the named plot.

Errors: DVS_NONE: Success DVS_INVALID_NAME: No object with name found DVS_ID_NO_VALID_SESSION: No session found matching session_id DVS_ID_INVALID_TYPE: Session id is of wrong type (possibly server) DVS_PARAM_NULL: Null param passed in






**Parameters**:

* **name**: the name of the plot to search for
* **id**: UINT32_MAX on failure, otherwise the id of the plot for this client


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on success, else see method description



**Parameters**:

* const std::string & **name**
* uint32_t & **id**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1aaf1641a1afbf8bb6257940be28dd94b2"></a>
### Function end\_init

![][public]


```cpp
virtual dvs_ret DVS::IClient::end_init()=0
```


Finish initialization for this rank.

This must be called to let server know initialization for this rank is complete






**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1abd1cbbd2007346ad616dc74eab9d0553"></a>
### Function begin\_update

![][public]


```cpp
virtual dvs_ret DVS::IClient::begin_update(uint32_t update_num, uint32_t rank, uint32_t chunk, float time)=0
```


Method to begin an update.

**Parameters**:

* **update_num**: update number of this update, must be monotonically increasing
* **rank**: the rank we are sending an update for (zero based)
* **chunk**: the chunk number this update is for (zero based)
* **time**: time in seconds this update is for


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* uint32_t **update_num**
* uint32_t **rank**
* uint32_t **chunk**
* float **time**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a3de23c0dcfc5c614f3047ff6284167d3"></a>
### Function update\_copy\_previous\_part

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_copy_previous_part(uint32_t part_id, const char *options)=0
```


Copy data from the previous timestep before applying other data.

Currently we only support the options of empty string, mesh or mesh.vars empty string and mesh.vars will copy the mesh, connectivity, and nodal/elemental variables. mesh only copies the mesh and connectivity. Note: Currently plots and case/part constant variables will not be copied via this option and must always be sent.






**Parameters**:

* **part_id**: the id of the part we are copying data for, UINT32_MAX to select all parts
* **options**: what to copy, see method description


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* uint32_t **part_id**
* const char * **options**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a119a2ae01cb95e70b82cb3d4aa9550f4"></a>
### Function update\_part\_rigid\_body\_motion

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_part_rigid_body_motion(uint32_t part_id, const std::vector< float > &quaternion, const std::vector< float > &displacement, const std::vector< float > &cg_offset)=0
```


Update the rigid body motion for a part.

**Parameters**:

* **part_id**: the part ID of the part to update
* **quaternion**: a vector of float representing the quaternion describing the rotation. Empty if no rotation.
* **displacement**: the displacement describing the rigid body motion translation. Empty if no translation.
* **cg_offset**: the eventual center of gravity offset to apply before the rotation and translations. Empty if no center of gravity offset.


**Returns**:

DVS_NONE if the update was successful



**Parameters**:

* uint32_t **part_id**
* const std::vector< float > & **quaternion**
* const std::vector< float > & **displacement**
* const std::vector< float > & **cg_offset**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a70720b911b5f26697cdbe12b518e485c"></a>
### Function convert\_rotation\_to\_quaternion

![][public]


```cpp
virtual dvs_ret DVS::IClient::convert_rotation_to_quaternion(std::array< float, 3 > axis_start, std::array< float, 3 > axis_end, float relative_rotation_angle, std::array< float, 4 > &quaternion)=0
```


Utility API to convert a rigid body rotation described by the rotation axis and the angle of rotation to its quaternion representation.

**Parameters**:

* **axis_start**: an array of floats describing the starting point of the line representing the rotation axis
* **axis_end**: an array of floats describing the end point of the line representing the rotation axis
* **relative_rotation_angle**: the angle to rotate around the give axis
* **quaternion**: an array of 4 floats to be filled with the quaternion representation of the rotation


**Returns**:

DVS_NONE if the convention was successful



**Parameters**:

* std::array< float, 3 > **axis_start**
* std::array< float, 3 > **axis_end**
* float **relative_rotation_angle**
* std::array< float, 4 > & **quaternion**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a87ab36c2f16d093c0beaba60da2cd661"></a>
### Function update\_nodes

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_nodes(uint32_t part_id, const float *x, const float *y, const float *z, uint32_t num_values)=0
```


Update nodes for a specific part.

**Parameters**:

* **part_id**: the id of part we are updating nodes for
* **x**: array of x components for nodes
* **y**: array of y components for nodes
* **z**: array of z components for nodes
* **num_values**: number of values in individual x/y/z arrays (max nodes in part 2^31)


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* uint32_t **part_id**
* const float * **x**
* const float * **y**
* const float * **z**
* uint32_t **num_values**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a1588c437020e0ba5702ec48460a792a9"></a>
### Function update\_nodes\_structured

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_nodes_structured(uint32_t part_id, const uint32_t global_ijk_max[3], const uint32_t local_ijk_min[3], const uint32_t local_ijk_max[3], const float origin[3], const float dir_i[3], const float dir_j[3], const float dir_k[3], const float *i_vals, const float *j_vals, const float *k_vals)=0
```


Update the nodes for a parallelepiped structured part.

A parallelepiped structured part is represented by the global IJK grid across ranks, the local sub-block's IJK range, the origin of the IJK sub-block, the normalized direction (unit) vectors for each IJK dimension, and the absolute distances for each IJK index from the origin of this sub-block.





Global IJK Max: for a 2x3x4 grid would be: [2 3 4]





Local IJK Dimensions: The min/max represent a local sub-block from the overall global grid. This could be the entire range if not splitting the grid into multiple ranks or a specific slice. For example you could have a 2ix3jx4k grid where it was split across the I dimension. One rank would specify min/max IJK as min:[0,0,0], max:[0,2,3], the other rank would specify min/max IJK as min:[1,0,0], max:[1,2,3]. If sending the data all as one rank it would be the full range of: min:[0,0,0], max:[1,2,3]





Direction (Unit) Vectors: These represent the XYZ orientation of each IJK axis. I.E. if I==X J==Y K==Z the vectors would be dir_i: [1 0 0], dir_j: [0 1 0], dir_k: [0 0 1]





IJK Vals: These specify the absolute distance from the XYZ origin in each IJK direction(specified by the direction vectors). So if the distance was 1 between every I index, 2 between every J index, and 3 in between every K index the arrays would look like: i_vals: [0 1 2 3 4 5....] j_vals: [0 2 4 6 8 10....] k_vals: [0 3 6 9 12 15....]





**Note:** iblanking information is sent via [update\_var\_node()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1ae67a2884dd8f68f4757d8d7fac3828d3) using [SCALAR](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0a7efbb6cac96595e63e8fa171bde1eb68) as the var type and [DVS\_STRUCTURED\_IBLANKED\_NODES](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1aa405c87964a066405de5426a3089702b) as the variable id





**Note:** Ghost element information is sent [update\_var\_element()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aec8ed14b290237049976f68cb81b200f) using [SCALAR](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0a7efbb6cac96595e63e8fa171bde1eb68) as the var type and [DVS\_STRUCTURED\_GHOST\_ELEMENTS](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1a5f85a0e808c3bad9b9b616e62f5724c0) as the variable id






**Parameters**:

* **part_id**: the id of part we are updating nodes for
* **global_ijk_max**: The one based global ijk max of the mesh across all ranks
* **local_ijk_min**: the zero based local sub-block ijk min for this rank
* **local_ijk_max**: the zero based local sub-block ijk max for this rank
* **origin**: the XYZ origin of this local ijk block
* **dir_i**: The normalized XYZ direction vector for the i dimension
* **dir_j**: The normalized XYZ direction vector for the j dimension
* **dir_k**: The normalized XYZ direction vector for the k dimension
* **i_vals**: The absolute distance vector for each i index from the local sub block's origin of size iMax-iMin+1
* **j_vals**: The absolute distance vector for each j index from the local sub block's origin of size jMax-jMin+1
* **k_vals**: The absolute distance vector for each k index from the local sub block's origin of size kMax-kMin+1


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* uint32_t **part_id**
* const uint32_t **global_ijk_max**
* const uint32_t **local_ijk_min**
* const uint32_t **local_ijk_max**
* const float **origin**
* const float **dir_i**
* const float **dir_j**
* const float **dir_k**
* const float * **i_vals**
* const float * **j_vals**
* const float * **k_vals**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1aee6c79370e423a70f4b73c08794cdf9b"></a>
### Function update\_nodes\_structured

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_nodes_structured(uint32_t part_id, const uint32_t global_ijk_max[3], const uint32_t local_ijk_min[3], const uint32_t local_ijk_max[3], const float *x_vals, const float *y_vals, const float *z_vals)=0
```


Update the nodes for a curvilinear structured part.

A curvilinear structured part is represented by the global IJK grid across ranks, the local sub-block's IJK rank, and the actual XYZ values for each IJK grid point in the local grid.





Local IJK Dimensions: The min/max represent a local sub-block from the overall global grid. This could be the entire range if not splitting the grid into multiple ranks or a specific slice. For example you could have a 2ix3jx4k grid where it was split across the I dimension. One rank would specify min/max IJK as min:[0,0,0], max:[0,2,3], the other rank would specify min/max IJK as min:[1,0,0], max:[1,2,3]. If sending the data all as one rank it would be the full range of: min:[0,0,0], max:[1,2,3]





IJK Vals: These specify the actual XYZ location for each IJK value in the grid. The order of these should be by the fastest changing dimension being I, the next being J, and the next being K. I.E. for a 2x2x2 grid the x_vals array would contain the X component for IJK values: [i0 j0 k0][i1 j0 k0][i0 j1 k0][i1 j1 k0][i0 j0 k1][i1 j0 k1][i0 j1 k1][i1 j1 k1].





**Note:** iblanking information is sent via [update\_var\_node()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1ae67a2884dd8f68f4757d8d7fac3828d3) using [SCALAR](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0a7efbb6cac96595e63e8fa171bde1eb68) as the var type and [DVS\_STRUCTURED\_IBLANKED\_NODES](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1aa405c87964a066405de5426a3089702b) as the variable id





**Note:** Ghost element information is sent [update\_var\_element()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aec8ed14b290237049976f68cb81b200f) using [SCALAR](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0a7efbb6cac96595e63e8fa171bde1eb68) as the var type and [DVS\_STRUCTURED\_GHOST\_ELEMENTS](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1a5f85a0e808c3bad9b9b616e62f5724c0) as the variable id






**Parameters**:

* **part_id**: the id of part we are updating nodes for
* **global_ijk_max**: The one based global ijk max of the mesh across all ranks
* **local_ijk_min**: the zero based local sub-block ijk min for this rank
* **local_ijk_max**: the zero based local sub-block ijk max for this rank
* **x_vals**: The actual X component for each IJK value for the local sub block (size (iMax-iMin+1)*(jMax-jMin+1)*(kMax-kMin+1))
* **y_vals**: The actual Y component for each IJK value for the local sub block (size (iMax-iMin+1)*(jMax-jMin+1)*(kMax-kMin+1))
* **z_vals**: The actual Z component for each IJK value for the local sub block (size (iMax-iMin+1)*(jMax-jMin+1)*(kMax-kMin+1))


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* uint32_t **part_id**
* const uint32_t **global_ijk_max**
* const uint32_t **local_ijk_min**
* const uint32_t **local_ijk_max**
* const float * **x_vals**
* const float * **y_vals**
* const float * **z_vals**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a41aa2ad12fbfa456f3ec8e48530ea6f6"></a>
### Function update\_elements

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_elements(uint32_t part_id, dvs_element_type type, const uint32_t *indices, uint32_t num_indices)=0
```


Update elements for a specific part and element type.

This will update the elements for a part. The number of indices needed will vary depending on the type and the num_elements. I.E. if updating triangles with 3 elements the indices array should be of size 9 (3 triangles with 3 indices)






**Parameters**:

* **part_id**: unique id of part to update elements for (must match parts added with dvs_add_part_info)
* **type**: element type of elements to update (points, triangles, quads, etc.)
* **indices**: node indices for each element, for ordering info per element type see EnSight's User Manual, section 9.2.3 Supported EnSight Gold Elements
* **num_indices**: the size of the indices array


**Returns**:

ret_val TODO



**Parameters**:

* uint32_t **part_id**
* [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) **type**
* const uint32_t * **indices**
* uint32_t **num_indices**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1ac6b3990562f507eda4abedf53e021647"></a>
### Function update\_elements\_polygon

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_elements_polygon(uint32_t part_id, dvs_element_type type, const uint32_t *nodes_per_polygon, uint32_t nodes_per_polygon_size, const uint32_t *indices, uint32_t indices_size)=0
```


Update N-SIDED elements.

This method will send over a list of arbitrarily sized polygons. The nodes_per_polygon param is an array containing the size of each polygon. I.E. if sending a quadrangle, and a 25 sided element the nodes_per_polygon array might look like [4, 25]. The size of the indices array would be 4+25=29 in this example where the first 4 items in the indices array would correspond to the first item in the nodes_per_polygon array, the next 25 items in the indices array would correspond to the second item in the nodes_per_polygon array






**Parameters**:

* **part_id**: unique id of part to update elements for (must match parts added with dvs_add_part_info)
* **type**: element type of elements to update (N_SIDED_POLYGON or N_SIDED_POLYGON_GHOST)
* **nodes_per_polygon**: Array containing number of nodes in each element/polygon
* **nodes_per_polygon_size**: size of nodes_per_polygon array
* **indices**: Array of node indices for the polygons described in nodes_per_polygon
* **indices_size**: Size of indices array


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* uint32_t **part_id**
* [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) **type**
* const uint32_t * **nodes_per_polygon**
* uint32_t **nodes_per_polygon_size**
* const uint32_t * **indices**
* uint32_t **indices_size**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a7a9ccf04ed8502d23913d8eef21607ec"></a>
### Function update\_elements\_polyhedral

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_elements_polyhedral(uint32_t part_id, dvs_element_type type, const uint32_t *faces_per_element, uint32_t faces_per_element_size, const uint32_t *nodes_per_face, uint32_t nodes_per_face_size, const uint32_t *indices, uint32_t indices_size)=0
```


Update N-FACED Elements.

**Parameters**:

* **part_id**: unique id of part to update elements for (must match parts added with dvs_add_part_info)
* **type**: element type of elements to update (CONVEX_POLYHEDRON or CONVEX_POLYHEDRON_GHOST)
* **faces_per_element**: Array of how many faces are in each element
* **faces_per_element_size**: size of faces_per_element array
* **nodes_per_face**: Array of how many nodes each face contains
* **nodes_per_face_size**: size of nodes_per_face array
* **indices**: Node indices for elements
* **indices_size**: size of node indices


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* uint32_t **part_id**
* [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) **type**
* const uint32_t * **faces_per_element**
* uint32_t **faces_per_element_size**
* const uint32_t * **nodes_per_face**
* uint32_t **nodes_per_face_size**
* const uint32_t * **indices**
* uint32_t **indices_size**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a8f2e7174f9e89ef5285043dd9357f9b0"></a>
### Function update\_var\_case

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_var_case(dvs_var_type var_type, uint32_t var_id, const float *values, uint32_t num_values)=0
```


Update case variable.

**Parameters**:

* **var_type**: type of variable we are updating
* **var_id**: unique id of variable
* **values**: array of values for variable size based on type
* **num_values**: size of values array


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* [dvs\_var\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0) **var_type**
* uint32_t **var_id**
* const float * **values**
* uint32_t **num_values**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1ab18cc3827eda737ea73c31aa7fe6ef68"></a>
### Function update\_var\_part

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_var_part(dvs_var_type var_type, uint32_t var_id, uint32_t part_id, const float *values, uint32_t num_values)=0
```


Update part vector variable.

**Parameters**:

* **var_type**: type of variable we are updating
* **var_id**: id of variable
* **part_id**: id of part
* **values**: array of values for variable size based on type
* **num_values**: size of values array


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* [dvs\_var\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0) **var_type**
* uint32_t **var_id**
* uint32_t **part_id**
* const float * **values**
* uint32_t **num_values**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1aec8ed14b290237049976f68cb81b200f"></a>
### Function update\_var\_element

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_var_element(dvs_element_type elem_type, dvs_var_type var_type, uint32_t var_id, uint32_t part_id, const float *values, uint32_t num_values)=0
```


Update elemental scalar variable values.

**Parameters**:

* **elem_type**: element type
* **var_type**: type of var see ensight_dynmaic_data_enums.h: [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) for more info
* **var_id**: id of variable
* **part_id**: id of part
* **values**: array of values to update, should be same size as number of elements sent
* **num_values**: size of values array


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) **elem_type**
* [dvs\_var\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0) **var_type**
* uint32_t **var_id**
* uint32_t **part_id**
* const float * **values**
* uint32_t **num_values**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a722ee94dc27c54a0f563229d4677ac3f"></a>
### Function update\_var\_element

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_var_element(dvs_element_type elem_type, dvs_var_type var_type, uint32_t var_id, uint32_t part_id, const int64_t *values, uint32_t num_values)=0
```


Update elemental scalar 64bit variable values *.

**Parameters**:

* **elem_type**: element type
* **var_type**: type of var see ensight_dynmaic_data_enums.h: [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) for more info
* **var_id**: id of variable
* **part_id**: id of part
* **values**: array of values to update, should be same size as number of elements sent
* **num_values**: size of values array


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) **elem_type**
* [dvs\_var\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0) **var_type**
* uint32_t **var_id**
* uint32_t **part_id**
* const int64_t * **values**
* uint32_t **num_values**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1ae67a2884dd8f68f4757d8d7fac3828d3"></a>
### Function update\_var\_node

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_var_node(dvs_var_type var_type, uint32_t var_id, uint32_t part_id, const float *values, uint32_t num_values)=0
```


Update nodal variable values.

**Parameters**:

* **var_type**: type of var
* **var_id**: id of variable
* **part_id**: id of part
* **values**: array of values to update, should be same size as number of nodes sent with update_nodes
* **num_values**: size of values array


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* [dvs\_var\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0) **var_type**
* uint32_t **var_id**
* uint32_t **part_id**
* const float * **values**
* uint32_t **num_values**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1ae1eb49e0bf598055279b8ebbbc1815e6"></a>
### Function update\_var\_node

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_var_node(dvs_var_type var_type, uint32_t var_id, uint32_t part_id, const int64_t *values, uint32_t num_values)=0
```


Update nodal variable values Extend support to handle 64 bit values.

**Parameters**:

* **var_type**: type of var
* **var_id**: id of variable
* **part_id**: id of part
* **values**: array of values to update, should be same size as number of nodes sent with update_nodes
* **num_values**: size of values array


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* [dvs\_var\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0) **var_type**
* uint32_t **var_id**
* uint32_t **part_id**
* const int64_t * **values**
* uint32_t **num_values**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a3834c25cf5ed35a17f08ecefa4b73417"></a>
### Function update\_var\_field

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_var_field(dvs_var_location location, dvs_element_type elem_type, dvs_var_type var_type, uint32_t var_id, uint32_t part_id, const float *values, uint32_t num_values)=0
```


Update var field values (nodal or elemental).

**Parameters**:

* **location**: Location of variable (node or element)
* **elem_type**: Element type if location element, else undefined
* **var_type**: Type of variable
* **var_id**: ID of variable
* **part_id**: ID of part variable is associated with
* **values**: array of values to update
* **num_values**: size of values array


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* [dvs\_var\_location](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af4f0eba512eff253854b44d7ce078491) **location**
* [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) **elem_type**
* [dvs\_var\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0) **var_type**
* uint32_t **var_id**
* uint32_t **part_id**
* const float * **values**
* uint32_t **num_values**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a89c8b5cf33a733071bcc6b4bc35615b2"></a>
### Function update\_var\_field

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_var_field(dvs_var_location location, dvs_element_type elem_type, dvs_var_type var_type, uint32_t var_id, uint32_t part_id, const int64_t *values, uint32_t num_values)=0
```


Update var field values (nodal or elemental) Extend support to handle 64 bit integer variable values.

**Parameters**:

* **location**: Location of variable (node or element)
* **elem_type**: Element type if location element, else undefined
* **var_type**: Type of variable
* **var_id**: ID of variable
* **part_id**: ID of part variable is associated with
* **values**: array of values to update
* **num_values**: size of values array


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* [dvs\_var\_location](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af4f0eba512eff253854b44d7ce078491) **location**
* [dvs\_element\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af1c8824b29a0ab747460216716cc2895) **elem_type**
* [dvs\_var\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0) **var_type**
* uint32_t **var_id**
* uint32_t **part_id**
* const int64_t * **values**
* uint32_t **num_values**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1afcf7811f22d58bd328bed415116a4c41"></a>
### Function update\_plot

![][public]


```cpp
virtual dvs_ret DVS::IClient::update_plot(uint32_t plot_id, const float *x_values, const float *y_values, uint32_t num_values)=0
```


Update plot data for plot.

**Parameters**:

* **plot_id**: ID of plot
* **x_values**: Array of x axis values of plot
* **y_values**: array of y axis values of plot
* **num_values**: number of x/y value pairs being sent


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* uint32_t **plot_id**
* const float * **x_values**
* const float * **y_values**
* uint32_t **num_values**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a6396cc4ae967ad5f0da8e234429a97cd"></a>
### Function end\_update

![][public]


```cpp
virtual dvs_ret DVS::IClient::end_update()=0
```


Call to end the update for this timestep/rank/chunk.

**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_client_1a5e8f192f5c683a8265dd94020506a0aa"></a>
### Function delete\_item

![][public]


```cpp
virtual dvs_ret DVS::IClient::delete_item(uint32_t update_num, uint32_t rank, const char *filter)=0
```


Delete an item.

Currently this will only allow for timesteps to be deleted. In the future it can be expanded to all objects via the filter mechanism (see [Query Stanzas](#group__group__dvs__filtering_1dvs_query_stanzas)). Currently this supports the operands of eq, gt, gte, lt, lte. Example: To delete all timesteps >= time 1.1 the filter would be "/timestep.time/gte/1.1//" .





It also currently only supports one statement so /timestep.time/gt/1.1//and/timestep.time/lt/2.1// is not valid as of version 1.1.0.





Note: The update number should be monotonically increasing with the begin_update calls






**Parameters**:

* **update_num**: update number of this update, must be monotonically increasing
* **rank**: rank making this call
* **filter**: filter for the item(s) to delete see detailed description for more info


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) TODO



**Parameters**:

* uint32_t **update_num**
* uint32_t **rank**
* const char * **filter**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)