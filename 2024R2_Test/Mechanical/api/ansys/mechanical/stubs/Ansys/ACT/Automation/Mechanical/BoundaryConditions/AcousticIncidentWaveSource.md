# AcousticIncidentWaveSource

### *class* AcousticIncidentWaveSource

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticIncidentWaveSource.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#AcousticIncidentWaveSource.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`PressureAmplitude`](#AcousticIncidentWaveSource.PressureAmplitude)                                                   | Gets or sets the PressureAmplitude.                           |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`VelocityAmplitude`](#AcousticIncidentWaveSource.VelocityAmplitude)                                                   | Gets or sets the VelocityAmplitude.                           |
| [`MaterialAssignment`](../MaterialAssignment.md#MaterialAssignment)                                                    | Gets or sets the Material.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Material`](../Material.md#Material)                                                                                  | Gets or sets the Material.                                    |
| [`WaveNumber`](#AcousticIncidentWaveSource.WaveNumber)                                                                 | Gets the WaveNumber.                                          |
| [`XComponentOfUnitDipoleVector`](#AcousticIncidentWaveSource.XComponentOfUnitDipoleVector)                             | Gets or sets the XComponentOfUnitDipoleVector.                |
| [`YComponentOfUnitDipoleVector`](#AcousticIncidentWaveSource.YComponentOfUnitDipoleVector)                             | Gets or sets the YComponentOfUnitDipoleVector.                |
| [`ZComponentOfUnitDipoleVector`](#AcousticIncidentWaveSource.ZComponentOfUnitDipoleVector)                             | Gets or sets the ZComponentOfUnitDipoleVector.                |
| [`AnglePhi`](#AcousticIncidentWaveSource.AnglePhi)                                                                     | Gets or sets the AnglePhi.                                    |
| [`AngleTheta`](#AcousticIncidentWaveSource.AngleTheta)                                                                 | Gets or sets the AngleTheta.                                  |
| [`DipoleLength`](#AcousticIncidentWaveSource.DipoleLength)                                                             | Gets or sets the DipoleLength.                                |
| [`MassDensity`](#AcousticIncidentWaveSource.MassDensity)                                                               | Gets or sets the MassDensity.                                 |
| [`SourceOriginX`](#AcousticIncidentWaveSource.SourceOriginX)                                                           | Gets or sets the SourceOriginX.                               |
| [`SourceOriginY`](#AcousticIncidentWaveSource.SourceOriginY)                                                           | Gets or sets the SourceOriginY.                               |
| [`SourceOriginZ`](#AcousticIncidentWaveSource.SourceOriginZ)                                                           | Gets or sets the SourceOriginZ.                               |
| [`PhaseAngle`](#AcousticIncidentWaveSource.PhaseAngle)                                                                 | Gets or sets the PhaseAngle.                                  |
| [`RadiusOfPulsatingSphere`](#AcousticIncidentWaveSource.RadiusOfPulsatingSphere)                                       | Gets or sets the RadiusOfPulsatingSphere.                     |
| [`SpeedOfSound`](#AcousticIncidentWaveSource.SpeedOfSound)                                                             | Gets or sets the SpeedOfSound.                                |
| [`IncidentWaveLocation`](../../../../Mechanical/DataModel/Enums/IncidentWaveLocation.md#IncidentWaveLocation)          | Gets or sets the IncidentWaveLocation.                        |
| [`ExcitationType`](../../../../Mechanical/DataModel/Enums/ExcitationType.md#ExcitationType)                            | Gets or sets the ExcitationType.                              |
| [`WaveType`](../../../../Mechanical/DataModel/Enums/WaveType.md#WaveType)                                              | Gets or sets the WaveType.                                    |
| [`CalculateIncidentPower`](#AcousticIncidentWaveSource.CalculateIncidentPower)                                         | Gets or sets the CalculateIncidentPower.                      |
| [`PortSelection`](#AcousticIncidentWaveSource.PortSelection)                                                           | Gets or sets the PortSelection.                               |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#AcousticIncidentWaveSource.Suppressed)                                                                 | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticIncidentWaveSource.SharedRefBody)                                                           | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticIncidentWaveSource.Children)                                                                     | Gets the list of children.                                    |
| [`Comments`](#AcousticIncidentWaveSource.Comments)                                                                     | Gets the list of associated comments.                         |
| [`Figures`](#AcousticIncidentWaveSource.Figures)                                                                       | Gets the list of associated figures.                          |
| [`Images`](#AcousticIncidentWaveSource.Images)                                                                         | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticIncidentWaveSource.ReadOnly)                                                                     | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticIncidentWaveSource.Properties)                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticIncidentWaveSource.VisibleProperties)                                                   | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import AcousticIncidentWaveSource
```

## Property detail

### *property* AcousticIncidentWaveSource.PressureAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.VelocityAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.MaterialAssignment *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.WaveNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the WaveNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.XComponentOfUnitDipoleVector *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XComponentOfUnitDipoleVector.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.YComponentOfUnitDipoleVector *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YComponentOfUnitDipoleVector.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.ZComponentOfUnitDipoleVector *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZComponentOfUnitDipoleVector.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.AnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AnglePhi.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.AngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AngleTheta.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.DipoleLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DipoleLength.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.MassDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassDensity.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.SourceOriginX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceOriginX.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.SourceOriginY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceOriginY.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.SourceOriginZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceOriginZ.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.RadiusOfPulsatingSphere *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadiusOfPulsatingSphere.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.SpeedOfSound *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpeedOfSound.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.IncidentWaveLocation *: [Ansys.Mechanical.DataModel.Enums.IncidentWaveLocation](../../../../Mechanical/DataModel/Enums/IncidentWaveLocation.md#IncidentWaveLocation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncidentWaveLocation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.ExcitationType *: [Ansys.Mechanical.DataModel.Enums.ExcitationType](../../../../Mechanical/DataModel/Enums/ExcitationType.md#ExcitationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExcitationType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.WaveType *: [Ansys.Mechanical.DataModel.Enums.WaveType](../../../../Mechanical/DataModel/Enums/WaveType.md#WaveType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WaveType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.CalculateIncidentPower *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateIncidentPower.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.PortSelection *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](AcousticPort.md#AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PortSelection.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticIncidentWaveSource.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticIncidentWaveSource.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticIncidentWaveSource.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
