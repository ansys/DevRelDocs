# `ImportedReinforcements`

<a id="ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.ImportedReinforcements"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedReinforcements

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedReinforcements.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedReinforcements.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedReinforcements.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedReinforcements.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedReinforcements.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedReinforcements.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedReinforcements.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#ImportedReinforcements.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedReinforcements.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedReinforcements.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedReinforcements.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedReinforcements.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedReinforcements.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedReinforcements.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RegroupToDefault`](#ImportedReinforcements.RegroupToDefault)               | Run the RegroupToDefault action.                                                  |
| [`RemoveParameter`](#ImportedReinforcements.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedReinforcements.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedReinforcements.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ImportedReinforcements.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ImportedReinforcements.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedReinforcements.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedReinforcements.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LayerToDisplay`](#ImportedReinforcements.LayerToDisplay)                   | Gets or sets the LayerToDisplay.                              |
| [`MaximumNumberOfLayers`](#ImportedReinforcements.MaximumNumberOfLayers)     | Gets the MaximumNumberOfLayers.                               |
| [`NonlinearEffects`](#ImportedReinforcements.NonlinearEffects)               | Gets or sets the NonlinearEffects.                            |
| [`Properties`](#ImportedReinforcements.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#ImportedReinforcements.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](#ImportedReinforcements.ThermalStrainEffects)       | Gets or sets the ThermalStrainEffects.                        |
| [`Type`](#ImportedReinforcements.Type)                                       | Gets the Type.                                                |
| [`VisibleProperties`](#ImportedReinforcements.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedReinforcements.Children"></a>

### *property* ImportedReinforcements.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Comments"></a>

### *property* ImportedReinforcements.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.DataModelObjectCategory"></a>

### *property* ImportedReinforcements.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Figures"></a>

### *property* ImportedReinforcements.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Images"></a>

### *property* ImportedReinforcements.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.InternalObject"></a>

### *property* ImportedReinforcements.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalEnhancedModelAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.LayerToDisplay"></a>

### *property* ImportedReinforcements.LayerToDisplay *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.MaximumNumberOfLayers"></a>

### *property* ImportedReinforcements.MaximumNumberOfLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.NonlinearEffects"></a>

### *property* ImportedReinforcements.NonlinearEffects *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Properties"></a>

### *property* ImportedReinforcements.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Suppressed"></a>

### *property* ImportedReinforcements.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.ThermalStrainEffects"></a>

### *property* ImportedReinforcements.ThermalStrainEffects *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Type"></a>

### *property* ImportedReinforcements.Type *: [Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType](../../../Mechanical/DataModel/Enums/ExternalEnhancedModelType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.VisibleProperties"></a>

### *property* ImportedReinforcements.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedReinforcements.Activate"></a>

### ImportedReinforcements.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.AddComment"></a>

### ImportedReinforcements.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.AddFigure"></a>

### ImportedReinforcements.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.AddImage"></a>

### ImportedReinforcements.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.CopyTo"></a>

### ImportedReinforcements.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.CreateParameter"></a>

### ImportedReinforcements.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Duplicate"></a>

### ImportedReinforcements.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetChildren"></a>

### ImportedReinforcements.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetParameter"></a>

### ImportedReinforcements.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GroupAllSimilarChildren"></a>

### ImportedReinforcements.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GroupSimilarObjects"></a>

### ImportedReinforcements.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.PropertyByAPIName"></a>

### ImportedReinforcements.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.PropertyByName"></a>

### ImportedReinforcements.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.RegroupToDefault"></a>

### ImportedReinforcements.RegroupToDefault() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RegroupToDefault action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.RemoveParameter"></a>

### ImportedReinforcements.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

