# `PreMeshedCyclicRegion`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PreMeshedCyclicRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PreMeshedCyclicRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PreMeshedCyclicRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PreMeshedCyclicRegion.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#PreMeshedCyclicRegion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PreMeshedCyclicRegion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PreMeshedCyclicRegion.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#PreMeshedCyclicRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PreMeshedCyclicRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PreMeshedCyclicRegion.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PreMeshedCyclicRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`FlipHighLow`](#PreMeshedCyclicRegion.FlipHighLow)                         | Flips the High and Low Boundaries.                                                |
| [`GetChildren`](#PreMeshedCyclicRegion.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PreMeshedCyclicRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PreMeshedCyclicRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PreMeshedCyclicRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PreMeshedCyclicRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PreMeshedCyclicRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PreMeshedCyclicRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryDOFOrientation`](#PreMeshedCyclicRegion.BoundaryDOFOrientation)       | Gets or sets the BoundaryDOFOrientation.                      |
| [`Children`](#PreMeshedCyclicRegion.Children)                                   | Gets the list of children.                                    |
| [`Comments`](#PreMeshedCyclicRegion.Comments)                                   | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#PreMeshedCyclicRegion.CoordinateSystem)                   | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#PreMeshedCyclicRegion.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                  |
| [`Figures`](#PreMeshedCyclicRegion.Figures)                                     | Gets the list of associated figures.                          |
| [`HighBoundaryLocation`](#PreMeshedCyclicRegion.HighBoundaryLocation)           | Gets or sets the HighBoundaryLocation.                        |
| [`Images`](#PreMeshedCyclicRegion.Images)                                       | Gets the list of associated images.                           |
| [`InternalObject`](#PreMeshedCyclicRegion.InternalObject)                       | Gets the internal object. For advanced usage only.            |
| [`Location`](#PreMeshedCyclicRegion.Location)                                   | Gets or sets the Location.                                    |
| [`LowBoundaryLocation`](#PreMeshedCyclicRegion.LowBoundaryLocation)             | Gets or sets the LowBoundaryLocation.                         |
| [`NumberOfSectors`](#PreMeshedCyclicRegion.NumberOfSectors)                     | Gets or sets the NumberOfSectors.                             |
| [`Properties`](#PreMeshedCyclicRegion.Properties)                               | Gets the list of properties for this object.                  |
| [`ReadOnly`](#PreMeshedCyclicRegion.ReadOnly)                                   | Gets or sets the ReadOnly.                                    |
| [`RelativeDistanceTolerance`](#PreMeshedCyclicRegion.RelativeDistanceTolerance) | Gets or sets the RelativeDistanceTolerance.                   |
| [`ScopeMode`](#PreMeshedCyclicRegion.ScopeMode)                                 | Gets the ScopeMode.                                           |
| [`Suppressed`](#PreMeshedCyclicRegion.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PreMeshedCyclicRegion.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PreMeshedCyclicRegion.BoundaryDOFOrientation"></a>

### *property* PreMeshedCyclicRegion.BoundaryDOFOrientation *: [Ansys.Mechanical.DataModel.Enums.SymmetryBoundaryDOFOrientation](../../../Mechanical/DataModel/Enums/SymmetryBoundaryDOFOrientation.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SymmetryBoundaryDOFOrientation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryDOFOrientation.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Children"></a>

### *property* PreMeshedCyclicRegion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Comments"></a>

### *property* PreMeshedCyclicRegion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.CoordinateSystem"></a>

### *property* PreMeshedCyclicRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.DataModelObjectCategory"></a>

### *property* PreMeshedCyclicRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Figures"></a>

### *property* PreMeshedCyclicRegion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.HighBoundaryLocation"></a>

### *property* PreMeshedCyclicRegion.HighBoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Images"></a>

### *property* PreMeshedCyclicRegion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.InternalObject"></a>

### *property* PreMeshedCyclicRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Location"></a>

### *property* PreMeshedCyclicRegion.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.LowBoundaryLocation"></a>

### *property* PreMeshedCyclicRegion.LowBoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.NumberOfSectors"></a>

### *property* PreMeshedCyclicRegion.NumberOfSectors *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSectors.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Properties"></a>

### *property* PreMeshedCyclicRegion.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.ReadOnly"></a>

### *property* PreMeshedCyclicRegion.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.RelativeDistanceTolerance"></a>

### *property* PreMeshedCyclicRegion.RelativeDistanceTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeDistanceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.ScopeMode"></a>

### *property* PreMeshedCyclicRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Suppressed"></a>

### *property* PreMeshedCyclicRegion.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.VisibleProperties"></a>

### *property* PreMeshedCyclicRegion.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PreMeshedCyclicRegion.Activate"></a>

### PreMeshedCyclicRegion.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.AddComment"></a>

### PreMeshedCyclicRegion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.AddFigure"></a>

### PreMeshedCyclicRegion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.AddImage"></a>

### PreMeshedCyclicRegion.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.CopyTo"></a>

### PreMeshedCyclicRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.CreateParameter"></a>

### PreMeshedCyclicRegion.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Delete"></a>

### PreMeshedCyclicRegion.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Duplicate"></a>

### PreMeshedCyclicRegion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.FlipHighLow"></a>

### PreMeshedCyclicRegion.FlipHighLow() → [None](https://docs.python.org/3/library/constants.html#None)

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetChildren"></a>

### PreMeshedCyclicRegion.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetParameter"></a>

### PreMeshedCyclicRegion.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GroupAllSimilarChildren"></a>

### PreMeshedCyclicRegion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GroupSimilarObjects"></a>

### PreMeshedCyclicRegion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.PropertyByAPIName"></a>

### PreMeshedCyclicRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.PropertyByName"></a>

### PreMeshedCyclicRegion.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.RemoveParameter"></a>

### PreMeshedCyclicRegion.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

