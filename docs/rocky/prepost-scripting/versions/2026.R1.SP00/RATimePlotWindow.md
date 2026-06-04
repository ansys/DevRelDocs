

# RATimePlotWindow

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RATimePlotWindow"></a>

### *class* RATimePlotWindow

**Methods:**

| Name | Description |
|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [`ClearCurves`](#generated.RATimePlotWindow.ClearCurves)()                                                   | Remove all curve from the window                                                                                         |
| [`CloseWindow`](#generated.RATimePlotWindow.CloseWindow)()                                                   | Removes this window from the application.                                                                                |
| [`CreateMark`](#generated.RATimePlotWindow.CreateMark)([image_property, statistic_name, ...])                | Creates a mark in the plot window with the given parameters.                                                             |
| [`CreateTimeMark`](#generated.RATimePlotWindow.CreateTimeMark)(time_step[, message])                         | Creates a mark in the given time with the given message.                                                                 |
| [`ExportCurves`](#generated.RATimePlotWindow.ExportCurves)(filename[, curve_names, ...])                     | Export a set of curves to a CSV file.                                                                                    |
| [`GetAxisLimits`](#generated.RATimePlotWindow.GetAxisLimits)(curve_name[, unit])                             | Return the minimum and maximum values on the axis associated with the given curve name                                   |
| [`GetAxisUnit`](#generated.RATimePlotWindow.GetAxisUnit)(curve_name)                                         | Get the unit for the axis associated with the given curve                                                                |
| [`GetCurvesDescription`](#generated.RATimePlotWindow.GetCurvesDescription)()                                 |                                                                                                                          |
| [`GetTable`](#generated.RATimePlotWindow.GetTable)()                                                         |                                                                                                                          |
| [`GetTimeStep`](#generated.RATimePlotWindow.GetTimeStep)(time_step[, accept_global])                         | Get the timestep corresponding to the given time.                                                                        |
| [`GetTitle`](#generated.RATimePlotWindow.GetTitle)()                                                         |                                                                                                                          |
| [`InvalidateWindow`](#generated.RATimePlotWindow.InvalidateWindow)()                                         | Invalidates the window and request a redraw.                                                                             |
| [`Resize`](#generated.RATimePlotWindow.Resize)(width, height)                                                | Changes the size of the plot.                                                                                            |
| [`SetAxisByProperty`](#generated.RATimePlotWindow.SetAxisByProperty)()                                       | Change the axis behavior so all curves of the same property will share the same axis.                                    |
| [`SetAxisByQuantity`](#generated.RATimePlotWindow.SetAxisByQuantity)()                                       | Change the axis behavior so all curves with the same quantity will share the same axis.                                  |
| [`SetAxisLimits`](#generated.RATimePlotWindow.SetAxisLimits)(curve_name, min_value, max_value)               | Change the limits for axis associated to the given curve_name                                                            |
| [`SetAxisUnit`](#generated.RATimePlotWindow.SetAxisUnit)(curve_name, unit)                                   | Change the unit for the axis associated with the given curve                                                             |
| [`SetBottomAxisUnit`](#generated.RATimePlotWindow.SetBottomAxisUnit)(unit)                                   | Change the unit of the bottom X axis                                                                                     |
| [`SetColoringStrategyByElement`](#generated.RATimePlotWindow.SetColoringStrategyByElement)()                 | Change the visual of the curves so all curves associated with an element will share the same visual appearance.          |
| [`SetColoringStrategyByProperty`](#generated.RATimePlotWindow.SetColoringStrategyByProperty)()               | Change the visual of the curves so all curves associated from the same simulation will share the same visual appearance. |
| [`SetColoringStrategyByStudy`](#generated.RATimePlotWindow.SetColoringStrategyByStudy)()                     | Change the visual of the curves so all curves associated from the same simulation will share the same visual appearance. |
| [`SetCurrentTimeStep`](#generated.RATimePlotWindow.SetCurrentTimeStep)(time_step)                            | Sets the current time step.                                                                                              |
| [`SetSelectedWindow`](#generated.RATimePlotWindow.SetSelectedWindow)([window_name])                          | Sets the given window as the currently selected window.                                                                  |
| [`SetStickEnabled`](#generated.RATimePlotWindow.SetStickEnabled)([enabled])                                  |                                                                                                                          |
| [`ShowCurve`](#generated.RATimePlotWindow.ShowCurve)(element_name, curve_name[, unit, ...])                  | Shows a curve in a Time-plot window.                                                                                     |
| [`ShowGridFunctionStatisticsCurve`](#generated.RATimePlotWindow.ShowGridFunctionStatisticsCurve)(...[, ...]) | Shows a grid function statistics curve in a Time-plot window.                                                            |
| [`ShowMaximized`](#generated.RATimePlotWindow.ShowMaximized)()                                               | Maximize the window, making it fill the entire screen space.                                                             |
| [`ShowMinimized`](#generated.RATimePlotWindow.ShowMinimized)()                                               | Minimize the window, effectively hiding it from view and placing it in the taskbar                                       |
| [`ShowNormal`](#generated.RATimePlotWindow.ShowNormal)()                                                     | Restore the window to its normal size, which is neither minimized nor maximized.                                         |
| [`Snapshot`](#generated.RATimePlotWindow.Snapshot)(filename[, width, height, ...])                           | Take a snapshot from the window content and save it in the filename given.                                               |

**Attributes:**

| Name |
| -------------------------------------------- |
| [`app`](#generated.RATimePlotWindow.app) |

<a id="generated.RATimePlotWindow.ClearCurves"></a>

#### ClearCurves()

Remove all curve from the window

<a id="generated.RATimePlotWindow.CloseWindow"></a>

#### CloseWindow()

Removes this window from the application.

<a id="generated.RATimePlotWindow.CreateMark"></a>

#### CreateMark(image_property: str | None = None, statistic_name: str | None = None, image_value: float | None = None, image_unit: str | None = None, domain_value: float | None = None, domain_unit: str | None = None, message: str = '')

Creates a mark in the plot window with the given parameters.

* **Parameters:**
  * **image_property** – The name of the property curve image to be used for the mark.
  * **statistic_name** – The name of the statistic to be used for the image property. Possible values are:
    ‘average’, ‘min’, ‘max’, ‘sum’, ‘sum squared’, ‘variance’, ‘std deviation’, and ‘cell’.
  * **image_value** – The value of the image property to be used for the mark.
  * **image_unit** – The unit of the image value (if not specified, the unit of the curve will be used).
  * **domain_value** – The value of the domain to be used for the mark.
  * **domain_unit** – The unit of the domain value (if not specified, the unit of the bottom axis will be used).
  * **message** – The label of the mark.
* **Returns:**
  A KAPlotMark object representing the created mark.

<a id="generated.RATimePlotWindow.CreateTimeMark"></a>

#### CreateTimeMark(time_step, message=None)

Creates a mark in the given time with the given message.

* **Parameters:**
  * **time_step** (*unicode* *,* *ITimeStep* *,* *int* *or* *tuple*) – 

    Either a string with
    : ’current’ identifying the current time step

    or an ITimeStep identifying the time to get the limits.

    or an int identifying the time step index to be used based on the global time set .

    or a tuple containing the values for the year, month, day, hour. minute and second.
    : (e.g (2009, 10, 01) maps to Oct 01, 2009, and (2009, 10, 01, 23, 12, 01) maps to the
      same day but it also specifies the hour (23:12:01).
  * **message** (*unicode*) – The mark label

<a id="generated.RATimePlotWindow.ExportCurves"></a>

#### ExportCurves(filename, curve_names=None, merge_domain=[], interpolate_values=False)

Export a set of curves to a CSV file.

* **Parameters:**
  * **filename** (*str*) – The name of the csv file to be generated.
  * **curve_names** (*list* *of* *str* *or* *None*) – The names of the curves to export. If None is passed, all curves in the plot will be exported.
  * **merge_domain** (*list* *of* *str*) – Defines the name of the curves whose domain should be taken into account on making the
    merge.
  * **interpolate_values** (*bool*) – True if the curves’ values should be interpolated.

<a id="generated.RATimePlotWindow.GetAxisLimits"></a>

#### GetAxisLimits(curve_name, unit=None)

Return the minimum and maximum values on the axis associated with the given curve name

* **Parameters:**
  * **curve_name** (*unicode*) – The name of the curve
  * **unit** (*unicode*) – The unit in which the values should be returned
    (if not specified no conversion is made).
* **Return type:**
  tuple(float, float)
* **Returns:**
  The min and max values

<a id="generated.RATimePlotWindow.GetAxisUnit"></a>

#### GetAxisUnit(curve_name)

Get the unit for the axis associated with the given curve

* **Parameters:**
  **curve_name** (*unicode*) – The name of the curve
* **Return type:**
  unicode
* **Returns:**
  The unit of the axis

<a id="generated.RATimePlotWindow.GetCurvesDescription"></a>

#### GetCurvesDescription()

* **Return type:**
  list(tuple(unicode, unicode, unicode))
* **Returns:**
  Returns a list of description for each in the plot.
  Each curve is described by the property name, element name and simulation name

<a id="generated.RATimePlotWindow.GetTable"></a>

#### GetTable()

* **Return type:**
  KATable
* **Returns:**
  The table representation of the plot window

<a id="generated.RATimePlotWindow.GetTimeStep"></a>

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

<a id="generated.RATimePlotWindow.GetTitle"></a>

#### GetTitle()

* **Return type:**
  unicode
* **Returns:**
  The plot window title

<a id="generated.RATimePlotWindow.InvalidateWindow"></a>

#### InvalidateWindow()

Invalidates the window and request a redraw.

<a id="generated.RATimePlotWindow.Resize"></a>

#### Resize(width, height)

Changes the size of the plot.

* **Parameters:**
  * **width** (*int*) – The width to be set for the plot.
  * **height** (*int*) – The height to be set for the plot.

<a id="generated.RATimePlotWindow.SetAxisByProperty"></a>

#### SetAxisByProperty()

Change the axis behavior so all curves of the same property will share the same axis.

<a id="generated.RATimePlotWindow.SetAxisByQuantity"></a>

#### SetAxisByQuantity()

Change the axis behavior so all curves with the same quantity will share the same axis.

<a id="generated.RATimePlotWindow.SetAxisLimits"></a>

#### SetAxisLimits(curve_name, min_value, max_value, unit=None)

Change the limits for axis associated to the given curve_name

* **Parameters:**
  * **curve_name** (*unicode*) – The name of the curve to select the axis
  * **min_value** (*float*) – The minimum value
  * **max_value** (*float*) – The maximum value
  * **unit** (*unicode*) – The unit in which the min and max are given
    (if not specified no conversion is made).
* **Return type:**
  bool
* **Returns:**
  Whether it was possible to set the axis limits

<a id="generated.RATimePlotWindow.SetAxisUnit"></a>

#### SetAxisUnit(curve_name, unit)

Change the unit for the axis associated with the given curve

* **Parameters:**
  * **curve_name** (*unicode*) – The name of the curve
  * **unit** (*unit*) – The unit to be set

<a id="generated.RATimePlotWindow.SetBottomAxisUnit"></a>

#### SetBottomAxisUnit(unit)

Change the unit of the bottom X axis

* **Parameters:**
  **unit** (*unicode*) – The new axis unit

<a id="generated.RATimePlotWindow.SetColoringStrategyByElement"></a>

#### SetColoringStrategyByElement()

Change the visual of the curves so all curves associated with an element will share the
same visual appearance.

<a id="generated.RATimePlotWindow.SetColoringStrategyByProperty"></a>

#### SetColoringStrategyByProperty()

Change the visual of the curves so all curves associated from the same simulation
will share the same visual appearance.

<a id="generated.RATimePlotWindow.SetColoringStrategyByStudy"></a>

#### SetColoringStrategyByStudy()

Change the visual of the curves so all curves associated from the same simulation
will share the same visual appearance.

<a id="generated.RATimePlotWindow.SetCurrentTimeStep"></a>

#### SetCurrentTimeStep(time_step)

Sets the current time step.

* **Parameters:**
  **time_step** (*ITimeStep*) – The time step to be considered the ‘current’ time step.

<a id="generated.RATimePlotWindow.SetSelectedWindow"></a>

#### SetSelectedWindow(window_name=None)

Sets the given window as the currently selected window.

* **Parameters:**
  **window_name** (*unicode*) – The name of the window that should be selected (if not passed, the window which has
  this method called is selected).

<a id="generated.RATimePlotWindow.SetStickEnabled"></a>

#### SetStickEnabled(enabled=True)

* **Parameters:**
  **bool_enabled**

<a id="generated.RATimePlotWindow.ShowCurve"></a>

#### ShowCurve(element_name, curve_name, unit=None, window_name=None)

Shows a curve in a Time-plot window.

* **Parameters:**
  * **element_name** (*unicode*) – The name of the element that has the curve.
  * **curve_name** (*unicode*) – The name of the curve to be shown.
  * **unit** (*unicode*) – The unit in which the curve should be shown (if not specified, given by the simulator).
  * **window_name** (*unicode*) – The name of the window in which the curve should be shown (if not given, the current
    window will be used)
* **Return type:**
  bool
* **Returns:**
  Return True if a curve was actually shown and False otherwise (i.e.: window could not
  be found, element not available).

<a id="generated.RATimePlotWindow.ShowGridFunctionStatisticsCurve"></a>

#### ShowGridFunctionStatisticsCurve(element_name, grid_function_name, statistic_name='average', unit=None, window_name=None)

Shows a grid function statistics curve in a Time-plot window.

* **Parameters:**
  * **element_name** (*unicode*) – The name of the element that has the curve.
  * **grid_function_name** (*unicode*) – The name of the Grid Function to be shown.
  * **statistic_name** (*unicode*) – The name of the Statistic to use. Possible values are:
    ‘Average’, ‘Min’, ‘Max’, ‘Sum’, ‘Sum Squared’, ‘Variance’, ‘STD Deviation’, and ‘Cell’
  * **unit** (*unicode*) – The unit in which the curve should be shown (if not specified, given by the simulator).
  * **window_name** (*unicode*) – The name of the window in which the curve should be shown (if not given, the current
    window will be used)
* **Return bool:**
  Return True if a curve was actually shown and False otherwise (i.e.: window could not
  be found, element not available).

<a id="generated.RATimePlotWindow.ShowMaximized"></a>

#### ShowMaximized()

Maximize the window, making it fill the entire screen space.

<a id="generated.RATimePlotWindow.ShowMinimized"></a>

#### ShowMinimized()

Minimize the window, effectively hiding it from view and placing it in the taskbar

<a id="generated.RATimePlotWindow.ShowNormal"></a>

#### ShowNormal()

Restore the window to its normal size, which is neither minimized nor maximized.

<a id="generated.RATimePlotWindow.Snapshot"></a>

#### Snapshot(filename, width=None, height=None, magnification=None, keep_aspect_ratio=None)

Take a snapshot from the window content and save it in the filename given.

* **Parameters:**
  * **filename** (*unicode*) – The file name to save the snapshot.
    .. note:: the filename must contain the extension. e.g.: ‘../snapshot.png’
  * **width** (*int*) – The snapshot width (only used for plots, not 3d windows).
    .. note:: the current window width is used if it is None
  * **height** (*int*) – The snapshot height (only used for plots, not 3d windows).
    .. note:: the current window height is used if it is None
  * **magnification** (*int*) – An int value to multiply the snapshot size.
    .. note:: if this parameter is specified, the width and height parameters are ignored.
  * **keep_aspect_ratio** (*bool*) – Only used for plots, not 3d windows.
    If True the current plot size is scaled to a rectangle as large as possible inside a
    given rectangle (defined by the size given), keeping the aspect ratio.

<a id="generated.RATimePlotWindow.app"></a>

#### *property* app

* **Return type:**
  KAApplication
* **Returns:**
  The application
