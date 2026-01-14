# File dynamic\_scene\_graph\_service\_entities.md

<a id="dynamic__scene__graph__service__entities_8md"></a>

![][Markdown]

## Source


```markdown
@startuml{dynamic_scene_graph_service_entities.svg} ""

left to right direction

enum UndefinedDisplay {
AS_ZERO
AS_INVISIBLE
USE_PART_COLOR
USE_UNDEF_COLOR
}

enum PaletteInterpolation {
CONTINUOUS
BANDED
}

enum VarLocation {
NODAL
ELEMENTAL
}

enum VarDimension {
VECTOR
SCALAR
}

enum ArrayType {
COORDINATES
TRIANGLES
LINES
EDGEFLAGS
ELEM_VARIBALE
NODE_VARIABLE
ELEM_NORMALS
NODE_NORMALS
TEX_COORDINATES
}

enum ShadingMode {
ELEMENTAL
NODAL
}

enum RenderingMode {
NODES
CONNECTIVITY
}

enum TextureWrapMode {
REPEAT
CLAMP
CLAMP_TEXTURE
}

enum TextureApplyMode {
REPLACE
DECAL
MODULATE
}

enum TextureSampleMode {
NEAREST
LINEAR
}

enum TextureFormat {
RGB
RGBA
}

entity EntityID {
id: Integer64
}

entity Scene {
id: EntityID {SceneID}
children: EntityID[..] {ViewID|VarID}
}

entity View { 
id: EntityID {ViewID}
parent_id: EntityID {SceneID}
children: EntityID[..] {GroupID}
--
timeline: Float[2]
lookat: Float[3]
lookfrom: Float[3]
upvector: Float[3]
fieldofview: Float
aspectratio: Float
nearfar: Float[2]
hash: String
}

entity Group { 
id: EntityID {GroupID} id
name: String
parent_id: EntityID {ViewID}
children: EntityID[..] {GroupID|PartID}
--
matrix4x4: Float[16]
attributes: Map<String, String>
hash: String
}

entity VariableLevel {
value: Float
color: Float[4]
}

entity Variable { 
id: EntityID {VarID}
name: String
parent_id: EntityID {SceneID}
--
location: VarLocation
dimension: VarDimension
levels: VariableLevel[..]
sub_levels: Integer
pal_interp: PaletteInterpolation
undefined_value: Float
undefined_display: UndefinedDisplay
undefined_color: Float[3]
texture: Bytes[..]
attributes: Map<String, String>
hash: String
}

entity Texture { 
id: EntityID {TextureID}
parent_id: EntityID {SceneID}
--
format: TextureFormat
width: Integer
height: Integer
texels: Bytes[..]
hash: String
}

entity Geom { 
id: EntityID {GeomID}
parent_id: EntityID {PartID}
--
payload_type: ArrayType
variable_id: EntityID {VarID}
flt_array: Float[..]
int_array: Integer[..]
chunk_offset: Integer
total_array_size: Integer
hash: String
}

entity Part { 
id: EntityID {PartID}
name: String
parent_id: EntityID {GroupID}
children: EntityID[..] {GeomID}
--
matrix4x4: Float[16]
shading: ShadingMode
render: RenderingMode
fill_color: Float[4]
line_color: Float[4]
ambient: Float
diffuse: Float
specular_shine: Float
specular_intensity: Float
material_name: String
node_size_default: Float
color_variableid: EntityID {VarID}
alpha_variableid: EntityID {VarID}
node_size_variableid: EntityID {VarID}
displacement_variableid: EntityID {VarID}
texture_id: EntityID {TextureID}
texture_wrap_mode: TextureWrapMode
texture_apply_mode TextureApplyMode
texture_sample_mode TextureSampleMode
hash: String
}

Part o-- Geom
Part o-- Variable
Part o-- Texture
Part -- RenderingMode
Part -- ShadingMode
Part -d- EntityID
Part -- TextureWrapMode
Part -- TextureApplyMode
Part -- TextureSampleMode
Scene o-- View
Scene o-- Variable
Scene o-- Texture
Scene -d- EntityID
View o-- Group
View -- EntityID
Group o-- Group
Group o-- Part
Group -d- EntityID
Variable o-- VariableLevel
Variable -- PaletteInterpolation
Variable -- UndefinedDisplay
Variable -- VarLocation
Variable -- VarDimension
Variable -- EntityID
Geom -- ArrayType
Geom -d- EntityID
Texture -- TextureFormat
Texture -d- EntityID

@enduml
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)