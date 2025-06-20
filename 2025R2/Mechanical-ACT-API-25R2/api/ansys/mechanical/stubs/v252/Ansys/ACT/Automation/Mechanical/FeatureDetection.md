# `FeatureDetection`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FeatureDetection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FeatureDetection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FeatureDetection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FeatureDetection.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#FeatureDetection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#FeatureDetection.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#FeatureDetection.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#FeatureDetection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FeatureDetection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#FeatureDetection.Delete)                                   | Run the Delete action.                                                            |
| [`DetectFeatures`](#FeatureDetection.DetectFeatures)                   | DetectFeatures method.                                                            |
| [`Duplicate`](#FeatureDetection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#FeatureDetection.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`GetChildren`](#FeatureDetection.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FeatureDetection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FeatureDetection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FeatureDetection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#FeatureDetection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FeatureDetection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FeatureDetection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#FeatureDetection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#FeatureDetection.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#FeatureDetection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Definition`](#FeatureDetection.Definition)                           | Get the FeatureDetectionDefinition object.                    |
| [`Images`](#FeatureDetection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#FeatureDetection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#FeatureDetection.Location)                               | Gets or sets the Location.                                    |
| [`NamedSelection`](#FeatureDetection.NamedSelection)                   | Gets or sets the NamedSelection.                              |
| [`Properties`](#FeatureDetection.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#FeatureDetection.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`VisibleProperties`](#FeatureDetection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FeatureDetection.Children"></a>

### *property* FeatureDetection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Comments"></a>

### *property* FeatureDetection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.DataModelObjectCategory"></a>

### *property* FeatureDetection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Definition"></a>

### *property* FeatureDetection.Definition *: [Ansys.ACT.Automation.Mechanical.FeatureDetectionDefinition](FeatureDetectionDefinition.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FeatureDetectionDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the FeatureDetectionDefinition object.
: This object contains all the Feature Detection data like Fillets, Holes, Chamfers detection.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Images"></a>

### *property* FeatureDetection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.InternalObject"></a>

### *property* FeatureDetection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFeatureDetectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Location"></a>

### *property* FeatureDetection.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.NamedSelection"></a>

### *property* FeatureDetection.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Properties"></a>

### *property* FeatureDetection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.ScopingMethod"></a>

### *property* FeatureDetection.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.VisibleProperties"></a>

### *property* FeatureDetection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FeatureDetection.Activate"></a>

### FeatureDetection.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.AddComment"></a>

### FeatureDetection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.AddImage"></a>

### FeatureDetection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.ClearGeneratedData"></a>

### FeatureDetection.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.CopyTo"></a>

### FeatureDetection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.CreateParameter"></a>

### FeatureDetection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Delete"></a>

### FeatureDetection.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.DetectFeatures"></a>

### FeatureDetection.DetectFeatures() → [None](https://docs.python.org/3/library/constants.html#None)

DetectFeatures method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Duplicate"></a>

### FeatureDetection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.EvaluateAllResults"></a>

### FeatureDetection.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetChildren"></a>

### FeatureDetection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetParameter"></a>

### FeatureDetection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GroupAllSimilarChildren"></a>

### FeatureDetection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GroupSimilarObjects"></a>

### FeatureDetection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.PropertyByAPIName"></a>

### FeatureDetection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.PropertyByName"></a>

### FeatureDetection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.RemoveParameter"></a>

### FeatureDetection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

