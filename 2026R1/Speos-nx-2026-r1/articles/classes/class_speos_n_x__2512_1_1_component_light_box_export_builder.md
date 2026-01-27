---
uid: component_light_box_export_builder
title: ComponentLightBoxExportBuilder
---

# ComponentLightBoxExportBuilder

**Full Name**: `SpeosNX_2512::ComponentLightBoxExportBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a light box export component builder.

The light box export component builder creates or edits light box export component features.   




To create a new instance of this class, use `FeatureCollection::CreateComponentLightBoxExportBuilder`.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 13031*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 13035*

---

## Public Static Attributes

#### `AxisSystem` : str

`public` `static`

Gets the axis system.

**Prerequisite** The CustomAxisSystem property must be True.


**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 13168*

---

#### `BlackBox` : str

`public` `static`

Gets or sets the property to enable BlackBox.

True: Enables BlackBox.  

 False: Disables BlackBox.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetBlackBox, fset=__SetBlackBox)`

*Defined in `SpeosNX_2512.py` at line 13178*

---

#### `CustomAxisSystem` : str

`public` `static`

Gets or sets the property to enable custom axis system.

True: Enables custom axis system.  

 False: Disables custom axis system.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetCustomAxisSystem, fset=__SetCustomAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 13188*

---

#### `EnablePassword` : str

`public` `static`

Gets or sets the property to enable password.

True: Enables password.  

 False: Disables password.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetEnablePassword, fset=__SetEnablePassword)`

*Defined in `SpeosNX_2512.py` at line 13198*

---

#### `FastTransmissionGatheringValues` : str

`public` `static`

Returns the fast transmission gathering values for all geometries.

The GetFastTransmissionGatheringValues property returns a list of feature tag. 

**Returns**: List of integer.

**Default value**: `=  property(fget=__GetFastTransmissionGatheringValues)`

*Defined in `SpeosNX_2512.py` at line 13204*

---

#### `Geometries` : str

`public` `static`

Gets geometries tag.

The Geometries property returns a list of feature tag. 

**Returns**: List of integer.

**Default value**: `=  property(fget=__GetGeometries, fset=__SetGeometries)`

*Defined in `SpeosNX_2512.py` at line 13210*

---

#### `MeshingAngle` : str

`public` `static`

Gets or sets the meshing angle.

**Value type**: Double (in degrees).  

 **Range**: (0.0, 90.0).  




The default value is 15.0 degrees.

**Default value**: `=  property(fget=__GetMeshingAngle, fset=__SetMeshingAngle)`

*Defined in `SpeosNX_2512.py` at line 13218*

---

#### `MeshingEdgeAngle` : str

`public` `static`

Gets or sets the meshing edge angle.

**Prerequisite** The SpecificFacetEdgesParameters property must be True.


Defines the maximum angular variation in degrees between successive tangents for all points along a solid edge.


**Value type**: Double (in degrees).  

 **Range**: (0.0, 90.0).  




The default value is 10.0 degrees.

**Default value**: `=  property(fget=__GetMeshingEdgeAngle, fset=__SetMeshingEdgeAngle)`

*Defined in `SpeosNX_2512.py` at line 13230*

---

#### `MeshingEdgeSag` : str

`public` `static`

Gets or sets the meshing edge sag value.

**Prerequisite** The SpecificFacetEdgesParameters property must be True.


Defines the maximum distance between the geometry and the meshing on the edges. The Meshing edge sag value always uses the Fixed mode.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.  




The default value is 0.1 mm.

**Default value**: `=  property(fget=__GetMeshingEdgeSag, fset=__SetMeshingEdgeSag)`

*Defined in `SpeosNX_2512.py` at line 13242*

---

#### `MeshingSagMode` : str

`public` `static`

Gets or sets the meshing sag mode.

The values are:  

 0 - Proportional, the value adapts and adjusts to the size of each face of the object.   

 1 - Fixed, the value will remain unchanged no matter the size or shape of the object.   




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetMeshingSagMode, fset=__SetMeshingSagMode)`

*Defined in `SpeosNX_2512.py` at line 13253*

---

#### `MeshingSagValue` : str

`public` `static`

Gets or sets the meshing sag value.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 0.5 mm.

**Default value**: `=  property(fget=__GetMeshingSagValue, fset=__SetMeshingSagValue)`

*Defined in `SpeosNX_2512.py` at line 13262*

---

#### `MeshingStepMode` : str

`public` `static`

Gets or sets the meshing step mode.

The values are:  

 0 - Proportional, the value adapts and adjusts to the size of each face of the object.  

 1 - Fixed, the value will remain unchanged no matter the size or shape of the object.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetMeshingStepMode, fset=__SetMeshingStepMode)`

*Defined in `SpeosNX_2512.py` at line 13273*

---

#### `MeshingStepValue` : str

`public` `static`

Gets or sets the meshing step fixed value.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.  




The default value is 1.0 mm.

**Default value**: `=  property(fget=__GetMeshingStepValue, fset=__SetMeshingStepValue)`

*Defined in `SpeosNX_2512.py` at line 13282*

---

#### `Password` : str

`public` `static`

Set the password.

**Prerequisite** The EnablePassword property must be True.


**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fset=__SetPassword)`

*Defined in `SpeosNX_2512.py` at line 13291*

---

#### `Sources` : str

`public` `static`

Gets source features.

Gets the current source features that are in the component.  




**Value type**: List of Feature object.

**Default value**: `=  property(fget=__GetSources, fset=__SetSources)`

*Defined in `SpeosNX_2512.py` at line 13298*

---

#### `SpecificFacetEdgesParameters` : str

`public` `static`

Gets or sets the specific parameters property for facet edges.

Allows to control the precision of the meshing on the edges of the faces.  




True: Enables specific parameters for facet edges.  

 False: Disables specific parameters for facet edges.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetSpecificFacetEdgesParameters, fset=__SetSpecificFacetEdgesParameters)`

*Defined in `SpeosNX_2512.py` at line 13310*

---

## Public Methods

#### `RemoveSources(self, sources)`

`public`

Deletes sources from the simulation.

**Parameters**:
- `sources`: 
: List of Feature object 





**Returns**: void.

*Defined in `SpeosNX_2512.py` at line 13100*

---

#### `RemoveGeometries(self, tags)`

`public`

Deletes geometries from the component.

The DeleteGeometries function takes a list of geometry tag as parameter. 

**Parameters**:
- `tags`: 
: List of integer. 





**Returns**: void.

*Defined in `SpeosNX_2512.py` at line 13114*

---

#### `ReverseFastTransmissionGatheringValues(self, tags)`

`public`

Reverses the fast transmission gathering value for the selected geometries.

The ReverseFastTransmissionGatheringValues function takes a list of geometry tag as parameter. 

**Parameters**:
- `tags`: 
: List of integer.



The default fast transmission gathering value is False. 

**Returns**: void.

*Defined in `SpeosNX_2512.py` at line 13124*

---

#### `GeneratePassword(self)`

`public`

Generates and store a new password.

**Prerequisite** The EnablePassword property must be True. 

**Returns**: the generated password.

*Defined in `SpeosNX_2512.py` at line 13148*

---

## Member Summary

| Member | Type |
|--------|------|
| `AxisSystem` | public |
| `BlackBox` | public |
| `CustomAxisSystem` | public |
| `EnablePassword` | public |
| `FastTransmissionGatheringValues` | public |
| `GeneratePassword` | public |
| `Geometries` | public |
| `MeshingAngle` | public |
| `MeshingEdgeAngle` | public |
| `MeshingEdgeSag` | public |
| `MeshingSagMode` | public |
| `MeshingSagValue` | public |
| `MeshingStepMode` | public |
| `MeshingStepValue` | public |
| `Password` | public |
| `RemoveGeometries` | public |
| `RemoveSources` | public |
| `ReverseFastTransmissionGatheringValues` | public |
| `Sources` | public |
| `SpecificFacetEdgesParameters` | public |
| `thisown` | public |
