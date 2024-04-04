# PipeTemperature

### *class* PipeTemperature

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PipeTemperature.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#PipeTemperature.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#PipeTemperature.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`PromoteToNamedSelection`](#PipeTemperature.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#PipeTemperature.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PipeTemperature.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PipeTemperature.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PipeTemperature.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#PipeTemperature.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PipeTemperature.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PipeTemperature.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PipeTemperature.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PipeTemperature.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PipeTemperature.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PipeTemperature.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PipeTemperature.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PipeTemperature.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PipeTemperature.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`NumberOfSegments`](#PipeTemperature.NumberOfSegments)                                                                | Gets or sets the NumberOfSegments.                            |
| [`Magnitude`](#PipeTemperature.Magnitude)                                                                              | Gets the Magnitude.                                           |
| [`RangeMaximum`](#PipeTemperature.RangeMaximum)                                                                        | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#PipeTemperature.RangeMinimum)                                                                        | Gets or sets the RangeMinimum.                                |
| [`GraphControlsXAxis`](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                          |
| [`Loading`](#PipeTemperature.Loading)                                                                                  | Gets or sets the Loading.                                     |
| [`IndependentVariable`](#PipeTemperature.IndependentVariable)                                                          | Gets or sets the IndependentVariable.                         |
| [`XYZFunctionCoordinateSystem`](#PipeTemperature.XYZFunctionCoordinateSystem)                                          | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`Location`](#PipeTemperature.Location)                                                                                | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#PipeTemperature.Suppressed)                                                                            | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#PipeTemperature.SharedRefBody)                                                                      | Gets or sets the SharedRefBody.                               |
| [`Children`](#PipeTemperature.Children)                                                                                | Gets the list of children.                                    |
| [`Comments`](#PipeTemperature.Comments)                                                                                | Gets the list of associated comments.                         |
| [`Figures`](#PipeTemperature.Figures)                                                                                  | Gets the list of associated figures.                          |
| [`Images`](#PipeTemperature.Images)                                                                                    | Gets the list of associated images.                           |
| [`ReadOnly`](#PipeTemperature.ReadOnly)                                                                                | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PipeTemperature.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PipeTemperature.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import PipeTemperature
```

## Property detail

### *property* PipeTemperature.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.Loading *: [Ansys.Mechanical.DataModel.Enums.PipeLoadingType](../../../../Mechanical/DataModel/Enums/PipeLoadingType.md#PipeLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Loading.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PipeTemperature.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PipeTemperature.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PipeTemperature.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
