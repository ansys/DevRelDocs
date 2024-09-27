# `Velocity`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Velocity"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Velocity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Velocity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Velocity.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#Velocity.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#Velocity.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#Velocity.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#Velocity.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Velocity.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#Velocity.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#Velocity.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#Velocity.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`GetChildren`](#Velocity.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#Velocity.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#Velocity.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Velocity.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Velocity.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#Velocity.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#Velocity.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#Velocity.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Velocity.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#Velocity.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`SetComponentActivateAtLoadStep`](#Velocity.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Velocity.Children)                                   | Gets the list of children.                                    |
| [`Comments`](#Velocity.Comments)                                   | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#Velocity.CoordinateSystem)                   | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#Velocity.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#Velocity.DefineBy)                                   | Gets or sets the DefineBy.                                    |
| [`DynamicRelaxationBehavior`](#Velocity.DynamicRelaxationBehavior) | Gets or sets the DynamicRelaxationBehavior.                   |
| [`Figures`](#Velocity.Figures)                                     | Gets the list of associated figures.                          |
| [`Images`](#Velocity.Images)                                       | Gets the list of associated images.                           |
| [`InternalObject`](#Velocity.InternalObject)                       | Gets the internal object. For advanced usage only.            |
| [`Location`](#Velocity.Location)                                   | Gets or sets the Location.                                    |
| [`NumberOfSegments`](#Velocity.NumberOfSegments)                   | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#Velocity.Properties)                               | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Velocity.ReadOnly)                                   | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#Velocity.SharedRefBody)                         | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#Velocity.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Velocity.VisibleProperties)                 | Gets the list of properties that are visible for this object. |
| [`XComponent`](#Velocity.XComponent)                               | Gets the XComponent.                                          |
| [`YComponent`](#Velocity.YComponent)                               | Gets the YComponent.                                          |
| [`ZComponent`](#Velocity.ZComponent)                               | Gets the ZComponent.                                          |

<a id="property-detail"></a>

## Property detail

<a id="Velocity.Children"></a>

### *property* Velocity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.Comments"></a>

### *property* Velocity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.CoordinateSystem"></a>

### *property* Velocity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.DataModelObjectCategory"></a>

### *property* Velocity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.DefineBy"></a>

### *property* Velocity.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.DynamicRelaxationBehavior"></a>

### *property* Velocity.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.Figures"></a>

### *property* Velocity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.Images"></a>

### *property* Velocity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.InternalObject"></a>

### *property* Velocity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.Location"></a>

### *property* Velocity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.NumberOfSegments"></a>

### *property* Velocity.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.Properties"></a>

### *property* Velocity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.ReadOnly"></a>

### *property* Velocity.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.SharedRefBody"></a>

### *property* Velocity.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.Suppressed"></a>

### *property* Velocity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.VisibleProperties"></a>

### *property* Velocity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.XComponent"></a>

### *property* Velocity.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.YComponent"></a>

### *property* Velocity.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.ZComponent"></a>

### *property* Velocity.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Velocity.Activate"></a>

### Velocity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.AddComment"></a>

### Velocity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.AddFigure"></a>

### Velocity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.AddImage"></a>

### Velocity.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Velocity.CopyTo"></a>

### Velocity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.CreateParameter"></a>

### Velocity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.Delete"></a>

### Velocity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.Duplicate"></a>

### Velocity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.GetActivateAtLoadStep"></a>

### Velocity.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.GetChildren"></a>

### Velocity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.GetComponentActivateAtLoadStep"></a>

### Velocity.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.GetParameter"></a>

### Velocity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.GroupAllSimilarChildren"></a>

### Velocity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.GroupSimilarObjects"></a>

### Velocity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.PromoteToNamedSelection"></a>

### Velocity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.PropertyByAPIName"></a>

### Velocity.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Velocity.PropertyByName"></a>

### Velocity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.RemoveParameter"></a>

### Velocity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.SetActivateAtLoadStep"></a>

### Velocity.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Velocity.SetComponentActivateAtLoadStep"></a>

### Velocity.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

