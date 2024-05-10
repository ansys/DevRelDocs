# ViscoelasticHeating

<a id="ViscoelasticHeating"></a>

### *class* ViscoelasticHeating

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ViscoelasticHeating.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ViscoelasticHeating.Delete)                                   | Run the Delete action.                                                            |
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

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`ViscoelasticLossFraction`](#ViscoelasticHeating.ViscoelasticLossFraction)                                            | Gets or sets the ViscoelasticLossFraction.                    |
| [`DataModelObjectCategory`](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#ViscoelasticHeating.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`Location`](#ViscoelasticHeating.Location)                                                                            | Gets or sets the Location.                                    |
| [`Children`](#ViscoelasticHeating.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#ViscoelasticHeating.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Images`](#ViscoelasticHeating.Images)                                                                                | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ViscoelasticHeating.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ViscoelasticHeating.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import ViscoelasticHeating
```

<a id="property-detail"></a>

## Property detail

<a id="ViscoelasticHeating.InternalObject"></a>

### *property* ViscoelasticHeating.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPlasticHeatingAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.ViscoelasticLossFraction"></a>

### *property* ViscoelasticHeating.ViscoelasticLossFraction *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViscoelasticLossFraction.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.DataModelObjectCategory"></a>

### *property* ViscoelasticHeating.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Suppressed"></a>

### *property* ViscoelasticHeating.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Location"></a>

### *property* ViscoelasticHeating.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Children"></a>

### *property* ViscoelasticHeating.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Comments"></a>

### *property* ViscoelasticHeating.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Images"></a>

### *property* ViscoelasticHeating.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ViscoelasticHeating.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Properties"></a>

### *property* ViscoelasticHeating.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.VisibleProperties"></a>

### *property* ViscoelasticHeating.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ViscoelasticHeating.Delete"></a>

### ViscoelasticHeating.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetChildren"></a>

### ViscoelasticHeating.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ViscoelasticHeating.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.AddComment"></a>

### ViscoelasticHeating.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.AddImage"></a>

### ViscoelasticHeating.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Activate"></a>

### ViscoelasticHeating.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.CopyTo"></a>

### ViscoelasticHeating.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Duplicate"></a>

### ViscoelasticHeating.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GroupAllSimilarChildren"></a>

### ViscoelasticHeating.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GroupSimilarObjects"></a>

### ViscoelasticHeating.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.PropertyByName"></a>

### ViscoelasticHeating.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.PropertyByAPIName"></a>

### ViscoelasticHeating.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.CreateParameter"></a>

### ViscoelasticHeating.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetParameter"></a>

### ViscoelasticHeating.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.RemoveParameter"></a>

### ViscoelasticHeating.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
