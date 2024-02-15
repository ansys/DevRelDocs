# GeneralAxisymmetric

### *class* GeneralAxisymmetric

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GeneralAxisymmetric.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#GeneralAxisymmetric.Delete)                                   | Run the Delete action.                                                            |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#GeneralAxisymmetric.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GeneralAxisymmetric.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GeneralAxisymmetric.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#GeneralAxisymmetric.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#GeneralAxisymmetric.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GeneralAxisymmetric.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GeneralAxisymmetric.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GeneralAxisymmetric.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GeneralAxisymmetric.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GeneralAxisymmetric.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#GeneralAxisymmetric.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GeneralAxisymmetric.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GeneralAxisymmetric.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`EndPlane`](#GeneralAxisymmetric.EndPlane)                                                                         | Gets or sets the EndPlane.                                    |
| [`NodalPlanes`](#GeneralAxisymmetric.NodalPlanes)                                                                   | Gets or sets the NodalPlanes.                                 |
| [`StartPlane`](#GeneralAxisymmetric.StartPlane)                                                                     | Gets or sets the StartPlane.                                  |
| [`Axis`](#GeneralAxisymmetric.Axis)                                                                                 | Gets or sets the Axis.                                        |
| [`NodalPlanesVisible`](../../../Mechanical/DataModel/Enums/NodalPlanesVisible.md#NodalPlanesVisible)                | Gets or sets the NodalPlanesVisible.                          |
| [`Suppressed`](#GeneralAxisymmetric.Suppressed)                                                                     | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#GeneralAxisymmetric.Location)                                                                         | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#GeneralAxisymmetric.Children)                                                                         | Gets the list of children.                                    |
| [`Comments`](#GeneralAxisymmetric.Comments)                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#GeneralAxisymmetric.Figures)                                                                           | Gets the list of associated figures.                          |
| [`Images`](#GeneralAxisymmetric.Images)                                                                             | Gets the list of associated images.                           |
| [`ReadOnly`](#GeneralAxisymmetric.ReadOnly)                                                                         | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GeneralAxisymmetric.Properties)                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GeneralAxisymmetric.VisibleProperties)                                                       | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import GeneralAxisymmetric
```

## Property detail

### *property* GeneralAxisymmetric.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeneralAxisymmetricAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.EndPlane *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndPlane.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.NodalPlanes *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalPlanes.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.StartPlane *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartPlane.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.NodalPlanesVisible *: [Ansys.Mechanical.DataModel.Enums.NodalPlanesVisible](../../../Mechanical/DataModel/Enums/NodalPlanesVisible.md#NodalPlanesVisible) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalPlanesVisible.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* GeneralAxisymmetric.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### GeneralAxisymmetric.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### GeneralAxisymmetric.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
