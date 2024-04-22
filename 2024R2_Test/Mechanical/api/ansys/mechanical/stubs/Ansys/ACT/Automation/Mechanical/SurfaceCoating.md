<a id="surfacecoating"></a>

# SurfaceCoating

<a id="SurfaceCoating"></a>

### *class* SurfaceCoating

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a SurfaceCoating.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#SurfaceCoating.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SurfaceCoating.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SurfaceCoating.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SurfaceCoating.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#SurfaceCoating.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#SurfaceCoating.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SurfaceCoating.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SurfaceCoating.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SurfaceCoating.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SurfaceCoating.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SurfaceCoating.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#SurfaceCoating.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SurfaceCoating.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SurfaceCoating.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.            |
| [`Material`](Material.md#Material)                                                                                                          | Gets or sets the Material.                                    |
| [`Thickness`](Thickness.md#Thickness)                                                                                                       | Gets or sets the Thickness.                                   |
| [`SurfaceCoatingStiffnessBehavior`](../../../Mechanical/DataModel/Enums/SurfaceCoatingStiffnessBehavior.md#SurfaceCoatingStiffnessBehavior) | Gets or sets the SurfaceCoatingStiffnessBehavior.             |
| [`Suppressed`](#SurfaceCoating.Suppressed)                                                                                                  | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                                                     | Gets or sets the CoordinateSystem.                            |
| [`Location`](#SurfaceCoating.Location)                                                                                                      | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                         | Gets the current DataModelObject’s category.                  |
| [`Children`](#SurfaceCoating.Children)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#SurfaceCoating.Comments)                                                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#SurfaceCoating.Figures)                                                                                                        | Gets the list of associated figures.                          |
| [`Images`](#SurfaceCoating.Images)                                                                                                          | Gets the list of associated images.                           |
| [`ReadOnly`](#SurfaceCoating.ReadOnly)                                                                                                      | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.            |
| [`Properties`](#SurfaceCoating.Properties)                                                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#SurfaceCoating.VisibleProperties)                                                                                    | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import SurfaceCoating
```

<a id="property-detail"></a>

## Property detail

<a id="SurfaceCoating.InternalObject"></a>

### *property* SurfaceCoating.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSurfaceCoatingAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Material"></a>

### *property* SurfaceCoating.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Thickness"></a>

### *property* SurfaceCoating.Thickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thickness.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.SurfaceCoatingStiffnessBehavior"></a>

### *property* SurfaceCoating.SurfaceCoatingStiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.SurfaceCoatingStiffnessBehavior](../../../Mechanical/DataModel/Enums/SurfaceCoatingStiffnessBehavior.md#SurfaceCoatingStiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SurfaceCoatingStiffnessBehavior.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Suppressed"></a>

### *property* SurfaceCoating.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.CoordinateSystem"></a>

### *property* SurfaceCoating.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Location"></a>

### *property* SurfaceCoating.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.DataModelObjectCategory"></a>

### *property* SurfaceCoating.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Children"></a>

### *property* SurfaceCoating.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Comments"></a>

### *property* SurfaceCoating.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Figures"></a>

### *property* SurfaceCoating.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Images"></a>

### *property* SurfaceCoating.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.ReadOnly"></a>

### *property* SurfaceCoating.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* SurfaceCoating.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Properties"></a>

### *property* SurfaceCoating.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.VisibleProperties"></a>

### *property* SurfaceCoating.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SurfaceCoating.Delete"></a>

### SurfaceCoating.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetChildren"></a>

### SurfaceCoating.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### SurfaceCoating.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.AddComment"></a>

### SurfaceCoating.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.AddFigure"></a>

### SurfaceCoating.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.AddImage"></a>

### SurfaceCoating.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Activate"></a>

### SurfaceCoating.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.CopyTo"></a>

### SurfaceCoating.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Duplicate"></a>

### SurfaceCoating.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GroupAllSimilarChildren"></a>

### SurfaceCoating.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GroupSimilarObjects"></a>

### SurfaceCoating.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.PropertyByName"></a>

### SurfaceCoating.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.PropertyByAPIName"></a>

### SurfaceCoating.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.CreateParameter"></a>

### SurfaceCoating.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetParameter"></a>

### SurfaceCoating.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.RemoveParameter"></a>

### SurfaceCoating.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
