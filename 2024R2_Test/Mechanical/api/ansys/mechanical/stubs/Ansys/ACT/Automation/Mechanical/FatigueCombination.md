# FatigueCombination

### *class* FatigueCombination

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueCombination.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddDamage`](#FatigueCombination.AddDamage)                             | Creates a new FatigueDamage                                                       |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#FatigueCombination.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`Delete`](#FatigueCombination.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FatigueCombination.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#FatigueCombination.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FatigueCombination.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FatigueCombination.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FatigueCombination.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FatigueCombination.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueCombination.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FatigueCombination.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FatigueCombination.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FatigueCombination.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FatigueCombination.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FatigueCombination.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#FatigueCombination.Children)                                                                          | Gets the list of children.                                    |
| [`Comments`](#FatigueCombination.Comments)                                                                          | Gets the list of associated comments.                         |
| [`Images`](#FatigueCombination.Images)                                                                              | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FatigueCombination.Properties)                                                                      | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FatigueCombination.VisibleProperties)                                                        | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import FatigueCombination
```

## Property detail

### *property* FatigueCombination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFatigueCombinationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FatigueCombination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FatigueCombination.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FatigueCombination.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FatigueCombination.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FatigueCombination.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FatigueCombination.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FatigueCombination.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FatigueCombination.AddDamage()

Creates a new FatigueDamage

<!-- !! processed by numpydoc !! -->

### FatigueCombination.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FatigueCombination.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
