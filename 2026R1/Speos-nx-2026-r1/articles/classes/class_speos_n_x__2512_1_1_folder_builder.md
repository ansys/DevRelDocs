# FolderBuilder

**Full Name**: `SpeosNX_2512::FolderBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a Folder Builder.

The Folder Builder creates or edits Folder features.   




To create a new instance of this class, use FeatureCollection.CreateFolderBuilder.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 13959*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 13963*

---

## Public Static Attributes

#### `Category` : str

`public` `static`

Gets or sets the category type of the folder.

The values are:   

 0 - None.  

 1 - Properties.  

 2 - Sources.  

 3 - Sensors.  

 4 - Simulations.  




**Value type: Integer.  

**


** The default value is None (0). A category type other than None (0) must be defined. **

**Default value**: `=  property(fset=__SetCategory)`

*Defined in `SpeosNX_2512.py` at line 14021*

---

#### `Features` : str

`public` `static`

Gets or sets features belonging to this folder.

The Features property takes and returns a list of feature objects.  




**Value type**: List of Feature objects.  




The default value is an empty list.

**Default value**: `=  property(fget=__GetFeatures, fset=__SetFeatures)`

*Defined in `SpeosNX_2512.py` at line 14030*

---

## Public Methods

#### `Remove(self, *args)`

`public`

Removes the specified feature object from the folder.

The specified feature object must be a member of the folder to be removed from it. 

**Parameters**:
- `feature`: 
the feature object.

*Defined in `SpeosNX_2512.py` at line 13972*

---

#### `Add(self, feature)`

`public`

Adds the specified feature object into the folder.

**Parameters**:
- `feature`: 
the feature object.  

 





**Returns**: True if successfully added into the folder; Otherwise, returns False.

*Defined in `SpeosNX_2512.py` at line 13981*

---

#### `Insert(self, feature, after=None)`

`public`

Inserts the specified feature object into the folder after another specified feature.

**Parameters**:
- `feature`: 
the feature object to add.  

 



- `after`: 
a feature object after which the feature object should be insert.  

 





**Returns**: True if successfully inserted into the folder; Otherwise, returns False.

*Defined in `SpeosNX_2512.py` at line 13989*

---

#### `IsCompatible(self, feature)`

`public`

Checks if the specified feature object is compatible with this folder.

**Parameters**:
- `feature`: 
the feature object.  

 





**Returns**: True if the specified feature object is compatible with this folder; Otherwise, returns False.

*Defined in `SpeosNX_2512.py` at line 13998*

---

## Member Summary

| Member | Type |
|--------|------|
| `Add` | public |
| `Category` | public |
| `Features` | public |
| `Insert` | public |
| `IsCompatible` | public |
| `Remove` | public |
| `thisown` | public |
