# `MaterialAssignment`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MaterialAssignment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MaterialAssignment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`CreateMaterialPlot`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.CreateMaterialPlot)           | Run the CreateMaterialPlot action.                                                |
| [`AddCommandSnippet`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`MaterialName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.MaterialName)                                   | Gets or sets the MaterialName.                                |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#id0)                                                             | Gets the internal object. For advanced usage only.            |
| [`Material`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.Material)                                           | Gets or sets the Material.                                    |
| [`ReferenceTemperatureValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.ReferenceTemperatureValue)         | Gets or sets the ReferenceTemperatureValue.                   |
| [`MaterialPolarizationDirection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.MaterialPolarizationDirection) | Gets or sets the MaterialPolarizationDirection.               |
| [`NonlinearEffects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.NonlinearEffects)                           | Gets or sets the NonlinearEffects.                            |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.Suppressed)                                       | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.ThermalStrainEffects)                   | Gets or sets the ThermalStrainEffects.                        |
| [`UseReferenceTemperatureByBody`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.UseReferenceTemperatureByBody) | Gets or sets the UseReferenceTemperatureByBody.               |
| [`FieldCoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.FieldCoordinateSystem)                 | Gets or sets the FieldCoordinateSystem.                       |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.Location)                                           | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.DataModelObjectCategory)             | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.Children)                                           | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.Comments)                                           | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.Figures)                                             | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.Images)                                               | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.ReadOnly)                                           | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#id0)                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.Properties)                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MaterialAssignment.md#MaterialAssignment.VisibleProperties)                         | Gets the list of properties that are visible for this object. |

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

### *property* MaterialAssignment.MaterialPolarizationDirection *: [Ansys.Mechanical.DataModel.Enums.MaterialPolarizationDirection](../../../Mechanical/DataModel/Enums/MaterialPolarizationDirection.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MaterialPolarizationDirection) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* MaterialAssignment.FieldCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FieldCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Location"></a>

### *property* MaterialAssignment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.DataModelObjectCategory"></a>

### *property* MaterialAssignment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Children"></a>

### *property* MaterialAssignment.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Comments"></a>

### *property* MaterialAssignment.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Figures"></a>

### *property* MaterialAssignment.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Images"></a>

### *property* MaterialAssignment.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### MaterialAssignment.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

