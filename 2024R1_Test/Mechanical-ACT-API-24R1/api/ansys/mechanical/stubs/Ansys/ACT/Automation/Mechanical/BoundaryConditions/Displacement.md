# Displacement

<a id="Displacement"></a>

### *class* Displacement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Displacement.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#Displacement.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#Displacement.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#Displacement.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#Displacement.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#Displacement.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#Displacement.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Displacement.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#Displacement.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#Displacement.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#Displacement.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#Displacement.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Displacement.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Displacement.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Displacement.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Displacement.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Displacement.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#Displacement.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Displacement.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Displacement.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryCondition`](#Displacement.BoundaryCondition)                                                                 | Gets or sets the BoundaryCondition.                           |
| [`StepSelection`](#Displacement.StepSelection)                                                                         | Gets or sets the StepSelection.                               |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`NumberOfSegments`](#Displacement.NumberOfSegments)                                                                   | Gets or sets the NumberOfSegments.                            |
| [`XComponent`](#Displacement.XComponent)                                                                               | Gets the XComponent.                                          |
| [`XComponentImag`](#Displacement.XComponentImag)                                                                       | Gets the XComponentImag.                                      |
| [`YComponent`](#Displacement.YComponent)                                                                               | Gets the YComponent.                                          |
| [`YComponentImag`](#Displacement.YComponentImag)                                                                       | Gets the YComponentImag.                                      |
| [`ZComponent`](#Displacement.ZComponent)                                                                               | Gets the ZComponent.                                          |
| [`ZComponentImag`](#Displacement.ZComponentImag)                                                                       | Gets the ZComponentImag.                                      |
| [`Distance`](#Displacement.Distance)                                                                                   | Gets the Distance.                                            |
| [`MagnitudeImag`](#Displacement.MagnitudeImag)                                                                         | Gets the MagnitudeImag.                                       |
| [`PhaseAngle`](#Displacement.PhaseAngle)                                                                               | Gets the PhaseAngle.                                          |
| [`XPhaseAngle`](#Displacement.XPhaseAngle)                                                                             | Gets the XPhaseAngle.                                         |
| [`YPhaseAngle`](#Displacement.YPhaseAngle)                                                                             | Gets the YPhaseAngle.                                         |
| [`ZPhaseAngle`](#Displacement.ZPhaseAngle)                                                                             | Gets the ZPhaseAngle.                                         |
| [`RangeMaximum`](#Displacement.RangeMaximum)                                                                           | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#Displacement.RangeMinimum)                                                                           | Gets or sets the RangeMinimum.                                |
| [`RpmSelection`](#Displacement.RpmSelection)                                                                           | Gets or sets the RpmSelection.                                |
| [`Direction`](#Displacement.Direction)                                                                                 | Gets or sets the Direction.                                   |
| [`DefineBy`](#Displacement.DefineBy)                                                                                   | Gets or sets the DefineBy.                                    |
| [`DynamicRelaxationBehavior`](#Displacement.DynamicRelaxationBehavior)                                                 | Gets or sets the DynamicRelaxationBehavior.                   |
| [`GraphControlsXAxis`](./../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                          |
| [`StepVarying`](./../../../../Mechanical/DataModel/Enums/StepVarying.md#StepVarying)                                     | Gets or sets the StepVarying.                                 |
| [`IndependentVariable`](#Displacement.IndependentVariable)                                                             | Gets or sets the IndependentVariable.                         |
| [`AbsoluteResult`](#Displacement.AbsoluteResult)                                                                       | Gets or sets the AbsoluteResult.                              |
| [`BaseExcitation`](#Displacement.BaseExcitation)                                                                       | Gets or sets the BaseExcitation.                              |
| [`ReverseDirectionForInverseSteps`](#Displacement.ReverseDirectionForInverseSteps)                                     | Gets or sets the ReverseDirectionForInverseSteps.             |
| [`CoordinateSystem`](./../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`XYZFunctionCoordinateSystem`](#Displacement.XYZFunctionCoordinateSystem)                                             | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`Location`](#Displacement.Location)                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#Displacement.Suppressed)                                                                               | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#Displacement.SharedRefBody)                                                                         | Gets or sets the SharedRefBody.                               |
| [`Children`](#Displacement.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#Displacement.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#Displacement.Figures)                                                                                     | Gets the list of associated figures.                          |
| [`Images`](#Displacement.Images)                                                                                       | Gets the list of associated images.                           |
| [`ReadOnly`](#Displacement.ReadOnly)                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Displacement.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Displacement.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import Displacement
```

<a id="property-detail"></a>

## Property detail

<a id="Displacement.BoundaryCondition"></a>

### *property* Displacement.BoundaryCondition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.StepSelection"></a>

### *property* Displacement.StepSelection *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.InternalObject"></a>

### *property* Displacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.NumberOfSegments"></a>

### *property* Displacement.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.XComponent"></a>

### *property* Displacement.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](./../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.XComponentImag"></a>

### *property* Displacement.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](./../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.YComponent"></a>

### *property* Displacement.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](./../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.YComponentImag"></a>

### *property* Displacement.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](./../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ZComponent"></a>

### *property* Displacement.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](./../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ZComponentImag"></a>

### *property* Displacement.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](./../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Distance"></a>

### *property* Displacement.Distance *: [Ansys.ACT.Mechanical.Fields.Field](./../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Distance.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.MagnitudeImag"></a>

### *property* Displacement.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](./../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.PhaseAngle"></a>

### *property* Displacement.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](./../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.XPhaseAngle"></a>

### *property* Displacement.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](./../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.YPhaseAngle"></a>

### *property* Displacement.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](./../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ZPhaseAngle"></a>

### *property* Displacement.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](./../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.RangeMaximum"></a>

### *property* Displacement.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.RangeMinimum"></a>

### *property* Displacement.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.RpmSelection"></a>

### *property* Displacement.RpmSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmSelection.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Direction"></a>

### *property* Displacement.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.DefineBy"></a>

### *property* Displacement.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](./../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.DynamicRelaxationBehavior"></a>

### *property* Displacement.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](./../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GraphControlsXAxis"></a>

### *property* Displacement.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](./../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.StepVarying"></a>

### *property* Displacement.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](./../../../../Mechanical/DataModel/Enums/StepVarying.md#StepVarying) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.IndependentVariable"></a>

### *property* Displacement.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](./../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.AbsoluteResult"></a>

### *property* Displacement.AbsoluteResult *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AbsoluteResult.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.BaseExcitation"></a>

### *property* Displacement.BaseExcitation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseExcitation.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ReverseDirectionForInverseSteps"></a>

### *property* Displacement.ReverseDirectionForInverseSteps *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReverseDirectionForInverseSteps.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.CoordinateSystem"></a>

### *property* Displacement.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.XYZFunctionCoordinateSystem"></a>

### *property* Displacement.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Location"></a>

### *property* Displacement.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.DataModelObjectCategory"></a>

### *property* Displacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Suppressed"></a>

### *property* Displacement.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.SharedRefBody"></a>

### *property* Displacement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](./../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Children"></a>

### *property* Displacement.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Comments"></a>

### *property* Displacement.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Figures"></a>

### *property* Displacement.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Images"></a>

### *property* Displacement.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ReadOnly"></a>

### *property* Displacement.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Displacement.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Properties"></a>

### *property* Displacement.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.VisibleProperties"></a>

### *property* Displacement.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Displacement.GetActivateAtLoadStep"></a>

### Displacement.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.SetActivateAtLoadStep"></a>

### Displacement.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetComponentActivateAtLoadStep"></a>

### Displacement.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.SetComponentActivateAtLoadStep"></a>

### Displacement.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.PromoteToNamedSelection"></a>

### Displacement.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Delete"></a>

### Displacement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetChildren"></a>

### Displacement.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Displacement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.AddComment"></a>

### Displacement.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.AddFigure"></a>

### Displacement.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.AddImage"></a>

### Displacement.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Activate"></a>

### Displacement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.CopyTo"></a>

### Displacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Duplicate"></a>

### Displacement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GroupAllSimilarChildren"></a>

### Displacement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GroupSimilarObjects"></a>

### Displacement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.PropertyByName"></a>

### Displacement.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.PropertyByAPIName"></a>

### Displacement.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.CreateParameter"></a>

### Displacement.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetParameter"></a>

### Displacement.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.RemoveParameter"></a>

### Displacement.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
