# STL

<a id="STL"></a>

### *class* STL

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a STL.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportStl`](#STL.ExportStl)                             | Export STL data.                                                                  |
| [`ImportSTL`](#STL.ImportSTL)                             | Run the ImportSTL action.                                                         |
| [`Delete`](#STL.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#STL.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#STL.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#STL.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#STL.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#STL.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#STL.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#STL.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#STL.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#STL.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#STL.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#STL.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#STL.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#STL.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`TranslateX`](#STL.TranslateX)                                                                                     | Gets or sets the TranslateX.                                  |
| [`Color`](#STL.Color)                                                                                               | Gets or sets the Color.                                       |
| [`TranslateY`](#STL.TranslateY)                                                                                     | Gets or sets the TranslateY.                                  |
| [`TranslateZ`](#STL.TranslateZ)                                                                                     | Gets or sets the TranslateZ.                                  |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`FileName`](#STL.FileName)                                                                                         | Gets or sets the FileName.                                    |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Statistics`](#STL.Statistics)                                                                                     | Gets the Statistics.                                          |
| [`LengthUnits`](#STL.LengthUnits)                                                                                   | Gets or sets the LengthUnits.                                 |
| [`ShowAlways`](#STL.ShowAlways)                                                                                     | Gets or sets the ShowAlways.                                  |
| [`Suppressed`](#STL.Suppressed)                                                                                     | Gets or sets the Suppressed.                                  |
| [`Children`](#STL.Children)                                                                                         | Gets the list of children.                                    |
| [`Comments`](#STL.Comments)                                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#STL.Figures)                                                                                           | Gets the list of associated figures.                          |
| [`Images`](#STL.Images)                                                                                             | Gets the list of associated images.                           |
| [`ReadOnly`](#STL.ReadOnly)                                                                                         | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#STL.Properties)                                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#STL.VisibleProperties)                                                                       | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import STL
```

<a id="property-detail"></a>

## Property detail

<a id="STL.TranslateX"></a>

### *property* STL.TranslateX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslateX.

<!-- !! processed by numpydoc !! -->

<a id="STL.Color"></a>

### *property* STL.Color *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Color.

<!-- !! processed by numpydoc !! -->

<a id="STL.TranslateY"></a>

### *property* STL.TranslateY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslateY.

<!-- !! processed by numpydoc !! -->

<a id="STL.TranslateZ"></a>

### *property* STL.TranslateZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslateZ.

<!-- !! processed by numpydoc !! -->

<a id="STL.InternalObject"></a>

### *property* STL.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryFileContainerAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="STL.FileName"></a>

### *property* STL.FileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FileName.

<!-- !! processed by numpydoc !! -->

<a id="STL.DataModelObjectCategory"></a>

### *property* STL.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="STL.Statistics"></a>

### *property* STL.Statistics *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Statistics.

<!-- !! processed by numpydoc !! -->

<a id="STL.LengthUnits"></a>

### *property* STL.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](./../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="STL.ShowAlways"></a>

### *property* STL.ShowAlways *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAlways.

<!-- !! processed by numpydoc !! -->

<a id="STL.Suppressed"></a>

### *property* STL.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="STL.Children"></a>

### *property* STL.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="STL.Comments"></a>

### *property* STL.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="STL.Figures"></a>

### *property* STL.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="STL.Images"></a>

### *property* STL.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="STL.ReadOnly"></a>

### *property* STL.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* STL.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="STL.Properties"></a>

### *property* STL.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="STL.VisibleProperties"></a>

### *property* STL.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="STL.ExportStl"></a>

### STL.ExportStl(filename: System.String, progress: [Ansys.Mechanical.Application.Progress](./../../../Mechanical/Application/Progress.md#Progress))

Export STL data.

<!-- !! processed by numpydoc !! -->

<a id="STL.ImportSTL"></a>

### STL.ImportSTL()

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

<a id="STL.Delete"></a>

### STL.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetChildren"></a>

### STL.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### STL.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="STL.AddComment"></a>

### STL.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="STL.AddFigure"></a>

### STL.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="STL.AddImage"></a>

### STL.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="STL.Activate"></a>

### STL.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="STL.CopyTo"></a>

### STL.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="STL.Duplicate"></a>

### STL.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="STL.GroupAllSimilarChildren"></a>

### STL.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="STL.GroupSimilarObjects"></a>

### STL.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="STL.PropertyByName"></a>

### STL.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="STL.PropertyByAPIName"></a>

### STL.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="STL.CreateParameter"></a>

### STL.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetParameter"></a>

### STL.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="STL.RemoveParameter"></a>

### STL.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
