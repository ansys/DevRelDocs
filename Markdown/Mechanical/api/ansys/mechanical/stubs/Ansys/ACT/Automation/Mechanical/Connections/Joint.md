# Joint

### *class* Joint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Joint.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#Joint.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToRemotePoint`](#Joint.PromoteToRemotePoint)         | Run the PromoteToRemotePoint action.                                              |
| [`AddCommandSnippet`](#Joint.AddCommandSnippet)               | Creates a new CommandSnippet                                                      |
| [`FlipReferenceMobile`](#Joint.FlipReferenceMobile)           | Run the FlipReferenceMobile action.                                               |
| [`RenameBasedOnDefinition`](#Joint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#Joint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Joint.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#Joint.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#Joint.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#Joint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#Joint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Joint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Joint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Joint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Joint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Joint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#Joint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Joint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Joint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`BushingWorksheet`](#Joint.BushingWorksheet)                                                                          | Returns the Bushing Coeffients worksheet associated with Bushing Joint.   |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                        |
| [`FrictionCoefficient`](#Joint.FrictionCoefficient)                                                                    | Gets or sets the FrictionCoefficient.                                     |
| [`JointElementAPDLName`](#Joint.JointElementAPDLName)                                                                  | Gets or sets the JointElementAPDLName.                                    |
| [`RestitutionFactor`](#Joint.RestitutionFactor)                                                                        | Gets or sets the RestitutionFactor.                                       |
| [`MobileBeamMaterial`](#Joint.MobileBeamMaterial)                                                                      | Gets or sets the MobileBeamMaterial.                                      |
| [`MobileBody`](#Joint.MobileBody)                                                                                      | Gets the MobileBody.                                                      |
| [`ReferenceBeamMaterial`](#Joint.ReferenceBeamMaterial)                                                                | Gets or sets the ReferenceBeamMaterial.                                   |
| [`ReferenceBody`](#Joint.ReferenceBody)                                                                                | Gets the ReferenceBody.                                                   |
| [`EffectiveLength`](#Joint.EffectiveLength)                                                                            | Gets or sets the EffectiveLength.                                         |
| [`InnerRadius`](#Joint.InnerRadius)                                                                                    | Gets or sets the InnerRadius.                                             |
| [`OuterRadius`](#Joint.OuterRadius)                                                                                    | Gets or sets the OuterRadius.                                             |
| [`Radius`](#Joint.Radius)                                                                                              | Gets or sets the Radius.                                                  |
| [`MobilePinballRegion`](#Joint.MobilePinballRegion)                                                                    | Gets or sets the MobilePinballRegion.                                     |
| [`ReferencePinballRegion`](#Joint.ReferencePinballRegion)                                                              | Gets or sets the ReferencePinballRegion.                                  |
| [`RadialGapHeight`](#Joint.RadialGapHeight)                                                                            | Gets or sets the RadialGapHeight.                                         |
| [`RadialGapInnerDiameter`](#Joint.RadialGapInnerDiameter)                                                              | Gets or sets the RadialGapInnerDiameter.                                  |
| [`RadialOuterDiameter`](#Joint.RadialOuterDiameter)                                                                    | Gets or sets the RadialOuterDiameter.                                     |
| [`ScrewPitch`](#Joint.ScrewPitch)                                                                                      | Gets or sets the ScrewPitch.                                              |
| [`RXMaximum`](#Joint.RXMaximum)                                                                                        | Gets or sets the RXMaximum.                                               |
| [`RXMinimum`](#Joint.RXMinimum)                                                                                        | Gets or sets the RXMinimum.                                               |
| [`RYMaximum`](#Joint.RYMaximum)                                                                                        | Gets or sets the RYMaximum.                                               |
| [`RYMinimum`](#Joint.RYMinimum)                                                                                        | Gets or sets the RYMinimum.                                               |
| [`RZMaximum`](#Joint.RZMaximum)                                                                                        | Gets or sets the RZMaximum.                                               |
| [`RZMinimum`](#Joint.RZMinimum)                                                                                        | Gets or sets the RZMinimum.                                               |
| [`XMaximum`](#Joint.XMaximum)                                                                                          | Gets or sets the XMaximum.                                                |
| [`XMinimum`](#Joint.XMinimum)                                                                                          | Gets or sets the XMinimum.                                                |
| [`YMaximum`](#Joint.YMaximum)                                                                                          | Gets or sets the YMaximum.                                                |
| [`YMinimum`](#Joint.YMinimum)                                                                                          | Gets or sets the YMinimum.                                                |
| [`ZMaximum`](#Joint.ZMaximum)                                                                                          | Gets or sets the ZMaximum.                                                |
| [`ZMinimum`](#Joint.ZMinimum)                                                                                          | Gets or sets the ZMinimum.                                                |
| [`TorsionalDamping`](#Joint.TorsionalDamping)                                                                          | Gets or sets the TorsionalDamping.                                        |
| [`TorsionalStiffness`](#Joint.TorsionalStiffness)                                                                      | Gets or sets the TorsionalStiffness.                                      |
| [`MobileBeamRadius`](#Joint.MobileBeamRadius)                                                                          | Gets or sets the MobileBeamRadius.                                        |
| [`ReferenceBeamRadius`](#Joint.ReferenceBeamRadius)                                                                    | Gets or sets the ReferenceBeamRadius.                                     |
| [`GeneralPrimitiveType`](#Joint.GeneralPrimitiveType)                                                                  | Gets or sets the GeneralPrimitiveType.                                    |
| [`InitialPosition`](#Joint.InitialPosition)                                                                            | Gets or sets the InitialPosition.                                         |
| [`MobileBehavior`](#Joint.MobileBehavior)                                                                              | Gets or sets the MobileBehavior.                                          |
| [`ReferenceBehavior`](#Joint.ReferenceBehavior)                                                                        | Gets or sets the ReferenceBehavior.                                       |
| [`Formulation`](#Joint.Formulation)                                                                                    | Gets or sets the Formulation.                                             |
| [`JointFrictionType`](../../../../Mechanical/DataModel/Enums/JointFrictionType.md#JointFrictionType)                   | Gets or sets the JointFrictionType.                                       |
| [`MobileFormulation`](#Joint.MobileFormulation)                                                                        | Gets or sets the MobileFormulation.                                       |
| [`RadialGapType`](#Joint.RadialGapType)                                                                                | Gets or sets the RadialGapType.                                           |
| [`ReferenceFormulation`](#Joint.ReferenceFormulation)                                                                  | Gets or sets the ReferenceFormulation.                                    |
| [`ConnectionType`](#Joint.ConnectionType)                                                                              | Gets or sets the ConnectionType.                                          |
| [`RXMaximumType`](#Joint.RXMaximumType)                                                                                | Gets or sets the RXMaximumType.                                           |
| [`RXMinimumType`](#Joint.RXMinimumType)                                                                                | Gets or sets the RXMinimumType.                                           |
| [`RYMaximumType`](#Joint.RYMaximumType)                                                                                | Gets or sets the RYMaximumType.                                           |
| [`RYMinimumType`](#Joint.RYMinimumType)                                                                                | Gets or sets the RYMinimumType.                                           |
| [`RZMaximumType`](#Joint.RZMaximumType)                                                                                | Gets or sets the RZMaximumType.                                           |
| [`RZMinimumType`](#Joint.RZMinimumType)                                                                                | Gets or sets the RZMinimumType.                                           |
| [`XMaximumType`](#Joint.XMaximumType)                                                                                  | Gets or sets the XMaximumType.                                            |
| [`XMinimumType`](#Joint.XMinimumType)                                                                                  | Gets or sets the XMinimumType.                                            |
| [`YMaximumType`](#Joint.YMaximumType)                                                                                  | Gets or sets the YMaximumType.                                            |
| [`YMinimumType`](#Joint.YMinimumType)                                                                                  | Gets or sets the YMinimumType.                                            |
| [`ZMaximumType`](#Joint.ZMaximumType)                                                                                  | Gets or sets the ZMaximumType.                                            |
| [`ZMinimumType`](#Joint.ZMinimumType)                                                                                  | Gets or sets the ZMinimumType.                                            |
| [`Type`](#Joint.Type)                                                                                                  | Gets or sets the Type.                                                    |
| [`MobileAppliedBy`](#Joint.MobileAppliedBy)                                                                            | Gets or sets the MobileAppliedBy.                                         |
| [`ReferenceAppliedBy`](#Joint.ReferenceAppliedBy)                                                                      | Gets or sets the ReferenceAppliedBy.                                      |
| [`Rotations`](#Joint.Rotations)                                                                                        | Gets or sets the Rotations.                                               |
| [`SolverElementType`](#Joint.SolverElementType)                                                                        | Gets or sets the SolverElementType.                                       |
| [`TranslationX`](#Joint.TranslationX)                                                                                  | Gets or sets the TranslationX.                                            |
| [`TranslationY`](#Joint.TranslationY)                                                                                  | Gets or sets the TranslationY.                                            |
| [`TranslationZ`](#Joint.TranslationZ)                                                                                  | Gets or sets the TranslationZ.                                            |
| [`MobileRelaxationMethod`](#Joint.MobileRelaxationMethod)                                                              | Gets or sets the MobileRelaxationMethod.                                  |
| [`ReferenceRelaxationMethod`](#Joint.ReferenceRelaxationMethod)                                                        | Gets or sets the ReferenceRelaxationMethod.                               |
| [`Suppressed`](#Joint.Suppressed)                                                                                      | Gets or sets the Suppressed.                                              |
| [`SuppressedForSolve`](#Joint.SuppressedForSolve)                                                                      | Gets the SuppressedForSolve.                                              |
| [`ElementCoordinateSystem`](#Joint.ElementCoordinateSystem)                                                            | Gets or sets the ElementCoordinateSystem.                                 |
| [`MobileCoordinateSystem`](#Joint.MobileCoordinateSystem)                                                              | Gets or sets the MobileCoordinateSystem.                                  |
| [`ReferenceCoordinateSystem`](#Joint.ReferenceCoordinateSystem)                                                        | Gets or sets the ReferenceCoordinateSystem.                               |
| [`MobileLocation`](#Joint.MobileLocation)                                                                              | Gets or sets the MobileLocation.                                          |
| [`CurveOrientationSurface`](#Joint.CurveOrientationSurface)                                                            | Gets or sets the CurveOrientationSurface.                                 |
| [`ReferenceLocation`](#Joint.ReferenceLocation)                                                                        | Gets or sets the ReferenceLocation.                                       |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                              |
| [`Children`](#Joint.Children)                                                                                          | Gets the list of children.                                                |
| [`Comments`](#Joint.Comments)                                                                                          | Gets the list of associated comments.                                     |
| [`Figures`](#Joint.Figures)                                                                                            | Gets the list of associated figures.                                      |
| [`Images`](#Joint.Images)                                                                                              | Gets the list of associated images.                                       |
| [`ReadOnly`](#Joint.ReadOnly)                                                                                          | Gets or sets the ReadOnly.                                                |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                        |
| [`Properties`](#Joint.Properties)                                                                                      | Gets the list of properties for this object.                              |
| [`VisibleProperties`](#Joint.VisibleProperties)                                                                        | Gets the list of properties that are visible for this object.             |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import Joint
```

## Property detail

### *property* Joint.BushingWorksheet *: Ansys.ACT.Interfaces.Common.IWorksheet | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the Bushing Coeffients worksheet associated with Bushing Joint.

<!-- !! processed by numpydoc !! -->

### *property* Joint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSJointAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Joint.FrictionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrictionCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* Joint.JointElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JointElementAPDLName.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RestitutionFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestitutionFactor.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBody.

<!-- !! processed by numpydoc !! -->

### *property* Joint.EffectiveLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EffectiveLength.

<!-- !! processed by numpydoc !! -->

### *property* Joint.InnerRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InnerRadius.

<!-- !! processed by numpydoc !! -->

### *property* Joint.OuterRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OuterRadius.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobilePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferencePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RadialGapHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGapHeight.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RadialGapInnerDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGapInnerDiameter.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RadialOuterDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialOuterDiameter.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ScrewPitch *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScrewPitch.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RXMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RXMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RYMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RYMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RZMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RZMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.XMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.XMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.YMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.YMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ZMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ZMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Joint.TorsionalDamping *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalDamping.

<!-- !! processed by numpydoc !! -->

### *property* Joint.TorsionalStiffness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalStiffness.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* Joint.GeneralPrimitiveType *: [Ansys.Mechanical.DataModel.Enums.JointGeneralPrimitiveType](../../../../Mechanical/DataModel/Enums/JointGeneralPrimitiveType.md#JointGeneralPrimitiveType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralPrimitiveType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.InitialPosition *: [Ansys.Mechanical.DataModel.Enums.JointInitialPosition](../../../../Mechanical/DataModel/Enums/JointInitialPosition.md#JointInitialPosition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialPosition.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Formulation *: [Ansys.Mechanical.DataModel.Enums.JointFormulation](../../../../Mechanical/DataModel/Enums/JointFormulation.md#JointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

### *property* Joint.JointFrictionType *: [Ansys.Mechanical.DataModel.Enums.JointFrictionType](../../../../Mechanical/DataModel/Enums/JointFrictionType.md#JointFrictionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JointFrictionType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileFormulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../../Mechanical/DataModel/Enums/RemotePointFormulation.md#RemotePointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileFormulation.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RadialGapType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGapType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceFormulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../../Mechanical/DataModel/Enums/RemotePointFormulation.md#RemotePointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceFormulation.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.JointScopingType](../../../../Mechanical/DataModel/Enums/JointScopingType.md#JointScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RXMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMaximumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RXMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMinimumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RYMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMaximumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RYMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMinimumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RZMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMaximumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.RZMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMinimumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.XMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMaximumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.XMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMinimumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.YMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMaximumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.YMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMinimumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ZMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMaximumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ZMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMinimumType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Type *: [Ansys.Mechanical.DataModel.Enums.JointType](../../../../Mechanical/DataModel/Enums/JointType.md#JointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Rotations *: [Ansys.Mechanical.DataModel.Enums.JointRotationDOFType](../../../../Mechanical/DataModel/Enums/JointRotationDOFType.md#JointRotationDOFType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Rotations.

<!-- !! processed by numpydoc !! -->

### *property* Joint.SolverElementType *: [Ansys.Mechanical.DataModel.Enums.JointSolverElementType](../../../../Mechanical/DataModel/Enums/JointSolverElementType.md#JointSolverElementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverElementType.

<!-- !! processed by numpydoc !! -->

### *property* Joint.TranslationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationX.

<!-- !! processed by numpydoc !! -->

### *property* Joint.TranslationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationY.

<!-- !! processed by numpydoc !! -->

### *property* Joint.TranslationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationZ.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileRelaxationMethod *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileRelaxationMethod.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceRelaxationMethod *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRelaxationMethod.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Joint.SuppressedForSolve *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SuppressedForSolve.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ElementCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Joint.MobileLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

### *property* Joint.CurveOrientationSurface *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurveOrientationSurface.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReferenceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

### *property* Joint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Joint.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Joint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Joint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Joint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Joint.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### Joint.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

### Joint.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### Joint.FlipReferenceMobile()

Run the FlipReferenceMobile action.

<!-- !! processed by numpydoc !! -->

### Joint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### Joint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Joint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Joint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Joint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Joint.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Joint.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Joint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Joint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Joint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Joint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Joint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Joint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Joint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Joint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Joint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Joint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
