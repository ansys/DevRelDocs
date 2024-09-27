# `VoltageGround`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.VoltageGround"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.VoltageGround

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VoltageGround.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#VoltageGround.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#VoltageGround.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#VoltageGround.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VoltageGround.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#VoltageGround.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#VoltageGround.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#VoltageGround.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#VoltageGround.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#VoltageGround.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#VoltageGround.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#VoltageGround.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VoltageGround.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#VoltageGround.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#VoltageGround.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#VoltageGround.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#VoltageGround.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#VoltageGround.Children)                               | Gets the list of children.                                    |
| [`Comments`](#VoltageGround.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#VoltageGround.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#VoltageGround.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#VoltageGround.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#VoltageGround.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#VoltageGround.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#VoltageGround.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#VoltageGround.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#VoltageGround.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#VoltageGround.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#VoltageGround.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`VoltageCoupling`](#VoltageGround.VoltageCoupling)                 | Gets or sets the VoltageCoupling.                             |

<a id="property-detail"></a>

## Property detail

<a id="VoltageGround.Children"></a>

### *property* VoltageGround.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Comments"></a>

### *property* VoltageGround.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.DataModelObjectCategory"></a>

### *property* VoltageGround.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Figures"></a>

### *property* VoltageGround.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Images"></a>

### *property* VoltageGround.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.InternalObject"></a>

### *property* VoltageGround.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Location"></a>

### *property* VoltageGround.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Properties"></a>

### *property* VoltageGround.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.ReadOnly"></a>

### *property* VoltageGround.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.SharedRefBody"></a>

### *property* VoltageGround.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Suppressed"></a>

### *property* VoltageGround.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.VisibleProperties"></a>

### *property* VoltageGround.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.VoltageCoupling"></a>

### *property* VoltageGround.VoltageCoupling *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling](../../../../../../v241/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageCoupling.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VoltageGround.Activate"></a>

### VoltageGround.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.AddComment"></a>

### VoltageGround.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.AddFigure"></a>

### VoltageGround.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.AddImage"></a>

### VoltageGround.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.CopyTo"></a>

### VoltageGround.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.CreateParameter"></a>

### VoltageGround.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Delete"></a>

### VoltageGround.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Duplicate"></a>

### VoltageGround.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetChildren"></a>

### VoltageGround.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetParameter"></a>

### VoltageGround.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GroupAllSimilarChildren"></a>

### VoltageGround.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GroupSimilarObjects"></a>

### VoltageGround.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.PromoteToNamedSelection"></a>

### VoltageGround.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.PropertyByAPIName"></a>

### VoltageGround.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.PropertyByName"></a>

### VoltageGround.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.RemoveParameter"></a>

### VoltageGround.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

