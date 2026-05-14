# `CompositeFailureTool`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CompositeFailureTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CompositeFailureTool.Activate)                                     | Activate the current object.                                                      |
| [`AddComment`](#CompositeFailureTool.AddComment)                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](#CompositeFailureTool.AddFigure)                                   | Creates a new child Figure.                                                       |
| [`AddGroupedScopedACPResults`](#CompositeFailureTool.AddGroupedScopedACPResults) | AddGroupedScopedACPResults method.                                                |
| [`AddImage`](#CompositeFailureTool.AddImage)                                     | Creates a new child Image.                                                        |
| [`AddInverseReserveFactor`](#CompositeFailureTool.AddInverseReserveFactor)       | Creates a new InverseReserveFactor                                                |
| [`AddSafetyFactor`](#CompositeFailureTool.AddSafetyFactor)                       | Creates a new SafetyFactor                                                        |
| [`AddSafetyMargin`](#CompositeFailureTool.AddSafetyMargin)                       | Creates a new SafetyMargin                                                        |
| [`CopyTo`](#CompositeFailureTool.CopyTo)                                         | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CompositeFailureTool.CreateParameter)                       | Creates a new parameter for a Property.                                           |
| [`Delete`](#CompositeFailureTool.Delete)                                         | Run the Delete action.                                                            |
| [`Duplicate`](#CompositeFailureTool.Duplicate)                                   | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#CompositeFailureTool.EvaluateAllResults)                 | Run the EvaluateAllResults action.                                                |
| [`GetChildren`](#CompositeFailureTool.GetChildren)                               | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CompositeFailureTool.GetParameter)                             | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CompositeFailureTool.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CompositeFailureTool.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CompositeFailureTool.PropertyByAPIName)                   | Get a property by its API name.                                                   |
| [`PropertyByName`](#CompositeFailureTool.PropertyByName)                         | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CompositeFailureTool.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#CompositeFailureTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CompositeFailureTool.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CompositeFailureTool.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CompositeFailureTool.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#CompositeFailureTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CompositeFailureTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CompositeFailureTool.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CompositeFailureTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CompositeFailureTool.Children"></a>

### *property* CompositeFailureTool.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Comments"></a>

### *property* CompositeFailureTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.DataModelObjectCategory"></a>

### *property* CompositeFailureTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Figures"></a>

### *property* CompositeFailureTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Images"></a>

### *property* CompositeFailureTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.InternalObject"></a>

### *property* CompositeFailureTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeFailureToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Properties"></a>

### *property* CompositeFailureTool.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.VisibleProperties"></a>

### *property* CompositeFailureTool.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeFailureTool.Activate"></a>

### CompositeFailureTool.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddComment"></a>

### CompositeFailureTool.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddFigure"></a>

### CompositeFailureTool.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddGroupedScopedACPResults"></a>

### CompositeFailureTool.AddGroupedScopedACPResults(resultType: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultType), selectedPlies: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → [None](https://docs.python.org/3/library/constants.html#None)

AddGroupedScopedACPResults method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddImage"></a>

### CompositeFailureTool.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddInverseReserveFactor"></a>

### CompositeFailureTool.AddInverseReserveFactor() → [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult](CompositeFailureResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult)

Creates a new InverseReserveFactor

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddSafetyFactor"></a>

### CompositeFailureTool.AddSafetyFactor() → [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult](CompositeFailureResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult)

Creates a new SafetyFactor

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.AddSafetyMargin"></a>

### CompositeFailureTool.AddSafetyMargin() → [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult](CompositeFailureResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult)

Creates a new SafetyMargin

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.CopyTo"></a>

### CompositeFailureTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.CreateParameter"></a>

### CompositeFailureTool.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Delete"></a>

### CompositeFailureTool.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.Duplicate"></a>

### CompositeFailureTool.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.EvaluateAllResults"></a>

### CompositeFailureTool.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetChildren"></a>

### CompositeFailureTool.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GetParameter"></a>

### CompositeFailureTool.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GroupAllSimilarChildren"></a>

### CompositeFailureTool.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.GroupSimilarObjects"></a>

### CompositeFailureTool.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.PropertyByAPIName"></a>

### CompositeFailureTool.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.PropertyByName"></a>

### CompositeFailureTool.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureTool.RemoveParameter"></a>

### CompositeFailureTool.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

