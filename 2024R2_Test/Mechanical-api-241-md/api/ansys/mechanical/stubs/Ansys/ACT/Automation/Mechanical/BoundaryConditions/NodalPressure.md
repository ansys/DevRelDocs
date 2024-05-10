<a id="nodalpressure"></a>

# NodalPressure

<a id="NodalPressure"></a>

### *class* NodalPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NodalPressure.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`GetActivateAtLoadStep`](#NodalPressure.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#NodalPressure.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#NodalPressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#NodalPressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#NodalPressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#NodalPressure.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NodalPressure.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#NodalPressure.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#NodalPressure.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#NodalPressure.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#NodalPressure.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NodalPressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NodalPressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodalPressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NodalPressure.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NodalPressure.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#NodalPressure.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#NodalPressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NodalPressure.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`NumberOfSegments`](#NodalPressure.NumberOfSegments)                                                                  | Gets or sets the NumberOfSegments.                            |
| [`LoadVectorNumber`](#NodalPressure.LoadVectorNumber)                                                                  | Gets or sets the LoadVectorNumber.                            |
| [`Magnitude`](#NodalPressure.Magnitude)                                                                                | Gets the Magnitude.                                           |
| [`RangeMaximum`](#NodalPressure.RangeMaximum)                                                                          | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#NodalPressure.RangeMinimum)                                                                          | Gets or sets the RangeMinimum.                                |
| [`DefineBy`](#NodalPressure.DefineBy)                                                                                  | Gets the DefineBy.                                            |
| [`GraphControlsXAxis`](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                          |
| [`LoadVectorAssignment`](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#LoadVectorAssignment)          | Gets or sets the LoadVectorAssignment.                        |
| [`IndependentVariable`](#NodalPressure.IndependentVariable)                                                            | Gets or sets the IndependentVariable.                         |
| [`XYZFunctionCoordinateSystem`](#NodalPressure.XYZFunctionCoordinateSystem)                                            | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`Location`](#NodalPressure.Location)                                                                                  | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#NodalPressure.Suppressed)                                                                              | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#NodalPressure.SharedRefBody)                                                                        | Gets or sets the SharedRefBody.                               |
| [`Children`](#NodalPressure.Children)                                                                                  | Gets the list of children.                                    |
| [`Comments`](#NodalPressure.Comments)                                                                                  | Gets the list of associated comments.                         |
| [`Figures`](#NodalPressure.Figures)                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#NodalPressure.Images)                                                                                      | Gets the list of associated images.                           |
| [`ReadOnly`](#NodalPressure.ReadOnly)                                                                                  | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NodalPressure.Properties)                                                                              | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NodalPressure.VisibleProperties)                                                                | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import NodalPressure
```

<a id="property-detail"></a>

## Property detail

<a id="NodalPressure.InternalObject"></a>

### *property* NodalPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.NumberOfSegments"></a>

### *property* NodalPressure.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.LoadVectorNumber"></a>

### *property* NodalPressure.LoadVectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Magnitude"></a>

### *property* NodalPressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.RangeMaximum"></a>

### *property* NodalPressure.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.RangeMinimum"></a>

### *property* NodalPressure.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.DefineBy"></a>

### *property* NodalPressure.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.GraphControlsXAxis"></a>

### *property* NodalPressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.LoadVectorAssignment"></a>

### *property* NodalPressure.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.IndependentVariable"></a>

### *property* NodalPressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.XYZFunctionCoordinateSystem"></a>

### *property* NodalPressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Location"></a>

### *property* NodalPressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.DataModelObjectCategory"></a>

### *property* NodalPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Suppressed"></a>

### *property* NodalPressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.SharedRefBody"></a>

### *property* NodalPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Children"></a>

### *property* NodalPressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Comments"></a>

### *property* NodalPressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Figures"></a>

### *property* NodalPressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Images"></a>

### *property* NodalPressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.ReadOnly"></a>

### *property* NodalPressure.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NodalPressure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Properties"></a>

### *property* NodalPressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.VisibleProperties"></a>

### *property* NodalPressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalPressure.GetActivateAtLoadStep"></a>

### NodalPressure.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.SetActivateAtLoadStep"></a>

### NodalPressure.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.GetComponentActivateAtLoadStep"></a>

### NodalPressure.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.SetComponentActivateAtLoadStep"></a>

### NodalPressure.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.PromoteToNamedSelection"></a>

### NodalPressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Delete"></a>

### NodalPressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.GetChildren"></a>

### NodalPressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NodalPressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### NodalPressure.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Activate"></a>

### NodalPressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.CopyTo"></a>

### NodalPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.Duplicate"></a>

### NodalPressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.GroupAllSimilarChildren"></a>

### NodalPressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.GroupSimilarObjects"></a>

### NodalPressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.PropertyByName"></a>

### NodalPressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.PropertyByAPIName"></a>

### NodalPressure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.CreateParameter"></a>

### NodalPressure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.GetParameter"></a>

### NodalPressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalPressure.RemoveParameter"></a>

### NodalPressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
