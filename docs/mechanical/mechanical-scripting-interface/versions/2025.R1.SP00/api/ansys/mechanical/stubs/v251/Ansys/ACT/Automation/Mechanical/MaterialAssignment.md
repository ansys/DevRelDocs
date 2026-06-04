# `MaterialAssignment`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MaterialAssignment"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MaterialAssignment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MaterialAssignment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MaterialAssignment.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#MaterialAssignment.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#MaterialAssignment.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MaterialAssignment.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MaterialAssignment.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MaterialAssignment.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateMaterialPlot`](#MaterialAssignment.CreateMaterialPlot)           | Run the CreateMaterialPlot action.                                                |
| [`CreateParameter`](#MaterialAssignment.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MaterialAssignment.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MaterialAssignment.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MaterialAssignment.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MaterialAssignment.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MaterialAssignment.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MaterialAssignment.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MaterialAssignment.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MaterialAssignment.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MaterialAssignment.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#MaterialAssignment.Children)                                           | Gets the list of children.                                    |
| [`Comments`](#MaterialAssignment.Comments)                                           | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#MaterialAssignment.DataModelObjectCategory)             | Gets the current DataModelObject’s category.                  |
| [`FieldCoordinateSystem`](#MaterialAssignment.FieldCoordinateSystem)                 | Gets or sets the FieldCoordinateSystem.                       |
| [`Figures`](#MaterialAssignment.Figures)                                             | Gets the list of associated figures.                          |
| [`Images`](#MaterialAssignment.Images)                                               | Gets the list of associated images.                           |
| [`InternalObject`](#MaterialAssignment.InternalObject)                               | Gets the internal object. For advanced usage only.            |
| [`Location`](#MaterialAssignment.Location)                                           | Gets or sets the Location.                                    |
| [`Material`](#MaterialAssignment.Material)                                           | Gets or sets the Material.                                    |
| [`MaterialName`](#MaterialAssignment.MaterialName)                                   | Gets or sets the MaterialName.                                |
| [`MaterialPolarizationDirection`](#MaterialAssignment.MaterialPolarizationDirection) | Gets or sets the MaterialPolarizationDirection.               |
| [`NonlinearEffects`](#MaterialAssignment.NonlinearEffects)                           | Gets or sets the NonlinearEffects.                            |
| [`Properties`](#MaterialAssignment.Properties)                                       | Gets the list of properties for this object.                  |
| [`ReadOnly`](#MaterialAssignment.ReadOnly)                                           | Gets or sets the ReadOnly.                                    |
| [`ReferenceTemperatureValue`](#MaterialAssignment.ReferenceTemperatureValue)         | Gets or sets the ReferenceTemperatureValue.                   |
| [`Suppressed`](#MaterialAssignment.Suppressed)                                       | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](#MaterialAssignment.ThermalStrainEffects)                   | Gets or sets the ThermalStrainEffects.                        |
| [`UseReferenceTemperatureByBody`](#MaterialAssignment.UseReferenceTemperatureByBody) | Gets or sets the UseReferenceTemperatureByBody.               |
| [`VisibleProperties`](#MaterialAssignment.VisibleProperties)                         | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MaterialAssignment.Children"></a>

### *property* MaterialAssignment.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Comments"></a>

### *property* MaterialAssignment.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.DataModelObjectCategory"></a>

### *property* MaterialAssignment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.FieldCoordinateSystem"></a>

### *property* MaterialAssignment.FieldCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FieldCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Figures"></a>

### *property* MaterialAssignment.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Images"></a>

### *property* MaterialAssignment.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.InternalObject"></a>

### *property* MaterialAssignment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialAssignmentAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Location"></a>

### *property* MaterialAssignment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Material"></a>

### *property* MaterialAssignment.Material *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.MaterialName"></a>

### *property* MaterialAssignment.MaterialName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialName.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.MaterialPolarizationDirection"></a>

### *property* MaterialAssignment.MaterialPolarizationDirection *: [Ansys.Mechanical.DataModel.Enums.MaterialPolarizationDirection](../../../Mechanical/DataModel/Enums/MaterialPolarizationDirection.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MaterialPolarizationDirection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialPolarizationDirection.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.NonlinearEffects"></a>

### *property* MaterialAssignment.NonlinearEffects *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Properties"></a>

### *property* MaterialAssignment.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ReadOnly"></a>

### *property* MaterialAssignment.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ReferenceTemperatureValue"></a>

### *property* MaterialAssignment.ReferenceTemperatureValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperatureValue.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Suppressed"></a>

### *property* MaterialAssignment.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ThermalStrainEffects"></a>

### *property* MaterialAssignment.ThermalStrainEffects *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.UseReferenceTemperatureByBody"></a>

### *property* MaterialAssignment.UseReferenceTemperatureByBody *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseReferenceTemperatureByBody.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.VisibleProperties"></a>

### *property* MaterialAssignment.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaterialAssignment.Activate"></a>

### MaterialAssignment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.AddCommandSnippet"></a>

### MaterialAssignment.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.AddComment"></a>

### MaterialAssignment.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.AddFigure"></a>

### MaterialAssignment.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.AddImage"></a>

### MaterialAssignment.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.CopyTo"></a>

### MaterialAssignment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.CreateMaterialPlot"></a>

### MaterialAssignment.CreateMaterialPlot()

Run the CreateMaterialPlot action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.CreateParameter"></a>

### MaterialAssignment.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Delete"></a>

### MaterialAssignment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Duplicate"></a>

### MaterialAssignment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetChildren"></a>

### MaterialAssignment.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetParameter"></a>

### MaterialAssignment.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GroupAllSimilarChildren"></a>

### MaterialAssignment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GroupSimilarObjects"></a>

### MaterialAssignment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.PropertyByAPIName"></a>

### MaterialAssignment.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.PropertyByName"></a>

### MaterialAssignment.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.RemoveParameter"></a>

### MaterialAssignment.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

