# Coupling

<a id="Coupling"></a>

### *class* Coupling

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Coupling.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#Coupling.Delete)                                   | Run the Delete action.                                                            |
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

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`LocalCoordinates`](#Coupling.LocalCoordinates)                                                                       | Gets or sets the LocalCoordinates.                            |
| [`DOFSelection`](#Coupling.DOFSelection)                                                                               | Gets or sets the DOFSelection.                                |
| [`Suppressed`](#Coupling.Suppressed)                                                                                   | Gets or sets the Suppressed.                                  |
| [`Location`](#Coupling.Location)                                                                                       | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Coupling.Children)                                                                                       | Gets the list of children.                                    |
| [`Comments`](#Coupling.Comments)                                                                                       | Gets the list of associated comments.                         |
| [`Images`](#Coupling.Images)                                                                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Coupling.Properties)                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Coupling.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import Coupling
```

<a id="property-detail"></a>

## Property detail

<a id="Coupling.InternalObject"></a>

### *property* Coupling.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCouplingConditionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.LocalCoordinates"></a>

### *property* Coupling.LocalCoordinates *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocalCoordinates.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.DOFSelection"></a>

### *property* Coupling.DOFSelection *: [Ansys.Mechanical.DataModel.Enums.CouplingConditionDOFType](./../../../../Mechanical/DataModel/Enums/CouplingConditionDOFType.md#CouplingConditionDOFType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOFSelection.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Suppressed"></a>

### *property* Coupling.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Location"></a>

### *property* Coupling.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.DataModelObjectCategory"></a>

### *property* Coupling.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Children"></a>

### *property* Coupling.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Comments"></a>

### *property* Coupling.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Images"></a>

### *property* Coupling.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Coupling.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Properties"></a>

### *property* Coupling.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.VisibleProperties"></a>

### *property* Coupling.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Coupling.Delete"></a>

### Coupling.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetChildren"></a>

### Coupling.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Coupling.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.AddComment"></a>

### Coupling.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.AddImage"></a>

### Coupling.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Activate"></a>

### Coupling.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.CopyTo"></a>

### Coupling.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Duplicate"></a>

### Coupling.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GroupAllSimilarChildren"></a>

### Coupling.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GroupSimilarObjects"></a>

### Coupling.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.PropertyByName"></a>

### Coupling.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.PropertyByAPIName"></a>

### Coupling.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.CreateParameter"></a>

### Coupling.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetParameter"></a>

### Coupling.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.RemoveParameter"></a>

### Coupling.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
