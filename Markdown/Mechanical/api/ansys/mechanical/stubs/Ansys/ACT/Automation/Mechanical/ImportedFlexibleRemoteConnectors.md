# ImportedFlexibleRemoteConnectors

### *class* ImportedFlexibleRemoteConnectors

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedFlexibleRemoteConnectors.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#ImportedFlexibleRemoteConnectors.Delete)                                   | Run the Delete action.                                                            |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedFlexibleRemoteConnectors.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedFlexibleRemoteConnectors.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedFlexibleRemoteConnectors.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedFlexibleRemoteConnectors.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedFlexibleRemoteConnectors.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedFlexibleRemoteConnectors.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedFlexibleRemoteConnectors.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedFlexibleRemoteConnectors.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedFlexibleRemoteConnectors.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedFlexibleRemoteConnectors.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedFlexibleRemoteConnectors.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedFlexibleRemoteConnectors.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedFlexibleRemoteConnectors.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Count`](#ImportedFlexibleRemoteConnectors.Count)                                                                  | Gets the NumberOfRows.                                        |
| [`Suppressed`](#ImportedFlexibleRemoteConnectors.Suppressed)                                                        | Gets or sets the Suppressed.                                  |
| [`Children`](#ImportedFlexibleRemoteConnectors.Children)                                                            | Gets the list of children.                                    |
| [`Comments`](#ImportedFlexibleRemoteConnectors.Comments)                                                            | Gets the list of associated comments.                         |
| [`Figures`](#ImportedFlexibleRemoteConnectors.Figures)                                                              | Gets the list of associated figures.                          |
| [`Images`](#ImportedFlexibleRemoteConnectors.Images)                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedFlexibleRemoteConnectors.ReadOnly)                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedFlexibleRemoteConnectors.Properties)                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedFlexibleRemoteConnectors.VisibleProperties)                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedFlexibleRemoteConnectors
```

## Property detail

### *property* ImportedFlexibleRemoteConnectors.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedFlexibleRemoteConnectors.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedFlexibleRemoteConnectors.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

### *property* ImportedFlexibleRemoteConnectors.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedFlexibleRemoteConnectors.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedFlexibleRemoteConnectors.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedFlexibleRemoteConnectors.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedFlexibleRemoteConnectors.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedFlexibleRemoteConnectors.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ImportedFlexibleRemoteConnectors.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedFlexibleRemoteConnectors.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedFlexibleRemoteConnectors.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedFlexibleRemoteConnectors.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedFlexibleRemoteConnectors.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
