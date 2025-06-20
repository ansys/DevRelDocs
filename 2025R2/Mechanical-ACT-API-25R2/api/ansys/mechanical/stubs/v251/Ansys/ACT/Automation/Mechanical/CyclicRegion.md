# `CyclicRegion`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CyclicRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CyclicRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CyclicRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CyclicRegion.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#CyclicRegion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CyclicRegion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CyclicRegion.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#CyclicRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CyclicRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CyclicRegion.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CyclicRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`FlipHighLow`](#CyclicRegion.FlipHighLow)                         | Flips the High and Low Boundaries.                                                |
| [`GetChildren`](#CyclicRegion.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CyclicRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CyclicRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CyclicRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CyclicRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CyclicRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CyclicRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#CyclicRegion.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CyclicRegion.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#CyclicRegion.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#CyclicRegion.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CyclicRegion.Figures)                                 | Gets the list of associated figures.                          |
| [`HighBoundaryLocation`](#CyclicRegion.HighBoundaryLocation)       | Gets or sets the HighBoundaryLocation.                        |
| [`Images`](#CyclicRegion.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CyclicRegion.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#CyclicRegion.Location)                               | Gets or sets the Location.                                    |
| [`LowBoundaryLocation`](#CyclicRegion.LowBoundaryLocation)         | Gets or sets the LowBoundaryLocation.                         |
| [`Properties`](#CyclicRegion.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CyclicRegion.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`ScopeMode`](#CyclicRegion.ScopeMode)                             | Gets the ScopeMode.                                           |
| [`Suppressed`](#CyclicRegion.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#CyclicRegion.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CyclicRegion.Children"></a>

### *property* CyclicRegion.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Comments"></a>

### *property* CyclicRegion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.CoordinateSystem"></a>

### *property* CyclicRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.DataModelObjectCategory"></a>

### *property* CyclicRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Figures"></a>

### *property* CyclicRegion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.HighBoundaryLocation"></a>

### *property* CyclicRegion.HighBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Images"></a>

### *property* CyclicRegion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.InternalObject"></a>

### *property* CyclicRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Location"></a>

### *property* CyclicRegion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.LowBoundaryLocation"></a>

### *property* CyclicRegion.LowBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Properties"></a>

### *property* CyclicRegion.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.ReadOnly"></a>

### *property* CyclicRegion.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.ScopeMode"></a>

### *property* CyclicRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Suppressed"></a>

### *property* CyclicRegion.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.VisibleProperties"></a>

### *property* CyclicRegion.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CyclicRegion.Activate"></a>

### CyclicRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.AddComment"></a>

### CyclicRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.AddFigure"></a>

### CyclicRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.AddImage"></a>

### CyclicRegion.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.CopyTo"></a>

### CyclicRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.CreateParameter"></a>

### CyclicRegion.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Delete"></a>

### CyclicRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Duplicate"></a>

### CyclicRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.FlipHighLow"></a>

### CyclicRegion.FlipHighLow()

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetChildren"></a>

### CyclicRegion.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetParameter"></a>

### CyclicRegion.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GroupAllSimilarChildren"></a>

### CyclicRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GroupSimilarObjects"></a>

### CyclicRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.PropertyByAPIName"></a>

### CyclicRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.PropertyByName"></a>

### CyclicRegion.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.RemoveParameter"></a>

### CyclicRegion.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

