# RotationalVelocity

### *class* RotationalVelocity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RotationalVelocity.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#RotationalVelocity.Delete)                                   | Run the Delete action.                                                            |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RotationalVelocity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RotationalVelocity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RotationalVelocity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#RotationalVelocity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RotationalVelocity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RotationalVelocity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RotationalVelocity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RotationalVelocity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RotationalVelocity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RotationalVelocity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RotationalVelocity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RotationalVelocity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RotationalVelocity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Location`](#RotationalVelocity.Location)                                                                             | Gets or sets the Location.                                    |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`XComponent`](#RotationalVelocity.XComponent)                                                                         | Gets the XComponent.                                          |
| [`YComponent`](#RotationalVelocity.YComponent)                                                                         | Gets the YComponent.                                          |
| [`ZComponent`](#RotationalVelocity.ZComponent)                                                                         | Gets the ZComponent.                                          |
| [`Magnitude`](#RotationalVelocity.Magnitude)                                                                           | Gets the Magnitude.                                           |
| [`XCoordinate`](#RotationalVelocity.XCoordinate)                                                                       | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#RotationalVelocity.YCoordinate)                                                                       | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#RotationalVelocity.ZCoordinate)                                                                       | Gets or sets the ZCoordinate.                                 |
| [`DefineBy`](#RotationalVelocity.DefineBy)                                                                             | Gets or sets the DefineBy.                                    |
| [`IndependentVariable`](#RotationalVelocity.IndependentVariable)                                                       | Gets or sets the IndependentVariable.                         |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Axis`](#RotationalVelocity.Axis)                                                                                     | Gets or sets the Axis.                                        |
| [`NumberOfSegments`](#RotationalVelocity.NumberOfSegments)                                                             | Gets or sets the NumberOfSegments.                            |
| [`Suppressed`](#RotationalVelocity.Suppressed)                                                                         | Gets or sets the Suppressed.                                  |
| [`Children`](#RotationalVelocity.Children)                                                                             | Gets the list of children.                                    |
| [`Comments`](#RotationalVelocity.Comments)                                                                             | Gets the list of associated comments.                         |
| [`Figures`](#RotationalVelocity.Figures)                                                                               | Gets the list of associated figures.                          |
| [`Images`](#RotationalVelocity.Images)                                                                                 | Gets the list of associated images.                           |
| [`ReadOnly`](#RotationalVelocity.ReadOnly)                                                                             | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RotationalVelocity.Properties)                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RotationalVelocity.VisibleProperties)                                                           | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import RotationalVelocity
```

## Property detail

### *property* RotationalVelocity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRotationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.Axis *: [Ansys.Mechanical.Math.BoundVector](../../../../Mechanical/Math/BoundVector.md#BoundVector) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* RotationalVelocity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### RotationalVelocity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### RotationalVelocity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
