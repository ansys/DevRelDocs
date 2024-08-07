# `StressTool`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a StressTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#StressTool.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`AddStressRatio`](#StressTool.AddStressRatio)                   | Creates a new StressRatio                                                         |
| [`AddSafetyFactor`](#StressTool.AddSafetyFactor)                 | Creates a new StressSafetyFactor                                                  |
| [`AddSafetyMargin`](#StressTool.AddSafetyMargin)                 | Creates a new StressSafetyMargin                                                  |
| [`Delete`](#StressTool.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#StressTool.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#StressTool.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#StressTool.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#StressTool.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#StressTool.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#StressTool.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#StressTool.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#StressTool.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#StressTool.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#StressTool.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#StressTool.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#StressTool.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#StressTool.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                         | Gets the internal object. For advanced usage only.            |
| [`LimitFactor`](#StressTool.LimitFactor)                         | Gets or sets the LimitFactor.                                 |
| [`CompressiveLimit`](#StressTool.CompressiveLimit)               | Gets or sets the CompressiveLimit.                            |
| [`StressLimit`](#StressTool.StressLimit)                         | Gets or sets the StressLimit.                                 |
| [`TensileLimit`](#StressTool.TensileLimit)                       | Gets or sets the TensileLimit.                                |
| [`CompressiveLimitType`](#StressTool.CompressiveLimitType)       | Gets or sets the CompressiveLimitType.                        |
| [`Theory`](#StressTool.Theory)                                   | Gets or sets the Theory.                                      |
| [`StressLimitType`](#StressTool.StressLimitType)                 | Gets or sets the StressLimitType.                             |
| [`TensileLimitType`](#StressTool.TensileLimitType)               | Gets or sets the TensileLimitType.                            |
| [`DataModelObjectCategory`](#StressTool.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](#StressTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](#StressTool.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#StressTool.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#StressTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                         | Gets the internal object. For advanced usage only.            |
| [`Properties`](#StressTool.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#StressTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="StressTool.InternalObject"></a>

### *property* StressTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSStressSafetyToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.LimitFactor"></a>

### *property* StressTool.LimitFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitFactor.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.CompressiveLimit"></a>

### *property* StressTool.CompressiveLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CompressiveLimit.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.StressLimit"></a>

### *property* StressTool.StressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressLimit.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.TensileLimit"></a>

### *property* StressTool.TensileLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TensileLimit.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.CompressiveLimitType"></a>

### *property* StressTool.CompressiveLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SafetyLimitType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CompressiveLimitType.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Theory"></a>

### *property* StressTool.Theory *: [Ansys.Mechanical.DataModel.Enums.SafetyTheoryType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SafetyTheoryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SafetyTheoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Theory.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.StressLimitType"></a>

### *property* StressTool.StressLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SafetyLimitType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressLimitType.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.TensileLimitType"></a>

### *property* StressTool.TensileLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SafetyLimitType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TensileLimitType.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.DataModelObjectCategory"></a>

### *property* StressTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Children"></a>

### *property* StressTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Comments"></a>

### *property* StressTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Figures"></a>

### *property* StressTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Images"></a>

### *property* StressTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* StressTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Properties"></a>

### *property* StressTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.VisibleProperties"></a>

### *property* StressTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StressTool.EvaluateAllResults"></a>

### StressTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddStressRatio"></a>

### StressTool.AddStressRatio()

Creates a new StressRatio

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddSafetyFactor"></a>

### StressTool.AddSafetyFactor()

Creates a new StressSafetyFactor

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddSafetyMargin"></a>

### StressTool.AddSafetyMargin()

Creates a new StressSafetyMargin

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Delete"></a>

### StressTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetChildren"></a>

### StressTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### StressTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### StressTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Activate"></a>

### StressTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.CopyTo"></a>

### StressTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Duplicate"></a>

### StressTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GroupAllSimilarChildren"></a>

### StressTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GroupSimilarObjects"></a>

### StressTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.PropertyByName"></a>

### StressTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.PropertyByAPIName"></a>

### StressTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.CreateParameter"></a>

### StressTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetParameter"></a>

### StressTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.RemoveParameter"></a>

### StressTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

