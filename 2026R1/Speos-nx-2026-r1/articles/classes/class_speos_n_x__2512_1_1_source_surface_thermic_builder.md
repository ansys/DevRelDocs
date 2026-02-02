# SourceSurfaceThermicBuilder

**Full Name**: `SpeosNX_2512::SourceSurfaceThermicBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a Thermic Surface Source Builder.

The Thermic Surface Source Builder creates or edits Thermic Surface Source features.   




To create a new instance of this class, use FeatureCollection.CreateSourceSurfaceThermicBuilder.  




A thermic surface can define a source for which the total flux and the spectrum are defined by the source's temperature and the optical properties of the support geometry. You can define a thermic source on any face of the geometry.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 21023*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 21027*

---

## Public Static Attributes

#### `CosN` : str

`public` `static`

Gets or sets the N value for Cos distribution.

Prerequisite: The IntensityType property must be 1.  




**Value type**: Double.  




The default value is 3.0.

**Default value**: `=  property(fget=__GetCosN, fset=__SetCosN)`

*Defined in `SpeosNX_2512.py` at line 21162*

---

#### `EmittanceFilePath` : str

`public` `static`

Gets or sets the emittance file.

**Prerequisite**: The EmittanceType property must be 0.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetEmittanceFilePath, fset=__SetEmittanceFilePath)`

*Defined in `SpeosNX_2512.py` at line 21171*

---

#### `EmittanceOrigin` : str

`public` `static`

Gets or sets the emittance origin Point.

**Prerequisite**: The EmittanceType property must be 0.  




The EmittanceOrigin property takes and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetEmittanceOrigin, fset=__SetEmittanceOrigin)`

*Defined in `SpeosNX_2512.py` at line 21182*

---

#### `EmittanceType` : str

`public` `static`

Gets or sets the emittance type.

The values are:  

 0 - Temperature Field.  

 1 - Emissive Faces.  




**Value type**: Integer.   




The default value is 1.

**Default value**: `=  property(fget=__GetEmittanceType, fset=__SetEmittanceType)`

*Defined in `SpeosNX_2512.py` at line 21193*

---

#### `EmittanceXDirection` : str

`public` `static`

Gets or sets the emittance X direction.

**Prerequisite**: The EmittanceType property must be 0.  




The EmittanceXDirection property takes and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetEmittanceXDirection, fset=__SetEmittanceXDirection)`

*Defined in `SpeosNX_2512.py` at line 21204*

---

#### `EmittanceXDirectionReversed` : str

`public` `static`

Gets or sets the property to reverse the emittance of X direction.

**Prerequisite**: The EmittanceType property must be 0.  




True: Reverses the emittance direction X.  

 False: Does not reverse the emittance direction X.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetEmittanceXDirectionReversed, fset=__SetEmittanceXDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 21216*

---

#### `EmittanceYDirection` : str

`public` `static`

Gets or sets the emittance Y direction.

**Prerequisite**: The EmittanceType property must be 0.  




The EmittanceXDirection property takes and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetEmittanceYDirection, fset=__SetEmittanceYDirection)`

*Defined in `SpeosNX_2512.py` at line 21227*

---

#### `EmittanceYDirectionReversed` : str

`public` `static`

Gets or sets the property to reverse the emittance of Y direction.

**Prerequisite**: The EmittanceType property must be 0.  




True: Reverses the emittance direction Y.  

 False: Does not reverse the emittance direction Y.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetEmittanceYDirectionReversed, fset=__SetEmittanceYDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 21239*

---

#### `EnableAutomaticUpdate` : str

`public` `static`

Gets or sets the property to enable/disable the automatic update.

True: Enables the automatic update.  

 False: Disables the automatic update.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetEnableAutomaticUpdate, fset=__SetEnableAutomaticUpdate)`

*Defined in `SpeosNX_2512.py` at line 21249*

---

#### `Flux` : str

`public` `static`

Gets the flux.

**Value type**: Double.   




The default value is 0.

**Default value**: `=  property(fget=__GetFlux)`

*Defined in `SpeosNX_2512.py` at line 21256*

---

#### `FluxUnit` : str

`public` `static`

Gets or sets the flux unit.

The values are:  

 0 - lumen (lm).  

 1 - watt (W).  




**Value type**: Integer.   




The default value is 0.

**Default value**: `=  property(fget=__GetFluxUnit, fset=__SetFluxUnit)`

*Defined in `SpeosNX_2512.py` at line 21267*

---

#### `IntensityType` : str

`public` `static`

Gets or sets the intensity diagram.

The intensity diagram of a source describes in which directions is made the emission.  




The values are:  

 0 - Lambertian.  

 1 - Cos.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetIntensityType, fset=__SetIntensityType)`

*Defined in `SpeosNX_2512.py` at line 21280*

---

#### `NumberOfRays` : str

`public` `static`

Gets or sets the number of rays.

**Value type**: Integer.  

 **Range**: The value must be superior or equal to 0.  




The default value is 100.

**Default value**: `=  property(fget=__GetNumberOfRays, fset=__SetNumberOfRays)`

*Defined in `SpeosNX_2512.py` at line 21288*

---

#### `PreviewMode` : str

`public` `static`

Gets or sets the preview mode.

The values are:  

 0 - Meshing.  

 1 - BoundingBox.  




**Value type**: Integer.  




The default value is Meshing (0).

**Default value**: `=  property(fget=__GetPreviewMode, fset=__SetPreviewMode)`

*Defined in `SpeosNX_2512.py` at line 21299*

---

#### `RayLength` : str

`public` `static`

Gets or sets the ray length.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 75.0 mm.

**Default value**: `=  property(fget=__GetRayLength, fset=__SetRayLength)`

*Defined in `SpeosNX_2512.py` at line 21307*

---

#### `SOPLibraryFilePath` : str

`public` `static`

Gets or sets the surface optical properties library file.

**Prerequisite**: The SOPType property must be 2.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSOPLibraryFilePath, fset=__SetSOPLibraryFilePath)`

*Defined in `SpeosNX_2512.py` at line 21316*

---

#### `SOPParametersFilePath` : str

`public` `static`

Gets or sets the surface optical properties parameters file.

**Prerequisite**: The SOPType property must be 3.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSOPParametersFilePath, fset=__SetSOPParametersFilePath)`

*Defined in `SpeosNX_2512.py` at line 21325*

---

#### `SOPPluginFilePath` : str

`public` `static`

Gets or sets the surface optical properties plug-in file.

**Prerequisite**: The SOPType property must be 3.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSOPPluginFilePath, fset=__SetSOPPluginFilePath)`

*Defined in `SpeosNX_2512.py` at line 21334*

---

#### `SOPReflectance` : str

`public` `static`

Gets or sets the surface optical properties reflectance.

**Prerequisite**: The SOPType property must be 1.  




**Value type**: Double (in percentage).  

 **Range**: [0.0, 100.0].  




The default value is 100.0 percent.

**Default value**: `=  property(fget=__GetSOPReflectance, fset=__SetSOPReflectance)`

*Defined in `SpeosNX_2512.py` at line 21344*

---

#### `SOPType` : str

`public` `static`

Gets or sets the surface optical properties.

**Prerequisite**: The EmittanceType property must be 0.  




The values are:  

 1 - Mirror, uses a perfect specular surface and edits the Reflectance value if needed.  

 2 - Library, with this value the SOPLibraryFile property is available and must be defined.  

 3 - Plug-in, selects a custom made *.sop plug-in as File and the Parameters file for the plug-in.  




**Value type**: Integer.  




The default value is 1.

**Default value**: `=  property(fget=__GetSOPType, fset=__SetSOPType)`

*Defined in `SpeosNX_2512.py` at line 21358*

---

#### `SourceSurfaceEmissiveFaces` : str

`public` `static`

Returns the interface to edit the emissive faces of the source.

**Prerequisite**: The ExitanteType property must be 0.  




**Value type**: SourceSurfaceEmissiveFaces object.

**Default value**: `=  property(fget=__GetSourceSurfaceEmissiveFaces)`

*Defined in `SpeosNX_2512.py` at line 21365*

---

#### `Temperature` : str

`public` `static`

Gets or sets the temperature.

**Prerequisite**: The SpectrumType property must be 0.  




**Value type**: Double (in Kelvin).  

 **Range**: The value must be superior to 0.0.  




The default value is 8000.0 Kelvin.

**Default value**: `=  property(fget=__GetTemperature, fset=__SetTemperature)`

*Defined in `SpeosNX_2512.py` at line 21375*

---

## Member Summary

| Member | Type |
|--------|------|
| `CosN` | public |
| `EmittanceFilePath` | public |
| `EmittanceOrigin` | public |
| `EmittanceType` | public |
| `EmittanceXDirection` | public |
| `EmittanceXDirectionReversed` | public |
| `EmittanceYDirection` | public |
| `EmittanceYDirectionReversed` | public |
| `EnableAutomaticUpdate` | public |
| `Flux` | public |
| `FluxUnit` | public |
| `IntensityType` | public |
| `NumberOfRays` | public |
| `PreviewMode` | public |
| `RayLength` | public |
| `SOPLibraryFilePath` | public |
| `SOPParametersFilePath` | public |
| `SOPPluginFilePath` | public |
| `SOPReflectance` | public |
| `SOPType` | public |
| `SourceSurfaceEmissiveFaces` | public |
| `Temperature` | public |
| `thisown` | public |
