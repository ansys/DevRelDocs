# NodalForce

### *class* NodalForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NodalDisplacement.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#NodalForce.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#NodalForce.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#NodalForce.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#NodalForce.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#NodalForce.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#NodalForce.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NodalForce.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#NodalForce.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#NodalForce.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#NodalForce.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#NodalForce.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NodalForce.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NodalForce.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodalForce.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NodalForce.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NodalForce.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#NodalForce.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#NodalForce.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NodalForce.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`NumberOfSegments`](#NodalForce.NumberOfSegments)                                                                     | Gets or sets the NumberOfSegments.                            |
| [`LoadVectorNumber`](#NodalForce.LoadVectorNumber)                                                                     | Gets or sets the LoadVectorNumber.                            |
| [`XComponent`](#NodalForce.XComponent)                                                                                 | Gets the XComponent.                                          |
| [`YComponent`](#NodalForce.YComponent)                                                                                 | Gets the YComponent.                                          |
| [`ZComponent`](#NodalForce.ZComponent)                                                                                 | Gets the ZComponent.                                          |
| [`HarmonicIndex`](#NodalForce.HarmonicIndex)                                                                           | Gets or sets the HarmonicIndex.                               |
| [`SectorNumber`](#NodalForce.SectorNumber)                                                                             | Gets or sets the SectorNumber.                                |
| [`RangeMaximum`](#NodalForce.RangeMaximum)                                                                             | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#NodalForce.RangeMinimum)                                                                             | Gets or sets the RangeMinimum.                                |
| [`PhaseAngle`](#NodalForce.PhaseAngle)                                                                                 | Gets or sets the PhaseAngle.                                  |
| [`DynamicRelaxationBehavior`](#NodalForce.DynamicRelaxationBehavior)                                                   | Gets or sets the DynamicRelaxationBehavior.                   |
| [`GraphControlsXAxis`](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                          |
| [`LoadVectorAssignment`](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#LoadVectorAssignment)          | Gets or sets the LoadVectorAssignment.                        |
| [`NonCyclicLoadingType`](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#NonCyclicLoadingType)          | Gets or sets the NonCyclicLoadingType.                        |
| [`IndependentVariable`](#NodalForce.IndependentVariable)                                                               | Gets or sets the IndependentVariable.                         |
| [`DivideLoadByNodes`](#NodalForce.DivideLoadByNodes)                                                                   | Gets or sets the DivideLoadByNodes.                           |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets the CoordinateSystem.                                    |
| [`XYZFunctionCoordinateSystem`](#NodalForce.XYZFunctionCoordinateSystem)                                               | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`Location`](#NodalForce.Location)                                                                                     | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#NodalForce.Suppressed)                                                                                 | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#NodalForce.SharedRefBody)                                                                           | Gets or sets the SharedRefBody.                               |
| [`Children`](#NodalForce.Children)                                                                                     | Gets the list of children.                                    |
| [`Comments`](#NodalForce.Comments)                                                                                     | Gets the list of associated comments.                         |
| [`Figures`](#NodalForce.Figures)                                                                                       | Gets the list of associated figures.                          |
| [`Images`](#NodalForce.Images)                                                                                         | Gets the list of associated images.                           |
| [`ReadOnly`](#NodalForce.ReadOnly)                                                                                     | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NodalForce.Properties)                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NodalForce.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import NodalForce
```

## Property detail

### *property* NodalForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.LoadVectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#NonCyclicLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.DivideLoadByNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DivideLoadByNodes.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* NodalForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### NodalForce.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### NodalForce.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### NodalForce.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### NodalForce.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### NodalForce.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### NodalForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### NodalForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NodalForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NodalForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### NodalForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### NodalForce.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### NodalForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### NodalForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### NodalForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### NodalForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### NodalForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### NodalForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### NodalForce.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### NodalForce.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### NodalForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### NodalForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
