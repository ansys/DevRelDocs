# `ConstructionPoint`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionPoint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ConstructionPoint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#id1)                                                   | Sets the point location.                                                          |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#id2)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#id2)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`LocationX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.LocationX)                             | Gets or sets the LocationX.                                   |
| [`LocationY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.LocationY)                             | Gets or sets the LocationY.                                   |
| [`LocationZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.LocationZ)                             | Gets or sets the LocationZ.                                   |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#ConstructionPoint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

### Attributes

| Name |
| ------------------------------------------------------------------------------------------------- |
| [`SetLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionPoint.md#id1) |

<a id="property-detail"></a>

## Property detail

<a id="ConstructionPoint.InternalObject"></a>

### *property* ConstructionPoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConstructionPointAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.LocationX"></a>

### *property* ConstructionPoint.LocationX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationX.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.LocationY"></a>

### *property* ConstructionPoint.LocationY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationY.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.LocationZ"></a>

### *property* ConstructionPoint.LocationZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationZ.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.DataModelObjectCategory"></a>

### *property* ConstructionPoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Children"></a>

### *property* ConstructionPoint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Comments"></a>

### *property* ConstructionPoint.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Figures"></a>

### *property* ConstructionPoint.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Images"></a>

### *property* ConstructionPoint.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ConstructionPoint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Properties"></a>

### *property* ConstructionPoint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.VisibleProperties"></a>

### *property* ConstructionPoint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="attribute-detail"></a>

## Attribute detail

<a id="ConstructionPoint.SetLocation"></a>

### ConstructionPoint.SetLocation

<a id="method-detail"></a>

## Method detail

<a id="id1"></a>

### ConstructionPoint.SetLocation(newvalue: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None))

Sets the point location.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Delete"></a>

### ConstructionPoint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetChildren"></a>

### ConstructionPoint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### ConstructionPoint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.AddComment"></a>

### ConstructionPoint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.AddFigure"></a>

### ConstructionPoint.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.AddImage"></a>

### ConstructionPoint.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Activate"></a>

### ConstructionPoint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.CopyTo"></a>

### ConstructionPoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Duplicate"></a>

### ConstructionPoint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GroupAllSimilarChildren"></a>

### ConstructionPoint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GroupSimilarObjects"></a>

### ConstructionPoint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.PropertyByName"></a>

### ConstructionPoint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.PropertyByAPIName"></a>

### ConstructionPoint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.CreateParameter"></a>

### ConstructionPoint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetParameter"></a>

### ConstructionPoint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.RemoveParameter"></a>

### ConstructionPoint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

