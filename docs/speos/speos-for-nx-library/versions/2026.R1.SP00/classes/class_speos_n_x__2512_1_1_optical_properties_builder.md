---
uid: optical_properties_builder
title: OpticalPropertiesBuilder
---

# OpticalPropertiesBuilder

**Full Name**: `SpeosNX_2512::OpticalPropertiesBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents the builder for optical properties.

The optical properties builder is used to create and edit optical properties features.


To create a new instance of this class, use `FeatureCollection::CreateOpticalPropertiesBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 14081*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 14085*

---

## Public Static Attributes

#### `Angle` : str

`public` `static`

Gets or sets the meshing angle.

**Prerequisite**: The IsMeshingProperties property must be True.  




**Value type**: Double (in degrees).  

 **Range**: (0.0, 90.0).  




The default value is 15.0 degrees.

**Default value**: `=  property(fget=__GetAngle, fset=__SetAngle)`

*Defined in `SpeosNX_2512.py` at line 14225*

---

#### `MeshingEdgeAngle` : str

`public` `static`

Gets or sets the meshing angle.

**Prerequisite**: The IsSpecificParametersFacetEdges property must be True.  




Defines the maximum angular variation in degrees between successive tangents for all points along a solid edge.


**Value type**: Double (in degrees).  

 **Range**: (0.0, 90.0).  




The default value is 10.0 degrees.

**Default value**: `=  property(fget=__GetMeshingEdgeAngle, fset=__SetMeshingEdgeAngle)`

*Defined in `SpeosNX_2512.py` at line 14237*

---

#### `MeshingEdgeSagValue` : str

`public` `static`

Gets or sets the meshing edge sag value.

**Prerequisite**: The IsSpecificParametersFacetEdges property must be True.  




Defines the maximum distance between the geometry and the meshing on the edges. The Meshing edge sag value always uses the Fixed mode.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.  




The default value is 0.1 mm.

**Default value**: `=  property(fget=__GetMeshingEdgeSagValue, fset=__SetMeshingEdgeSagValue)`

*Defined in `SpeosNX_2512.py` at line 14249*

---

#### `OpticalPropertiesGeometry` : str

`public` `static`

Gets optical properties geometry.

**Value type**: OpticalPropertiesGeometry object.

**Default value**: `=  property(fget=__GetOpticalPropertiesGeometry)`

*Defined in `SpeosNX_2512.py` at line 14254*

---

#### `SOPLibraryFilePath` : str

`public` `static`

Gets or sets the surface optical properties library file.

**Prerequisite**: The SOPType property must be 2.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSOPLibraryFilePath, fset=__SetSOPLibraryFilePath)`

*Defined in `SpeosNX_2512.py` at line 14263*

---

#### `SOPParametersFilePath` : str

`public` `static`

Gets or sets the surface optical properties parameters file.

**Prerequisite**: The SOPType property must be 3.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSOPParametersFilePath, fset=__SetSOPParametersFilePath)`

*Defined in `SpeosNX_2512.py` at line 14272*

---

#### `SOPPluginFilePath` : str

`public` `static`

Gets or sets the surface optical properties plug-in file.

**Prerequisite**: The SOPType property must be 3.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSOPPluginFilePath, fset=__SetSOPPluginFilePath)`

*Defined in `SpeosNX_2512.py` at line 14281*

---

#### `SOPReflectance` : str

`public` `static`

Gets or sets the surface optical properties reflectance.

**Prerequisite**: The SOPType property must be 1.  




**Value type**: Double.  

 **Range**: [0.0, 100.0].  




The default value is 100.0.

**Default value**: `=  property(fget=__GetSOPReflectance, fset=__SetSOPReflectance)`

*Defined in `SpeosNX_2512.py` at line 14291*

---

#### `SOPType` : str

`public` `static`

Gets or sets the surface optical properties.

**Prerequisite**: The IsOpticalProperties property must be True.  




The values are:  

 0 - Optical Polished, uses a transparent or perfectly polished material (glass, plastic).  

 1 - Mirror, uses a perfect specular surface and edits the Reflectance value if needed.  

 2 - Library, with this value the SOPLibraryFile property is available and must be defined.  

 3 - Plug-in, selects a custom made *.sop plug-in as File and the Parameters file for the plug-in.  




**Value type**: Integer.  




The default value is 1.

**Default value**: `=  property(fget=__GetSOPType, fset=__SetSOPType)`

*Defined in `SpeosNX_2512.py` at line 14306*

---

#### `SagMode` : str

`public` `static`

Gets or sets the meshing sag mode.

**Prerequisite**: The IsMeshingProperties property must be True.  




The values are:  

 0 - Proportional, the value adapts and adjusts to the size of each face of the object.  

 1 - Fixed, the value will remain unchanged no matter the size or shape of the object.   




**Value type**: Integer.  




The default value is 1.

**Default value**: `=  property(fget=__GetSagMode, fset=__SetSagMode)`

*Defined in `SpeosNX_2512.py` at line 14319*

---

#### `SagValue` : str

`public` `static`

Gets or sets the meshing sag value.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.  




The default value is 0.5 mm.

**Default value**: `=  property(fget=__GetSagValue, fset=__SetSagValue)`

*Defined in `SpeosNX_2512.py` at line 14328*

---

#### `SpecificParametersFacetEdges` : str

`public` `static`

Gets or sets the specific parameters property for facet edges.

**Prerequisite**: The IsMeshingProperties property must be True.  




Allows you to control the precision of the meshing on the edges of the faces.  




True: Enables specific parameters for facet edges.  

 False: Disables specific parameters for facet edges.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetSpecificParametersFacetEdges, fset=__SetSpecificParametersFacetEdges)`

*Defined in `SpeosNX_2512.py` at line 14342*

---

#### `StepMode` : str

`public` `static`

Gets or sets the meshing step mode.

**Prerequisite**: The IsMeshingProperties property must be True.  




The values are:  

 0 - Proportional, the value adapts and adjusts to the size of each face of the object.  

 1 - Fixed, the value will remain unchanged no matter the size or shape of the object.  




**Value type**: Integer.  




The default value is 1.

**Default value**: `=  property(fget=__GetStepMode, fset=__SetStepMode)`

*Defined in `SpeosNX_2512.py` at line 14355*

---

#### `StepValue` : str

`public` `static`

Gets or sets the meshing step value.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.  




The default value is 1.0 mm.

**Default value**: `=  property(fget=__GetStepValue, fset=__SetStepValue)`

*Defined in `SpeosNX_2512.py` at line 14364*

---

#### `UseMeshingProperties` : str

`public` `static`

Gets or sets the meshing properties property.

True: Enables meshing properties.  

 False: Disables meshing properties.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseMeshingProperties, fset=__SetUseMeshingProperties)`

*Defined in `SpeosNX_2512.py` at line 14374*

---

#### `UseOpticalProperties` : str

`public` `static`

Gets or sets the optical properties property.

True: Enables optical properties.  

 False: Disables optical properties.  




**Value type**: Boolean.   




The default value is True.

**Default value**: `=  property(fget=__GetUseOpticalProperties, fset=__SetUseOpticalProperties)`

*Defined in `SpeosNX_2512.py` at line 14384*

---

#### `UseVOPConstringence` : str

`public` `static`

Gets or sets the volume optical properties constringence property.

**Prerequisite**: The VOPType property must be 0.  




True: Enables constringence.  

 False: Disables constringence.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseVOPConstringence, fset=__SetUseVOPConstringence)`

*Defined in `SpeosNX_2512.py` at line 14396*

---

#### `VOPAbsorption` : str

`public` `static`

Gets or sets the volume optical properties absorption.

**Prerequisite**: The VOPType property must be 0.  




**Value type**: Double.  

 **Range**: The value must be superior or equal to 0.  




The default value is 0.0.

**Default value**: `=  property(fget=__GetVOPAbsorption, fset=__SetVOPAbsorption)`

*Defined in `SpeosNX_2512.py` at line 14406*

---

#### `VOPConstringence` : str

`public` `static`

Gets or sets the volume optical properties constringence.

**Prerequisite**: The IsVOPConstringence property must be True.  




**Value type**: Double.  

 **Range**: The value must be superior or equal to 20.0.  




The default value is 60.0

**Default value**: `=  property(fget=__GetVOPConstringence, fset=__SetVOPConstringence)`

*Defined in `SpeosNX_2512.py` at line 14416*

---

#### `VOPIndex` : str

`public` `static`

Gets or sets the volume optical properties index.

**Prerequisite**: The VOPType property must be 0.  




**Value type**: Double.  

 **Range**: The value must be superior or equal to 1.  




The default value is 1.5.

**Default value**: `=  property(fget=__GetVOPIndex, fset=__SetVOPIndex)`

*Defined in `SpeosNX_2512.py` at line 14426*

---

#### `VOPLibraryFilePath` : str

`public` `static`

Gets or sets the volume optical properties library file.

**Prerequisite**: The VOPType property must be 2.  




**value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetVOPLibraryFilePath, fset=__SetVOPLibraryFilePath)`

*Defined in `SpeosNX_2512.py` at line 14435*

---

#### `VOPType` : str

`public` `static`

Gets or sets the volume optical properties type.

**Prerequisite**: The IsOpticalProperties property must be True.  




The values are:  

 0 - Optic, uses transparent colorless part without bulk scattering.  

 1 - Opaque (Solid Body), uses non transparent part.  

 2 - Library, with this value the VOPLibraryFile property is available and must be defined.  

 3 - None, does not apply a volume optical properties on surface in case you have a surface geometry.  




**Value type**: Integer.  




The default value is 1.

**Default value**: `=  property(fget=__GetVOPType, fset=__SetVOPType)`

*Defined in `SpeosNX_2512.py` at line 14450*

---

## Member Summary

| Member | Type |
|--------|------|
| `Angle` | public |
| `MeshingEdgeAngle` | public |
| `MeshingEdgeSagValue` | public |
| `OpticalPropertiesGeometry` | public |
| `SOPLibraryFilePath` | public |
| `SOPParametersFilePath` | public |
| `SOPPluginFilePath` | public |
| `SOPReflectance` | public |
| `SOPType` | public |
| `SagMode` | public |
| `SagValue` | public |
| `SpecificParametersFacetEdges` | public |
| `StepMode` | public |
| `StepValue` | public |
| `UseMeshingProperties` | public |
| `UseOpticalProperties` | public |
| `UseVOPConstringence` | public |
| `VOPAbsorption` | public |
| `VOPConstringence` | public |
| `VOPIndex` | public |
| `VOPLibraryFilePath` | public |
| `VOPType` | public |
| `thisown` | public |
