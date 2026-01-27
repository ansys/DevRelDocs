---
uid: export_as_geometry_builder
title: ExportAsGeometryBuilder
---

# ExportAsGeometryBuilder

**Full Name**: `SpeosNX_2512::ExportAsGeometryBuilder`

**Language**: Python

**Inherits from**: `Builder`

## Description

Represents a Export As Geometry Builder.

The Export As Geometry Builder export feature visualization as geometry.   




To create a new instance of this class, use FeatureCollection.CreateExportAsGeometryBuilder.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 11722*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 11726*

---

## Public Static Attributes

#### `ExportComponent` : str

`public` `static`

Gets or sets the component used to export geometry.

**Prerequisite**: ExportMode must be 0 to set Component.  

 The Features property takes and returns a list of feature objects.  




**Value type**: Component tag.  




The default value is an empty.

**Default value**: `=  property(fget=__GetExportComponent, fset=__SetExportComponent)`

*Defined in `SpeosNX_2512.py` at line 11773*

---

#### `ExportMode` : str

`public` `static`

Gets or sets the export mode.

The values are:  

 0 - Export to a new part.  

 1 - Export to an existing part.   




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetExportMode, fset=__SetExportMode)`

*Defined in `SpeosNX_2512.py` at line 11784*

---

#### `ExportTemplateName` : str

`public` `static`

Gets or sets the template name.

**Prerequisite**: The UseExportTemplate property must be True and ExportMode must be 0.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetExportTemplateName, fset=__SetExportTemplateName)`

*Defined in `SpeosNX_2512.py` at line 11793*

---

#### `Features` : str

`public` `static`

Gets or sets features to export as geometry.

The Features property takes and returns a list of feature objects.  




**Value type**: List of Feature objects.  




The default value is an empty list.

**Default value**: `=  property(fget=__GetFeatures, fset=__SetFeatures)`

*Defined in `SpeosNX_2512.py` at line 11802*

---

#### `PartName` : str

`public` `static`

Gets or sets the part name.

**Prerequisite**: The ExportMode property must be 0.  




**Value type**: String.  




The default value is Speos Export Part.

**Default value**: `=  property(fget=__GetPartName, fset=__SetPartName)`

*Defined in `SpeosNX_2512.py` at line 11811*

---

#### `UseExportTemplate` : str

`public` `static`

Gets or sets the Part template activation .

True: Use Part template.  

 False: Does not use Part template.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseExportTemplate, fset=__SetUseExportTemplate)`

*Defined in `SpeosNX_2512.py` at line 11822*

---

## Member Summary

| Member | Type |
|--------|------|
| `ExportComponent` | public |
| `ExportMode` | public |
| `ExportTemplateName` | public |
| `Features` | public |
| `PartName` | public |
| `UseExportTemplate` | public |
| `thisown` | public |
