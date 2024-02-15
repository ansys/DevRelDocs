# BoltPretension

### *class* BoltPretension

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BoltPretension.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#BoltPretension.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                           |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToCoordinateSystem`](#BoltPretension.PromoteToCoordinateSystem) | Run the PromoteToCoordinateSystem action.                                         |
| [`GetDefineBy`](#BoltPretension.GetDefineBy)                             | Gets the Bolt Define By value at a given solution step.                           |
| [`SetDefineBy`](#BoltPretension.SetDefineBy)                             | Sets the Bolt Define By value for a given solution step.                          |
| [`Delete`](#BoltPretension.Delete)                                       | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BoltPretension.AddComment)                               | Creates a new child Comment.                                                      |
| [`AddFigure`](#BoltPretension.AddFigure)                                 | Creates a new child Figure.                                                       |
| [`AddImage`](#BoltPretension.AddImage)                                   | Creates a new child Image.                                                        |
| [`Activate`](#BoltPretension.Activate)                                   | Activate the current object.                                                      |
| [`CopyTo`](#BoltPretension.CopyTo)                                       | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BoltPretension.Duplicate)                                 | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BoltPretension.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BoltPretension.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BoltPretension.PropertyByName)                       | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BoltPretension.PropertyByAPIName)                 | Get a property by its API name.                                                   |
| [`CreateParameter`](#BoltPretension.CreateParameter)                     | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#BoltPretension.GetParameter)                           | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BoltPretension.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`DefineBy`](#BoltPretension.DefineBy)                                                                                    | Gets a value indicating how the bolt pretension is defined at the analysis’ current step.   |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                          |
| [`Increment`](#BoltPretension.Increment)                                                                                  | Gets the Increment.                                                                         |
| [`Preadjustment`](#BoltPretension.Preadjustment)                                                                          | Gets the Preadjustment.                                                                     |
| [`Preload`](#BoltPretension.Preload)                                                                                      | Gets the Preload.                                                                           |
| [`Tolerance`](#BoltPretension.Tolerance)                                                                                  | Gets or sets the Tolerance.                                                                 |
| [`CoordinateSystemBehavior`](../../../../Mechanical/DataModel/Enums/CoordinateSystemBehavior.md#CoordinateSystemBehavior) | Gets or sets the CoordinateSystemBehavior.                                                  |
| [`Formulation`](#BoltPretension.Formulation)                                                                              | Gets or sets the Formulation.                                                               |
| [`SolveBehaviourType`](../../../../Mechanical/DataModel/Enums/SolveBehaviourType.md#SolveBehaviourType)                   | Gets or sets the SolveBehaviourType.                                                        |
| [`Suppressed`](#BoltPretension.Suppressed)                                                                                | Gets or sets the Suppressed.                                                                |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                                | Gets or sets the CoordinateSystem.                                                          |
| [`Location`](#BoltPretension.Location)                                                                                    | Gets or sets the Location.                                                                  |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)    | Gets the current DataModelObject’s category.                                                |
| [`Children`](#BoltPretension.Children)                                                                                    | Gets the list of children.                                                                  |
| [`Comments`](#BoltPretension.Comments)                                                                                    | Gets the list of associated comments.                                                       |
| [`Figures`](#BoltPretension.Figures)                                                                                      | Gets the list of associated figures.                                                        |
| [`Images`](#BoltPretension.Images)                                                                                        | Gets the list of associated images.                                                         |
| [`ReadOnly`](#BoltPretension.ReadOnly)                                                                                    | Gets or sets the ReadOnly.                                                                  |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                          |
| [`Properties`](#BoltPretension.Properties)                                                                                | Gets the list of properties for this object.                                                |
| [`VisibleProperties`](#BoltPretension.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object.                               |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import BoltPretension
```

## Property detail

### *property* BoltPretension.DefineBy *: [Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy](../../../../Mechanical/DataModel/Enums/BoltLoadDefineBy.md#BoltLoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a value indicating how the bolt pretension is defined at the analysis’ current step.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPretensionBoltLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Increment *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Increment.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Preadjustment *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Preadjustment.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Preload *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Preload.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Tolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tolerance.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.CoordinateSystemBehavior *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemBehavior](../../../../Mechanical/DataModel/Enums/CoordinateSystemBehavior.md#CoordinateSystemBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemBehavior.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Formulation *: [Ansys.Mechanical.DataModel.Enums.FormulationType](../../../../Mechanical/DataModel/Enums/FormulationType.md#FormulationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.SolveBehaviourType *: [Ansys.Mechanical.DataModel.Enums.SolveBehaviourType](../../../../Mechanical/DataModel/Enums/SolveBehaviourType.md#SolveBehaviourType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolveBehaviourType.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretension.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### BoltPretension.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### BoltPretension.PromoteToCoordinateSystem()

Run the PromoteToCoordinateSystem action.

<!-- !! processed by numpydoc !! -->

### BoltPretension.GetDefineBy(stepNumber: System.Int32)

Gets the Bolt Define By value at a given solution step.

<!-- !! processed by numpydoc !! -->

### BoltPretension.SetDefineBy(stepNumber: System.Int32, type: [Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy](../../../../Mechanical/DataModel/Enums/BoltLoadDefineBy.md#BoltLoadDefineBy))

Sets the Bolt Define By value for a given solution step.

<!-- !! processed by numpydoc !! -->

### BoltPretension.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### BoltPretension.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BoltPretension.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BoltPretension.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### BoltPretension.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### BoltPretension.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### BoltPretension.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### BoltPretension.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### BoltPretension.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### BoltPretension.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### BoltPretension.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### BoltPretension.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### BoltPretension.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### BoltPretension.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### BoltPretension.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### BoltPretension.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
