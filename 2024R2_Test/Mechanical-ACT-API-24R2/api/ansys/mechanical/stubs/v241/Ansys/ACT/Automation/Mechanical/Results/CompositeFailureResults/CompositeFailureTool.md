# `CompositeFailureTool`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CompositeFailureTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddInverseReserveFactor`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.AddInverseReserveFactor)       | Creates a new InverseReserveFactor                                                |
| [`AddSafetyFactor`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.AddSafetyFactor)                       | Creates a new SafetyFactor                                                        |
| [`AddSafetyMargin`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.AddSafetyMargin)                       | Creates a new SafetyMargin                                                        |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.EvaluateAllResults)                 | Run the EvaluateAllResults action.                                                |
| [`AddGroupedScopedACPResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.AddGroupedScopedACPResults) | AddGroupedScopedACPResults method.                                                |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.Delete)                                         | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.AddComment)                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.AddFigure)                                   | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.AddImage)                                     | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.Activate)                                     | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.CopyTo)                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.Duplicate)                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.PropertyByName)                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.PropertyByAPIName)                   | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.CreateParameter)                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.GetParameter)                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#id0)                                                   | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#id0)                                                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CompositeFailureResults/CompositeFailureTool.md#CompositeFailureTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CompositeFailureTool.InternalObject"></a>

### *property* CompositeFailureTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeFailureToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.DataModelObjectCategory"></a>

### *property* CompositeFailureTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Children"></a>

### *property* CompositeFailureTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Comments"></a>

### *property* CompositeFailureTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Figures"></a>

### *property* CompositeFailureTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Images"></a>

### *property* CompositeFailureTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CompositeFailureTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Properties"></a>

### *property* CompositeFailureTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.VisibleProperties"></a>

### *property* CompositeFailureTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeFailureTool.AddInverseReserveFactor"></a>

### CompositeFailureTool.AddInverseReserveFactor()

Creates a new InverseReserveFactor

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddSafetyFactor"></a>

### CompositeFailureTool.AddSafetyFactor()

Creates a new SafetyFactor

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddSafetyMargin"></a>

### CompositeFailureTool.AddSafetyMargin()

Creates a new SafetyMargin

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.EvaluateAllResults"></a>

### CompositeFailureTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddGroupedScopedACPResults"></a>

### CompositeFailureTool.AddGroupedScopedACPResults(resultType: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultType), selectedPlies: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

AddGroupedScopedACPResults method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Delete"></a>

### CompositeFailureTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetChildren"></a>

### CompositeFailureTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CompositeFailureTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddComment"></a>

### CompositeFailureTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddFigure"></a>

### CompositeFailureTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddImage"></a>

### CompositeFailureTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Activate"></a>

### CompositeFailureTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.CopyTo"></a>

### CompositeFailureTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Duplicate"></a>

### CompositeFailureTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GroupAllSimilarChildren"></a>

### CompositeFailureTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GroupSimilarObjects"></a>

### CompositeFailureTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.PropertyByName"></a>

### CompositeFailureTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.PropertyByAPIName"></a>

### CompositeFailureTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.CreateParameter"></a>

### CompositeFailureTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetParameter"></a>

### CompositeFailureTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.RemoveParameter"></a>

### CompositeFailureTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

