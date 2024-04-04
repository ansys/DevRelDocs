# EndRelease

### *class* EndRelease

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EndRelease.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#EndRelease.Delete)                                   | Run the Delete action.                                                            |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EndRelease.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EndRelease.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EndRelease.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EndRelease.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EndRelease.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EndRelease.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EndRelease.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EndRelease.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EndRelease.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EndRelease.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#EndRelease.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#EndRelease.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EndRelease.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                           |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Behavior`](#EndRelease.Behavior)                                                                                  | Gets or sets the Behavior.                                    |
| [`RotationX`](#EndRelease.RotationX)                                                                                | Gets or sets the RotationX.                                   |
| [`RotationY`](#EndRelease.RotationY)                                                                                | Gets or sets the RotationY.                                   |
| [`RotationZ`](#EndRelease.RotationZ)                                                                                | Gets or sets the RotationZ.                                   |
| [`TranslationX`](#EndRelease.TranslationX)                                                                          | Gets or sets the TranslationX.                                |
| [`TranslationY`](#EndRelease.TranslationY)                                                                          | Gets or sets the TranslationY.                                |
| [`TranslationZ`](#EndRelease.TranslationZ)                                                                          | Gets or sets the TranslationZ.                                |
| [`IndependentEdges`](#EndRelease.IndependentEdges)                                                                  | Gets or sets the IndependentEdges.                            |
| [`Suppressed`](#EndRelease.Suppressed)                                                                              | Gets or sets the Suppressed.                                  |
| [`EdgeLocation`](#EndRelease.EdgeLocation)                                                                          | Gets or sets the EdgeLocation.                                |
| [`VertexLocation`](#EndRelease.VertexLocation)                                                                      | Gets or sets the VertexLocation.                              |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#EndRelease.Children)                                                                                  | Gets the list of children.                                    |
| [`Comments`](#EndRelease.Comments)                                                                                  | Gets the list of associated comments.                         |
| [`Figures`](#EndRelease.Figures)                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#EndRelease.Images)                                                                                      | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#EndRelease.Properties)                                                                              | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#EndRelease.VisibleProperties)                                                                | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import EndRelease
```

## Property detail

### *property* EndRelease.CoordinateSystem *: Ansys.Mechanical.DataModel.Interfaces.ICoordinateSystemSelection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBeamEndReleaseAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.Behavior *: [Ansys.Mechanical.DataModel.Enums.BeamEndReleaseBehavior](../../../Mechanical/DataModel/Enums/BeamEndReleaseBehavior.md#BeamEndReleaseBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.RotationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.RotationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.RotationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.TranslationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationX.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.TranslationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationY.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.TranslationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationZ.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.IndependentEdges *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentEdges.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.EdgeLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeLocation.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.VertexLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VertexLocation.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* EndRelease.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### EndRelease.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### EndRelease.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EndRelease.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EndRelease.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### EndRelease.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### EndRelease.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### EndRelease.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### EndRelease.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### EndRelease.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### EndRelease.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### EndRelease.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### EndRelease.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### EndRelease.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### EndRelease.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### EndRelease.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### EndRelease.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
