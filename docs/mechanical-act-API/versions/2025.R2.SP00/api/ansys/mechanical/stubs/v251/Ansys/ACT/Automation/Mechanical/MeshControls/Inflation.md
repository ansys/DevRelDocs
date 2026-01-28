# `Inflation`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshControls.Inflation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Inflation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Inflation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Inflation.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Inflation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Inflation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Inflation.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Inflation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Inflation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Inflation.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Inflation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#Inflation.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#Inflation.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Inflation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Inflation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Inflation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Inflation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Inflation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Inflation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#Inflation.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`Active`](#Inflation.Active)                                   | Gets the Active.                                              |
| [`AspectRatio`](#Inflation.AspectRatio)                         | Gets or sets the AspectRatio.                                 |
| [`BoundaryLocation`](#Inflation.BoundaryLocation)               | Gets or sets the BoundaryLocation.                            |
| [`BoundaryNamedSelection`](#Inflation.BoundaryNamedSelection)   | Gets or sets the BoundaryNamedSelection.                      |
| [`Children`](#Inflation.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Inflation.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Inflation.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Inflation.Figures)                                 | Gets the list of associated figures.                          |
| [`FirstLayerHeight`](#Inflation.FirstLayerHeight)               | Gets or sets the FirstLayerHeight.                            |
| [`GrowthRate`](#Inflation.GrowthRate)                           | Gets or sets the GrowthRate.                                  |
| [`Images`](#Inflation.Images)                                   | Gets the list of associated images.                           |
| [`InflationAlgorithm`](#Inflation.InflationAlgorithm)           | Gets or sets the InflationAlgorithm.                          |
| [`InflationOption`](#Inflation.InflationOption)                 | Gets or sets the InflationOption.                             |
| [`InternalObject`](#Inflation.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#Inflation.Location)                               | Gets or sets the Location.                                    |
| [`MaximumLayers`](#Inflation.MaximumLayers)                     | Gets or sets the MaximumLayers.                               |
| [`MaximumThickness`](#Inflation.MaximumThickness)               | Gets or sets the MaximumThickness.                            |
| [`NamedSelection`](#Inflation.NamedSelection)                   | Gets or sets the NamedSelection.                              |
| [`NumberOfLayers`](#Inflation.NumberOfLayers)                   | Gets or sets the NumberOfLayers.                              |
| [`Properties`](#Inflation.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#Inflation.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Inflation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TransitionRatio`](#Inflation.TransitionRatio)                 | Gets or sets the TransitionRatio.                             |
| [`VisibleProperties`](#Inflation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Inflation.Active"></a>

### *property* Inflation.Active *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.AspectRatio"></a>

### *property* Inflation.AspectRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AspectRatio.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.BoundaryLocation"></a>

### *property* Inflation.BoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.BoundaryNamedSelection"></a>

### *property* Inflation.BoundaryNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Children"></a>

### *property* Inflation.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Comments"></a>

### *property* Inflation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.DataModelObjectCategory"></a>

### *property* Inflation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Figures"></a>

### *property* Inflation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.FirstLayerHeight"></a>

### *property* Inflation.FirstLayerHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FirstLayerHeight.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GrowthRate"></a>

### *property* Inflation.GrowthRate *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Images"></a>

### *property* Inflation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.InflationAlgorithm"></a>

### *property* Inflation.InflationAlgorithm *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflationAlgorithm.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.InflationOption"></a>

### *property* Inflation.InflationOption *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflationOption.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.InternalObject"></a>

### *property* Inflation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Location"></a>

### *property* Inflation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.MaximumLayers"></a>

### *property* Inflation.MaximumLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumLayers.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.MaximumThickness"></a>

### *property* Inflation.MaximumThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumThickness.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.NamedSelection"></a>

### *property* Inflation.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.NumberOfLayers"></a>

### *property* Inflation.NumberOfLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Properties"></a>

### *property* Inflation.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.ScopingMethod"></a>

### *property* Inflation.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Suppressed"></a>

### *property* Inflation.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.TransitionRatio"></a>

### *property* Inflation.TransitionRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransitionRatio.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.VisibleProperties"></a>

### *property* Inflation.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Inflation.Activate"></a>

### Inflation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.AddComment"></a>

### Inflation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.AddFigure"></a>

### Inflation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.AddImage"></a>

### Inflation.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Inflation.CopyTo"></a>

### Inflation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.CreateParameter"></a>

### Inflation.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Delete"></a>

### Inflation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Duplicate"></a>

### Inflation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GenerateMesh"></a>

### Inflation.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetChildren"></a>

### Inflation.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetParameter"></a>

### Inflation.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GroupAllSimilarChildren"></a>

### Inflation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GroupSimilarObjects"></a>

### Inflation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.PropertyByAPIName"></a>

### Inflation.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Inflation.PropertyByName"></a>

### Inflation.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.RemoveParameter"></a>

### Inflation.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.RenameBasedOnDefinition"></a>

### Inflation.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

