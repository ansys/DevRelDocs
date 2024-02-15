# InternalHeatGeneration

### *class* InternalHeatGeneration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a InternalHeatGeneration.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#InternalHeatGeneration.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#InternalHeatGeneration.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`PromoteToNamedSelection`](#InternalHeatGeneration.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#InternalHeatGeneration.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#InternalHeatGeneration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#InternalHeatGeneration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#InternalHeatGeneration.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#InternalHeatGeneration.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#InternalHeatGeneration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#InternalHeatGeneration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#InternalHeatGeneration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#InternalHeatGeneration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#InternalHeatGeneration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#InternalHeatGeneration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#InternalHeatGeneration.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#InternalHeatGeneration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#InternalHeatGeneration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`NumberOfSegments`](#InternalHeatGeneration.NumberOfSegments)                                                         | Gets or sets the NumberOfSegments.                            |
| [`Magnitude`](#InternalHeatGeneration.Magnitude)                                                                       | Gets the Magnitude.                                           |
| [`Location`](#InternalHeatGeneration.Location)                                                                         | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#InternalHeatGeneration.Suppressed)                                                                     | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#InternalHeatGeneration.SharedRefBody)                                                               | Gets or sets the SharedRefBody.                               |
| [`Children`](#InternalHeatGeneration.Children)                                                                         | Gets the list of children.                                    |
| [`Comments`](#InternalHeatGeneration.Comments)                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#InternalHeatGeneration.Figures)                                                                           | Gets the list of associated figures.                          |
| [`Images`](#InternalHeatGeneration.Images)                                                                             | Gets the list of associated images.                           |
| [`ReadOnly`](#InternalHeatGeneration.ReadOnly)                                                                         | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#InternalHeatGeneration.Properties)                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#InternalHeatGeneration.VisibleProperties)                                                       | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import InternalHeatGeneration
```

## Property detail

### *property* InternalHeatGeneration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* InternalHeatGeneration.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* InternalHeatGeneration.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* InternalHeatGeneration.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* InternalHeatGeneration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* InternalHeatGeneration.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* InternalHeatGeneration.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* InternalHeatGeneration.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* InternalHeatGeneration.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* InternalHeatGeneration.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* InternalHeatGeneration.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* InternalHeatGeneration.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* InternalHeatGeneration.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* InternalHeatGeneration.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* InternalHeatGeneration.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### InternalHeatGeneration.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### InternalHeatGeneration.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
