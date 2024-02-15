# InitialConditions

### *class* InitialConditions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a InitialConditions.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`InsertVelocity`](#InitialConditions.InsertVelocity)                   | Creates a new Velocity                                                            |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`InsertAngularVelocity`](#InitialConditions.InsertAngularVelocity)     | Creates a new Angular Velocity                                                    |
| [`InsertDropHeight`](#InitialConditions.InsertDropHeight)               | Creates a new Drop Height                                                         |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#InitialConditions.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#InitialConditions.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#InitialConditions.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#InitialConditions.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#InitialConditions.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#InitialConditions.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#InitialConditions.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#InitialConditions.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#InitialConditions.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#InitialConditions.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#InitialConditions.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#InitialConditions.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#InitialConditions.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#InitialConditions.Children)                                                                           | Gets the list of children.                                    |
| [`Comments`](#InitialConditions.Comments)                                                                           | Gets the list of associated comments.                         |
| [`Figures`](#InitialConditions.Figures)                                                                             | Gets the list of associated figures.                          |
| [`Images`](#InitialConditions.Images)                                                                               | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#InitialConditions.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#InitialConditions.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import InitialConditions
```

## Property detail

### *property* InitialConditions.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSInitialConditionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* InitialConditions.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* InitialConditions.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* InitialConditions.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* InitialConditions.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* InitialConditions.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* InitialConditions.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* InitialConditions.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* InitialConditions.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### InitialConditions.InsertVelocity()

Creates a new Velocity

<!-- !! processed by numpydoc !! -->

### InitialConditions.InsertAngularVelocity()

Creates a new Angular Velocity

<!-- !! processed by numpydoc !! -->

### InitialConditions.InsertDropHeight()

Creates a new Drop Height

<!-- !! processed by numpydoc !! -->

### InitialConditions.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### InitialConditions.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### InitialConditions.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### InitialConditions.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### InitialConditions.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### InitialConditions.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### InitialConditions.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### InitialConditions.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### InitialConditions.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### InitialConditions.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### InitialConditions.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### InitialConditions.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### InitialConditions.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### InitialConditions.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### InitialConditions.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
