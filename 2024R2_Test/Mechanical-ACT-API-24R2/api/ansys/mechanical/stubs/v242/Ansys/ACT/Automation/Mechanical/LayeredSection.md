# `LayeredSection`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.LayeredSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LayeredSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#LayeredSection.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#LayeredSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#LayeredSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LayeredSection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#LayeredSection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#LayeredSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#LayeredSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#LayeredSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LayeredSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#LayeredSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#LayeredSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#LayeredSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#LayeredSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#LayeredSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Layers`](#LayeredSection.Layers)                                             | Returns the Layers worksheet associated with LayeredSection   |
| [`CoordinateSystem`](#LayeredSection.CoordinateSystem)                         | Gets or sets the CoordinateSystem.                            |
| [`InternalObject`](#id0)                                                       | Gets the internal object. For advanced usage only.            |
| [`LayerToDisplay`](#LayeredSection.LayerToDisplay)                             | Gets or sets the LayerToDisplay.                              |
| [`LayeredSectionMembraneOffset`](#LayeredSection.LayeredSectionMembraneOffset) | Gets or sets the LayeredSectionMembraneOffset.                |
| [`TotalMass`](#LayeredSection.TotalMass)                                       | Gets the TotalMass.                                           |
| [`TotalThickness`](#LayeredSection.TotalThickness)                             | Gets the TotalThickness.                                      |
| [`OffsetType`](#LayeredSection.OffsetType)                                     | Gets or sets the OffsetType.                                  |
| [`NonlinearEffects`](#LayeredSection.NonlinearEffects)                         | Gets or sets the NonlinearEffects.                            |
| [`Suppressed`](#LayeredSection.Suppressed)                                     | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](#LayeredSection.ThermalStrainEffects)                 | Gets or sets the ThermalStrainEffects.                        |
| [`Location`](#LayeredSection.Location)                                         | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#LayeredSection.DataModelObjectCategory)           | Gets the current DataModelObject’s category.                  |
| [`Children`](#LayeredSection.Children)                                         | Gets the list of children.                                    |
| [`Comments`](#LayeredSection.Comments)                                         | Gets the list of associated comments.                         |
| [`Figures`](#LayeredSection.Figures)                                           | Gets the list of associated figures.                          |
| [`Images`](#LayeredSection.Images)                                             | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                       | Gets the internal object. For advanced usage only.            |
| [`Properties`](#LayeredSection.Properties)                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#LayeredSection.VisibleProperties)                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="LayeredSection.Layers"></a>

### *property* LayeredSection.Layers *: Ansys.ACT.Interfaces.Common.IWorksheet | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the Layers worksheet associated with LayeredSection

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.CoordinateSystem"></a>

### *property* LayeredSection.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.
Accepts/Returns None for Body Coordinate System

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.InternalObject"></a>

### *property* LayeredSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSThicknessAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.LayerToDisplay"></a>

### *property* LayeredSection.LayerToDisplay *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.LayeredSectionMembraneOffset"></a>

### *property* LayeredSection.LayeredSectionMembraneOffset *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayeredSectionMembraneOffset.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.TotalMass"></a>

### *property* LayeredSection.TotalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalMass.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.TotalThickness"></a>

### *property* LayeredSection.TotalThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalThickness.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.OffsetType"></a>

### *property* LayeredSection.OffsetType *: [Ansys.Mechanical.DataModel.Enums.ShellOffsetType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellOffsetType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellOffsetType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetType.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.NonlinearEffects"></a>

### *property* LayeredSection.NonlinearEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Suppressed"></a>

### *property* LayeredSection.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.ThermalStrainEffects"></a>

### *property* LayeredSection.ThermalStrainEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Location"></a>

### *property* LayeredSection.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.DataModelObjectCategory"></a>

### *property* LayeredSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Children"></a>

### *property* LayeredSection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Comments"></a>

### *property* LayeredSection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Figures"></a>

### *property* LayeredSection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Images"></a>

### *property* LayeredSection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* LayeredSection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Properties"></a>

### *property* LayeredSection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.VisibleProperties"></a>

### *property* LayeredSection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LayeredSection.Delete"></a>

### LayeredSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.GetChildren"></a>

### LayeredSection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### LayeredSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.AddComment"></a>

### LayeredSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.AddFigure"></a>

### LayeredSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.AddImage"></a>

### LayeredSection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Activate"></a>

### LayeredSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.CopyTo"></a>

### LayeredSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.Duplicate"></a>

### LayeredSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.GroupAllSimilarChildren"></a>

### LayeredSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.GroupSimilarObjects"></a>

### LayeredSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.PropertyByName"></a>

### LayeredSection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.PropertyByAPIName"></a>

### LayeredSection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.CreateParameter"></a>

### LayeredSection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.GetParameter"></a>

### LayeredSection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LayeredSection.RemoveParameter"></a>

### LayeredSection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

