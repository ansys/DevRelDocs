# MaterialAssignment

<a id="MaterialAssignment"></a>

### *class* MaterialAssignment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MaterialAssignment.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`CreateMaterialPlot`](#MaterialAssignment.CreateMaterialPlot)           | Run the CreateMaterialPlot action.                                                |
| [`AddCommandSnippet`](#MaterialAssignment.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](#MaterialAssignment.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MaterialAssignment.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MaterialAssignment.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MaterialAssignment.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MaterialAssignment.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MaterialAssignment.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MaterialAssignment.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MaterialAssignment.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MaterialAssignment.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MaterialAssignment.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MaterialAssignment.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MaterialAssignment.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MaterialAssignment.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MaterialAssignment.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`MaterialName`](#MaterialAssignment.MaterialName)                                                                                    | Gets or sets the MaterialName.                                |
| [`InternalObject`](#id0)                                                                                                              | Gets the internal object. For advanced usage only.            |
| [`Material`](Material.md#Material)                                                                                                    | Gets or sets the Material.                                    |
| [`ReferenceTemperatureValue`](#MaterialAssignment.ReferenceTemperatureValue)                                                          | Gets or sets the ReferenceTemperatureValue.                   |
| [`MaterialPolarizationDirection`](./../../../Mechanical/DataModel/Enums/MaterialPolarizationDirection.md#MaterialPolarizationDirection) | Gets or sets the MaterialPolarizationDirection.               |
| [`NonlinearEffects`](#MaterialAssignment.NonlinearEffects)                                                                            | Gets or sets the NonlinearEffects.                            |
| [`Suppressed`](#MaterialAssignment.Suppressed)                                                                                        | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](#MaterialAssignment.ThermalStrainEffects)                                                                    | Gets or sets the ThermalStrainEffects.                        |
| [`UseReferenceTemperatureByBody`](#MaterialAssignment.UseReferenceTemperatureByBody)                                                  | Gets or sets the UseReferenceTemperatureByBody.               |
| [`FieldCoordinateSystem`](#MaterialAssignment.FieldCoordinateSystem)                                                                  | Gets or sets the FieldCoordinateSystem.                       |
| [`Location`](#MaterialAssignment.Location)                                                                                            | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                  |
| [`Children`](#MaterialAssignment.Children)                                                                                            | Gets the list of children.                                    |
| [`Comments`](#MaterialAssignment.Comments)                                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#MaterialAssignment.Figures)                                                                                              | Gets the list of associated figures.                          |
| [`Images`](#MaterialAssignment.Images)                                                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#MaterialAssignment.ReadOnly)                                                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MaterialAssignment.Properties)                                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MaterialAssignment.VisibleProperties)                                                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MaterialAssignment
```

<a id="property-detail"></a>

## Property detail

<a id="MaterialAssignment.MaterialName"></a>

### *property* MaterialAssignment.MaterialName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialName.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.InternalObject"></a>

### *property* MaterialAssignment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialAssignmentAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Material"></a>

### *property* MaterialAssignment.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ReferenceTemperatureValue"></a>

### *property* MaterialAssignment.ReferenceTemperatureValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperatureValue.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.MaterialPolarizationDirection"></a>

### *property* MaterialAssignment.MaterialPolarizationDirection *: [Ansys.Mechanical.DataModel.Enums.MaterialPolarizationDirection](./../../../Mechanical/DataModel/Enums/MaterialPolarizationDirection.md#MaterialPolarizationDirection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialPolarizationDirection.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.NonlinearEffects"></a>

### *property* MaterialAssignment.NonlinearEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Suppressed"></a>

### *property* MaterialAssignment.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ThermalStrainEffects"></a>

### *property* MaterialAssignment.ThermalStrainEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.UseReferenceTemperatureByBody"></a>

### *property* MaterialAssignment.UseReferenceTemperatureByBody *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseReferenceTemperatureByBody.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.FieldCoordinateSystem"></a>

### *property* MaterialAssignment.FieldCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FieldCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Location"></a>

### *property* MaterialAssignment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.DataModelObjectCategory"></a>

### *property* MaterialAssignment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Children"></a>

### *property* MaterialAssignment.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Comments"></a>

### *property* MaterialAssignment.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Figures"></a>

### *property* MaterialAssignment.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Images"></a>

### *property* MaterialAssignment.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ReadOnly"></a>

### *property* MaterialAssignment.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MaterialAssignment.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Properties"></a>

### *property* MaterialAssignment.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.VisibleProperties"></a>

### *property* MaterialAssignment.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaterialAssignment.CreateMaterialPlot"></a>

### MaterialAssignment.CreateMaterialPlot()

Run the CreateMaterialPlot action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.AddCommandSnippet"></a>

### MaterialAssignment.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Delete"></a>

### MaterialAssignment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetChildren"></a>

### MaterialAssignment.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MaterialAssignment.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### MaterialAssignment.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Activate"></a>

### MaterialAssignment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.CopyTo"></a>

### MaterialAssignment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Duplicate"></a>

### MaterialAssignment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GroupAllSimilarChildren"></a>

### MaterialAssignment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GroupSimilarObjects"></a>

### MaterialAssignment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.PropertyByName"></a>

### MaterialAssignment.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.PropertyByAPIName"></a>

### MaterialAssignment.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.CreateParameter"></a>

### MaterialAssignment.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetParameter"></a>

### MaterialAssignment.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.RemoveParameter"></a>

### MaterialAssignment.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
