# `Stage`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Stage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Stage.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetHarmonicIndexNumberForEnvironment`](#Stage.GetHarmonicIndexNumberForEnvironment)   | Gets the worksheet number of harmonic indexes for a given environment.            |
| [`SetHarmonicIndexNumberForEnvironment`](#Stage.SetHarmonicIndexNumberForEnvironment)   | Sets the worksheet number of harmonic indexes for a given environment.            |
| [`GetHarmonicIndexForEnvironmentByIndex`](#Stage.GetHarmonicIndexForEnvironmentByIndex) | Gets the worksheet harmonic index for a given environment at index.               |
| [`SetHarmonicIndexForEnvironmentByIndex`](#Stage.SetHarmonicIndexForEnvironmentByIndex) | Sets the worksheet harmonic index for a given environment at index.               |
| [`Delete`](#Stage.Delete)                                                               | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Stage.AddComment)                                                       | Creates a new child Comment.                                                      |
| [`AddFigure`](#Stage.AddFigure)                                                         | Creates a new child Figure.                                                       |
| [`AddImage`](#Stage.AddImage)                                                           | Creates a new child Image.                                                        |
| [`Activate`](#Stage.Activate)                                                           | Activate the current object.                                                      |
| [`CopyTo`](#Stage.CopyTo)                                                               | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Stage.Duplicate)                                                         | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Stage.GroupAllSimilarChildren)                             | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Stage.GroupSimilarObjects)                                     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Stage.PropertyByName)                                               | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Stage.PropertyByAPIName)                                         | Get a property by its API name.                                                   |
| [`CreateParameter`](#Stage.CreateParameter)                                             | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Stage.GetParameter)                                                   | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Stage.RemoveParameter)                                             | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                    | Gets the internal object. For advanced usage only.            |
| [`StageName`](#Stage.StageName)                             | Gets the StageName.                                           |
| [`Behavior`](#Stage.Behavior)                               | Gets the Behavior.                                            |
| [`Suppressed`](#Stage.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`CyclicRegion`](#Stage.CyclicRegion)                       | Gets or sets the CyclicRegion.                                |
| [`Location`](#Stage.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#Stage.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](#Stage.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Stage.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#Stage.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Stage.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#Stage.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                    | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Stage.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Stage.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Stage.InternalObject"></a>

### *property* Stage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSStageAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Stage.StageName"></a>

### *property* Stage.StageName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StageName.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Behavior"></a>

### *property* Stage.Behavior *: [Ansys.Mechanical.DataModel.Enums.StageBehavior](../../../../../v241/Ansys/Mechanical/DataModel/Enums/StageBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StageBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Suppressed"></a>

### *property* Stage.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Stage.CyclicRegion"></a>

### *property* Stage.CyclicRegion *: [Ansys.ACT.Automation.Mechanical.SymmetryGeneral](../../../../../v241/Ansys/ACT/Automation/Mechanical/SymmetryGeneral.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SymmetryGeneral) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicRegion.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Location"></a>

### *property* Stage.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Stage.DataModelObjectCategory"></a>

### *property* Stage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Children"></a>

### *property* Stage.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Comments"></a>

### *property* Stage.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Figures"></a>

### *property* Stage.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Images"></a>

### *property* Stage.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Stage.ReadOnly"></a>

### *property* Stage.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Stage.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Properties"></a>

### *property* Stage.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Stage.VisibleProperties"></a>

### *property* Stage.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Stage.GetHarmonicIndexNumberForEnvironment"></a>

### Stage.GetHarmonicIndexNumberForEnvironment(envId: System.UInt32)

Gets the worksheet number of harmonic indexes for a given environment.

<!-- !! processed by numpydoc !! -->

<a id="Stage.SetHarmonicIndexNumberForEnvironment"></a>

### Stage.SetHarmonicIndexNumberForEnvironment(envId: System.UInt32, newVal: System.UInt32)

Sets the worksheet number of harmonic indexes for a given environment.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetHarmonicIndexForEnvironmentByIndex"></a>

### Stage.GetHarmonicIndexForEnvironmentByIndex(envId: System.UInt32, index: System.Int32)

Gets the worksheet harmonic index for a given environment at index.

<!-- !! processed by numpydoc !! -->

<a id="Stage.SetHarmonicIndexForEnvironmentByIndex"></a>

### Stage.SetHarmonicIndexForEnvironmentByIndex(envId: System.UInt32, index: System.Int32, newVal: System.UInt32)

Sets the worksheet harmonic index for a given environment at index.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Delete"></a>

### Stage.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetChildren"></a>

### Stage.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Stage.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### Stage.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Activate"></a>

### Stage.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Stage.CopyTo"></a>

### Stage.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Duplicate"></a>

### Stage.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GroupAllSimilarChildren"></a>

### Stage.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GroupSimilarObjects"></a>

### Stage.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Stage.PropertyByName"></a>

### Stage.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Stage.PropertyByAPIName"></a>

### Stage.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Stage.CreateParameter"></a>

### Stage.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetParameter"></a>

### Stage.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.RemoveParameter"></a>

### Stage.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

