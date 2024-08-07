# `Inflation`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshControls.Inflation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Inflation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryLocation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.BoundaryLocation)               | Gets or sets the BoundaryLocation.                            |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#id0)                                        | Gets the internal object. For advanced usage only.            |
| [`GrowthRate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.GrowthRate)                           | Gets or sets the GrowthRate.                                  |
| [`InflationAlgorithm`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.InflationAlgorithm)           | Gets or sets the InflationAlgorithm.                          |
| [`InflationOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.InflationOption)                 | Gets or sets the InflationOption.                             |
| [`AspectRatio`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.AspectRatio)                         | Gets or sets the AspectRatio.                                 |
| [`MaximumLayers`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.MaximumLayers)                     | Gets or sets the MaximumLayers.                               |
| [`NumberOfLayers`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.NumberOfLayers)                   | Gets or sets the NumberOfLayers.                              |
| [`TransitionRatio`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.TransitionRatio)                 | Gets or sets the TransitionRatio.                             |
| [`FirstLayerHeight`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.FirstLayerHeight)               | Gets or sets the FirstLayerHeight.                            |
| [`MaximumThickness`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.MaximumThickness)               | Gets or sets the MaximumThickness.                            |
| [`Active`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.Active)                                   | Gets the Active.                                              |
| [`BoundaryNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.BoundaryNamedSelection)   | Gets or sets the BoundaryNamedSelection.                      |
| [`NamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.NamedSelection)                   | Gets or sets the NamedSelection.                              |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`ScopingMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#id0)                                        | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/Inflation.md#Inflation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

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

### *property* Inflation.BoundaryNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.NamedSelection"></a>

### *property* Inflation.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Location"></a>

### *property* Inflation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.DataModelObjectCategory"></a>

### *property* Inflation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.ScopingMethod"></a>

### *property* Inflation.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* Inflation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Figures"></a>

### *property* Inflation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Images"></a>

### *property* Inflation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### Inflation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

