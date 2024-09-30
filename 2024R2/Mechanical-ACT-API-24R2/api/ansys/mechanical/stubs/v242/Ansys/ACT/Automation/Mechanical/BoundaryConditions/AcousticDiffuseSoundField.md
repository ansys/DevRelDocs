# `AcousticDiffuseSoundField`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticDiffuseSoundField"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticDiffuseSoundField

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticDiffuseSoundField.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticDiffuseSoundField.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AcousticDiffuseSoundField.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticDiffuseSoundField.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticDiffuseSoundField.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AcousticDiffuseSoundField.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticDiffuseSoundField.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AcousticDiffuseSoundField.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticDiffuseSoundField.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AcousticDiffuseSoundField.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticDiffuseSoundField.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticDiffuseSoundField.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticDiffuseSoundField.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AcousticDiffuseSoundField.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AcousticDiffuseSoundField.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticDiffuseSoundField.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticDiffuseSoundField.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#AcousticDiffuseSoundField.Children)                                                     | Gets the list of children.                                    |
| [`Comments`](#AcousticDiffuseSoundField.Comments)                                                     | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#AcousticDiffuseSoundField.CoordinateSystem)                                     | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#AcousticDiffuseSoundField.DataModelObjectCategory)                       | Gets the current DataModelObject’s category.                  |
| [`Figures`](#AcousticDiffuseSoundField.Figures)                                                       | Gets the list of associated figures.                          |
| [`FrequencyOfNormConvergenceCheck`](#AcousticDiffuseSoundField.FrequencyOfNormConvergenceCheck)       | Gets or sets the FrequencyOfNormConvergenceCheck.             |
| [`Images`](#AcousticDiffuseSoundField.Images)                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#AcousticDiffuseSoundField.InternalObject)                                         | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticDiffuseSoundField.Location)                                                     | Gets or sets the Location.                                    |
| [`MassDensity`](#AcousticDiffuseSoundField.MassDensity)                                               | Gets the MassDensity.                                         |
| [`Material`](#AcousticDiffuseSoundField.Material)                                                     | Gets or sets the Material.                                    |
| [`MaterialAssignment`](#AcousticDiffuseSoundField.MaterialAssignment)                                 | Gets or sets the Material.                                    |
| [`MaximumIncidentAngle`](#AcousticDiffuseSoundField.MaximumIncidentAngle)                             | Gets or sets the MaximumIncidentAngle.                        |
| [`NormConvergenceTolerance`](#AcousticDiffuseSoundField.NormConvergenceTolerance)                     | Gets or sets the NormConvergenceTolerance.                    |
| [`NumberOfDivisionsOnReferenceSphere`](#AcousticDiffuseSoundField.NumberOfDivisionsOnReferenceSphere) | Gets or sets the NumberOfDivisionsOnReferenceSphere.          |
| [`NumberOfRandomSampling`](#AcousticDiffuseSoundField.NumberOfRandomSampling)                         | Gets or sets the NumberOfRandomSampling.                      |
| [`PressureExcitation`](#AcousticDiffuseSoundField.PressureExcitation)                                 | Gets the PressureExcitation.                                  |
| [`Properties`](#AcousticDiffuseSoundField.Properties)                                                 | Gets the list of properties for this object.                  |
| [`RadiusOfReferenceSphere`](#AcousticDiffuseSoundField.RadiusOfReferenceSphere)                       | Gets or sets the RadiusOfReferenceSphere.                     |
| [`RadiusOfReferenceSphereDefineBy`](#AcousticDiffuseSoundField.RadiusOfReferenceSphereDefineBy)       | Gets or sets the RadiusOfReferenceSphereDefineBy.             |
| [`RandomSamplingType`](#AcousticDiffuseSoundField.RandomSamplingType)                                 | Gets or sets the RandomSamplingType.                          |
| [`ReadOnly`](#AcousticDiffuseSoundField.ReadOnly)                                                     | Gets or sets the ReadOnly.                                    |
| [`ReferencePowerSpectralDensity`](#AcousticDiffuseSoundField.ReferencePowerSpectralDensity)           | Gets or sets the ReferencePowerSpectralDensity.               |
| [`SharedRefBody`](#AcousticDiffuseSoundField.SharedRefBody)                                           | Gets or sets the SharedRefBody.                               |
| [`SpeedOfSound`](#AcousticDiffuseSoundField.SpeedOfSound)                                             | Gets the SpeedOfSound.                                        |
| [`Suppressed`](#AcousticDiffuseSoundField.Suppressed)                                                 | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#AcousticDiffuseSoundField.VisibleProperties)                                   | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticDiffuseSoundField.Children"></a>

### *property* AcousticDiffuseSoundField.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Comments"></a>

### *property* AcousticDiffuseSoundField.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.CoordinateSystem"></a>

### *property* AcousticDiffuseSoundField.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.DataModelObjectCategory"></a>

### *property* AcousticDiffuseSoundField.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Figures"></a>

### *property* AcousticDiffuseSoundField.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.FrequencyOfNormConvergenceCheck"></a>

### *property* AcousticDiffuseSoundField.FrequencyOfNormConvergenceCheck *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyOfNormConvergenceCheck.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Images"></a>

### *property* AcousticDiffuseSoundField.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.InternalObject"></a>

### *property* AcousticDiffuseSoundField.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Location"></a>

### *property* AcousticDiffuseSoundField.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.MassDensity"></a>

### *property* AcousticDiffuseSoundField.MassDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MassDensity.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Material"></a>

### *property* AcousticDiffuseSoundField.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.MaterialAssignment"></a>

### *property* AcousticDiffuseSoundField.MaterialAssignment *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.MaximumIncidentAngle"></a>

### *property* AcousticDiffuseSoundField.MaximumIncidentAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumIncidentAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.NormConvergenceTolerance"></a>

### *property* AcousticDiffuseSoundField.NormConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.NumberOfDivisionsOnReferenceSphere"></a>

### *property* AcousticDiffuseSoundField.NumberOfDivisionsOnReferenceSphere *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfDivisionsOnReferenceSphere.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.NumberOfRandomSampling"></a>

### *property* AcousticDiffuseSoundField.NumberOfRandomSampling *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfRandomSampling.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.PressureExcitation"></a>

### *property* AcousticDiffuseSoundField.PressureExcitation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PressureExcitation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Properties"></a>

### *property* AcousticDiffuseSoundField.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.RadiusOfReferenceSphere"></a>

### *property* AcousticDiffuseSoundField.RadiusOfReferenceSphere *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadiusOfReferenceSphere.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.RadiusOfReferenceSphereDefineBy"></a>

### *property* AcousticDiffuseSoundField.RadiusOfReferenceSphereDefineBy *: [Ansys.Mechanical.DataModel.Enums.RadiusOfReferenceSphereDefineBy](../../../../Mechanical/DataModel/Enums/RadiusOfReferenceSphereDefineBy.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.RadiusOfReferenceSphereDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadiusOfReferenceSphereDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.RandomSamplingType"></a>

### *property* AcousticDiffuseSoundField.RandomSamplingType *: [Ansys.Mechanical.DataModel.Enums.RandomSamplingType](../../../../Mechanical/DataModel/Enums/RandomSamplingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.RandomSamplingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RandomSamplingType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.ReadOnly"></a>

### *property* AcousticDiffuseSoundField.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.ReferencePowerSpectralDensity"></a>

### *property* AcousticDiffuseSoundField.ReferencePowerSpectralDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePowerSpectralDensity.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.SharedRefBody"></a>

### *property* AcousticDiffuseSoundField.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.SpeedOfSound"></a>

### *property* AcousticDiffuseSoundField.SpeedOfSound *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SpeedOfSound.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Suppressed"></a>

### *property* AcousticDiffuseSoundField.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.VisibleProperties"></a>

### *property* AcousticDiffuseSoundField.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticDiffuseSoundField.Activate"></a>

### AcousticDiffuseSoundField.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.AddComment"></a>

### AcousticDiffuseSoundField.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.AddFigure"></a>

### AcousticDiffuseSoundField.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.AddImage"></a>

### AcousticDiffuseSoundField.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.CopyTo"></a>

### AcousticDiffuseSoundField.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.CreateParameter"></a>

### AcousticDiffuseSoundField.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Delete"></a>

### AcousticDiffuseSoundField.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Duplicate"></a>

### AcousticDiffuseSoundField.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetChildren"></a>

### AcousticDiffuseSoundField.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetParameter"></a>

### AcousticDiffuseSoundField.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GroupAllSimilarChildren"></a>

### AcousticDiffuseSoundField.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GroupSimilarObjects"></a>

### AcousticDiffuseSoundField.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.PromoteToNamedSelection"></a>

### AcousticDiffuseSoundField.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.PropertyByAPIName"></a>

### AcousticDiffuseSoundField.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.PropertyByName"></a>

### AcousticDiffuseSoundField.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.RemoveParameter"></a>

### AcousticDiffuseSoundField.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

