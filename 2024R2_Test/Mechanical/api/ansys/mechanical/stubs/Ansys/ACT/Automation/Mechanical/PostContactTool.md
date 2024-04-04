# PostContactTool

### *class* PostContactTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PostContactTool.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddFluidPressure`](#PostContactTool.AddFluidPressure)                           | Creates a new ContactFluidPressure                                                |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddFrictionalStress`](#PostContactTool.AddFrictionalStress)                     | Creates a new ContactFrictionalStress                                             |
| [`AddHeatFlux`](#PostContactTool.AddHeatFlux)                                     | Creates a new ContactHeatFlux                                                     |
| [`AddPressure`](#PostContactTool.AddPressure)                                     | Creates a new ContactPressure                                                     |
| [`AddSlidingDistance`](#PostContactTool.AddSlidingDistance)                       | Creates a new ContactSlidingDistance                                              |
| [`AddInitialInformation`](#PostContactTool.AddInitialInformation)                 | Creates a new ContactDataTable                                                    |
| [`AddGap`](#PostContactTool.AddGap)                                               | Creates a new ContactGap                                                          |
| [`AddPenetration`](#PostContactTool.AddPenetration)                               | Creates a new ContactPenetration                                                  |
| [`AddStatus`](#PostContactTool.AddStatus)                                         | Creates a new ContactStatus                                                       |
| [`ClearGeneratedData`](#PostContactTool.ClearGeneratedData)                       | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#PostContactTool.EvaluateAllResults)                       | Run the EvaluateAllResults action.                                                |
| [`GenerateInitialContactResults`](#PostContactTool.GenerateInitialContactResults) | Run the GenerateInitialContactResults action.                                     |
| [`Delete`](#PostContactTool.Delete)                                               | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PostContactTool.AddComment)                                       | Creates a new child Comment.                                                      |
| [`AddFigure`](#PostContactTool.AddFigure)                                         | Creates a new child Figure.                                                       |
| [`AddImage`](#PostContactTool.AddImage)                                           | Creates a new child Image.                                                        |
| [`Activate`](#PostContactTool.Activate)                                           | Activate the current object.                                                      |
| [`CopyTo`](#PostContactTool.CopyTo)                                               | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PostContactTool.Duplicate)                                         | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PostContactTool.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PostContactTool.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PostContactTool.PropertyByName)                               | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PostContactTool.PropertyByAPIName)                         | Get a property by its API name.                                                   |
| [`CreateParameter`](#PostContactTool.CreateParameter)                             | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PostContactTool.GetParameter)                                   | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PostContactTool.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#PostContactTool.ScopingMethod)                                                                   | Gets or sets the ScopingMethod.                               |
| [`Location`](#PostContactTool.Location)                                                                             | Gets or sets the Location.                                    |
| [`Children`](#PostContactTool.Children)                                                                             | Gets the list of children.                                    |
| [`Comments`](#PostContactTool.Comments)                                                                             | Gets the list of associated comments.                         |
| [`Figures`](#PostContactTool.Figures)                                                                               | Gets the list of associated figures.                          |
| [`Images`](#PostContactTool.Images)                                                                                 | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PostContactTool.Properties)                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PostContactTool.VisibleProperties)                                                           | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PostContactTool
```

## Property detail

### *property* PostContactTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PostContactTool.AddFluidPressure()

Creates a new ContactFluidPressure

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddFrictionalStress()

Creates a new ContactFrictionalStress

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddHeatFlux()

Creates a new ContactHeatFlux

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddPressure()

Creates a new ContactPressure

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddSlidingDistance()

Creates a new ContactSlidingDistance

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddInitialInformation()

Creates a new ContactDataTable

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddGap()

Creates a new ContactGap

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddPenetration()

Creates a new ContactPenetration

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddStatus()

Creates a new ContactStatus

<!-- !! processed by numpydoc !! -->

### PostContactTool.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### PostContactTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### PostContactTool.GenerateInitialContactResults()

Run the GenerateInitialContactResults action.

<!-- !! processed by numpydoc !! -->

### PostContactTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PostContactTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PostContactTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### PostContactTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PostContactTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PostContactTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PostContactTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PostContactTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PostContactTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PostContactTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PostContactTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PostContactTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PostContactTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
