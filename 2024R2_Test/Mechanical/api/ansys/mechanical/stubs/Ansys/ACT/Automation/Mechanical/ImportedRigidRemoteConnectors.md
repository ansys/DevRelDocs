# ImportedRigidRemoteConnectors

### *class* ImportedRigidRemoteConnectors

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedRigidRemoteConnectors.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#ImportedRigidRemoteConnectors.Delete)                                   | Run the Delete action.                                                            |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedRigidRemoteConnectors.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedRigidRemoteConnectors.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedRigidRemoteConnectors.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedRigidRemoteConnectors.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedRigidRemoteConnectors.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedRigidRemoteConnectors.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedRigidRemoteConnectors.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedRigidRemoteConnectors.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedRigidRemoteConnectors.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedRigidRemoteConnectors.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedRigidRemoteConnectors.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedRigidRemoteConnectors.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedRigidRemoteConnectors.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Count`](#ImportedRigidRemoteConnectors.Count)                                                                     | Gets the NumberOfRows.                                        |
| [`Suppressed`](#ImportedRigidRemoteConnectors.Suppressed)                                                           | Gets or sets the Suppressed.                                  |
| [`Children`](#ImportedRigidRemoteConnectors.Children)                                                               | Gets the list of children.                                    |
| [`Comments`](#ImportedRigidRemoteConnectors.Comments)                                                               | Gets the list of associated comments.                         |
| [`Figures`](#ImportedRigidRemoteConnectors.Figures)                                                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedRigidRemoteConnectors.Images)                                                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedRigidRemoteConnectors.ReadOnly)                                                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedRigidRemoteConnectors.Properties)                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedRigidRemoteConnectors.VisibleProperties)                                             | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedRigidRemoteConnectors
```

## Property detail

### *property* ImportedRigidRemoteConnectors.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedRigidRemoteConnectors.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedRigidRemoteConnectors.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

### *property* ImportedRigidRemoteConnectors.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedRigidRemoteConnectors.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedRigidRemoteConnectors.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedRigidRemoteConnectors.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedRigidRemoteConnectors.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedRigidRemoteConnectors.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ImportedRigidRemoteConnectors.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedRigidRemoteConnectors.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedRigidRemoteConnectors.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedRigidRemoteConnectors.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedRigidRemoteConnectors.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
