<!-- vale off -->

<a id="symmetrygeneral"></a>

# `SymmetryGeneral`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SymmetryGeneral"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SymmetryGeneral

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SymmetryGeneral.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`FlipHighLow`](#SymmetryGeneral.FlipHighLow)                         | Flips the High and Low Boundaries.                                                |
| [`Delete`](#SymmetryGeneral.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SymmetryGeneral.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SymmetryGeneral.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SymmetryGeneral.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#SymmetryGeneral.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#SymmetryGeneral.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SymmetryGeneral.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SymmetryGeneral.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SymmetryGeneral.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SymmetryGeneral.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SymmetryGeneral.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#SymmetryGeneral.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SymmetryGeneral.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SymmetryGeneral.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`ScopeMode`](#SymmetryGeneral.ScopeMode)                             | Gets the ScopeMode.                                           |
| [`Suppressed`](#SymmetryGeneral.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](#SymmetryGeneral.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`Location`](#SymmetryGeneral.Location)                               | Gets or sets the Location.                                    |
| [`HighBoundaryLocation`](#SymmetryGeneral.HighBoundaryLocation)       | Gets or sets the HighBoundaryLocation.                        |
| [`LowBoundaryLocation`](#SymmetryGeneral.LowBoundaryLocation)         | Gets or sets the LowBoundaryLocation.                         |
| [`DataModelObjectCategory`](#SymmetryGeneral.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#SymmetryGeneral.Children)                               | Gets the list of children.                                    |
| [`Comments`](#SymmetryGeneral.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#SymmetryGeneral.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#SymmetryGeneral.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#SymmetryGeneral.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](#SymmetryGeneral.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#SymmetryGeneral.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SymmetryGeneral.InternalObject"></a>

### *property* SymmetryGeneral.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.ScopeMode"></a>

### *property* SymmetryGeneral.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Suppressed"></a>

### *property* SymmetryGeneral.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.CoordinateSystem"></a>

### *property* SymmetryGeneral.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Location"></a>

### *property* SymmetryGeneral.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.HighBoundaryLocation"></a>

### *property* SymmetryGeneral.HighBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.LowBoundaryLocation"></a>

### *property* SymmetryGeneral.LowBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.DataModelObjectCategory"></a>

### *property* SymmetryGeneral.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Children"></a>

### *property* SymmetryGeneral.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Comments"></a>

### *property* SymmetryGeneral.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Figures"></a>

### *property* SymmetryGeneral.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Images"></a>

### *property* SymmetryGeneral.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.ReadOnly"></a>

### *property* SymmetryGeneral.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* SymmetryGeneral.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Properties"></a>

### *property* SymmetryGeneral.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.VisibleProperties"></a>

### *property* SymmetryGeneral.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SymmetryGeneral.FlipHighLow"></a>

### SymmetryGeneral.FlipHighLow()

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Delete"></a>

### SymmetryGeneral.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetChildren"></a>

### SymmetryGeneral.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### SymmetryGeneral.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.AddComment"></a>

### SymmetryGeneral.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.AddFigure"></a>

### SymmetryGeneral.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.AddImage"></a>

### SymmetryGeneral.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Activate"></a>

### SymmetryGeneral.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.CopyTo"></a>

### SymmetryGeneral.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Duplicate"></a>

### SymmetryGeneral.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GroupAllSimilarChildren"></a>

### SymmetryGeneral.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GroupSimilarObjects"></a>

### SymmetryGeneral.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.PropertyByName"></a>

### SymmetryGeneral.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.PropertyByAPIName"></a>

### SymmetryGeneral.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.CreateParameter"></a>

### SymmetryGeneral.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetParameter"></a>

### SymmetryGeneral.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.RemoveParameter"></a>

### SymmetryGeneral.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
