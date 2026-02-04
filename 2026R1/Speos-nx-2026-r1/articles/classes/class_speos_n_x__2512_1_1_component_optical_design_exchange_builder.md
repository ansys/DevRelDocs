---
uid: component_optical_design_exchange_builder
title: ComponentOpticalDesignExchangeBuilder
---

# ComponentOpticalDesignExchangeBuilder

**Full Name**: `SpeosNX_2512::ComponentOpticalDesignExchangeBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a Component Optical Design Exchange Builder.

The Component Optical Design Exchange Builder creates or edits Component Optical Design Exchange features.   




To create a new instance of this class, use FeatureCollection.CreateComponentOpticalDesignExchangeBuilder.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 13462*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 13466*

---

## Public Static Attributes

#### `AxisSystem` : str

`public` `static`

Gets the Axis System.

**Prerequisite**: The CustomAxisSystem property must be True.  




**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 13497*

---

#### `CustomAxisSystem` : str

`public` `static`

Gets or sets the property to activate or deactivate the use of a custom axis system.

True: Enables custom axis system.  

 False: Disables custom axis system.  




**Value type**: Boolean.   




The default value is False.

**Default value**: `=  property(fget=__GetCustomAxisSystem, fset=__SetCustomAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 13507*

---

#### `FeatureOpticalDesignExchange` : str

`public` `static`

Gets the Optical Design Exchange feature object.

Gets the Optical Design Exchange feature.  




**Value type**: ODXFeature object.

**Default value**: `=  property(fget=__GetFeatureOpticalDesignExchange)`

*Defined in `SpeosNX_2512.py` at line 13514*

---

#### `FilePath` : str

`public` `static`

Gets or sets the ODX file path.

**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetFilePath, fset=__SetFilePath)`

*Defined in `SpeosNX_2512.py` at line 13521*

---

#### `OnlyUpdateMaterials` : str

`public` `static`

Gets or sets the property to enable or disable the option to update only materials.

True: Enables the option. Only materials will be updated.  

 False: Disables the option.  




**Value type**: Boolean.  




The default value is false.

**Default value**: `=  property(fget=__GetOnlyUpdateMaterials, fset=__SetOnlyUpdateMaterials)`

*Defined in `SpeosNX_2512.py` at line 13531*

---

## Member Summary

| Member | Type |
|--------|------|
| `AxisSystem` | public |
| `CustomAxisSystem` | public |
| `FeatureOpticalDesignExchange` | public |
| `FilePath` | public |
| `OnlyUpdateMaterials` | public |
| `thisown` | public |
