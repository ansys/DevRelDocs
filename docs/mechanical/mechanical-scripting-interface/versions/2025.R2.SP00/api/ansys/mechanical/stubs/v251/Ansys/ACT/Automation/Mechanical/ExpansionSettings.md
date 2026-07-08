# `ExpansionSettings`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ExpansionSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ExpansionSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ExpansionSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ExpansionSettings.Activate)                                     | Activate the current object.                                                      |
| [`AddComment`](#ExpansionSettings.AddComment)                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](#ExpansionSettings.AddFigure)                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#ExpansionSettings.AddImage)                                     | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ExpansionSettings.ClearGeneratedData)                 | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ExpansionSettings.CopyTo)                                         | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ExpansionSettings.CreateParameter)                       | Creates a new parameter for a Property.                                           |
| [`Delete`](#ExpansionSettings.Delete)                                         | Run the Delete action.                                                            |
| [`Duplicate`](#ExpansionSettings.Duplicate)                                   | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#ExpansionSettings.EvaluateAllResults)                 | Run the EvaluateAllResults action.                                                |
| [`GetChildren`](#ExpansionSettings.GetChildren)                               | Gets the list of children, filtered by type.                                      |
| [`GetCompletedExpansionState`](#ExpansionSettings.GetCompletedExpansionState) | Gets the completed expansion state of a given Condensed Part                      |
| [`GetExpansionState`](#ExpansionSettings.GetExpansionState)                   | Gets the requested expansion state of a given Condensed Part                      |
| [`GetParameter`](#ExpansionSettings.GetParameter)                             | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ExpansionSettings.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ExpansionSettings.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                               |
| [`PerformExpansionPass`](#ExpansionSettings.PerformExpansionPass)             | Run the PerformExpansionPass action.                                              |
| [`PropertyByAPIName`](#ExpansionSettings.PropertyByAPIName)                   | Get a property by its API name.                                                   |
| [`PropertyByName`](#ExpansionSettings.PropertyByName)                         | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ExpansionSettings.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetExpansionState`](#ExpansionSettings.SetExpansionState)                   | Sets the requested expansion state of a given Condensed Part                      |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ExpansionSettings.Children)                                     | Gets the list of children.                                    |
| [`CleanupOptionalFiles`](#ExpansionSettings.CleanupOptionalFiles)             | Gets or sets the CleanupOptionalFiles.                        |
| [`Comments`](#ExpansionSettings.Comments)                                     | Gets the list of associated comments.                         |
| [`CondensedPartExpansionType`](#ExpansionSettings.CondensedPartExpansionType) | Gets or sets the CondensedPartExpansionType.                  |
| [`DataModelObjectCategory`](#ExpansionSettings.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                  |
| [`ExpandAfterUsePassFailure`](#ExpansionSettings.ExpandAfterUsePassFailure)   | Gets or sets the ExpandAfterUsePassFailure.                   |
| [`Figures`](#ExpansionSettings.Figures)                                       | Gets the list of associated figures.                          |
| [`GeneralMiscellaneous`](#ExpansionSettings.GeneralMiscellaneous)             | Gets or sets the GeneralMiscellaneous.                        |
| [`Images`](#ExpansionSettings.Images)                                         | Gets the list of associated images.                           |
| [`InternalObject`](#ExpansionSettings.InternalObject)                         | Gets the internal object. For advanced usage only.            |
| [`NodalForces`](#ExpansionSettings.NodalForces)                               | Gets or sets the NodalForces.                                 |
| [`Properties`](#ExpansionSettings.Properties)                                 | Gets the list of properties for this object.                  |
| [`Strain`](#ExpansionSettings.Strain)                                         | Gets or sets the Strain.                                      |
| [`Stress`](#ExpansionSettings.Stress)                                         | Gets or sets the Stress.                                      |
| [`Suppressed`](#ExpansionSettings.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ExpansionSettings.VisibleProperties)                   | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ExpansionSettings.Children"></a>

### *property* ExpansionSettings.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.CleanupOptionalFiles"></a>

### *property* ExpansionSettings.CleanupOptionalFiles *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CleanupOptionalFiles.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Comments"></a>

### *property* ExpansionSettings.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.CondensedPartExpansionType"></a>

### *property* ExpansionSettings.CondensedPartExpansionType *: [Ansys.Mechanical.DataModel.Enums.CondensedPartExpansionType](../../../Mechanical/DataModel/Enums/CondensedPartExpansionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CondensedPartExpansionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CondensedPartExpansionType.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.DataModelObjectCategory"></a>

### *property* ExpansionSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.ExpandAfterUsePassFailure"></a>

### *property* ExpansionSettings.ExpandAfterUsePassFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExpandAfterUsePassFailure.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Figures"></a>

### *property* ExpansionSettings.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GeneralMiscellaneous"></a>

### *property* ExpansionSettings.GeneralMiscellaneous *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralMiscellaneous.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Images"></a>

### *property* ExpansionSettings.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.InternalObject"></a>

### *property* ExpansionSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExpansionSettingsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.NodalForces"></a>

### *property* ExpansionSettings.NodalForces *: [Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType](../../../Mechanical/DataModel/Enums/OutputControlsNodalForcesType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalForces.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Properties"></a>

### *property* ExpansionSettings.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Strain"></a>

### *property* ExpansionSettings.Strain *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Strain.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Stress"></a>

### *property* ExpansionSettings.Stress *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Stress.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Suppressed"></a>

### *property* ExpansionSettings.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.VisibleProperties"></a>

### *property* ExpansionSettings.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExpansionSettings.Activate"></a>

### ExpansionSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.AddComment"></a>

### ExpansionSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.AddFigure"></a>

### ExpansionSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.AddImage"></a>

### ExpansionSettings.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.ClearGeneratedData"></a>

### ExpansionSettings.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.CopyTo"></a>

### ExpansionSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.CreateParameter"></a>

### ExpansionSettings.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Delete"></a>

### ExpansionSettings.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Duplicate"></a>

### ExpansionSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.EvaluateAllResults"></a>

### ExpansionSettings.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetChildren"></a>

### ExpansionSettings.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetCompletedExpansionState"></a>

### ExpansionSettings.GetCompletedExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CondensedPart))

Gets the completed expansion state of a given Condensed Part

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetExpansionState"></a>

### ExpansionSettings.GetExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CondensedPart))

Gets the requested expansion state of a given Condensed Part

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetParameter"></a>

### ExpansionSettings.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GroupAllSimilarChildren"></a>

### ExpansionSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GroupSimilarObjects"></a>

### ExpansionSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.PerformExpansionPass"></a>

### ExpansionSettings.PerformExpansionPass()

Run the PerformExpansionPass action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.PropertyByAPIName"></a>

### ExpansionSettings.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.PropertyByName"></a>

### ExpansionSettings.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.RemoveParameter"></a>

### ExpansionSettings.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.SetExpansionState"></a>

### ExpansionSettings.SetExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CondensedPart), state: [Ansys.ACT.Automation.Mechanical.CondensedPartExpansionState](CondensedPartExpansionState.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CondensedPartExpansionState))

Sets the requested expansion state of a given Condensed Part

<!-- !! processed by numpydoc !! -->

