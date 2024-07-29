# `PSDDisplacement`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDDisplacement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PSDDisplacement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`LoadData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.LoadData)                               | Gets or sets the LoadData.                                    |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`BoundaryCondition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.BoundaryCondition)             | Gets or sets the BoundaryCondition.                           |
| [`Direction`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.Direction)                             | Gets or sets the Direction.                                   |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PSDDisplacement.InternalObject"></a>

### *property* PSDDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPSDLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.LoadData"></a>

### *property* PSDDisplacement.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.DataModelObjectCategory"></a>

### *property* PSDDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.BoundaryCondition"></a>

### *property* PSDDisplacement.BoundaryCondition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Direction"></a>

### *property* PSDDisplacement.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Suppressed"></a>

### *property* PSDDisplacement.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Children"></a>

### *property* PSDDisplacement.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Comments"></a>

### *property* PSDDisplacement.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Figures"></a>

### *property* PSDDisplacement.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Images"></a>

### *property* PSDDisplacement.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PSDDisplacement.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Properties"></a>

### *property* PSDDisplacement.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.VisibleProperties"></a>

### *property* PSDDisplacement.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PSDDisplacement.Delete"></a>

### PSDDisplacement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetChildren"></a>

### PSDDisplacement.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PSDDisplacement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.AddComment"></a>

### PSDDisplacement.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.AddFigure"></a>

### PSDDisplacement.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.AddImage"></a>

### PSDDisplacement.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Activate"></a>

### PSDDisplacement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.CopyTo"></a>

### PSDDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Duplicate"></a>

### PSDDisplacement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GroupAllSimilarChildren"></a>

### PSDDisplacement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GroupSimilarObjects"></a>

### PSDDisplacement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.PropertyByName"></a>

### PSDDisplacement.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.PropertyByAPIName"></a>

### PSDDisplacement.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.CreateParameter"></a>

### PSDDisplacement.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetParameter"></a>

### PSDDisplacement.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.RemoveParameter"></a>

### PSDDisplacement.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

