<a id="acousticportinduct"></a>

# AcousticPortInDuct

<a id="AcousticPortInDuct"></a>

### *class* AcousticPortInDuct

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticPortInDuct.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`PromoteToNamedSelection`](#AcousticPortInDuct.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#AcousticPortInDuct.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticPortInDuct.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticPortInDuct.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticPortInDuct.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticPortInDuct.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticPortInDuct.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticPortInDuct.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticPortInDuct.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticPortInDuct.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticPortInDuct.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticPortInDuct.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticPortInDuct.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticPortInDuct.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticPortInDuct.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ModeIndexForPressureVariationAlongTheWidth`](#AcousticPortInDuct.ModeIndexForPressureVariationAlongTheWidth)         | Gets or sets the ModeIndexForPressureVariationAlongTheWidth.   |
|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`ModeIndexForPressureVariationAlongTheAzimuth`](#AcousticPortInDuct.ModeIndexForPressureVariationAlongTheAzimuth)     | Gets or sets the ModeIndexForPressureVariationAlongTheAzimuth. |
| [`ModeIndexForPressureVariationAlongTheHeight`](#AcousticPortInDuct.ModeIndexForPressureVariationAlongTheHeight)       | Gets or sets the ModeIndexForPressureVariationAlongTheHeight.  |
| [`ModeIndexForPressureVariationAlongTheRadii`](#AcousticPortInDuct.ModeIndexForPressureVariationAlongTheRadii)         | Gets or sets the ModeIndexForPressureVariationAlongTheRadii.   |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.             |
| [`AnglePhi`](#AcousticPortInDuct.AnglePhi)                                                                             | Gets or sets the AnglePhi.                                     |
| [`AngleTheta`](#AcousticPortInDuct.AngleTheta)                                                                         | Gets or sets the AngleTheta.                                   |
| [`Height`](#AcousticPortInDuct.Height)                                                                                 | Gets or sets the Height.                                       |
| [`PressureAmplitude`](#AcousticPortInDuct.PressureAmplitude)                                                           | Gets or sets the PressureAmplitude.                            |
| [`PhaseAngle`](#AcousticPortInDuct.PhaseAngle)                                                                         | Gets or sets the PhaseAngle.                                   |
| [`Radius`](#AcousticPortInDuct.Radius)                                                                                 | Gets or sets the Radius.                                       |
| [`Width`](#AcousticPortInDuct.Width)                                                                                   | Gets or sets the Width.                                        |
| [`PortAttribution`](../../../../Mechanical/DataModel/Enums/PortAttribution.md#PortAttribution)                         | Gets or sets the PortAttribution.                              |
| [`WaveType`](../../../../Mechanical/DataModel/Enums/WaveType.md#WaveType)                                              | Gets or sets the WaveType.                                     |
| [`PortSelection`](#AcousticPortInDuct.PortSelection)                                                                   | Gets or sets the PortSelection.                                |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                             |
| [`Location`](#AcousticPortInDuct.Location)                                                                             | Gets or sets the Location.                                     |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                   |
| [`Suppressed`](#AcousticPortInDuct.Suppressed)                                                                         | Gets or sets the Suppressed.                                   |
| [`SharedRefBody`](#AcousticPortInDuct.SharedRefBody)                                                                   | Gets or sets the SharedRefBody.                                |
| [`Children`](#AcousticPortInDuct.Children)                                                                             | Gets the list of children.                                     |
| [`Comments`](#AcousticPortInDuct.Comments)                                                                             | Gets the list of associated comments.                          |
| [`Figures`](#AcousticPortInDuct.Figures)                                                                               | Gets the list of associated figures.                           |
| [`Images`](#AcousticPortInDuct.Images)                                                                                 | Gets the list of associated images.                            |
| [`ReadOnly`](#AcousticPortInDuct.ReadOnly)                                                                             | Gets or sets the ReadOnly.                                     |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.             |
| [`Properties`](#AcousticPortInDuct.Properties)                                                                         | Gets the list of properties for this object.                   |
| [`VisibleProperties`](#AcousticPortInDuct.VisibleProperties)                                                           | Gets the list of properties that are visible for this object.  |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import AcousticPortInDuct
```

<a id="property-detail"></a>

## Property detail

<a id="AcousticPortInDuct.ModeIndexForPressureVariationAlongTheWidth"></a>

### *property* AcousticPortInDuct.ModeIndexForPressureVariationAlongTheWidth *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeIndexForPressureVariationAlongTheWidth.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ModeIndexForPressureVariationAlongTheAzimuth"></a>

### *property* AcousticPortInDuct.ModeIndexForPressureVariationAlongTheAzimuth *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeIndexForPressureVariationAlongTheAzimuth.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ModeIndexForPressureVariationAlongTheHeight"></a>

### *property* AcousticPortInDuct.ModeIndexForPressureVariationAlongTheHeight *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeIndexForPressureVariationAlongTheHeight.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ModeIndexForPressureVariationAlongTheRadii"></a>

### *property* AcousticPortInDuct.ModeIndexForPressureVariationAlongTheRadii *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeIndexForPressureVariationAlongTheRadii.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.InternalObject"></a>

### *property* AcousticPortInDuct.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.AnglePhi"></a>

### *property* AcousticPortInDuct.AnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.AngleTheta"></a>

### *property* AcousticPortInDuct.AngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Height"></a>

### *property* AcousticPortInDuct.Height *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Height.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PressureAmplitude"></a>

### *property* AcousticPortInDuct.PressureAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PhaseAngle"></a>

### *property* AcousticPortInDuct.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Radius"></a>

### *property* AcousticPortInDuct.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Width"></a>

### *property* AcousticPortInDuct.Width *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PortAttribution"></a>

### *property* AcousticPortInDuct.PortAttribution *: [Ansys.Mechanical.DataModel.Enums.PortAttribution](../../../../Mechanical/DataModel/Enums/PortAttribution.md#PortAttribution) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PortAttribution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.WaveType"></a>

### *property* AcousticPortInDuct.WaveType *: [Ansys.Mechanical.DataModel.Enums.WaveType](../../../../Mechanical/DataModel/Enums/WaveType.md#WaveType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WaveType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PortSelection"></a>

### *property* AcousticPortInDuct.PortSelection *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](AcousticPort.md#AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PortSelection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.CoordinateSystem"></a>

### *property* AcousticPortInDuct.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Location"></a>

### *property* AcousticPortInDuct.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.DataModelObjectCategory"></a>

### *property* AcousticPortInDuct.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Suppressed"></a>

### *property* AcousticPortInDuct.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.SharedRefBody"></a>

### *property* AcousticPortInDuct.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Children"></a>

### *property* AcousticPortInDuct.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Comments"></a>

### *property* AcousticPortInDuct.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Figures"></a>

### *property* AcousticPortInDuct.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Images"></a>

### *property* AcousticPortInDuct.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ReadOnly"></a>

### *property* AcousticPortInDuct.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticPortInDuct.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Properties"></a>

### *property* AcousticPortInDuct.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.VisibleProperties"></a>

### *property* AcousticPortInDuct.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticPortInDuct.PromoteToNamedSelection"></a>

### AcousticPortInDuct.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Delete"></a>

### AcousticPortInDuct.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetChildren"></a>

### AcousticPortInDuct.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticPortInDuct.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### AcousticPortInDuct.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Activate"></a>

### AcousticPortInDuct.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.CopyTo"></a>

### AcousticPortInDuct.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Duplicate"></a>

### AcousticPortInDuct.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GroupAllSimilarChildren"></a>

### AcousticPortInDuct.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GroupSimilarObjects"></a>

### AcousticPortInDuct.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PropertyByName"></a>

### AcousticPortInDuct.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PropertyByAPIName"></a>

### AcousticPortInDuct.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.CreateParameter"></a>

### AcousticPortInDuct.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetParameter"></a>

### AcousticPortInDuct.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.RemoveParameter"></a>

### AcousticPortInDuct.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
