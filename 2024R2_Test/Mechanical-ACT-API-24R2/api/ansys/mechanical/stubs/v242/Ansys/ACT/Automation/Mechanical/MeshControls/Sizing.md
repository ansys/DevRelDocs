# `Sizing`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshControls.Sizing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Sizing.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `GenerateMesh`            | Generate the Mesh.                                                                |
| `RenameBasedOnDefinition` | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `BodyOfInfluence`         | Gets the BodyOfInfluence.                                     |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `BiasGrowthRate`          | Gets or sets the BiasGrowthRate.                              |
| `NumberOfDivisions`       | Gets or sets the NumberOfDivisions.                           |
| `GrowthRate`              | Gets or sets the GrowthRate.                                  |
| `BiasFactor`              | Gets or sets the BiasFactor.                                  |
| `ElementSize`             | Gets or sets the ElementSize.                                 |
| `SphereRadius`            | Gets or sets the SphereRadius.                                |
| `DefeatureSize`           | Gets or sets the DefeatureSize.                               |
| `LocalMinimumSize`        | Gets or sets the LocalMinimumSize.                            |
| `ProximityGapFactor`      | Gets or sets the ProximityGapFactor.                          |
| `ProximityMinimumSize`    | Gets or sets the ProximityMinimumSize.                        |
| `CurvatureNormalAngle`    | Gets or sets the CurvatureNormalAngle.                        |
| `OriginX`                 | Gets the OriginX.                                             |
| `OriginY`                 | Gets the OriginY.                                             |
| `OriginZ`                 | Gets the OriginZ.                                             |
| `BiasOption`              | Gets or sets the BiasOption.                                  |
| `ProximitySizeSources`    | Gets or sets the ProximitySizeSources.                        |
| `Behavior`                | Gets or sets the Behavior.                                    |
| `Type`                    | Gets or sets the Type.                                        |
| `BiasType`                | Gets or sets the BiasType.                                    |
| `Active`                  | Gets the Active.                                              |
| `CaptureCurvature`        | Gets or sets the CaptureCurvature.                            |
| `CaptureProximity`        | Gets or sets the CaptureProximity.                            |
| `NamedSelection`          | Gets or sets the NamedSelection.                              |
| `SphereCenter`            | Gets or sets the SphereCenter.                                |
| `Location`                | Gets or sets the Location.                                    |
| `ReverseBias`             | Gets or sets the ReverseBias.                                 |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `ScopingMethod`           | Gets or sets the ScopingMethod.                               |
| `Suppressed`              | Gets or sets the Suppressed.                                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* Sizing.BodyOfInfluence *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BodyOfInfluence.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.BiasGrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasGrowthRate.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.NumberOfDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfDivisions.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.BiasFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasFactor.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.SphereRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.DefeatureSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeatureSize.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.LocalMinimumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocalMinimumSize.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.ProximityGapFactor *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityGapFactor.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.ProximityMinimumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityMinimumSize.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.CurvatureNormalAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvatureNormalAngle.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.OriginX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginX.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.OriginY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginY.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.OriginZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginZ.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.BiasOption *: Ansys.Mechanical.DataModel.Enums.BiasOptionType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasOption.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.ProximitySizeSources *: [Ansys.Mechanical.DataModel.Enums.ProximitySFSourcesType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ProximitySFSourcesType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProximitySFSourcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximitySizeSources.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.Behavior *: [Ansys.Mechanical.DataModel.Enums.SizingBehavior](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SizingBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SizingBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.Type *: [Ansys.Mechanical.DataModel.Enums.SizingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SizingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SizingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.BiasType *: Ansys.Mechanical.DataModel.Enums.BiasType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasType.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.CaptureCurvature *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureCurvature.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.CaptureProximity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureProximity.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.SphereCenter *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereCenter.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.ReverseBias *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReverseBias.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Sizing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### Sizing.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

### Sizing.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### Sizing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Sizing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Sizing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Sizing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Sizing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Sizing.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### Sizing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Sizing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Sizing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Sizing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Sizing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Sizing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Sizing.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### Sizing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Sizing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Sizing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

