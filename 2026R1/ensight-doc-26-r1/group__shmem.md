# Shared Memory Image Transport

<a id="group__shmem"></a>

A memory mapped file (shared memory) image transport system.

The EnSight grpc API provides several mechanisms for streaming imagery from the core EnSight application to other applications. These include vnc and over grpc itself (via stream push or subscribe pull). Unfortunately, these approaches require encoding/transmission over TCP/IP which can limit the effective performance of the system, especially with large frame imagery. An extension to the Subscribe() grpc interface is the ability to pass imagery over a memory mapped file.<br/>






To start using the API, the [shared\_memory\_image\_client.h](shared__memory__image__client_8h.md#shared__memory__image__client_8h) interface is a good place to start. The source code to the library as well as a pre-compiled binary of the library are included in the EnSight distribution. The files will be include in the directory:<br/>
 
```
{ANSYSROOT}/v{ANSYSVER}/CEI/apex{ANSYSVER}/machines/{ARCH}/CEI/shmem_image_transport
```
 This approach is much faster than the other (easily capable of 60Hz 4K image streams on modern hardware), but are limited to situations where the EnSight and the client application are running on the same system.<br/>






Note: the underlying C library is quite generic and can be used from both C/C and Python applications quite easily. <br/>
<br/>
**Server Documentation**: [shared\_memory\_image\_client\_priv.h](shared__memory__image__client__priv_8h.md#shared__memory__image__client__priv_8h) <br/>
 C API for the shared memory image transport API server interface <br/>
<br/>
**C Client Documentation**: [shared\_memory\_image\_client.h](shared__memory__image__client_8h.md#shared__memory__image__client_8h) <br/>
 C API for using the EnSight grpc shared memory image transport API <br/>
<br/>
**Python Client Documentation**: [shared\_memory\_image\_client\_python.c](shared__memory__image__client__python_8c.md#shared__memory__image__client__python_8c) <br/>
 Python interface to the [shared\_memory\_image\_client.h](shared__memory__image__client_8h.md#shared__memory__image__client_8h) API

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C]: https://img.shields.io/badge/language-C-blue (C)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)