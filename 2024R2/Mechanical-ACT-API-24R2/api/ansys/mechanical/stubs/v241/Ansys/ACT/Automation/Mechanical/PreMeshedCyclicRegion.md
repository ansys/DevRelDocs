# `PreMeshedCyclicRegion`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.PreMeshedCyclicRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PreMeshedCyclicRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`FlipHighLow`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.FlipHighLow)                         | Flips the High and Low Boundaries.                                                |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#id0)                                                        | Gets the internal object. For advanced usage only.            |
| [`RelativeDistanceTolerance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.RelativeDistanceTolerance) | Gets or sets the RelativeDistanceTolerance.                   |
| [`NumberOfSectors`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.NumberOfSectors)                     | Gets or sets the NumberOfSectors.                             |
| [`BoundaryDOFOrientation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.BoundaryDOFOrientation)       | Gets or sets the BoundaryDOFOrientation.                      |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.DataModelObjectCategory)     | Gets the current DataModelObject's category.                  |
| [`ScopeMode`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.ScopeMode)                                 | Gets the ScopeMode.                                           |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.CoordinateSystem)                   | Gets or sets the CoordinateSystem.                            |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.Location)                                   | Gets or sets the Location.                                    |
| [`HighBoundaryLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.HighBoundaryLocation)           | Gets or sets the HighBoundaryLocation.                        |
| [`LowBoundaryLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.LowBoundaryLocation)             | Gets or sets the LowBoundaryLocation.                         |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.Children)                                   | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.Comments)                                   | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.Figures)                                     | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.Images)                                       | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.ReadOnly)                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#id0)                                                        | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.Properties)                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreMeshedCyclicRegion.md#PreMeshedCyclicRegion.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PreMeshedCyclicRegion.InternalObject"></a>

### *property* PreMeshedCyclicRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.RelativeDistanceTolerance"></a>

### *property* PreMeshedCyclicRegion.RelativeDistanceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeDistanceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.NumberOfSectors"></a>

### *property* PreMeshedCyclicRegion.NumberOfSectors *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSectors.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.BoundaryDOFOrientation"></a>

### *property* PreMeshedCyclicRegion.BoundaryDOFOrientation *: [Ansys.Mechanical.DataModel.Enums.SymmetryBoundaryDOFOrientation](../../../Mechanical/DataModel/Enums/SymmetryBoundaryDOFOrientation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SymmetryBoundaryDOFOrientation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryDOFOrientation.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.DataModelObjectCategory"></a>

### *property* PreMeshedCyclicRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.ScopeMode"></a>

### *property* PreMeshedCyclicRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Suppressed"></a>

### *property* PreMeshedCyclicRegion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.CoordinateSystem"></a>

### *property* PreMeshedCyclicRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Location"></a>

### *property* PreMeshedCyclicRegion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.HighBoundaryLocation"></a>

### *property* PreMeshedCyclicRegion.HighBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.LowBoundaryLocation"></a>

### *property* PreMeshedCyclicRegion.LowBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Children"></a>

### *property* PreMeshedCyclicRegion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Comments"></a>

### *property* PreMeshedCyclicRegion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Figures"></a>

### *property* PreMeshedCyclicRegion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Images"></a>

### *property* PreMeshedCyclicRegion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.ReadOnly"></a>

### *property* PreMeshedCyclicRegion.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PreMeshedCyclicRegion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Properties"></a>

### *property* PreMeshedCyclicRegion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.VisibleProperties"></a>

### *property* PreMeshedCyclicRegion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PreMeshedCyclicRegion.FlipHighLow"></a>

### PreMeshedCyclicRegion.FlipHighLow()

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Delete"></a>

### PreMeshedCyclicRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetChildren"></a>

### PreMeshedCyclicRegion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PreMeshedCyclicRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.AddComment"></a>

### PreMeshedCyclicRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.AddFigure"></a>

### PreMeshedCyclicRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.AddImage"></a>

### PreMeshedCyclicRegion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Activate"></a>

### PreMeshedCyclicRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.CopyTo"></a>

### PreMeshedCyclicRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Duplicate"></a>

### PreMeshedCyclicRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GroupAllSimilarChildren"></a>

### PreMeshedCyclicRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GroupSimilarObjects"></a>

### PreMeshedCyclicRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.PropertyByName"></a>

### PreMeshedCyclicRegion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.PropertyByAPIName"></a>

### PreMeshedCyclicRegion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.CreateParameter"></a>

### PreMeshedCyclicRegion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetParameter"></a>

### PreMeshedCyclicRegion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.RemoveParameter"></a>

### PreMeshedCyclicRegion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

