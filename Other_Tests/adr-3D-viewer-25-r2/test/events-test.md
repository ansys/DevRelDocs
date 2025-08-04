# Events

The component is designed to communicate intrinsic status changes via custom JavaScript events.  
Events are scoped to the <ansys-adr-viewer> element and handlers should be attached
to the viewer element itself.  An example of connecting to the partlist changed event assuming
instantiation via the previous example code:

```html
<script> 
  function partlistChangedFunc(e) { 
     var obj = document.getElementById("Viewer"); 
     const new_list = obj.parts; 
     // Event handler code goes here...
  } 

  var viewer = document.getElementById("Viewer"); 
  viewer.addEventListener("parts-changed", partlistChangedFunc); 
</script> 
```

In general, events do not contain significant data payloads, relying on
properties to contain the changed state values.

## Event details

There are a number of available events. Many are in common over all the renderers, but not all.

Event | Trigger          | Renderer              | Details
---|-----------------|-----------------------|---
__active-changed__| 'active' changes           | all                   |{active: bool}
__src-changed__| 'src' changes         | all                   |{src:url, ext:filename_ext}
__parts-changed__| 'parts' changes        | webgl,envnc           | {}
__proxy-img-changed__| 'proxy-img' changes<br> Note: not the actual aspect ratio, just the property   | all                   |{proxy_image:url}
__aspect-ratio-changed__| 'aspect-ratio' changes       | all                   | {aspect_ratio: float}
__part-attributes-changed__| Emitted when setAttributes() is called. | SCDOC                 | {parts:[names], changed:[attrnames]}
__gltfviewer-data-probe__|The event emits by default and is controlled by the "_okToSendViewEvent" property, which can be accessed through: <br> viewer_element._render_instance._renderer.scene.navigator (viewer_element = &lt;ansys-adr-viewer /&gt;) | webgl    | { emitEle: [the viewer element that emits this event], guid: [viewer guid], xy: [x,y coordinate of the current cursor], syncCursorRay: [current cursor location's data] width: [viewer width] , height: [viewer height]}
__gltfviewer-view-change__|The event emits by default for non-animated scene and is controlled by the "_okToSendViewEvent" property, which can be accessed through: <br> viewer_element._render_instance._renderer.scene.navigator (viewer_element = &lt;ansys-adr-viewer /&gt;) | webgl    | { proj: [current viewer's camera projection],  animateSwitch: [false by default], guid: [viewer guid]}
__gltfviewer-spaceclaim-showhover__| tooltip changes       | webgl<br> SCDOC datafile |{tip:tiptext}
__gltfviewer-spaceclaim-showfacepoint__| a point is picked on a face/edge/body         | webgl<br> SCDOC datafile |{x:float,y:float,z:float}
__gltfviewer-spaceclaim-pick__| new entity is selected (face/edge/body)<br> The viewer must be in picking mode. | webgl<br> SCDOC datafile |__see below__


__gltfviewer-spaceclaim-pick__ details:

- name: part name
- path: complete "path" to the pick target
- type: SELECTION_NONE|SELECTION_EDGE|SELECTION_FACE|SELECTION_BODY

Additional fields if type==SELECTION_EDGE or type==SELECTION_FACE:

- min: [xmin, ymin, zmin]
- max: [xmax, ymax, zmax]
- vertices: [[x,y,z], ...]
  
Additional fields if type==SELECTION_BODY:

- min: [xmin, ymin, zmin]
- max: [xmax, ymax, zmax]


### test heading 3


The component is designed to communicate intrinsic status changes via custom JavaScript events.  
Events are scoped to the <ansys-adr-viewer> element and handlers should be attached
to the viewer element itself.  An example of connecting to the partlist changed event assuming
instantiation via the previous example code:

```html
<script> 
  function partlistChangedFunc(e) { 
     var obj = document.getElementById("Viewer"); 
     const new_list = obj.parts; 
     // Event handler code goes here...
  } 

  var viewer = document.getElementById("Viewer"); 
  viewer.addEventListener("parts-changed", partlistChangedFunc); 
</script> 
```

In general, events do not contain significant data payloads, relying on
properties to contain the changed state values.



#### test heading 4

The component is designed to communicate intrinsic status changes via custom JavaScript events.  
Events are scoped to the <ansys-adr-viewer> element and handlers should be attached
to the viewer element itself.  An example of connecting to the partlist changed event assuming
instantiation via the previous example code:

```html
<script> 
  function partlistChangedFunc(e) { 
     var obj = document.getElementById("Viewer"); 
     const new_list = obj.parts; 
     // Event handler code goes here...
  } 

  var viewer = document.getElementById("Viewer"); 
  viewer.addEventListener("parts-changed", partlistChangedFunc); 
</script> 
```

In general, events do not contain significant data payloads, relying on
properties to contain the changed state values.



##### test heading 5

The component is designed to communicate intrinsic status changes via custom JavaScript events.  
Events are scoped to the <ansys-adr-viewer> element and handlers should be attached
to the viewer element itself.  An example of connecting to the partlist changed event assuming
instantiation via the previous example code:

```html
<script> 
  function partlistChangedFunc(e) { 
     var obj = document.getElementById("Viewer"); 
     const new_list = obj.parts; 
     // Event handler code goes here...
  } 

  var viewer = document.getElementById("Viewer"); 
  viewer.addEventListener("parts-changed", partlistChangedFunc); 
</script> 
```

In general, events do not contain significant data payloads, relying on
properties to contain the changed state values.



###### test heading 6


The component is designed to communicate intrinsic status changes via custom JavaScript events.  
Events are scoped to the <ansys-adr-viewer> element and handlers should be attached
to the viewer element itself.  An example of connecting to the partlist changed event assuming
instantiation via the previous example code:

```html
<script> 
  function partlistChangedFunc(e) { 
     var obj = document.getElementById("Viewer"); 
     const new_list = obj.parts; 
     // Event handler code goes here...
  } 

  var viewer = document.getElementById("Viewer"); 
  viewer.addEventListener("parts-changed", partlistChangedFunc); 
</script> 
```

In general, events do not contain significant data payloads, relying on
properties to contain the changed state values.

