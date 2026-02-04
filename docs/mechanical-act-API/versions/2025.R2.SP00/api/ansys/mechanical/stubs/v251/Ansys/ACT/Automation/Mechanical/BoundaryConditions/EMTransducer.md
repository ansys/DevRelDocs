# `EMTransducer`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.EMTransducer"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.EMTransducer

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EMTransducer.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#EMTransducer.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#EMTransducer.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#EMTransducer.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#EMTransducer.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#EMTransducer.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#EMTransducer.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#EMTransducer.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#EMTransducer.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#EMTransducer.GetActivateAtLoadStep)                   | Gets whether the EM transducer is active at the specified load step.              |
| [`GetChildren`](#EMTransducer.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#EMTransducer.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#EMTransducer.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#EMTransducer.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EMTransducer.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#EMTransducer.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#EMTransducer.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#EMTransducer.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#EMTransducer.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#EMTransducer.SetActivateAtLoadStep)                   | Sets whether the EM transducer is active at the specified load step.              |
| [`SetComponentActivateAtLoadStep`](#EMTransducer.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#EMTransducer.Children)                               | Gets the list of children.                                    |
| [`Comments`](#EMTransducer.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#EMTransducer.CoordinateSystem)               | Gets the CoordinateSystem.                                    |
| [`DataModelObjectCategory`](#EMTransducer.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#EMTransducer.Figures)                                 | Gets the list of associated figures.                          |
| [`GAPDirection`](#EMTransducer.GAPDirection)                       | Gets or sets the GAPDirection.                                |
| [`Images`](#EMTransducer.Images)                                   | Gets the list of associated images.                           |
| [`IndependentVariable`](#EMTransducer.IndependentVariable)         | Gets or sets the IndependentVariable.                         |
| [`InitialGap`](#EMTransducer.InitialGap)                           | Gets or sets the InitialGap.                                  |
| [`InternalObject`](#EMTransducer.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#EMTransducer.Location)                               | Gets or sets the Location.                                    |
| [`MinimalGap`](#EMTransducer.MinimalGap)                           | Gets or sets the MinimalGap.                                  |
| [`NumberOfSegments`](#EMTransducer.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#EMTransducer.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#EMTransducer.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#EMTransducer.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`StiffnessMethod`](#EMTransducer.StiffnessMethod)                 | Gets or sets the StiffnessMethod.                             |
| [`Suppressed`](#EMTransducer.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#EMTransducer.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`VoltageDifference`](#EMTransducer.VoltageDifference)             | Gets the VoltageDifference.                                   |
| [`ZCoordinate`](#EMTransducer.ZCoordinate)                         | Gets or sets the ZCoordinate.                                 |

<a id="property-detail"></a>

## Property detail

<a id="EMTransducer.Children"></a>

### *property* EMTransducer.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Comments"></a>

### *property* EMTransducer.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.CoordinateSystem"></a>

### *property* EMTransducer.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.DataModelObjectCategory"></a>

### *property* EMTransducer.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Figures"></a>

### *property* EMTransducer.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GAPDirection"></a>

### *property* EMTransducer.GAPDirection *: [Ansys.Mechanical.DataModel.Enums.GAPDirectionType](../../../../Mechanical/DataModel/Enums/GAPDirectionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GAPDirectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GAPDirection.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Images"></a>

### *property* EMTransducer.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.IndependentVariable"></a>

### *property* EMTransducer.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.InitialGap"></a>

### *property* EMTransducer.InitialGap *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialGap.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.InternalObject"></a>

### *property* EMTransducer.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Location"></a>

### *property* EMTransducer.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.MinimalGap"></a>

### *property* EMTransducer.MinimalGap *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimalGap.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.NumberOfSegments"></a>

### *property* EMTransducer.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Properties"></a>

### *property* EMTransducer.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.ReadOnly"></a>

### *property* EMTransducer.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.SharedRefBody"></a>

### *property* EMTransducer.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.StiffnessMethod"></a>

### *property* EMTransducer.StiffnessMethod *: [Ansys.Mechanical.DataModel.Enums.StiffnessMethodType](../../../../Mechanical/DataModel/Enums/StiffnessMethodType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StiffnessMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessMethod.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Suppressed"></a>

### *property* EMTransducer.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.VisibleProperties"></a>

### *property* EMTransducer.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.VoltageDifference"></a>

### *property* EMTransducer.VoltageDifference *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VoltageDifference.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.ZCoordinate"></a>

### *property* EMTransducer.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EMTransducer.Activate"></a>

### EMTransducer.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.AddComment"></a>

### EMTransducer.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.AddFigure"></a>

### EMTransducer.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.AddImage"></a>

### EMTransducer.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.CopyTo"></a>

### EMTransducer.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.CreateParameter"></a>

### EMTransducer.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Delete"></a>

### EMTransducer.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Duplicate"></a>

### EMTransducer.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetActivateAtLoadStep"></a>

### EMTransducer.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the EM transducer is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetChildren"></a>

### EMTransducer.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetComponentActivateAtLoadStep"></a>

### EMTransducer.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetParameter"></a>

### EMTransducer.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GroupAllSimilarChildren"></a>

### EMTransducer.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GroupSimilarObjects"></a>

### EMTransducer.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.PromoteToNamedSelection"></a>

### EMTransducer.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.PropertyByAPIName"></a>

### EMTransducer.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.PropertyByName"></a>

### EMTransducer.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.RemoveParameter"></a>

### EMTransducer.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.SetActivateAtLoadStep"></a>

### EMTransducer.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets whether the EM transducer is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.SetComponentActivateAtLoadStep"></a>

### EMTransducer.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

