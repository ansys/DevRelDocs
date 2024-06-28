<!-- vale off -->

<a id="condensedgeometry"></a>

# `CondensedGeometry`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedGeometry"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedGeometry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CondensedGeometry.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`CreateAutomaticCondensedParts`](#CondensedGeometry.CreateAutomaticCondensedParts)   | Run the CreateAutomaticCondensedParts action.                                     |
| [`AddCondensedPart`](#CondensedGeometry.AddCondensedPart)                             | Creates a new CondensedPart                                                       |
| [`AddCondensedPartInfoTool`](#CondensedGeometry.AddCondensedPartInfoTool)             | Creates a new CondensedPartInfoTool                                               |
| [`AddImportedCondensedPart`](#CondensedGeometry.AddImportedCondensedPart)             | Creates a new ImportedCondensedPart                                               |
| [`ClearGeneratedData`](#CondensedGeometry.ClearGeneratedData)                         | Run the ClearGeneratedData action.                                                |
| [`GenerateCondensedParts`](#CondensedGeometry.GenerateCondensedParts)                 | Run the GenerateCondensedParts action.                                            |
| [`Delete`](#CondensedGeometry.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CondensedGeometry.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#CondensedGeometry.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#CondensedGeometry.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#CondensedGeometry.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#CondensedGeometry.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CondensedGeometry.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CondensedGeometry.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CondensedGeometry.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CondensedGeometry.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CondensedGeometry.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#CondensedGeometry.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CondensedGeometry.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CondensedGeometry.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`SolverFilesDirectory`](#CondensedGeometry.SolverFilesDirectory)       | Gets the SolverFilesDirectory.                                |
| [`TransparencyEnabled`](#CondensedGeometry.TransparencyEnabled)         | Gets or sets the TransparencyEnabled.                         |
| [`DataModelObjectCategory`](#CondensedGeometry.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#CondensedGeometry.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CondensedGeometry.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#CondensedGeometry.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#CondensedGeometry.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CondensedGeometry.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CondensedGeometry.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CondensedGeometry.InternalObject"></a>

### *property* CondensedGeometry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedGeometryAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.SolverFilesDirectory"></a>

### *property* CondensedGeometry.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.TransparencyEnabled"></a>

### *property* CondensedGeometry.TransparencyEnabled *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransparencyEnabled.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.DataModelObjectCategory"></a>

### *property* CondensedGeometry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Children"></a>

### *property* CondensedGeometry.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Comments"></a>

### *property* CondensedGeometry.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Figures"></a>

### *property* CondensedGeometry.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Images"></a>

### *property* CondensedGeometry.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CondensedGeometry.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Properties"></a>

### *property* CondensedGeometry.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.VisibleProperties"></a>

### *property* CondensedGeometry.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CondensedGeometry.CreateAutomaticCondensedParts"></a>

### CondensedGeometry.CreateAutomaticCondensedParts()

Run the CreateAutomaticCondensedParts action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddCondensedPart"></a>

### CondensedGeometry.AddCondensedPart()

Creates a new CondensedPart

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddCondensedPartInfoTool"></a>

### CondensedGeometry.AddCondensedPartInfoTool()

Creates a new CondensedPartInfoTool

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddImportedCondensedPart"></a>

### CondensedGeometry.AddImportedCondensedPart()

Creates a new ImportedCondensedPart

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.ClearGeneratedData"></a>

### CondensedGeometry.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GenerateCondensedParts"></a>

### CondensedGeometry.GenerateCondensedParts()

Run the GenerateCondensedParts action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Delete"></a>

### CondensedGeometry.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetChildren"></a>

### CondensedGeometry.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CondensedGeometry.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddComment"></a>

### CondensedGeometry.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddFigure"></a>

### CondensedGeometry.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddImage"></a>

### CondensedGeometry.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Activate"></a>

### CondensedGeometry.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.CopyTo"></a>

### CondensedGeometry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Duplicate"></a>

### CondensedGeometry.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GroupAllSimilarChildren"></a>

### CondensedGeometry.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GroupSimilarObjects"></a>

### CondensedGeometry.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.PropertyByName"></a>

### CondensedGeometry.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.PropertyByAPIName"></a>

### CondensedGeometry.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.CreateParameter"></a>

### CondensedGeometry.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetParameter"></a>

### CondensedGeometry.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.RemoveParameter"></a>

### CondensedGeometry.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
