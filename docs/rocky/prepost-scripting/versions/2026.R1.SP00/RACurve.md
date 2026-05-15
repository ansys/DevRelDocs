

# RACurve

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RACurve"></a>

### *class* RACurve

**Methods:**

| Name | Description |
|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`CrossFromAbove`](#generated.RACurve.CrossFromAbove)(threshold[, result])   | Returns the domain values where *y* crosses some threshold from above X's where.     |
| [`CrossFromBellow`](#generated.RACurve.CrossFromBellow)(threshold[, result]) | Returns the domain values where *y* crosses some threshold from bellow X's where.    |
| [`GetStatistics`](#generated.RACurve.GetStatistics)()                        | @return: IStatistics                                                                 |
| [`GetTimeSet`](#generated.RACurve.GetTimeSet)()                              | @return: ITimeSet                                                                    |
| [`GetUnit`](#generated.RACurve.GetUnit)()                                    | @return: unicode                                                                     |
| [`GetX`](#generated.RACurve.GetX)()                                          | @return: list(float) or ITimeSet)                                                    |
| [`GetXUnit`](#generated.RACurve.GetXUnit)()                                  | @return: unicode                                                                     |
| [`GetY`](#generated.RACurve.GetY)()                                          | @return: list(float or ITimeStep)                                                    |
| [`Interpolate`](#generated.RACurve.Interpolate)(x_value)                     | Returns the piecewise linear interpolation with given value at discrete data-points. |
| [`Reset`](#generated.RACurve.Reset)()                                        | Reset all changes to its default values                                              |
| [`SetFrequency`](#generated.RACurve.SetFrequency)(days[, extend])            | Change the domain frequency                                                          |
| [`SetUnit`](#generated.RACurve.SetUnit)(unit)                                | Change the unit of the curve image values (y)                                        |
| [`SetXUnit`](#generated.RACurve.SetXUnit)(unit)                              | Change the unit of the curve image values (y)                                        |

**Attributes:**

| Name | Description |
|---------------------------------------------------------|-----------------------------------|
| [`curve_name`](#generated.RACurve.curve_name)           | @return: unicode                  |
| [`element_name`](#generated.RACurve.element_name)       | @return: unicode                  |
| [`simulation_name`](#generated.RACurve.simulation_name) | @return: unicode                  |
| [`unit`](#generated.RACurve.unit)                       | @return: unicode                  |
| [`x`](#generated.RACurve.x)                             | @return: list(float) or ITimeSet) |
| [`x_unit`](#generated.RACurve.x_unit)                   | @return: unicode                  |
| [`y`](#generated.RACurve.y)                             | @return: list(float or ITimeStep) |

<a id="generated.RACurve.CrossFromAbove"></a>

#### CrossFromAbove(threshold, result=None)

Returns the domain values where *y* crosses some threshold from above
X’s where:

```default
y[i-1]>threshold and y[i]<=threshold
```

@param threshold: float
: The threshold value in the image

@param result: ‘left’, ‘right’ or ‘interp’
: Which result should be returned
  ‘left’ will return the x value on the left side of the interval
  ‘right’ will return the x value on the right side of the interval
  ‘interp’ will return the x value of the linear interpolation of the interval

@note: If no result type is given an interpolation will be used

@return: list(float or TimeStep)
: A list of the domain values

<a id="generated.RACurve.CrossFromBellow"></a>

#### CrossFromBellow(threshold, result=None)

Returns the domain values where *y* crosses some threshold from bellow
X’s where:

```default
y[i-1]<threshold and y[i]>=threshold
```

@param threshold: float
: The threshold value in the image

@param result: ‘left’, ‘right’ or ‘interp’
: Which result should be returned
  ‘left’ will return the x value on the left side of the interval
  ‘right’ will return the x value on the right side of the interval
  ‘interp’ will return the x value of the linear interpolation of the interval

@note: If no result type is given an interpolation will be used

@return: list(float or TimeStep)
: A list of the domain values

<a id="generated.RACurve.GetStatistics"></a>

#### GetStatistics()

@return: IStatistics
: An object will the curve statistics information.

@note: Usage
: #Minimum value
  statistics.min
  <br/>
  #Maximum value
  statistics.max
  <br/>
  #Sum of all the values
  statistics.sum
  <br/>
  #Sum squared of all the values
  statistics.sum_squared
  <br/>
  #Average of the values
  statistics.average
  <br/>
  #Variance of the values
  statistics.variance
  <br/>
  #Standard deviation of the values
  statistics.standard_deviation

<a id="generated.RACurve.GetTimeSet"></a>

#### GetTimeSet()

@return: ITimeSet
: The time set domain

<a id="generated.RACurve.GetUnit"></a>

#### GetUnit()

@return: unicode
: The unit of the curve image values (y)

<a id="generated.RACurve.GetX"></a>

#### GetX()

@return: list(float) or ITimeSet)
: The list of values associated with the domain
  If a different unit is defined a conversion will take place

<a id="generated.RACurve.GetXUnit"></a>

#### GetXUnit()

@return: unicode
: The unit of the curve image values (y)

<a id="generated.RACurve.GetY"></a>

#### GetY()

@return: list(float or ITimeStep)
: The list of values associated with the domain
  If a different unit is defined a conversion will take place

<a id="generated.RACurve.Interpolate"></a>

#### Interpolate(x_value)

Returns the piecewise linear interpolation with given value at discrete data-points.

@param x_value: float, tuple or TimeStep
: A float defining the elapsed time-step in days
  A tuple with the year, month, day and optionally the hour and minutes
  Or a TimeStep

<a id="generated.RACurve.Reset"></a>

#### Reset()

Reset all changes to its default values

<a id="generated.RACurve.SetFrequency"></a>

#### SetFrequency(days, extend=None)

Change the domain frequency

@param days: float
: The frequency in days

@param extend: bool, optional
: If a last value should be included even if outisde the domain

<a id="generated.RACurve.SetUnit"></a>

#### SetUnit(unit)

Change the unit of the curve image values (y)

@param unit: unicode
: The unit to be set

<a id="generated.RACurve.SetXUnit"></a>

#### SetXUnit(unit)

Change the unit of the curve image values (y)

@param unit: unicode
: The unit to be set

<a id="generated.RACurve.curve_name"></a>

#### *property* curve_name

@return: unicode
: The name of the element associated to this curve

<a id="generated.RACurve.element_name"></a>

#### *property* element_name

@return: unicode
: The name of the element associated to this curve

<a id="generated.RACurve.simulation_name"></a>

#### *property* simulation_name

@return: unicode
: The name of the element associated to this curve

<a id="generated.RACurve.unit"></a>

#### *property* unit

@return: unicode
: The unit of the curve image values (y)

<a id="generated.RACurve.x"></a>

#### *property* x

@return: list(float) or ITimeSet)
: The list of values associated with the domain
  If a different unit is defined a conversion will take place

<a id="generated.RACurve.x_unit"></a>

#### *property* x_unit

@return: unicode
: The unit of the curve image values (y)

<a id="generated.RACurve.y"></a>

#### *property* y

@return: list(float or ITimeStep)
: The list of values associated with the domain
  If a different unit is defined a conversion will take place
