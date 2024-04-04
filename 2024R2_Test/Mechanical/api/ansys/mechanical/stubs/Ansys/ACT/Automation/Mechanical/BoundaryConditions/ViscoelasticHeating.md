# ViscoelasticHeating

### *class* ViscoelasticHeating

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ViscoelasticHeating.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#ViscoelasticHeating.Delete)                                   | Run the Delete action.                                                            |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ViscoelasticHeating.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ViscoelasticHeating.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ViscoelasticHeating.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ViscoelasticHeating.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ViscoelasticHeating.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ViscoelasticHeating.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ViscoelasticHeating.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ViscoelasticHeating.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ViscoelasticHeating.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ViscoelasticHeating.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ViscoelasticHeating.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ViscoelasticHeating.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ViscoelasticLossFraction`](#ViscoelasticHeating.ViscoelasticLossFraction)                                            | Gets or sets the ViscoelasticLossFraction.                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#ViscoelasticHeating.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`Location`](#ViscoelasticHeating.Location)                                                                            | Gets or sets the Location.                                    |
| [`Children`](#ViscoelasticHeating.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#ViscoelasticHeating.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Images`](#ViscoelasticHeating.Images)                                                                                | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ViscoelasticHeating.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ViscoelasticHeating.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import ViscoelasticHeating
```

## Property detail

### *property* ViscoelasticHeating.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPlasticHeatingAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ViscoelasticHeating.ViscoelasticLossFraction *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViscoelasticLossFraction.

<!-- !! processed by numpydoc !! -->

### *property* ViscoelasticHeating.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ViscoelasticHeating.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ViscoelasticHeating.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ViscoelasticHeating.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ViscoelasticHeating.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ViscoelasticHeating.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ViscoelasticHeating.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ViscoelasticHeating.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ViscoelasticHeating.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ViscoelasticHeating.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ViscoelasticHeating.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ViscoelasticHeating.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ViscoelasticHeating.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ViscoelasticHeating.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ViscoelasticHeating.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ViscoelasticHeating.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ViscoelasticHeating.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ViscoelasticHeating.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ViscoelasticHeating.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ViscoelasticHeating.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ViscoelasticHeating.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ViscoelasticHeating.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ViscoelasticHeating.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ViscoelasticHeating.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
