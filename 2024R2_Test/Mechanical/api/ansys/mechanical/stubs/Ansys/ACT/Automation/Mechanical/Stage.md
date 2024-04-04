# Stage

### *class* Stage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Stage.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetHarmonicIndexNumberForEnvironment`](#Stage.GetHarmonicIndexNumberForEnvironment)   | Gets the worksheet number of harmonic indexes for a given environment.            |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`StageName`](#Stage.StageName)                                                                                     | Gets the StageName.                                           |
| [`Behavior`](#Stage.Behavior)                                                                                       | Gets the Behavior.                                            |
| [`Suppressed`](#Stage.Suppressed)                                                                                   | Gets or sets the Suppressed.                                  |
| [`CyclicRegion`](CyclicRegion.md#CyclicRegion)                                                                      | Gets or sets the CyclicRegion.                                |
| [`Location`](#Stage.Location)                                                                                       | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Stage.Children)                                                                                       | Gets the list of children.                                    |
| [`Comments`](#Stage.Comments)                                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#Stage.Figures)                                                                                         | Gets the list of associated figures.                          |
| [`Images`](#Stage.Images)                                                                                           | Gets the list of associated images.                           |
| [`ReadOnly`](#Stage.ReadOnly)                                                                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Stage.Properties)                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Stage.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Stage
```

## Property detail

### *property* Stage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSStageAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Stage.StageName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StageName.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Behavior *: [Ansys.Mechanical.DataModel.Enums.StageBehavior](../../../Mechanical/DataModel/Enums/StageBehavior.md#StageBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Stage.CyclicRegion *: [Ansys.ACT.Automation.Mechanical.SymmetryGeneral](SymmetryGeneral.md#SymmetryGeneral) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicRegion.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* Stage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Stage.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### Stage.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Stage.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Stage.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Stage.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
