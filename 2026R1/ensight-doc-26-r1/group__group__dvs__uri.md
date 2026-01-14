# DVS URIs

<a id="group__group__dvs__uri"></a>

Description of various URIs used within the DVS project.

## URI Overview






URIs are used in the DVS API and dvs_file to specify protocol's, locations, and options. They are mainly used during server creation to specify the communication protocol being used, where to connect, and in the DVS Cache to determine what type of cache to use, where it is located, filter specifics on what to load or not load from the cache, and compression levels if needed.





### Table of Contents







* [Server URIs](#group__group__dvs__uri_1dvs_server_uri)

* [Cache URIs](#group__group__dvs__uri_1dvs_cache_uri)
* [Cache URI Domain](#group__group__dvs__uri_1dvs_cache_uri_domain)

* [Cache URI Hostname/Port](#group__group__dvs__uri_1dvs_cache_uri_hostname)

* [Cache URI Path](#group__group__dvs__uri_1dvs_cache_uri_path)

* [Cache URI Options](#group__group__dvs__uri_1dvs_cache_uri_options)

* [Cache URI Examples](#group__group__dvs__uri_1dvs_cache_uri_example)

* [Cache Compression](#group__group__dvs__uri_1dvs_cache_compression)







---







---

 





### Server URIs

The Server URI specifies what transport protocol to use, the machine and port to connect to if using a network connection. This is used by [dvs\_server\_create()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a06196ff56fe7f270172239c1be4ce0cd) or [DVS::CREATE\_SERVER\_INSTANCE()](namespace_d_v_s.md#dvs__server__interface_8h_1a852580b9a49ac305e4ae26ca637bcc75) to create a server to connect to.<br/>
 
| Server URI Format | Description |
| --- | --- |
| {protocol}:{hostname}:{port} | Used to create server stub for client to connect |

<br/>
 
| Protocols | Description |
| --- | --- |
| grpc | Use gRPC for communication |
| null | Use direct method calls, no network communication |

**Note: Use all lower case for the protocol**<br/>
 <br/>







| Example URI | Description |
| --- | --- |
| grpc://localhost:50051 | Connect to same computer on port 50051 using gRPC |
| grpc://127.0.0.1:12345 | Connect to same computer's IPv4 address on port 12345 using gRPC |
| grpc://computer.ansys.com:12345 | Connect to hostname on port 12345 using gRPC |
| null:// | Connect to server running in same process using direct method calls, no network communication |







---

 ---




### Cache URIs

Cache URIs are used to specify what domain/type of dvs_cache to use, the host and port of the machine to connect if needed, the path of the cache on the machine, filters and options. Cache URIs are used by both the DVS API if wanting to cache data or a dvs_file to load data previously cached. The URI is set via the API by calling <code>[dvs\_server\_set\_option()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ae8abdb8455cea44bbd9f509c1a063516)</code> in tha C API or <code>[DVS::IServer::set\_option()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a1edb4dec67086f10bc0329b6adf9084c)</code> in the C API, using "CACHE_URI" as the key, and the URI as the value.<br/>







> Example: dvs_server_set_option("CACHE_URI", "hdf5://localhost:1234/D:/temp/cache")







| Cache URI Format | Description |
| --- | --- |
| {domain}://{hostname}:{port}/path/to/cache?key=value&key2=value2 | Format of a cache URI |







---

 





#### Cache URI Domain

The first part of the Cache URI is the domain, domain options below. It is separated from the hostname by '://'. 
| Domains | Description |
| --- | --- |
| hdf5 | Uses HDF5 for blob store and sqlite for metadata store |
| disk | Deprecated binary file blob store and sqlite for metadata store |







---




#### Cache URI Hostname/Port

The hostname and port portion of the URI are next, separated by ':'. The hostname and port aren't currently used but will be in the future when applicable.





---




#### Cache URI Path

The path in the cache URI can be relative or absolute. A relative path in a URI for a server option will store the cache relative to the working directory of the server data is being sent to. A relative path in a dvs_file will be relative to the location of the file itself.






| Example URIs | Description |
| --- | --- |
| hdf5://localhost:1234/D:/temp/my_cache | Use hdf5 cache, localhost/port ignored, cache location D:/temp/my_cache for Windows |
| hdf5://localhost:1234/./ | Use hdf5 cache, localhost/port ignored, cache location in current working directory of server or same directory as dvs_file |
| hdf5://localhost:1234//home/user/my_cache/ | Use hdf5 cache, localhost/port ignored, cache location /home/user/my_cache on Linux |







---




#### Cache URI Options

Key/Value pair options can be set in the URI after '?' character. Options are separated with '&' characters. 
> Example: hdf5://localhost:1234/D:/my_cache/?option1=value1&option2=value2







| Cache URI Options | Description |
| --- | --- |
| query | Query stanzas to filter what is loaded from the cache. See [Query Stanzas](#group__group__dvs__filtering_1dvs_query_stanzas) |
| compression | Default: 0, No compression. 1: Best compression speed; least compression. 2-8: Compression improves; speed degrades. 9: Best compression ratio; slowest speed. See [Cache Compression](#group__group__dvs__uri_1dvs_cache_compression). |







---




#### Cache URI Examples


| Cache URI Example | Description |
| --- | --- |
| hdf5:///D:/my_cache/?query=/dataset.name/eq/Dataset1|Dataset2//and/var.name/neq/pressure//and/plot.name/eq/my+plot | Load entries from Dataset1 OR Dataset2. Do not load vars with name 'pressure'. Only load plots named 'my plot'. |
| hdf5:///D:/my_cache/?query=/dataset.name/eq/Dataset1|Dataset2|Dataset3 | Load entries from Dataset1 OR Dataset2 OR Dataset3 |
| hdf5:///D:/my_cache/?query=/dataset.name/eq/Dataset+1|Dataset+2//and/rank/mod/3|0 | Load all cache entries from 'Dataset 1' OR 'Dataset 2' where rank % 3 == 0 |
| hdf5:///D:/my_cache/?query=/part.name/eq/inlet* | Load all cache entries for parts with partial name inlet, i.e. inlet 1, inlet 2 etc |
| hdf5:///D:/my_cache/?query=/dataset.name/eq/my+dataset//and/timestep/rngi/1.2|2.3 | Load all cache entries from 'my dataset' where time >= 1.2 and time <= 2.3 |
| hdf5:///D:/my_cache/?query=/part.name/neq/inlet*|outlet* | Load all cache entries for parts that do not partial match 'inlet' OR 'outlet' |







---




#### Cache Compression

Cache compression is off by default. It can be enabled by adding a query parameter of compression=value at the end of the uri.





**Note:** Values/queries at the end of a URI are separated by '&'






| Compression Example | Description |
| --- | --- |
| hdf5:///./my_cache/ | No compression |
| hdf5:///./my_cache/?compression=0 | No compression |
| hdf5:///./my_cache/?compression=9 | Max compression |
| hdf5:///./my_cache/?query=/dataset.name/eq/my+dataset//&compression=9 | Max compression with a [Query Stanzas](#group__group__dvs__filtering_1dvs_query_stanzas) |


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C]: https://img.shields.io/badge/language-C-blue (C)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)