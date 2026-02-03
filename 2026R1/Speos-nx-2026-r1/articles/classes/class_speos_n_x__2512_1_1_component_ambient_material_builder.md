---
uid: component_ambient_material_builder
title: ComponentAmbientMaterialBuilder
---

# ComponentAmbientMaterialBuilder

**Full Name**: `SpeosNX_2512::ComponentAmbientMaterialBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents an ambient material component builder.

The ambient material component builder creates or edits ambient material component features.   




To create a new instance of this class, use `FeatureCollection::CreateComponentAmbientMaterialBuilder`.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 12916*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 12920*

---

## Public Static Attributes

#### `Absorption` : str

`public` `static`

Gets or sets the absorption property.

**Prerequisite**: The Type property must be 0.  




**Value type**: Double.  

 **Range**: The value must be superior or equal to 0.  




The default value is 0.0.

**Default value**: `=  property(fget=__GetAbsorption, fset=__SetAbsorption)`

*Defined in `SpeosNX_2512.py` at line 12966*

---

#### `Constringence` : str

`public` `static`

Gets or sets the constringence property.

**Prerequisite**: The UseConstringence property must be True.  




**Value type**: Double.  

 **Range**: The value must be superior or equal to 20.0.  




The default value is 60.0

**Default value**: `=  property(fget=__GetConstringence, fset=__SetConstringence)`

*Defined in `SpeosNX_2512.py` at line 12976*

---

#### `Index` : str

`public` `static`

Gets or sets the index property.

**Prerequisite**: The Type property must be 0.  




**Value type**: Double.  

 **Range**: The value must be superior or equal to 1.  




The default value is 1.5.

**Default value**: `=  property(fget=__GetIndex, fset=__SetIndex)`

*Defined in `SpeosNX_2512.py` at line 12986*

---

#### `LibraryFilePath` : str

`public` `static`

Gets or sets the library file path.

**Prerequisite**: The Type property must be 2.  




**value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetLibraryFilePath, fset=__SetLibraryFilePath)`

*Defined in `SpeosNX_2512.py` at line 12995*

---

#### `Type` : str

`public` `static`

Gets or sets the type of Ambient Material.

The values are:   

 0 - Optic.  

 2 - Library.  




**Value type: Integer.  

**


** The default value is Optic (0). **

**Default value**: `=  property(fget=__GetType, fset=__SetType)`

*Defined in `SpeosNX_2512.py` at line 13006*

---

#### `UseConstringence` : str

`public` `static`

Gets or sets the use of constringence property.

**Prerequisite**: The Type property must be 0.  




True: Enables constringence.  

 False: Disables constringence.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseConstringence, fset=__SetUseConstringence)`

*Defined in `SpeosNX_2512.py` at line 13018*

---

## Member Summary

| Member | Type |
|--------|------|
| `Absorption` | public |
| `Constringence` | public |
| `Index` | public |
| `LibraryFilePath` | public |
| `Type` | public |
| `UseConstringence` | public |
| `thisown` | public |
