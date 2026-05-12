# `LinePressure`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LinePressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.LinePressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LinePressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#LinePressure.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#LinePressure.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#LinePressure.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#LinePressure.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#LinePressure.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#LinePressure.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#LinePressure.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#LinePressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#LinePressure.GetActivateAtLoadStep)                   | Gets whether the line pressure is active at the specified load step.              |
| [`GetChildren`](#LinePressure.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#LinePressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#LinePressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#LinePressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LinePressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#LinePressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#LinePressure.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#LinePressure.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#LinePressure.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#LinePressure.SetActivateAtLoadStep)                   | Sets whether the line pressure is active at the specified load step.              |
| [`SetComponentActivateAtLoadStep`](#LinePressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#LinePressure.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#LinePressure.Comments)                                       | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#LinePressure.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#LinePressure.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#LinePressure.DefineBy)                                       | Gets or sets the DefineBy.                                    |
| [`Direction`](#LinePressure.Direction)                                     | Gets or sets the Direction.                                   |
| [`Figures`](#LinePressure.Figures)                                         | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#LinePressure.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`Images`](#LinePressure.Images)                                           | Gets the list of associated images.                           |
| [`IndependentVariable`](#LinePressure.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#LinePressure.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Location`](#LinePressure.Location)                                       | Gets or sets the Location.                                    |
| [`Magnitude`](#LinePressure.Magnitude)                                     | Gets the Magnitude.                                           |
| [`NumberOfSegments`](#LinePressure.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`PhaseAngle`](#LinePressure.PhaseAngle)                                   | Gets or sets the PhaseAngle.                                  |
| [`Properties`](#LinePressure.Properties)                                   | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#LinePressure.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#LinePressure.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#LinePressure.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#LinePressure.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#LinePressure.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#LinePressure.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XComponent`](#LinePressure.XComponent)                                   | Gets the XComponent.                                          |
| [`XYZFunctionCoordinateSystem`](#LinePressure.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`YComponent`](#LinePressure.YComponent)                                   | Gets the YComponent.                                          |
| [`ZComponent`](#LinePressure.ZComponent)                                   | Gets the ZComponent.                                          |

<a id="property-detail"></a>

## Property detail

<a id="LinePressure.Children"></a>

### *property* LinePressure.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Comments"></a>

### *property* LinePressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.CoordinateSystem"></a>

### *property* LinePressure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.DataModelObjectCategory"></a>

### *property* LinePressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.DefineBy"></a>

### *property* LinePressure.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Direction"></a>

### *property* LinePressure.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Figures"></a>

### *property* LinePressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GraphControlsXAxis"></a>

### *property* LinePressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Images"></a>

### *property* LinePressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.IndependentVariable"></a>

### *property* LinePressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.InternalObject"></a>

### *property* LinePressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Location"></a>

### *property* LinePressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Magnitude"></a>

### *property* LinePressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.NumberOfSegments"></a>

### *property* LinePressure.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.PhaseAngle"></a>

### *property* LinePressure.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Properties"></a>

### *property* LinePressure.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.RangeMaximum"></a>

### *property* LinePressure.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.RangeMinimum"></a>

### *property* LinePressure.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.ReadOnly"></a>

### *property* LinePressure.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.SharedRefBody"></a>

### *property* LinePressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Suppressed"></a>

### *property* LinePressure.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.VisibleProperties"></a>

### *property* LinePressure.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.XComponent"></a>

### *property* LinePressure.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.XYZFunctionCoordinateSystem"></a>

### *property* LinePressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.YComponent"></a>

### *property* LinePressure.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.ZComponent"></a>

### *property* LinePressure.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LinePressure.Activate"></a>

### LinePressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.AddComment"></a>

### LinePressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.AddFigure"></a>

### LinePressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.AddImage"></a>

### LinePressure.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.CopyTo"></a>

### LinePressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.CreateParameter"></a>

### LinePressure.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Delete"></a>

### LinePressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Duplicate"></a>

### LinePressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetActivateAtLoadStep"></a>

### LinePressure.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the line pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetChildren"></a>

### LinePressure.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetComponentActivateAtLoadStep"></a>

### LinePressure.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetParameter"></a>

### LinePressure.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GroupAllSimilarChildren"></a>

### LinePressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GroupSimilarObjects"></a>

### LinePressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.PromoteToNamedSelection"></a>

### LinePressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.PropertyByAPIName"></a>

### LinePressure.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.PropertyByName"></a>

### LinePressure.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.RemoveParameter"></a>

### LinePressure.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.SetActivateAtLoadStep"></a>

### LinePressure.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets whether the line pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.SetComponentActivateAtLoadStep"></a>

### LinePressure.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

