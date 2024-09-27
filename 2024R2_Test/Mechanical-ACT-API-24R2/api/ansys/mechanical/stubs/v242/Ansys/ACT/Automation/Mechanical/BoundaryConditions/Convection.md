# `Convection`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Convection"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Convection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Convection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Convection.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#Convection.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#Convection.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#Convection.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#Convection.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Convection.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#Convection.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#Convection.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#Convection.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`GetChildren`](#Convection.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#Convection.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#Convection.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Convection.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Convection.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#Convection.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#Convection.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#Convection.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Convection.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#Convection.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`SetComponentActivateAtLoadStep`](#Convection.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AmbientTemperature`](#Convection.AmbientTemperature)                   | Gets the AmbientTemperature.                                  |
| [`Children`](#Convection.Children)                                       | Gets the list of children.                                    |
| [`CoefficientType`](#Convection.CoefficientType)                         | Gets or sets the CoefficientType.                             |
| [`Comments`](#Convection.Comments)                                       | Gets the list of associated comments.                         |
| [`ConvectionMatrix`](#Convection.ConvectionMatrix)                       | Gets or sets the ConvectionMatrix.                            |
| [`DataModelObjectCategory`](#Convection.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`DisplayConnectionLines`](#Convection.DisplayConnectionLines)           | Gets or sets the DisplayConnectionLines.                      |
| [`EditDataFor`](#Convection.EditDataFor)                                 | Gets or sets the EditDataFor.                                 |
| [`Figures`](#Convection.Figures)                                         | Gets the list of associated figures.                          |
| [`FilmCoefficient`](#Convection.FilmCoefficient)                         | Gets the FilmCoefficient.                                     |
| [`FluidFlowEdge`](#Convection.FluidFlowEdge)                             | Gets or sets the FluidFlowEdge.                               |
| [`FluidFlowSelection`](#Convection.FluidFlowSelection)                   | Gets or sets the FluidFlowSelection.                          |
| [`GraphControlsXAxis`](#Convection.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`HasFluidFlow`](#Convection.HasFluidFlow)                               | Gets or sets the HasFluidFlow.                                |
| [`Images`](#Convection.Images)                                           | Gets the list of associated images.                           |
| [`IndependentVariable`](#Convection.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#Convection.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Location`](#Convection.Location)                                       | Gets or sets the Location.                                    |
| [`NumberOfSegments`](#Convection.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#Convection.Properties)                                   | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#Convection.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#Convection.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#Convection.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#Convection.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#Convection.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Convection.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XYZFunctionCoordinateSystem`](#Convection.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |

<a id="property-detail"></a>

## Property detail

<a id="Convection.AmbientTemperature"></a>

### *property* Convection.AmbientTemperature *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AmbientTemperature.

<!-- !! processed by numpydoc !! -->

<a id="Convection.Children"></a>

### *property* Convection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Convection.CoefficientType"></a>

### *property* Convection.CoefficientType *: [Ansys.Mechanical.DataModel.Enums.LoadVariationSubOption](../../../../Mechanical/DataModel/Enums/LoadVariationSubOption.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadVariationSubOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoefficientType.

<!-- !! processed by numpydoc !! -->

<a id="Convection.Comments"></a>

### *property* Convection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Convection.ConvectionMatrix"></a>

### *property* Convection.ConvectionMatrix *: [Ansys.Mechanical.DataModel.Enums.DiagonalOrConsistent](../../../../Mechanical/DataModel/Enums/DiagonalOrConsistent.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DiagonalOrConsistent) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConvectionMatrix.

<!-- !! processed by numpydoc !! -->

<a id="Convection.DataModelObjectCategory"></a>

### *property* Convection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Convection.DisplayConnectionLines"></a>

### *property* Convection.DisplayConnectionLines *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayConnectionLines.

<!-- !! processed by numpydoc !! -->

<a id="Convection.EditDataFor"></a>

### *property* Convection.EditDataFor *: [Ansys.Mechanical.DataModel.Enums.ConvectionTableSelection](../../../../Mechanical/DataModel/Enums/ConvectionTableSelection.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ConvectionTableSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EditDataFor.

<!-- !! processed by numpydoc !! -->

<a id="Convection.Figures"></a>

### *property* Convection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Convection.FilmCoefficient"></a>

### *property* Convection.FilmCoefficient *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilmCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="Convection.FluidFlowEdge"></a>

### *property* Convection.FluidFlowEdge *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidFlowEdge.

<!-- !! processed by numpydoc !! -->

<a id="Convection.FluidFlowSelection"></a>

### *property* Convection.FluidFlowSelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidFlowSelection.

<!-- !! processed by numpydoc !! -->

<a id="Convection.GraphControlsXAxis"></a>

### *property* Convection.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="Convection.HasFluidFlow"></a>

### *property* Convection.HasFluidFlow *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HasFluidFlow.

<!-- !! processed by numpydoc !! -->

<a id="Convection.Images"></a>

### *property* Convection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Convection.IndependentVariable"></a>

### *property* Convection.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Convection.InternalObject"></a>

### *property* Convection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Convection.Location"></a>

### *property* Convection.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Convection.NumberOfSegments"></a>

### *property* Convection.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Convection.Properties"></a>

### *property* Convection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Convection.RangeMaximum"></a>

### *property* Convection.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Convection.RangeMinimum"></a>

### *property* Convection.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Convection.ReadOnly"></a>

### *property* Convection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Convection.SharedRefBody"></a>

### *property* Convection.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Convection.Suppressed"></a>

### *property* Convection.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Convection.VisibleProperties"></a>

### *property* Convection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Convection.XYZFunctionCoordinateSystem"></a>

### *property* Convection.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Convection.Activate"></a>

### Convection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Convection.AddComment"></a>

### Convection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Convection.AddFigure"></a>

### Convection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Convection.AddImage"></a>

### Convection.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Convection.CopyTo"></a>

### Convection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Convection.CreateParameter"></a>

### Convection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Convection.Delete"></a>

### Convection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Convection.Duplicate"></a>

### Convection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Convection.GetActivateAtLoadStep"></a>

### Convection.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Convection.GetChildren"></a>

### Convection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Convection.GetComponentActivateAtLoadStep"></a>

### Convection.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Convection.GetParameter"></a>

### Convection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Convection.GroupAllSimilarChildren"></a>

### Convection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Convection.GroupSimilarObjects"></a>

### Convection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Convection.PromoteToNamedSelection"></a>

### Convection.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Convection.PropertyByAPIName"></a>

### Convection.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Convection.PropertyByName"></a>

### Convection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Convection.RemoveParameter"></a>

### Convection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Convection.SetActivateAtLoadStep"></a>

### Convection.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Convection.SetComponentActivateAtLoadStep"></a>

### Convection.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

