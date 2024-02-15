# Coupling

### *class* Coupling

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Coupling.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#Coupling.Delete)                                   | Run the Delete action.                                                            |
|----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Coupling.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#Coupling.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Coupling.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Coupling.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Coupling.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Coupling.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Coupling.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Coupling.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Coupling.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Coupling.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Coupling.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Coupling.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`LocalCoordinates`](#Coupling.LocalCoordinates)                                                                       | Gets or sets the LocalCoordinates.                            |
| [`DOFSelection`](#Coupling.DOFSelection)                                                                               | Gets or sets the DOFSelection.                                |
| [`Suppressed`](#Coupling.Suppressed)                                                                                   | Gets or sets the Suppressed.                                  |
| [`Location`](#Coupling.Location)                                                                                       | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Coupling.Children)                                                                                       | Gets the list of children.                                    |
| [`Comments`](#Coupling.Comments)                                                                                       | Gets the list of associated comments.                         |
| [`Images`](#Coupling.Images)                                                                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Coupling.Properties)                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Coupling.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import Coupling
```

## Property detail

### *property* Coupling.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCouplingConditionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Coupling.LocalCoordinates *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocalCoordinates.

<!-- !! processed by numpydoc !! -->

### *property* Coupling.DOFSelection *: [Ansys.Mechanical.DataModel.Enums.CouplingConditionDOFType](../../../../Mechanical/DataModel/Enums/CouplingConditionDOFType.md#CouplingConditionDOFType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOFSelection.

<!-- !! processed by numpydoc !! -->

### *property* Coupling.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Coupling.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* Coupling.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Coupling.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Coupling.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Coupling.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Coupling.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Coupling.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Coupling.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Coupling.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Coupling.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Coupling.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Coupling.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Coupling.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Coupling.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Coupling.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Coupling.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Coupling.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Coupling.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Coupling.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Coupling.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Coupling.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Coupling.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Coupling.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
