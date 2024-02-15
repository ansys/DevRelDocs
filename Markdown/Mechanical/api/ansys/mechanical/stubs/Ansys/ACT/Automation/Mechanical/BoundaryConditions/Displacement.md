# Displacement

### *class* Displacement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Displacement.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#Displacement.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`BoundaryCondition`](#Displacement.BoundaryCondition)                                                                 | Gets or sets the BoundaryCondition.                           |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
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
| [`GraphControlsXAxis`](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                          |
| [`StepVarying`](../../../../Mechanical/DataModel/Enums/StepVarying.md#StepVarying)                                     | Gets or sets the StepVarying.                                 |
| [`IndependentVariable`](#Displacement.IndependentVariable)                                                             | Gets or sets the IndependentVariable.                         |
| [`AbsoluteResult`](#Displacement.AbsoluteResult)                                                                       | Gets or sets the AbsoluteResult.                              |
| [`BaseExcitation`](#Displacement.BaseExcitation)                                                                       | Gets or sets the BaseExcitation.                              |
| [`ReverseDirectionForInverseSteps`](#Displacement.ReverseDirectionForInverseSteps)                                     | Gets or sets the ReverseDirectionForInverseSteps.             |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`XYZFunctionCoordinateSystem`](#Displacement.XYZFunctionCoordinateSystem)                                             | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`Location`](#Displacement.Location)                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
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

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import Displacement
```

## Property detail

### *property* Displacement.BoundaryCondition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.StepSelection *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.Distance *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Distance.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.RpmSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmSelection.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#StepVarying) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.AbsoluteResult *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AbsoluteResult.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.BaseExcitation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseExcitation.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.ReverseDirectionForInverseSteps *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReverseDirectionForInverseSteps.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Displacement.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Displacement.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Displacement.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Displacement.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Displacement.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Displacement.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### Displacement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Displacement.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Displacement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Displacement.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Displacement.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Displacement.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Displacement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Displacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Displacement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Displacement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Displacement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Displacement.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Displacement.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Displacement.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Displacement.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Displacement.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
