# InterfaceDelamination

### *class* InterfaceDelamination

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a InterfaceDelamination.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddCommandSnippet`](#InterfaceDelamination.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#InterfaceDelamination.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#InterfaceDelamination.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#InterfaceDelamination.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#InterfaceDelamination.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#InterfaceDelamination.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#InterfaceDelamination.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#InterfaceDelamination.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#InterfaceDelamination.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#InterfaceDelamination.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#InterfaceDelamination.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#InterfaceDelamination.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#InterfaceDelamination.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#InterfaceDelamination.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#InterfaceDelamination.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`AutomaticTimeStepping`](../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#AutomaticTimeStepping)       | Gets or sets the AutomaticTimeStepping.                       |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`FailureCriteriaOption`](#InterfaceDelamination.FailureCriteriaOption)                                             | Gets or sets the FailureCriteriaOption.                       |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Material`](Material.md#Material)                                                                                  | Gets or sets the Material.                                    |
| [`DistanceTolerance`](#InterfaceDelamination.DistanceTolerance)                                                     | Gets or sets the DistanceTolerance.                           |
| [`CriticalRate`](#InterfaceDelamination.CriticalRate)                                                               | Gets or sets the CriticalRate.                                |
| [`InitialTimeStep`](#InterfaceDelamination.InitialTimeStep)                                                         | Gets or sets the InitialTimeStep.                             |
| [`MaximumTimeStep`](#InterfaceDelamination.MaximumTimeStep)                                                         | Gets or sets the MaximumTimeStep.                             |
| [`MinimumTimeStep`](#InterfaceDelamination.MinimumTimeStep)                                                         | Gets or sets the MinimumTimeStep.                             |
| [`Method`](#InterfaceDelamination.Method)                                                                           | Gets or sets the Method.                                      |
| [`Type`](#InterfaceDelamination.Type)                                                                               | Gets the Type.                                                |
| [`GenerationMethod`](#InterfaceDelamination.GenerationMethod)                                                       | Gets or sets the GenerationMethod.                            |
| [`ToleranceType`](../../../Mechanical/DataModel/Enums/ToleranceType.md#ToleranceType)                               | Gets or sets the ToleranceType.                               |
| [`Suppressed`](#InterfaceDelamination.Suppressed)                                                                   | Gets or sets the Suppressed.                                  |
| [`InitialCrack`](#InterfaceDelamination.InitialCrack)                                                               | Gets or sets the InitialCrack.                                |
| [`MatchControl`](MeshControls/MatchControl.md#MatchControl)                                                         | Gets or sets the MatchControl.                                |
| [`SourceLocation`](#InterfaceDelamination.SourceLocation)                                                           | Gets or sets the SourceLocation.                              |
| [`TargetLocation`](#InterfaceDelamination.TargetLocation)                                                           | Gets or sets the TargetLocation.                              |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#InterfaceDelamination.Children)                                                                       | Gets the list of children.                                    |
| [`Comments`](#InterfaceDelamination.Comments)                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#InterfaceDelamination.Figures)                                                                         | Gets the list of associated figures.                          |
| [`Images`](#InterfaceDelamination.Images)                                                                           | Gets the list of associated images.                           |
| [`ReadOnly`](#InterfaceDelamination.ReadOnly)                                                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#InterfaceDelamination.Properties)                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#InterfaceDelamination.VisibleProperties)                                                     | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import InterfaceDelamination
```

## Property detail

### *property* InterfaceDelamination.AutomaticTimeStepping *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticTimeStepping.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.FailureCriteriaOption *: [Ansys.Mechanical.DataModel.Enums.DelaminationFailureCriteriaOption](../../../Mechanical/DataModel/Enums/DelaminationFailureCriteriaOption.md#DelaminationFailureCriteriaOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FailureCriteriaOption.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDelaminationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.DistanceTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DistanceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.CriticalRate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CriticalRate.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.InitialTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.MaximumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.Method *: [Ansys.Mechanical.DataModel.Enums.DelaminationMethod](../../../Mechanical/DataModel/Enums/DelaminationMethod.md#DelaminationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.Type *: [Ansys.Mechanical.DataModel.Enums.DelaminationType](../../../Mechanical/DataModel/Enums/DelaminationType.md#DelaminationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.GenerationMethod *: [Ansys.Mechanical.DataModel.Enums.DelaminationGenerationMethod](../../../Mechanical/DataModel/Enums/DelaminationGenerationMethod.md#DelaminationGenerationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerationMethod.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ToleranceType](../../../Mechanical/DataModel/Enums/ToleranceType.md#ToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.InitialCrack *: [Ansys.ACT.Automation.Mechanical.GenericCrack](GenericCrack.md#GenericCrack) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialCrack.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.MatchControl *: [Ansys.ACT.Automation.Mechanical.MeshControls.MatchControl](MeshControls/MatchControl.md#MatchControl) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MatchControl.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.TargetLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* InterfaceDelamination.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### InterfaceDelamination.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### InterfaceDelamination.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
