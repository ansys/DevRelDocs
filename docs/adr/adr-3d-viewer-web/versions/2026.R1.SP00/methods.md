# Methods

There are several methods calls that can be made on the <ansys-adr-viewer> element.
In practice, code similar to the following may be used to access these methods
(assuming instantiation as per the earlier example):

```html
<script> 
  var viewer = document.getElementById("Viewer"); 
  let image = viewer.renderImage();
  if (image) document.getElementById("img_target").src = image;
</script> 
```

## Method details

* __renderImage()__:
  returns a data URL of the RGB contents of the currently rendered image.
  Note: if the component is not active, this call will activate it.

* __setAttributes(target, name, values)__:
  Change attributes for an object. Note: this method is only implemented for SCDOC files.
  * *target* specifies the type of object to change. The only supported value for *target* is "part".
  * *name* specifies the specific name of the object to change.  For a *target* "part", this should be
    a name returned in the *parts* property.  Note: *name* can also be a regex expression.
  * *values* is an object containing the new values to be set.  Valid keys in the *values* object include:
    * *visible* a boolean value of true or false
    * *color* the base color of the object as a 32bit integer:  0xAARRGGBB AA=alpha, RR=red, GG=green, BB=blue
    * *edge_color* is the color of the object lines in the same format as *color*

* __getAttributes(target, name)__:
  Query the attributes for an object. Note: this method is only implemented for SCDOC files.
  * *target* specifies the type of object to query. The only supported value for *target* is "part".
  * *name* specifies the specific name of the object to query.  For a *target* "part", this should be
    a name returned in the *parts* property.
  
  * The return value is an object with the following keys:
    * *visible* a boolean value of true or false
    * *color* the base color of the object as a 32bit integer:  0xAARRGGBB AA=alpha, RR=red, GG=green, BB=blue
    * *edge_color* is the color of the object lines in the same format as *color*

 ```html
<script> 
  var viewer = document.getElementById("Viewer"); 
  let parts = viewer.parts;
  console.log(viewer.getAttributes("parts", parts[0]));
  // Change to transparent blue with solid black edges
  viewer.setAttributes("parts", parts[0], { color: 0x80000066, edge_color: 0xff000000, visible: true});
</script> 
```


