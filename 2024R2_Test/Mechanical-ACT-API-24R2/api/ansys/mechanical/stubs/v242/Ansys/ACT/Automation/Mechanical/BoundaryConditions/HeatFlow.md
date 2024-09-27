# `HeatFlow`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.HeatFlow"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.HeatFlow

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a HeatFlow.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#HeatFlow.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#HeatFlow.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#HeatFlow.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#HeatFlow.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#HeatFlow.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#HeatFlow.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#HeatFlow.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#HeatFlow.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#HeatFlow.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`GetChildren`](#HeatFlow.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#HeatFlow.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#HeatFlow.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#HeatFlow.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#HeatFlow.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#HeatFlow.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#HeatFlow.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#HeatFlow.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#HeatFlow.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#HeatFlow.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`SetComponentActivateAtLoadStep`](#HeatFlow.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#HeatFlow.Children)                               | Gets the list of children.                                    |
| [`Comments`](#HeatFlow.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#HeatFlow.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DefineAs`](#HeatFlow.DefineAs)                               | Gets or sets the DefineAs.                                    |
| [`Figures`](#HeatFlow.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#HeatFlow.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#HeatFlow.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#HeatFlow.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#HeatFlow.Magnitude)                             | Gets the Magnitude.                                           |
| [`NumberOfSegments`](#HeatFlow.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#HeatFlow.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#HeatFlow.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#HeatFlow.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#HeatFlow.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#HeatFlow.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="HeatFlow.Children"></a>

### *property* HeatFlow.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Comments"></a>

### *property* HeatFlow.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.DataModelObjectCategory"></a>

### *property* HeatFlow.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.DefineAs"></a>

### *property* HeatFlow.DefineAs *: [Ansys.Mechanical.DataModel.Enums.LoadVariationType](../../../../Mechanical/DataModel/Enums/LoadVariationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineAs.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Figures"></a>

### *property* HeatFlow.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Images"></a>

### *property* HeatFlow.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.InternalObject"></a>

### *property* HeatFlow.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Location"></a>

### *property* HeatFlow.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Magnitude"></a>

### *property* HeatFlow.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.NumberOfSegments"></a>

### *property* HeatFlow.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Properties"></a>

### *property* HeatFlow.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.ReadOnly"></a>

### *property* HeatFlow.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.SharedRefBody"></a>

### *property* HeatFlow.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Suppressed"></a>

### *property* HeatFlow.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.VisibleProperties"></a>

### *property* HeatFlow.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HeatFlow.Activate"></a>

### HeatFlow.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.AddComment"></a>

### HeatFlow.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.AddFigure"></a>

### HeatFlow.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.AddImage"></a>

### HeatFlow.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.CopyTo"></a>

### HeatFlow.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.CreateParameter"></a>

### HeatFlow.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Delete"></a>

### HeatFlow.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Duplicate"></a>

### HeatFlow.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetActivateAtLoadStep"></a>

### HeatFlow.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetChildren"></a>

### HeatFlow.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetComponentActivateAtLoadStep"></a>

### HeatFlow.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetParameter"></a>

### HeatFlow.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GroupAllSimilarChildren"></a>

### HeatFlow.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GroupSimilarObjects"></a>

### HeatFlow.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.PromoteToNamedSelection"></a>

### HeatFlow.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.PropertyByAPIName"></a>

### HeatFlow.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.PropertyByName"></a>

### HeatFlow.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.RemoveParameter"></a>

### HeatFlow.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.SetActivateAtLoadStep"></a>

### HeatFlow.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.SetComponentActivateAtLoadStep"></a>

### HeatFlow.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

