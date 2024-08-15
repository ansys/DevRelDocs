# `GeometryImport`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.GeometryImport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GeometryImport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------|
| `GetGeometryURI`          | Gets the Geometry URI for the most recent import. The Universal Resource Identifier,                                    |
| `GetFormat`               | Gets the format of the geometry file/data for the most recent import.                                                   |
| `GetPreferences`          | Gets the preferences for most recent import operations with the geometry file/data.                                     |
| `Import`                  | Import/reload geometry from the CAD file using the provided preferences. <br/><br/>```<br/>**<br/>```<br/><br/>\* If no |
| `GetChildren`             | Gets the list of children, filtered by type.                                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                                                            |
| `AddComment`              | Creates a new child Comment.                                                                                            |
| `AddFigure`               | Creates a new child Figure.                                                                                             |
| `AddImage`                | Creates a new child Image.                                                                                              |
| `Activate`                | Activate the current object.                                                                                            |
| `CopyTo`                  | Copies all visible properties from this object to another.                                                              |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                                                          |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                                                                 |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                                                                     |
| `PropertyByName`          | Get a property by its unique name.                                                                                      |
| `PropertyByAPIName`       | Get a property by its API name.                                                                                         |
| `CreateParameter`         | Creates a new parameter for a Property.                                                                                 |
| `GetParameter`            | Gets the parameter corresponding to the given property.                                                                 |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property.                                       |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `Parts`                   | List of parts created by the most recent import operation.    |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* GeometryImport.Parts *: System.Collections.Generic.IList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

List of parts created by the most recent import operation.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryImportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImport.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### GeometryImport.GetGeometryURI()

```text
Gets the Geometry URI for the most recent import. The Universal Resource Identifier,
which on disk would be "file://..."
```

<!-- !! processed by numpydoc !! -->

### GeometryImport.GetFormat()

Gets the format of the geometry file/data for the most recent import.

<!-- !! processed by numpydoc !! -->

### GeometryImport.GetPreferences()

Gets the preferences for most recent import operations with the geometry file/data.

<!-- !! processed by numpydoc !! -->

### GeometryImport.Import(geometryURI: System.String, format: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.Format](../../../Mechanical/DataModel/Enums/GeometryImportPreference/Format.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.Format), preferences: [Ansys.ACT.Mechanical.Utilities.GeometryImportPreferences](../../Mechanical/Utilities/GeometryImportPreferences.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Utilities.GeometryImportPreferences))

```text
Import/reload geometry from the CAD file using the provided preferences. *** If no
preference argument is provided, i.e., null is used (also the default argument), then
default values from Mechanical preferences will be used (Mechanical: File -> Options:
Import; this will need to be implemented). Previously used preferences are always purged
during an import operation. *** The parts will be read into the Geometry.
```

<!-- !! processed by numpydoc !! -->

### GeometryImport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeometryImport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeometryImport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### GeometryImport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### GeometryImport.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### GeometryImport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### GeometryImport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### GeometryImport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### GeometryImport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### GeometryImport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### GeometryImport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### GeometryImport.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### GeometryImport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### GeometryImport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### GeometryImport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

