# `GeneralAxisymmetric`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.GeneralAxisymmetric

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GeneralAxisymmetric.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`EndPlane`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.EndPlane)                               | Gets or sets the EndPlane.                                    |
| [`NodalPlanes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.NodalPlanes)                         | Gets or sets the NodalPlanes.                                 |
| [`StartPlane`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.StartPlane)                           | Gets or sets the StartPlane.                                  |
| [`Axis`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.Axis)                                       | Gets or sets the Axis.                                        |
| [`NodalPlanesVisible`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.NodalPlanesVisible)           | Gets or sets the NodalPlanesVisible.                          |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/GeneralAxisymmetric.md#GeneralAxisymmetric.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GeneralAxisymmetric.InternalObject"></a>

### *property* GeneralAxisymmetric.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeneralAxisymmetricAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.EndPlane"></a>

### *property* GeneralAxisymmetric.EndPlane *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndPlane.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.NodalPlanes"></a>

### *property* GeneralAxisymmetric.NodalPlanes *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalPlanes.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.StartPlane"></a>

### *property* GeneralAxisymmetric.StartPlane *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartPlane.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Axis"></a>

### *property* GeneralAxisymmetric.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.NodalPlanesVisible"></a>

### *property* GeneralAxisymmetric.NodalPlanesVisible *: [Ansys.Mechanical.DataModel.Enums.NodalPlanesVisible](../../../Mechanical/DataModel/Enums/NodalPlanesVisible.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NodalPlanesVisible) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalPlanesVisible.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Suppressed"></a>

### *property* GeneralAxisymmetric.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.CoordinateSystem"></a>

### *property* GeneralAxisymmetric.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Location"></a>

### *property* GeneralAxisymmetric.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.DataModelObjectCategory"></a>

### *property* GeneralAxisymmetric.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Children"></a>

### *property* GeneralAxisymmetric.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Comments"></a>

### *property* GeneralAxisymmetric.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Figures"></a>

### *property* GeneralAxisymmetric.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Images"></a>

### *property* GeneralAxisymmetric.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.ReadOnly"></a>

### *property* GeneralAxisymmetric.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* GeneralAxisymmetric.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Properties"></a>

### *property* GeneralAxisymmetric.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.VisibleProperties"></a>

### *property* GeneralAxisymmetric.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeneralAxisymmetric.Delete"></a>

### GeneralAxisymmetric.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetChildren"></a>

### GeneralAxisymmetric.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### GeneralAxisymmetric.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.AddComment"></a>

### GeneralAxisymmetric.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.AddFigure"></a>

### GeneralAxisymmetric.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.AddImage"></a>

### GeneralAxisymmetric.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Activate"></a>

### GeneralAxisymmetric.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.CopyTo"></a>

### GeneralAxisymmetric.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Duplicate"></a>

### GeneralAxisymmetric.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GroupAllSimilarChildren"></a>

### GeneralAxisymmetric.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GroupSimilarObjects"></a>

### GeneralAxisymmetric.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.PropertyByName"></a>

### GeneralAxisymmetric.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.PropertyByAPIName"></a>

### GeneralAxisymmetric.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.CreateParameter"></a>

### GeneralAxisymmetric.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetParameter"></a>

### GeneralAxisymmetric.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.RemoveParameter"></a>

### GeneralAxisymmetric.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

