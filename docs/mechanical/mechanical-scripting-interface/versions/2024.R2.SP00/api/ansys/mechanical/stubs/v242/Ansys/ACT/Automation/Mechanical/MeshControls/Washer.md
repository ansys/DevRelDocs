# `Washer`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshControls.Washer"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Washer

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Washer.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Washer.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Washer.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Washer.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Washer.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Washer.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Washer.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Washer.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Washer.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#Washer.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#Washer.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Washer.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Washer.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Washer.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Washer.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Washer.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Washer.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#Washer.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Washer.Children)                                                   | Gets the list of children.                                    |
| [`Comments`](#Washer.Comments)                                                   | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Washer.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                  |
| [`FactorOfDiameter`](#Washer.FactorOfDiameter)                                   | FactorOfDiameter property.                                    |
| [`Figures`](#Washer.Figures)                                                     | Gets the list of associated figures.                          |
| [`GrowthRate`](#Washer.GrowthRate)                                               | GrowthRate property.                                          |
| [`Images`](#Washer.Images)                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#Washer.InternalObject)                                       | Gets the internal object. For advanced usage only.            |
| [`LayerTransitionType`](#Washer.LayerTransitionType)                             | LayerTransitionType property.                                 |
| [`Location`](#Washer.Location)                                                   | Gets or sets the Location.                                    |
| [`MinimumNumberOfWasherDivisions`](#Washer.MinimumNumberOfWasherDivisions)       | MinimumNumberOfWasherDivisions property.                      |
| [`NamedSelection`](#Washer.NamedSelection)                                       | Gets or sets the NamedSelection.                              |
| [`NumberOfWasherDivisions`](#Washer.NumberOfWasherDivisions)                     | NumberOfWasherDivisions property.                             |
| [`NumberOfWasherLayers`](#Washer.NumberOfWasherLayers)                           | NumberOfWasherLayers property.                                |
| [`Properties`](#Washer.Properties)                                               | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#Washer.ScopingMethod)                                         | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Washer.Suppressed)                                               | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Washer.VisibleProperties)                                 | Gets the list of properties that are visible for this object. |
| [`WasherAutoDefeature`](#Washer.WasherAutoDefeature)                             | WasherAutoDefeature property.                                 |
| [`WasherDefeatureProximityTolerance`](#Washer.WasherDefeatureProximityTolerance) | WasherDefeatureProximityTolerance property.                   |
| [`WasherLayerHeight`](#Washer.WasherLayerHeight)                                 | WasherLayerHeight property.                                   |
| [`WasherMethod`](#Washer.WasherMethod)                                           | WasherMethod property.                                        |
| [`WasherType`](#Washer.WasherType)                                               | WasherType property.                                          |

<a id="property-detail"></a>

## Property detail

<a id="Washer.Children"></a>

### *property* Washer.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Comments"></a>

### *property* Washer.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Washer.DataModelObjectCategory"></a>

### *property* Washer.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Washer.FactorOfDiameter"></a>

### *property* Washer.FactorOfDiameter *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

FactorOfDiameter property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Figures"></a>

### *property* Washer.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GrowthRate"></a>

### *property* Washer.GrowthRate *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

GrowthRate property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Images"></a>

### *property* Washer.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Washer.InternalObject"></a>

### *property* Washer.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Washer.LayerTransitionType"></a>

### *property* Washer.LayerTransitionType *: Ansys.Mechanical.DataModel.Enums.LayerTransitionType | [None](https://docs.python.org/3/library/constants.html#None)*

LayerTransitionType property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Location"></a>

### *property* Washer.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Washer.MinimumNumberOfWasherDivisions"></a>

### *property* Washer.MinimumNumberOfWasherDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

MinimumNumberOfWasherDivisions property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.NamedSelection"></a>

### *property* Washer.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Washer.NumberOfWasherDivisions"></a>

### *property* Washer.NumberOfWasherDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfWasherDivisions property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.NumberOfWasherLayers"></a>

### *property* Washer.NumberOfWasherLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfWasherLayers property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Properties"></a>

### *property* Washer.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Washer.ScopingMethod"></a>

### *property* Washer.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Suppressed"></a>

### *property* Washer.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Washer.VisibleProperties"></a>

### *property* Washer.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Washer.WasherAutoDefeature"></a>

### *property* Washer.WasherAutoDefeature *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

WasherAutoDefeature property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.WasherDefeatureProximityTolerance"></a>

### *property* Washer.WasherDefeatureProximityTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

WasherDefeatureProximityTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.WasherLayerHeight"></a>

### *property* Washer.WasherLayerHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

WasherLayerHeight property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.WasherMethod"></a>

### *property* Washer.WasherMethod *: Ansys.Mechanical.DataModel.Enums.WasherMethod | [None](https://docs.python.org/3/library/constants.html#None)*

WasherMethod property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.WasherType"></a>

### *property* Washer.WasherType *: Ansys.Mechanical.DataModel.Enums.WasherType | [None](https://docs.python.org/3/library/constants.html#None)*

WasherType property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Washer.Activate"></a>

### Washer.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Washer.AddComment"></a>

### Washer.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Washer.AddFigure"></a>

### Washer.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Washer.AddImage"></a>

### Washer.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Washer.CopyTo"></a>

### Washer.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Washer.CreateParameter"></a>

### Washer.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Delete"></a>

### Washer.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Duplicate"></a>

### Washer.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GenerateMesh"></a>

### Washer.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetChildren"></a>

### Washer.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetParameter"></a>

### Washer.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GroupAllSimilarChildren"></a>

### Washer.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GroupSimilarObjects"></a>

### Washer.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Washer.PropertyByAPIName"></a>

### Washer.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Washer.PropertyByName"></a>

### Washer.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Washer.RemoveParameter"></a>

### Washer.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.RenameBasedOnDefinition"></a>

### Washer.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

