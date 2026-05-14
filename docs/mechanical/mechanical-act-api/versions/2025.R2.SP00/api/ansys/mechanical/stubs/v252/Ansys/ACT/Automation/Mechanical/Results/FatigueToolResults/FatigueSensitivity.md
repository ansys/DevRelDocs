# `FatigueSensitivity`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueSensitivity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueSensitivity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FatigueSensitivity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FatigueSensitivity.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#FatigueSensitivity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#FatigueSensitivity.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#FatigueSensitivity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FatigueSensitivity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#FatigueSensitivity.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FatigueSensitivity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#FatigueSensitivity.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FatigueSensitivity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FatigueSensitivity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueSensitivity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#FatigueSensitivity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FatigueSensitivity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FatigueSensitivity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#FatigueSensitivity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ChartViewingStyle`](#FatigueSensitivity.ChartViewingStyle)             | Gets or sets the ChartViewingStyle.                           |
| [`Children`](#FatigueSensitivity.Children)                               | Gets the list of children.                                    |
| [`Comments`](#FatigueSensitivity.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#FatigueSensitivity.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DesignLife`](#FatigueSensitivity.DesignLife)                           | Gets or sets the DesignLife.                                  |
| [`Images`](#FatigueSensitivity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#FatigueSensitivity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#FatigueSensitivity.Location)                               | Gets or sets the Location.                                    |
| [`LowerVariation`](#FatigueSensitivity.LowerVariation)                   | Gets or sets the LowerVariation.                              |
| [`NumberOfFillPoints`](#FatigueSensitivity.NumberOfFillPoints)           | Gets or sets the NumberOfFillPoints.                          |
| [`Properties`](#FatigueSensitivity.Properties)                           | Gets the list of properties for this object.                  |
| [`Sensitivity`](#FatigueSensitivity.Sensitivity)                         | Gets or sets the Sensitivity.                                 |
| [`Suppressed`](#FatigueSensitivity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`UpperVariation`](#FatigueSensitivity.UpperVariation)                   | Gets or sets the UpperVariation.                              |
| [`VisibleProperties`](#FatigueSensitivity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FatigueSensitivity.ChartViewingStyle"></a>

### *property* FatigueSensitivity.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Children"></a>

### *property* FatigueSensitivity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Comments"></a>

### *property* FatigueSensitivity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.DataModelObjectCategory"></a>

### *property* FatigueSensitivity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.DesignLife"></a>

### *property* FatigueSensitivity.DesignLife *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Images"></a>

### *property* FatigueSensitivity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.InternalObject"></a>

### *property* FatigueSensitivity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Location"></a>

### *property* FatigueSensitivity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.LowerVariation"></a>

### *property* FatigueSensitivity.LowerVariation *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowerVariation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.NumberOfFillPoints"></a>

### *property* FatigueSensitivity.NumberOfFillPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfFillPoints.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Properties"></a>

### *property* FatigueSensitivity.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Sensitivity"></a>

### *property* FatigueSensitivity.Sensitivity *: [Ansys.Mechanical.DataModel.Enums.FatigueSensitivityType](../../../../../Mechanical/DataModel/Enums/FatigueSensitivityType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FatigueSensitivityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Sensitivity.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Suppressed"></a>

### *property* FatigueSensitivity.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.UpperVariation"></a>

### *property* FatigueSensitivity.UpperVariation *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpperVariation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.VisibleProperties"></a>

### *property* FatigueSensitivity.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueSensitivity.Activate"></a>

### FatigueSensitivity.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.AddComment"></a>

### FatigueSensitivity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.AddImage"></a>

### FatigueSensitivity.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.CopyTo"></a>

### FatigueSensitivity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.CreateParameter"></a>

### FatigueSensitivity.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Delete"></a>

### FatigueSensitivity.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Duplicate"></a>

### FatigueSensitivity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetChildren"></a>

### FatigueSensitivity.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetParameter"></a>

### FatigueSensitivity.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GroupAllSimilarChildren"></a>

### FatigueSensitivity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GroupSimilarObjects"></a>

### FatigueSensitivity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.PropertyByAPIName"></a>

### FatigueSensitivity.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.PropertyByName"></a>

### FatigueSensitivity.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.RemoveParameter"></a>

### FatigueSensitivity.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.RenameBasedOnDefinition"></a>

### FatigueSensitivity.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

