# `Joint`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Joint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Joint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`PromoteToRemotePoint`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.PromoteToRemotePoint)         | Run the PromoteToRemotePoint action.                                              |
| [`AddCommandSnippet`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.AddCommandSnippet)               | Creates a new CommandSnippet                                                      |
| [`FlipReferenceMobile`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.FlipReferenceMobile)           | Run the FlipReferenceMobile action.                                               |
| [`RenameBasedOnDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#id1)                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#id1)                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`BushingWorksheet`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.BushingWorksheet)                   | Returns the Bushing Coeffients worksheet associated with Bushing Joint.   |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#id0)                                        | Gets the internal object. For advanced usage only.                        |
| [`FrictionCoefficient`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.FrictionCoefficient)             | Gets or sets the FrictionCoefficient.                                     |
| [`JointElementAPDLName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.JointElementAPDLName)           | Gets or sets the JointElementAPDLName.                                    |
| [`RestitutionFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RestitutionFactor)                 | Gets or sets the RestitutionFactor.                                       |
| [`MobileBeamMaterial`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.MobileBeamMaterial)               | Gets or sets the MobileBeamMaterial.                                      |
| [`MobileBody`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.MobileBody)                               | Gets the MobileBody.                                                      |
| [`ReferenceBeamMaterial`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ReferenceBeamMaterial)         | Gets or sets the ReferenceBeamMaterial.                                   |
| [`ReferenceBody`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ReferenceBody)                         | Gets the ReferenceBody.                                                   |
| [`EffectiveLength`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.EffectiveLength)                     | Gets or sets the EffectiveLength.                                         |
| [`InnerRadius`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.InnerRadius)                             | Gets or sets the InnerRadius.                                             |
| [`OuterRadius`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.OuterRadius)                             | Gets or sets the OuterRadius.                                             |
| [`Radius`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.Radius)                                       | Gets or sets the Radius.                                                  |
| [`MobilePinballRegion`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.MobilePinballRegion)             | Gets or sets the MobilePinballRegion.                                     |
| [`ReferencePinballRegion`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ReferencePinballRegion)       | Gets or sets the ReferencePinballRegion.                                  |
| [`RadialGapHeight`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RadialGapHeight)                     | Gets or sets the RadialGapHeight.                                         |
| [`RadialGapInnerDiameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RadialGapInnerDiameter)       | Gets or sets the RadialGapInnerDiameter.                                  |
| [`RadialOuterDiameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RadialOuterDiameter)             | Gets or sets the RadialOuterDiameter.                                     |
| [`ScrewPitch`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ScrewPitch)                               | Gets or sets the ScrewPitch.                                              |
| [`RXMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RXMaximum)                                 | Gets or sets the RXMaximum.                                               |
| [`RXMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RXMinimum)                                 | Gets or sets the RXMinimum.                                               |
| [`RYMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RYMaximum)                                 | Gets or sets the RYMaximum.                                               |
| [`RYMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RYMinimum)                                 | Gets or sets the RYMinimum.                                               |
| [`RZMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RZMaximum)                                 | Gets or sets the RZMaximum.                                               |
| [`RZMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RZMinimum)                                 | Gets or sets the RZMinimum.                                               |
| [`XMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.XMaximum)                                   | Gets or sets the XMaximum.                                                |
| [`XMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.XMinimum)                                   | Gets or sets the XMinimum.                                                |
| [`YMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.YMaximum)                                   | Gets or sets the YMaximum.                                                |
| [`YMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.YMinimum)                                   | Gets or sets the YMinimum.                                                |
| [`ZMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ZMaximum)                                   | Gets or sets the ZMaximum.                                                |
| [`ZMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ZMinimum)                                   | Gets or sets the ZMinimum.                                                |
| [`TorsionalDamping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.TorsionalDamping)                   | Gets or sets the TorsionalDamping.                                        |
| [`TorsionalStiffness`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.TorsionalStiffness)               | Gets or sets the TorsionalStiffness.                                      |
| [`MobileBeamRadius`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.MobileBeamRadius)                   | Gets or sets the MobileBeamRadius.                                        |
| [`ReferenceBeamRadius`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ReferenceBeamRadius)             | Gets or sets the ReferenceBeamRadius.                                     |
| [`GeneralPrimitiveType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.GeneralPrimitiveType)           | Gets or sets the GeneralPrimitiveType.                                    |
| [`InitialPosition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.InitialPosition)                     | Gets or sets the InitialPosition.                                         |
| [`MobileBehavior`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.MobileBehavior)                       | Gets or sets the MobileBehavior.                                          |
| [`ReferenceBehavior`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ReferenceBehavior)                 | Gets or sets the ReferenceBehavior.                                       |
| [`Formulation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.Formulation)                             | Gets or sets the Formulation.                                             |
| [`JointFrictionType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.JointFrictionType)                 | Gets or sets the JointFrictionType.                                       |
| [`MobileFormulation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.MobileFormulation)                 | Gets or sets the MobileFormulation.                                       |
| [`RadialGapType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RadialGapType)                         | Gets or sets the RadialGapType.                                           |
| [`ReferenceFormulation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ReferenceFormulation)           | Gets or sets the ReferenceFormulation.                                    |
| [`ConnectionType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ConnectionType)                       | Gets or sets the ConnectionType.                                          |
| [`RXMaximumType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RXMaximumType)                         | Gets or sets the RXMaximumType.                                           |
| [`RXMinimumType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RXMinimumType)                         | Gets or sets the RXMinimumType.                                           |
| [`RYMaximumType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RYMaximumType)                         | Gets or sets the RYMaximumType.                                           |
| [`RYMinimumType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RYMinimumType)                         | Gets or sets the RYMinimumType.                                           |
| [`RZMaximumType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RZMaximumType)                         | Gets or sets the RZMaximumType.                                           |
| [`RZMinimumType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.RZMinimumType)                         | Gets or sets the RZMinimumType.                                           |
| [`XMaximumType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.XMaximumType)                           | Gets or sets the XMaximumType.                                            |
| [`XMinimumType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.XMinimumType)                           | Gets or sets the XMinimumType.                                            |
| [`YMaximumType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.YMaximumType)                           | Gets or sets the YMaximumType.                                            |
| [`YMinimumType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.YMinimumType)                           | Gets or sets the YMinimumType.                                            |
| [`ZMaximumType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ZMaximumType)                           | Gets or sets the ZMaximumType.                                            |
| [`ZMinimumType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ZMinimumType)                           | Gets or sets the ZMinimumType.                                            |
| [`Type`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.Type)                                           | Gets or sets the Type.                                                    |
| [`MobileAppliedBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.MobileAppliedBy)                     | Gets or sets the MobileAppliedBy.                                         |
| [`ReferenceAppliedBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ReferenceAppliedBy)               | Gets or sets the ReferenceAppliedBy.                                      |
| [`Rotations`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.Rotations)                                 | Gets or sets the Rotations.                                               |
| [`SolverElementType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.SolverElementType)                 | Gets or sets the SolverElementType.                                       |
| [`TranslationX`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.TranslationX)                           | Gets or sets the TranslationX.                                            |
| [`TranslationY`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.TranslationY)                           | Gets or sets the TranslationY.                                            |
| [`TranslationZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.TranslationZ)                           | Gets or sets the TranslationZ.                                            |
| [`MobileRelaxationMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.MobileRelaxationMethod)       | Gets or sets the MobileRelaxationMethod.                                  |
| [`ReferenceRelaxationMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ReferenceRelaxationMethod) | Gets or sets the ReferenceRelaxationMethod.                               |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.Suppressed)                               | Gets or sets the Suppressed.                                              |
| [`SuppressedForSolve`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.SuppressedForSolve)               | Gets the SuppressedForSolve.                                              |
| [`ElementCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ElementCoordinateSystem)     | Gets or sets the ElementCoordinateSystem.                                 |
| [`MobileCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.MobileCoordinateSystem)       | Gets or sets the MobileCoordinateSystem.                                  |
| [`ReferenceCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ReferenceCoordinateSystem) | Gets or sets the ReferenceCoordinateSystem.                               |
| [`MobileLocation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.MobileLocation)                       | Gets or sets the MobileLocation.                                          |
| [`CurveOrientationSurface`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.CurveOrientationSurface)     | Gets or sets the CurveOrientationSurface.                                 |
| [`ReferenceLocation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ReferenceLocation)                 | Gets or sets the ReferenceLocation.                                       |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                              |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.Children)                                   | Gets the list of children.                                                |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.Comments)                                   | Gets the list of associated comments.                                     |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.Figures)                                     | Gets the list of associated figures.                                      |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.Images)                                       | Gets the list of associated images.                                       |
| [`ReadOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.ReadOnly)                                   | Gets or sets the ReadOnly.                                                |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#id0)                                        | Gets the internal object. For advanced usage only.                        |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.Properties)                               | Gets the list of properties for this object.                              |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Joint.md#Joint.VisibleProperties)                 | Gets the list of properties that are visible for this object.             |

<a id="property-detail"></a>

## Property detail

<a id="Joint.BushingWorksheet"></a>

### *property* Joint.BushingWorksheet *: Ansys.ACT.Interfaces.Common.IWorksheet | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the Bushing Coeffients worksheet associated with Bushing Joint.

<!-- !! processed by numpydoc !! -->

<a id="Joint.InternalObject"></a>

### *property* Joint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSJointAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Joint.FrictionCoefficient"></a>

### *property* Joint.FrictionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrictionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="Joint.JointElementAPDLName"></a>

### *property* Joint.JointElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JointElementAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RestitutionFactor"></a>

### *property* Joint.RestitutionFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestitutionFactor.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileBeamMaterial"></a>

### *property* Joint.MobileBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileBody"></a>

### *property* Joint.MobileBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceBeamMaterial"></a>

### *property* Joint.ReferenceBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceBody"></a>

### *property* Joint.ReferenceBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBody.

<!-- !! processed by numpydoc !! -->

<a id="Joint.EffectiveLength"></a>

### *property* Joint.EffectiveLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EffectiveLength.

<!-- !! processed by numpydoc !! -->

<a id="Joint.InnerRadius"></a>

### *property* Joint.InnerRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InnerRadius.

<!-- !! processed by numpydoc !! -->

<a id="Joint.OuterRadius"></a>

### *property* Joint.OuterRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OuterRadius.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Radius"></a>

### *property* Joint.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobilePinballRegion"></a>

### *property* Joint.MobilePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferencePinballRegion"></a>

### *property* Joint.ReferencePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RadialGapHeight"></a>

### *property* Joint.RadialGapHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGapHeight.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RadialGapInnerDiameter"></a>

### *property* Joint.RadialGapInnerDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGapInnerDiameter.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RadialOuterDiameter"></a>

### *property* Joint.RadialOuterDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialOuterDiameter.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ScrewPitch"></a>

### *property* Joint.ScrewPitch *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScrewPitch.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RXMaximum"></a>

### *property* Joint.RXMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RXMinimum"></a>

### *property* Joint.RXMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RYMaximum"></a>

### *property* Joint.RYMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RYMinimum"></a>

### *property* Joint.RYMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RZMaximum"></a>

### *property* Joint.RZMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RZMinimum"></a>

### *property* Joint.RZMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.XMaximum"></a>

### *property* Joint.XMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.XMinimum"></a>

### *property* Joint.XMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.YMaximum"></a>

### *property* Joint.YMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.YMinimum"></a>

### *property* Joint.YMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ZMaximum"></a>

### *property* Joint.ZMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ZMinimum"></a>

### *property* Joint.ZMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.TorsionalDamping"></a>

### *property* Joint.TorsionalDamping *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalDamping.

<!-- !! processed by numpydoc !! -->

<a id="Joint.TorsionalStiffness"></a>

### *property* Joint.TorsionalStiffness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalStiffness.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileBeamRadius"></a>

### *property* Joint.MobileBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceBeamRadius"></a>

### *property* Joint.ReferenceBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GeneralPrimitiveType"></a>

### *property* Joint.GeneralPrimitiveType *: [Ansys.Mechanical.DataModel.Enums.JointGeneralPrimitiveType](../../../../Mechanical/DataModel/Enums/JointGeneralPrimitiveType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointGeneralPrimitiveType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralPrimitiveType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.InitialPosition"></a>

### *property* Joint.InitialPosition *: [Ansys.Mechanical.DataModel.Enums.JointInitialPosition](../../../../Mechanical/DataModel/Enums/JointInitialPosition.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointInitialPosition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialPosition.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileBehavior"></a>

### *property* Joint.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceBehavior"></a>

### *property* Joint.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Formulation"></a>

### *property* Joint.Formulation *: [Ansys.Mechanical.DataModel.Enums.JointFormulation](../../../../Mechanical/DataModel/Enums/JointFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

<a id="Joint.JointFrictionType"></a>

### *property* Joint.JointFrictionType *: [Ansys.Mechanical.DataModel.Enums.JointFrictionType](../../../../Mechanical/DataModel/Enums/JointFrictionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointFrictionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JointFrictionType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileFormulation"></a>

### *property* Joint.MobileFormulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../../Mechanical/DataModel/Enums/RemotePointFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemotePointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileFormulation.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RadialGapType"></a>

### *property* Joint.RadialGapType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGapType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceFormulation"></a>

### *property* Joint.ReferenceFormulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../../Mechanical/DataModel/Enums/RemotePointFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemotePointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceFormulation.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ConnectionType"></a>

### *property* Joint.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.JointScopingType](../../../../Mechanical/DataModel/Enums/JointScopingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RXMaximumType"></a>

### *property* Joint.RXMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RXMinimumType"></a>

### *property* Joint.RXMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RYMaximumType"></a>

### *property* Joint.RYMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RYMinimumType"></a>

### *property* Joint.RYMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RZMaximumType"></a>

### *property* Joint.RZMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RZMinimumType"></a>

### *property* Joint.RZMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.XMaximumType"></a>

### *property* Joint.XMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.XMinimumType"></a>

### *property* Joint.XMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.YMaximumType"></a>

### *property* Joint.YMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.YMinimumType"></a>

### *property* Joint.YMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ZMaximumType"></a>

### *property* Joint.ZMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ZMinimumType"></a>

### *property* Joint.ZMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Type"></a>

### *property* Joint.Type *: [Ansys.Mechanical.DataModel.Enums.JointType](../../../../Mechanical/DataModel/Enums/JointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileAppliedBy"></a>

### *property* Joint.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceAppliedBy"></a>

### *property* Joint.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Rotations"></a>

### *property* Joint.Rotations *: [Ansys.Mechanical.DataModel.Enums.JointRotationDOFType](../../../../Mechanical/DataModel/Enums/JointRotationDOFType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointRotationDOFType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Rotations.

<!-- !! processed by numpydoc !! -->

<a id="Joint.SolverElementType"></a>

### *property* Joint.SolverElementType *: [Ansys.Mechanical.DataModel.Enums.JointSolverElementType](../../../../Mechanical/DataModel/Enums/JointSolverElementType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointSolverElementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverElementType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.TranslationX"></a>

### *property* Joint.TranslationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationX.

<!-- !! processed by numpydoc !! -->

<a id="Joint.TranslationY"></a>

### *property* Joint.TranslationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationY.

<!-- !! processed by numpydoc !! -->

<a id="Joint.TranslationZ"></a>

### *property* Joint.TranslationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationZ.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileRelaxationMethod"></a>

### *property* Joint.MobileRelaxationMethod *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileRelaxationMethod.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceRelaxationMethod"></a>

### *property* Joint.ReferenceRelaxationMethod *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRelaxationMethod.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Suppressed"></a>

### *property* Joint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Joint.SuppressedForSolve"></a>

### *property* Joint.SuppressedForSolve *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SuppressedForSolve.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ElementCoordinateSystem"></a>

### *property* Joint.ElementCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileCoordinateSystem"></a>

### *property* Joint.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceCoordinateSystem"></a>

### *property* Joint.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileLocation"></a>

### *property* Joint.MobileLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="Joint.CurveOrientationSurface"></a>

### *property* Joint.CurveOrientationSurface *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurveOrientationSurface.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceLocation"></a>

### *property* Joint.ReferenceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="Joint.DataModelObjectCategory"></a>

### *property* Joint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Children"></a>

### *property* Joint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Comments"></a>

### *property* Joint.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Figures"></a>

### *property* Joint.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Images"></a>

### *property* Joint.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReadOnly"></a>

### *property* Joint.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Joint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Properties"></a>

### *property* Joint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Joint.VisibleProperties"></a>

### *property* Joint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Joint.PromoteToNamedSelection"></a>

### Joint.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Joint.PromoteToRemotePoint"></a>

### Joint.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="Joint.AddCommandSnippet"></a>

### Joint.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Joint.FlipReferenceMobile"></a>

### Joint.FlipReferenceMobile()

Run the FlipReferenceMobile action.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RenameBasedOnDefinition"></a>

### Joint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Delete"></a>

### Joint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetChildren"></a>

### Joint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Joint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Joint.AddComment"></a>

### Joint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Joint.AddFigure"></a>

### Joint.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Joint.AddImage"></a>

### Joint.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Activate"></a>

### Joint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Joint.CopyTo"></a>

### Joint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Duplicate"></a>

### Joint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GroupAllSimilarChildren"></a>

### Joint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GroupSimilarObjects"></a>

### Joint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Joint.PropertyByName"></a>

### Joint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Joint.PropertyByAPIName"></a>

### Joint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Joint.CreateParameter"></a>

### Joint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetParameter"></a>

### Joint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RemoveParameter"></a>

### Joint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

