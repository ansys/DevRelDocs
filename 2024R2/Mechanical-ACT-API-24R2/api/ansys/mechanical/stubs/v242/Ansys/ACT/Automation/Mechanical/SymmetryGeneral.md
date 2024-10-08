# `SymmetryGeneral`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SymmetryGeneral"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SymmetryGeneral

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SymmetryGeneral.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#SymmetryGeneral.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#SymmetryGeneral.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SymmetryGeneral.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SymmetryGeneral.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#SymmetryGeneral.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#SymmetryGeneral.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#SymmetryGeneral.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#SymmetryGeneral.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`FlipHighLow`](#SymmetryGeneral.FlipHighLow)                         | Flips the High and Low Boundaries.                                                |
| [`GetChildren`](#SymmetryGeneral.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#SymmetryGeneral.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#SymmetryGeneral.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SymmetryGeneral.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#SymmetryGeneral.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#SymmetryGeneral.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#SymmetryGeneral.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#SymmetryGeneral.Children)                               | Gets the list of children.                                    |
| [`Comments`](#SymmetryGeneral.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#SymmetryGeneral.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#SymmetryGeneral.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#SymmetryGeneral.Figures)                                 | Gets the list of associated figures.                          |
| [`HighBoundaryLocation`](#SymmetryGeneral.HighBoundaryLocation)       | Gets or sets the HighBoundaryLocation.                        |
| [`Images`](#SymmetryGeneral.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#SymmetryGeneral.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#SymmetryGeneral.Location)                               | Gets or sets the Location.                                    |
| [`LowBoundaryLocation`](#SymmetryGeneral.LowBoundaryLocation)         | Gets or sets the LowBoundaryLocation.                         |
| [`Properties`](#SymmetryGeneral.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#SymmetryGeneral.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`ScopeMode`](#SymmetryGeneral.ScopeMode)                             | Gets the ScopeMode.                                           |
| [`Suppressed`](#SymmetryGeneral.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#SymmetryGeneral.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SymmetryGeneral.Children"></a>

### *property* SymmetryGeneral.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Comments"></a>

### *property* SymmetryGeneral.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.CoordinateSystem"></a>

### *property* SymmetryGeneral.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.DataModelObjectCategory"></a>

### *property* SymmetryGeneral.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Figures"></a>

### *property* SymmetryGeneral.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.HighBoundaryLocation"></a>

### *property* SymmetryGeneral.HighBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Images"></a>

### *property* SymmetryGeneral.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.InternalObject"></a>

### *property* SymmetryGeneral.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Location"></a>

### *property* SymmetryGeneral.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.LowBoundaryLocation"></a>

### *property* SymmetryGeneral.LowBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Properties"></a>

### *property* SymmetryGeneral.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.ReadOnly"></a>

### *property* SymmetryGeneral.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.ScopeMode"></a>

### *property* SymmetryGeneral.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Suppressed"></a>

### *property* SymmetryGeneral.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.VisibleProperties"></a>

### *property* SymmetryGeneral.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SymmetryGeneral.Activate"></a>

### SymmetryGeneral.Activate()

Activate the current object.

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

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.CopyTo"></a>

### SymmetryGeneral.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.CreateParameter"></a>

### SymmetryGeneral.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Delete"></a>

### SymmetryGeneral.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Duplicate"></a>

### SymmetryGeneral.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.FlipHighLow"></a>

### SymmetryGeneral.FlipHighLow()

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetChildren"></a>

### SymmetryGeneral.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetParameter"></a>

### SymmetryGeneral.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GroupAllSimilarChildren"></a>

### SymmetryGeneral.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GroupSimilarObjects"></a>

### SymmetryGeneral.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.PropertyByAPIName"></a>

### SymmetryGeneral.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.PropertyByName"></a>

### SymmetryGeneral.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.RemoveParameter"></a>

### SymmetryGeneral.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

