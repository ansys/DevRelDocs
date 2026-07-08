# `STL`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.STL"></a>

#### *class* Ansys.ACT.Automation.Mechanical.STL

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a STL.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#STL.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#STL.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#STL.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#STL.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#STL.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#STL.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#STL.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#STL.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`ExportStl`](#STL.ExportStl)                             | Export STL data.                                                                  |
| [`GetChildren`](#STL.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#STL.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#STL.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#STL.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`ImportSTL`](#STL.ImportSTL)                             | Run the ImportSTL action.                                                         |
| [`PropertyByAPIName`](#STL.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#STL.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#STL.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#STL.Children)                               | Gets the list of children.                                    |
| [`Color`](#STL.Color)                                     | Gets or sets the Color.                                       |
| [`Comments`](#STL.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#STL.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#STL.Figures)                                 | Gets the list of associated figures.                          |
| [`FileName`](#STL.FileName)                               | Gets or sets the FileName.                                    |
| [`Images`](#STL.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#STL.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LengthUnits`](#STL.LengthUnits)                         | Gets or sets the LengthUnits.                                 |
| [`Properties`](#STL.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#STL.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`ShowAlways`](#STL.ShowAlways)                           | Gets or sets the ShowAlways.                                  |
| [`Statistics`](#STL.Statistics)                           | Gets the Statistics.                                          |
| [`Suppressed`](#STL.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TranslateX`](#STL.TranslateX)                           | Gets or sets the TranslateX.                                  |
| [`TranslateY`](#STL.TranslateY)                           | Gets or sets the TranslateY.                                  |
| [`TranslateZ`](#STL.TranslateZ)                           | Gets or sets the TranslateZ.                                  |
| [`VisibleProperties`](#STL.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="STL.Children"></a>

### *property* STL.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="STL.Color"></a>

### *property* STL.Color *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Color.

<!-- !! processed by numpydoc !! -->

<a id="STL.Comments"></a>

### *property* STL.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="STL.DataModelObjectCategory"></a>

### *property* STL.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="STL.Figures"></a>

### *property* STL.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="STL.FileName"></a>

### *property* STL.FileName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FileName.

<!-- !! processed by numpydoc !! -->

<a id="STL.Images"></a>

### *property* STL.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="STL.InternalObject"></a>

### *property* STL.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryFileContainerAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="STL.LengthUnits"></a>

### *property* STL.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="STL.Properties"></a>

### *property* STL.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="STL.ReadOnly"></a>

### *property* STL.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="STL.ShowAlways"></a>

### *property* STL.ShowAlways *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAlways.

<!-- !! processed by numpydoc !! -->

<a id="STL.Statistics"></a>

### *property* STL.Statistics *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Statistics.

<!-- !! processed by numpydoc !! -->

<a id="STL.Suppressed"></a>

### *property* STL.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="STL.TranslateX"></a>

### *property* STL.TranslateX *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslateX.

<!-- !! processed by numpydoc !! -->

<a id="STL.TranslateY"></a>

### *property* STL.TranslateY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslateY.

<!-- !! processed by numpydoc !! -->

<a id="STL.TranslateZ"></a>

### *property* STL.TranslateZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslateZ.

<!-- !! processed by numpydoc !! -->

<a id="STL.VisibleProperties"></a>

### *property* STL.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="STL.Activate"></a>

### STL.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="STL.AddComment"></a>

### STL.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="STL.AddFigure"></a>

### STL.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="STL.AddImage"></a>

### STL.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="STL.CopyTo"></a>

### STL.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="STL.CreateParameter"></a>

### STL.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="STL.Delete"></a>

### STL.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="STL.Duplicate"></a>

### STL.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="STL.ExportStl"></a>

### STL.ExportStl(filename: [str](https://docs.python.org/3/library/stdtypes.html#str), progress: [Ansys.Mechanical.Application.Progress](../../../Mechanical/Application/Progress.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Application.Progress)) → [None](https://docs.python.org/3/library/constants.html#None)

Export STL data.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetChildren"></a>

### STL.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetParameter"></a>

### STL.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="STL.GroupAllSimilarChildren"></a>

### STL.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="STL.GroupSimilarObjects"></a>

### STL.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="STL.ImportSTL"></a>

### STL.ImportSTL() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

<a id="STL.PropertyByAPIName"></a>

### STL.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="STL.PropertyByName"></a>

### STL.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="STL.RemoveParameter"></a>

### STL.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

