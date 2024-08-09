# `ElementOrientation`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ElementOrientation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElementOrientation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateOrientations`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.GenerateOrientations)       | Runs the GenerateOrientations acton.                                              |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#id0)                                                     | Gets the internal object. For advanced usage only.            |
| [`AxisEdgeOrientation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.AxisEdgeOrientation)             | Gets or sets the AxisEdgeOrientation.                         |
| [`AxisSurfaceOrientation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.AxisSurfaceOrientation)       | Gets or sets the AxisSurfaceOrientation.                      |
| [`OrientationGuideDefinedBy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.OrientationGuideDefinedBy) | Gets or sets the OrientationGuideDefinedBy.                   |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.CoordinateSystem)                   | Gets or sets the CoordinateSystem.                            |
| [`BodyLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.BodyLocation)                           | Gets or sets the BodyLocation.                                |
| [`EdgeLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.EdgeLocation)                           | Gets or sets the EdgeLocation.                                |
| [`SurfaceLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.SurfaceLocation)                     | Gets or sets the SurfaceLocation.                             |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.DataModelObjectCategory)     | Gets the current DataModelObject's category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.Children)                                   | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.Comments)                                   | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.Figures)                                     | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.Images)                                       | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.ReadOnly)                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#id0)                                                     | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.Properties)                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ElementOrientation.md#ElementOrientation.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ElementOrientation.InternalObject"></a>

### *property* ElementOrientation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSElementOrientationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AxisEdgeOrientation"></a>

### *property* ElementOrientation.AxisEdgeOrientation *: [Ansys.Mechanical.DataModel.Enums.ElementOrientationAxisType](../../../Mechanical/DataModel/Enums/ElementOrientationAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ElementOrientationAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AxisEdgeOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AxisSurfaceOrientation"></a>

### *property* ElementOrientation.AxisSurfaceOrientation *: [Ansys.Mechanical.DataModel.Enums.ElementOrientationAxisType](../../../Mechanical/DataModel/Enums/ElementOrientationAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ElementOrientationAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AxisSurfaceOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.OrientationGuideDefinedBy"></a>

### *property* ElementOrientation.OrientationGuideDefinedBy *: [Ansys.Mechanical.DataModel.Enums.ElementOrientationGuide](../../../Mechanical/DataModel/Enums/ElementOrientationGuide.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ElementOrientationGuide) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OrientationGuideDefinedBy.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Suppressed"></a>

### *property* ElementOrientation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.CoordinateSystem"></a>

### *property* ElementOrientation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.BodyLocation"></a>

### *property* ElementOrientation.BodyLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodyLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.EdgeLocation"></a>

### *property* ElementOrientation.EdgeLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.SurfaceLocation"></a>

### *property* ElementOrientation.SurfaceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SurfaceLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.DataModelObjectCategory"></a>

### *property* ElementOrientation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Children"></a>

### *property* ElementOrientation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Comments"></a>

### *property* ElementOrientation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Figures"></a>

### *property* ElementOrientation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Images"></a>

### *property* ElementOrientation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.ReadOnly"></a>

### *property* ElementOrientation.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ElementOrientation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Properties"></a>

### *property* ElementOrientation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.VisibleProperties"></a>

### *property* ElementOrientation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementOrientation.GenerateOrientations"></a>

### ElementOrientation.GenerateOrientations()

Runs the GenerateOrientations acton.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Delete"></a>

### ElementOrientation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetChildren"></a>

### ElementOrientation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ElementOrientation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AddComment"></a>

### ElementOrientation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AddFigure"></a>

### ElementOrientation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AddImage"></a>

### ElementOrientation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Activate"></a>

### ElementOrientation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.CopyTo"></a>

### ElementOrientation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Duplicate"></a>

### ElementOrientation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GroupAllSimilarChildren"></a>

### ElementOrientation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GroupSimilarObjects"></a>

### ElementOrientation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.PropertyByName"></a>

### ElementOrientation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.PropertyByAPIName"></a>

### ElementOrientation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.CreateParameter"></a>

### ElementOrientation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetParameter"></a>

### ElementOrientation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.RemoveParameter"></a>

### ElementOrientation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

