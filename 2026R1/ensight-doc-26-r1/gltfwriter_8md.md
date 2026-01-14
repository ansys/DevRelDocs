# File gltfwriter.md

<a id="gltfwriter_8md"></a>

![][Markdown]

## Source


```markdown
@addtogroup ANS_exts Ansys glTF Extensions
@ingroup gltf
@brief Ansys specifc extensions to the glTF specification


## Extensions

__Note: This component is a work in progress and this documentation is incomplete/preliminary.__

The GLTFWriter Library is a C++ library that is capable of writing geometry scenes in glTF 
format.  The core glTF specification, while complete, does not meet all of the needs
of Ansys applications.  There are a collection of formal extensions to the specification
that this library (and other aspects of the Ansys glTF ecosystem) use to place more
specific information into the files.

## GLTFWriter API Interface

These extensions have been designed to be specified using the @ref ANSYS::AVZ::GLTFWriter::Value interface.
Adding a line width specification to a ANSYS::AVZ::GLTFWriter::Mesh object is done like this:

```{.cpp}
    auto line_width = GLTFWriter::Value::Create(gltf, "ANSYS_linewidth", 0.5);
    mesh->AppendValue(line_width);
```

## Extensions

The following extensions are supported:

Extension|Datatype| Object(s)                                                             |Description
---|---|-----------------------------------------------------------------------|---
ANSYS_linewidth|float| @ref ANSYS::AVZ::GLTFWriter::Scene, @ref ANSYS::AVZ::GLTFWriter::Mesh |Specifies the width of lines and size of points
ANSYS_material_name|string| @ref ANSYS::AVZ::GLTFWriter::Material                                 |The name of the material
ANSYS_material_details|string| @ref ANSYS::AVZ::GLTFWriter::Material                                 |JSON description of the material details
ANSYS_scene_timevalue|float| @ref ANSYS::AVZ::GLTFWriter::Scene                                    |Time value for the scene

### Examples

Examples of what is embedded in the glTF JSON block:

* __ANSYS_linewidth__:
```json
"extensions": {
  "ANSYS_linewidth": {
      "linewidth" : 100.0
  }
}
```
* __ANSYS_material_name__:
```json
"extensions": {
  "ANSYS_material_name": {
    "name" : "sample_material_name"
   }
}
```
* __ANSYS_material_details__:
```json
"extensions": {
  "ANSYS_material_details": {
    "ensight/Metal/Gold": {
      "version": "2025 R1",
      "material_type": "SUBSURFACETHINGLASS",
      "color": [0.981126, 0.793495, 0.343545],
      "ambient": [0.981126, 0.793495, 0.343545],
      "ka": 0.001373,
      "diffuse": [0.981126, 0.793495, 0.343545],
      "kd": 0.000000,
      "specular": [1.000000, 0.808760, 0.350154],
      "ks": 1.000000,
      "reflective": [1.000000, 0.808760, 0.350154],
      "kr": 0.300000,
      "emissive": [1.000000, 1.000000, 1.000000],
      "ke": 0.000000,
      "shininess": 200.000000,
      "smoothness": 0.500000,
      "opacity": 1.000000,
      "gamma_corrected": false,
      "metallic": 1.000000,
      "speculartint": 1.000000,
      "eta": [0.070000, 0.370000, 1.500000],
      "kta": [3.700000, 2.300000, 1.700000] 
    }
  }
}
```
The ANSYS_material_details is specifically the text of a JSON object description.  The object keys
are the material type.  In the example, the material is in "ensight" format and is of the class
"Metal" and subclass "Gold".  It is legal for multiple specifications to be included.  For example,
both "ensight/Metal/Gold" and "MDL/omniverse/green glass" may both be included in the same JSON
object.
* __ANSYS_scene_timevalue__:
```json
"extensions": {
  "ANSYS_scene_timevalue": {
    "timevalue": 0.223
  }
}
```

Users of the GLTFWriter API need only set the "ANSYS_*" named Value object on the appropriate
target object type listed in the table to generate the extension blocks.
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)