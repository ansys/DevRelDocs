# `GeometryImport`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.GeometryImport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GeometryImport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GeometryImport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#GeometryImport.Activate)                               | Activate the current object.                                                                                            |
| [`AddComment`](#GeometryImport.AddComment)                           | Creates a new child Comment.                                                                                            |
| [`AddFigure`](#GeometryImport.AddFigure)                             | Creates a new child Figure.                                                                                             |
| [`AddImage`](#GeometryImport.AddImage)                               | Creates a new child Image.                                                                                              |
| [`CopyTo`](#GeometryImport.CopyTo)                                   | Copies all visible properties from this object to another.                                                              |
| [`CreateParameter`](#GeometryImport.CreateParameter)                 | Creates a new parameter for a Property.                                                                                 |
| [`Duplicate`](#GeometryImport.Duplicate)                             | Creates a copy of the current DataModelObject.                                                                          |
| [`GetChildren`](#GeometryImport.GetChildren)                         | Gets the list of children, filtered by type.                                                                            |
| [`GetFormat`](#GeometryImport.GetFormat)                             | Gets the format of the geometry file/data for the most recent import.                                                   |
| [`GetGeometryURI`](#GeometryImport.GetGeometryURI)                   | Gets the Geometry URI for the most recent import. The Universal Resource Identifier,                                    |
| [`GetParameter`](#GeometryImport.GetParameter)                       | Gets the parameter corresponding to the given property.                                                                 |
| [`GetPreferences`](#GeometryImport.GetPreferences)                   | Gets the preferences for most recent import operations with the geometry file/data.                                     |
| [`GroupAllSimilarChildren`](#GeometryImport.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                                                 |
| [`GroupSimilarObjects`](#GeometryImport.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                                                     |
| [`Import`](#GeometryImport.Import)                                   | Import/reload geometry from the CAD file using the provided preferences. <br/><br/>```<br/>**<br/>```<br/><br/>\* If no |
| [`PropertyByAPIName`](#GeometryImport.PropertyByAPIName)             | Get a property by its API name.                                                                                         |
| [`PropertyByName`](#GeometryImport.PropertyByName)                   | Get a property by its unique name.                                                                                      |
| [`RemoveParameter`](#GeometryImport.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.                                       |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#GeometryImport.Children)                               | Gets the list of children.                                    |
| [`Comments`](#GeometryImport.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#GeometryImport.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#GeometryImport.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#GeometryImport.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#GeometryImport.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Parts`](#GeometryImport.Parts)                                     | List of parts created by the most recent import operation.    |
| [`Properties`](#GeometryImport.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GeometryImport.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GeometryImport.Children"></a>

### *property* GeometryImport.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Comments"></a>

### *property* GeometryImport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.DataModelObjectCategory"></a>

### *property* GeometryImport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Figures"></a>

### *property* GeometryImport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Images"></a>

### *property* GeometryImport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.InternalObject"></a>

### *property* GeometryImport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryImportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Parts"></a>

### *property* GeometryImport.Parts *: List[Any] | [None](https://docs.python.org/3/library/constants.html#None)*

List of parts created by the most recent import operation.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Properties"></a>

### *property* GeometryImport.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.VisibleProperties"></a>

### *property* GeometryImport.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryImport.Activate"></a>

### GeometryImport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.AddComment"></a>

### GeometryImport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.AddFigure"></a>

### GeometryImport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.AddImage"></a>

### GeometryImport.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.CopyTo"></a>

### GeometryImport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.CreateParameter"></a>

### GeometryImport.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Duplicate"></a>

### GeometryImport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetChildren"></a>

### GeometryImport.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetFormat"></a>

### GeometryImport.GetFormat()

Gets the format of the geometry file/data for the most recent import.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetGeometryURI"></a>

### GeometryImport.GetGeometryURI()

```text
Gets the Geometry URI for the most recent import. The Universal Resource Identifier,
which on disk would be "file://..."
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetParameter"></a>

### GeometryImport.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetPreferences"></a>

### GeometryImport.GetPreferences()

Gets the preferences for most recent import operations with the geometry file/data.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GroupAllSimilarChildren"></a>

### GeometryImport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GroupSimilarObjects"></a>

### GeometryImport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Import"></a>

### GeometryImport.Import(geometryURI: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.Format](../../../Mechanical/DataModel/Enums/GeometryImportPreference/Format.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.Format), preferences: [Ansys.ACT.Mechanical.Utilities.GeometryImportPreferences](../../Mechanical/Utilities/GeometryImportPreferences.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Utilities.GeometryImportPreferences))

```text
Import/reload geometry from the CAD file using the provided preferences. *** If no
preference argument is provided, i.e., null is used (also the default argument), then
default values from Mechanical preferences will be used (Mechanical: File -> Options:
Import; this will need to be implemented). Previously used preferences are always purged
during an import operation. *** The parts will be read into the Geometry.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.PropertyByAPIName"></a>

### GeometryImport.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.PropertyByName"></a>

### GeometryImport.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.RemoveParameter"></a>

### GeometryImport.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

