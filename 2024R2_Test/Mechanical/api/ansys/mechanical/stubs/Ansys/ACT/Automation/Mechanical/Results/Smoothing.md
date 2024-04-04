# Smoothing

### *class* Smoothing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Smoothing.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Evaluate`](#Smoothing.Evaluate)                               | Run the Evaluate action.                                                          |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ImportSTL`](#Smoothing.ImportSTL)                             | Run the ImportSTL action.                                                         |
| [`Delete`](#Smoothing.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Smoothing.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Smoothing.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Smoothing.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Smoothing.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Smoothing.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Smoothing.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Smoothing.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Smoothing.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Smoothing.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Smoothing.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Smoothing.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Smoothing.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Smoothing.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`MoveLimit`](#Smoothing.MoveLimit)                                                                                    | Gets or sets the MoveLimit.                                   |
| [`FileName`](#Smoothing.FileName)                                                                                      | Gets the FileName.                                            |
| [`ExportModel`](#Smoothing.ExportModel)                                                                                | Gets or sets the ExportModel.                                 |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Statistics`](#Smoothing.Statistics)                                                                                  | Gets the Statistics.                                          |
| [`LengthUnits`](#Smoothing.LengthUnits)                                                                                | Gets or sets the LengthUnits.                                 |
| [`ShowAlways`](#Smoothing.ShowAlways)                                                                                  | Gets or sets the ShowAlways.                                  |
| [`Suppressed`](#Smoothing.Suppressed)                                                                                  | Gets or sets the Suppressed.                                  |
| [`Children`](#Smoothing.Children)                                                                                      | Gets the list of children.                                    |
| [`Comments`](#Smoothing.Comments)                                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#Smoothing.Figures)                                                                                        | Gets the list of associated figures.                          |
| [`Images`](#Smoothing.Images)                                                                                          | Gets the list of associated images.                           |
| [`ReadOnly`](#Smoothing.ReadOnly)                                                                                      | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Smoothing.Properties)                                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Smoothing.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results import Smoothing
```

## Property detail

### *property* Smoothing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryFileContainerAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.MoveLimit *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MoveLimit.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.FileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FileName.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.ExportModel *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportModel.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.Statistics *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Statistics.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.ShowAlways *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAlways.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Smoothing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Smoothing.Evaluate()

Run the Evaluate action.

<!-- !! processed by numpydoc !! -->

### Smoothing.ImportSTL()

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

### Smoothing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Smoothing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Smoothing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Smoothing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Smoothing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Smoothing.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Smoothing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Smoothing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Smoothing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Smoothing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Smoothing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Smoothing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Smoothing.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Smoothing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Smoothing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Smoothing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
