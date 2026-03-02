

# RA3DWindow

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RA3DWindow"></a>

### *class* RA3DWindow

3D window API.

**Methods:**

| Name | Description |
|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ApplyGridFunctionToAll`](#generated.RA3DWindow.ApplyGridFunctionToAll)(grid_function_name)              | Change the coloring of all entities in this window to the specified grid function. :param grid_function_name:     The name of the grid function to be shown. It is possible to pass None to set back to solid color.   |
| [`CloseWindow`](#generated.RA3DWindow.CloseWindow)()                                                      | Removes this window from the application.                                                                                                                                                                              |
| [`CreateAnimationKeyFrame`](#generated.RA3DWindow.CreateAnimationKeyFrame)([number_of_frames])            | Creates an animation key frame based on the current camera in the 3d window.                                                                                                                                           |
| [`ExportAnimation`](#generated.RA3DWindow.ExportAnimation)(filename[, mode])                              |                                                                                                                                                                                                                        |
| [`GetActiveSimulation`](#generated.RA3DWindow.GetActiveSimulation)()                                      |                                                                                                                                                                                                                        |
| [`GetAnimationKeyFramesCount`](#generated.RA3DWindow.GetAnimationKeyFramesCount)()                        |                                                                                                                                                                                                                        |
| [`GetCamera`](#generated.RA3DWindow.GetCamera)()                                                          | Get the API wrapper for the 3D window's camera.                                                                                                                                                                        |
| [`GetSize`](#generated.RA3DWindow.GetSize)()                                                              |                                                                                                                                                                                                                        |
| [`Hide`](#generated.RA3DWindow.Hide)(name[, model_name])                                                  | Alias for SetVisible(False, name, model_name) .                                                                                                                                                                        |
| [`HideEdges`](#generated.RA3DWindow.HideEdges)([name, model_name])                                        | Alias for SetEdgesVisible(False, name, model_name) .                                                                                                                                                                   |
| [`HideNodes`](#generated.RA3DWindow.HideNodes)([name, model_name])                                        | Alias for SetNodesVisible(False, name, model_name) .                                                                                                                                                                   |
| [`RemoveAllAnimationKeyFrames`](#generated.RA3DWindow.RemoveAllAnimationKeyFrames)()                      | Removes all the currently created animation key frames in the current 3d window.                                                                                                                                       |
| [`Resize`](#generated.RA3DWindow.Resize)(width, height)                                                   | Resize the 3D window to the given width and height.                                                                                                                                                                    |
| [`SetActiveSimulation`](#generated.RA3DWindow.SetActiveSimulation)(simulation_name)                       | Changes the simulation being shown in the current 3D window                                                                                                                                                            |
| [`SetAnimationCameraInterpolation`](#generated.RA3DWindow.SetAnimationCameraInterpolation)(interpolation) |                                                                                                                                                                                                                        |
| [`SetAnimationFPS`](#generated.RA3DWindow.SetAnimationFPS)(fps)                                           | Sets the FPS (frames per second) to be used for the animation.                                                                                                                                                         |
| [`SetBackgroundColor`](#generated.RA3DWindow.SetBackgroundColor)(color)                                   |                                                                                                                                                                                                                        |
| [`SetCameraPreset`](#generated.RA3DWindow.SetCameraPreset)([preset])                                      | Set the camera to one of the existing presets.                                                                                                                                                                         |
| [`SetEdgesVisible`](#generated.RA3DWindow.SetEdgesVisible)(visible[, name, model_name])                   | Makes the edges visible or invisible in this window (changes either the global settings for this window or the the passed grid, if the grid is not using the global settings).                                         |
| [`SetForegroundColor`](#generated.RA3DWindow.SetForegroundColor)(color)                                   |                                                                                                                                                                                                                        |
| [`SetNodesVisible`](#generated.RA3DWindow.SetNodesVisible)(visible[, name, model_name])                   | Makes the nodes visible or invisible in this window (changes either the global settings for this window or the the passed grid, if the grid is not using the global settings).                                         |
| [`SetSelectedWindow`](#generated.RA3DWindow.SetSelectedWindow)([window_name])                             | Sets the given window as the currently selected window.                                                                                                                                                                |
| [`SetTransparency`](#generated.RA3DWindow.SetTransparency)(transparency[, name, ...])                     | Sets the transparency for the given grid.                                                                                                                                                                              |
| [`SetVisible`](#generated.RA3DWindow.SetVisible)(visible, name[, model_name])                             | Makes a given element visible or invisible within this window.                                                                                                                                                         |
| [`Show`](#generated.RA3DWindow.Show)(name[, model_name])                                                  | Alias for SetVisible(True, name, model_name) .                                                                                                                                                                         |
| [`ShowEdges`](#generated.RA3DWindow.ShowEdges)([name, model_name])                                        | Alias for SetEdgesVisible(True, name, model_name) .                                                                                                                                                                    |
| [`ShowGeometryGridFunction`](#generated.RA3DWindow.ShowGeometryGridFunction)(grid_function_name)          | Change the coloring of all geometries in this window to the specified grid function. :param grid_function_name:     The name of the grid function to be shown. It is possible to pass None to set back to solid color. |
| [`ShowGridFunction`](#generated.RA3DWindow.ShowGridFunction)(\*\*kwargs)                                  |                                                                                                                                                                                                                        |
| [`ShowMaximized`](#generated.RA3DWindow.ShowMaximized)()                                                  | Maximize the window, making it fill the entire screen space.                                                                                                                                                           |
| [`ShowMinimized`](#generated.RA3DWindow.ShowMinimized)()                                                  | Minimize the window, effectively hiding it from view and placing it in the taskbar                                                                                                                                     |
| [`ShowModel`](#generated.RA3DWindow.ShowModel)([model_name])                                              | This function will activate the passed model.                                                                                                                                                                          |
| [`ShowNodes`](#generated.RA3DWindow.ShowNodes)([name, model_name])                                        | Alias for SetNodesVisible(True, name, model_name) .                                                                                                                                                                    |
| [`ShowNormal`](#generated.RA3DWindow.ShowNormal)()                                                        | Restore the window to its normal size, which is neither minimized nor maximized.                                                                                                                                       |
| [`ShowParticleGridFunction`](#generated.RA3DWindow.ShowParticleGridFunction)(grid_function_name)          | Change the particle coloring to the specified grid function. :param grid_function_name:     The name of the grid function to be shown. It is possible to pass None to set back to solid color.                         |
| [`ShowSphGridFunction`](#generated.RA3DWindow.ShowSphGridFunction)(grid_function_name)                    | Change the SPH coloring to the specified grid function. :param grid_function_name:     The name of the grid function to be shown. It is possible to pass None to set back to solid color.                              |
| [`Snapshot`](#generated.RA3DWindow.Snapshot)(filename[, width, height, ...])                              | Take a snapshot from the window content and save it in the filename given.                                                                                                                                             |

**Attributes:**

| Name |
| -------------------------------------- |
| [`app`](#generated.RA3DWindow.app) |

<a id="generated.RA3DWindow.ApplyGridFunctionToAll"></a>

#### ApplyGridFunctionToAll(grid_function_name: str | None)

Change the coloring of all entities in this window to the specified grid function.
:param grid_function_name:

> The name of the grid function to be shown.
> It is possible to pass None to set back to solid color.

<a id="generated.RA3DWindow.CloseWindow"></a>

#### CloseWindow()

Removes this window from the application.

<a id="generated.RA3DWindow.CreateAnimationKeyFrame"></a>

#### CreateAnimationKeyFrame(number_of_frames=None)

Creates an animation key frame based on the current camera in the 3d window.

<a id="generated.RA3DWindow.ExportAnimation"></a>

#### ExportAnimation(filename, mode='video')

* **Parameters:**
  * **filename** (*str*) – The file to which the animation should be exported. If a video, the file
    will be the actual path passed, if exporting as images will
  * **mode** (*str*) – Whether the animation should be exported as a video or as images.
    Accepted values: ‘video’, ‘images’.

<a id="generated.RA3DWindow.GetActiveSimulation"></a>

#### GetActiveSimulation()

* **Return type:**
  unicode
* **Returns:**
  The name of the simulation being shown

<a id="generated.RA3DWindow.GetAnimationKeyFramesCount"></a>

#### GetAnimationKeyFramesCount()

* **Return int:**
  Returns the number of key frames created for the given 3d window.

<a id="generated.RA3DWindow.GetCamera"></a>

#### GetCamera()

Get the API wrapper for the 3D window’s camera.

* **Return type:**
  KACamera

<a id="generated.RA3DWindow.GetSize"></a>

#### GetSize()

* **Return type:**
  tuple(int, int)
* **Returns:**
  Returns the client window dimension (width, height)

<a id="generated.RA3DWindow.Hide"></a>

#### Hide(name, model_name=None)

Alias for SetVisible(False, name, model_name)
.. seealso:: SetVisible

<a id="generated.RA3DWindow.HideEdges"></a>

#### HideEdges(name=None, model_name=None)

Alias for SetEdgesVisible(False, name, model_name)
.. seealso:: SetEdgesVisible

<a id="generated.RA3DWindow.HideNodes"></a>

#### HideNodes(name=None, model_name=None)

Alias for SetNodesVisible(False, name, model_name)
.. seealso:: SetNodesVisible

<a id="generated.RA3DWindow.RemoveAllAnimationKeyFrames"></a>

#### RemoveAllAnimationKeyFrames()

Removes all the currently created animation key frames in the current 3d window.

<a id="generated.RA3DWindow.Resize"></a>

#### Resize(width, height)

Resize the 3D window to the given width and height.

<a id="generated.RA3DWindow.SetActiveSimulation"></a>

#### SetActiveSimulation(simulation_name)

Changes the simulation being shown in the current 3D window

* **Parameters:**
  **simulation_name** (*unicode*) – The name of the simulation

<a id="generated.RA3DWindow.SetAnimationCameraInterpolation"></a>

#### SetAnimationCameraInterpolation(interpolation)

* **Parameters:**
  **interpolation** (*str*) – 

  The interpolation method to be used to interpolate camera parameters.

  Valid values are:
  : ’linear’
    ‘spline’
    ‘no-interpolation’

<a id="generated.RA3DWindow.SetAnimationFPS"></a>

#### SetAnimationFPS(fps)

Sets the FPS (frames per second) to be used for the animation.

Note that the time for the animation is based on the total number of frames and the FPS, so,
if there are 10 frames with an FPS of 2, the total time for the animation will be 5 seconds
as each second will have 2 frames.

* **Parameters:**
  **fps** (*int*) – The fps to be used for the animation.

<a id="generated.RA3DWindow.SetBackgroundColor"></a>

#### SetBackgroundColor(color)

* **Parameters:**
  **color** (*tuple* *(**int* *,* *int* *,* *int* *)* *,* *tuple* *(**float* *,* *float* *,* *float* *)* *,* *unicode* *,* *int*) – The color to be used as a background.
  Either a tuple with values 0..255, or a tuple with values 0..1, the name of the color
  or the RGB value as an integer.

<a id="generated.RA3DWindow.SetCameraPreset"></a>

#### SetCameraPreset(preset='+X')

Set the camera to one of the existing presets.

* **Parameters:**
  **preset** (*unicode*) – 

  The preset to be set.
  The valid presets are:
  > - ’+X’
  > - ’-X’
  > - ’+X 30’
  > - ’+Y’
  > - ’-Y’
  > - ’+Y 30’
  > - ’+Z’
  > - ’-Z’

<a id="generated.RA3DWindow.SetEdgesVisible"></a>

#### SetEdgesVisible(visible, name=None, model_name=None)

Makes the edges visible or invisible in this window (changes either the global settings
for this window or the the passed grid, if the grid is not using the global settings).

* **Parameters:**
  * **visible** (*bool*) – Whether the edges should be made visible or invisible.
  * **name** (*unicode*) – The name of the grid which should have the edges made visible or invisible. If not
    passed, changes the configuration of the global window settings.
  * **model_name** (*unicode*) – The name of the model which has the grid which should have the edges made visible or
    invisible.

<a id="generated.RA3DWindow.SetForegroundColor"></a>

#### SetForegroundColor(color)

* **Parameters:**
  **color** (*tuple* *(**int* *,* *int* *,* *int* *)* *,* *tuple* *(**float* *,* *float* *,* *float* *)* *,* *unicode* *,* *int*) – The color to be used as a foreground.
  Either a tuple with values 0..255, or a tuple with values 0..1, the name of the color
  or the RGB value as an integer.

<a id="generated.RA3DWindow.SetNodesVisible"></a>

#### SetNodesVisible(visible, name=None, model_name=None)

Makes the nodes visible or invisible in this window (changes either the global settings
for this window or the the passed grid, if the grid is not using the global settings).

* **Parameters:**
  * **visible** (*bool*) – Whether the nodes should be made visible or invisible.
  * **name** (*unicode*) – The name of the grid which should have the nodes made visible or invisible. If not
    passed, changes the configuration of the global window settings.
  * **model_name** (*unicode*) – The name of the model which has the grid which should have the nodes made visible or
    invisible.

<a id="generated.RA3DWindow.SetSelectedWindow"></a>

#### SetSelectedWindow(window_name=None)

Sets the given window as the currently selected window.

* **Parameters:**
  **window_name** (*unicode*) – The name of the window that should be selected (if not passed, the window which has
  this method called is selected).

<a id="generated.RA3DWindow.SetTransparency"></a>

#### SetTransparency(transparency, name=None, model_name=None, enable_transparency=True)

Sets the transparency for the given grid.

* **Parameters:**
  * **transparency** (*int*) – A number between 0 and 100, where 0 is completely transparent and 100 is completely
    opaque.
  * **name** (*unicode*) – The name of the grid which should have the transparency changed.
  * **model_name** (*unicode*) – The name of the model which has the grid which should have the nodes made visible or
    invisible.
  * **enable_transparency** (*bool*) – Whether the transparency set should be used or not in the given grid.

<a id="generated.RA3DWindow.SetVisible"></a>

#### SetVisible(visible, name, model_name=None)

Makes a given element visible or invisible within this window.

* **Parameters:**
  * **visible** (*bool*) – Whether the element should be made visible or invisible.
  * **name** (*unicode*) – The name of the element to be made visible or invisible.
  * **model_name** (*unicode*) – The model where the element is contained (if not passed, the current model is used).

<a id="generated.RA3DWindow.Show"></a>

#### Show(name, model_name=None)

Alias for SetVisible(True, name, model_name)
.. seealso:: SetVisible

<a id="generated.RA3DWindow.ShowEdges"></a>

#### ShowEdges(name=None, model_name=None)

Alias for SetEdgesVisible(True, name, model_name)
.. seealso:: SetEdgesVisible

<a id="generated.RA3DWindow.ShowGeometryGridFunction"></a>

#### ShowGeometryGridFunction(grid_function_name: str | None)

Change the coloring of all geometries in this window to the specified grid function.
:param grid_function_name:

> The name of the grid function to be shown.
> It is possible to pass None to set back to solid color.

<a id="generated.RA3DWindow.ShowGridFunction"></a>

#### ShowGridFunction(\*\*kwargs: object)

* **Parameters:**
  **grid_function_name** – The grid_function_name of the grid function to be shown.

<a id="generated.RA3DWindow.ShowMaximized"></a>

#### ShowMaximized()

Maximize the window, making it fill the entire screen space.

<a id="generated.RA3DWindow.ShowMinimized"></a>

#### ShowMinimized()

Minimize the window, effectively hiding it from view and placing it in the taskbar

<a id="generated.RA3DWindow.ShowModel"></a>

#### ShowModel(model_name=None)

This function will activate the passed model.

* **Parameters:**
  **model_name** (*unicode*) – The name of the model that should be activated.

<a id="generated.RA3DWindow.ShowNodes"></a>

#### ShowNodes(name=None, model_name=None)

Alias for SetNodesVisible(True, name, model_name)
.. seealso:: SetNodesVisible

<a id="generated.RA3DWindow.ShowNormal"></a>

#### ShowNormal()

Restore the window to its normal size, which is neither minimized nor maximized.

<a id="generated.RA3DWindow.ShowParticleGridFunction"></a>

#### ShowParticleGridFunction(grid_function_name: str | None)

Change the particle coloring to the specified grid function.
:param grid_function_name:

> The name of the grid function to be shown.
> It is possible to pass None to set back to solid color.

<a id="generated.RA3DWindow.ShowSphGridFunction"></a>

#### ShowSphGridFunction(grid_function_name: str | None)

Change the SPH coloring to the specified grid function.
:param grid_function_name:

> The name of the grid function to be shown.
> It is possible to pass None to set back to solid color.

<a id="generated.RA3DWindow.Snapshot"></a>

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

<a id="generated.RA3DWindow.app"></a>

#### *property* app

* **Return type:**
  KAApplication
* **Returns:**
  The application
