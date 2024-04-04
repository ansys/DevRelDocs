# HeatFlow

### *class* HeatFlow

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a HeatFlow.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#HeatFlow.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#HeatFlow.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#HeatFlow.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#HeatFlow.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#HeatFlow.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#HeatFlow.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#HeatFlow.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#HeatFlow.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#HeatFlow.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#HeatFlow.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#HeatFlow.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#HeatFlow.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#HeatFlow.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#HeatFlow.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#HeatFlow.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#HeatFlow.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#HeatFlow.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#HeatFlow.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#HeatFlow.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`NumberOfSegments`](#HeatFlow.NumberOfSegments)                                                                       | Gets or sets the NumberOfSegments.                            |
| [`Magnitude`](#HeatFlow.Magnitude)                                                                                     | Gets the Magnitude.                                           |
| [`DefineAs`](#HeatFlow.DefineAs)                                                                                       | Gets or sets the DefineAs.                                    |
| [`Location`](#HeatFlow.Location)                                                                                       | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#HeatFlow.Suppressed)                                                                                   | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#HeatFlow.SharedRefBody)                                                                             | Gets or sets the SharedRefBody.                               |
| [`Children`](#HeatFlow.Children)                                                                                       | Gets the list of children.                                    |
| [`Comments`](#HeatFlow.Comments)                                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#HeatFlow.Figures)                                                                                         | Gets the list of associated figures.                          |
| [`Images`](#HeatFlow.Images)                                                                                           | Gets the list of associated images.                           |
| [`ReadOnly`](#HeatFlow.ReadOnly)                                                                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#HeatFlow.Properties)                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#HeatFlow.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import HeatFlow
```

## Property detail

### *property* HeatFlow.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.DefineAs *: [Ansys.Mechanical.DataModel.Enums.LoadVariationType](../../../../Mechanical/DataModel/Enums/LoadVariationType.md#LoadVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineAs.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* HeatFlow.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### HeatFlow.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### HeatFlow.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### HeatFlow.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### HeatFlow.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### HeatFlow.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### HeatFlow.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### HeatFlow.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### HeatFlow.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### HeatFlow.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### HeatFlow.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### HeatFlow.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### HeatFlow.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### HeatFlow.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### HeatFlow.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### HeatFlow.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### HeatFlow.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### HeatFlow.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### HeatFlow.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### HeatFlow.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### HeatFlow.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### HeatFlow.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
