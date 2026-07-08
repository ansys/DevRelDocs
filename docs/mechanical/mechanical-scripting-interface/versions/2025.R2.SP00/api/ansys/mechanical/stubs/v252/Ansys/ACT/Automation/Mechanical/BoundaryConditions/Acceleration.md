# `Acceleration`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Acceleration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Acceleration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Acceleration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Acceleration.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Acceleration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Acceleration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Acceleration.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Acceleration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Acceleration.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Acceleration.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Acceleration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#Acceleration.GetActivateAtLoadStep)     | Gets whether the acceleration is active at the specified load step.               |
| [`GetChildren`](#Acceleration.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Acceleration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Acceleration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Acceleration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Acceleration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Acceleration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Acceleration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#Acceleration.SetActivateAtLoadStep)     | Sets whether the acceleration is active at the specified load step.               |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`AbsoluteResult`](#Acceleration.AbsoluteResult)                   | Gets or sets the AbsoluteResult.                              |
| [`BaseExcitation`](#Acceleration.BaseExcitation)                   | Gets or sets the BaseExcitation.                              |
| [`BoundaryCondition`](#Acceleration.BoundaryCondition)             | Gets or sets the BoundaryCondition.                           |
| [`Children`](#Acceleration.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Acceleration.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#Acceleration.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#Acceleration.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#Acceleration.DefineBy)                               | Gets or sets the DefineBy.                                    |
| [`Direction`](#Acceleration.Direction)                             | Gets or sets the Direction.                                   |
| [`Figures`](#Acceleration.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Acceleration.Images)                                   | Gets the list of associated images.                           |
| [`IndependentVariable`](#Acceleration.IndependentVariable)         | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#Acceleration.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LoadVectorAssignment`](#Acceleration.LoadVectorAssignment)       | Gets or sets the LoadVectorAssignment.                        |
| [`LoadVectorNumber`](#Acceleration.LoadVectorNumber)               | Gets or sets the LoadVectorNumber.                            |
| [`LoadVectorNumberX`](#Acceleration.LoadVectorNumberX)             |                                                               |
| [`LoadVectorNumberY`](#Acceleration.LoadVectorNumberY)             |                                                               |
| [`LoadVectorNumberZ`](#Acceleration.LoadVectorNumberZ)             |                                                               |
| [`Location`](#Acceleration.Location)                               | Gets the Location.                                            |
| [`Magnitude`](#Acceleration.Magnitude)                             | Gets the Magnitude.                                           |
| [`MagnitudeImag`](#Acceleration.MagnitudeImag)                     | Gets the MagnitudeImag.                                       |
| [`NumberOfSegments`](#Acceleration.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`PhaseAngle`](#Acceleration.PhaseAngle)                           | Gets the PhaseAngle.                                          |
| [`Properties`](#Acceleration.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Acceleration.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`RpmSelection`](#Acceleration.RpmSelection)                       | Gets or sets the RPMSelection.                                |
| [`StepSelection`](#Acceleration.StepSelection)                     | Gets or sets the StepSelection.                               |
| [`StepVarying`](#Acceleration.StepVarying)                         | Gets or sets the StepVarying.                                 |
| [`Suppressed`](#Acceleration.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Acceleration.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`XComponent`](#Acceleration.XComponent)                           | Gets the XComponent.                                          |
| [`YComponent`](#Acceleration.YComponent)                           | Gets the YComponent.                                          |
| [`ZComponent`](#Acceleration.ZComponent)                           | Gets the ZComponent.                                          |

<a id="property-detail"></a>

## Property detail

<a id="Acceleration.AbsoluteResult"></a>

### *property* Acceleration.AbsoluteResult *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AbsoluteResult.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.BaseExcitation"></a>

### *property* Acceleration.BaseExcitation *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseExcitation.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.BoundaryCondition"></a>

### *property* Acceleration.BoundaryCondition *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Children"></a>

### *property* Acceleration.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Comments"></a>

### *property* Acceleration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.CoordinateSystem"></a>

### *property* Acceleration.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.DataModelObjectCategory"></a>

### *property* Acceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.DefineBy"></a>

### *property* Acceleration.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Direction"></a>

### *property* Acceleration.Direction *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Figures"></a>

### *property* Acceleration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Images"></a>

### *property* Acceleration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.IndependentVariable"></a>

### *property* Acceleration.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.InternalObject"></a>

### *property* Acceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAccelerationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.LoadVectorAssignment"></a>

### *property* Acceleration.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.LoadVectorNumber"></a>

### *property* Acceleration.LoadVectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.LoadVectorNumberX"></a>

### *property* Acceleration.LoadVectorNumberX *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

<a id="Acceleration.LoadVectorNumberY"></a>

### *property* Acceleration.LoadVectorNumberY *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

<a id="Acceleration.LoadVectorNumberZ"></a>

### *property* Acceleration.LoadVectorNumberZ *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

<a id="Acceleration.Location"></a>

### *property* Acceleration.Location *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Magnitude"></a>

### *property* Acceleration.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.MagnitudeImag"></a>

### *property* Acceleration.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.NumberOfSegments"></a>

### *property* Acceleration.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.PhaseAngle"></a>

### *property* Acceleration.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Properties"></a>

### *property* Acceleration.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.ReadOnly"></a>

### *property* Acceleration.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.RpmSelection"></a>

### *property* Acceleration.RpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPMSelection.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.StepSelection"></a>

### *property* Acceleration.StepSelection *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.StepVarying"></a>

### *property* Acceleration.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Suppressed"></a>

### *property* Acceleration.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.VisibleProperties"></a>

### *property* Acceleration.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.XComponent"></a>

### *property* Acceleration.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.YComponent"></a>

### *property* Acceleration.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.ZComponent"></a>

### *property* Acceleration.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Acceleration.Activate"></a>

### Acceleration.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.AddComment"></a>

### Acceleration.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.AddFigure"></a>

### Acceleration.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.AddImage"></a>

### Acceleration.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.CopyTo"></a>

### Acceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.CreateParameter"></a>

### Acceleration.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Delete"></a>

### Acceleration.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Duplicate"></a>

### Acceleration.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetActivateAtLoadStep"></a>

### Acceleration.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets whether the acceleration is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetChildren"></a>

### Acceleration.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetParameter"></a>

### Acceleration.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GroupAllSimilarChildren"></a>

### Acceleration.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GroupSimilarObjects"></a>

### Acceleration.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.PropertyByAPIName"></a>

### Acceleration.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.PropertyByName"></a>

### Acceleration.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.RemoveParameter"></a>

### Acceleration.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.SetActivateAtLoadStep"></a>

### Acceleration.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets whether the acceleration is active at the specified load step.

<!-- !! processed by numpydoc !! -->

