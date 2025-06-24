# `PostContactTool`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PostContactTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PostContactTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PostContactTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PostContactTool.Activate)                                           | Activate the current object.                                                      |
| [`AddComment`](#PostContactTool.AddComment)                                       | Creates a new child Comment.                                                      |
| [`AddFigure`](#PostContactTool.AddFigure)                                         | Creates a new child Figure.                                                       |
| [`AddFluidPressure`](#PostContactTool.AddFluidPressure)                           | Creates a new ContactFluidPressure                                                |
| [`AddFrictionalStress`](#PostContactTool.AddFrictionalStress)                     | Creates a new ContactFrictionalStress                                             |
| [`AddGap`](#PostContactTool.AddGap)                                               | Creates a new ContactGap                                                          |
| [`AddHeatFlux`](#PostContactTool.AddHeatFlux)                                     | Creates a new ContactHeatFlux                                                     |
| [`AddImage`](#PostContactTool.AddImage)                                           | Creates a new child Image.                                                        |
| [`AddInitialInformation`](#PostContactTool.AddInitialInformation)                 | Creates a new ContactDataTable                                                    |
| [`AddPenetration`](#PostContactTool.AddPenetration)                               | Creates a new ContactPenetration                                                  |
| [`AddPressure`](#PostContactTool.AddPressure)                                     | Creates a new ContactPressure                                                     |
| [`AddSlidingDistance`](#PostContactTool.AddSlidingDistance)                       | Creates a new ContactSlidingDistance                                              |
| [`AddStatus`](#PostContactTool.AddStatus)                                         | Creates a new ContactStatus                                                       |
| [`ClearGeneratedData`](#PostContactTool.ClearGeneratedData)                       | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#PostContactTool.CopyTo)                                               | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PostContactTool.CreateParameter)                             | Creates a new parameter for a Property.                                           |
| [`Delete`](#PostContactTool.Delete)                                               | Run the Delete action.                                                            |
| [`Duplicate`](#PostContactTool.Duplicate)                                         | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#PostContactTool.EvaluateAllResults)                       | Run the EvaluateAllResults action.                                                |
| [`GenerateInitialContactResults`](#PostContactTool.GenerateInitialContactResults) | Generate Initial Contact Results and Mesh Parts                                   |
| [`GetChildren`](#PostContactTool.GetChildren)                                     | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PostContactTool.GetParameter)                                   | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PostContactTool.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PostContactTool.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PostContactTool.PropertyByAPIName)                         | Get a property by its API name.                                                   |
| [`PropertyByName`](#PostContactTool.PropertyByName)                               | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PostContactTool.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#PostContactTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](#PostContactTool.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PostContactTool.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#PostContactTool.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#PostContactTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PostContactTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#PostContactTool.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#PostContactTool.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#PostContactTool.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`VisibleProperties`](#PostContactTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PostContactTool.Children"></a>

### *property* PostContactTool.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Comments"></a>

### *property* PostContactTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.DataModelObjectCategory"></a>

### *property* PostContactTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Figures"></a>

### *property* PostContactTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Images"></a>

### *property* PostContactTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.InternalObject"></a>

### *property* PostContactTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Location"></a>

### *property* PostContactTool.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Properties"></a>

### *property* PostContactTool.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.ScopingMethod"></a>

### *property* PostContactTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.VisibleProperties"></a>

### *property* PostContactTool.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PostContactTool.Activate"></a>

### PostContactTool.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddComment"></a>

### PostContactTool.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddFigure"></a>

### PostContactTool.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddFluidPressure"></a>

### PostContactTool.AddFluidPressure() → [Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactFluidPressure](Results/ContactToolResults/ContactFluidPressure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactFluidPressure)

Creates a new ContactFluidPressure

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddFrictionalStress"></a>

### PostContactTool.AddFrictionalStress() → [Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactFrictionalStress](Results/ContactToolResults/ContactFrictionalStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactFrictionalStress)

Creates a new ContactFrictionalStress

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddGap"></a>

### PostContactTool.AddGap() → [Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactGap](Results/ContactToolResults/ContactGap.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactGap)

Creates a new ContactGap

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddHeatFlux"></a>

### PostContactTool.AddHeatFlux() → [Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactHeatFlux](Results/ContactToolResults/ContactHeatFlux.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactHeatFlux)

Creates a new ContactHeatFlux

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddImage"></a>

### PostContactTool.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddInitialInformation"></a>

### PostContactTool.AddInitialInformation() → [Ansys.ACT.Automation.Mechanical.Results.ContactDataTable](Results/ContactDataTable.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ContactDataTable)

Creates a new ContactDataTable

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddPenetration"></a>

### PostContactTool.AddPenetration() → [Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactPenetration](Results/ContactToolResults/ContactPenetration.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactPenetration)

Creates a new ContactPenetration

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddPressure"></a>

### PostContactTool.AddPressure() → [Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactPressure](Results/ContactToolResults/ContactPressure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactPressure)

Creates a new ContactPressure

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddSlidingDistance"></a>

### PostContactTool.AddSlidingDistance() → [Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactSlidingDistance](Results/ContactToolResults/ContactSlidingDistance.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactSlidingDistance)

Creates a new ContactSlidingDistance

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddStatus"></a>

### PostContactTool.AddStatus() → [Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactStatus](Results/ContactToolResults/ContactStatus.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactStatus)

Creates a new ContactStatus

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.ClearGeneratedData"></a>

### PostContactTool.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.CopyTo"></a>

### PostContactTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.CreateParameter"></a>

### PostContactTool.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Delete"></a>

### PostContactTool.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Duplicate"></a>

### PostContactTool.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.EvaluateAllResults"></a>

### PostContactTool.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.GenerateInitialContactResults"></a>

### PostContactTool.GenerateInitialContactResults() → [None](https://docs.python.org/3/library/constants.html#None)

Generate Initial Contact Results and Mesh Parts

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.GetChildren"></a>

### PostContactTool.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.GetParameter"></a>

### PostContactTool.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.GroupAllSimilarChildren"></a>

### PostContactTool.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.GroupSimilarObjects"></a>

### PostContactTool.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.PropertyByAPIName"></a>

### PostContactTool.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.PropertyByName"></a>

### PostContactTool.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.RemoveParameter"></a>

### PostContactTool.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

