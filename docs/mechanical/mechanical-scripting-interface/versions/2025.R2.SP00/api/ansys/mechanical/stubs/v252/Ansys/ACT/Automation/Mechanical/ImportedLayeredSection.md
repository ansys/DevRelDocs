# `ImportedLayeredSection`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLayeredSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLayeredSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedLayeredSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedLayeredSection.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedLayeredSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedLayeredSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedLayeredSection.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedLayeredSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedLayeredSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#ImportedLayeredSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedLayeredSection.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedLayeredSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedLayeredSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedLayeredSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedLayeredSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedLayeredSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RegroupToDefault`](#ImportedLayeredSection.RegroupToDefault)               | Run the RegroupToDefault action.                                                  |
| [`RemoveParameter`](#ImportedLayeredSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedLayeredSection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedLayeredSection.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ImportedLayeredSection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImportedLayeredSection.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedLayeredSection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedLayeredSection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LayerToDisplay`](#ImportedLayeredSection.LayerToDisplay)                   | Gets or sets the LayerToDisplay.                              |
| [`MaximumNumberOfLayers`](#ImportedLayeredSection.MaximumNumberOfLayers)     | Gets the MaximumNumberOfLayers.                               |
| [`NonlinearEffects`](#ImportedLayeredSection.NonlinearEffects)               | Gets or sets the NonlinearEffects.                            |
| [`Properties`](#ImportedLayeredSection.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#ImportedLayeredSection.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](#ImportedLayeredSection.ThermalStrainEffects)       | Gets or sets the ThermalStrainEffects.                        |
| [`Type`](#ImportedLayeredSection.Type)                                       | Gets the Type.                                                |
| [`VisibleProperties`](#ImportedLayeredSection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedLayeredSection.Children"></a>

### *property* ImportedLayeredSection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Comments"></a>

### *property* ImportedLayeredSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.DataModelObjectCategory"></a>

### *property* ImportedLayeredSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Figures"></a>

### *property* ImportedLayeredSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Images"></a>

### *property* ImportedLayeredSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.InternalObject"></a>

### *property* ImportedLayeredSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalEnhancedModelAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.LayerToDisplay"></a>

### *property* ImportedLayeredSection.LayerToDisplay *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.MaximumNumberOfLayers"></a>

### *property* ImportedLayeredSection.MaximumNumberOfLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.NonlinearEffects"></a>

### *property* ImportedLayeredSection.NonlinearEffects *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Properties"></a>

### *property* ImportedLayeredSection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Suppressed"></a>

### *property* ImportedLayeredSection.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.ThermalStrainEffects"></a>

### *property* ImportedLayeredSection.ThermalStrainEffects *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Type"></a>

### *property* ImportedLayeredSection.Type *: [Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType](../../../Mechanical/DataModel/Enums/ExternalEnhancedModelType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.VisibleProperties"></a>

### *property* ImportedLayeredSection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedLayeredSection.Activate"></a>

### ImportedLayeredSection.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.AddComment"></a>

### ImportedLayeredSection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.AddFigure"></a>

### ImportedLayeredSection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.AddImage"></a>

### ImportedLayeredSection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.CopyTo"></a>

### ImportedLayeredSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.CreateParameter"></a>

### ImportedLayeredSection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Duplicate"></a>

### ImportedLayeredSection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetChildren"></a>

### ImportedLayeredSection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetParameter"></a>

### ImportedLayeredSection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GroupAllSimilarChildren"></a>

### ImportedLayeredSection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GroupSimilarObjects"></a>

### ImportedLayeredSection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.PropertyByAPIName"></a>

### ImportedLayeredSection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.PropertyByName"></a>

### ImportedLayeredSection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.RegroupToDefault"></a>

### ImportedLayeredSection.RegroupToDefault() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RegroupToDefault action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.RemoveParameter"></a>

### ImportedLayeredSection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

