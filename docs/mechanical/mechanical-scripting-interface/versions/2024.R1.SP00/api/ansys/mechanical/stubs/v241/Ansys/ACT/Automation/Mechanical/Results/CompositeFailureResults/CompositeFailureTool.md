# `CompositeFailureTool`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureTool"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CompositeFailureTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddInverseReserveFactor`](#CompositeFailureTool.AddInverseReserveFactor)       | Creates a new InverseReserveFactor                                                |
| [`AddSafetyFactor`](#CompositeFailureTool.AddSafetyFactor)                       | Creates a new SafetyFactor                                                        |
| [`AddSafetyMargin`](#CompositeFailureTool.AddSafetyMargin)                       | Creates a new SafetyMargin                                                        |
| [`EvaluateAllResults`](#CompositeFailureTool.EvaluateAllResults)                 | Run the EvaluateAllResults action.                                                |
| [`AddGroupedScopedACPResults`](#CompositeFailureTool.AddGroupedScopedACPResults) | AddGroupedScopedACPResults method.                                                |
| [`Delete`](#CompositeFailureTool.Delete)                                         | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CompositeFailureTool.AddComment)                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](#CompositeFailureTool.AddFigure)                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#CompositeFailureTool.AddImage)                                     | Creates a new child Image.                                                        |
| [`Activate`](#CompositeFailureTool.Activate)                                     | Activate the current object.                                                      |
| [`CopyTo`](#CompositeFailureTool.CopyTo)                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CompositeFailureTool.Duplicate)                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CompositeFailureTool.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CompositeFailureTool.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CompositeFailureTool.PropertyByName)                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CompositeFailureTool.PropertyByAPIName)                   | Get a property by its API name.                                                   |
| [`CreateParameter`](#CompositeFailureTool.CreateParameter)                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CompositeFailureTool.GetParameter)                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CompositeFailureTool.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                   | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#CompositeFailureTool.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#CompositeFailureTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CompositeFailureTool.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#CompositeFailureTool.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#CompositeFailureTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CompositeFailureTool.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CompositeFailureTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CompositeFailureTool.InternalObject"></a>

### *property* CompositeFailureTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeFailureToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.DataModelObjectCategory"></a>

### *property* CompositeFailureTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

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

