

# RATimeStatistics

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RATimeStatistics"></a>

### *class* RATimeStatistics

PrePost Scripting wrapper for TimeStatisticsContainer.

**Methods:**

| Name | Description |
|------------------------------------------------------------------------------------------------|----------------------------------------------|
| [`AddGridFunction`](#generated.RATimeStatistics.AddGridFunction)(start_time, stop_time, ...)   | Add a new time statistics grid function.     |
| [`RemoveGridFunction`](#generated.RATimeStatistics.RemoveGridFunction)(name_or_calculator)     | Remove a previously-generated grid function. |

<a id="generated.RATimeStatistics.AddGridFunction"></a>

#### AddGridFunction(start_time: float | int | tuple[float | int, str] | Scalar, stop_time: float | int | tuple[float | int, str] | Scalar, operation: str, grid_function_name: str, location: str | None = None)

Add a new time statistics grid function.

> * For both time parameters (start_time and stop_time), three kinds of values can be passed:
>   : - A float or int, which will be assumed to be a value in seconds;
>     - A tuple with a float or int and a string. The first element is the value, and the second
>       is the value’s unit.
>     - A time Scalar.
> * operation must be the string representing one of the operations that the time
>   : statistics grid functions support. Currently, these are limited to “average”, “min”, “max” and
>     “sum”.
> * grid_function_name must be the string of the name of the input grid function over
>   : which the operation will be performed.
> * location is optional and must be one of ‘cell’ or ‘node’. If no location is passed, the
>   : time statistics grid function will be created on the cell.
* **Return RATimeStatisticsCalculator:**
  An object representing the newly-created time statistics grid function. This object can
  be used to change the start and stop times, and to retrieve the grid function name.

<a id="generated.RATimeStatistics.RemoveGridFunction"></a>

#### RemoveGridFunction(name_or_calculator: str | [RATimeStatisticsCalculator](RATimeStatisticsCalculator.md#generated.RATimeStatisticsCalculator))

Remove a previously-generated grid function.

The passed value can be either the name of the grid function to be removed, or a
RATimeStatisticsCalculator object previously returned by AddGridFunction().
