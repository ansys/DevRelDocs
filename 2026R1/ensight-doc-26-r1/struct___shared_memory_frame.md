# Structure \_SharedMemoryFrame

<a id="struct___shared_memory_frame"></a>

![][C++]
![][public]




Structure representing a frame of imagery in sequence

## Members

* [buffer](struct___shared_memory_frame.md#struct___shared_memory_frame_1a7cff19a44525e74c5800b1e2f9e4cc98)
* [iFrame](struct___shared_memory_frame.md#struct___shared_memory_frame_1a412d63c3ef8e7417be98997f72f3b0e5)
* [iHeight](struct___shared_memory_frame.md#struct___shared_memory_frame_1ab21b6d402e01098565be5024de341ec7)
* [iWidth](struct___shared_memory_frame.md#struct___shared_memory_frame_1a6d26bbffc622333b9f11fbadecbd6f21)

## Public attributes

<a id="struct___shared_memory_frame_1a412d63c3ef8e7417be98997f72f3b0e5"></a>
### Variable iFrame

![][public]



```cpp
uint32_t _SharedMemoryFrame::iFrame
```


monotonically increasing frame number





**Type**: uint32_t

<a id="struct___shared_memory_frame_1a6d26bbffc622333b9f11fbadecbd6f21"></a>
### Variable iWidth

![][public]



```cpp
uint32_t _SharedMemoryFrame::iWidth
```


width of a frame in pixels





**Type**: uint32_t

<a id="struct___shared_memory_frame_1ab21b6d402e01098565be5024de341ec7"></a>
### Variable iHeight

![][public]



```cpp
uint32_t _SharedMemoryFrame::iHeight
```


height of a frame in pixels





**Type**: uint32_t

<a id="struct___shared_memory_frame_1a7cff19a44525e74c5800b1e2f9e4cc98"></a>
### Variable buffer

![][public]



```cpp
uint8_t* _SharedMemoryFrame::buffer
```


pointer to a packed RGBRGBRGB... (iWidth*iHeight*3) bytes array of pixels





**Type**: uint8_t *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)