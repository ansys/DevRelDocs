---
uid: class_speos_n_x__2512_1_1_component_light_box_export_builder
title: ComponentLightBoxExportBuilder
---

# ComponentLightBoxExportBuilder Class

**Namespace:** `SpeosNX`

**Inherits from:** `FeatureBuilder`

Represents a light box export component builder.

## Description

The light box export component builder creates or edits light box export component features. 



To create a new instance of this class, use `FeatureCollection::CreateComponentLightBoxExportBuilder`.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `AxisSystem` | `str` | Gets the axis system. |
| `BlackBox` | `str` | Gets or sets the property to enable BlackBox. |
| `CustomAxisSystem` | `str` | Gets or sets the property to enable custom axis system. |
| `EnablePassword` | `str` | Gets or sets the property to enable password. |
| `FastTransmissionGatheringValues` | `str` | Returns the fast transmission gathering values for all geometries. |
| `Geometries` | `str` | Gets geometries tag. |
| `MeshingAngle` | `str` | Gets or sets the meshing angle. |
| `MeshingEdgeAngle` | `str` | Gets or sets the meshing edge angle. |
| `MeshingEdgeSag` | `str` | Gets or sets the meshing edge sag value. |
| `MeshingSagMode` | `str` | Gets or sets the meshing sag mode. |
| `MeshingSagValue` | `str` | Gets or sets the meshing sag value. |
| `MeshingStepMode` | `str` | Gets or sets the meshing step mode. |
| `MeshingStepValue` | `str` | Gets or sets the meshing step fixed value. |
| `Password` | `str` | Set the password. |
| `Sources` | `str` | Gets source features. |
| `SpecificFacetEdgesParameters` | `str` | Gets or sets the specific parameters property for facet edges. |

## Methods

### RemoveSources

```python
RemoveSources(self, sources) -> 'None'
```

Deletes sources from the simulation.

**Parameters:**
- `sources`: : List of Feature object


**Returns:** void.

**Parameters:**

- `sources` (sources)

### RemoveGeometries

```python
RemoveGeometries(self, tags) -> 'None'
```

Deletes geometries from the component.

The DeleteGeometries function takes a list of geometry tag as parameter. 
**Parameters:**
- `tags`: : List of integer.


**Returns:** void.

**Parameters:**

- `tags` (tags)

### ReverseFastTransmissionGatheringValues

```python
ReverseFastTransmissionGatheringValues(self, tags) -> 'None'
```

Reverses the fast transmission gathering value for the selected geometries.

The ReverseFastTransmissionGatheringValues function takes a list of geometry tag as parameter. 
**Parameters:**
- `tags`: : List of integer.

The default fast transmission gathering value is False. 
**Returns:** void.

**Parameters:**

- `tags` (tags)

### GeneratePassword

```python
GeneratePassword(self) -> 'str'
```

Generates and store a new password.

**Prerequisite** The EnablePassword property must be True. 
**Returns:** the generated password.
