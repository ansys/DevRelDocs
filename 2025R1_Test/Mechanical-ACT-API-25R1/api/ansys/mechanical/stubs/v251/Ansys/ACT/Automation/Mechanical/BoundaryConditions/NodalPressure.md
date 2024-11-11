# `NodalPressure`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalPressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodalPressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#NodalPressure.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#NodalPressure.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#NodalPressure.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#NodalPressure.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#NodalPressure.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#NodalPressure.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#NodalPressure.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#NodalPressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#NodalPressure.GetActivateAtLoadStep)                   | Gets whether the nodal pressure is active at the specified load step.             |
| [`GetChildren`](#NodalPressure.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#NodalPressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#NodalPressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#NodalPressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodalPressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#NodalPressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#NodalPressure.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#NodalPressure.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#NodalPressure.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#NodalPressure.SetActivateAtLoadStep)                   | Sets whether the nodal pressure is active at the specified load step.             |
| [`SetComponentActivateAtLoadStep`](#NodalPressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#NodalPressure.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#NodalPressure.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#NodalPressure.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#NodalPressure.DefineBy)                                       | Gets the DefineBy.                                            |
| [`Figures`](#NodalPressure.Figures)                                         | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#NodalPressure.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`Images`](#NodalPressure.Images)                                           | Gets the list of associated images.                           |
| [`IndependentVariable`](#NodalPressure.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#NodalPressure.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`LoadVectorAssignment`](#NodalPressure.LoadVectorAssignment)               | Gets or sets the LoadVectorAssignment.                        |
| [`LoadVectorNumber`](#NodalPressure.LoadVectorNumber)                       | Gets or sets the LoadVectorNumber.                            |
| [`Location`](#NodalPressure.Location)                                       | Gets or sets the Location.                                    |
| [`Magnitude`](#NodalPressure.Magnitude)                                     | Gets the Magnitude.                                           |
| [`NumberOfSegments`](#NodalPressure.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#NodalPressure.Properties)                                   | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#NodalPressure.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#NodalPressure.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#NodalPressure.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#NodalPressure.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#NodalPressure.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#NodalPressure.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XYZFunctionCoordinateSystem`](#NodalPressure.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |

<a id="property-detail"></a>

## Property detail

<a id="NodalPressure.Children"></a>

### *property* NodalPressure.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Comments"></a>

### *property* NodalPressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.DataModelObjectCategory"></a>

### *property* NodalPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.DefineBy"></a>

### *property* NodalPressure.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Figures"></a>

### *property* NodalPressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.GraphControlsXAxis"></a>

### *property* NodalPressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Images"></a>

### *property* NodalPressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.IndependentVariable"></a>

### *property* NodalPressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.InternalObject"></a>

### *property* NodalPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.LoadVectorAssignment"></a>

### *property* NodalPressure.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.LoadVectorNumber"></a>

### *property* NodalPressure.LoadVectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Location"></a>

### *property* NodalPressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Magnitude"></a>

### *property* NodalPressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.NumberOfSegments"></a>

### *property* NodalPressure.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Properties"></a>

### *property* NodalPressure.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.RangeMaximum"></a>

### *property* NodalPressure.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.RangeMinimum"></a>

### *property* NodalPressure.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.ReadOnly"></a>

### *property* NodalPressure.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.SharedRefBody"></a>

### *property* NodalPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Suppressed"></a>

### *property* NodalPressure.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.VisibleProperties"></a>

### *property* NodalPressure.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.XYZFunctionCoordinateSystem"></a>

### *property* NodalPressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalPressure.Activate"></a>

### NodalPressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.AddComment"></a>

### NodalPressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.AddFigure"></a>

### NodalPressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.AddImage"></a>

### NodalPressure.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.CopyTo"></a>

### NodalPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.CreateParameter"></a>

### NodalPressure.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Delete"></a>

### NodalPressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Duplicate"></a>

### NodalPressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.GetActivateAtLoadStep"></a>

### NodalPressure.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the nodal pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.GetChildren"></a>

### NodalPressure.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.GetComponentActivateAtLoadStep"></a>

### NodalPressure.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.GetParameter"></a>

### NodalPressure.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.GroupAllSimilarChildren"></a>

### NodalPressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.GroupSimilarObjects"></a>

### NodalPressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.PromoteToNamedSelection"></a>

### NodalPressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.PropertyByAPIName"></a>

### NodalPressure.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.PropertyByName"></a>

### NodalPressure.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.RemoveParameter"></a>

### NodalPressure.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.SetActivateAtLoadStep"></a>

### NodalPressure.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets whether the nodal pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.SetComponentActivateAtLoadStep"></a>

### NodalPressure.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

