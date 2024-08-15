# `Washer`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshControls.Washer

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Washer.

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
|-------------------------------------|---------------------------------------------------------------|
| `NumberOfWasherLayers`              | NumberOfWasherLayers property.                                |
| `WasherMethod`                      | WasherMethod property.                                        |
| `WasherType`                        | WasherType property.                                          |
| `LayerTransitionType`               | LayerTransitionType property.                                 |
| `NumberOfWasherDivisions`           | NumberOfWasherDivisions property.                             |
| `MinimumNumberOfWasherDivisions`    | MinimumNumberOfWasherDivisions property.                      |
| `FactorOfDiameter`                  | FactorOfDiameter property.                                    |
| `WasherLayerHeight`                 | WasherLayerHeight property.                                   |
| `GrowthRate`                        | GrowthRate property.                                          |
| `WasherDefeatureProximityTolerance` | WasherDefeatureProximityTolerance property.                   |
| `WasherAutoDefeature`               | WasherAutoDefeature property.                                 |
| `InternalObject`                    | Gets the internal object. For advanced usage only.            |
| `NamedSelection`                    | Gets or sets the NamedSelection.                              |
| `Location`                          | Gets or sets the Location.                                    |
| `DataModelObjectCategory`           | Gets the current DataModelObject's category.                  |
| `ScopingMethod`                     | Gets or sets the ScopingMethod.                               |
| `Suppressed`                        | Gets or sets the Suppressed.                                  |
| `Children`                          | Gets the list of children.                                    |
| `Comments`                          | Gets the list of associated comments.                         |
| `Figures`                           | Gets the list of associated figures.                          |
| `Images`                            | Gets the list of associated images.                           |
| `InternalObject`                    | Gets the internal object. For advanced usage only.            |
| `Properties`                        | Gets the list of properties for this object.                  |
| `VisibleProperties`                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* Washer.NumberOfWasherLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfWasherLayers property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.WasherMethod *: Ansys.Mechanical.DataModel.Enums.WasherMethod | [None](https://docs.python.org/3/library/constants.html#None)*

WasherMethod property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.WasherType *: Ansys.Mechanical.DataModel.Enums.WasherType | [None](https://docs.python.org/3/library/constants.html#None)*

WasherType property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.LayerTransitionType *: Ansys.Mechanical.DataModel.Enums.LayerTransitionType | [None](https://docs.python.org/3/library/constants.html#None)*

LayerTransitionType property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.NumberOfWasherDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfWasherDivisions property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.MinimumNumberOfWasherDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

MinimumNumberOfWasherDivisions property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.FactorOfDiameter *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

FactorOfDiameter property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.WasherLayerHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

WasherLayerHeight property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

GrowthRate property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.WasherDefeatureProximityTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

WasherDefeatureProximityTolerance property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.WasherAutoDefeature *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

WasherAutoDefeature property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Washer.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* Washer.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* Washer.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Washer.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* Washer.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Washer.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Washer.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Washer.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Washer.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Washer.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Washer.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Washer.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### Washer.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

### Washer.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### Washer.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Washer.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Washer.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Washer.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Washer.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Washer.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### Washer.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Washer.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Washer.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Washer.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Washer.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Washer.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Washer.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### Washer.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Washer.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Washer.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

