<!-- vale off -->

<a id="acousticincidentwavesource"></a>

# `AcousticIncidentWaveSource`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticIncidentWaveSource"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticIncidentWaveSource

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticIncidentWaveSource.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#AcousticIncidentWaveSource.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#AcousticIncidentWaveSource.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticIncidentWaveSource.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticIncidentWaveSource.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticIncidentWaveSource.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticIncidentWaveSource.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticIncidentWaveSource.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticIncidentWaveSource.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticIncidentWaveSource.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticIncidentWaveSource.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticIncidentWaveSource.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticIncidentWaveSource.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticIncidentWaveSource.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticIncidentWaveSource.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticIncidentWaveSource.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`PressureAmplitude`](#AcousticIncidentWaveSource.PressureAmplitude)                       | Gets or sets the PressureAmplitude.                           |
| [`VelocityAmplitude`](#AcousticIncidentWaveSource.VelocityAmplitude)                       | Gets or sets the VelocityAmplitude.                           |
| [`MaterialAssignment`](#AcousticIncidentWaveSource.MaterialAssignment)                     | Gets or sets the Material.                                    |
| [`InternalObject`](#id0)                                                                   | Gets the internal object. For advanced usage only.            |
| [`Material`](#AcousticIncidentWaveSource.Material)                                         | Gets or sets the Material.                                    |
| [`WaveNumber`](#AcousticIncidentWaveSource.WaveNumber)                                     | Gets the WaveNumber.                                          |
| [`XComponentOfUnitDipoleVector`](#AcousticIncidentWaveSource.XComponentOfUnitDipoleVector) | Gets or sets the XComponentOfUnitDipoleVector.                |
| [`YComponentOfUnitDipoleVector`](#AcousticIncidentWaveSource.YComponentOfUnitDipoleVector) | Gets or sets the YComponentOfUnitDipoleVector.                |
| [`ZComponentOfUnitDipoleVector`](#AcousticIncidentWaveSource.ZComponentOfUnitDipoleVector) | Gets or sets the ZComponentOfUnitDipoleVector.                |
| [`AnglePhi`](#AcousticIncidentWaveSource.AnglePhi)                                         | Gets or sets the AnglePhi.                                    |
| [`AngleTheta`](#AcousticIncidentWaveSource.AngleTheta)                                     | Gets or sets the AngleTheta.                                  |
| [`DipoleLength`](#AcousticIncidentWaveSource.DipoleLength)                                 | Gets or sets the DipoleLength.                                |
| [`MassDensity`](#AcousticIncidentWaveSource.MassDensity)                                   | Gets or sets the MassDensity.                                 |
| [`SourceOriginX`](#AcousticIncidentWaveSource.SourceOriginX)                               | Gets or sets the SourceOriginX.                               |
| [`SourceOriginY`](#AcousticIncidentWaveSource.SourceOriginY)                               | Gets or sets the SourceOriginY.                               |
| [`SourceOriginZ`](#AcousticIncidentWaveSource.SourceOriginZ)                               | Gets or sets the SourceOriginZ.                               |
| [`PhaseAngle`](#AcousticIncidentWaveSource.PhaseAngle)                                     | Gets or sets the PhaseAngle.                                  |
| [`RadiusOfPulsatingSphere`](#AcousticIncidentWaveSource.RadiusOfPulsatingSphere)           | Gets or sets the RadiusOfPulsatingSphere.                     |
| [`SpeedOfSound`](#AcousticIncidentWaveSource.SpeedOfSound)                                 | Gets or sets the SpeedOfSound.                                |
| [`IncidentWaveLocation`](#AcousticIncidentWaveSource.IncidentWaveLocation)                 | Gets or sets the IncidentWaveLocation.                        |
| [`ExcitationType`](#AcousticIncidentWaveSource.ExcitationType)                             | Gets or sets the ExcitationType.                              |
| [`WaveType`](#AcousticIncidentWaveSource.WaveType)                                         | Gets or sets the WaveType.                                    |
| [`CalculateIncidentPower`](#AcousticIncidentWaveSource.CalculateIncidentPower)             | Gets or sets the CalculateIncidentPower.                      |
| [`PortSelection`](#AcousticIncidentWaveSource.PortSelection)                               | Gets or sets the PortSelection.                               |
| [`DataModelObjectCategory`](#AcousticIncidentWaveSource.DataModelObjectCategory)           | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#AcousticIncidentWaveSource.Suppressed)                                     | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticIncidentWaveSource.SharedRefBody)                               | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticIncidentWaveSource.Children)                                         | Gets the list of children.                                    |
| [`Comments`](#AcousticIncidentWaveSource.Comments)                                         | Gets the list of associated comments.                         |
| [`Figures`](#AcousticIncidentWaveSource.Figures)                                           | Gets the list of associated figures.                          |
| [`Images`](#AcousticIncidentWaveSource.Images)                                             | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticIncidentWaveSource.ReadOnly)                                         | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticIncidentWaveSource.Properties)                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticIncidentWaveSource.VisibleProperties)                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticIncidentWaveSource.PressureAmplitude"></a>

### *property* AcousticIncidentWaveSource.PressureAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.VelocityAmplitude"></a>

### *property* AcousticIncidentWaveSource.VelocityAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.MaterialAssignment"></a>

### *property* AcousticIncidentWaveSource.MaterialAssignment *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.InternalObject"></a>

### *property* AcousticIncidentWaveSource.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Material"></a>

### *property* AcousticIncidentWaveSource.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.WaveNumber"></a>

### *property* AcousticIncidentWaveSource.WaveNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the WaveNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.XComponentOfUnitDipoleVector"></a>

### *property* AcousticIncidentWaveSource.XComponentOfUnitDipoleVector *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XComponentOfUnitDipoleVector.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.YComponentOfUnitDipoleVector"></a>

### *property* AcousticIncidentWaveSource.YComponentOfUnitDipoleVector *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YComponentOfUnitDipoleVector.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.ZComponentOfUnitDipoleVector"></a>

### *property* AcousticIncidentWaveSource.ZComponentOfUnitDipoleVector *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZComponentOfUnitDipoleVector.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.AnglePhi"></a>

### *property* AcousticIncidentWaveSource.AnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.AngleTheta"></a>

### *property* AcousticIncidentWaveSource.AngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.DipoleLength"></a>

### *property* AcousticIncidentWaveSource.DipoleLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DipoleLength.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.MassDensity"></a>

### *property* AcousticIncidentWaveSource.MassDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassDensity.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.SourceOriginX"></a>

### *property* AcousticIncidentWaveSource.SourceOriginX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceOriginX.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.SourceOriginY"></a>

### *property* AcousticIncidentWaveSource.SourceOriginY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceOriginY.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.SourceOriginZ"></a>

### *property* AcousticIncidentWaveSource.SourceOriginZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceOriginZ.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.PhaseAngle"></a>

### *property* AcousticIncidentWaveSource.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.RadiusOfPulsatingSphere"></a>

### *property* AcousticIncidentWaveSource.RadiusOfPulsatingSphere *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadiusOfPulsatingSphere.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.SpeedOfSound"></a>

### *property* AcousticIncidentWaveSource.SpeedOfSound *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpeedOfSound.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.IncidentWaveLocation"></a>

### *property* AcousticIncidentWaveSource.IncidentWaveLocation *: [Ansys.Mechanical.DataModel.Enums.IncidentWaveLocation](../../../../Mechanical/DataModel/Enums/IncidentWaveLocation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.IncidentWaveLocation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncidentWaveLocation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.ExcitationType"></a>

### *property* AcousticIncidentWaveSource.ExcitationType *: [Ansys.Mechanical.DataModel.Enums.ExcitationType](../../../../Mechanical/DataModel/Enums/ExcitationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExcitationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExcitationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.WaveType"></a>

### *property* AcousticIncidentWaveSource.WaveType *: [Ansys.Mechanical.DataModel.Enums.WaveType](../../../../Mechanical/DataModel/Enums/WaveType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WaveType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WaveType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.CalculateIncidentPower"></a>

### *property* AcousticIncidentWaveSource.CalculateIncidentPower *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateIncidentPower.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.PortSelection"></a>

### *property* AcousticIncidentWaveSource.PortSelection *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](AcousticPort.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PortSelection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.DataModelObjectCategory"></a>

### *property* AcousticIncidentWaveSource.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Suppressed"></a>

### *property* AcousticIncidentWaveSource.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.SharedRefBody"></a>

### *property* AcousticIncidentWaveSource.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Children"></a>

### *property* AcousticIncidentWaveSource.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Comments"></a>

### *property* AcousticIncidentWaveSource.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Figures"></a>

### *property* AcousticIncidentWaveSource.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Images"></a>

### *property* AcousticIncidentWaveSource.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.ReadOnly"></a>

### *property* AcousticIncidentWaveSource.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticIncidentWaveSource.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Properties"></a>

### *property* AcousticIncidentWaveSource.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.VisibleProperties"></a>

### *property* AcousticIncidentWaveSource.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticIncidentWaveSource.PromoteToNamedSelection"></a>

### AcousticIncidentWaveSource.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Delete"></a>

### AcousticIncidentWaveSource.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetChildren"></a>

### AcousticIncidentWaveSource.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticIncidentWaveSource.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.AddComment"></a>

### AcousticIncidentWaveSource.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.AddFigure"></a>

### AcousticIncidentWaveSource.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.AddImage"></a>

### AcousticIncidentWaveSource.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Activate"></a>

### AcousticIncidentWaveSource.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.CopyTo"></a>

### AcousticIncidentWaveSource.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Duplicate"></a>

### AcousticIncidentWaveSource.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GroupAllSimilarChildren"></a>

### AcousticIncidentWaveSource.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GroupSimilarObjects"></a>

### AcousticIncidentWaveSource.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.PropertyByName"></a>

### AcousticIncidentWaveSource.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.PropertyByAPIName"></a>

### AcousticIncidentWaveSource.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.CreateParameter"></a>

### AcousticIncidentWaveSource.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetParameter"></a>

### AcousticIncidentWaveSource.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.RemoveParameter"></a>

### AcousticIncidentWaveSource.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
