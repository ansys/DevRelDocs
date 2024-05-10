# Sizing

<a id="Sizing"></a>

### *class* Sizing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Sizing.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#Sizing.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#Sizing.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#Sizing.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Sizing.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Sizing.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Sizing.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Sizing.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Sizing.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Sizing.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Sizing.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Sizing.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Sizing.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Sizing.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Sizing.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Sizing.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Sizing.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BodyOfInfluence`](#Sizing.BodyOfInfluence)                                                                           | Gets the BodyOfInfluence.                                     |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`BiasGrowthRate`](#Sizing.BiasGrowthRate)                                                                             | Gets or sets the BiasGrowthRate.                              |
| [`NumberOfDivisions`](#Sizing.NumberOfDivisions)                                                                       | Gets or sets the NumberOfDivisions.                           |
| [`GrowthRate`](#Sizing.GrowthRate)                                                                                     | Gets or sets the GrowthRate.                                  |
| [`BiasFactor`](#Sizing.BiasFactor)                                                                                     | Gets or sets the BiasFactor.                                  |
| [`ElementSize`](#Sizing.ElementSize)                                                                                   | Gets or sets the ElementSize.                                 |
| [`SphereRadius`](#Sizing.SphereRadius)                                                                                 | Gets or sets the SphereRadius.                                |
| [`DefeatureSize`](#Sizing.DefeatureSize)                                                                               | Gets or sets the DefeatureSize.                               |
| [`LocalMinimumSize`](#Sizing.LocalMinimumSize)                                                                         | Gets or sets the LocalMinimumSize.                            |
| [`ProximityGapFactor`](#Sizing.ProximityGapFactor)                                                                     | Gets or sets the ProximityGapFactor.                          |
| [`ProximityMinimumSize`](#Sizing.ProximityMinimumSize)                                                                 | Gets or sets the ProximityMinimumSize.                        |
| [`CurvatureNormalAngle`](#Sizing.CurvatureNormalAngle)                                                                 | Gets or sets the CurvatureNormalAngle.                        |
| [`OriginX`](#Sizing.OriginX)                                                                                           | Gets the OriginX.                                             |
| [`OriginY`](#Sizing.OriginY)                                                                                           | Gets the OriginY.                                             |
| [`OriginZ`](#Sizing.OriginZ)                                                                                           | Gets the OriginZ.                                             |
| [`BiasOption`](#Sizing.BiasOption)                                                                                     | Gets or sets the BiasOption.                                  |
| [`ProximitySizeSources`](#Sizing.ProximitySizeSources)                                                                 | Gets or sets the ProximitySizeSources.                        |
| [`Behavior`](#Sizing.Behavior)                                                                                         | Gets or sets the Behavior.                                    |
| [`Type`](#Sizing.Type)                                                                                                 | Gets or sets the Type.                                        |
| [`BiasType`](#Sizing.BiasType)                                                                                         | Gets or sets the BiasType.                                    |
| [`Active`](#Sizing.Active)                                                                                             | Gets the Active.                                              |
| [`CaptureCurvature`](#Sizing.CaptureCurvature)                                                                         | Gets or sets the CaptureCurvature.                            |
| [`CaptureProximity`](#Sizing.CaptureProximity)                                                                         | Gets or sets the CaptureProximity.                            |
| [`NamedSelection`](./../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`SphereCenter`](#Sizing.SphereCenter)                                                                                 | Gets or sets the SphereCenter.                                |
| [`Location`](#Sizing.Location)                                                                                         | Gets or sets the Location.                                    |
| [`ReverseBias`](#Sizing.ReverseBias)                                                                                   | Gets or sets the ReverseBias.                                 |
| [`DataModelObjectCategory`](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#Sizing.ScopingMethod)                                                                               | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Sizing.Suppressed)                                                                                     | Gets or sets the Suppressed.                                  |
| [`Children`](#Sizing.Children)                                                                                         | Gets the list of children.                                    |
| [`Comments`](#Sizing.Comments)                                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#Sizing.Figures)                                                                                           | Gets the list of associated figures.                          |
| [`Images`](#Sizing.Images)                                                                                             | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Sizing.Properties)                                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Sizing.VisibleProperties)                                                                       | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Sizing
```

<a id="property-detail"></a>

## Property detail

<a id="Sizing.BodyOfInfluence"></a>

### *property* Sizing.BodyOfInfluence *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BodyOfInfluence.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.InternalObject"></a>

### *property* Sizing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.BiasGrowthRate"></a>

### *property* Sizing.BiasGrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasGrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.NumberOfDivisions"></a>

### *property* Sizing.NumberOfDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GrowthRate"></a>

### *property* Sizing.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.BiasFactor"></a>

### *property* Sizing.BiasFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasFactor.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ElementSize"></a>

### *property* Sizing.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.SphereRadius"></a>

### *property* Sizing.SphereRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.DefeatureSize"></a>

### *property* Sizing.DefeatureSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeatureSize.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.LocalMinimumSize"></a>

### *property* Sizing.LocalMinimumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocalMinimumSize.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ProximityGapFactor"></a>

### *property* Sizing.ProximityGapFactor *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityGapFactor.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ProximityMinimumSize"></a>

### *property* Sizing.ProximityMinimumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityMinimumSize.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CurvatureNormalAngle"></a>

### *property* Sizing.CurvatureNormalAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvatureNormalAngle.

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

<a id="Sizing.BiasOption"></a>

### *property* Sizing.BiasOption *: Ansys.Mechanical.DataModel.Enums.BiasOptionType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasOption.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ProximitySizeSources"></a>

### *property* Sizing.ProximitySizeSources *: [Ansys.Mechanical.DataModel.Enums.ProximitySFSourcesType](./../../../../Mechanical/DataModel/Enums/ProximitySFSourcesType.md#ProximitySFSourcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximitySizeSources.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Behavior"></a>

### *property* Sizing.Behavior *: [Ansys.Mechanical.DataModel.Enums.SizingBehavior](./../../../../Mechanical/DataModel/Enums/SizingBehavior.md#SizingBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Type"></a>

### *property* Sizing.Type *: [Ansys.Mechanical.DataModel.Enums.SizingType](./../../../../Mechanical/DataModel/Enums/SizingType.md#SizingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.BiasType"></a>

### *property* Sizing.BiasType *: Ansys.Mechanical.DataModel.Enums.BiasType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasType.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Active"></a>

### *property* Sizing.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CaptureCurvature"></a>

### *property* Sizing.CaptureCurvature *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureCurvature.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CaptureProximity"></a>

### *property* Sizing.CaptureProximity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureProximity.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.NamedSelection"></a>

### *property* Sizing.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](./../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.SphereCenter"></a>

### *property* Sizing.SphereCenter *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereCenter.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Location"></a>

### *property* Sizing.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ReverseBias"></a>

### *property* Sizing.ReverseBias *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReverseBias.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.DataModelObjectCategory"></a>

### *property* Sizing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ScopingMethod"></a>

### *property* Sizing.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](./../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Suppressed"></a>

### *property* Sizing.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Children"></a>

### *property* Sizing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Comments"></a>

### *property* Sizing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Figures"></a>

### *property* Sizing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Images"></a>

### *property* Sizing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Sizing.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Properties"></a>

### *property* Sizing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.VisibleProperties"></a>

### *property* Sizing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Sizing.GenerateMesh"></a>

### Sizing.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.RenameBasedOnDefinition"></a>

### Sizing.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Delete"></a>

### Sizing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetChildren"></a>

### Sizing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Sizing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### Sizing.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Activate"></a>

### Sizing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CopyTo"></a>

### Sizing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Duplicate"></a>

### Sizing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GroupAllSimilarChildren"></a>

### Sizing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GroupSimilarObjects"></a>

### Sizing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.PropertyByName"></a>

### Sizing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.PropertyByAPIName"></a>

### Sizing.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CreateParameter"></a>

### Sizing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetParameter"></a>

### Sizing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.RemoveParameter"></a>

### Sizing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
