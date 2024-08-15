# `StressTool`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a StressTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `EvaluateAllResults`      | Run the EvaluateAllResults action.                                                |
| `AddStressRatio`          | Creates a new StressRatio                                                         |
| `AddSafetyFactor`         | Creates a new StressSafetyFactor                                                  |
| `AddSafetyMargin`         | Creates a new StressSafetyMargin                                                  |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `LimitFactor`             | Gets or sets the LimitFactor.                                 |
| `CompressiveLimit`        | Gets or sets the CompressiveLimit.                            |
| `StressLimit`             | Gets or sets the StressLimit.                                 |
| `TensileLimit`            | Gets or sets the TensileLimit.                                |
| `CompressiveLimitType`    | Gets or sets the CompressiveLimitType.                        |
| `Theory`                  | Gets or sets the Theory.                                      |
| `StressLimitType`         | Gets or sets the StressLimitType.                             |
| `TensileLimitType`        | Gets or sets the TensileLimitType.                            |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

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

### *property* StressTool.CompressiveLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SafetyLimitType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CompressiveLimitType.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.Theory *: [Ansys.Mechanical.DataModel.Enums.SafetyTheoryType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SafetyTheoryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SafetyTheoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Theory.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.StressLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SafetyLimitType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressLimitType.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.TensileLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SafetyLimitType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TensileLimitType.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* StressTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

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

### StressTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### StressTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### StressTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### StressTool.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

