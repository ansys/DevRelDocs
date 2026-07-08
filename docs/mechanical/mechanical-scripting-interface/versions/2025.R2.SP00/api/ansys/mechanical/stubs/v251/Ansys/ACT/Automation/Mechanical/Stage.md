# `Stage`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Stage"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Stage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Stage.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Stage.Activate)                                                           | Activate the current object.                                                      |
| [`AddComment`](#Stage.AddComment)                                                       | Creates a new child Comment.                                                      |
| [`AddFigure`](#Stage.AddFigure)                                                         | Creates a new child Figure.                                                       |
| [`AddImage`](#Stage.AddImage)                                                           | Creates a new child Image.                                                        |
| [`CopyTo`](#Stage.CopyTo)                                                               | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Stage.CreateParameter)                                             | Creates a new parameter for a Property.                                           |
| [`Delete`](#Stage.Delete)                                                               | Run the Delete action.                                                            |
| [`Duplicate`](#Stage.Duplicate)                                                         | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Stage.GetChildren)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetHarmonicIndexForEnvironmentByIndex`](#Stage.GetHarmonicIndexForEnvironmentByIndex) | Gets the worksheet harmonic index for a given environment at index.               |
| [`GetHarmonicIndexNumberForEnvironment`](#Stage.GetHarmonicIndexNumberForEnvironment)   | Gets the worksheet number of harmonic indexes for a given environment.            |
| [`GetParameter`](#Stage.GetParameter)                                                   | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Stage.GroupAllSimilarChildren)                             | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Stage.GroupSimilarObjects)                                     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Stage.PropertyByAPIName)                                         | Get a property by its API name.                                                   |
| [`PropertyByName`](#Stage.PropertyByName)                                               | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Stage.RemoveParameter)                                             | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetHarmonicIndexForEnvironmentByIndex`](#Stage.SetHarmonicIndexForEnvironmentByIndex) | Sets the worksheet harmonic index for a given environment at index.               |
| [`SetHarmonicIndexNumberForEnvironment`](#Stage.SetHarmonicIndexNumberForEnvironment)   | Sets the worksheet number of harmonic indexes for a given environment.            |

### Properties

| Name | Description |
|-------------------------------------------------------------|---------------------------------------------------------------|
| [`Behavior`](#Stage.Behavior)                               | Gets the Behavior.                                            |
| [`Children`](#Stage.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Stage.Comments)                               | Gets the list of associated comments.                         |
| [`CyclicRegion`](#Stage.CyclicRegion)                       | Gets or sets the CyclicRegion.                                |
| [`DataModelObjectCategory`](#Stage.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Stage.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Stage.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Stage.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#Stage.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#Stage.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Stage.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`StageName`](#Stage.StageName)                             | Gets the StageName.                                           |
| [`Suppressed`](#Stage.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Stage.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Stage.Behavior"></a>

### *property* Stage.Behavior *: [Ansys.Mechanical.DataModel.Enums.StageBehavior](../../../Mechanical/DataModel/Enums/StageBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StageBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Children"></a>

### *property* Stage.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Comments"></a>

### *property* Stage.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Stage.CyclicRegion"></a>

### *property* Stage.CyclicRegion *: [Ansys.ACT.Automation.Mechanical.SymmetryGeneral](SymmetryGeneral.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SymmetryGeneral) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicRegion.

<!-- !! processed by numpydoc !! -->

<a id="Stage.DataModelObjectCategory"></a>

### *property* Stage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Figures"></a>

### *property* Stage.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Images"></a>

### *property* Stage.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Stage.InternalObject"></a>

### *property* Stage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSStageAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Location"></a>

### *property* Stage.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Properties"></a>

### *property* Stage.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Stage.ReadOnly"></a>

### *property* Stage.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Stage.StageName"></a>

### *property* Stage.StageName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StageName.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Suppressed"></a>

### *property* Stage.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Stage.VisibleProperties"></a>

### *property* Stage.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Stage.Activate"></a>

### Stage.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Stage.AddComment"></a>

### Stage.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Stage.AddFigure"></a>

### Stage.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Stage.AddImage"></a>

### Stage.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Stage.CopyTo"></a>

### Stage.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Stage.CreateParameter"></a>

### Stage.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Delete"></a>

### Stage.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Duplicate"></a>

### Stage.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetChildren"></a>

### Stage.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetHarmonicIndexForEnvironmentByIndex"></a>

### Stage.GetHarmonicIndexForEnvironmentByIndex(envId: [int](https://docs.python.org/3/library/functions.html#int), index: [int](https://docs.python.org/3/library/functions.html#int))

Gets the worksheet harmonic index for a given environment at index.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetHarmonicIndexNumberForEnvironment"></a>

### Stage.GetHarmonicIndexNumberForEnvironment(envId: [int](https://docs.python.org/3/library/functions.html#int))

Gets the worksheet number of harmonic indexes for a given environment.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetParameter"></a>

### Stage.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GroupAllSimilarChildren"></a>

### Stage.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GroupSimilarObjects"></a>

### Stage.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Stage.PropertyByAPIName"></a>

### Stage.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Stage.PropertyByName"></a>

### Stage.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Stage.RemoveParameter"></a>

### Stage.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.SetHarmonicIndexForEnvironmentByIndex"></a>

### Stage.SetHarmonicIndexForEnvironmentByIndex(envId: [int](https://docs.python.org/3/library/functions.html#int), index: [int](https://docs.python.org/3/library/functions.html#int), newVal: [int](https://docs.python.org/3/library/functions.html#int))

Sets the worksheet harmonic index for a given environment at index.

<!-- !! processed by numpydoc !! -->

<a id="Stage.SetHarmonicIndexNumberForEnvironment"></a>

### Stage.SetHarmonicIndexNumberForEnvironment(envId: [int](https://docs.python.org/3/library/functions.html#int), newVal: [int](https://docs.python.org/3/library/functions.html#int))

Sets the worksheet number of harmonic indexes for a given environment.

<!-- !! processed by numpydoc !! -->

