# `Sizing`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshControls.Sizing"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Sizing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Sizing.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Sizing.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Sizing.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Sizing.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Sizing.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Sizing.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Sizing.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Sizing.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Sizing.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#Sizing.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#Sizing.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Sizing.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Sizing.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Sizing.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Sizing.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Sizing.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Sizing.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#Sizing.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------|---------------------------------------------------------------|
| [`Active`](#Sizing.Active)                                   | Gets the Active.                                              |
| [`Behavior`](#Sizing.Behavior)                               | Gets or sets the Behavior.                                    |
| [`BiasFactor`](#Sizing.BiasFactor)                           | Gets or sets the BiasFactor.                                  |
| [`BiasGrowthRate`](#Sizing.BiasGrowthRate)                   | Gets or sets the BiasGrowthRate.                              |
| [`BiasOption`](#Sizing.BiasOption)                           | Gets or sets the BiasOption.                                  |
| [`BiasType`](#Sizing.BiasType)                               | Gets or sets the BiasType.                                    |
| [`BodyOfInfluence`](#Sizing.BodyOfInfluence)                 | Gets the BodyOfInfluence.                                     |
| [`CaptureCurvature`](#Sizing.CaptureCurvature)               | Gets or sets the CaptureCurvature.                            |
| [`CaptureProximity`](#Sizing.CaptureProximity)               | Gets or sets the CaptureProximity.                            |
| [`Children`](#Sizing.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Sizing.Comments)                               | Gets the list of associated comments.                         |
| [`CurvatureNormalAngle`](#Sizing.CurvatureNormalAngle)       | Gets or sets the CurvatureNormalAngle.                        |
| [`DataModelObjectCategory`](#Sizing.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DefeatureSize`](#Sizing.DefeatureSize)                     | Gets or sets the DefeatureSize.                               |
| [`ElementSize`](#Sizing.ElementSize)                         | Gets or sets the ElementSize.                                 |
| [`Figures`](#Sizing.Figures)                                 | Gets the list of associated figures.                          |
| [`GrowthRate`](#Sizing.GrowthRate)                           | Gets or sets the GrowthRate.                                  |
| [`Images`](#Sizing.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Sizing.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LocalMinimumSize`](#Sizing.LocalMinimumSize)               | Gets or sets the LocalMinimumSize.                            |
| [`Location`](#Sizing.Location)                               | Gets or sets the Location.                                    |
| [`NamedSelection`](#Sizing.NamedSelection)                   | Gets or sets the NamedSelection.                              |
| [`NumberOfDivisions`](#Sizing.NumberOfDivisions)             | Gets or sets the NumberOfDivisions.                           |
| [`OriginX`](#Sizing.OriginX)                                 | Gets the OriginX.                                             |
| [`OriginY`](#Sizing.OriginY)                                 | Gets the OriginY.                                             |
| [`OriginZ`](#Sizing.OriginZ)                                 | Gets the OriginZ.                                             |
| [`Properties`](#Sizing.Properties)                           | Gets the list of properties for this object.                  |
| [`ProximityGapFactor`](#Sizing.ProximityGapFactor)           | Gets or sets the ProximityGapFactor.                          |
| [`ProximityMinimumSize`](#Sizing.ProximityMinimumSize)       | Gets or sets the ProximityMinimumSize.                        |
| [`ProximitySizeSources`](#Sizing.ProximitySizeSources)       | Gets or sets the ProximitySizeSources.                        |
| [`ReverseBias`](#Sizing.ReverseBias)                         | Gets or sets the ReverseBias.                                 |
| [`ScopingMethod`](#Sizing.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`SphereCenter`](#Sizing.SphereCenter)                       | Gets or sets the SphereCenter.                                |
| [`SphereRadius`](#Sizing.SphereRadius)                       | Gets or sets the SphereRadius.                                |
| [`Suppressed`](#Sizing.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Type`](#Sizing.Type)                                       | Gets or sets the Type.                                        |
| [`VisibleProperties`](#Sizing.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Sizing.Active"></a>

### *property* Sizing.Active *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Behavior"></a>

### *property* Sizing.Behavior *: [Ansys.Mechanical.DataModel.Enums.SizingBehavior](../../../../Mechanical/DataModel/Enums/SizingBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SizingBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.BiasFactor"></a>

### *property* Sizing.BiasFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasFactor.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.BiasGrowthRate"></a>

### *property* Sizing.BiasGrowthRate *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasGrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.BiasOption"></a>

### *property* Sizing.BiasOption *: Ansys.Mechanical.DataModel.Enums.BiasOptionType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasOption.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.BiasType"></a>

### *property* Sizing.BiasType *: Ansys.Mechanical.DataModel.Enums.BiasType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasType.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.BodyOfInfluence"></a>

### *property* Sizing.BodyOfInfluence *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BodyOfInfluence.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CaptureCurvature"></a>

### *property* Sizing.CaptureCurvature *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureCurvature.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CaptureProximity"></a>

### *property* Sizing.CaptureProximity *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureProximity.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Children"></a>

### *property* Sizing.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Comments"></a>

### *property* Sizing.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CurvatureNormalAngle"></a>

### *property* Sizing.CurvatureNormalAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvatureNormalAngle.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.DataModelObjectCategory"></a>

### *property* Sizing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.DefeatureSize"></a>

### *property* Sizing.DefeatureSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeatureSize.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ElementSize"></a>

### *property* Sizing.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Figures"></a>

### *property* Sizing.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GrowthRate"></a>

### *property* Sizing.GrowthRate *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Images"></a>

### *property* Sizing.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.InternalObject"></a>

### *property* Sizing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.LocalMinimumSize"></a>

### *property* Sizing.LocalMinimumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocalMinimumSize.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Location"></a>

### *property* Sizing.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.NamedSelection"></a>

### *property* Sizing.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.NumberOfDivisions"></a>

### *property* Sizing.NumberOfDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.OriginX"></a>

### *property* Sizing.OriginX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginX.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.OriginY"></a>

### *property* Sizing.OriginY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginY.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.OriginZ"></a>

### *property* Sizing.OriginZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginZ.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Properties"></a>

### *property* Sizing.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ProximityGapFactor"></a>

### *property* Sizing.ProximityGapFactor *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityGapFactor.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ProximityMinimumSize"></a>

### *property* Sizing.ProximityMinimumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityMinimumSize.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ProximitySizeSources"></a>

### *property* Sizing.ProximitySizeSources *: [Ansys.Mechanical.DataModel.Enums.ProximitySFSourcesType](../../../../Mechanical/DataModel/Enums/ProximitySFSourcesType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ProximitySFSourcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximitySizeSources.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ReverseBias"></a>

### *property* Sizing.ReverseBias *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReverseBias.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ScopingMethod"></a>

### *property* Sizing.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.SphereCenter"></a>

### *property* Sizing.SphereCenter *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereCenter.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.SphereRadius"></a>

### *property* Sizing.SphereRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Suppressed"></a>

### *property* Sizing.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Type"></a>

### *property* Sizing.Type *: [Ansys.Mechanical.DataModel.Enums.SizingType](../../../../Mechanical/DataModel/Enums/SizingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SizingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.VisibleProperties"></a>

### *property* Sizing.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Sizing.Activate"></a>

### Sizing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.AddComment"></a>

### Sizing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.AddFigure"></a>

### Sizing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.AddImage"></a>

### Sizing.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CopyTo"></a>

### Sizing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CreateParameter"></a>

### Sizing.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Delete"></a>

### Sizing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Duplicate"></a>

### Sizing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GenerateMesh"></a>

### Sizing.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetChildren"></a>

### Sizing.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetParameter"></a>

### Sizing.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GroupAllSimilarChildren"></a>

### Sizing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GroupSimilarObjects"></a>

### Sizing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.PropertyByAPIName"></a>

### Sizing.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Sizing.PropertyByName"></a>

### Sizing.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.RemoveParameter"></a>

### Sizing.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.RenameBasedOnDefinition"></a>

### Sizing.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

