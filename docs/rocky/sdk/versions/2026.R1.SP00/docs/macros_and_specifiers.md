# Macros and specifiers

<p id="macros_and_specifiers"></p>

[CUDA](glossary.md#cuda) is the parallel computing platform used by Rocky to
enable the execution of simulations on CUDA-enabled GPU cards. In order
to work properly on GPU simulations, custom [modules](glossary.md#module)
must perform some basic operations of memory management on
[devices](glossary.md#device) and data transfer between CPU and GPU.

*Note: Although on GPU simulations most of
the heavy operations are processed on
GPU, there are many operations, such
as setup, initialization and output, that
are always performed on CPU*

This section describes a set of available CUDA-related macros that may
be used for performing basic memory operations in the code when implementing
custom modules. It is worth noting that they must be used only in the
CUDA-related [hooks](glossary.md#hook)*, and only when modules are intended to
be used on simulations running on GPU. In order to enable CUDA-related
macros and hooks, the `.cu` file implementing the module functionalities
must define the preprocessor macro name `ROCKY_CUDA_API`.

**Currently, the CUDA-related hooks are
four: `ROCKY_PLUGIN_INITIALIZE_CUDA`,
`ROCKY_PLUGIN_BEGIN_ITERATION_CUDA`,
`ROCKY_PLUGIN_PRE_OUTPUT_CUDA_SYNC_DATA`,
and `ROCKY_PLUGIN_TEAR_DOWN_CUDA`.*



## CUDA_MALLOC

This macro must be used to allocate a block of memory in a device for
storing custom data. This allocation must be made before any copy
operation of custom data to a device.

**Parameters:**

-   `device_ptr`

    A pointer that after successful memory allocation will point to the
    memory address in a device at which the custom data will be stored.
    Prior to its utilization in the macro, this pointer must be a null
    pointer, otherwise a runtime error will be thrown.

-   `size`

    An integer value that indicates the number of bytes that must be
    allocated in the device.

## CUDA_MALLOC_TYPE

A variant of `CUDA_MALLOC` that, instead of receiving the number of bytes that must
be allocated in the device, receives the type of data that
will be stored and the number of elements as parameters, if it happens to be an array.

**Parameters:**

-   `device_ptr`

    A pointer that after successful memory allocation will point to the
    memory address in a device at which the custom data will be stored.
    Prior to its utilization in the macro, this pointer must be a null
    pointer, otherwise a runtime error will be thrown.

-   `count`

    An integer value that indicates the number of elements of the same
    type that will be stored in the allocated memory.

-   `type`

    The type of variable that will be stored in the device, which can be
    a C++ built-in type or a custom data structure.

## CUDA_COPY_H2D

This macro must be used to copy custom data from the [host](glossary.md#host)
to a device. Prior to this copy operation, the right amount of memory
must have already been allocated within the device, otherwise a
segmentation fault will occur.

*Note: The data type being copied must be trivially copyable otherwise a compilation error will raise.*

**Parameters:**

-   `device_ptr`

    Destination memory address within a device.

-   `host_ptr`

    Source memory address within the host.

-   `count`

    An integer value that indicates the number of elements of the same
    type that will be copied.

## CUDA_COPY_D2H

This macro performs the inverse operation of `CUDA_COPY_H2D`, that is, it copies data
from the device back to the host. This operation may be needed when
processed data must be made available to the host in order to be saved
or delivered to the Rocky UI for visualization.

*Note: The data type being copied must be trivially copyable otherwise a compilation error will raise.*

**Parameters:**

-   `host_ptr`

    Destination memory address within the host.

-   `device_ptr`

    Source memory address within a device.

-   `count`

    An integer value that indicates the number of elements of the same
    type that will be copied.

## CUDA_MEMSET

This macro sets a memory block within a device to a given value. It is
commonly used to reset a block of memory that previously contained some data to zero.

**Parameters:**

-   `device_ptr`

    Memory address within the device where the block begins.

-   `value`

    The value to be defined for each byte within the memory block.

-   `count`

    An integer value that indicates the number of elements of the same
    type that currently occupy the memory block.

## CUDA_FREE

This macro must be used to free the memory block allocated previously by
`CUDA_MALLOC`.

**Parameters:**

-   `device_ptr`

    Device pointer that points to the memory block that must be freed.

## ROCKY_FUNCTIONS

This is a function specifier that enables a function to be executed on CPU
or on GPU. Its use is mandatory in the declaration of auxiliary functions
that are intended to be called from hooks executed on GPU. This is the
case for almost all hooks other than the initialization and termination
hooks.