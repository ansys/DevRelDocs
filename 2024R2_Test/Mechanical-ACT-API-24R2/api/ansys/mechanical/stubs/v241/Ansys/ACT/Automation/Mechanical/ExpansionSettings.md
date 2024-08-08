# `ExpansionSettings`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ExpansionSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ExpansionSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetExpansionState`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.GetExpansionState)                   | Gets the requested expansion state of a given Condensed Part                      |
| [`SetExpansionState`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.SetExpansionState)                   | Sets the requested expansion state of a given Condensed Part                      |
| [`GetCompletedExpansionState`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.GetCompletedExpansionState) | Gets the completed expansion state of a given Condensed Part                      |
| [`EvaluateAllResults`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.EvaluateAllResults)                 | Run the EvaluateAllResults action.                                                |
| [`ClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.ClearGeneratedData)                 | Run the ClearGeneratedData action.                                                |
| [`PerformExpansionPass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.PerformExpansionPass)             | Run the PerformExpansionPass action.                                              |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.Delete)                                         | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.AddComment)                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.AddFigure)                                   | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.AddImage)                                     | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.Activate)                                     | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.CopyTo)                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.Duplicate)                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.PropertyByName)                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.PropertyByAPIName)                   | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.CreateParameter)                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.GetParameter)                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#id0)                                                      | Gets the internal object. For advanced usage only.            |
| [`CondensedPartExpansionType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.CondensedPartExpansionType) | Gets or sets the CondensedPartExpansionType.                  |
| [`NodalForces`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.NodalForces)                               | Gets or sets the NodalForces.                                 |
| [`Strain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.Strain)                                         | Gets or sets the Strain.                                      |
| [`Stress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.Stress)                                         | Gets or sets the Stress.                                      |
| [`CleanupOptionalFiles`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.CleanupOptionalFiles)             | Gets or sets the CleanupOptionalFiles.                        |
| [`ExpandAfterUsePassFailure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.ExpandAfterUsePassFailure)   | Gets or sets the ExpandAfterUsePassFailure.                   |
| [`GeneralMiscellaneous`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.GeneralMiscellaneous)             | Gets or sets the GeneralMiscellaneous.                        |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.DataModelObjectCategory)       | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.Children)                                     | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.Comments)                                     | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.Figures)                                       | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.Images)                                         | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#id0)                                                      | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.Properties)                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExpansionSettings.md#ExpansionSettings.VisibleProperties)                   | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ExpansionSettings.InternalObject"></a>

### *property* ExpansionSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExpansionSettingsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.CondensedPartExpansionType"></a>

### *property* ExpansionSettings.CondensedPartExpansionType *: [Ansys.Mechanical.DataModel.Enums.CondensedPartExpansionType](../../../Mechanical/DataModel/Enums/CondensedPartExpansionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartExpansionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CondensedPartExpansionType.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.NodalForces"></a>

### *property* ExpansionSettings.NodalForces *: [Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType](../../../Mechanical/DataModel/Enums/OutputControlsNodalForcesType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalForces.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Strain"></a>

### *property* ExpansionSettings.Strain *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Strain.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Stress"></a>

### *property* ExpansionSettings.Stress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Stress.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.CleanupOptionalFiles"></a>

### *property* ExpansionSettings.CleanupOptionalFiles *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CleanupOptionalFiles.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.ExpandAfterUsePassFailure"></a>

### *property* ExpansionSettings.ExpandAfterUsePassFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExpandAfterUsePassFailure.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GeneralMiscellaneous"></a>

### *property* ExpansionSettings.GeneralMiscellaneous *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralMiscellaneous.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Suppressed"></a>

### *property* ExpansionSettings.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.DataModelObjectCategory"></a>

### *property* ExpansionSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Children"></a>

### *property* ExpansionSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Comments"></a>

### *property* ExpansionSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Figures"></a>

### *property* ExpansionSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Images"></a>

### *property* ExpansionSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ExpansionSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Properties"></a>

### *property* ExpansionSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.VisibleProperties"></a>

### *property* ExpansionSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExpansionSettings.GetExpansionState"></a>

### ExpansionSettings.GetExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedPart))

Gets the requested expansion state of a given Condensed Part

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.SetExpansionState"></a>

### ExpansionSettings.SetExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedPart), state: [Ansys.ACT.Automation.Mechanical.CondensedPartExpansionState](CondensedPartExpansionState.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedPartExpansionState))

Sets the requested expansion state of a given Condensed Part

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetCompletedExpansionState"></a>

### ExpansionSettings.GetCompletedExpansionState(condensedPart: [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedPart))

Gets the completed expansion state of a given Condensed Part

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.EvaluateAllResults"></a>

### ExpansionSettings.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.ClearGeneratedData"></a>

### ExpansionSettings.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.PerformExpansionPass"></a>

### ExpansionSettings.PerformExpansionPass()

Run the PerformExpansionPass action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Delete"></a>

### ExpansionSettings.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetChildren"></a>

### ExpansionSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ExpansionSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### ExpansionSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Activate"></a>

### ExpansionSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.CopyTo"></a>

### ExpansionSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.Duplicate"></a>

### ExpansionSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GroupAllSimilarChildren"></a>

### ExpansionSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GroupSimilarObjects"></a>

### ExpansionSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.PropertyByName"></a>

### ExpansionSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.PropertyByAPIName"></a>

### ExpansionSettings.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.CreateParameter"></a>

### ExpansionSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.GetParameter"></a>

### ExpansionSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExpansionSettings.RemoveParameter"></a>

### ExpansionSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

