# `ResultTable`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ResultTable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ResultTable.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`Multiplier`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.Multiplier)                           | Gets or sets the Multiplier.                                  |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.Comments)                               | Gets the list of associated comments.                         |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTable.md#ResultTable.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ResultTable.InternalObject"></a>

### *property* ResultTable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Multiplier"></a>

### *property* ResultTable.Multiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Multiplier.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.DataModelObjectCategory"></a>

### *property* ResultTable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Children"></a>

### *property* ResultTable.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Comments"></a>

### *property* ResultTable.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Images"></a>

### *property* ResultTable.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ResultTable.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Properties"></a>

### *property* ResultTable.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.VisibleProperties"></a>

### *property* ResultTable.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ResultTable.Delete"></a>

### ResultTable.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetChildren"></a>

### ResultTable.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ResultTable.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.AddComment"></a>

### ResultTable.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.AddImage"></a>

### ResultTable.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Activate"></a>

### ResultTable.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.CopyTo"></a>

### ResultTable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Duplicate"></a>

### ResultTable.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GroupAllSimilarChildren"></a>

### ResultTable.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GroupSimilarObjects"></a>

### ResultTable.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.PropertyByName"></a>

### ResultTable.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.PropertyByAPIName"></a>

### ResultTable.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.CreateParameter"></a>

### ResultTable.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetParameter"></a>

### ResultTable.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.RemoveParameter"></a>

### ResultTable.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

