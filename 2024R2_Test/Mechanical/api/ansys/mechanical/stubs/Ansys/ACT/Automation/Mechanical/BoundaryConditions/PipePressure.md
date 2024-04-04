# PipePressure

### *class* PipePressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PipePressure.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#PipePressure.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#PipePressure.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#PipePressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#PipePressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#PipePressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#PipePressure.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PipePressure.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#PipePressure.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#PipePressure.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#PipePressure.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#PipePressure.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PipePressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PipePressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PipePressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PipePressure.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PipePressure.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#PipePressure.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PipePressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PipePressure.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`NumberOfSegments`](#PipePressure.NumberOfSegments)                                                                   | Gets or sets the NumberOfSegments.                            |
| [`Magnitude`](#PipePressure.Magnitude)                                                                                 | Gets the Magnitude.                                           |
| [`RangeMaximum`](#PipePressure.RangeMaximum)                                                                           | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#PipePressure.RangeMinimum)                                                                           | Gets or sets the RangeMinimum.                                |
| [`PhaseAngle`](#PipePressure.PhaseAngle)                                                                               | Gets or sets the PhaseAngle.                                  |
| [`GraphControlsXAxis`](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                          |
| [`Loading`](#PipePressure.Loading)                                                                                     | Gets or sets the Loading.                                     |
| [`IndependentVariable`](#PipePressure.IndependentVariable)                                                             | Gets or sets the IndependentVariable.                         |
| [`XYZFunctionCoordinateSystem`](#PipePressure.XYZFunctionCoordinateSystem)                                             | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`Location`](#PipePressure.Location)                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#PipePressure.Suppressed)                                                                               | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#PipePressure.SharedRefBody)                                                                         | Gets or sets the SharedRefBody.                               |
| [`Children`](#PipePressure.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#PipePressure.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#PipePressure.Figures)                                                                                     | Gets the list of associated figures.                          |
| [`Images`](#PipePressure.Images)                                                                                       | Gets the list of associated images.                           |
| [`ReadOnly`](#PipePressure.ReadOnly)                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PipePressure.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PipePressure.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import PipePressure
```

## Property detail

### *property* PipePressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.Loading *: [Ansys.Mechanical.DataModel.Enums.PipeLoadingType](../../../../Mechanical/DataModel/Enums/PipeLoadingType.md#PipeLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Loading.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PipePressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PipePressure.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### PipePressure.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### PipePressure.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### PipePressure.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### PipePressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### PipePressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PipePressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PipePressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PipePressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PipePressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PipePressure.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### PipePressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PipePressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PipePressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PipePressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PipePressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PipePressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PipePressure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PipePressure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PipePressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PipePressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
