# `GeometryFileContainer`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.GeometryFileContainer

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GeometryFileContainer.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ImportSTL`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.ImportSTL)                             | Run the ImportSTL action.                                                         |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#id0)                                                    | Gets the internal object. For advanced usage only.            |
| [`Statistics`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.Statistics)                           | Gets the Statistics.                                          |
| [`LengthUnits`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.LengthUnits)                         | Gets or sets the LengthUnits.                                 |
| [`ShowAlways`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.ShowAlways)                           | Gets or sets the ShowAlways.                                  |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#id0)                                                    | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeometryFileContainer.md#GeometryFileContainer.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GeometryFileContainer.InternalObject"></a>

### *property* GeometryFileContainer.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryFileContainerAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Statistics"></a>

### *property* GeometryFileContainer.Statistics *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Statistics.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.LengthUnits"></a>

### *property* GeometryFileContainer.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ShowAlways"></a>

### *property* GeometryFileContainer.ShowAlways *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAlways.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Suppressed"></a>

### *property* GeometryFileContainer.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.DataModelObjectCategory"></a>

### *property* GeometryFileContainer.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Children"></a>

### *property* GeometryFileContainer.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Comments"></a>

### *property* GeometryFileContainer.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Figures"></a>

### *property* GeometryFileContainer.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Images"></a>

### *property* GeometryFileContainer.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ReadOnly"></a>

### *property* GeometryFileContainer.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* GeometryFileContainer.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Properties"></a>

### *property* GeometryFileContainer.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.VisibleProperties"></a>

### *property* GeometryFileContainer.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryFileContainer.ImportSTL"></a>

### GeometryFileContainer.ImportSTL()

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Delete"></a>

### GeometryFileContainer.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetChildren"></a>

### GeometryFileContainer.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### GeometryFileContainer.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.AddComment"></a>

### GeometryFileContainer.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.AddFigure"></a>

### GeometryFileContainer.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.AddImage"></a>

### GeometryFileContainer.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Activate"></a>

### GeometryFileContainer.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.CopyTo"></a>

### GeometryFileContainer.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Duplicate"></a>

### GeometryFileContainer.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GroupAllSimilarChildren"></a>

### GeometryFileContainer.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GroupSimilarObjects"></a>

### GeometryFileContainer.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.PropertyByName"></a>

### GeometryFileContainer.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.PropertyByAPIName"></a>

### GeometryFileContainer.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.CreateParameter"></a>

### GeometryFileContainer.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetParameter"></a>

### GeometryFileContainer.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.RemoveParameter"></a>

### GeometryFileContainer.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

