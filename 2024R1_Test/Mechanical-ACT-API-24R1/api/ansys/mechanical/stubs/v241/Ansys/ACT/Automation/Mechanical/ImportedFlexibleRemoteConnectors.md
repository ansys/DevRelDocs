# `ImportedFlexibleRemoteConnectors`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedFlexibleRemoteConnectors"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedFlexibleRemoteConnectors

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedFlexibleRemoteConnectors.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ImportedFlexibleRemoteConnectors.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedFlexibleRemoteConnectors.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedFlexibleRemoteConnectors.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedFlexibleRemoteConnectors.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedFlexibleRemoteConnectors.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedFlexibleRemoteConnectors.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedFlexibleRemoteConnectors.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedFlexibleRemoteConnectors.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedFlexibleRemoteConnectors.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedFlexibleRemoteConnectors.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedFlexibleRemoteConnectors.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedFlexibleRemoteConnectors.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedFlexibleRemoteConnectors.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedFlexibleRemoteConnectors.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                               | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#ImportedFlexibleRemoteConnectors.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Count`](#ImportedFlexibleRemoteConnectors.Count)                                     | Gets the NumberOfRows.                                        |
| [`Suppressed`](#ImportedFlexibleRemoteConnectors.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Children`](#ImportedFlexibleRemoteConnectors.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedFlexibleRemoteConnectors.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#ImportedFlexibleRemoteConnectors.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedFlexibleRemoteConnectors.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedFlexibleRemoteConnectors.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedFlexibleRemoteConnectors.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedFlexibleRemoteConnectors.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedFlexibleRemoteConnectors.InternalObject"></a>

### *property* ImportedFlexibleRemoteConnectors.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.DataModelObjectCategory"></a>

### *property* ImportedFlexibleRemoteConnectors.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Count"></a>

### *property* ImportedFlexibleRemoteConnectors.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Suppressed"></a>

### *property* ImportedFlexibleRemoteConnectors.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Children"></a>

### *property* ImportedFlexibleRemoteConnectors.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Comments"></a>

### *property* ImportedFlexibleRemoteConnectors.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Figures"></a>

### *property* ImportedFlexibleRemoteConnectors.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Images"></a>

### *property* ImportedFlexibleRemoteConnectors.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.ReadOnly"></a>

### *property* ImportedFlexibleRemoteConnectors.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedFlexibleRemoteConnectors.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Properties"></a>

### *property* ImportedFlexibleRemoteConnectors.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.VisibleProperties"></a>

### *property* ImportedFlexibleRemoteConnectors.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedFlexibleRemoteConnectors.Delete"></a>

### ImportedFlexibleRemoteConnectors.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetChildren"></a>

### ImportedFlexibleRemoteConnectors.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedFlexibleRemoteConnectors.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddComment"></a>

### ImportedFlexibleRemoteConnectors.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddFigure"></a>

### ImportedFlexibleRemoteConnectors.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddImage"></a>

### ImportedFlexibleRemoteConnectors.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Activate"></a>

### ImportedFlexibleRemoteConnectors.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.CopyTo"></a>

### ImportedFlexibleRemoteConnectors.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Duplicate"></a>

### ImportedFlexibleRemoteConnectors.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GroupAllSimilarChildren"></a>

### ImportedFlexibleRemoteConnectors.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GroupSimilarObjects"></a>

### ImportedFlexibleRemoteConnectors.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.PropertyByName"></a>

### ImportedFlexibleRemoteConnectors.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.PropertyByAPIName"></a>

### ImportedFlexibleRemoteConnectors.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.CreateParameter"></a>

### ImportedFlexibleRemoteConnectors.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetParameter"></a>

### ImportedFlexibleRemoteConnectors.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.RemoveParameter"></a>

### ImportedFlexibleRemoteConnectors.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

