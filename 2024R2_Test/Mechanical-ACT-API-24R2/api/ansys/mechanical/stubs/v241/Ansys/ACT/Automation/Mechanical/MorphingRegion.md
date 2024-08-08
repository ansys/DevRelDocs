# `MorphingRegion`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MorphingRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MorphingRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`MorphingIntervals`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.MorphingIntervals)             | Gets or sets the MorphingIntervals.                           |
| [`BaseFrequency`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.BaseFrequency)                     | Gets or sets the BaseFrequency.                               |
| [`MaximumFrequency`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.MaximumFrequency)               | Gets or sets the MaximumFrequency.                            |
| [`MinimumFrequency`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.MinimumFrequency)               | Gets or sets the MinimumFrequency.                            |
| [`MorphingFrequency`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.MorphingFrequency)             | Gets or sets the MorphingFrequency.                           |
| [`Thickness`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.Thickness)                             | Gets or sets the Thickness .                                  |
| [`DisplayMesh`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.DisplayMesh)                         | Gets or sets the DisplayMesh.                                 |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`FixedLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.FixedLocation)                     | Gets or sets the FixedLocation.                               |
| [`MovingLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.MovingLocation)                   | Gets or sets the MovingLocation.                              |
| [`RegionLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.RegionLocation)                   | Gets or sets the RegionLocation.                              |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MorphingRegion.md#MorphingRegion.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MorphingRegion.InternalObject"></a>

### *property* MorphingRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMorphingRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MorphingIntervals"></a>

### *property* MorphingRegion.MorphingIntervals *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MorphingIntervals.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.BaseFrequency"></a>

### *property* MorphingRegion.BaseFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MaximumFrequency"></a>

### *property* MorphingRegion.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MinimumFrequency"></a>

### *property* MorphingRegion.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MorphingFrequency"></a>

### *property* MorphingRegion.MorphingFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MorphingFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Thickness"></a>

### *property* MorphingRegion.Thickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thickness .

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.DisplayMesh"></a>

### *property* MorphingRegion.DisplayMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayMesh.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Suppressed"></a>

### *property* MorphingRegion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.FixedLocation"></a>

### *property* MorphingRegion.FixedLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FixedLocation.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MovingLocation"></a>

### *property* MorphingRegion.MovingLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MovingLocation.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.RegionLocation"></a>

### *property* MorphingRegion.RegionLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.DataModelObjectCategory"></a>

### *property* MorphingRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Children"></a>

### *property* MorphingRegion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Comments"></a>

### *property* MorphingRegion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Figures"></a>

### *property* MorphingRegion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Images"></a>

### *property* MorphingRegion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MorphingRegion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Properties"></a>

### *property* MorphingRegion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.VisibleProperties"></a>

### *property* MorphingRegion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MorphingRegion.Delete"></a>

### MorphingRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetChildren"></a>

### MorphingRegion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MorphingRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.AddComment"></a>

### MorphingRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.AddFigure"></a>

### MorphingRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.AddImage"></a>

### MorphingRegion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Activate"></a>

### MorphingRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.CopyTo"></a>

### MorphingRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Duplicate"></a>

### MorphingRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GroupAllSimilarChildren"></a>

### MorphingRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GroupSimilarObjects"></a>

### MorphingRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.PropertyByName"></a>

### MorphingRegion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.PropertyByAPIName"></a>

### MorphingRegion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.CreateParameter"></a>

### MorphingRegion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetParameter"></a>

### MorphingRegion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.RemoveParameter"></a>

### MorphingRegion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

