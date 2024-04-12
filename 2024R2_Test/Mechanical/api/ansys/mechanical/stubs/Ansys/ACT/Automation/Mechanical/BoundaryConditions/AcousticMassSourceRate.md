<a id="acousticmasssourcerate"></a>

# AcousticMassSourceRate

<a id="AcousticMassSourceRate"></a>

### *class* AcousticMassSourceRate

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticMassSourceRate.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#AcousticMassSourceRate.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#AcousticMassSourceRate.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticMassSourceRate.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticMassSourceRate.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticMassSourceRate.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticMassSourceRate.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticMassSourceRate.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticMassSourceRate.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticMassSourceRate.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticMassSourceRate.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticMassSourceRate.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticMassSourceRate.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticMassSourceRate.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticMassSourceRate.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticMassSourceRate.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Magnitude`](#AcousticMassSourceRate.Magnitude)                                                                       | Gets or sets the Magnitude.                                   |
| [`Location`](#AcousticMassSourceRate.Location)                                                                         | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#AcousticMassSourceRate.Suppressed)                                                                     | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticMassSourceRate.SharedRefBody)                                                               | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticMassSourceRate.Children)                                                                         | Gets the list of children.                                    |
| [`Comments`](#AcousticMassSourceRate.Comments)                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#AcousticMassSourceRate.Figures)                                                                           | Gets the list of associated figures.                          |
| [`Images`](#AcousticMassSourceRate.Images)                                                                             | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticMassSourceRate.ReadOnly)                                                                         | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticMassSourceRate.Properties)                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticMassSourceRate.VisibleProperties)                                                       | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import AcousticMassSourceRate
```

<a id="property-detail"></a>

## Property detail

<a id="AcousticMassSourceRate.InternalObject"></a>

### *property* AcousticMassSourceRate.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Magnitude"></a>

### *property* AcousticMassSourceRate.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Location"></a>

### *property* AcousticMassSourceRate.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.DataModelObjectCategory"></a>

### *property* AcousticMassSourceRate.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Suppressed"></a>

### *property* AcousticMassSourceRate.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.SharedRefBody"></a>

### *property* AcousticMassSourceRate.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Children"></a>

### *property* AcousticMassSourceRate.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Comments"></a>

### *property* AcousticMassSourceRate.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Figures"></a>

### *property* AcousticMassSourceRate.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Images"></a>

### *property* AcousticMassSourceRate.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.ReadOnly"></a>

### *property* AcousticMassSourceRate.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticMassSourceRate.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Properties"></a>

### *property* AcousticMassSourceRate.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.VisibleProperties"></a>

### *property* AcousticMassSourceRate.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticMassSourceRate.PromoteToNamedSelection"></a>

### AcousticMassSourceRate.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Delete"></a>

### AcousticMassSourceRate.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetChildren"></a>

### AcousticMassSourceRate.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticMassSourceRate.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.AddComment"></a>

### AcousticMassSourceRate.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.AddFigure"></a>

### AcousticMassSourceRate.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.AddImage"></a>

### AcousticMassSourceRate.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Activate"></a>

### AcousticMassSourceRate.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.CopyTo"></a>

### AcousticMassSourceRate.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Duplicate"></a>

### AcousticMassSourceRate.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GroupAllSimilarChildren"></a>

### AcousticMassSourceRate.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GroupSimilarObjects"></a>

### AcousticMassSourceRate.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.PropertyByName"></a>

### AcousticMassSourceRate.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.PropertyByAPIName"></a>

### AcousticMassSourceRate.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.CreateParameter"></a>

### AcousticMassSourceRate.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetParameter"></a>

### AcousticMassSourceRate.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.RemoveParameter"></a>

### AcousticMassSourceRate.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
