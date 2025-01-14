# `Temperature`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Temperature"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Temperature

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Temperature class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|--------------------------------------------------------------------|
| [`Activate`](#Temperature.Activate)                               | Activate the current object.                                       |
| [`AddComment`](#Temperature.AddComment)                           | Creates a new child Comment.                                       |
| [`AddFigure`](#Temperature.AddFigure)                             | Creates a new child Figure.                                        |
| [`AddImage`](#Temperature.AddImage)                               | Creates a new child Image.                                         |
| [`CopyTo`](#Temperature.CopyTo)                                   | Copies all visible properties from this object to another.         |
| [`CreateParameter`](#Temperature.CreateParameter)                 | CreateParameter method.                                            |
| [`Delete`](#Temperature.Delete)                                   | Run the Delete action.                                             |
| [`Duplicate`](#Temperature.Duplicate)                             | Creates a copy of the current DataModelObject.                     |
| [`GetActivateAtLoadStep`](#Temperature.GetActivateAtLoadStep)     | Gets whether the temperature is active at the specified load step. |
| [`GetChildren`](#Temperature.GetChildren)                         | Gets the list of children, filtered by type.                       |
| [`GetParameter`](#Temperature.GetParameter)                       | Gets the parameter corresponding to the given property.            |
| [`GroupAllSimilarChildren`](#Temperature.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                            |
| [`GroupSimilarObjects`](#Temperature.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                |
| [`PromoteToNamedSelection`](#Temperature.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                            |
| [`PropertyByAPIName`](#Temperature.PropertyByAPIName)             | Get a property by its API name.                                    |
| [`PropertyByName`](#Temperature.PropertyByName)                   | Get a property by its unique name.                                 |
| [`RemoveParameter`](#Temperature.RemoveParameter)                 | RemoveParameter method.                                            |
| [`SetActivateAtLoadStep`](#Temperature.SetActivateAtLoadStep)     | Sets whether the temperature is active at the specified load step. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ApplyToEntireBody`](#Temperature.ApplyToEntireBody)                     | Gets or sets the ApplyToEntireBody.                           |
| [`Children`](#Temperature.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#Temperature.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Temperature.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#Temperature.DefineBy)                                       | Gets the DefineBy.                                            |
| [`Figures`](#Temperature.Figures)                                         | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#Temperature.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`Images`](#Temperature.Images)                                           | Gets the list of associated images.                           |
| [`IndependentVariable`](#Temperature.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#Temperature.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Location`](#Temperature.Location)                                       | Gets or sets the Location.                                    |
| [`Magnitude`](#Temperature.Magnitude)                                     | Gets or sets the Magnitude.                                   |
| [`NumberOfSegments`](#Temperature.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#Temperature.Properties)                                   | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#Temperature.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#Temperature.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#Temperature.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#Temperature.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`ShellFace`](#Temperature.ShellFace)                                     | Gets or sets the ShellFace.                                   |
| [`Suppressed`](#Temperature.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Temperature.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XYZFunctionCoordinateSystem`](#Temperature.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |

<a id="property-detail"></a>

## Property detail

<a id="Temperature.ApplyToEntireBody"></a>

### *property* Temperature.ApplyToEntireBody *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApplyToEntireBody.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Children"></a>

### *property* Temperature.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Comments"></a>

### *property* Temperature.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.DataModelObjectCategory"></a>

### *property* Temperature.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.DefineBy"></a>

### *property* Temperature.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Figures"></a>

### *property* Temperature.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GraphControlsXAxis"></a>

### *property* Temperature.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Images"></a>

### *property* Temperature.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.IndependentVariable"></a>

### *property* Temperature.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.InternalObject"></a>

### *property* Temperature.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Location"></a>

### *property* Temperature.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Magnitude"></a>

### *property* Temperature.Magnitude *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.NumberOfSegments"></a>

### *property* Temperature.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Properties"></a>

### *property* Temperature.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.RangeMaximum"></a>

### *property* Temperature.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.RangeMinimum"></a>

### *property* Temperature.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.ReadOnly"></a>

### *property* Temperature.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.SharedRefBody"></a>

### *property* Temperature.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.ShellFace"></a>

### *property* Temperature.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Suppressed"></a>

### *property* Temperature.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.VisibleProperties"></a>

### *property* Temperature.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.XYZFunctionCoordinateSystem"></a>

### *property* Temperature.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Temperature.Activate"></a>

### Temperature.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.AddComment"></a>

### Temperature.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.AddFigure"></a>

### Temperature.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.AddImage"></a>

### Temperature.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Temperature.CopyTo"></a>

### Temperature.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.CreateParameter"></a>

### Temperature.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Delete"></a>

### Temperature.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Duplicate"></a>

### Temperature.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetActivateAtLoadStep"></a>

### Temperature.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the temperature is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetChildren"></a>

### Temperature.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetParameter"></a>

### Temperature.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GroupAllSimilarChildren"></a>

### Temperature.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GroupSimilarObjects"></a>

### Temperature.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.PromoteToNamedSelection"></a>

### Temperature.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.PropertyByAPIName"></a>

### Temperature.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Temperature.PropertyByName"></a>

### Temperature.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.RemoveParameter"></a>

### Temperature.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

RemoveParameter method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.SetActivateAtLoadStep"></a>

### Temperature.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets whether the temperature is active at the specified load step.

<!-- !! processed by numpydoc !! -->

