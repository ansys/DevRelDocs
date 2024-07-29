# `NumberingControl`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NumberingControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NumberingControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`BeginElementNumber`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.BeginElementNumber)           | Gets or sets the BeginElementNumber.                          |
| [`BeginNodeNumber`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.BeginNodeNumber)                 | Gets or sets the BeginNodeNumber.                             |
| [`EndElementNumber`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.EndElementNumber)               | Gets or sets the EndElementNumber.                            |
| [`EndNodeNumber`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.EndNodeNumber)                     | Gets or sets the EndNodeNumber.                               |
| [`NodeNumber`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.NodeNumber)                           | Gets or sets the NodeNumber.                                  |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NumberingControl.md#NumberingControl.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NumberingControl.InternalObject"></a>

### *property* NumberingControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshRenumberingControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.BeginElementNumber"></a>

### *property* NumberingControl.BeginElementNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeginElementNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.BeginNodeNumber"></a>

### *property* NumberingControl.BeginNodeNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeginNodeNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.EndElementNumber"></a>

### *property* NumberingControl.EndElementNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndElementNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.EndNodeNumber"></a>

### *property* NumberingControl.EndNodeNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndNodeNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.NodeNumber"></a>

### *property* NumberingControl.NodeNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Suppressed"></a>

### *property* NumberingControl.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Location"></a>

### *property* NumberingControl.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.DataModelObjectCategory"></a>

### *property* NumberingControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Children"></a>

### *property* NumberingControl.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Comments"></a>

### *property* NumberingControl.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Figures"></a>

### *property* NumberingControl.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Images"></a>

### *property* NumberingControl.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NumberingControl.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Properties"></a>

### *property* NumberingControl.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.VisibleProperties"></a>

### *property* NumberingControl.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NumberingControl.Delete"></a>

### NumberingControl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetChildren"></a>

### NumberingControl.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NumberingControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.AddComment"></a>

### NumberingControl.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.AddFigure"></a>

### NumberingControl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.AddImage"></a>

### NumberingControl.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Activate"></a>

### NumberingControl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.CopyTo"></a>

### NumberingControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Duplicate"></a>

### NumberingControl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GroupAllSimilarChildren"></a>

### NumberingControl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GroupSimilarObjects"></a>

### NumberingControl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.PropertyByName"></a>

### NumberingControl.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.PropertyByAPIName"></a>

### NumberingControl.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.CreateParameter"></a>

### NumberingControl.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetParameter"></a>

### NumberingControl.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.RemoveParameter"></a>

### NumberingControl.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

