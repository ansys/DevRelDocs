# `StressTool`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a StressTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#StressTool.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#StressTool.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#StressTool.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#StressTool.AddImage)                               | Creates a new child Image.                                                        |
| [`AddSafetyFactor`](#StressTool.AddSafetyFactor)                 | Creates a new StressSafetyFactor                                                  |
| [`AddSafetyMargin`](#StressTool.AddSafetyMargin)                 | Creates a new StressSafetyMargin                                                  |
| [`AddStressRatio`](#StressTool.AddStressRatio)                   | Creates a new StressRatio                                                         |
| [`CopyTo`](#StressTool.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#StressTool.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#StressTool.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#StressTool.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#StressTool.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`GetChildren`](#StressTool.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#StressTool.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#StressTool.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#StressTool.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#StressTool.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#StressTool.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#StressTool.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#StressTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](#StressTool.Comments)                               | Gets the list of associated comments.                         |
| [`CompressiveLimit`](#StressTool.CompressiveLimit)               | Gets or sets the CompressiveLimit.                            |
| [`CompressiveLimitType`](#StressTool.CompressiveLimitType)       | Gets or sets the CompressiveLimitType.                        |
| [`DataModelObjectCategory`](#StressTool.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#StressTool.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#StressTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#StressTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LimitFactor`](#StressTool.LimitFactor)                         | Gets or sets the LimitFactor.                                 |
| [`Properties`](#StressTool.Properties)                           | Gets the list of properties for this object.                  |
| [`StressLimit`](#StressTool.StressLimit)                         | Gets or sets the StressLimit.                                 |
| [`StressLimitType`](#StressTool.StressLimitType)                 | Gets or sets the StressLimitType.                             |
| [`TensileLimit`](#StressTool.TensileLimit)                       | Gets or sets the TensileLimit.                                |
| [`TensileLimitType`](#StressTool.TensileLimitType)               | Gets or sets the TensileLimitType.                            |
| [`Theory`](#StressTool.Theory)                                   | Gets or sets the Theory.                                      |
| [`VisibleProperties`](#StressTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="StressTool.Children"></a>

### *property* StressTool.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Comments"></a>

### *property* StressTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.CompressiveLimit"></a>

### *property* StressTool.CompressiveLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CompressiveLimit.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.CompressiveLimitType"></a>

### *property* StressTool.CompressiveLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../Mechanical/DataModel/Enums/SafetyLimitType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CompressiveLimitType.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.DataModelObjectCategory"></a>

### *property* StressTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Figures"></a>

### *property* StressTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Images"></a>

### *property* StressTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.InternalObject"></a>

### *property* StressTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSStressSafetyToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.LimitFactor"></a>

### *property* StressTool.LimitFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitFactor.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Properties"></a>

### *property* StressTool.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.StressLimit"></a>

### *property* StressTool.StressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressLimit.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.StressLimitType"></a>

### *property* StressTool.StressLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../Mechanical/DataModel/Enums/SafetyLimitType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressLimitType.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.TensileLimit"></a>

### *property* StressTool.TensileLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TensileLimit.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.TensileLimitType"></a>

### *property* StressTool.TensileLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../Mechanical/DataModel/Enums/SafetyLimitType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TensileLimitType.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Theory"></a>

### *property* StressTool.Theory *: [Ansys.Mechanical.DataModel.Enums.SafetyTheoryType](../../../../../Mechanical/DataModel/Enums/SafetyTheoryType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SafetyTheoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Theory.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.VisibleProperties"></a>

### *property* StressTool.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StressTool.Activate"></a>

### StressTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddComment"></a>

### StressTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddFigure"></a>

### StressTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddImage"></a>

### StressTool.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddSafetyFactor"></a>

### StressTool.AddSafetyFactor()

Creates a new StressSafetyFactor

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddSafetyMargin"></a>

### StressTool.AddSafetyMargin()

Creates a new StressSafetyMargin

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddStressRatio"></a>

### StressTool.AddStressRatio()

Creates a new StressRatio

<!-- !! processed by numpydoc !! -->

<a id="StressTool.CopyTo"></a>

### StressTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.CreateParameter"></a>

### StressTool.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Delete"></a>

### StressTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Duplicate"></a>

### StressTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.EvaluateAllResults"></a>

### StressTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetChildren"></a>

### StressTool.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetParameter"></a>

### StressTool.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GroupAllSimilarChildren"></a>

### StressTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GroupSimilarObjects"></a>

### StressTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.PropertyByAPIName"></a>

### StressTool.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="StressTool.PropertyByName"></a>

### StressTool.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.RemoveParameter"></a>

### StressTool.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

