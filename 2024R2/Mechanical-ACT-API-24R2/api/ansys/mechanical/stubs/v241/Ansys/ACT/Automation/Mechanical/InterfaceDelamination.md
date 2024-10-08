# `InterfaceDelamination`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.InterfaceDelamination"></a>

#### *class* Ansys.ACT.Automation.Mechanical.InterfaceDelamination

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a InterfaceDelamination.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#InterfaceDelamination.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#InterfaceDelamination.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#InterfaceDelamination.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#InterfaceDelamination.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#InterfaceDelamination.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#InterfaceDelamination.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#InterfaceDelamination.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#InterfaceDelamination.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#InterfaceDelamination.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#InterfaceDelamination.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#InterfaceDelamination.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#InterfaceDelamination.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#InterfaceDelamination.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#InterfaceDelamination.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#InterfaceDelamination.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#InterfaceDelamination.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AutomaticTimeStepping`](#InterfaceDelamination.AutomaticTimeStepping)     | Gets or sets the AutomaticTimeStepping.                       |
| [`Children`](#InterfaceDelamination.Children)                               | Gets the list of children.                                    |
| [`Comments`](#InterfaceDelamination.Comments)                               | Gets the list of associated comments.                         |
| [`CriticalRate`](#InterfaceDelamination.CriticalRate)                       | Gets or sets the CriticalRate.                                |
| [`DataModelObjectCategory`](#InterfaceDelamination.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DistanceTolerance`](#InterfaceDelamination.DistanceTolerance)             | Gets or sets the DistanceTolerance.                           |
| [`FailureCriteriaOption`](#InterfaceDelamination.FailureCriteriaOption)     | Gets or sets the FailureCriteriaOption.                       |
| [`Figures`](#InterfaceDelamination.Figures)                                 | Gets the list of associated figures.                          |
| [`GenerationMethod`](#InterfaceDelamination.GenerationMethod)               | Gets or sets the GenerationMethod.                            |
| [`Images`](#InterfaceDelamination.Images)                                   | Gets the list of associated images.                           |
| [`InitialCrack`](#InterfaceDelamination.InitialCrack)                       | Gets or sets the InitialCrack.                                |
| [`InitialTimeStep`](#InterfaceDelamination.InitialTimeStep)                 | Gets or sets the InitialTimeStep.                             |
| [`InternalObject`](#InterfaceDelamination.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`MatchControl`](#InterfaceDelamination.MatchControl)                       | Gets or sets the MatchControl.                                |
| [`Material`](#InterfaceDelamination.Material)                               | Gets or sets the Material.                                    |
| [`MaximumTimeStep`](#InterfaceDelamination.MaximumTimeStep)                 | Gets or sets the MaximumTimeStep.                             |
| [`Method`](#InterfaceDelamination.Method)                                   | Gets or sets the Method.                                      |
| [`MinimumTimeStep`](#InterfaceDelamination.MinimumTimeStep)                 | Gets or sets the MinimumTimeStep.                             |
| [`Properties`](#InterfaceDelamination.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#InterfaceDelamination.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SourceLocation`](#InterfaceDelamination.SourceLocation)                   | Gets or sets the SourceLocation.                              |
| [`Suppressed`](#InterfaceDelamination.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TargetLocation`](#InterfaceDelamination.TargetLocation)                   | Gets or sets the TargetLocation.                              |
| [`ToleranceType`](#InterfaceDelamination.ToleranceType)                     | Gets or sets the ToleranceType.                               |
| [`Type`](#InterfaceDelamination.Type)                                       | Gets the Type.                                                |
| [`VisibleProperties`](#InterfaceDelamination.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="InterfaceDelamination.AutomaticTimeStepping"></a>

### *property* InterfaceDelamination.AutomaticTimeStepping *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../../v242/Ansys/Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticTimeStepping.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Children"></a>

### *property* InterfaceDelamination.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Comments"></a>

### *property* InterfaceDelamination.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.CriticalRate"></a>

### *property* InterfaceDelamination.CriticalRate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CriticalRate.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.DataModelObjectCategory"></a>

### *property* InterfaceDelamination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.DistanceTolerance"></a>

### *property* InterfaceDelamination.DistanceTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DistanceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.FailureCriteriaOption"></a>

### *property* InterfaceDelamination.FailureCriteriaOption *: [Ansys.Mechanical.DataModel.Enums.DelaminationFailureCriteriaOption](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DelaminationFailureCriteriaOption.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DelaminationFailureCriteriaOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FailureCriteriaOption.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Figures"></a>

### *property* InterfaceDelamination.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GenerationMethod"></a>

### *property* InterfaceDelamination.GenerationMethod *: [Ansys.Mechanical.DataModel.Enums.DelaminationGenerationMethod](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DelaminationGenerationMethod.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DelaminationGenerationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerationMethod.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Images"></a>

### *property* InterfaceDelamination.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.InitialCrack"></a>

### *property* InterfaceDelamination.InitialCrack *: [Ansys.ACT.Automation.Mechanical.GenericCrack](GenericCrack.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.GenericCrack) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialCrack.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.InitialTimeStep"></a>

### *property* InterfaceDelamination.InitialTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.InternalObject"></a>

### *property* InterfaceDelamination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDelaminationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.MatchControl"></a>

### *property* InterfaceDelamination.MatchControl *: [Ansys.ACT.Automation.Mechanical.MeshControls.MatchControl](MeshControls/MatchControl.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshControls.MatchControl) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MatchControl.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Material"></a>

### *property* InterfaceDelamination.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.MaximumTimeStep"></a>

### *property* InterfaceDelamination.MaximumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Method"></a>

### *property* InterfaceDelamination.Method *: [Ansys.Mechanical.DataModel.Enums.DelaminationMethod](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DelaminationMethod.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DelaminationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.MinimumTimeStep"></a>

### *property* InterfaceDelamination.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Properties"></a>

### *property* InterfaceDelamination.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.ReadOnly"></a>

### *property* InterfaceDelamination.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.SourceLocation"></a>

### *property* InterfaceDelamination.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Suppressed"></a>

### *property* InterfaceDelamination.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.TargetLocation"></a>

### *property* InterfaceDelamination.TargetLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.ToleranceType"></a>

### *property* InterfaceDelamination.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ToleranceType](../../../../../v242/Ansys/Mechanical/DataModel/Enums/ToleranceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Type"></a>

### *property* InterfaceDelamination.Type *: [Ansys.Mechanical.DataModel.Enums.DelaminationType](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DelaminationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DelaminationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.VisibleProperties"></a>

### *property* InterfaceDelamination.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="InterfaceDelamination.Activate"></a>

### InterfaceDelamination.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.AddCommandSnippet"></a>

### InterfaceDelamination.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.AddComment"></a>

### InterfaceDelamination.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.AddFigure"></a>

### InterfaceDelamination.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.AddImage"></a>

### InterfaceDelamination.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.CopyTo"></a>

### InterfaceDelamination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.CreateParameter"></a>

### InterfaceDelamination.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Delete"></a>

### InterfaceDelamination.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Duplicate"></a>

### InterfaceDelamination.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetChildren"></a>

### InterfaceDelamination.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetParameter"></a>

### InterfaceDelamination.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GroupAllSimilarChildren"></a>

### InterfaceDelamination.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GroupSimilarObjects"></a>

### InterfaceDelamination.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.PropertyByAPIName"></a>

### InterfaceDelamination.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.PropertyByName"></a>

### InterfaceDelamination.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.RemoveParameter"></a>

### InterfaceDelamination.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

