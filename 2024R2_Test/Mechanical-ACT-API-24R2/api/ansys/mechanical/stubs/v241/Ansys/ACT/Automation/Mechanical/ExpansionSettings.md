# `ExpansionSettings`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ExpansionSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ExpansionSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------|-----------------------------------------------------------------------------------|
| `GetExpansionState`          | Gets the requested expansion state of a given Condensed Part                      |
| `SetExpansionState`          | Sets the requested expansion state of a given Condensed Part                      |
| `GetCompletedExpansionState` | Gets the completed expansion state of a given Condensed Part                      |
| `EvaluateAllResults`         | Run the EvaluateAllResults action.                                                |
| `ClearGeneratedData`         | Run the ClearGeneratedData action.                                                |
| `PerformExpansionPass`       | Run the PerformExpansionPass action.                                              |
| `Delete`                     | Run the Delete action.                                                            |
| `GetChildren`                | Gets the list of children, filtered by type.                                      |
| `GetChildren`                | Gets the list of children, filtered by type.                                      |
| `AddComment`                 | Creates a new child Comment.                                                      |
| `AddFigure`                  | Creates a new child Figure.                                                       |
| `AddImage`                   | Creates a new child Image.                                                        |
| `Activate`                   | Activate the current object.                                                      |
| `CopyTo`                     | Copies all visible properties from this object to another.                        |
| `Duplicate`                  | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`    | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`        | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`             | Get a property by its unique name.                                                |
| `PropertyByAPIName`          | Get a property by its API name.                                                   |
| `CreateParameter`            | Creates a new parameter for a Property.                                           |
| `GetParameter`               | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`            | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------|---------------------------------------------------------------|
| `InternalObject`             | Gets the internal object. For advanced usage only.            |
| `CondensedPartExpansionType` | Gets or sets the CondensedPartExpansionType.                  |
| `NodalForces`                | Gets or sets the NodalForces.                                 |
| `Strain`                     | Gets or sets the Strain.                                      |
| `Stress`                     | Gets or sets the Stress.                                      |
| `CleanupOptionalFiles`       | Gets or sets the CleanupOptionalFiles.                        |
| `ExpandAfterUsePassFailure`  | Gets or sets the ExpandAfterUsePassFailure.                   |
| `GeneralMiscellaneous`       | Gets or sets the GeneralMiscellaneous.                        |
| `Suppressed`                 | Gets or sets the Suppressed.                                  |
| `DataModelObjectCategory`    | Gets the current DataModelObject's category.                  |
| `Children`                   | Gets the list of children.                                    |
| `Comments`                   | Gets the list of associated comments.                         |
| `Figures`                    | Gets the list of associated figures.                          |
| `Images`                     | Gets the list of associated images.                           |
| `InternalObject`             | Gets the internal object. For advanced usage only.            |
| `Properties`                 | Gets the list of properties for this object.                  |
| `VisibleProperties`          | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* ExpansionSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExpansionSettingsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.CondensedPartExpansionType *: [Ansys.Mechanical.DataModel.Enums.CondensedPartExpansionType](../../../Mechanical/DataModel/Enums/CondensedPartExpansionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartExpansionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CondensedPartExpansionType.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.NodalForces *: [Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType](../../../Mechanical/DataModel/Enums/OutputControlsNodalForcesType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalForces.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.Strain *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Strain.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.Stress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Stress.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.CleanupOptionalFiles *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CleanupOptionalFiles.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.ExpandAfterUsePassFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExpandAfterUsePassFailure.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.GeneralMiscellaneous *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralMiscellaneous.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### ExpansionSettings.GetExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedPart))

Gets the requested expansion state of a given Condensed Part

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.SetExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedPart), state: [Ansys.ACT.Automation.Mechanical.CondensedPartExpansionState](CondensedPartExpansionState.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedPartExpansionState))

Sets the requested expansion state of a given Condensed Part

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.GetCompletedExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedPart))

Gets the completed expansion state of a given Condensed Part

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.PerformExpansionPass()

Run the PerformExpansionPass action.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

