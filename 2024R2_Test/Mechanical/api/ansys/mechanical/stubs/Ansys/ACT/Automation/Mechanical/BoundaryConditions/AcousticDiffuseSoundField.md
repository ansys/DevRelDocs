# AcousticDiffuseSoundField

### *class* AcousticDiffuseSoundField

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticDiffuseSoundField.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#AcousticDiffuseSoundField.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#AcousticDiffuseSoundField.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticDiffuseSoundField.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticDiffuseSoundField.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticDiffuseSoundField.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticDiffuseSoundField.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticDiffuseSoundField.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticDiffuseSoundField.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticDiffuseSoundField.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticDiffuseSoundField.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticDiffuseSoundField.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticDiffuseSoundField.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticDiffuseSoundField.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticDiffuseSoundField.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticDiffuseSoundField.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`MaterialAssignment`](../MaterialAssignment.md#MaterialAssignment)                                                                            | Gets or sets the Material.                                    |
|------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                                       | Gets the internal object. For advanced usage only.            |
| [`Material`](../Material.md#Material)                                                                                                          | Gets or sets the Material.                                    |
| [`FrequencyOfNormConvergenceCheck`](#AcousticDiffuseSoundField.FrequencyOfNormConvergenceCheck)                                                | Gets or sets the FrequencyOfNormConvergenceCheck.             |
| [`NumberOfDivisionsOnReferenceSphere`](#AcousticDiffuseSoundField.NumberOfDivisionsOnReferenceSphere)                                          | Gets or sets the NumberOfDivisionsOnReferenceSphere.          |
| [`NumberOfRandomSampling`](#AcousticDiffuseSoundField.NumberOfRandomSampling)                                                                  | Gets or sets the NumberOfRandomSampling.                      |
| [`NormConvergenceTolerance`](#AcousticDiffuseSoundField.NormConvergenceTolerance)                                                              | Gets or sets the NormConvergenceTolerance.                    |
| [`MassDensity`](#AcousticDiffuseSoundField.MassDensity)                                                                                        | Gets the MassDensity.                                         |
| [`MaximumIncidentAngle`](#AcousticDiffuseSoundField.MaximumIncidentAngle)                                                                      | Gets or sets the MaximumIncidentAngle.                        |
| [`RadiusOfReferenceSphere`](#AcousticDiffuseSoundField.RadiusOfReferenceSphere)                                                                | Gets or sets the RadiusOfReferenceSphere.                     |
| [`ReferencePowerSpectralDensity`](#AcousticDiffuseSoundField.ReferencePowerSpectralDensity)                                                    | Gets or sets the ReferencePowerSpectralDensity.               |
| [`SpeedOfSound`](#AcousticDiffuseSoundField.SpeedOfSound)                                                                                      | Gets the SpeedOfSound.                                        |
| [`RadiusOfReferenceSphereDefineBy`](../../../../Mechanical/DataModel/Enums/RadiusOfReferenceSphereDefineBy.md#RadiusOfReferenceSphereDefineBy) | Gets or sets the RadiusOfReferenceSphereDefineBy.             |
| [`RandomSamplingType`](../../../../Mechanical/DataModel/Enums/RandomSamplingType.md#RandomSamplingType)                                        | Gets or sets the RandomSamplingType.                          |
| [`PressureExcitation`](#AcousticDiffuseSoundField.PressureExcitation)                                                                          | Gets the PressureExcitation.                                  |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                                                     | Gets or sets the CoordinateSystem.                            |
| [`Location`](#AcousticDiffuseSoundField.Location)                                                                                              | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                         | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#AcousticDiffuseSoundField.Suppressed)                                                                                          | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticDiffuseSoundField.SharedRefBody)                                                                                    | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticDiffuseSoundField.Children)                                                                                              | Gets the list of children.                                    |
| [`Comments`](#AcousticDiffuseSoundField.Comments)                                                                                              | Gets the list of associated comments.                         |
| [`Figures`](#AcousticDiffuseSoundField.Figures)                                                                                                | Gets the list of associated figures.                          |
| [`Images`](#AcousticDiffuseSoundField.Images)                                                                                                  | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticDiffuseSoundField.ReadOnly)                                                                                              | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                                                       | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticDiffuseSoundField.Properties)                                                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticDiffuseSoundField.VisibleProperties)                                                                            | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import AcousticDiffuseSoundField
```

## Property detail

### *property* AcousticDiffuseSoundField.MaterialAssignment *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.FrequencyOfNormConvergenceCheck *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyOfNormConvergenceCheck.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.NumberOfDivisionsOnReferenceSphere *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfDivisionsOnReferenceSphere.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.NumberOfRandomSampling *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfRandomSampling.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.NormConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.MassDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MassDensity.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.MaximumIncidentAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumIncidentAngle.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.RadiusOfReferenceSphere *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadiusOfReferenceSphere.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.ReferencePowerSpectralDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePowerSpectralDensity.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.SpeedOfSound *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SpeedOfSound.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.RadiusOfReferenceSphereDefineBy *: [Ansys.Mechanical.DataModel.Enums.RadiusOfReferenceSphereDefineBy](../../../../Mechanical/DataModel/Enums/RadiusOfReferenceSphereDefineBy.md#RadiusOfReferenceSphereDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadiusOfReferenceSphereDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.RandomSamplingType *: [Ansys.Mechanical.DataModel.Enums.RandomSamplingType](../../../../Mechanical/DataModel/Enums/RandomSamplingType.md#RandomSamplingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RandomSamplingType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.PressureExcitation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PressureExcitation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundField.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticDiffuseSoundField.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundField.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
