# `VirtualCell`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.VirtualCell

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VirtualCell.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`ProjectToUnderlyingGeometry`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.ProjectToUnderlyingGeometry) | Gets or sets the ProjectToUnderlyingGeometry.                 |
| [`VTClass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.VTClass)                                         | Gets the VTClass.                                             |
| [`Geometry`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.Geometry)                                       | Gets the Geometry.                                            |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.Children)                                       | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.Comments)                                       | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.Figures)                                         | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualCell.md#VirtualCell.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="VirtualCell.InternalObject"></a>

### *property* VirtualCell.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSVirtualCellAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.ProjectToUnderlyingGeometry"></a>

### *property* VirtualCell.ProjectToUnderlyingGeometry *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectToUnderlyingGeometry.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.VTClass"></a>

### *property* VirtualCell.VTClass *: [Ansys.Mechanical.DataModel.Enums.VirtualCellClassType](../../../Mechanical/DataModel/Enums/VirtualCellClassType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.VirtualCellClassType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VTClass.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Geometry"></a>

### *property* VirtualCell.Geometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.DataModelObjectCategory"></a>

### *property* VirtualCell.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Children"></a>

### *property* VirtualCell.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Comments"></a>

### *property* VirtualCell.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Figures"></a>

### *property* VirtualCell.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Images"></a>

### *property* VirtualCell.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* VirtualCell.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Properties"></a>

### *property* VirtualCell.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.VisibleProperties"></a>

### *property* VirtualCell.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VirtualCell.Delete"></a>

### VirtualCell.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetChildren"></a>

### VirtualCell.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### VirtualCell.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.AddComment"></a>

### VirtualCell.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.AddFigure"></a>

### VirtualCell.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.AddImage"></a>

### VirtualCell.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Activate"></a>

### VirtualCell.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.CopyTo"></a>

### VirtualCell.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Duplicate"></a>

### VirtualCell.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GroupAllSimilarChildren"></a>

### VirtualCell.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GroupSimilarObjects"></a>

### VirtualCell.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.PropertyByName"></a>

### VirtualCell.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.PropertyByAPIName"></a>

### VirtualCell.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.CreateParameter"></a>

### VirtualCell.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetParameter"></a>

### VirtualCell.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.RemoveParameter"></a>

### VirtualCell.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

