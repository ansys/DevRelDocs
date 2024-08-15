# `Stage`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Stage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Stage.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------|-----------------------------------------------------------------------------------|
| `GetHarmonicIndexNumberForEnvironment`   | Gets the worksheet number of harmonic indexes for a given environment.            |
| `SetHarmonicIndexNumberForEnvironment`   | Sets the worksheet number of harmonic indexes for a given environment.            |
| `GetHarmonicIndexForEnvironmentByIndex`  | Gets the worksheet harmonic index for a given environment at index.               |
| `SetHarmonicIndexForEnvironmentByIndex`  | Sets the worksheet harmonic index for a given environment at index.               |
| `Delete`                                 | Run the Delete action.                                                            |
| `GetChildren`                            | Gets the list of children, filtered by type.                                      |
| `GetChildren`                            | Gets the list of children, filtered by type.                                      |
| `AddComment`                             | Creates a new child Comment.                                                      |
| `AddFigure`                              | Creates a new child Figure.                                                       |
| `AddImage`                               | Creates a new child Image.                                                        |
| `Activate`                               | Activate the current object.                                                      |
| `CopyTo`                                 | Copies all visible properties from this object to another.                        |
| `Duplicate`                              | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`                | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`                    | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                         | Get a property by its unique name.                                                |
| `PropertyByAPIName`                      | Get a property by its API name.                                                   |
| `CreateParameter`                        | Creates a new parameter for a Property.                                           |
| `GetParameter`                           | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`                        | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `StageName`               | Gets the StageName.                                           |
| `Behavior`                | Gets the Behavior.                                            |
| `Suppressed`              | Gets or sets the Suppressed.                                  |
| `CyclicRegion`            | Gets or sets the CyclicRegion.                                |
| `Location`                | Gets or sets the Location.                                    |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `ReadOnly`                | Gets or sets the ReadOnly.                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* Stage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSStageAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Stage.StageName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StageName.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Behavior *: [Ansys.Mechanical.DataModel.Enums.StageBehavior](../../../Mechanical/DataModel/Enums/StageBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StageBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Stage.CyclicRegion *: [Ansys.ACT.Automation.Mechanical.SymmetryGeneral](SymmetryGeneral.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SymmetryGeneral) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicRegion.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* Stage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Stage.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Stage.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Stage.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### Stage.GetHarmonicIndexNumberForEnvironment(envId: System.UInt32)

Gets the worksheet number of harmonic indexes for a given environment.

<!-- !! processed by numpydoc !! -->

### Stage.SetHarmonicIndexNumberForEnvironment(envId: System.UInt32, newVal: System.UInt32)

Sets the worksheet number of harmonic indexes for a given environment.

<!-- !! processed by numpydoc !! -->

### Stage.GetHarmonicIndexForEnvironmentByIndex(envId: System.UInt32, index: System.Int32)

Gets the worksheet harmonic index for a given environment at index.

<!-- !! processed by numpydoc !! -->

### Stage.SetHarmonicIndexForEnvironmentByIndex(envId: System.UInt32, index: System.Int32, newVal: System.UInt32)

Sets the worksheet harmonic index for a given environment at index.

<!-- !! processed by numpydoc !! -->

### Stage.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Stage.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Stage.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Stage.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Stage.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Stage.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### Stage.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Stage.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Stage.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Stage.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Stage.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Stage.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Stage.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### Stage.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Stage.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Stage.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

