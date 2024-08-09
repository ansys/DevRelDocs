# `Voltage`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Voltage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Voltage.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#Voltage.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#Voltage.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`PromoteToNamedSelection`](#Voltage.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#Voltage.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Voltage.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Voltage.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Voltage.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Voltage.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Voltage.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Voltage.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Voltage.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Voltage.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Voltage.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Voltage.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Voltage.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Voltage.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Voltage.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------|---------------------------------------------------------------|
| [`Location`](#Voltage.Location)                               | Gets or sets the Location.                                    |
| [`InternalObject`](#id0)                                      | Gets the internal object. For advanced usage only.            |
| [`NumberOfSegments`](#Voltage.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`Magnitude`](#Voltage.Magnitude)                             | Gets the Magnitude.                                           |
| [`PhaseAngle`](#Voltage.PhaseAngle)                           | Gets or sets the PhaseAngle.                                  |
| [`VoltageCoupling`](#Voltage.VoltageCoupling)                 | Gets or sets the VoltageCoupling.                             |
| [`DataModelObjectCategory`](#Voltage.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Suppressed`](#Voltage.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#Voltage.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#Voltage.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Voltage.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#Voltage.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Voltage.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#Voltage.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                      | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Voltage.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Voltage.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Voltage.Location"></a>

### *property* Voltage.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.InternalObject"></a>

### *property* Voltage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.NumberOfSegments"></a>

### *property* Voltage.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Magnitude"></a>

### *property* Voltage.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.PhaseAngle"></a>

### *property* Voltage.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.VoltageCoupling"></a>

### *property* Voltage.VoltageCoupling *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling](../../../../../../v241/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageCoupling.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.DataModelObjectCategory"></a>

### *property* Voltage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Suppressed"></a>

### *property* Voltage.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.SharedRefBody"></a>

### *property* Voltage.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Children"></a>

### *property* Voltage.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Comments"></a>

### *property* Voltage.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Figures"></a>

### *property* Voltage.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Images"></a>

### *property* Voltage.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.ReadOnly"></a>

### *property* Voltage.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Voltage.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Properties"></a>

### *property* Voltage.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.VisibleProperties"></a>

### *property* Voltage.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Voltage.GetActivateAtLoadStep"></a>

### Voltage.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.SetActivateAtLoadStep"></a>

### Voltage.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.PromoteToNamedSelection"></a>

### Voltage.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Delete"></a>

### Voltage.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetChildren"></a>

### Voltage.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Voltage.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### Voltage.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Activate"></a>

### Voltage.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.CopyTo"></a>

### Voltage.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Duplicate"></a>

### Voltage.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GroupAllSimilarChildren"></a>

### Voltage.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GroupSimilarObjects"></a>

### Voltage.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.PropertyByName"></a>

### Voltage.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.PropertyByAPIName"></a>

### Voltage.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.CreateParameter"></a>

### Voltage.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetParameter"></a>

### Voltage.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.RemoveParameter"></a>

### Voltage.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

