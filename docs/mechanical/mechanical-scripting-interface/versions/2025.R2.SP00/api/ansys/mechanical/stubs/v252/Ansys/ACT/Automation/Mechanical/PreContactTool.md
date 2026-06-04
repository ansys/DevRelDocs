# `PreContactTool`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PreContactTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PreContactTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PreContactTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PreContactTool.Activate)                                           | Activate the current object.                                                      |
| [`AddComment`](#PreContactTool.AddComment)                                       | Creates a new child Comment.                                                      |
| [`AddFigure`](#PreContactTool.AddFigure)                                         | Creates a new child Figure.                                                       |
| [`AddGap`](#PreContactTool.AddGap)                                               | Creates a new ContactGap                                                          |
| [`AddImage`](#PreContactTool.AddImage)                                           | Creates a new child Image.                                                        |
| [`AddInitialInformation`](#PreContactTool.AddInitialInformation)                 | Creates a new ContactDataTable                                                    |
| [`AddPenetration`](#PreContactTool.AddPenetration)                               | Creates a new ContactPenetration                                                  |
| [`AddStatus`](#PreContactTool.AddStatus)                                         | Creates a new ContactStatus                                                       |
| [`ClearGeneratedData`](#PreContactTool.ClearGeneratedData)                       | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#PreContactTool.CopyTo)                                               | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PreContactTool.CreateParameter)                             | Creates a new parameter for a Property.                                           |
| [`Delete`](#PreContactTool.Delete)                                               | Run the Delete action.                                                            |
| [`Duplicate`](#PreContactTool.Duplicate)                                         | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#PreContactTool.EvaluateAllResults)                       | Run the EvaluateAllResults action.                                                |
| [`GenerateInitialContactResults`](#PreContactTool.GenerateInitialContactResults) | Generate Initial Contact Results and Mesh Parts                                   |
| [`GetChildren`](#PreContactTool.GetChildren)                                     | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PreContactTool.GetParameter)                                   | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PreContactTool.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PreContactTool.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PreContactTool.PropertyByAPIName)                         | Get a property by its API name.                                                   |
| [`PropertyByName`](#PreContactTool.PropertyByName)                               | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PreContactTool.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#PreContactTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](#PreContactTool.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PreContactTool.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#PreContactTool.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#PreContactTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PreContactTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#PreContactTool.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#PreContactTool.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#PreContactTool.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`VisibleProperties`](#PreContactTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PreContactTool.Children"></a>

### *property* PreContactTool.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Comments"></a>

### *property* PreContactTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.DataModelObjectCategory"></a>

### *property* PreContactTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Figures"></a>

### *property* PreContactTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Images"></a>

### *property* PreContactTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.InternalObject"></a>

### *property* PreContactTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Location"></a>

### *property* PreContactTool.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Properties"></a>

### *property* PreContactTool.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.ScopingMethod"></a>

### *property* PreContactTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.VisibleProperties"></a>

### *property* PreContactTool.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PreContactTool.Activate"></a>

### PreContactTool.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddComment"></a>

### PreContactTool.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddFigure"></a>

### PreContactTool.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddGap"></a>

### PreContactTool.AddGap() → [Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactGap](Results/ContactToolResults/ContactGap.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactGap)

Creates a new ContactGap

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddImage"></a>

### PreContactTool.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddInitialInformation"></a>

### PreContactTool.AddInitialInformation() → [Ansys.ACT.Automation.Mechanical.Results.ContactDataTable](Results/ContactDataTable.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ContactDataTable)

Creates a new ContactDataTable

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddPenetration"></a>

### PreContactTool.AddPenetration() → [Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactPenetration](Results/ContactToolResults/ContactPenetration.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactPenetration)

Creates a new ContactPenetration

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddStatus"></a>

### PreContactTool.AddStatus() → [Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactStatus](Results/ContactToolResults/ContactStatus.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactStatus)

Creates a new ContactStatus

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.ClearGeneratedData"></a>

### PreContactTool.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.CopyTo"></a>

### PreContactTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.CreateParameter"></a>

### PreContactTool.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Delete"></a>

### PreContactTool.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Duplicate"></a>

### PreContactTool.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.EvaluateAllResults"></a>

### PreContactTool.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GenerateInitialContactResults"></a>

### PreContactTool.GenerateInitialContactResults() → [None](https://docs.python.org/3/library/constants.html#None)

Generate Initial Contact Results and Mesh Parts

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetChildren"></a>

### PreContactTool.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetParameter"></a>

### PreContactTool.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GroupAllSimilarChildren"></a>

### PreContactTool.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GroupSimilarObjects"></a>

### PreContactTool.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.PropertyByAPIName"></a>

### PreContactTool.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.PropertyByName"></a>

### PreContactTool.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.RemoveParameter"></a>

### PreContactTool.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

