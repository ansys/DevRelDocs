# AcousticImpedanceSheet

<a id="AcousticImpedanceSheet"></a>

### *class* AcousticImpedanceSheet

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticImpedanceSheet.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#AcousticImpedanceSheet.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#AcousticImpedanceSheet.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticImpedanceSheet.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticImpedanceSheet.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticImpedanceSheet.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticImpedanceSheet.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticImpedanceSheet.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticImpedanceSheet.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticImpedanceSheet.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticImpedanceSheet.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticImpedanceSheet.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticImpedanceSheet.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticImpedanceSheet.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticImpedanceSheet.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticImpedanceSheet.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Reactance`](#AcousticImpedanceSheet.Reactance)                                                                       | Gets or sets the Reactance.                                   |
| [`Resistance`](#AcousticImpedanceSheet.Resistance)                                                                     | Gets or sets the Resistance.                                  |
| [`Location`](#AcousticImpedanceSheet.Location)                                                                         | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#AcousticImpedanceSheet.Suppressed)                                                                     | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticImpedanceSheet.SharedRefBody)                                                               | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticImpedanceSheet.Children)                                                                         | Gets the list of children.                                    |
| [`Comments`](#AcousticImpedanceSheet.Comments)                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#AcousticImpedanceSheet.Figures)                                                                           | Gets the list of associated figures.                          |
| [`Images`](#AcousticImpedanceSheet.Images)                                                                             | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticImpedanceSheet.ReadOnly)                                                                         | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticImpedanceSheet.Properties)                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticImpedanceSheet.VisibleProperties)                                                       | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import AcousticImpedanceSheet
```

<a id="property-detail"></a>

## Property detail

<a id="AcousticImpedanceSheet.InternalObject"></a>

### *property* AcousticImpedanceSheet.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Reactance"></a>

### *property* AcousticImpedanceSheet.Reactance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Reactance.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Resistance"></a>

### *property* AcousticImpedanceSheet.Resistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Resistance.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Location"></a>

### *property* AcousticImpedanceSheet.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.DataModelObjectCategory"></a>

### *property* AcousticImpedanceSheet.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Suppressed"></a>

### *property* AcousticImpedanceSheet.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.SharedRefBody"></a>

### *property* AcousticImpedanceSheet.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Children"></a>

### *property* AcousticImpedanceSheet.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Comments"></a>

### *property* AcousticImpedanceSheet.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Figures"></a>

### *property* AcousticImpedanceSheet.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Images"></a>

### *property* AcousticImpedanceSheet.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.ReadOnly"></a>

### *property* AcousticImpedanceSheet.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticImpedanceSheet.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Properties"></a>

### *property* AcousticImpedanceSheet.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.VisibleProperties"></a>

### *property* AcousticImpedanceSheet.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticImpedanceSheet.PromoteToNamedSelection"></a>

### AcousticImpedanceSheet.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Delete"></a>

### AcousticImpedanceSheet.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetChildren"></a>

### AcousticImpedanceSheet.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticImpedanceSheet.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.AddComment"></a>

### AcousticImpedanceSheet.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.AddFigure"></a>

### AcousticImpedanceSheet.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.AddImage"></a>

### AcousticImpedanceSheet.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Activate"></a>

### AcousticImpedanceSheet.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.CopyTo"></a>

### AcousticImpedanceSheet.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.Duplicate"></a>

### AcousticImpedanceSheet.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GroupAllSimilarChildren"></a>

### AcousticImpedanceSheet.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GroupSimilarObjects"></a>

### AcousticImpedanceSheet.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.PropertyByName"></a>

### AcousticImpedanceSheet.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.PropertyByAPIName"></a>

### AcousticImpedanceSheet.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.CreateParameter"></a>

### AcousticImpedanceSheet.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.GetParameter"></a>

### AcousticImpedanceSheet.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceSheet.RemoveParameter"></a>

### AcousticImpedanceSheet.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
