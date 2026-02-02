# Timezone

**Full Name**: `SpeosNX_2512::Timezone`

**Language**: Python

**Inherits from**: `object`

## Description

Represents a Timezone.

This class cannot be instantiated.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 11349*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 11353*

---

## Public Static Attributes

#### `Day` : str

`public` `static`

Gets or sets the day.

**Value type**: Integer.  

 **Range**: [1, 31] (in day).  




The default value is the current day.

**Default value**: `=  property(fget=__GetDay, fset=__SetDay)`

*Defined in `SpeosNX_2512.py` at line 11445*

---

#### `Hour` : str

`public` `static`

Gets or sets the hour.

**Value type**: Integer.  

 **Range**: [0, 24] (in hour).  




The default value is the current hour.

**Default value**: `=  property(fget=__GetHour, fset=__SetHour)`

*Defined in `SpeosNX_2512.py` at line 11453*

---

#### `LatitudeDegrees` : str

`public` `static`

Gets or sets the latitude degrees.

Prerequisite: The UserDefinedLocation property must be True.  




**Value type**: Integer (in degrees).  




The default value is 43 degrees.

**Default value**: `=  property(fget=__GetLatitudeDegrees, fset=__SetLatitudeDegrees)`

*Defined in `SpeosNX_2512.py` at line 11462*

---

#### `LatitudeMinutes` : str

`public` `static`

Gets or sets the latitude minutes.

Prerequisite: The UserDefinedLocation property must be True.  




**Value type**: Integer (in minute).  




The default value is 9 minutes.

**Default value**: `=  property(fget=__GetLatitudeMinutes, fset=__SetLatitudeMinutes)`

*Defined in `SpeosNX_2512.py` at line 11471*

---

#### `LatitudeSeconds` : str

`public` `static`

Gets or sets the latitude seconds.

Prerequisite: The UserDefinedLocation property must be True.  




**Value type**: Integer (in second).  




The default value is 12 seconds.

**Default value**: `=  property(fget=__GetLatitudeSeconds, fset=__SetLatitudeSeconds)`

*Defined in `SpeosNX_2512.py` at line 11480*

---

#### `Location` : str

`public` `static`

Gets or sets a predefined location.

Prerequisite: The UserDefinedLocation property must be False.  




**Value type**: String.  




The default value is "ANSYS, France".

**Default value**: `=  property(fget=__GetLocation, fset=__SetLocation)`

*Defined in `SpeosNX_2512.py` at line 11489*

---

#### `LongitudeDegrees` : str

`public` `static`

Gets or sets the longitude degrees.

Prerequisite: The UserDefinedLocation property must be True.  




**Value type**: Integer (in degrees).  




The default value is 6 degrees.

**Default value**: `=  property(fget=__GetLongitudeDegrees, fset=__SetLongitudeDegrees)`

*Defined in `SpeosNX_2512.py` at line 11498*

---

#### `LongitudeMinutes` : str

`public` `static`

Gets or sets the longitude minutes.

Prerequisite: The UserDefinedLocation property must be True.  




**Value type**: Integer (in minute).  




The default value is 2 minutes.

**Default value**: `=  property(fget=__GetLongitudeMinutes, fset=__SetLongitudeMinutes)`

*Defined in `SpeosNX_2512.py` at line 11507*

---

#### `LongitudeSeconds` : str

`public` `static`

Gets or sets the longitude seconds.

Prerequisite: The UserDefinedLocation property must be True.  




**Value type**: Integer (in second).  




The default value is 56 seconds.

**Default value**: `=  property(fget=__GetLongitudeSeconds, fset=__SetLongitudeSeconds)`

*Defined in `SpeosNX_2512.py` at line 11516*

---

#### `Minute` : str

`public` `static`

Gets or sets the minute.

**Value type**: Integer.  

 **Range**: [0, 59] (in minute).  




The default value is the current minute.

**Default value**: `=  property(fget=__GetMinute, fset=__SetMinute)`

*Defined in `SpeosNX_2512.py` at line 11524*

---

#### `Month` : str

`public` `static`

Gets or sets the month.

**Value type**: Integer.  

 **Range**: [1, 12] (in month).  




The default value is the current month.

**Default value**: `=  property(fget=__GetMonth, fset=__SetMonth)`

*Defined in `SpeosNX_2512.py` at line 11532*

---

#### `TimezoneId` : str

`public` `static`

Gets or sets a timezone by Id.

The property UserDefinedLocation must be True.  




**Value type**: String.  




The default value is "CET".

**Default value**: `=  property(fget=__GetTimezoneId, fset=__SetTimezoneId)`

*Defined in `SpeosNX_2512.py` at line 11541*

---

#### `UserDefinedLocation` : str

`public` `static`

Gets or sets the property to enable/disable the user defined location.

True: Sets the timezone, the Earth coordinates date and time manually.  

 False: Uses predefined location.


**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUserDefinedLocation, fset=__SetUserDefinedLocation)`

*Defined in `SpeosNX_2512.py` at line 11551*

---

#### `Year` : str

`public` `static`

Gets or sets the year.

**Value type**: Integer (in year).  

 **Range**: The value must be superior to 0.  




The default value is the current Year.

**Default value**: `=  property(fget=__GetYear, fset=__SetYear)`

*Defined in `SpeosNX_2512.py` at line 11559*

---

## Member Summary

| Member | Type |
|--------|------|
| `Day` | public |
| `Hour` | public |
| `LatitudeDegrees` | public |
| `LatitudeMinutes` | public |
| `LatitudeSeconds` | public |
| `Location` | public |
| `LongitudeDegrees` | public |
| `LongitudeMinutes` | public |
| `LongitudeSeconds` | public |
| `Minute` | public |
| `Month` | public |
| `TimezoneId` | public |
| `UserDefinedLocation` | public |
| `Year` | public |
| `thisown` | public |
