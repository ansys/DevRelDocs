# Available DPF operator configurations

Configurations are optional settings that control how operators execute their computations. They enable you to optimize performance, manage memory usage, and customize execution behavior without affecting the operator's output results.

## Overview

Configurations are distinct from operator inputs (pins):

- **Input pins** define *what data* to process and are specific to each operator's functionality
- **Configurations** control *how the data is computed* and are framework-level options available across all operators that support them

Importantly, configurations do not change the result of an operator, only how it computes that result. For example, enabling `run_in_parallel` will produce the same output as running sequentially, but potentially faster.

Because configurations are defined at the framework level, the same configuration option (like `use_cache` or `num_threads`) behaves consistently across different operators. In contrast, each operator defines its own unique set of input pins.

Most operators work well with default configuration values. Explicit configuration is optional but can significantly improve performance and resource usage for specific use cases.

## Available configuration options

The following are all the framework-level configurations. Not all operators support every configuration - refer to the individual [operator specification](../operator-specifications/operator-specifications.md) page to see which configurations are available for a specific operator.

### Performance and parallelization

#### `run_in_parallel`

<a id="run_in_parallel"></a>

**Type:** [`bool`](./dpf-types.md#standard-types)

**Default:** `true`

**Description:** When set to `true`, enables parallel execution of loops within the operator using multiprocessing. This can significantly improve performance for operations on large datasets by distributing work across multiple processes. Note that this controls multiprocessing, not multithreading - the number of threads for each process is controlled separately by `num_threads`. Set to `false` when you need sequential execution for debugging or when parallel execution causes conflicts with shared resources.

#### `num_threads`

<a id="num_threads"></a>

**Type:** [`int32`](./dpf-types.md#standard-types)

**Default:** `0` (use global default: number of hardware threads on Windows, `1` on Linux)

**Description:** Specifies the number of threads to use for parallel execution using multithreading. When set to `0`, the operator automatically uses the system's hardware concurrency on Windows, making it scale to available CPU resources without requiring explicit configuration. Set to a specific value to limit thread count and balance performance with system resources.

#### `read_inputs_in_parallel`

<a id="read_inputs_in_parallel"></a>

**Type:** [`bool`](./dpf-types.md#standard-types)

**Default:** `false`

**Description:** When set to `true`, the operator evaluates its input pins in parallel using multi-threading. This enables concurrent data fetching and evaluation from multiple sources, significantly improving performance for operators that read from multiple independent sources such as files, remote servers, or partitions. Commonly used with merge operators and distributed workflows.

### Memory management

#### `inplace`

<a id="inplace"></a>

**Type:** [`bool`](./dpf-types.md#standard-types)

**Default:** `false` (most operators default to `false` for safety; some rotation operators default to `true` for performance)

**Description:** When set to `true`, the operator modifies input data directly instead of creating a new output copy, reducing memory consumption and avoiding copy overhead. This is particularly beneficial for large field operations where memory is constrained. However, this modifies the original input data, which can cause issues if the input is reused elsewhere or connected to multiple operators. Not all operators support `inplace` with all input types - refer to the specific operator specification for limitations.

**Warning:** Use with caution as this irreversibly modifies the input. Avoid when input is shared across multiple operators or when debugging, as it makes it harder to trace data modifications.

#### `use_cache`

<a id="use_cache"></a>

**Type:** [`bool`](./dpf-types.md#standard-types)

**Default:** `true`

**Description:** When set to `true`, the operator caches intermediate computation results such as index mappings. This significantly reduces execution time for subsequent evaluations with the same or similar inputs, making it essential for iterative workflows that run operators multiple times. The cache is operator-instance specific. Disable when memory is constrained and the operator runs only once, or when input data changes frequently with different scopings. Note that when chunking is used (e.g., in modal superposition), caching may be automatically disabled to avoid storing large intermediate datasets.

#### `incremental`

<a id="incremental"></a>

**Type:** [`bool`](./dpf-types.md#standard-types)

**Default:** `true`

**Description:** When set to `true`, enables the operator to be executed multiple times with different input subsets, accumulating results progressively across runs instead of creating new output containers each time. This is essential for processing large datasets that don't fit in memory by breaking them into manageable chunks. Common use cases include computing min/max or accumulations over large time histories (e.g., processing 1000 time steps in chunks of 50-100) and aggregating results over domain labels. The operator reuses existing output containers between runs, appending or updating data incrementally. When using incremental processing with large datasets, consider disabling `use_cache` to prevent memory buildup from cached intermediate results. Set to `false` when each operator run is independent and you want fresh output containers every time.

### Data processing behavior

#### `binary_operation`

<a id="binary_operation"></a>

**Type:** `enum dataProcessing::EBinaryOperation`, [`int32`](./dpf-types.md#standard-types)

**Values:**
- `0` (Intersection): Output contains only entities (node IDs, element IDs) that exist in ALL input fields
- `1` (Union): Output contains all entities from any input field; missing values treated as null/zero
- `2` (Union without nulls): Union of all entities, dynamically removing entries where data would be null
- `3` (Union with first value): Union of all entities, using the first non-null value found across inputs for each entity

**Default:** `1` (Union)

**Description:** Controls the scoping strategy for how entity IDs from multiple input fields are combined during operations. The default union behavior (`1`) includes all entities from any input, making it suitable for general field operations like merging data from different mesh regions or accumulating data from multiple sources. Use intersection (`0`) for strict field comparison when you need exact overlap and want to avoid assumptions about missing data - the output will only contain entities present in all inputs. For sparse data operations, consider union without nulls (`2`) to optimize performance by skipping null entries. Use union with first value (`3`) for priority-based field selection where you want the first available data source for each entity. Note that when `work_by_index` is enabled, entity matching is by index position rather than ID, which limits the effect of `binary_operation`.

#### `work_by_index`

<a id="work_by_index"></a>

**Type:** [`bool`](./dpf-types.md#standard-types)

**Default:** `false` (most operators); `true` for centroid operator

**Description:** Controls how multi-field operations iterate over and compare entities. When set to `false` (default), operations match entities based on their IDs (scoping identifiers), providing flexibility for fields with different scopings and enabling ID-based merging according to the `binary_operation` mode. When set to `true`, operations match entities based on their position in arrays (0-indexed), assuming fields have compatible scopings where entities at the same indices represent the same physical entity. This bypasses complex ID matching logic and provides better performance (O(n) vs O(n log n)) when scopings are identical or have guaranteed positional alignment. Enable for index-based operations when working with dense, sequentially indexed data such as time series at fixed mesh nodes or when interpolating between fields with guaranteed alignment.

**Warning:** Setting to `true` with misaligned scopings will produce incorrect results. Ensure fields represent the same entities in the same order. When enabled, `binary_operation` modes are effectively bypassed as entities are always matched by position. If fields have different sizes, processing only occurs up to the size of the smaller field.

#### `permissive`

<a id="permissive"></a>

**Type:** [`bool`](./dpf-types.md#standard-types)

**Default:** `false` (strict validation); `true` for error/norm operators

**Description:** Controls whether operators perform validation checks during execution. When set to `false` (default), the validation checks defined in the operator are performed, which can include unit homogeneity checks, scoping and location compatibility enforcement, and data size verification - operations fail fast with detailed error messages when validation fails. When set to `true`, the operator runs in lenient mode, bypassing warning checks and allowing operations to proceed with incompatible units (e.g., adding "Pa" + "m"), mismatched scopings, or incomplete datasets. This "fail-soft" behavior is useful when processing heterogeneous data with mixed units, working with incomplete or partially valid datasets, handling legacy data with inconsistent metadata, or performing exploratory "best-effort" operations. Fields or operations that fail validation are silently skipped rather than causing errors. Error and norm operators default to `true` to gracefully handle division by zero and numerical precision issues.

**Warning:** Use with extreme caution as this can produce physically meaningless results (e.g., adding pressure and length) and mask real data problems. Silent failures make debugging difficult, and output units may not reflect actual operations. Recommended only for prototyping or when working with imperfect data where you understand the validation risks. Keep disabled for production workflows requiring data integrity and physically meaningful results. Validate results manually when using permissive mode.

### Thread safety

#### `mutex`

<a id="mutex"></a>

**Type:** [`bool`](./dpf-types.md#standard-types)

**Default:** `false`

**Description:** Enables thread-safe execution by protecting the operator's execution method with a mutex lock, preventing simultaneous runs of the operator by multiple threads. When set to `false` (default), the operator executes without synchronization overhead, allowing maximum parallel performance but requiring the operator implementation to be naturally thread-safe. When set to `true`, only one thread can execute the operator instance at a time - other threads attempting concurrent execution will block until the lock is released. This prevents race conditions when the operator modifies shared state, accesses non-thread-safe external libraries, uses internal caching mechanisms that aren't thread-safe, or has file I/O operations that may conflict. The mutex operates at the operator-instance level, meaning different instances of the same operator can still run in parallel. Enable when debugging suspected race conditions, working with legacy operators that have global state, or integrating non-thread-safe external libraries. Note that while this guarantees thread safety, it adds synchronization overhead and can create serialization bottlenecks in highly parallel workflows. This configuration is universally available on all DPF operators.

**Warning:** Use as a last resort for thread-safety issues. Enabling mutex on frequently-used operators in parallel workflows can create performance bottlenecks by serializing execution. Prefer designing operators to be naturally thread-safe using immutable data and local variables rather than relying on mutex protection. The mutex is not a substitute for proper thread-safe design.

### Advanced configurations

#### `evaluate_inputs_before_run`

<a id="evaluate_inputs_before_run"></a>

**Type:** [`bool`](./dpf-types.md#standard-types)

**Default:** `true` (eager evaluation); `false` for control-flow operators (`for_each`, conditional logic operators)

**Description:** Controls whether all input pins are evaluated (forcing upstream operators to run) before the operator's own execution method begins. When set to `true` (default), all connected input pins are evaluated before entering the run method, ensuring all input data is available and up-to-date, maintaining correct operator status tracking throughout the workflow graph, and providing predictable execution order. This eager evaluation triggers upstream operators recursively, materializing all input data before the operator's logic executes. When set to `false`, input pins are NOT evaluated before execution, enabling lazy evaluation where upstream operators only run when explicitly accessed within the operator's implementation. This allows conditional input processing based on runtime logic and is essential for control-flow operators like `for_each` loops and `if` conditionals where pre-evaluating all branches would trigger unnecessary computations or defeat the purpose of conditional execution. Works with `read_inputs_in_parallel` to control parallel vs sequential input evaluation when enabled. Most data-processing, mathematical, and transformation operators should use the default eager evaluation for correct status tracking and debugging ease.

**Warning:** Set to `false` only for operators with conditional or iterative input processing logic. Lazy evaluation complicates operator status tracking (status may not reflect upstream dependencies accurately), makes debugging more difficult due to unpredictable execution order, and delays error detection until inputs are accessed. Ensure the operator implementation correctly handles unevaluated inputs and that workflow status tracking works correctly for your use case.

#### `use_cuda`

<a id="use_cuda"></a>

**Type:** [`bool`](./dpf-types.md#standard-types)

**Default:** `false`

**Description:** Enables GPU-accelerated computation using NVIDIA CUDA for supported operators. When set to `false` (default), operators use CPU-based execution. When set to `true`, operators attempt to use CUDA for GPU acceleration, providing potential significant performance improvements for large datasets on systems with compatible NVIDIA GPUs. If CUDA is unavailable, operators automatically fall back to CPU execution, ensuring workflows remain functional even without GPU support.

**Current availability:** As of this release, `use_cuda` is only implemented for ZFP compression operators (`apply_zfp` and `zfp_decompress`).

**Requirements:** NVIDIA GPU with CUDA support, CUDA Toolkit installed, operator-specific CUDA-enabled libraries (e.g., ZFP compiled with `-DZFP_WITH_CUDA=ON`), compatible CUDA drivers, and ANSYS build configured with CUDA support. Note that if `run_in_parallel=false`, it may force serial execution which prevents CUDA usage.

**Warning:** CUDA introduces deployment complexity and platform dependencies. GPU memory transfer overhead may negate benefits for small datasets. Silent fallback to CPU means users may not realize GPU isn't being used - check console output for fallback messages. Test workflows on systems without CUDA to ensure CPU fallback works correctly.

## Setting configurations

Configurations are set on operator objects before evaluation. The exact syntax depends on your API:

### Python example

```python
from ansys.dpf import core as dpf

# Create an operator
op = dpf.operators.math.add()

# Set configurations
op.config.set_run_in_parallel(True)
op.config.set_num_threads(4)
op.config.set_permissive(False)

# Connect inputs and evaluate
# ...
```

### C++ example

```cpp
#include "dpf_api.h"

// Create an operator
auto op = ansys::dpf::Operator("math::add");

// Set configurations
op.Config().SetRunInParallel(true);
op.Config().SetNumThreads(4);
op.Config().SetPermissive(false);

// Connect inputs and evaluate
// ...
```

## Best practices

1. **Start with defaults:** Most operators work well with default configuration values. Only customize when you have specific performance or behavior requirements.

2. **Profile before optimizing:** Measure performance before and after enabling parallel execution or caching to ensure the changes provide the expected benefit.

3. **Memory vs. speed tradeoffs:** Configurations like `inplace` and `use_cache` involve tradeoffs between memory usage and execution speed. Choose based on your system constraints.

4. **Thread count selection:** Setting `num_threads` too high can cause overhead. Generally, use a value close to the number of physical CPU cores.

5. **Validation in development:** Keep `permissive` disabled during development to catch data inconsistencies early. Consider enabling it only for production workflows with validated data.

6. **Document custom configurations:** When using non-default configurations in workflows, document why each setting was chosen to aid future maintenance.

## See also

- [Operator fundamentals](./operator.md)
- [Operator specifications](../operator-specifications/operator-specifications.md)
- [Available types](./dpf-types.md)
