# Temperature

### *class* Temperature

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Temperature.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#Temperature.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#Temperature.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`PromoteToNamedSelection`](#Temperature.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#Temperature.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Temperature.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Temperature.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Temperature.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Temperature.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Temperature.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Temperature.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Temperature.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Temperature.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Temperature.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Temperature.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Temperature.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Temperature.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Temperature.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`NumberOfSegments`](#Temperature.NumberOfSegments)                                                                    | Gets or sets the NumberOfSegments.                            |
| [`Magnitude`](#Temperature.Magnitude)                                                                                  | Gets the Magnitude.                                           |
| [`RangeMaximum`](#Temperature.RangeMaximum)                                                                            | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#Temperature.RangeMinimum)                                                                            | Gets or sets the RangeMinimum.                                |
| [`DefineBy`](#Temperature.DefineBy)                                                                                    | Gets the DefineBy.                                            |
| [`GraphControlsXAxis`](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                          |
| [`ShellFace`](#Temperature.ShellFace)                                                                                  | Gets or sets the ShellFace.                                   |
| [`IndependentVariable`](#Temperature.IndependentVariable)                                                              | Gets or sets the IndependentVariable.                         |
| [`ApplyToEntireBody`](#Temperature.ApplyToEntireBody)                                                                  | Gets or sets the ApplyToEntireBody.                           |
| [`XYZFunctionCoordinateSystem`](#Temperature.XYZFunctionCoordinateSystem)                                              | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`TableAssignment`](#Temperature.TableAssignment)                                                                      | Gets or sets the TableAssignment.                             |
| [`Location`](#Temperature.Location)                                                                                    | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#Temperature.Suppressed)                                                                                | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#Temperature.SharedRefBody)                                                                          | Gets or sets the SharedRefBody.                               |
| [`Children`](#Temperature.Children)                                                                                    | Gets the list of children.                                    |
| [`Comments`](#Temperature.Comments)                                                                                    | Gets the list of associated comments.                         |
| [`Figures`](#Temperature.Figures)                                                                                      | Gets the list of associated figures.                          |
| [`Images`](#Temperature.Images)                                                                                        | Gets the list of associated images.                           |
| [`ReadOnly`](#Temperature.ReadOnly)                                                                                    | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Temperature.Properties)                                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Temperature.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import Temperature
```

## Property detail

### *property* Temperature.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.ApplyToEntireBody *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApplyToEntireBody.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.TableAssignment *: [Ansys.ACT.Automation.Mechanical.Table](../Table.md#Table) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TableAssignment.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Temperature.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Temperature.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Temperature.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Temperature.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### Temperature.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Temperature.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Temperature.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Temperature.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Temperature.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Temperature.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Temperature.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Temperature.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Temperature.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Temperature.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Temperature.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Temperature.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Temperature.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Temperature.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Temperature.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Temperature.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
