

# RAGridFunction

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAGridFunction"></a>

### *class* RAGridFunction

Identifies a grid function in the model.

It acts as a handle of the grid function and not the actual grid function, which means that when
the time changes, this handle will start returning the values for the grid function at the new
time and not at the time where it was requested initially.

I.e.:
: GoToFirstTimeStep()
  grid = GetGrid(‘Main Grid’)
  gf = grid.GetGridFunction(‘Oil Pressure’)
  gf.GetMax() #Max value at time 0.
  GoToNextTimeStep()
  gf.GetMax() #Max value at time 1.

Although most function also accept passing in the time.

I.e.:
: grid = GetGrid(‘Main Grid’)
  gf = grid.GetGridFunction(‘Oil Pressure’)
  gf.GetMax(time_step=0) #Max value at time 0.
  gf.GetMax(time_step=2) #Max value at time 2.

**Methods:**

| Name | Description |
|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`GetArray`](#generated.RAGridFunction.GetArray)([unit, time_step])                         |                                                                               |
| [`GetAverage`](#generated.RAGridFunction.GetAverage)([unit, time_step])                     |                                                                               |
| [`GetGrid`](#generated.RAGridFunction.GetGrid)()                                            |                                                                               |
| [`GetIsStatic`](#generated.RAGridFunction.GetIsStatic)()                                    |                                                                               |
| [`GetIsTransient`](#generated.RAGridFunction.GetIsTransient)()                              |                                                                               |
| [`GetLimits`](#generated.RAGridFunction.GetLimits)([unit, time_step])                       |                                                                               |
| [`GetLocation`](#generated.RAGridFunction.GetLocation)()                                    |                                                                               |
| [`GetMax`](#generated.RAGridFunction.GetMax)([unit, time_step])                             |                                                                               |
| [`GetMin`](#generated.RAGridFunction.GetMin)([unit, time_step])                             |                                                                               |
| [`GetStandardDeviation`](#generated.RAGridFunction.GetStandardDeviation)([unit, time_step]) |                                                                               |
| [`GetSum`](#generated.RAGridFunction.GetSum)([unit, time_step])                             |                                                                               |
| [`GetSumSquared`](#generated.RAGridFunction.GetSumSquared)([unit, time_step])               |                                                                               |
| [`GetTimeStep`](#generated.RAGridFunction.GetTimeStep)(time_step[, accept_global])          | Get the timestep corresponding to the given time.                             |
| [`GetUnit`](#generated.RAGridFunction.GetUnit)()                                            |                                                                               |
| [`GetValue`](#generated.RAGridFunction.GetValue)(i[, j, k, unit, time_step])                |                                                                               |
| [`GetVariance`](#generated.RAGridFunction.GetVariance)([unit, time_step])                   |                                                                               |
| [`Modified`](#generated.RAGridFunction.Modified)(\*args, \*\*kwargs)                        | Resets all the cache information after a change in the subject being tracked. |
| [`SetCurrentTimeStep`](#generated.RAGridFunction.SetCurrentTimeStep)(time_step)             | Sets the current time step.                                                   |

**Attributes:**

| Name |
| ---------------------------------------------------------------------- |
| [`average`](#generated.RAGridFunction.average) |
| [`is_static`](#generated.RAGridFunction.is_static) |
| [`is_transient`](#generated.RAGridFunction.is_transient) |
| [`limits`](#generated.RAGridFunction.limits) |
| [`max`](#generated.RAGridFunction.max) |
| [`min`](#generated.RAGridFunction.min) |
| [`standard_deviation`](#generated.RAGridFunction.standard_deviation) |
| [`sum`](#generated.RAGridFunction.sum) |
| [`sum_squared`](#generated.RAGridFunction.sum_squared) |
| [`unit`](#generated.RAGridFunction.unit) |
| [`variance`](#generated.RAGridFunction.variance) |

<a id="generated.RAGridFunction.GetArray"></a>

#### GetArray(unit=None, time_step='current')

* **Parameters:**
  * **unit** (*str*) – The unit in which the array should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with ‘current’ identifying the current time step

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  numpy array or None
* **Returns:**
  Returns a numpy array representing the passed grid function or None if it couldn’t be
  found.

<a id="generated.RAGridFunction.GetAverage"></a>

#### GetAverage(unit=None, time_step='current')

* **Parameters:**
  * **unit** (*str*) – The unit in which the value should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with ‘current’ identifying the current time step (note
    that ‘global’ is NOT accepted for this statistic).

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float or None
* **Returns:**
  Returns a the average value for the grid function or None if it’s not available for the
  current time.

<a id="generated.RAGridFunction.GetGrid"></a>

#### GetGrid()

* **Return type:**
  KAGrid
* **Returns:**
  The grid that “owns” the grid function.

<a id="generated.RAGridFunction.GetIsStatic"></a>

#### GetIsStatic()

* **Return type:**
  bool
* **Returns:**
  Returns whether this grid function is static.

<a id="generated.RAGridFunction.GetIsTransient"></a>

#### GetIsTransient()

* **Return type:**
  bool
* **Returns:**
  Returns whether this grid function is transient.

<a id="generated.RAGridFunction.GetLimits"></a>

#### GetLimits(unit=None, time_step='current')

* **Parameters:**
  * **unit** (*str*) – The unit in which the limits should be gotten
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with
    : ’current’ identifying the current time step
      ‘global’ identifying that the global limits should be gotten

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  list(float, float) or None
* **Returns:**
  Returns a tuple with the min and max value for the limits and None if the limit is
  not available for the current time.

<a id="generated.RAGridFunction.GetLocation"></a>

#### GetLocation()

* **Return type:**
  [‘cell’, ‘node’]
* **Returns:**
  Returns whether this grid function is a cell or node/vertex grid function.

<a id="generated.RAGridFunction.GetMax"></a>

#### GetMax(unit=None, time_step='current')

* **Parameters:**
  * **unit** (*str*) – The unit in which the value should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with
    : ’current’ identifying the current time step
      ‘global’ identifying that the global limits should be gotten

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float or None
* **Returns:**
  Returns a the max value or None if it’s not available for the current time.

<a id="generated.RAGridFunction.GetMin"></a>

#### GetMin(unit=None, time_step='current')

* **Parameters:**
  * **unit** (*str*) – The unit in which the value should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with
    : ’current’ identifying the current time step
      ‘global’ identifying that the global limits should be gotten

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float or None
* **Returns:**
  Returns a the min value or None if it’s not available for the current time.

<a id="generated.RAGridFunction.GetStandardDeviation"></a>

#### GetStandardDeviation(unit=None, time_step='current')

* **Parameters:**
  * **unit** (*str*) – The unit in which the value should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with ‘current’ identifying the current time step (note
    that ‘global’ is NOT accepted for this statistic).

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float or None
* **Returns:**
  Returns a the standard deviation of the grid function or None if it’s not available for
  the current time.

<a id="generated.RAGridFunction.GetSum"></a>

#### GetSum(unit=None, time_step='current')

* **Parameters:**
  * **unit** (*str*) – The unit in which the value should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with ‘current’ identifying the current time step (note
    that ‘global’ is NOT accepted for this statistic).

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float or None
* **Returns:**
  Returns a the sum of all values in the grid function or None if it’s not available for
  the current time.

<a id="generated.RAGridFunction.GetSumSquared"></a>

#### GetSumSquared(unit=None, time_step='current')

* **Parameters:**
  * **unit** (*str*) – The unit in which the value should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with ‘current’ identifying the current time step (note
    that ‘global’ is NOT accepted for this statistic).

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float or None
* **Returns:**
  Returns a the sum squared considering all values in the grid function or None if it’s
  not available for the current time.

<a id="generated.RAGridFunction.GetTimeStep"></a>

#### GetTimeStep(time_step, accept_global=False)

Get the timestep corresponding to the given time.

* **Parameters:**
  * **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – 

    Either a string with
    : ’current’ identifying the current time step
      ‘global’ identifying that the global limits should be gotten
      (note that if accept_global=False and ‘global’ is passed, an error is raised).

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
  * **accept_global** (*bool*) – If True, a global time step is accepted (and returns None), otherwise, an error is
    raised if ‘global’ is passed.
* **Return type:**
  ITimeStep
* **Returns:**
  Returns the time step to be used or None if accept_global == True and the time
  step passed is ‘global’.

<a id="generated.RAGridFunction.GetUnit"></a>

#### GetUnit()

* **Return type:**
  str
* **Returns:**
  Returns the default unit for the grid function.

<a id="generated.RAGridFunction.GetValue"></a>

#### GetValue(i, j=None, k=None, unit=None, time_step='current')

* **Parameters:**
  * **i** (*int*) – The topological I cell index or the grid cell handle
  * **j** (*int*) – The topological J cell index
  * **k** (*int*) – The topological K cell index
  * **unit** (*str*) – The unit in which the array should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with ‘current’ identifying the current time step

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float
* **Returns:**
  Returns the grid function value for the given cell

<a id="generated.RAGridFunction.GetVariance"></a>

#### GetVariance(unit=None, time_step='current')

* **Parameters:**
  * **unit** (*str*) – The unit in which the value should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with ‘current’ identifying the current time step (note
    that ‘global’ is NOT accepted for this statistic).

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float or None
* **Returns:**
  Returns a the variance of the grid function or None if it’s not available for the
  current time.

<a id="generated.RAGridFunction.Modified"></a>

#### Modified(\*args, \*\*kwargs)

Resets all the cache information after a change in the subject being tracked.

<a id="generated.RAGridFunction.SetCurrentTimeStep"></a>

#### SetCurrentTimeStep(time_step)

Sets the current time step.

* **Parameters:**
  **time_step** (*ITimeStep*) – The time step to be considered the ‘current’ time step.

<a id="generated.RAGridFunction.average"></a>

#### *property* average

* **Parameters:**
  * **unit** (*str*) – The unit in which the value should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with ‘current’ identifying the current time step (note
    that ‘global’ is NOT accepted for this statistic).

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float or None
* **Returns:**
  Returns a the average value for the grid function or None if it’s not available for the
  current time.

<a id="generated.RAGridFunction.is_static"></a>

#### *property* is_static

* **Return type:**
  bool
* **Returns:**
  Returns whether this grid function is static.

<a id="generated.RAGridFunction.is_transient"></a>

#### *property* is_transient

* **Return type:**
  bool
* **Returns:**
  Returns whether this grid function is transient.

<a id="generated.RAGridFunction.limits"></a>

#### *property* limits

* **Parameters:**
  * **unit** (*str*) – The unit in which the limits should be gotten
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with
    : ’current’ identifying the current time step
      ‘global’ identifying that the global limits should be gotten

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  list(float, float) or None
* **Returns:**
  Returns a tuple with the min and max value for the limits and None if the limit is
  not available for the current time.

<a id="generated.RAGridFunction.max"></a>

#### *property* max

* **Parameters:**
  * **unit** (*str*) – The unit in which the value should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with
    : ’current’ identifying the current time step
      ‘global’ identifying that the global limits should be gotten

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float or None
* **Returns:**
  Returns a the max value or None if it’s not available for the current time.

<a id="generated.RAGridFunction.min"></a>

#### *property* min

* **Parameters:**
  * **unit** (*str*) – The unit in which the value should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with
    : ’current’ identifying the current time step
      ‘global’ identifying that the global limits should be gotten

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float or None
* **Returns:**
  Returns a the min value or None if it’s not available for the current time.

<a id="generated.RAGridFunction.standard_deviation"></a>

#### *property* standard_deviation

* **Parameters:**
  * **unit** (*str*) – The unit in which the value should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with ‘current’ identifying the current time step (note
    that ‘global’ is NOT accepted for this statistic).

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float or None
* **Returns:**
  Returns a the standard deviation of the grid function or None if it’s not available for
  the current time.

<a id="generated.RAGridFunction.sum"></a>

#### *property* sum

* **Parameters:**
  * **unit** (*str*) – The unit in which the value should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with ‘current’ identifying the current time step (note
    that ‘global’ is NOT accepted for this statistic).

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float or None
* **Returns:**
  Returns a the sum of all values in the grid function or None if it’s not available for
  the current time.

<a id="generated.RAGridFunction.sum_squared"></a>

#### *property* sum_squared

* **Parameters:**
  * **unit** (*str*) – The unit in which the value should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with ‘current’ identifying the current time step (note
    that ‘global’ is NOT accepted for this statistic).

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float or None
* **Returns:**
  Returns a the sum squared considering all values in the grid function or None if it’s
  not available for the current time.

<a id="generated.RAGridFunction.unit"></a>

#### *property* unit

* **Return type:**
  str
* **Returns:**
  Returns the default unit for the grid function.

<a id="generated.RAGridFunction.variance"></a>

#### *property* variance

* **Parameters:**
  * **unit** (*str*) – The unit in which the value should be gotten (if not passed, the default unit is used).
  * **time_step** (*str* *,* *ITimeStep* *or* *int*) – 

    Either a string with ‘current’ identifying the current time step (note
    that ‘global’ is NOT accepted for this statistic).

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  float or None
* **Returns:**
  Returns a the variance of the grid function or None if it’s not available for the
  current time.
