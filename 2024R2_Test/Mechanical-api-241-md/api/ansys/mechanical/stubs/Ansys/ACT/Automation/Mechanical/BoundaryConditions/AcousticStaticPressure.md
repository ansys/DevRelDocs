<a id="acousticstaticpressure"></a>

# AcousticStaticPressure

<a id="AcousticStaticPressure"></a>

### *class* AcousticStaticPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticStaticPressure.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`PromoteToNamedSelection`](#AcousticStaticPressure.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#AcousticStaticPressure.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticStaticPressure.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticStaticPressure.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticStaticPressure.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticStaticPressure.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticStaticPressure.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticStaticPressure.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticStaticPressure.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticStaticPressure.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticStaticPressure.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticStaticPressure.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticStaticPressure.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticStaticPressure.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticStaticPressure.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Magnitude`](#AcousticStaticPressure.Magnitude)                                                                       | Gets or sets the Magnitude.                                   |
| [`Location`](#AcousticStaticPressure.Location)                                                                         | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#AcousticStaticPressure.Suppressed)                                                                     | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticStaticPressure.SharedRefBody)                                                               | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticStaticPressure.Children)                                                                         | Gets the list of children.                                    |
| [`Comments`](#AcousticStaticPressure.Comments)                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#AcousticStaticPressure.Figures)                                                                           | Gets the list of associated figures.                          |
| [`Images`](#AcousticStaticPressure.Images)                                                                             | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticStaticPressure.ReadOnly)                                                                         | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticStaticPressure.Properties)                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticStaticPressure.VisibleProperties)                                                       | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import AcousticStaticPressure
```

<a id="property-detail"></a>

## Property detail

<a id="AcousticStaticPressure.InternalObject"></a>

### *property* AcousticStaticPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Magnitude"></a>

### *property* AcousticStaticPressure.Magnitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Location"></a>

### *property* AcousticStaticPressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.DataModelObjectCategory"></a>

### *property* AcousticStaticPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Suppressed"></a>

### *property* AcousticStaticPressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.SharedRefBody"></a>

### *property* AcousticStaticPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Children"></a>

### *property* AcousticStaticPressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Comments"></a>

### *property* AcousticStaticPressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Figures"></a>

### *property* AcousticStaticPressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Images"></a>

### *property* AcousticStaticPressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.ReadOnly"></a>

### *property* AcousticStaticPressure.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticStaticPressure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Properties"></a>

### *property* AcousticStaticPressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.VisibleProperties"></a>

### *property* AcousticStaticPressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticStaticPressure.PromoteToNamedSelection"></a>

### AcousticStaticPressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Delete"></a>

### AcousticStaticPressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetChildren"></a>

### AcousticStaticPressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticStaticPressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.AddComment"></a>

### AcousticStaticPressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.AddFigure"></a>

### AcousticStaticPressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.AddImage"></a>

### AcousticStaticPressure.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Activate"></a>

### AcousticStaticPressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.CopyTo"></a>

### AcousticStaticPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Duplicate"></a>

### AcousticStaticPressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GroupAllSimilarChildren"></a>

### AcousticStaticPressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GroupSimilarObjects"></a>

### AcousticStaticPressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.PropertyByName"></a>

### AcousticStaticPressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.PropertyByAPIName"></a>

### AcousticStaticPressure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.CreateParameter"></a>

### AcousticStaticPressure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetParameter"></a>

### AcousticStaticPressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.RemoveParameter"></a>

### AcousticStaticPressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
