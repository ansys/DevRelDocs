---
uid: result_l_x_p_builder
title: ResultLXPBuilder
---

# ResultLXPBuilder

**Full Name**: `SpeosNX_2512::ResultLXPBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a Result Light Expert builder.

The ResultLXPBuilder is used to create and edit Result Light Expert features.  




To create a new instance of this class, use `FeatureCollection::CreateResultLXPBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 14462*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 14466*

---

## Public Static Attributes

#### `DrawingOptions` : str

`public` `static`

Gets or sets the drawing options.

The values are:  

 1 - Rays.  

 2 - Impact.   

 3 - Rays and Impacts.   




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetDrawingOptions, fset=__SetDrawingOptions)`

*Defined in `SpeosNX_2512.py` at line 14597*

---

#### `InfiniteRayLength` : str

`public` `static`

Gets or sets the infinite ray length.

Length used to draw infinite rays.   




**Value type**: Double (in mm).  

 **Range**: The value must be superior or equal to 0.0.  




The default value is calculated based on the system bounding box.

**Default value**: `=  property(fget=__GetInfiniteRayLength, fset=__SetInfiniteRayLength)`

*Defined in `SpeosNX_2512.py` at line 14608*

---

#### `NumberOfRays` : str

`public` `static`

Gets or sets the number of rays.

Number of rays calculate.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 200.

**Default value**: `=  property(fget=__GetNumberOfRays, fset=__SetNumberOfRays)`

*Defined in `SpeosNX_2512.py` at line 14619*

---

#### `RejectedFaces` : str

`public` `static`

Gets or sets rejected faces tag.

The RejectedFaces property returns a list of feature tag. 

**Returns**: List of integer.

**Default value**: `=  property(fget=__GetRejectedFaces, fset=__SetRejectedFaces)`

*Defined in `SpeosNX_2512.py` at line 14625*

---

#### `RequiredFaces` : str

`public` `static`

Gets or sets requiered faces tag.

The RequiredFaces property returns a list of feature tag. 

**Returns**: List of integer.

**Default value**: `=  property(fget=__GetRequiredFaces, fset=__SetRequiredFaces)`

*Defined in `SpeosNX_2512.py` at line 14631*

---

#### `RequiredFacesMode` : str

`public` `static`

Gets or sets the required faces mode.

The values are:  

 0 - AND.  

 1 - OR.   




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetRequiredFacesMode, fset=__SetRequiredFacesMode)`

*Defined in `SpeosNX_2512.py` at line 14642*

---

#### `SelectedRaysMode` : str

`public` `static`

Gets or sets the selected rays mode.

The values are:  

 0 - IN.  

 1 - OUT.   




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSelectedRaysMode, fset=__SetSelectedRaysMode)`

*Defined in `SpeosNX_2512.py` at line 14653*

---

## Public Methods

#### `CreateAreaRectangle(self, sensorIndex, xCenter, yCenter, width, height)`

`public`

Create a rectangle area.

**Parameters**:
- `viewerId`: 
index of XMP in the sensor group (must be 0 for non group sensor) : Unsigned integer.  

 



- `xCenter`: 
Center position X of the rectangle area : double.  

 



- `yCenter`: 
Center position Y of the rectangle area : double.  

 



- `width`: 
Width of the rectangle area : double.  

 



- `height`: 
Height of the rectangle area : double.  





The default value is no reactangle area.

*Defined in `SpeosNX_2512.py` at line 14511*

---

#### `CreateAreaEllipse(self, sensorIndex, xCenter, yCenter, xRadius, yRadius)`

`public`

Create an ellipse area.

**Parameters**:
- `viewerId`: 
index of XMP in the sensor group (must be 0 for non group sensor) : Unsigned integer.  

 



- `xCenter`: 
Center position X of the ellipse area : double.  

 



- `yCenter`: 
Center position Y of the ellipse area : double.  

 



- `xRadius`: 
Radius X of the ellipse area : double.  

 



- `yRadius`: 
Radius Y of the ellipse area : double.  





The default value is no reactangle area.

*Defined in `SpeosNX_2512.py` at line 14525*

---

#### `CreateAreaPolygon(self, sensorIndex, xPts, yPts)`

`public`

Create an polygon area.

**Parameters**:
- `viewerId`: 
index of XMP in the sensor group (must be 0 for non group sensor) : Unsigned integer.  

 



- `xPts`: 
List of X position of the polygon area : List of double.  

 



- `yPts`: 
List of X position of the polygon area : List of double.  





The default value is no reactangle area.

*Defined in `SpeosNX_2512.py` at line 14539*

---

#### `RetrieveMeasureValue(self, sensorIndex, measureType)`

`public`

Retrieve measure value.

RetrieveMeasureValue return measure value by Type.  

 

**Parameters**:
- `viewerId`: 
index of XMP in the sensor group (must be 0 for non group sensor) : Unsigned integer.  

 



- `measureType`: 
the type of value to retrieve : Unsigned integer.  

 The values are:  

 1 - Maximum  

 2 - Maximum position X  

 3 - Maximum position Y  

 4 - Minimum  

 5 - Minimum position X  

 6 - Minimum position Y  

 7 - Average  

 8 - Flux  

 9 - Barycentre position X  

 10 - Barycentre position Y  

 11 - Sigma  

 12 - Sigma position X  

 13 - Sigma position Y  

 14 - Contrast  

 15 - RMS Contrast  

 16 - Eye Irradiance  

 17 - Range  

 19 - Range position X  

 2O - Range position Y  

 21 - Area  

 22 - UGR117  

 28 - Deviation Min  

 29 - Deviation Max  

 30 - Deviation Average  

 





**Returns**: the result measure.

*Defined in `SpeosNX_2512.py` at line 14551*

---

## Member Summary

| Member | Type |
|--------|------|
| `CreateAreaEllipse` | public |
| `CreateAreaPolygon` | public |
| `CreateAreaRectangle` | public |
| `DrawingOptions` | public |
| `InfiniteRayLength` | public |
| `NumberOfRays` | public |
| `RejectedFaces` | public |
| `RequiredFaces` | public |
| `RequiredFacesMode` | public |
| `RetrieveMeasureValue` | public |
| `SelectedRaysMode` | public |
| `thisown` | public |
