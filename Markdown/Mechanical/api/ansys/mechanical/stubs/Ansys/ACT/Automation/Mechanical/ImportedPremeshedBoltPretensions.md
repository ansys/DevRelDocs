# ImportedPremeshedBoltPretensions

### *class* ImportedPremeshedBoltPretensions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedPremeshedBoltPretensions.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#ImportedPremeshedBoltPretensions.Delete)                                   | Run the Delete action.                                                            |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedPremeshedBoltPretensions.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedPremeshedBoltPretensions.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedPremeshedBoltPretensions.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedPremeshedBoltPretensions.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedPremeshedBoltPretensions.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedPremeshedBoltPretensions.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedPremeshedBoltPretensions.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedPremeshedBoltPretensions.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedPremeshedBoltPretensions.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedPremeshedBoltPretensions.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedPremeshedBoltPretensions.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedPremeshedBoltPretensions.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedPremeshedBoltPretensions.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Count`](#ImportedPremeshedBoltPretensions.Count)                                                                  | Gets the NumberOfRows.                                        |
| [`Suppressed`](#ImportedPremeshedBoltPretensions.Suppressed)                                                        | Gets or sets the Suppressed.                                  |
| [`Children`](#ImportedPremeshedBoltPretensions.Children)                                                            | Gets the list of children.                                    |
| [`Comments`](#ImportedPremeshedBoltPretensions.Comments)                                                            | Gets the list of associated comments.                         |
| [`Figures`](#ImportedPremeshedBoltPretensions.Figures)                                                              | Gets the list of associated figures.                          |
| [`Images`](#ImportedPremeshedBoltPretensions.Images)                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedPremeshedBoltPretensions.ReadOnly)                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedPremeshedBoltPretensions.Properties)                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedPremeshedBoltPretensions.VisibleProperties)                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedPremeshedBoltPretensions
```

## Property detail

### *property* ImportedPremeshedBoltPretensions.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPremeshedBoltPretensions.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPremeshedBoltPretensions.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPremeshedBoltPretensions.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPremeshedBoltPretensions.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPremeshedBoltPretensions.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPremeshedBoltPretensions.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPremeshedBoltPretensions.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPremeshedBoltPretensions.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPremeshedBoltPretensions.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPremeshedBoltPretensions.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPremeshedBoltPretensions.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedPremeshedBoltPretensions.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedPremeshedBoltPretensions.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
