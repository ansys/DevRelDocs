# `Voltage`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Voltage"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Voltage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Voltage.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Voltage.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Voltage.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Voltage.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Voltage.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Voltage.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Voltage.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Voltage.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Voltage.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#Voltage.GetActivateAtLoadStep)     | Gets whether the voltage is active at the specified load step.                    |
| [`GetChildren`](#Voltage.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Voltage.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Voltage.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Voltage.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#Voltage.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#Voltage.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Voltage.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Voltage.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#Voltage.SetActivateAtLoadStep)     | Sets whether the voltage is active at the specified load step.                    |

### Properties

| Name | Description |
|---------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Voltage.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Voltage.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Voltage.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Voltage.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Voltage.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Voltage.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#Voltage.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#Voltage.Magnitude)                             | Gets the Magnitude.                                           |
| [`NumberOfSegments`](#Voltage.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`PhaseAngle`](#Voltage.PhaseAngle)                           | Gets or sets the PhaseAngle.                                  |
| [`Properties`](#Voltage.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Voltage.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#Voltage.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#Voltage.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Voltage.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`VoltageCoupling`](#Voltage.VoltageCoupling)                 | Gets or sets the VoltageCoupling.                             |

<a id="property-detail"></a>

## Property detail

<a id="Voltage.Children"></a>

### *property* Voltage.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Comments"></a>

### *property* Voltage.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.DataModelObjectCategory"></a>

### *property* Voltage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Figures"></a>

### *property* Voltage.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Images"></a>

### *property* Voltage.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.InternalObject"></a>

### *property* Voltage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Location"></a>

### *property* Voltage.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Magnitude"></a>

### *property* Voltage.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.NumberOfSegments"></a>

### *property* Voltage.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.PhaseAngle"></a>

### *property* Voltage.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Properties"></a>

### *property* Voltage.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.ReadOnly"></a>

### *property* Voltage.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.SharedRefBody"></a>

### *property* Voltage.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Suppressed"></a>

### *property* Voltage.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.VisibleProperties"></a>

### *property* Voltage.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.VoltageCoupling"></a>

### *property* Voltage.VoltageCoupling *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling](Coupling.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageCoupling.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Voltage.Activate"></a>

### Voltage.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.AddComment"></a>

### Voltage.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.AddFigure"></a>

### Voltage.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.AddImage"></a>

### Voltage.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Voltage.CopyTo"></a>

### Voltage.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.CreateParameter"></a>

### Voltage.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Delete"></a>

### Voltage.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Duplicate"></a>

### Voltage.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetActivateAtLoadStep"></a>

### Voltage.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the voltage is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetChildren"></a>

### Voltage.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetParameter"></a>

### Voltage.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GroupAllSimilarChildren"></a>

### Voltage.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GroupSimilarObjects"></a>

### Voltage.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.PromoteToNamedSelection"></a>

### Voltage.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.PropertyByAPIName"></a>

### Voltage.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Voltage.PropertyByName"></a>

### Voltage.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.RemoveParameter"></a>

### Voltage.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.SetActivateAtLoadStep"></a>

### Voltage.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets whether the voltage is active at the specified load step.

<!-- !! processed by numpydoc !! -->

