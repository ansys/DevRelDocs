---
uid: component_light_box_import_builder
title: ComponentLightBoxImportBuilder
---

# ComponentLightBoxImportBuilder

**Full Name**: `SpeosNX_2512::ComponentLightBoxImportBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a Component Light Box Import Builder.

The Component Light Box Import Builder creates or edits Component Light Box Import features.   




To create a new instance of this class, use FeatureCollection.CreateComponentLightBoxImportBuilder.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 13323*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 13327*

---

## Public Static Attributes

#### `AxisSystem` : str

`public` `static`

Gets the Axis System.

**Prerequisite**: The CustomAxisSystem property must be True.  




**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 13376*

---

#### `BlackBox` : str

`public` `static`

Gets the property to know if the Speos light box file is protected.

Returns true if the Speos light box file is protected, otherwise returns false.


**Value type**: Boolean.  




The default value is false.

**Default value**: `=  property(fget=__GetBlackBox)`

*Defined in `SpeosNX_2512.py` at line 13385*

---

#### `CustomAxisSystem` : str

`public` `static`

Gets or sets the property to activate or deactivate the use of a custom axis system.

True: Enables custom axis system.  

 False: Disables custom axis system.  




**Value type**: Boolean.   




The default value is False.

**Default value**: `=  property(fget=__GetCustomAxisSystem, fset=__SetCustomAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 13395*

---

#### `Password` : str

`public` `static`

Sets the password.

If the exported Light Box is encrypted. Enter the password.


**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fset=__SetPassword)`

*Defined in `SpeosNX_2512.py` at line 13404*

---

#### `PasswordRequired` : str

`public` `static`

Gets the property to know if a password is required to read the Speos light box file.

Returns true if a password is required to read the Speos light box file, otherwise returns false.


**Value type**: Boolean.  




The default value is false.

**Default value**: `=  property(fget=__GetPasswordRequired)`

*Defined in `SpeosNX_2512.py` at line 13413*

---

#### `PreviewMode` : str

`public` `static`

Gets or sets the preview mode.

The values are:  

 0 - Meshing.  

 1 - Bounding Box.  




**Value type**: Integer.  




The default value is 1.

**Default value**: `=  property(fget=__GetPreviewMode, fset=__SetPreviewMode)`

*Defined in `SpeosNX_2512.py` at line 13425*

---

#### `SpeosLightBoxFilePath` : str

`public` `static`

Gets or sets the Speos light box file path.

**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetSpeosLightBoxFilePath, fset=__SetSpeosLightBoxFilePath)`

*Defined in `SpeosNX_2512.py` at line 13432*

---

#### `Trajectory` : str

`public` `static`

Gets or sets the property to activate or deactivate the use of the trajectory.

True: Enables the trajectory.  

 False: Disables the trajectory.  




**Value type**: Boolean.   




The default value is False.

**Default value**: `=  property(fget=__GetTrajectory, fset=__SetTrajectory)`

*Defined in `SpeosNX_2512.py` at line 13442*

---

#### `TrajectoryFilePath` : str

`public` `static`

Gets or sets the trajectory file path.

**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetTrajectoryFilePath, fset=__SetTrajectoryFilePath)`

*Defined in `SpeosNX_2512.py` at line 13449*

---

## Member Summary

| Member | Type |
|--------|------|
| `AxisSystem` | public |
| `BlackBox` | public |
| `CustomAxisSystem` | public |
| `Password` | public |
| `PasswordRequired` | public |
| `PreviewMode` | public |
| `SpeosLightBoxFilePath` | public |
| `Trajectory` | public |
| `TrajectoryFilePath` | public |
| `thisown` | public |
