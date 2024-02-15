# ExpansionSettings

### *class* ExpansionSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ExpansionSettings.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetExpansionState`](#ExpansionSettings.GetExpansionState)                   | Gets the requested expansion state of a given Condensed Part                      |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetExpansionState`](#ExpansionSettings.SetExpansionState)                   | Sets the requested expansion state of a given Condensed Part                      |
| [`GetCompletedExpansionState`](#ExpansionSettings.GetCompletedExpansionState) | Gets the completed expansion state of a given Condensed Part                      |
| [`EvaluateAllResults`](#ExpansionSettings.EvaluateAllResults)                 | Run the EvaluateAllResults action.                                                |
| [`ClearGeneratedData`](#ExpansionSettings.ClearGeneratedData)                 | Run the ClearGeneratedData action.                                                |
| [`PerformExpansionPass`](#ExpansionSettings.PerformExpansionPass)             | Run the PerformExpansionPass action.                                              |
| [`Delete`](#ExpansionSettings.Delete)                                         | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ExpansionSettings.AddComment)                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](#ExpansionSettings.AddFigure)                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#ExpansionSettings.AddImage)                                     | Creates a new child Image.                                                        |
| [`Activate`](#ExpansionSettings.Activate)                                     | Activate the current object.                                                      |
| [`CopyTo`](#ExpansionSettings.CopyTo)                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ExpansionSettings.Duplicate)                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ExpansionSettings.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ExpansionSettings.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ExpansionSettings.PropertyByName)                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ExpansionSettings.PropertyByAPIName)                   | Get a property by its API name.                                                   |
| [`CreateParameter`](#ExpansionSettings.CreateParameter)                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ExpansionSettings.GetParameter)                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ExpansionSettings.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`CondensedPartExpansionType`](../../../Mechanical/DataModel/Enums/CondensedPartExpansionType.md#CondensedPartExpansionType) | Gets or sets the CondensedPartExpansionType.                  |
| [`NodalForces`](#ExpansionSettings.NodalForces)                                                                              | Gets or sets the NodalForces.                                 |
| [`Strain`](#ExpansionSettings.Strain)                                                                                        | Gets or sets the Strain.                                      |
| [`Stress`](#ExpansionSettings.Stress)                                                                                        | Gets or sets the Stress.                                      |
| [`CleanupOptionalFiles`](#ExpansionSettings.CleanupOptionalFiles)                                                            | Gets or sets the CleanupOptionalFiles.                        |
| [`ExpandAfterUsePassFailure`](#ExpansionSettings.ExpandAfterUsePassFailure)                                                  | Gets or sets the ExpandAfterUsePassFailure.                   |
| [`GeneralMiscellaneous`](#ExpansionSettings.GeneralMiscellaneous)                                                            | Gets or sets the GeneralMiscellaneous.                        |
| [`Suppressed`](#ExpansionSettings.Suppressed)                                                                                | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)          | Gets the current DataModelObject’s category.                  |
| [`Children`](#ExpansionSettings.Children)                                                                                    | Gets the list of children.                                    |
| [`Comments`](#ExpansionSettings.Comments)                                                                                    | Gets the list of associated comments.                         |
| [`Figures`](#ExpansionSettings.Figures)                                                                                      | Gets the list of associated figures.                          |
| [`Images`](#ExpansionSettings.Images)                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ExpansionSettings.Properties)                                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ExpansionSettings.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ExpansionSettings
```

## Property detail

### *property* ExpansionSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExpansionSettingsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.CondensedPartExpansionType *: [Ansys.Mechanical.DataModel.Enums.CondensedPartExpansionType](../../../Mechanical/DataModel/Enums/CondensedPartExpansionType.md#CondensedPartExpansionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CondensedPartExpansionType.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.NodalForces *: [Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType](../../../Mechanical/DataModel/Enums/OutputControlsNodalForcesType.md#OutputControlsNodalForcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ExpansionSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ExpansionSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

## Method detail

### ExpansionSettings.GetExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#CondensedPart))

Gets the requested expansion state of a given Condensed Part

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.SetExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#CondensedPart), state: [Ansys.ACT.Automation.Mechanical.CondensedPartExpansionState](CondensedPartExpansionState.md#CondensedPartExpansionState))

Sets the requested expansion state of a given Condensed Part

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.GetCompletedExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#CondensedPart))

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

### ExpansionSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ExpansionSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
