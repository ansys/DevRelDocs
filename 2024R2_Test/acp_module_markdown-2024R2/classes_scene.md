# Scene classes

<a id="scene"></a>

## `Scene`

<a id="compolyx.Scene"></a>

### *class* compolyx.Scene(graph, model=None, name='', id=None, title='', view=None, parent=None, active_set=None)

Class to represent Scene.

<a id="compolyx.Scene.active_set"></a>

#### *property* active_set

Set of active entities.

<a id="compolyx.Scene.background"></a>

#### *property* background

Background color.

<a id="compolyx.Scene.background2"></a>

#### *property* background2

Background color 2.

<a id="compolyx.Scene.camera"></a>

#### *property* camera

Camera settings.

<a id="compolyx.Scene.changed"></a>

#### *property* changed

Status boolean. Set to true if the underlying data has been changed. Write only property.

<a id="compolyx.Scene.descriptions_changed"></a>

#### *property* descriptions_changed

Set to True if descriptions should be updated.

<a id="compolyx.Scene.fit_to_window"></a>

#### *property* fit_to_window

Reset the zoom of the window.

<a id="compolyx.Scene.foreground"></a>

#### *property* foreground

Foreground color.

<a id="compolyx.Scene.logo_type"></a>

#### *property* logo_type

Logo type: default or black.

<a id="compolyx.Scene.mode"></a>

#### *property* mode

Current ACP mode, ACP (Pre) or ACP (Post) - UNSUPPORTED.

<a id="compolyx.Scene.projection"></a>

#### *property* projection

Projection method: ‘parallel’ or ‘perspective’.

<a id="compolyx.Scene.save_snapshot"></a>

#### save_snapshot(path, width=None, height=None, draw_background=False)

Create a snapshot of the scene.

* **Parameters:**
  - path: File path.
  - width: Width in pixels of the snapshot.
  - height: Height in pixels of the snapshot.
  - draw_background: Boolean whether to draw the background or not. If false, the background is white.

<a id="compolyx.Scene.scale_factor"></a>

#### *property* scale_factor

Scale factor of the deformed mesh.

<a id="compolyx.Scene.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.Scene.show_element_type"></a>

#### *property* show_element_type

Highlight “shell” or “solid” elements, or use “automatic” to select solid elements if the object belongs to a solid model.

Note: Only analysis plies have solid elements. Shell elements are highlighted for modeling and production plies.

<a id="compolyx.Scene.show_global_coordinate_system"></a>

#### *property* show_global_coordinate_system

Toggle visibility of global coordinate system marker.

<a id="compolyx.Scene.show_labeled_bounding_box"></a>

#### *property* show_labeled_bounding_box

Toggle visibility of labeled bounding box.

<a id="compolyx.Scene.show_selected_mesh"></a>

#### *property* show_selected_mesh

Specify whether to show/highlight currently selected Elements.

<a id="compolyx.Scene.show_silhouette"></a>

#### *property* show_silhouette

Whether to show the silhouette of currently selected elements.

<a id="compolyx.Scene.status"></a>

#### *property* status

Status of the object.

<a id="compolyx.Scene.title"></a>

#### *property* title

Scene title.

<a id="compolyx.Scene.update_direction_display_data"></a>

#### update_direction_display_data(entities)

Function syncronizes the following direction plots with the added/removed entities given:
- “orientations”.
- “ref_directions”.
- “fiber_directions”.
- “draped_fiber_directions”.

<a id="compolyx.Scene.uptodate"></a>

#### *property* uptodate

Apply a view to the scene. Write only.

<a id="compolyx.Scene.view"></a>

#### *property* view

Apply a view to the scene.

<a id="view"></a>

## `View`

<a id="compolyx.View"></a>

### *class* compolyx.View(name, position=(0.0, 0.0, 0.0), orientation=(0.0, 0.0, 0.0), rotation_point=(0.0, 0.0, 0.0), parallel_scale=1.0, projection='perspective', locked=False, parent=None)

ComPoLyX class to capture view properties.

Access:

```pycon
>>> import compolyx
>>> db = compolyx.DB()
>>> view1 = db.create_view(name='View.1', position=[1.5, 5.75, 7.], orientation=[-0.4, -0.4, 0.8], rotation_point=[-6.0, 0.6, 0.75], projection='perspective')
```

<a id="compolyx.View.locked"></a>

#### *property* locked

A View which is imported from an other source can not be modified.

<a id="compolyx.View.orientation"></a>

#### *property* orientation

Get/set the view orientation.

<a id="compolyx.View.parallel_scale"></a>

#### *property* parallel_scale

Get/set the view parallel perspective scale factor.

<a id="compolyx.View.position"></a>

#### *property* position

Get/set the view position.

<a id="compolyx.View.projection"></a>

#### *property* projection

Get/set the projection method parallel or perspective.

<a id="compolyx.View.rotation_point"></a>

#### *property* rotation_point

Get/set the view rotation point.

<a id="compolyx.View.serialize"></a>

#### serialize()

Serialize to Python string.
