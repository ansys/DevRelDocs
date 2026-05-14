# `ContactTool`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.ContactTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactTool.Activate)                                           | Activate the current object.                                                      |
| [`AddComment`](#ContactTool.AddComment)                                       | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactTool.AddFigure)                                         | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactTool.AddImage)                                           | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ContactTool.ClearGeneratedData)                       | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ContactTool.CopyTo)                                               | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactTool.CreateParameter)                             | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactTool.Delete)                                               | Run the Delete action.                                                            |
| [`Duplicate`](#ContactTool.Duplicate)                                         | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#ContactTool.EvaluateAllResults)                       | Run the EvaluateAllResults action.                                                |
| [`GenerateInitialContactResults`](#ContactTool.GenerateInitialContactResults) | Generate Initial Contact Results and Mesh Parts                                   |
| [`GetChildren`](#ContactTool.GetChildren)                                     | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactTool.GetParameter)                                   | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactTool.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactTool.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactTool.PropertyByAPIName)                         | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactTool.PropertyByName)                               | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactTool.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ContactTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ContactTool.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ContactTool.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ContactTool.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ContactTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ContactTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#ContactTool.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#ContactTool.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#ContactTool.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`VisibleProperties`](#ContactTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactTool.Children"></a>

### *property* ContactTool.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Comments"></a>

### *property* ContactTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.DataModelObjectCategory"></a>

### *property* ContactTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Figures"></a>

### *property* ContactTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Images"></a>

### *property* ContactTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.InternalObject"></a>

### *property* ContactTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Location"></a>

### *property* ContactTool.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Properties"></a>

### *property* ContactTool.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.ScopingMethod"></a>

### *property* ContactTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.VisibleProperties"></a>

### *property* ContactTool.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactTool.Activate"></a>

### ContactTool.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.AddComment"></a>

### ContactTool.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.AddFigure"></a>

### ContactTool.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.AddImage"></a>

### ContactTool.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.ClearGeneratedData"></a>

### ContactTool.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.CopyTo"></a>

### ContactTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.CreateParameter"></a>

### ContactTool.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Delete"></a>

### ContactTool.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Duplicate"></a>

### ContactTool.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.EvaluateAllResults"></a>

### ContactTool.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GenerateInitialContactResults"></a>

### ContactTool.GenerateInitialContactResults() → [None](https://docs.python.org/3/library/constants.html#None)

Generate Initial Contact Results and Mesh Parts

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetChildren"></a>

### ContactTool.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetParameter"></a>

### ContactTool.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GroupAllSimilarChildren"></a>

### ContactTool.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GroupSimilarObjects"></a>

### ContactTool.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.PropertyByAPIName"></a>

### ContactTool.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.PropertyByName"></a>

### ContactTool.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.RemoveParameter"></a>

### ContactTool.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

