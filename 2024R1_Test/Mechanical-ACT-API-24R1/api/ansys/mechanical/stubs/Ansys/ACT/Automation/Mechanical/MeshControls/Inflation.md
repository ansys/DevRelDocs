# Inflation

<a id="Inflation"></a>

### *class* Inflation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Inflation.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#Inflation.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#Inflation.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#Inflation.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Inflation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Inflation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Inflation.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Inflation.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Inflation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Inflation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Inflation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Inflation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Inflation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Inflation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Inflation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Inflation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Inflation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryLocation`](#Inflation.BoundaryLocation)                                                                      | Gets or sets the BoundaryLocation.                            |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`GrowthRate`](#Inflation.GrowthRate)                                                                                  | Gets or sets the GrowthRate.                                  |
| [`InflationAlgorithm`](#Inflation.InflationAlgorithm)                                                                  | Gets or sets the InflationAlgorithm.                          |
| [`InflationOption`](#Inflation.InflationOption)                                                                        | Gets or sets the InflationOption.                             |
| [`AspectRatio`](#Inflation.AspectRatio)                                                                                | Gets or sets the AspectRatio.                                 |
| [`MaximumLayers`](#Inflation.MaximumLayers)                                                                            | Gets or sets the MaximumLayers.                               |
| [`NumberOfLayers`](#Inflation.NumberOfLayers)                                                                          | Gets or sets the NumberOfLayers.                              |
| [`TransitionRatio`](#Inflation.TransitionRatio)                                                                        | Gets or sets the TransitionRatio.                             |
| [`FirstLayerHeight`](#Inflation.FirstLayerHeight)                                                                      | Gets or sets the FirstLayerHeight.                            |
| [`MaximumThickness`](#Inflation.MaximumThickness)                                                                      | Gets or sets the MaximumThickness.                            |
| [`Active`](#Inflation.Active)                                                                                          | Gets the Active.                                              |
| [`BoundaryNamedSelection`](#Inflation.BoundaryNamedSelection)                                                          | Gets or sets the BoundaryNamedSelection.                      |
| [`NamedSelection`](./../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#Inflation.Location)                                                                                      | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#Inflation.ScopingMethod)                                                                            | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Inflation.Suppressed)                                                                                  | Gets or sets the Suppressed.                                  |
| [`Children`](#Inflation.Children)                                                                                      | Gets the list of children.                                    |
| [`Comments`](#Inflation.Comments)                                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#Inflation.Figures)                                                                                        | Gets the list of associated figures.                          |
| [`Images`](#Inflation.Images)                                                                                          | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Inflation.Properties)                                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Inflation.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Inflation
```

<a id="property-detail"></a>

## Property detail

<a id="Inflation.BoundaryLocation"></a>

### *property* Inflation.BoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.InternalObject"></a>

### *property* Inflation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GrowthRate"></a>

### *property* Inflation.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.InflationAlgorithm"></a>

### *property* Inflation.InflationAlgorithm *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflationAlgorithm.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.InflationOption"></a>

### *property* Inflation.InflationOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflationOption.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.AspectRatio"></a>

### *property* Inflation.AspectRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AspectRatio.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.MaximumLayers"></a>

### *property* Inflation.MaximumLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumLayers.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.NumberOfLayers"></a>

### *property* Inflation.NumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.TransitionRatio"></a>

### *property* Inflation.TransitionRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransitionRatio.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.FirstLayerHeight"></a>

### *property* Inflation.FirstLayerHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FirstLayerHeight.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.MaximumThickness"></a>

### *property* Inflation.MaximumThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumThickness.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Active"></a>

### *property* Inflation.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.BoundaryNamedSelection"></a>

### *property* Inflation.BoundaryNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](./../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.NamedSelection"></a>

### *property* Inflation.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](./../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Location"></a>

### *property* Inflation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.DataModelObjectCategory"></a>

### *property* Inflation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.ScopingMethod"></a>

### *property* Inflation.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](./../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Suppressed"></a>

### *property* Inflation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Children"></a>

### *property* Inflation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Comments"></a>

### *property* Inflation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Figures"></a>

### *property* Inflation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Images"></a>

### *property* Inflation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Inflation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Properties"></a>

### *property* Inflation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.VisibleProperties"></a>

### *property* Inflation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Inflation.GenerateMesh"></a>

### Inflation.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.RenameBasedOnDefinition"></a>

### Inflation.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Delete"></a>

### Inflation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetChildren"></a>

### Inflation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Inflation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### Inflation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Activate"></a>

### Inflation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.CopyTo"></a>

### Inflation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Duplicate"></a>

### Inflation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GroupAllSimilarChildren"></a>

### Inflation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GroupSimilarObjects"></a>

### Inflation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.PropertyByName"></a>

### Inflation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.PropertyByAPIName"></a>

### Inflation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.CreateParameter"></a>

### Inflation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetParameter"></a>

### Inflation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.RemoveParameter"></a>

### Inflation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
