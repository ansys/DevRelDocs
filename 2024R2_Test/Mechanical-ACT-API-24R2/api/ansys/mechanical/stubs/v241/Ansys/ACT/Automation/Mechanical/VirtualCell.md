# `VirtualCell`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.VirtualCell

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VirtualCell.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------|---------------------------------------------------------------|
| `InternalObject`              | Gets the internal object. For advanced usage only.            |
| `ProjectToUnderlyingGeometry` | Gets or sets the ProjectToUnderlyingGeometry.                 |
| `VTClass`                     | Gets the VTClass.                                             |
| `Geometry`                    | Gets the Geometry.                                            |
| `DataModelObjectCategory`     | Gets the current DataModelObject's category.                  |
| `Children`                    | Gets the list of children.                                    |
| `Comments`                    | Gets the list of associated comments.                         |
| `Figures`                     | Gets the list of associated figures.                          |
| `Images`                      | Gets the list of associated images.                           |
| `InternalObject`              | Gets the internal object. For advanced usage only.            |
| `Properties`                  | Gets the list of properties for this object.                  |
| `VisibleProperties`           | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* VirtualCell.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSVirtualCellAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.ProjectToUnderlyingGeometry *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectToUnderlyingGeometry.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.VTClass *: [Ansys.Mechanical.DataModel.Enums.VirtualCellClassType](../../../Mechanical/DataModel/Enums/VirtualCellClassType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.VirtualCellClassType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VTClass.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.Geometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Geometry.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* VirtualCell.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### VirtualCell.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### VirtualCell.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VirtualCell.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VirtualCell.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### VirtualCell.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### VirtualCell.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### VirtualCell.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### VirtualCell.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### VirtualCell.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### VirtualCell.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### VirtualCell.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### VirtualCell.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### VirtualCell.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### VirtualCell.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### VirtualCell.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### VirtualCell.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

