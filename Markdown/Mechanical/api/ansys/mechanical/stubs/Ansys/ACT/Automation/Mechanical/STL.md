# STL

### *class* STL

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a STL.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportStl`](#STL.ExportStl)                             | Export STL data.                                                                  |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`TranslateX`](#STL.TranslateX)                                                                                     | Gets or sets the TranslateX.                                  |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Color`](#STL.Color)                                                                                               | Gets or sets the Color.                                       |
| [`TranslateY`](#STL.TranslateY)                                                                                     | Gets or sets the TranslateY.                                  |
| [`TranslateZ`](#STL.TranslateZ)                                                                                     | Gets or sets the TranslateZ.                                  |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`FileName`](#STL.FileName)                                                                                         | Gets or sets the FileName.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
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

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import STL
```

## Property detail

### *property* STL.TranslateX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslateX.

<!-- !! processed by numpydoc !! -->

### *property* STL.Color *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Color.

<!-- !! processed by numpydoc !! -->

### *property* STL.TranslateY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslateY.

<!-- !! processed by numpydoc !! -->

### *property* STL.TranslateZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslateZ.

<!-- !! processed by numpydoc !! -->

### *property* STL.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryFileContainerAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* STL.FileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FileName.

<!-- !! processed by numpydoc !! -->

### *property* STL.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* STL.Statistics *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Statistics.

<!-- !! processed by numpydoc !! -->

### *property* STL.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

### *property* STL.ShowAlways *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAlways.

<!-- !! processed by numpydoc !! -->

### *property* STL.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* STL.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* STL.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* STL.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* STL.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* STL.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* STL.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* STL.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* STL.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### STL.ExportStl(filename: System.String, progress: [Ansys.Mechanical.Application.Progress](../../../Mechanical/Application/Progress.md#Progress))

Export STL data.

<!-- !! processed by numpydoc !! -->

### STL.ImportSTL()

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

### STL.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### STL.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### STL.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### STL.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### STL.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### STL.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### STL.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### STL.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### STL.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### STL.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### STL.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### STL.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### STL.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### STL.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### STL.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### STL.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
