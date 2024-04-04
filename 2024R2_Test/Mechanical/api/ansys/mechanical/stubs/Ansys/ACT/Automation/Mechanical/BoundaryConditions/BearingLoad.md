# BearingLoad

### *class* BearingLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BearingLoad.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#BearingLoad.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#BearingLoad.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#BearingLoad.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#BearingLoad.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#BearingLoad.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#BearingLoad.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BearingLoad.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#BearingLoad.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#BearingLoad.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#BearingLoad.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#BearingLoad.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BearingLoad.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BearingLoad.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BearingLoad.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BearingLoad.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BearingLoad.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#BearingLoad.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#BearingLoad.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BearingLoad.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Direction`](#BearingLoad.Direction)                                                                                  | Gets or sets the Direction.                                   |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`XComponent`](#BearingLoad.XComponent)                                                                                | Gets the XComponent.                                          |
| [`YComponent`](#BearingLoad.YComponent)                                                                                | Gets the YComponent.                                          |
| [`ZComponent`](#BearingLoad.ZComponent)                                                                                | Gets the ZComponent.                                          |
| [`Magnitude`](#BearingLoad.Magnitude)                                                                                  | Gets the Magnitude.                                           |
| [`DefineBy`](#BearingLoad.DefineBy)                                                                                    | Gets or sets the DefineBy.                                    |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#BearingLoad.Location)                                                                                    | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#BearingLoad.Suppressed)                                                                                | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#BearingLoad.SharedRefBody)                                                                          | Gets or sets the SharedRefBody.                               |
| [`Children`](#BearingLoad.Children)                                                                                    | Gets the list of children.                                    |
| [`Comments`](#BearingLoad.Comments)                                                                                    | Gets the list of associated comments.                         |
| [`Figures`](#BearingLoad.Figures)                                                                                      | Gets the list of associated figures.                          |
| [`Images`](#BearingLoad.Images)                                                                                        | Gets the list of associated images.                           |
| [`ReadOnly`](#BearingLoad.ReadOnly)                                                                                    | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#BearingLoad.Properties)                                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#BearingLoad.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import BearingLoad
```

## Property detail

### *property* BearingLoad.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* BearingLoad.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### BearingLoad.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### BearingLoad.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### BearingLoad.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### BearingLoad.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### BearingLoad.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### BearingLoad.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### BearingLoad.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BearingLoad.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BearingLoad.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### BearingLoad.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### BearingLoad.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### BearingLoad.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### BearingLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### BearingLoad.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### BearingLoad.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### BearingLoad.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### BearingLoad.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### BearingLoad.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### BearingLoad.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### BearingLoad.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### BearingLoad.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
