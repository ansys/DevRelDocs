# Timezone

## Description

Represents a Timezone.

## Member Summary

| Member | Type | Description |
| --- | --- | --- |
| [UserDefinedLocation](#userdefinedlocation) | public | Gets or sets the property to enable/disable the user defined location. |
| [Location](#location) | public | Gets or sets a predefined location. |
| [TimezoneId](#timezoneid) | public | Gets or sets a timezone by Id. |
| [LongitudeDegrees](#longitudedegrees) | public | Gets or sets the longitude degrees. |
| [LongitudeMinutes](#longitudeminutes) | public | Gets or sets the longitude minutes. |
| [LongitudeSeconds](#longitudeseconds) | public | Gets or sets the longitude seconds. |
| [LatitudeDegrees](#latitudedegrees) | public | Gets or sets the latitude degrees. |
| [LatitudeMinutes](#latitudeminutes) | public | Gets or sets the latitude minutes. |
| [LatitudeSeconds](#latitudeseconds) | public | Gets or sets the latitude seconds. |
| [Year](#year) | public | Gets or sets the year. |
| [Month](#month) | public | Gets or sets the month. |
| [Day](#day) | public | Gets or sets the day. |
| [Hour](#hour) | public | Gets or sets the hour. |
| [Minute](#minute) | public | Gets or sets the minute. |

## Public Static Attributes

### UserDefinedLocation

`bool UserDefinedLocation`

Gets or sets the property to enable/disable the user defined location.

True: Sets the timezone, the Earth coordinates date and time manually.  
False: Uses predefined location.  
  
**Value type**: Boolean.  
  
The default value is False.

---

### Location

`str Location`

Gets or sets a predefined location.

**Prerequisite**: The UserDefinedLocation property must be False.  
  
**Value type**: String.  
  
The default value is "ANSYS, France".

---

### TimezoneId

`str TimezoneId`

Gets or sets a timezone by Id.

The property UserDefinedLocation must be True.  
  
**Value type**: String.  
  
The default value is "CET".

---

### LongitudeDegrees

`int LongitudeDegrees`

Gets or sets the longitude degrees.

**Prerequisite**: The UserDefinedLocation property must be True.  
  
**Value type**: Integer (in degrees).  
  
The default value is 6 degrees.

---

### LongitudeMinutes

`int LongitudeMinutes`

Gets or sets the longitude minutes.

**Prerequisite**: The UserDefinedLocation property must be True.  
  
**Value type**: Integer (in minute).  
  
The default value is 2 minutes.

---

### LongitudeSeconds

`int LongitudeSeconds`

Gets or sets the longitude seconds.

**Prerequisite**: The UserDefinedLocation property must be True.  
  
**Value type**: Integer (in second).  
  
The default value is 56 seconds.

---

### LatitudeDegrees

`int LatitudeDegrees`

Gets or sets the latitude degrees.

**Prerequisite**: The UserDefinedLocation property must be True.  
  
**Value type**: Integer (in degrees).  
  
The default value is 43 degrees.

---

### LatitudeMinutes

`int LatitudeMinutes`

Gets or sets the latitude minutes.

**Prerequisite**: The UserDefinedLocation property must be True.  
  
**Value type**: Integer (in minute).  
  
The default value is 9 minutes.

---

### LatitudeSeconds

`int LatitudeSeconds`

Gets or sets the latitude seconds.

**Prerequisite**: The UserDefinedLocation property must be True.  
  
**Value type**: Integer (in second).  
  
The default value is 12 seconds.

---

### Year

`int Year`

Gets or sets the year.

**Value type**: Integer (in year).  
**Range**: The value must be superior to 0.  
  
The default value is the current Year.

---

### Month

`int Month`

Gets or sets the month.

**Value type**: Integer.  
**Range**: [1, 12] (in month).  
  
The default value is the current month.

---

### Day

`int Day`

Gets or sets the day.

**Value type**: Integer.  
**Range**: [1, 31] (in day).  
  
The default value is the current day.

---

### Hour

`int Hour`

Gets or sets the hour.

**Value type**: Integer.  
**Range**: [0, 24] (in hour).  
  
The default value is the current hour.

---

### Minute

`int Minute`

Gets or sets the minute.

**Value type**: Integer.  
**Range**: [0, 59] (in minute).  
  
The default value is the current minute.
