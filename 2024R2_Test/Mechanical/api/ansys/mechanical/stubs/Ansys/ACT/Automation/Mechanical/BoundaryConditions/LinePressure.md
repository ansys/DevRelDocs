# LinePressure

### *class* LinePressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LinePressure.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#LinePressure.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#LinePressure.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#LinePressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#LinePressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#LinePressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#LinePressure.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#LinePressure.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#LinePressure.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#LinePressure.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#LinePressure.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#LinePressure.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#LinePressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#LinePressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LinePressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#LinePressure.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#LinePressure.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#LinePressure.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#LinePressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#LinePressure.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Direction`](#LinePressure.Direction)                                                                                 | Gets or sets the Direction.                                   |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`NumberOfSegments`](#LinePressure.NumberOfSegments)                                                                   | Gets or sets the NumberOfSegments.                            |
| [`XComponent`](#LinePressure.XComponent)                                                                               | Gets the XComponent.                                          |
| [`YComponent`](#LinePressure.YComponent)                                                                               | Gets the YComponent.                                          |
| [`ZComponent`](#LinePressure.ZComponent)                                                                               | Gets the ZComponent.                                          |
| [`Magnitude`](#LinePressure.Magnitude)                                                                                 | Gets the Magnitude.                                           |
| [`RangeMaximum`](#LinePressure.RangeMaximum)                                                                           | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#LinePressure.RangeMinimum)                                                                           | Gets or sets the RangeMinimum.                                |
| [`PhaseAngle`](#LinePressure.PhaseAngle)                                                                               | Gets or sets the PhaseAngle.                                  |
| [`DefineBy`](#LinePressure.DefineBy)                                                                                   | Gets or sets the DefineBy.                                    |
| [`GraphControlsXAxis`](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                          |
| [`IndependentVariable`](#LinePressure.IndependentVariable)                                                             | Gets or sets the IndependentVariable.                         |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`XYZFunctionCoordinateSystem`](#LinePressure.XYZFunctionCoordinateSystem)                                             | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`Location`](#LinePressure.Location)                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#LinePressure.Suppressed)                                                                               | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#LinePressure.SharedRefBody)                                                                         | Gets or sets the SharedRefBody.                               |
| [`Children`](#LinePressure.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#LinePressure.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#LinePressure.Figures)                                                                                     | Gets the list of associated figures.                          |
| [`Images`](#LinePressure.Images)                                                                                       | Gets the list of associated images.                           |
| [`ReadOnly`](#LinePressure.ReadOnly)                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#LinePressure.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#LinePressure.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import LinePressure
```

## Property detail

### *property* LinePressure.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* LinePressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### LinePressure.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### LinePressure.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### LinePressure.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### LinePressure.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### LinePressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### LinePressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### LinePressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LinePressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LinePressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### LinePressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### LinePressure.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### LinePressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### LinePressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### LinePressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### LinePressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### LinePressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### LinePressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### LinePressure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### LinePressure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### LinePressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### LinePressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
