# `ImportedPlies`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedPlies"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedPlies

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedPlies.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedPlies.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedPlies.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedPlies.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedPlies.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedPlies.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedPlies.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#ImportedPlies.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedPlies.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedPlies.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedPlies.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedPlies.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedPlies.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedPlies.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RegroupToDefault`](#ImportedPlies.RegroupToDefault)               | Run the RegroupToDefault action.                                                  |
| [`RemoveParameter`](#ImportedPlies.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedPlies.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedPlies.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ImportedPlies.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImportedPlies.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedPlies.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedPlies.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LayerToDisplay`](#ImportedPlies.LayerToDisplay)                   | Gets or sets the LayerToDisplay.                              |
| [`MaximumNumberOfLayers`](#ImportedPlies.MaximumNumberOfLayers)     | Gets the MaximumNumberOfLayers.                               |
| [`NonlinearEffects`](#ImportedPlies.NonlinearEffects)               | Gets or sets the NonlinearEffects.                            |
| [`Properties`](#ImportedPlies.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#ImportedPlies.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](#ImportedPlies.ThermalStrainEffects)       | Gets or sets the ThermalStrainEffects.                        |
| [`Type`](#ImportedPlies.Type)                                       | Gets the Type.                                                |
| [`VisibleProperties`](#ImportedPlies.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedPlies.Children"></a>

### *property* ImportedPlies.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Comments"></a>

### *property* ImportedPlies.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.DataModelObjectCategory"></a>

### *property* ImportedPlies.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Figures"></a>

### *property* ImportedPlies.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Images"></a>

### *property* ImportedPlies.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.InternalObject"></a>

### *property* ImportedPlies.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalEnhancedModelAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.LayerToDisplay"></a>

### *property* ImportedPlies.LayerToDisplay *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.MaximumNumberOfLayers"></a>

### *property* ImportedPlies.MaximumNumberOfLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.NonlinearEffects"></a>

### *property* ImportedPlies.NonlinearEffects *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Properties"></a>

### *property* ImportedPlies.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Suppressed"></a>

### *property* ImportedPlies.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.ThermalStrainEffects"></a>

### *property* ImportedPlies.ThermalStrainEffects *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Type"></a>

### *property* ImportedPlies.Type *: [Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType](../../../Mechanical/DataModel/Enums/ExternalEnhancedModelType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.VisibleProperties"></a>

### *property* ImportedPlies.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedPlies.Activate"></a>

### ImportedPlies.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.AddComment"></a>

### ImportedPlies.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.AddFigure"></a>

### ImportedPlies.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.AddImage"></a>

### ImportedPlies.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.CopyTo"></a>

### ImportedPlies.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.CreateParameter"></a>

### ImportedPlies.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Duplicate"></a>

### ImportedPlies.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetChildren"></a>

### ImportedPlies.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetParameter"></a>

### ImportedPlies.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GroupAllSimilarChildren"></a>

### ImportedPlies.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GroupSimilarObjects"></a>

### ImportedPlies.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.PropertyByAPIName"></a>

### ImportedPlies.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.PropertyByName"></a>

### ImportedPlies.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.RegroupToDefault"></a>

### ImportedPlies.RegroupToDefault()

Run the RegroupToDefault action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.RemoveParameter"></a>

### ImportedPlies.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

