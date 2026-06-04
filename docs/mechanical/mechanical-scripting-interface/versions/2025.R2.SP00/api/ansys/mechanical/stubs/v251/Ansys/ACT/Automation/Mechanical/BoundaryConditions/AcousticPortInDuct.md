# `AcousticPortInDuct`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPortInDuct"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPortInDuct

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticPortInDuct.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticPortInDuct.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AcousticPortInDuct.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticPortInDuct.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticPortInDuct.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AcousticPortInDuct.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticPortInDuct.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AcousticPortInDuct.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticPortInDuct.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AcousticPortInDuct.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticPortInDuct.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticPortInDuct.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticPortInDuct.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AcousticPortInDuct.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AcousticPortInDuct.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticPortInDuct.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticPortInDuct.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`AnglePhi`](#AcousticPortInDuct.AnglePhi)                                                                         | Gets or sets the AnglePhi.                                     |
| [`AngleTheta`](#AcousticPortInDuct.AngleTheta)                                                                     | Gets or sets the AngleTheta.                                   |
| [`Children`](#AcousticPortInDuct.Children)                                                                         | Gets the list of children.                                     |
| [`Comments`](#AcousticPortInDuct.Comments)                                                                         | Gets the list of associated comments.                          |
| [`CoordinateSystem`](#AcousticPortInDuct.CoordinateSystem)                                                         | Gets or sets the CoordinateSystem.                             |
| [`DataModelObjectCategory`](#AcousticPortInDuct.DataModelObjectCategory)                                           | Gets the current DataModelObject’s category.                   |
| [`Figures`](#AcousticPortInDuct.Figures)                                                                           | Gets the list of associated figures.                           |
| [`Height`](#AcousticPortInDuct.Height)                                                                             | Gets or sets the Height.                                       |
| [`Images`](#AcousticPortInDuct.Images)                                                                             | Gets the list of associated images.                            |
| [`InternalObject`](#AcousticPortInDuct.InternalObject)                                                             | Gets the internal object. For advanced usage only.             |
| [`Location`](#AcousticPortInDuct.Location)                                                                         | Gets or sets the Location.                                     |
| [`ModeIndexForPressureVariationAlongTheAzimuth`](#AcousticPortInDuct.ModeIndexForPressureVariationAlongTheAzimuth) | Gets or sets the ModeIndexForPressureVariationAlongTheAzimuth. |
| [`ModeIndexForPressureVariationAlongTheHeight`](#AcousticPortInDuct.ModeIndexForPressureVariationAlongTheHeight)   | Gets or sets the ModeIndexForPressureVariationAlongTheHeight.  |
| [`ModeIndexForPressureVariationAlongTheRadii`](#AcousticPortInDuct.ModeIndexForPressureVariationAlongTheRadii)     | Gets or sets the ModeIndexForPressureVariationAlongTheRadii.   |
| [`ModeIndexForPressureVariationAlongTheWidth`](#AcousticPortInDuct.ModeIndexForPressureVariationAlongTheWidth)     | Gets or sets the ModeIndexForPressureVariationAlongTheWidth.   |
| [`PhaseAngle`](#AcousticPortInDuct.PhaseAngle)                                                                     | Gets or sets the PhaseAngle.                                   |
| [`PortAttribution`](#AcousticPortInDuct.PortAttribution)                                                           | Gets or sets the PortAttribution.                              |
| [`PortSelection`](#AcousticPortInDuct.PortSelection)                                                               | Gets or sets the PortSelection.                                |
| [`PressureAmplitude`](#AcousticPortInDuct.PressureAmplitude)                                                       | Gets or sets the PressureAmplitude.                            |
| [`Properties`](#AcousticPortInDuct.Properties)                                                                     | Gets the list of properties for this object.                   |
| [`Radius`](#AcousticPortInDuct.Radius)                                                                             | Gets or sets the Radius.                                       |
| [`ReadOnly`](#AcousticPortInDuct.ReadOnly)                                                                         | Gets or sets the ReadOnly.                                     |
| [`SharedRefBody`](#AcousticPortInDuct.SharedRefBody)                                                               | Gets or sets the SharedRefBody.                                |
| [`Suppressed`](#AcousticPortInDuct.Suppressed)                                                                     | Gets or sets the Suppressed.                                   |
| [`VisibleProperties`](#AcousticPortInDuct.VisibleProperties)                                                       | Gets the list of properties that are visible for this object.  |
| [`WaveType`](#AcousticPortInDuct.WaveType)                                                                         | Gets or sets the WaveType.                                     |
| [`Width`](#AcousticPortInDuct.Width)                                                                               | Gets or sets the Width.                                        |

<a id="property-detail"></a>

## Property detail

<a id="AcousticPortInDuct.AnglePhi"></a>

### *property* AcousticPortInDuct.AnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.AngleTheta"></a>

### *property* AcousticPortInDuct.AngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Children"></a>

### *property* AcousticPortInDuct.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Comments"></a>

### *property* AcousticPortInDuct.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.CoordinateSystem"></a>

### *property* AcousticPortInDuct.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.DataModelObjectCategory"></a>

### *property* AcousticPortInDuct.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Figures"></a>

### *property* AcousticPortInDuct.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Height"></a>

### *property* AcousticPortInDuct.Height *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Height.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Images"></a>

### *property* AcousticPortInDuct.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.InternalObject"></a>

### *property* AcousticPortInDuct.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Location"></a>

### *property* AcousticPortInDuct.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ModeIndexForPressureVariationAlongTheAzimuth"></a>

### *property* AcousticPortInDuct.ModeIndexForPressureVariationAlongTheAzimuth *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeIndexForPressureVariationAlongTheAzimuth.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ModeIndexForPressureVariationAlongTheHeight"></a>

### *property* AcousticPortInDuct.ModeIndexForPressureVariationAlongTheHeight *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeIndexForPressureVariationAlongTheHeight.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ModeIndexForPressureVariationAlongTheRadii"></a>

### *property* AcousticPortInDuct.ModeIndexForPressureVariationAlongTheRadii *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeIndexForPressureVariationAlongTheRadii.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ModeIndexForPressureVariationAlongTheWidth"></a>

### *property* AcousticPortInDuct.ModeIndexForPressureVariationAlongTheWidth *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeIndexForPressureVariationAlongTheWidth.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PhaseAngle"></a>

### *property* AcousticPortInDuct.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PortAttribution"></a>

### *property* AcousticPortInDuct.PortAttribution *: [Ansys.Mechanical.DataModel.Enums.PortAttribution](../../../../Mechanical/DataModel/Enums/PortAttribution.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.PortAttribution) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PortAttribution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PortSelection"></a>

### *property* AcousticPortInDuct.PortSelection *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](AcousticPort.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PortSelection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PressureAmplitude"></a>

### *property* AcousticPortInDuct.PressureAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Properties"></a>

### *property* AcousticPortInDuct.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Radius"></a>

### *property* AcousticPortInDuct.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ReadOnly"></a>

### *property* AcousticPortInDuct.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.SharedRefBody"></a>

### *property* AcousticPortInDuct.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Suppressed"></a>

### *property* AcousticPortInDuct.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.VisibleProperties"></a>

### *property* AcousticPortInDuct.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.WaveType"></a>

### *property* AcousticPortInDuct.WaveType *: [Ansys.Mechanical.DataModel.Enums.WaveType](../../../../Mechanical/DataModel/Enums/WaveType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.WaveType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WaveType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Width"></a>

### *property* AcousticPortInDuct.Width *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticPortInDuct.Activate"></a>

### AcousticPortInDuct.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.AddComment"></a>

### AcousticPortInDuct.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.AddFigure"></a>

### AcousticPortInDuct.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.AddImage"></a>

### AcousticPortInDuct.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.CopyTo"></a>

### AcousticPortInDuct.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.CreateParameter"></a>

### AcousticPortInDuct.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Delete"></a>

### AcousticPortInDuct.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Duplicate"></a>

### AcousticPortInDuct.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetChildren"></a>

### AcousticPortInDuct.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetParameter"></a>

### AcousticPortInDuct.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GroupAllSimilarChildren"></a>

### AcousticPortInDuct.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GroupSimilarObjects"></a>

### AcousticPortInDuct.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PromoteToNamedSelection"></a>

### AcousticPortInDuct.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PropertyByAPIName"></a>

### AcousticPortInDuct.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PropertyByName"></a>

### AcousticPortInDuct.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.RemoveParameter"></a>

### AcousticPortInDuct.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

