# `HeatFlux`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.HeatFlux"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.HeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a HeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#HeatFlux.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#HeatFlux.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#HeatFlux.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#HeatFlux.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#HeatFlux.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#HeatFlux.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#HeatFlux.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#HeatFlux.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#HeatFlux.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`GetChildren`](#HeatFlux.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#HeatFlux.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#HeatFlux.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#HeatFlux.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#HeatFlux.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#HeatFlux.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#HeatFlux.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#HeatFlux.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#HeatFlux.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#HeatFlux.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`SetComponentActivateAtLoadStep`](#HeatFlux.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#HeatFlux.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#HeatFlux.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#HeatFlux.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`Figures`](#HeatFlux.Figures)                                         | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#HeatFlux.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`Images`](#HeatFlux.Images)                                           | Gets the list of associated images.                           |
| [`IndependentVariable`](#HeatFlux.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#HeatFlux.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Location`](#HeatFlux.Location)                                       | Gets or sets the Location.                                    |
| [`Magnitude`](#HeatFlux.Magnitude)                                     | Gets the Magnitude.                                           |
| [`NumberOfSegments`](#HeatFlux.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#HeatFlux.Properties)                                   | Gets the list of properties for this object.                  |
| [`ReadOnly`](#HeatFlux.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#HeatFlux.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#HeatFlux.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#HeatFlux.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XYZFunctionCoordinateSystem`](#HeatFlux.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |

<a id="property-detail"></a>

## Property detail

<a id="HeatFlux.Children"></a>

### *property* HeatFlux.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Comments"></a>

### *property* HeatFlux.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.DataModelObjectCategory"></a>

### *property* HeatFlux.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Figures"></a>

### *property* HeatFlux.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GraphControlsXAxis"></a>

### *property* HeatFlux.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Images"></a>

### *property* HeatFlux.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.IndependentVariable"></a>

### *property* HeatFlux.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.InternalObject"></a>

### *property* HeatFlux.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Location"></a>

### *property* HeatFlux.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Magnitude"></a>

### *property* HeatFlux.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.NumberOfSegments"></a>

### *property* HeatFlux.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Properties"></a>

### *property* HeatFlux.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.ReadOnly"></a>

### *property* HeatFlux.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.SharedRefBody"></a>

### *property* HeatFlux.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Suppressed"></a>

### *property* HeatFlux.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.VisibleProperties"></a>

### *property* HeatFlux.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.XYZFunctionCoordinateSystem"></a>

### *property* HeatFlux.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HeatFlux.Activate"></a>

### HeatFlux.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.AddComment"></a>

### HeatFlux.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.AddFigure"></a>

### HeatFlux.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.AddImage"></a>

### HeatFlux.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.CopyTo"></a>

### HeatFlux.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.CreateParameter"></a>

### HeatFlux.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Delete"></a>

### HeatFlux.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.Duplicate"></a>

### HeatFlux.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetActivateAtLoadStep"></a>

### HeatFlux.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetChildren"></a>

### HeatFlux.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetComponentActivateAtLoadStep"></a>

### HeatFlux.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GetParameter"></a>

### HeatFlux.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GroupAllSimilarChildren"></a>

### HeatFlux.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.GroupSimilarObjects"></a>

### HeatFlux.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.PromoteToNamedSelection"></a>

### HeatFlux.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.PropertyByAPIName"></a>

### HeatFlux.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.PropertyByName"></a>

### HeatFlux.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.RemoveParameter"></a>

### HeatFlux.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.SetActivateAtLoadStep"></a>

### HeatFlux.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlux.SetComponentActivateAtLoadStep"></a>

### HeatFlux.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

