# `MeshNumbering`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshNumbering

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshNumbering.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddNumberingControl`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.AddNumberingControl)         | Creates a new NumberingControl                                                    |
| [`RenumberMesh`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.RenumberMesh)                       | Run the RenumberMesh action.                                                      |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`ElementOffset`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.ElementOffset)                     | Gets or sets the ElementOffset.                               |
| [`NodeOffset`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.NodeOffset)                           | Gets or sets the NodeOffset.                                  |
| [`CompressNodeNumbers`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.CompressNodeNumbers)         | Gets or sets the CompressNodeNumbers.                         |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#MeshNumbering.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshNumbering.InternalObject"></a>

### *property* MeshNumbering.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshRenumberingControlGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.ElementOffset"></a>

### *property* MeshNumbering.ElementOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOffset.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.NodeOffset"></a>

### *property* MeshNumbering.NodeOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeOffset.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.CompressNodeNumbers"></a>

### *property* MeshNumbering.CompressNodeNumbers *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CompressNodeNumbers.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Suppressed"></a>

### *property* MeshNumbering.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.DataModelObjectCategory"></a>

### *property* MeshNumbering.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Children"></a>

### *property* MeshNumbering.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Comments"></a>

### *property* MeshNumbering.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Figures"></a>

### *property* MeshNumbering.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Images"></a>

### *property* MeshNumbering.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshNumbering.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Properties"></a>

### *property* MeshNumbering.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.VisibleProperties"></a>

### *property* MeshNumbering.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshNumbering.AddNumberingControl"></a>

### MeshNumbering.AddNumberingControl()

Creates a new NumberingControl

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.RenumberMesh"></a>

### MeshNumbering.RenumberMesh()

Run the RenumberMesh action.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Delete"></a>

### MeshNumbering.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetChildren"></a>

### MeshNumbering.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshNumbering.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.AddComment"></a>

### MeshNumbering.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.AddFigure"></a>

### MeshNumbering.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.AddImage"></a>

### MeshNumbering.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Activate"></a>

### MeshNumbering.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.CopyTo"></a>

### MeshNumbering.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Duplicate"></a>

### MeshNumbering.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GroupAllSimilarChildren"></a>

### MeshNumbering.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GroupSimilarObjects"></a>

### MeshNumbering.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.PropertyByName"></a>

### MeshNumbering.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.PropertyByAPIName"></a>

### MeshNumbering.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.CreateParameter"></a>

### MeshNumbering.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetParameter"></a>

### MeshNumbering.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.RemoveParameter"></a>

### MeshNumbering.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

