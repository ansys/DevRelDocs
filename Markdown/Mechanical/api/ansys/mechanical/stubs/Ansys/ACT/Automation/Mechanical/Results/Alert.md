# Alert

### *class* Alert

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Alert.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#Alert.Delete)                                   | Run the Delete action.                                                            |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Alert.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#Alert.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Alert.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Alert.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Alert.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Alert.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Alert.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Alert.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Alert.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Alert.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Alert.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Alert.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Value`](#Alert.Value)                                                                                                | Gets or sets the Value.                                       |
| [`FailsIf`](#Alert.FailsIf)                                                                                            | Gets or sets the FailsIf.                                     |
| [`Status`](#Alert.Status)                                                                                              | Gets the Status.                                              |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Alert.Children)                                                                                          | Gets the list of children.                                    |
| [`Comments`](#Alert.Comments)                                                                                          | Gets the list of associated comments.                         |
| [`Images`](#Alert.Images)                                                                                              | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Alert.Properties)                                                                                      | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Alert.VisibleProperties)                                                                        | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results import Alert
```

## Property detail

### *property* Alert.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAlertAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Alert.Value *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Value.

<!-- !! processed by numpydoc !! -->

### *property* Alert.FailsIf *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FailsIf.

<!-- !! processed by numpydoc !! -->

### *property* Alert.Status *: [Ansys.Mechanical.DataModel.Enums.PassFailResult](../../../../Mechanical/DataModel/Enums/PassFailResult.md#PassFailResult) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Status.

<!-- !! processed by numpydoc !! -->

### *property* Alert.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Alert.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Alert.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Alert.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Alert.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Alert.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Alert.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Alert.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Alert.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Alert.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Alert.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Alert.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Alert.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Alert.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Alert.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Alert.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Alert.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Alert.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Alert.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Alert.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Alert.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Alert.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
