# GeometryFileContainer

<a id="GeometryFileContainer"></a>

### *class* GeometryFileContainer

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GeometryFileContainer.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ImportSTL`](#GeometryFileContainer.ImportSTL)                             | Run the ImportSTL action.                                                         |
| [`Delete`](#GeometryFileContainer.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#GeometryFileContainer.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GeometryFileContainer.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GeometryFileContainer.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#GeometryFileContainer.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#GeometryFileContainer.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GeometryFileContainer.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GeometryFileContainer.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GeometryFileContainer.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GeometryFileContainer.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GeometryFileContainer.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#GeometryFileContainer.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GeometryFileContainer.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GeometryFileContainer.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Statistics`](#GeometryFileContainer.Statistics)                                                                   | Gets the Statistics.                                          |
| [`LengthUnits`](#GeometryFileContainer.LengthUnits)                                                                 | Gets or sets the LengthUnits.                                 |
| [`ShowAlways`](#GeometryFileContainer.ShowAlways)                                                                   | Gets or sets the ShowAlways.                                  |
| [`Suppressed`](#GeometryFileContainer.Suppressed)                                                                   | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#GeometryFileContainer.Children)                                                                       | Gets the list of children.                                    |
| [`Comments`](#GeometryFileContainer.Comments)                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#GeometryFileContainer.Figures)                                                                         | Gets the list of associated figures.                          |
| [`Images`](#GeometryFileContainer.Images)                                                                           | Gets the list of associated images.                           |
| [`ReadOnly`](#GeometryFileContainer.ReadOnly)                                                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GeometryFileContainer.Properties)                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GeometryFileContainer.VisibleProperties)                                                     | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import GeometryFileContainer
```

<a id="property-detail"></a>

## Property detail

<a id="GeometryFileContainer.InternalObject"></a>

### *property* GeometryFileContainer.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryFileContainerAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Statistics"></a>

### *property* GeometryFileContainer.Statistics *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Statistics.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.LengthUnits"></a>

### *property* GeometryFileContainer.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](./../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ShowAlways"></a>

### *property* GeometryFileContainer.ShowAlways *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAlways.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Suppressed"></a>

### *property* GeometryFileContainer.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.DataModelObjectCategory"></a>

### *property* GeometryFileContainer.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Children"></a>

### *property* GeometryFileContainer.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Comments"></a>

### *property* GeometryFileContainer.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Figures"></a>

### *property* GeometryFileContainer.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Images"></a>

### *property* GeometryFileContainer.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ReadOnly"></a>

### *property* GeometryFileContainer.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* GeometryFileContainer.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Properties"></a>

### *property* GeometryFileContainer.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.VisibleProperties"></a>

### *property* GeometryFileContainer.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryFileContainer.ImportSTL"></a>

### GeometryFileContainer.ImportSTL()

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Delete"></a>

### GeometryFileContainer.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetChildren"></a>

### GeometryFileContainer.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### GeometryFileContainer.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.AddComment"></a>

### GeometryFileContainer.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.AddFigure"></a>

### GeometryFileContainer.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.AddImage"></a>

### GeometryFileContainer.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Activate"></a>

### GeometryFileContainer.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.CopyTo"></a>

### GeometryFileContainer.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Duplicate"></a>

### GeometryFileContainer.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GroupAllSimilarChildren"></a>

### GeometryFileContainer.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GroupSimilarObjects"></a>

### GeometryFileContainer.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.PropertyByName"></a>

### GeometryFileContainer.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.PropertyByAPIName"></a>

### GeometryFileContainer.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.CreateParameter"></a>

### GeometryFileContainer.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetParameter"></a>

### GeometryFileContainer.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.RemoveParameter"></a>

### GeometryFileContainer.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
