# NumberingControl

### *class* NumberingControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NumberingControl.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#NumberingControl.Delete)                                   | Run the Delete action.                                                            |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NumberingControl.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#NumberingControl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NumberingControl.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#NumberingControl.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NumberingControl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NumberingControl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NumberingControl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NumberingControl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NumberingControl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NumberingControl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#NumberingControl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#NumberingControl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NumberingControl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BeginElementNumber`](#NumberingControl.BeginElementNumber)                                                        | Gets or sets the BeginElementNumber.                          |
| [`BeginNodeNumber`](#NumberingControl.BeginNodeNumber)                                                              | Gets or sets the BeginNodeNumber.                             |
| [`EndElementNumber`](#NumberingControl.EndElementNumber)                                                            | Gets or sets the EndElementNumber.                            |
| [`EndNodeNumber`](#NumberingControl.EndNodeNumber)                                                                  | Gets or sets the EndNodeNumber.                               |
| [`NodeNumber`](#NumberingControl.NodeNumber)                                                                        | Gets or sets the NodeNumber.                                  |
| [`Suppressed`](#NumberingControl.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`Location`](#NumberingControl.Location)                                                                            | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#NumberingControl.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#NumberingControl.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#NumberingControl.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#NumberingControl.Images)                                                                                | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NumberingControl.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NumberingControl.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import NumberingControl
```

## Property detail

### *property* NumberingControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshRenumberingControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.BeginElementNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeginElementNumber.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.BeginNodeNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeginNodeNumber.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.EndElementNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndElementNumber.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.EndNodeNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndNodeNumber.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.NodeNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeNumber.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* NumberingControl.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### NumberingControl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### NumberingControl.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NumberingControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NumberingControl.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### NumberingControl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### NumberingControl.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### NumberingControl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### NumberingControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### NumberingControl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### NumberingControl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### NumberingControl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### NumberingControl.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### NumberingControl.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### NumberingControl.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### NumberingControl.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### NumberingControl.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
