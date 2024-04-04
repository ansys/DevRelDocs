# CoupledPhysicsHeatingObjects

### *class* CoupledPhysicsHeatingObjects

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CoupledPhysicsHeatingObjects.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#CoupledPhysicsHeatingObjects.Delete)                                   | Run the Delete action.                                                            |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CoupledPhysicsHeatingObjects.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#CoupledPhysicsHeatingObjects.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#CoupledPhysicsHeatingObjects.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CoupledPhysicsHeatingObjects.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CoupledPhysicsHeatingObjects.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CoupledPhysicsHeatingObjects.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CoupledPhysicsHeatingObjects.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CoupledPhysicsHeatingObjects.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CoupledPhysicsHeatingObjects.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#CoupledPhysicsHeatingObjects.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CoupledPhysicsHeatingObjects.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CoupledPhysicsHeatingObjects.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Suppressed`](#CoupledPhysicsHeatingObjects.Suppressed)                                                               | Gets or sets the Suppressed.                                  |
| [`Location`](#CoupledPhysicsHeatingObjects.Location)                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#CoupledPhysicsHeatingObjects.Children)                                                                   | Gets the list of children.                                    |
| [`Comments`](#CoupledPhysicsHeatingObjects.Comments)                                                                   | Gets the list of associated comments.                         |
| [`Images`](#CoupledPhysicsHeatingObjects.Images)                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CoupledPhysicsHeatingObjects.Properties)                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CoupledPhysicsHeatingObjects.VisibleProperties)                                                 | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import CoupledPhysicsHeatingObjects
```

## Property detail

### *property* CoupledPhysicsHeatingObjects.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPlasticHeatingAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CoupledPhysicsHeatingObjects.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* CoupledPhysicsHeatingObjects.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* CoupledPhysicsHeatingObjects.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* CoupledPhysicsHeatingObjects.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CoupledPhysicsHeatingObjects.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CoupledPhysicsHeatingObjects.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CoupledPhysicsHeatingObjects.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CoupledPhysicsHeatingObjects.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CoupledPhysicsHeatingObjects.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### CoupledPhysicsHeatingObjects.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CoupledPhysicsHeatingObjects.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CoupledPhysicsHeatingObjects.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CoupledPhysicsHeatingObjects.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CoupledPhysicsHeatingObjects.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### CoupledPhysicsHeatingObjects.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CoupledPhysicsHeatingObjects.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CoupledPhysicsHeatingObjects.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CoupledPhysicsHeatingObjects.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CoupledPhysicsHeatingObjects.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CoupledPhysicsHeatingObjects.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CoupledPhysicsHeatingObjects.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### CoupledPhysicsHeatingObjects.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CoupledPhysicsHeatingObjects.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CoupledPhysicsHeatingObjects.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
