# Scene Classes

## [`Scene`](#compolyx.Scene)

### *class* compolyx.Scene(graph, model=None, name='', id=None, title='', view=None, parent=None, active_set=None)

Class to represent Scene

#### *property* active_set

Set of active entities

#### *property* background

Background color

#### *property* background2

Background color 2

#### *property* camera

Camera settings

#### *property* changed

Status boolean. Set to true if the underlying data has been changed. Write only property

#### *property* descriptions_changed

Set to True if descriptions should be updated.

#### *property* fit_to_window

Reset the zoom of the window

#### *property* foreground

Foreground color

#### *property* logo_type

Logo type: default or black

#### *property* mode

Current ACP mode (pre or post).

#### *property* projection

Projection method: ‘parallel’ or ‘perspective’

#### save_snapshot(path, width=None, height=None, draw_background=False)

Create a snapshot of the scene

* **Parameters:**
  - path: File path
  - width: Width in pixels of the snapshot
  - height: Height in pixels of the snapshot
  - draw_background: Boolean whether to draw the background or not. If false, the background is white.

#### *property* scale_factor

Scale factor of the deformed mesh.

#### serialize()

Serialize to Python string

#### *property* show_element_type

Highlight “shell” or “solid” elements, or use “automatic” to select solid elements if the object belongs to a solid model.Note: Only analysis plies have solid elements. Shell elements are highlighted for modeling and production plies.

#### *property* show_global_coordinate_system

Toggle visibility of global coordinate system marker

#### *property* show_labeled_bounding_box

Toggle visibility of labeled bounding box

#### *property* show_selected_mesh

Specify whether to show/highlight currently selected Elements

#### *property* show_silhouette

Whether to show the silhouette of currently selected elements

#### *property* status

Status of the object

#### *property* title

Scene title

#### update_direction_display_data(entities)

Function syncronizes the following direction plots with the added/removed entities given:
- “orientations”
- “ref_directions”
- “fiber_directions”
- “draped_fiber_directions”

#### *property* uptodate

Apply a view to the scene. Write only

#### *property* view

Apply a view to the scene.

## [`View`](#compolyx.View)

### *class* compolyx.View(name, position=(0.0, 0.0, 0.0), orientation=(0.0, 0.0, 0.0), rotation_point=(0.0, 0.0, 0.0), parallel_scale=1.0, projection='perspective', locked=False, parent=None)

ComPoLyX class to capture view properties.

Access:

```pycon
>>> import compolyx
>>> db = compolyx.DB()
>>> view1 = db.create_view(name='View.1', position=[1.5, 5.75, 7.], orientation=[-0.4, -0.4, 0.8], rotation_point=[-6.0, 0.6, 0.75], projection='perspective')
```

#### *property* locked

A View which is imported from an other source can not be modified.

#### *property* orientation

Get/set the view orientation

#### *property* parallel_scale

Get/set the view parallel perspective scale factor.

#### *property* position

Get/set the view position

#### *property* projection

Get/set the projection method parallel or perspective

#### *property* rotation_point

Get/set the view rotation point.

#### serialize()

Serialize to Python string
