# `LegacyThermalCondition`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LegacyThermalCondition"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.LegacyThermalCondition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LegacyThermalCondition.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#LegacyThermalCondition.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#LegacyThermalCondition.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#LegacyThermalCondition.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LegacyThermalCondition.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#LegacyThermalCondition.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#LegacyThermalCondition.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#LegacyThermalCondition.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#LegacyThermalCondition.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#LegacyThermalCondition.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#LegacyThermalCondition.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#LegacyThermalCondition.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LegacyThermalCondition.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#LegacyThermalCondition.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#LegacyThermalCondition.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#LegacyThermalCondition.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#LegacyThermalCondition.Children)                               | Gets the list of children.                                    |
| [`Comments`](#LegacyThermalCondition.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#LegacyThermalCondition.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#LegacyThermalCondition.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#LegacyThermalCondition.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#LegacyThermalCondition.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#LegacyThermalCondition.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#LegacyThermalCondition.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="LegacyThermalCondition.Children"></a>

### *property* LegacyThermalCondition.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Comments"></a>

### *property* LegacyThermalCondition.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.DataModelObjectCategory"></a>

### *property* LegacyThermalCondition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Figures"></a>

### *property* LegacyThermalCondition.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Images"></a>

### *property* LegacyThermalCondition.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.InternalObject"></a>

### *property* LegacyThermalCondition.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSThermalConditionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Properties"></a>

### *property* LegacyThermalCondition.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.VisibleProperties"></a>

### *property* LegacyThermalCondition.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LegacyThermalCondition.Activate"></a>

### LegacyThermalCondition.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.AddComment"></a>

### LegacyThermalCondition.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.AddFigure"></a>

### LegacyThermalCondition.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.AddImage"></a>

### LegacyThermalCondition.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.CopyTo"></a>

### LegacyThermalCondition.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.CreateParameter"></a>

### LegacyThermalCondition.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Delete"></a>

### LegacyThermalCondition.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Duplicate"></a>

### LegacyThermalCondition.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetChildren"></a>

### LegacyThermalCondition.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetParameter"></a>

### LegacyThermalCondition.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GroupAllSimilarChildren"></a>

### LegacyThermalCondition.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GroupSimilarObjects"></a>

### LegacyThermalCondition.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.PropertyByAPIName"></a>

### LegacyThermalCondition.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.PropertyByName"></a>

### LegacyThermalCondition.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.RemoveParameter"></a>

### LegacyThermalCondition.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

