# `ReinforcingPly`

<a id="ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.ReinforcingPly"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ReinforcingPly

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

This class provides access to the reinforcing ply data that has been imported from an external upstream system of Ansys Composite Prep.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ReinforcingPly.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ReinforcingPly.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ReinforcingPly.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ReinforcingPly.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ReinforcingPly.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ReinforcingPly.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#ReinforcingPly.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ReinforcingPly.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ReinforcingPly.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ReinforcingPly.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ReinforcingPly.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ReinforcingPly.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ReinforcingPly.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ReinforcingPly.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Angle`](#ReinforcingPly.Angle)                                     | Gets the Angle of the reinforcing ply.                                                                                                                                                                                                                       |
| [`BaseMaterialHandling`](#ReinforcingPly.BaseMaterialHandling)       | Gets the BaseMaterialHandling of the reinforcing ply. This specifies whether the base-element material                                                                                                                                                       |
| [`Children`](#ReinforcingPly.Children)                               | Gets the list of children.                                                                                                                                                                                                                                   |
| [`Comments`](#ReinforcingPly.Comments)                               | Gets the list of associated comments.                                                                                                                                                                                                                        |
| [`DataModelObjectCategory`](#ReinforcingPly.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                                                                                                                                                 |
| [`Figures`](#ReinforcingPly.Figures)                                 | Gets the list of associated figures.                                                                                                                                                                                                                         |
| [`GlobalID`](#ReinforcingPly.GlobalID)                               | Gets the GlobalID assigned to the base MESH200 elements for the corresponding Reinforcing Ply. This ID is propagated to the reinforcing elements generated by the REINF command and can be used during post-processing to select those reinforcing elements. |
| [`IDInSource`](#ReinforcingPly.IDInSource)                           | Gets the IDInSource as defined in the upstream ACP system.                                                                                                                                                                                                   |
| [`Images`](#ReinforcingPly.Images)                                   | Gets the list of associated images.                                                                                                                                                                                                                          |
| [`InternalObject`](#ReinforcingPly.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                           |
| [`Material`](#ReinforcingPly.Material)                               | Gets the Material of the reinforcing ply.                                                                                                                                                                                                                    |
| [`NameInSource`](#ReinforcingPly.NameInSource)                       | Gets the NameInSource as defined in the upstream ACP system.                                                                                                                                                                                                 |
| [`NumberOfElements`](#ReinforcingPly.NumberOfElements)               | Gets the NumberOfElements of the reinforcing ply.                                                                                                                                                                                                            |
| [`NumberOfSections`](#ReinforcingPly.NumberOfSections)               | Gets the NumberOfSections of the reinforcing ply.                                                                                                                                                                                                            |
| [`Properties`](#ReinforcingPly.Properties)                           | Gets the list of properties for this object.                                                                                                                                                                                                                 |
| [`ReadOnly`](#ReinforcingPly.ReadOnly)                               | Gets or sets the ReadOnly.                                                                                                                                                                                                                                   |
| [`ReinforcingBehavior`](#ReinforcingPly.ReinforcingBehavior)         | Gets the ReinforcingBehavior of the reinforcing ply.                                                                                                                                                                                                         |
| [`ReinforcingType`](#ReinforcingPly.ReinforcingType)                 | Gets the ReinforcingType of the reinforcing ply.                                                                                                                                                                                                             |
| [`StressState`](#ReinforcingPly.StressState)                         | Gets the StressState of the reinforcing ply.                                                                                                                                                                                                                 |
| [`Thickness`](#ReinforcingPly.Thickness)                             | Gets the Thickness of the reinforcing ply.                                                                                                                                                                                                                   |
| [`VisibleProperties`](#ReinforcingPly.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                |

<a id="property-detail"></a>

## Property detail

<a id="ReinforcingPly.Angle"></a>

### *property* ReinforcingPly.Angle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Angle of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.BaseMaterialHandling"></a>

### *property* ReinforcingPly.BaseMaterialHandling *: [Ansys.Mechanical.DataModel.Enums.ReinforcingBaseMaterialHandling](../../../Mechanical/DataModel/Enums/ReinforcingBaseMaterialHandling.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.ReinforcingBaseMaterialHandling) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BaseMaterialHandling of the reinforcing ply. This specifies whether the base-element material
: in the space occupied by the reinforcing fibers should be retained or removed.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Children"></a>

### *property* ReinforcingPly.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Comments"></a>

### *property* ReinforcingPly.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.DataModelObjectCategory"></a>

### *property* ReinforcingPly.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Figures"></a>

### *property* ReinforcingPly.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GlobalID"></a>

### *property* ReinforcingPly.GlobalID *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GlobalID assigned to the base MESH200 elements for the corresponding Reinforcing Ply. This ID is propagated to the reinforcing elements generated by the REINF command and can be used during post-processing to select those reinforcing elements.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.IDInSource"></a>

### *property* ReinforcingPly.IDInSource *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IDInSource as defined in the upstream ACP system.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Images"></a>

### *property* ReinforcingPly.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.InternalObject"></a>

### *property* ReinforcingPly.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSReinforcingPlyAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Material"></a>

### *property* ReinforcingPly.Material *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Material of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.NameInSource"></a>

### *property* ReinforcingPly.NameInSource *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NameInSource as defined in the upstream ACP system.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.NumberOfElements"></a>

### *property* ReinforcingPly.NumberOfElements *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfElements of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.NumberOfSections"></a>

### *property* ReinforcingPly.NumberOfSections *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfSections of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Properties"></a>

### *property* ReinforcingPly.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.ReadOnly"></a>

### *property* ReinforcingPly.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.ReinforcingBehavior"></a>

### *property* ReinforcingPly.ReinforcingBehavior *: [Ansys.Mechanical.DataModel.Enums.ReinforcingBehavior](../../../Mechanical/DataModel/Enums/ReinforcingBehavior.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.ReinforcingBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReinforcingBehavior of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.ReinforcingType"></a>

### *property* ReinforcingPly.ReinforcingType *: [Ansys.Mechanical.DataModel.Enums.ReinforcingType](../../../Mechanical/DataModel/Enums/ReinforcingType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.ReinforcingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReinforcingType of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.StressState"></a>

### *property* ReinforcingPly.StressState *: [Ansys.Mechanical.DataModel.Enums.ReinforcingStressState](../../../Mechanical/DataModel/Enums/ReinforcingStressState.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.ReinforcingStressState) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StressState of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Thickness"></a>

### *property* ReinforcingPly.Thickness *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Thickness of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.VisibleProperties"></a>

### *property* ReinforcingPly.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ReinforcingPly.Activate"></a>

### ReinforcingPly.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.AddComment"></a>

### ReinforcingPly.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.AddFigure"></a>

### ReinforcingPly.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.AddImage"></a>

### ReinforcingPly.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.CopyTo"></a>

### ReinforcingPly.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.CreateParameter"></a>

### ReinforcingPly.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Duplicate"></a>

### ReinforcingPly.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetChildren"></a>

### ReinforcingPly.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetParameter"></a>

### ReinforcingPly.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GroupAllSimilarChildren"></a>

### ReinforcingPly.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GroupSimilarObjects"></a>

### ReinforcingPly.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.PropertyByAPIName"></a>

### ReinforcingPly.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.PropertyByName"></a>

### ReinforcingPly.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.RemoveParameter"></a>

### ReinforcingPly.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

