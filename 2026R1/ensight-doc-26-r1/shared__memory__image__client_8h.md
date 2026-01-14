# File shared\_memory\_image\_client.h

<a id="shared__memory__image__client_8h"></a>

![][C]

C API for using the EnSight grpc shared memory image transport API.

**version**\
1.0

This library implements a shared memory (memory mapped file) image transport system. To use the system, the client needs to do the following:






1. Create a physical file on disk that will serve as the memory mapped interface.

2. Make sure the file is large enough to hold 2 frames of imagery at maximum size plus 2K. So if the largest image would be for a 4K display, the file needs to be at least 24M + 2K in size (4K*3bytes/pixel*2 frames).

3. Make an EnSight grpc SubscribeImages() call with SubscribeImageOptions.type=GRPC and the name of the file created in the previous step passed with the "filename" key in SubscribeImageOptions.options. Note: that SubscribeImageOptions.prefix needs to be set to a unique string that will identify this channel. It is suggested that a GUID be used.

4. The EnSight grpc server will initialize the shared memory communication block and register it with the 'prefix' passed in the SubscribeImages() call. If the shared memory system can be constructed, it returns success.

5. On successful return from SubscribeImages(), the client then calls [SharedMemoryImageStream\_create()](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1a03ba052ae823b3e39fef153db8f03ea2) to connect to the server. 
```cpp
SharedMemoryImageStream stream;
SharedMemoryImageError err;
err = SharedMemoryImageStream_create("shared_memory_file", 
                                     IMAGESTREAM_OPTIONS_NONE, &stream);
if (err < IMAGESTREAM_NOERROR) <handle error>
```


6. Periodically, the client checks for a new image: 
```cpp
SharedMemoryFrame frame;
if (IMAGESTREAM_NOERROR == SharedMemoryImageStream_lock(stream, &frame)) {
    <work on the pixels returned in 'frame'>
    SharedMemoryImageStream_unlock(stream);
}
```
 If a lock is successful, the frame will be valid and the shared memory system potentially blocked until unlock is called. Once unlock is called, the data returned in frame is no longer valid.

7. When the communication is finished, the client should make the grpc Unsubscribe() call with the same prefix passed in (3) and then call: 
```cpp
SharedMemoryImageError err = SharedMemoryImageStream_destroy(stream);
```

## Classes

* [\_SharedMemoryFrame](struct___shared_memory_frame.md#struct___shared_memory_frame)

## Includes

* <stdint.h>


```mermaid
graph LR
1["shared_memory_image_client.h"]
click 1 "shared__memory__image__client_8h.md#shared__memory__image__client_8h"
1 --> 2

2["stdint.h"]

```


## Included by

* [shared_memory_image_client_priv.h](shared__memory__image__client__priv_8h.md#shared__memory__image__client__priv_8h)


```mermaid
graph RL
1["shared_memory_image_client.h"]
click 1 "shared__memory__image__client_8h.md#shared__memory__image__client_8h"
2 --> 1

2["shared_memory_image_client_priv.h"]
click 2 "shared__memory__image__client__priv_8h.md#shared__memory__image__client__priv_8h"
3 --> 2

3["shared_memory_image_client_python.c"]
click 3 "shared__memory__image__client__python_8c.md#shared__memory__image__client__python_8c"

```


## Macros

<a id="shared__memory__image__client_8h_1a64df229b0ac6942d9bdee4b94b2c096a"></a>
### Macro IMAGESTREAM\_API\_VERSION

![][public]


```cpp
#define IMAGESTREAM_API_VERSION "1.0"
```




The current API version



<a id="shared__memory__image__client_8h_1a2cc13f7eda736fddce876cf5cae2c502"></a>
### Macro IMAGESTREAM\_UNCONNECTED

![][public]


```cpp
#define IMAGESTREAM_UNCONNECTED 4
```




Not an error, but no client is listening to the stream



<a id="shared__memory__image__client_8h_1aa17e85c9001e414b9ac1db640884b944"></a>
### Macro IMAGESTREAM\_RECONNECTING

![][public]


```cpp
#define IMAGESTREAM_RECONNECTING 3
```




The stream being connected to was already active, this may or may not be an error



<a id="shared__memory__image__client_8h_1a7a7491d1019b67d55ac6488c0e3cb637"></a>
### Macro IMAGESTREAM\_NO\_FRAMEAVAILABLE

![][public]


```cpp
#define IMAGESTREAM_NO_FRAMEAVAILABLE 2
```




Not an error, but there was no frame available to read



<a id="shared__memory__image__client_8h_1a78414d594aa9bb3f9bcea84c768d2826"></a>
### Macro IMAGESTREAM\_NO\_BUFFERAVAILABLE

![][public]


```cpp
#define IMAGESTREAM_NO_BUFFERAVAILABLE 1
```




Not an error, but there were no free buffers to put the frame into



<a id="shared__memory__image__client_8h_1af995dd87ffd7dd178eef1d343f7b72bf"></a>
### Macro IMAGESTREAM\_NOERROR

![][public]


```cpp
#define IMAGESTREAM_NOERROR 0
```




Operation successful



<a id="shared__memory__image__client_8h_1ac2b3e8a36182f38dab1c5fd7a700a0c6"></a>
### Macro IMAGESTREAM\_BAD\_ARGS

![][public]


```cpp
#define IMAGESTREAM_BAD_ARGS -1
```




one of the input parameters is invalid



<a id="shared__memory__image__client_8h_1ab7873d9185a495020022f80c238142bc"></a>
### Macro IMAGESTREAM\_NOT\_LOCKED

![][public]


```cpp
#define IMAGESTREAM_NOT_LOCKED -2
```




an attempt was made to unlock without it having been locked



<a id="shared__memory__image__client_8h_1a54a45d2f039e6275c28249eedfa2515d"></a>
### Macro IMAGESTREAM\_BAD\_FILE\_SIZE

![][public]


```cpp
#define IMAGESTREAM_BAD_FILE_SIZE -3
```




the shared memory file is too small (<10MB) or non-existant



<a id="shared__memory__image__client_8h_1a5b68da171a139f688d317320d0a4eb3e"></a>
### Macro IMAGESTREAM\_UNABLE\_TO\_OPEN\_FILE

![][public]


```cpp
#define IMAGESTREAM_UNABLE_TO_OPEN_FILE -4
```




the shared memory file could not be opened with necessary permissions



<a id="shared__memory__image__client_8h_1ac7eb344cf60975382720f71182dab490"></a>
### Macro IMAGESTREAM\_UNABLE\_TO\_MAP\_FILE

![][public]


```cpp
#define IMAGESTREAM_UNABLE_TO_MAP_FILE -5
```




the shared memory file could not be memory mapped



<a id="shared__memory__image__client_8h_1ae37af5c9dcf1d89b30b82ca4be840cfe"></a>
### Macro IMAGESTREAM\_MEMORY\_ALLOC\_ERROR

![][public]


```cpp
#define IMAGESTREAM_MEMORY_ALLOC_ERROR -6
```




insufficient system memory for internal object allocation



<a id="shared__memory__image__client_8h_1ac0d310d75b0c3ff53d524a0a5fe25b6f"></a>
### Macro IMAGESTREAM\_THREAD\_CREATE\_ERROR

![][public]


```cpp
#define IMAGESTREAM_THREAD_CREATE_ERROR -7
```




unable to create background processing threads



<a id="shared__memory__image__client_8h_1ac914cc76952081d1ccc7c520e12770b1"></a>
### Macro IMAGESTREAM\_IS\_SERVER

![][public]


```cpp
#define IMAGESTREAM_IS_SERVER -8
```




the call is not valid for shared memory server to make



<a id="shared__memory__image__client_8h_1aff57dd9d671a32995d562d68fcfa5fff"></a>
### Macro IMAGESTREAM\_IS\_NOTSERVER

![][public]


```cpp
#define IMAGESTREAM_IS_NOTSERVER -9
```




the call is not valid for shared memory client to make



<a id="shared__memory__image__client_8h_1ae5bdc8c10b2aa9db85d0955c99cba2c6"></a>
### Macro IMAGESTREAM\_FRAME\_TOO\_LARGE

![][public]


```cpp
#define IMAGESTREAM_FRAME_TOO_LARGE -10
```




the image frame is too large for the size of the shared memory file



<a id="shared__memory__image__client_8h_1a8389f19c29b726a2bed3c5831d1fb267"></a>
### Macro IMAGESTREAM\_LOCKED

![][public]


```cpp
#define IMAGESTREAM_LOCKED -11
```




this call is not legal until the stream has been unlocked



<a id="shared__memory__image__client_8h_1a7fbe522f7a46875a755f07c8ff69e2df"></a>
### Macro IMAGESTREAM\_OPTIONS\_NONE

![][public]


```cpp
#define IMAGESTREAM_OPTIONS_NONE 0x00000000
```




the default options for a client stream



<a id="shared__memory__image__client_8h_1a536935e36e51aade42c2a49f8ecd7ae1"></a>
### Macro IMAGESTREAM\_OPTIONS\_FLIPVERTICAL

![][public]


```cpp
#define IMAGESTREAM_OPTIONS_FLIPVERTICAL 0x00000100
```




this is a server flag that requests that pixels be flipped vertically relative to the input buffer



## Typedefs

<a id="shared__memory__image__client_8h_1a0496a9a3db499fa9145fe97d2e6dae9a"></a>
### Typedef SharedMemoryImageError

![][public]



```cpp
typedef int SharedMemoryImageError
```


common error codes see the non-hex, non-string IMAGESTREAM macros





**Return type**: int

<a id="shared__memory__image__client_8h_1af5b8eb2ae90823f10e9a17698ea80749"></a>
### Typedef SharedMemoryImageStream

![][public]



```cpp
typedef struct _SharedMemoryImageStream* SharedMemoryImageStream
```


image transport stream pointer





**Return type**: struct _SharedMemoryImageStream *

<a id="shared__memory__image__client_8h_1a995c49496fcc1a41fb2d104c6473223b"></a>
### Typedef SharedMemoryFrame

![][public]



```cpp
typedef struct _SharedMemoryFrame * SharedMemoryFrame
```


A reference to a frame of imagery. Note it does not own the buffer pointer.

Structure representing a frame of imagery in sequence



**Return type**: struct [\_SharedMemoryFrame](struct___shared_memory_frame.md#struct___shared_memory_frame) *

## Functions

<a id="shared__memory__image__client_8h_1a03ba052ae823b3e39fef153db8f03ea2"></a>
### Function SharedMemoryImageStream\_create

![][public]


```cpp
SharedMemoryImageError SharedMemoryImageStream_create(const char *filename, uint32_t options, SharedMemoryImageStream *stream)
```


SharedMemoryImageStream_create create a stream client instance.

This function will map the file pointed to by filename as shared memory an use it to stream images between two applications. The file must (1) exist, (2) be at least 20MB in size and (3) be opened by a server stream before the client stream is created. Once created, the stream interface handle must be destroyed by SharedMemoryImageStream_destroy to release the stream resources.





The file to be used as the shared memory map should be at least 2x the size of the largest image that will be used. For example if you want to transport 4K images, the file should be at least 4000pixels*3bytes/pixel*2 + 500bytes in size. The file must be on a filesystem that support memory mapped I/O.





Negative error codes are a failure of the operation for various reasons. The IMAGESTREAM_RECONNECTING error code can occur if the file has been (or currently is) already supporting a stream and may or may not be an actual error.





Note: server instances can be created using undocumented option flags.






**Parameters**:

* **filename**: - the name of a pre-existing file to use as the shared memory window
* **options**: - stream creation options
* **stream**: - if the returned error value is >=0, this pointer will be returned.


**Returns**:

[SharedMemoryImageError](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1a0496a9a3db499fa9145fe97d2e6dae9a) - the error code for this call.



**Parameters**:

* const char * **filename**
* uint32_t **options**
* [SharedMemoryImageStream](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1af5b8eb2ae90823f10e9a17698ea80749) * **stream**

**Return type**: [SharedMemoryImageError](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1a0496a9a3db499fa9145fe97d2e6dae9a)

<a id="shared__memory__image__client_8h_1afefb8f5297147640b46d1f9eb1e77c9e"></a>
### Function SharedMemoryImageStream\_lock

![][public]


```cpp
SharedMemoryImageError SharedMemoryImageStream_lock(SharedMemoryImageStream stream, SharedMemoryFrame *frame)
```


SharedMemoryImageStream_lock get a frame of pixels from the server.

This call should be made periodically by the client application to read images from the server. If the function returns IMAGESTREAM_NOERROR, then the frame argument contains the raw pixel data and the data pointer in that structure is valid until [SharedMemoryImageStream\_unlock()](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1ac885e449551afd5fb5a7f19c5ec785a6) is called. If the function returns IMAGESTREAM_NO_FRAMEAVAILABLE, no new imagery is available from the server and [SharedMemoryImageStream\_unlock()](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1ac885e449551afd5fb5a7f19c5ec785a6) does not need to be called.





The frame structure is filled out by this call and the buffer field will be a pointer to the packed RGB image array in row major RBG order. The pointer will point to iWidth*iHeight*3 bytes of data. iFrame will be the frame number. The frame number will always increase, but there may be gaps in the numbering, depending on the render vs image read speeds.





The buffer pointer must not be deallocated by the application.






**Parameters**:

* **stream**: - the stream to check for imagery
* **frame**: - the currently available image (if any)


**Returns**:

[SharedMemoryImageError](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1a0496a9a3db499fa9145fe97d2e6dae9a) - the error code for the operation.



**Parameters**:

* [SharedMemoryImageStream](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1af5b8eb2ae90823f10e9a17698ea80749) **stream**
* [SharedMemoryFrame](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1a995c49496fcc1a41fb2d104c6473223b) * **frame**

**Return type**: [SharedMemoryImageError](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1a0496a9a3db499fa9145fe97d2e6dae9a)

<a id="shared__memory__image__client_8h_1ac885e449551afd5fb5a7f19c5ec785a6"></a>
### Function SharedMemoryImageStream\_unlock

![][public]


```cpp
SharedMemoryImageError SharedMemoryImageStream_unlock(SharedMemoryImageStream stream)
```


SharedMemoryImageStream_unlock release a frame obtained by SharedMemoryImageStream_lock.

If [SharedMemoryImageStream\_lock()](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1afefb8f5297147640b46d1f9eb1e77c9e) was called and returned IMAGESTREAM_NOERROR, this function must be called to release the frame back to the stream manager. Note, after making this call, the calling application should no longer access any of the fields in the frame returned by the locking call.






**Parameters**:

* **stream**: - the stream to use


**Returns**:

[SharedMemoryImageError](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1a0496a9a3db499fa9145fe97d2e6dae9a) - error code for the operation



**Parameters**:

* [SharedMemoryImageStream](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1af5b8eb2ae90823f10e9a17698ea80749) **stream**

**Return type**: [SharedMemoryImageError](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1a0496a9a3db499fa9145fe97d2e6dae9a)

<a id="shared__memory__image__client_8h_1a4ea47b6bda387b71ed5f91db329eff65"></a>
### Function SharedMemoryImageStream\_destroy

![][public]


```cpp
SharedMemoryImageError SharedMemoryImageStream_destroy(SharedMemoryImageStream stream)
```


SharedMemoryImageStream_destroy destroy a stream interface, releasing its resources.

This function is called to shutdown one end of an image transport stream. It can be the client or server end of the stream.






**Parameters**:

* **stream**: - the stream to use


**Returns**:

[SharedMemoryImageError](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1a0496a9a3db499fa9145fe97d2e6dae9a) - error code for the operation



**Parameters**:

* [SharedMemoryImageStream](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1af5b8eb2ae90823f10e9a17698ea80749) **stream**

**Return type**: [SharedMemoryImageError](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1a0496a9a3db499fa9145fe97d2e6dae9a)

<a id="shared__memory__image__client_8h_1a16abb961cf38273321e81cc64d71fad7"></a>
### Function SharedMemoryImageStream\_errorstring

![][public]


```cpp
const char * SharedMemoryImageStream_errorstring(SharedMemoryImageError err)
```


SharedMemoryImageStream_errorstring convert an error code into a human string.

For a given [SharedMemoryImageError](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1a0496a9a3db499fa9145fe97d2e6dae9a) error code, return a const char * pointer to a utf8 encoded string with a human readable description of the error.






**Parameters**:

* **err**: - the error code


**Returns**:

const char * - The string describing the error (utf8 encoding)



**Parameters**:

* [SharedMemoryImageError](shared__memory__image__client_8h.md#shared__memory__image__client_8h_1a0496a9a3db499fa9145fe97d2e6dae9a) **err**

**Return type**: const char *

## Source


```cpp
/*  *************************************************************
 *   Copyright 2017-2020 ANSYS, Inc.
 *   All Rights Reserved.
 *
 *        Restricted Rights Legend
 *
 *   Use, duplication, or disclosure of this
 *   software and its documentation by the
 *   Government is subject to restrictions as
 *   set forth in subdivision [(b)(3)(ii)] of
 *   the Rights in Technical Data and Computer
 *   Software clause at 52.227-7013.
 *  *************************************************************
 */

#ifndef ___ENSIGHT_GRPC_SHMEM_CLIENT_H___
#define ___ENSIGHT_GRPC_SHMEM_CLIENT_H___


#ifdef __cplusplus
extern "C" {
#endif

#include <stdint.h>

#define IMAGESTREAM_API_VERSION         "1.0"  

/* SharedMemoryImageError Error values */
#define IMAGESTREAM_UNCONNECTED            4   
#define IMAGESTREAM_RECONNECTING           3   
#define IMAGESTREAM_NO_FRAMEAVAILABLE      2   
#define IMAGESTREAM_NO_BUFFERAVAILABLE     1   
#define IMAGESTREAM_NOERROR                0   
/* negative numbers are actual errors, positive numbers are not actually errors */
#define IMAGESTREAM_BAD_ARGS              -1   
#define IMAGESTREAM_NOT_LOCKED            -2   
#define IMAGESTREAM_BAD_FILE_SIZE         -3   
#define IMAGESTREAM_UNABLE_TO_OPEN_FILE   -4   
#define IMAGESTREAM_UNABLE_TO_MAP_FILE    -5   
#define IMAGESTREAM_MEMORY_ALLOC_ERROR    -6   
#define IMAGESTREAM_THREAD_CREATE_ERROR   -7   
#define IMAGESTREAM_IS_SERVER             -8   
#define IMAGESTREAM_IS_NOTSERVER          -9   
#define IMAGESTREAM_FRAME_TOO_LARGE      -10   
#define IMAGESTREAM_LOCKED               -11   

/* valid stream creation options */
#define IMAGESTREAM_OPTIONS_NONE           0x00000000   
/* server options consume first 8 bits */
#define IMAGESTREAM_OPTIONS_FLIPVERTICAL   0x00000100   

/* core type definitions */
/* error codes, see defines above */
typedef int SharedMemoryImageError;  
/* stream interface handle */
typedef struct _SharedMemoryImageStream  *SharedMemoryImageStream;  

typedef struct _SharedMemoryFrame {
    uint32_t iFrame;   
    uint32_t iWidth;   
    uint32_t iHeight;  
    uint8_t *buffer;   
} *SharedMemoryFrame;  

 SharedMemoryImageError SharedMemoryImageStream_create(const char *filename, 
    uint32_t options, SharedMemoryImageStream *stream);

 SharedMemoryImageError SharedMemoryImageStream_lock(SharedMemoryImageStream stream, 
    SharedMemoryFrame *frame);

 SharedMemoryImageError SharedMemoryImageStream_unlock(SharedMemoryImageStream stream);

 SharedMemoryImageError SharedMemoryImageStream_destroy(SharedMemoryImageStream stream);

 const char *SharedMemoryImageStream_errorstring(SharedMemoryImageError err);

#ifdef __cplusplus
}
#endif

#endif
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C]: https://img.shields.io/badge/language-C-blue (C)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)