# Getting started

## Instantiation

A simple example of using the component in a web page:

```html
<head> 
  <script src="/ansys###/nexus/viewer-loader.js"></script> 
</head> 
<body> 
  <div> 
    <ansys-adr-viewer 
      id="Viewer" 
      src="/ansys###/nexus/test/viewer_test.avz" 
      proxy_img="/ansys###/nexus/images/ANSYS_icon.png" 
      active=true>
    </ansys-adr-viewer>
  </div> 
</body> 
```

If there is an Ansys installation located at: `C:\Program Files\ANSYS Inc\v###` one can run
an example with:

```cmd
cd C:\Program Files\ANSYS Inc\v###\CEI\nexus###
..\bin\cpython -m http.server 8000
```

And then browse to the URL:  `http://localhost:8000/ansys###/nexus/test/viewer_test.html`
