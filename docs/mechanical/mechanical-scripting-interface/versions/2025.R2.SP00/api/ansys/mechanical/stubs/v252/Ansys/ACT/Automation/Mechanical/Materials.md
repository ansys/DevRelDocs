# `Materials`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Materials"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Materials

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Materials.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Materials.Activate)                                         | Activate the current object.                                                      |
| [`AddComment`](#Materials.AddComment)                                     | Creates a new child Comment.                                                      |
| [`AddFigure`](#Materials.AddFigure)                                       | Creates a new child Figure.                                                       |
| [`AddImage`](#Materials.AddImage)                                         | Creates a new child Image.                                                        |
| [`AddImportedTraceExternalData`](#Materials.AddImportedTraceExternalData) | Creates a new Imported Trace (External Data).                                     |
| [`AddMaterialAssignment`](#Materials.AddMaterialAssignment)               | Creates a new MaterialAssignment                                                  |
| [`AddMaterialCombination`](#Materials.AddMaterialCombination)             | Creates a new MaterialCombination                                                 |
| [`AddMaterialPlot`](#Materials.AddMaterialPlot)                           | Creates a new MaterialPlot                                                        |
| [`CopyTo`](#Materials.CopyTo)                                             | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Materials.CreateParameter)                           | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#Materials.Duplicate)                                       | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Materials.GetChildren)                                   | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Materials.GetParameter)                                 | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Materials.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Materials.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                               |
| [`Import`](#Materials.Import)                                             |                                                                                   |
| [`PropertyByAPIName`](#Materials.PropertyByAPIName)                       | Get a property by its API name.                                                   |
| [`PropertyByName`](#Materials.PropertyByName)                             | Get a property by its unique name.                                                |
| [`RefreshMaterials`](#Materials.RefreshMaterials)                         | Run the RefreshMaterials action.                                                  |
| [`RemoveParameter`](#Materials.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Materials.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Materials.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Materials.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Materials.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Materials.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Materials.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`MaterialAssignments`](#Materials.MaterialAssignments)         | Gets the MaterialAssignments.                                 |
| [`MaterialCount`](#Materials.MaterialCount)                     | Gets the MaterialCount.                                       |
| [`Properties`](#Materials.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Materials.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`VisibleProperties`](#Materials.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Materials.Children"></a>

### *property* Materials.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Comments"></a>

### *property* Materials.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Materials.DataModelObjectCategory"></a>

### *property* Materials.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Figures"></a>

### *property* Materials.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Images"></a>

### *property* Materials.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Materials.InternalObject"></a>

### *property* Materials.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Materials.MaterialAssignments"></a>

### *property* Materials.MaterialAssignments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaterialAssignments.

<!-- !! processed by numpydoc !! -->

<a id="Materials.MaterialCount"></a>

### *property* Materials.MaterialCount *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaterialCount.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Properties"></a>

### *property* Materials.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Materials.ReadOnly"></a>

### *property* Materials.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Materials.VisibleProperties"></a>

### *property* Materials.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Materials.Activate"></a>

### Materials.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddComment"></a>

### Materials.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddFigure"></a>

### Materials.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddImage"></a>

### Materials.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddImportedTraceExternalData"></a>

### Materials.AddImportedTraceExternalData() → Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedTraceGroup

Creates a new Imported Trace (External Data).

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddMaterialAssignment"></a>

### Materials.AddMaterialAssignment() → [Ansys.ACT.Automation.Mechanical.MaterialAssignment](MaterialAssignment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MaterialAssignment)

Creates a new MaterialAssignment

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddMaterialCombination"></a>

### Materials.AddMaterialCombination() → [Ansys.ACT.Automation.Mechanical.MaterialCombination](MaterialCombination.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MaterialCombination)

Creates a new MaterialCombination

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddMaterialPlot"></a>

### Materials.AddMaterialPlot() → [Ansys.ACT.Automation.Mechanical.MaterialPlot](MaterialPlot.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MaterialPlot)

Creates a new MaterialPlot

<!-- !! processed by numpydoc !! -->

<a id="Materials.CopyTo"></a>

### Materials.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Materials.CreateParameter"></a>

### Materials.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Duplicate"></a>

### Materials.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetChildren"></a>

### Materials.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetParameter"></a>

### Materials.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GroupAllSimilarChildren"></a>

### Materials.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GroupSimilarObjects"></a>

### Materials.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Import"></a>

### Materials.Import(materialURI: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.MechanicalEnums.Materials.ImportFormat](../../../Mechanical/DataModel/MechanicalEnums/Materials/ImportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Materials.ImportFormat), settings: [Ansys.Mechanical.Materials.ImportSettings](../../../Mechanical/Materials/ImportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Materials.ImportSettings)) → Iterable[[Ansys.ACT.Automation.Mechanical.Material](Material.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Material)]

<!-- !! processed by numpydoc !! -->

<a id="Materials.PropertyByAPIName"></a>

### Materials.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Materials.PropertyByName"></a>

### Materials.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Materials.RefreshMaterials"></a>

### Materials.RefreshMaterials() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RefreshMaterials action.

<!-- !! processed by numpydoc !! -->

<a id="Materials.RemoveParameter"></a>

### Materials.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

