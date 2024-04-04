# BeamTool

### *class* BeamTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BeamTool.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`EvaluateAllResults`](#BeamTool.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddDirectionalDeformation`](#BeamTool.AddDirectionalDeformation) | Creates a new DirectionalDeformation                                              |
| [`AddDirectStress`](#BeamTool.AddDirectStress)                     | Creates a new DirectStress                                                        |
| [`AddMaximumBendingStress`](#BeamTool.AddMaximumBendingStress)     | Creates a new MaximumBendingStress                                                |
| [`AddMaximumCombinedStress`](#BeamTool.AddMaximumCombinedStress)   | Creates a new MaximumCombinedStress                                               |
| [`AddMinimumBendingStress`](#BeamTool.AddMinimumBendingStress)     | Creates a new MinimumBendingStress                                                |
| [`AddMinimumCombinedStress`](#BeamTool.AddMinimumCombinedStress)   | Creates a new MinimumCombinedStress                                               |
| [`AddTotalDeformation`](#BeamTool.AddTotalDeformation)             | Creates a new TotalDeformation                                                    |
| [`Delete`](#BeamTool.Delete)                                       | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BeamTool.AddComment)                               | Creates a new child Comment.                                                      |
| [`AddFigure`](#BeamTool.AddFigure)                                 | Creates a new child Figure.                                                       |
| [`AddImage`](#BeamTool.AddImage)                                   | Creates a new child Image.                                                        |
| [`Activate`](#BeamTool.Activate)                                   | Activate the current object.                                                      |
| [`CopyTo`](#BeamTool.CopyTo)                                       | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BeamTool.Duplicate)                                 | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BeamTool.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BeamTool.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BeamTool.PropertyByName)                       | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BeamTool.PropertyByAPIName)                 | Get a property by its API name.                                                   |
| [`CreateParameter`](#BeamTool.CreateParameter)                     | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#BeamTool.GetParameter)                           | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BeamTool.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Location`](#BeamTool.Location)                                                                                          | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#BeamTool.Children)                                                                                          | Gets the list of children.                                    |
| [`Comments`](#BeamTool.Comments)                                                                                          | Gets the list of associated comments.                         |
| [`Figures`](#BeamTool.Figures)                                                                                            | Gets the list of associated figures.                          |
| [`Images`](#BeamTool.Images)                                                                                              | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#BeamTool.Properties)                                                                                      | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#BeamTool.VisibleProperties)                                                                        | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults import BeamTool
```

## Property detail

### *property* BeamTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBeamToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BeamTool.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* BeamTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* BeamTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* BeamTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* BeamTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* BeamTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* BeamTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BeamTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* BeamTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### BeamTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### BeamTool.AddDirectionalDeformation()

Creates a new DirectionalDeformation

<!-- !! processed by numpydoc !! -->

### BeamTool.AddDirectStress()

Creates a new DirectStress

<!-- !! processed by numpydoc !! -->

### BeamTool.AddMaximumBendingStress()

Creates a new MaximumBendingStress

<!-- !! processed by numpydoc !! -->

### BeamTool.AddMaximumCombinedStress()

Creates a new MaximumCombinedStress

<!-- !! processed by numpydoc !! -->

### BeamTool.AddMinimumBendingStress()

Creates a new MinimumBendingStress

<!-- !! processed by numpydoc !! -->

### BeamTool.AddMinimumCombinedStress()

Creates a new MinimumCombinedStress

<!-- !! processed by numpydoc !! -->

### BeamTool.AddTotalDeformation()

Creates a new TotalDeformation

<!-- !! processed by numpydoc !! -->

### BeamTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### BeamTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BeamTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BeamTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### BeamTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### BeamTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### BeamTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### BeamTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### BeamTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### BeamTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### BeamTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### BeamTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### BeamTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### BeamTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### BeamTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### BeamTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
