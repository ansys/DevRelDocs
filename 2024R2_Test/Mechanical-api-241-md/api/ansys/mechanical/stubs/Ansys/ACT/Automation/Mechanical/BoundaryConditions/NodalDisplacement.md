<a id="nodaldisplacement"></a>

# NodalDisplacement

<a id="NodalDisplacement"></a>

### *class* NodalDisplacement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NodalDisplacement.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`GetActivateAtLoadStep`](#NodalDisplacement.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#NodalDisplacement.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#NodalDisplacement.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#NodalDisplacement.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#NodalDisplacement.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#NodalDisplacement.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NodalDisplacement.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#NodalDisplacement.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#NodalDisplacement.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#NodalDisplacement.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#NodalDisplacement.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NodalDisplacement.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NodalDisplacement.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodalDisplacement.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NodalDisplacement.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NodalDisplacement.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#NodalDisplacement.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#NodalDisplacement.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NodalDisplacement.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`NumberOfSegments`](#NodalDisplacement.NumberOfSegments)                                                              | Gets or sets the NumberOfSegments.                            |
| [`XComponent`](#NodalDisplacement.XComponent)                                                                          | Gets the XComponent.                                          |
| [`YComponent`](#NodalDisplacement.YComponent)                                                                          | Gets the YComponent.                                          |
| [`ZComponent`](#NodalDisplacement.ZComponent)                                                                          | Gets the ZComponent.                                          |
| [`RangeMaximum`](#NodalDisplacement.RangeMaximum)                                                                      | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#NodalDisplacement.RangeMinimum)                                                                      | Gets or sets the RangeMinimum.                                |
| [`PhaseAngle`](#NodalDisplacement.PhaseAngle)                                                                          | Gets or sets the PhaseAngle.                                  |
| [`DynamicRelaxationBehavior`](#NodalDisplacement.DynamicRelaxationBehavior)                                            | Gets or sets the DynamicRelaxationBehavior.                   |
| [`GraphControlsXAxis`](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                          |
| [`IndependentVariable`](#NodalDisplacement.IndependentVariable)                                                        | Gets or sets the IndependentVariable.                         |
| [`ReverseDirectionForInverseSteps`](#NodalDisplacement.ReverseDirectionForInverseSteps)                                | Gets or sets the ReverseDirectionForInverseSteps.             |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets the CoordinateSystem.                                    |
| [`XYZFunctionCoordinateSystem`](#NodalDisplacement.XYZFunctionCoordinateSystem)                                        | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`Location`](#NodalDisplacement.Location)                                                                              | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#NodalDisplacement.Suppressed)                                                                          | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#NodalDisplacement.SharedRefBody)                                                                    | Gets or sets the SharedRefBody.                               |
| [`Children`](#NodalDisplacement.Children)                                                                              | Gets the list of children.                                    |
| [`Comments`](#NodalDisplacement.Comments)                                                                              | Gets the list of associated comments.                         |
| [`Figures`](#NodalDisplacement.Figures)                                                                                | Gets the list of associated figures.                          |
| [`Images`](#NodalDisplacement.Images)                                                                                  | Gets the list of associated images.                           |
| [`ReadOnly`](#NodalDisplacement.ReadOnly)                                                                              | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NodalDisplacement.Properties)                                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NodalDisplacement.VisibleProperties)                                                            | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import NodalDisplacement
```

<a id="property-detail"></a>

## Property detail

<a id="NodalDisplacement.InternalObject"></a>

### *property* NodalDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.NumberOfSegments"></a>

### *property* NodalDisplacement.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.XComponent"></a>

### *property* NodalDisplacement.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.YComponent"></a>

### *property* NodalDisplacement.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.ZComponent"></a>

### *property* NodalDisplacement.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.RangeMaximum"></a>

### *property* NodalDisplacement.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.RangeMinimum"></a>

### *property* NodalDisplacement.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.PhaseAngle"></a>

### *property* NodalDisplacement.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.DynamicRelaxationBehavior"></a>

### *property* NodalDisplacement.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.GraphControlsXAxis"></a>

### *property* NodalDisplacement.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.IndependentVariable"></a>

### *property* NodalDisplacement.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.ReverseDirectionForInverseSteps"></a>

### *property* NodalDisplacement.ReverseDirectionForInverseSteps *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReverseDirectionForInverseSteps.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.CoordinateSystem"></a>

### *property* NodalDisplacement.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.XYZFunctionCoordinateSystem"></a>

### *property* NodalDisplacement.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Location"></a>

### *property* NodalDisplacement.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.DataModelObjectCategory"></a>

### *property* NodalDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Suppressed"></a>

### *property* NodalDisplacement.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.SharedRefBody"></a>

### *property* NodalDisplacement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Children"></a>

### *property* NodalDisplacement.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Comments"></a>

### *property* NodalDisplacement.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Figures"></a>

### *property* NodalDisplacement.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Images"></a>

### *property* NodalDisplacement.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.ReadOnly"></a>

### *property* NodalDisplacement.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NodalDisplacement.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Properties"></a>

### *property* NodalDisplacement.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.VisibleProperties"></a>

### *property* NodalDisplacement.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalDisplacement.GetActivateAtLoadStep"></a>

### NodalDisplacement.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.SetActivateAtLoadStep"></a>

### NodalDisplacement.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.GetComponentActivateAtLoadStep"></a>

### NodalDisplacement.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.SetComponentActivateAtLoadStep"></a>

### NodalDisplacement.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.PromoteToNamedSelection"></a>

### NodalDisplacement.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Delete"></a>

### NodalDisplacement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.GetChildren"></a>

### NodalDisplacement.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NodalDisplacement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.AddComment"></a>

### NodalDisplacement.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.AddFigure"></a>

### NodalDisplacement.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.AddImage"></a>

### NodalDisplacement.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Activate"></a>

### NodalDisplacement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.CopyTo"></a>

### NodalDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Duplicate"></a>

### NodalDisplacement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.GroupAllSimilarChildren"></a>

### NodalDisplacement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.GroupSimilarObjects"></a>

### NodalDisplacement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.PropertyByName"></a>

### NodalDisplacement.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.PropertyByAPIName"></a>

### NodalDisplacement.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.CreateParameter"></a>

### NodalDisplacement.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.GetParameter"></a>

### NodalDisplacement.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.RemoveParameter"></a>

### NodalDisplacement.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
