# StressTool

### *class* StressTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StressTool.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`EvaluateAllResults`](#StressTool.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`LimitFactor`](#StressTool.LimitFactor)                                                                                  | Gets or sets the LimitFactor.                                 |
| [`CompressiveLimit`](#StressTool.CompressiveLimit)                                                                        | Gets or sets the CompressiveLimit.                            |
| [`StressLimit`](#StressTool.StressLimit)                                                                                  | Gets or sets the StressLimit.                                 |
| [`TensileLimit`](#StressTool.TensileLimit)                                                                                | Gets or sets the TensileLimit.                                |
| [`CompressiveLimitType`](#StressTool.CompressiveLimitType)                                                                | Gets or sets the CompressiveLimitType.                        |
| [`Theory`](#StressTool.Theory)                                                                                            | Gets or sets the Theory.                                      |
| [`StressLimitType`](#StressTool.StressLimitType)                                                                          | Gets or sets the StressLimitType.                             |
| [`TensileLimitType`](#StressTool.TensileLimitType)                                                                        | Gets or sets the TensileLimitType.                            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#StressTool.Children)                                                                                        | Gets the list of children.                                    |
| [`Comments`](#StressTool.Comments)                                                                                        | Gets the list of associated comments.                         |
| [`Figures`](#StressTool.Figures)                                                                                          | Gets the list of associated figures.                          |
| [`Images`](#StressTool.Images)                                                                                            | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#StressTool.Properties)                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#StressTool.VisibleProperties)                                                                      | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressToolResults import StressTool
```

## Property detail

### *property* StressTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSStressSafetyToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.LimitFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitFactor.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.CompressiveLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CompressiveLimit.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.StressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressLimit.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.TensileLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TensileLimit.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.CompressiveLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../Mechanical/DataModel/Enums/SafetyLimitType.md#SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CompressiveLimitType.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.Theory *: [Ansys.Mechanical.DataModel.Enums.SafetyTheoryType](../../../../../Mechanical/DataModel/Enums/SafetyTheoryType.md#SafetyTheoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Theory.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.StressLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../Mechanical/DataModel/Enums/SafetyLimitType.md#SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressLimitType.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.TensileLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../Mechanical/DataModel/Enums/SafetyLimitType.md#SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TensileLimitType.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### StressTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### StressTool.AddStressRatio()

Creates a new StressRatio

<!-- !! processed by numpydoc !! -->

### StressTool.AddSafetyFactor()

Creates a new StressSafetyFactor

<!-- !! processed by numpydoc !! -->

### StressTool.AddSafetyMargin()

Creates a new StressSafetyMargin

<!-- !! processed by numpydoc !! -->

### StressTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### StressTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### StressTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### StressTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### StressTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### StressTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### StressTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### StressTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### StressTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### StressTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### StressTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### StressTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### StressTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### StressTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### StressTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### StressTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
