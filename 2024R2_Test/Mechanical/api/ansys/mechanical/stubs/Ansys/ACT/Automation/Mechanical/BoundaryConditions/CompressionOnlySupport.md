<a id="compressiononlysupport"></a>

# CompressionOnlySupport

<a id="CompressionOnlySupport"></a>

### *class* CompressionOnlySupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CompressionOnlySupport.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#CompressionOnlySupport.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#CompressionOnlySupport.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CompressionOnlySupport.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#CompressionOnlySupport.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#CompressionOnlySupport.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#CompressionOnlySupport.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#CompressionOnlySupport.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CompressionOnlySupport.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CompressionOnlySupport.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CompressionOnlySupport.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CompressionOnlySupport.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CompressionOnlySupport.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#CompressionOnlySupport.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CompressionOnlySupport.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CompressionOnlySupport.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`NormalStiffnessFactor`](#CompressionOnlySupport.NormalStiffnessFactor)                                               | Gets or sets the NormalStiffnessFactor.                       |
| [`UpdateStiffness`](#CompressionOnlySupport.UpdateStiffness)                                                           | Gets or sets the UpdateStiffness.                             |
| [`AutomaticNormalStiffness`](#CompressionOnlySupport.AutomaticNormalStiffness)                                         | Gets or sets the AutomaticNormalStiffness.                    |
| [`Location`](#CompressionOnlySupport.Location)                                                                         | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#CompressionOnlySupport.Suppressed)                                                                     | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#CompressionOnlySupport.SharedRefBody)                                                               | Gets or sets the SharedRefBody.                               |
| [`Children`](#CompressionOnlySupport.Children)                                                                         | Gets the list of children.                                    |
| [`Comments`](#CompressionOnlySupport.Comments)                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#CompressionOnlySupport.Figures)                                                                           | Gets the list of associated figures.                          |
| [`Images`](#CompressionOnlySupport.Images)                                                                             | Gets the list of associated images.                           |
| [`ReadOnly`](#CompressionOnlySupport.ReadOnly)                                                                         | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CompressionOnlySupport.Properties)                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CompressionOnlySupport.VisibleProperties)                                                       | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import CompressionOnlySupport
```

<a id="property-detail"></a>

## Property detail

<a id="CompressionOnlySupport.InternalObject"></a>

### *property* CompressionOnlySupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.NormalStiffnessFactor"></a>

### *property* CompressionOnlySupport.NormalStiffnessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessFactor.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.UpdateStiffness"></a>

### *property* CompressionOnlySupport.UpdateStiffness *: [Ansys.Mechanical.DataModel.Enums.UpdateContactStiffness](../../../../Mechanical/DataModel/Enums/UpdateContactStiffness.md#UpdateContactStiffness) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdateStiffness.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.AutomaticNormalStiffness"></a>

### *property* CompressionOnlySupport.AutomaticNormalStiffness *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticNormalStiffness.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Location"></a>

### *property* CompressionOnlySupport.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.DataModelObjectCategory"></a>

### *property* CompressionOnlySupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Suppressed"></a>

### *property* CompressionOnlySupport.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.SharedRefBody"></a>

### *property* CompressionOnlySupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Children"></a>

### *property* CompressionOnlySupport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Comments"></a>

### *property* CompressionOnlySupport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Figures"></a>

### *property* CompressionOnlySupport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Images"></a>

### *property* CompressionOnlySupport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.ReadOnly"></a>

### *property* CompressionOnlySupport.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CompressionOnlySupport.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Properties"></a>

### *property* CompressionOnlySupport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.VisibleProperties"></a>

### *property* CompressionOnlySupport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompressionOnlySupport.PromoteToNamedSelection"></a>

### CompressionOnlySupport.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Delete"></a>

### CompressionOnlySupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetChildren"></a>

### CompressionOnlySupport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CompressionOnlySupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.AddComment"></a>

### CompressionOnlySupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.AddFigure"></a>

### CompressionOnlySupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.AddImage"></a>

### CompressionOnlySupport.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Activate"></a>

### CompressionOnlySupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.CopyTo"></a>

### CompressionOnlySupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Duplicate"></a>

### CompressionOnlySupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GroupAllSimilarChildren"></a>

### CompressionOnlySupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GroupSimilarObjects"></a>

### CompressionOnlySupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.PropertyByName"></a>

### CompressionOnlySupport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.PropertyByAPIName"></a>

### CompressionOnlySupport.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.CreateParameter"></a>

### CompressionOnlySupport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetParameter"></a>

### CompressionOnlySupport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.RemoveParameter"></a>

### CompressionOnlySupport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
