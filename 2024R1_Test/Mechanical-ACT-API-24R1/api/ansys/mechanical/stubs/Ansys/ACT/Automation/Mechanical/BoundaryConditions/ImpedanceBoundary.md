# ImpedanceBoundary

<a id="ImpedanceBoundary"></a>

### *class* ImpedanceBoundary

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImpedanceBoundary.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#ImpedanceBoundary.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#ImpedanceBoundary.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImpedanceBoundary.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImpedanceBoundary.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#ImpedanceBoundary.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#ImpedanceBoundary.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#ImpedanceBoundary.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImpedanceBoundary.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImpedanceBoundary.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImpedanceBoundary.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImpedanceBoundary.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImpedanceBoundary.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImpedanceBoundary.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImpedanceBoundary.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImpedanceBoundary.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`MaterialImpedance`](#ImpedanceBoundary.MaterialImpedance)                                                            | Gets or sets the MaterialImpedance.                           |
| [`ReferencePressure`](#ImpedanceBoundary.ReferencePressure)                                                            | Gets or sets the ReferencePressure.                           |
| [`ReferenceVelocity`](#ImpedanceBoundary.ReferenceVelocity)                                                            | Gets or sets the ReferenceVelocity.                           |
| [`Location`](#ImpedanceBoundary.Location)                                                                              | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#ImpedanceBoundary.Suppressed)                                                                          | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#ImpedanceBoundary.SharedRefBody)                                                                    | Gets or sets the SharedRefBody.                               |
| [`Children`](#ImpedanceBoundary.Children)                                                                              | Gets the list of children.                                    |
| [`Comments`](#ImpedanceBoundary.Comments)                                                                              | Gets the list of associated comments.                         |
| [`Figures`](#ImpedanceBoundary.Figures)                                                                                | Gets the list of associated figures.                          |
| [`Images`](#ImpedanceBoundary.Images)                                                                                  | Gets the list of associated images.                           |
| [`ReadOnly`](#ImpedanceBoundary.ReadOnly)                                                                              | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImpedanceBoundary.Properties)                                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImpedanceBoundary.VisibleProperties)                                                            | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import ImpedanceBoundary
```

<a id="property-detail"></a>

## Property detail

<a id="ImpedanceBoundary.InternalObject"></a>

### *property* ImpedanceBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.MaterialImpedance"></a>

### *property* ImpedanceBoundary.MaterialImpedance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialImpedance.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.ReferencePressure"></a>

### *property* ImpedanceBoundary.ReferencePressure *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePressure.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.ReferenceVelocity"></a>

### *property* ImpedanceBoundary.ReferenceVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceVelocity.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Location"></a>

### *property* ImpedanceBoundary.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.DataModelObjectCategory"></a>

### *property* ImpedanceBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Suppressed"></a>

### *property* ImpedanceBoundary.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.SharedRefBody"></a>

### *property* ImpedanceBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Children"></a>

### *property* ImpedanceBoundary.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Comments"></a>

### *property* ImpedanceBoundary.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Figures"></a>

### *property* ImpedanceBoundary.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Images"></a>

### *property* ImpedanceBoundary.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.ReadOnly"></a>

### *property* ImpedanceBoundary.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImpedanceBoundary.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Properties"></a>

### *property* ImpedanceBoundary.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.VisibleProperties"></a>

### *property* ImpedanceBoundary.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImpedanceBoundary.PromoteToNamedSelection"></a>

### ImpedanceBoundary.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Delete"></a>

### ImpedanceBoundary.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetChildren"></a>

### ImpedanceBoundary.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImpedanceBoundary.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.AddComment"></a>

### ImpedanceBoundary.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.AddFigure"></a>

### ImpedanceBoundary.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.AddImage"></a>

### ImpedanceBoundary.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Activate"></a>

### ImpedanceBoundary.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.CopyTo"></a>

### ImpedanceBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.Duplicate"></a>

### ImpedanceBoundary.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GroupAllSimilarChildren"></a>

### ImpedanceBoundary.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GroupSimilarObjects"></a>

### ImpedanceBoundary.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.PropertyByName"></a>

### ImpedanceBoundary.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.PropertyByAPIName"></a>

### ImpedanceBoundary.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.CreateParameter"></a>

### ImpedanceBoundary.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.GetParameter"></a>

### ImpedanceBoundary.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceBoundary.RemoveParameter"></a>

### ImpedanceBoundary.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
