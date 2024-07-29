# `BoltTool`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BoltTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`AddAdjustment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.AddAdjustment)                     | Creates a new BoltAdjustment                                                      |
| [`AddWorkingLoad`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.AddWorkingLoad)                   | Creates a new BoltWorkingLoad                                                     |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/BoltToolResults/BoltTool.md#BoltTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="BoltTool.InternalObject"></a>

### *property* BoltTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBoltToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.DataModelObjectCategory"></a>

### *property* BoltTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Children"></a>

### *property* BoltTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Comments"></a>

### *property* BoltTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Figures"></a>

### *property* BoltTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Images"></a>

### *property* BoltTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BoltTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Properties"></a>

### *property* BoltTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.VisibleProperties"></a>

### *property* BoltTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BoltTool.EvaluateAllResults"></a>

### BoltTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddAdjustment"></a>

### BoltTool.AddAdjustment()

Creates a new BoltAdjustment

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddWorkingLoad"></a>

### BoltTool.AddWorkingLoad()

Creates a new BoltWorkingLoad

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Delete"></a>

### BoltTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetChildren"></a>

### BoltTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BoltTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddComment"></a>

### BoltTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddFigure"></a>

### BoltTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddImage"></a>

### BoltTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Activate"></a>

### BoltTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.CopyTo"></a>

### BoltTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Duplicate"></a>

### BoltTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GroupAllSimilarChildren"></a>

### BoltTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GroupSimilarObjects"></a>

### BoltTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.PropertyByName"></a>

### BoltTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.PropertyByAPIName"></a>

### BoltTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.CreateParameter"></a>

### BoltTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetParameter"></a>

### BoltTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.RemoveParameter"></a>

### BoltTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

