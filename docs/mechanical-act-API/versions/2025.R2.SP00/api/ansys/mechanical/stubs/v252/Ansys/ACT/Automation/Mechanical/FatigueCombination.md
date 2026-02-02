# `FatigueCombination`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FatigueCombination"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FatigueCombination

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FatigueCombination.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FatigueCombination.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#FatigueCombination.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddDamage`](#FatigueCombination.AddDamage)                             | Creates a new FatigueDamage                                                       |
| [`AddImage`](#FatigueCombination.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#FatigueCombination.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FatigueCombination.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#FatigueCombination.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FatigueCombination.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#FatigueCombination.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`GetChildren`](#FatigueCombination.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FatigueCombination.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FatigueCombination.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueCombination.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#FatigueCombination.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FatigueCombination.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FatigueCombination.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#FatigueCombination.Children)                               | Gets the list of children.                                    |
| [`Comments`](#FatigueCombination.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#FatigueCombination.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Images`](#FatigueCombination.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#FatigueCombination.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FatigueCombination.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FatigueCombination.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FatigueCombination.Children"></a>

### *property* FatigueCombination.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Comments"></a>

### *property* FatigueCombination.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.DataModelObjectCategory"></a>

### *property* FatigueCombination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Images"></a>

### *property* FatigueCombination.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.InternalObject"></a>

### *property* FatigueCombination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFatigueCombinationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Properties"></a>

### *property* FatigueCombination.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.VisibleProperties"></a>

### *property* FatigueCombination.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueCombination.Activate"></a>

### FatigueCombination.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.AddComment"></a>

### FatigueCombination.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.AddDamage"></a>

### FatigueCombination.AddDamage() → [Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueDamage](Results/FatigueToolResults/FatigueDamage.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueDamage)

Creates a new FatigueDamage

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.AddImage"></a>

### FatigueCombination.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.CopyTo"></a>

### FatigueCombination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.CreateParameter"></a>

### FatigueCombination.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Delete"></a>

### FatigueCombination.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Duplicate"></a>

### FatigueCombination.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.EvaluateAllResults"></a>

### FatigueCombination.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetChildren"></a>

### FatigueCombination.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetParameter"></a>

### FatigueCombination.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GroupAllSimilarChildren"></a>

### FatigueCombination.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GroupSimilarObjects"></a>

### FatigueCombination.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.PropertyByAPIName"></a>

### FatigueCombination.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.PropertyByName"></a>

### FatigueCombination.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.RemoveParameter"></a>

### FatigueCombination.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

