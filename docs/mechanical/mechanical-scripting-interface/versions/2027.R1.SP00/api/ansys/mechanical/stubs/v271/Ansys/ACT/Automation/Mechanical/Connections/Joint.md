# `Joint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Joint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.Joint(internalObject: Any)

<a id="Joint"></a>

### *class* Joint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Joint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Joint.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#Joint.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#Joint.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Joint.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Joint.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Joint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Joint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Joint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Joint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Joint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Joint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Joint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Joint.Equals)                                       | Equals method.                                                                              |
| [`FlipReferenceMobile`](#Joint.FlipReferenceMobile)             | Run the FlipReferenceMobile action.                                                         |
| [`GetAPIName`](#Joint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Joint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Joint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Joint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Joint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Joint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Joint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Joint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Joint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Joint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Joint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Joint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Joint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetTableGenerator`](#Joint.GetTableGenerator)                 | GetTableGenerator method.                                                                   |
| [`GetVisibleProperties`](#Joint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Joint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Joint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Joint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Joint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Joint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Joint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Joint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#Joint.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PromoteToRemotePoint`](#Joint.PromoteToRemotePoint)           | Run the PromoteToRemotePoint action.                                                        |
| [`PropertyByAPIName`](#Joint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Joint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Joint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Joint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Joint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#Joint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#Joint.AttachedRefs)                                               | AttachedRefs property.                                                                                                                                                                                                                       |
| [`BushingWorksheet`](#Joint.BushingWorksheet)                                       | Returns the Bushing Coeffients worksheet associated with Bushing Joint.                                                                                                                                                                      |
| [`Children`](#Joint.Children)                                                       | Gets the list of children.                                                                                                                                                                                                                   |
| [`ClsId`](#Joint.ClsId)                                                             | ClsId property.                                                                                                                                                                                                                              |
| [`Comments`](#Joint.Comments)                                                       | Gets the list of associated comments.                                                                                                                                                                                                        |
| [`ConnectionType`](#Joint.ConnectionType)                                           | Gets or sets the ConnectionType.                                                                                                                                                                                                             |
| [`CurveOrientationSurface`](#Joint.CurveOrientationSurface)                         | Gets or sets the CurveOrientationSurface.                                                                                                                                                                                                    |
| [`DataModelObjectCategory`](#Joint.DataModelObjectCategory)                         | Gets the current DataModelObject's category.                                                                                                                                                                                                 |
| [`EffectiveLength`](#Joint.EffectiveLength)                                         | Gets or sets the EffectiveLength.                                                                                                                                                                                                            |
| [`ElementCoordinateSystem`](#Joint.ElementCoordinateSystem)                         | Gets or sets the ElementCoordinateSystem.                                                                                                                                                                                                    |
| [`Figures`](#Joint.Figures)                                                         | Gets the list of associated figures.                                                                                                                                                                                                         |
| [`Formulation`](#Joint.Formulation)                                                 | Gets or sets the Formulation.                                                                                                                                                                                                                |
| [`FrictionCoefficient`](#Joint.FrictionCoefficient)                                 | Gets or sets the FrictionCoefficient.                                                                                                                                                                                                        |
| [`GeneralPrimitiveType`](#Joint.GeneralPrimitiveType)                               | Gets or sets the GeneralPrimitiveType.                                                                                                                                                                                                       |
| [`GloballyAvailable`](#Joint.GloballyAvailable)                                     | Gets or sets the GloballyAvailable.                                                                                                                                                                                                          |
| [`GroupingFolder`](#Joint.GroupingFolder)                                           | GroupingFolder property.                                                                                                                                                                                                                     |
| [`IconName`](#Joint.IconName)                                                       | IconName property.                                                                                                                                                                                                                           |
| [`Images`](#Joint.Images)                                                           | Gets the list of associated images.                                                                                                                                                                                                          |
| [`ImportableObjectSourceId`](#Joint.ImportableObjectSourceId)                       | ImportableObjectSourceId property.                                                                                                                                                                                                           |
| [`InitialPosition`](#Joint.InitialPosition)                                         | Gets or sets the InitialPosition.                                                                                                                                                                                                            |
| [`InnerRadius`](#Joint.InnerRadius)                                                 | Gets or sets the InnerRadius.                                                                                                                                                                                                                |
| [`InternalObject`](#Joint.InternalObject)                                           | Gets the internal object. For advanced usage only.                                                                                                                                                                                           |
| [`JointElementAPDLName`](#Joint.JointElementAPDLName)                               | Gets or sets the JointElementAPDLName.                                                                                                                                                                                                       |
| [`JointFrictionType`](#Joint.JointFrictionType)                                     | Gets or sets the JointFrictionType.                                                                                                                                                                                                          |
| [`MobileAppliedBy`](#Joint.MobileAppliedBy)                                         | Gets or sets the MobileAppliedBy.                                                                                                                                                                                                            |
| [`MobileBeamCoincidentLengthFactor`](#Joint.MobileBeamCoincidentLengthFactor)       | Gets or sets the Coincident Length Factor on mobile side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1.    |
| [`MobileBeamMaterial`](#Joint.MobileBeamMaterial)                                   | Gets or sets the MobileBeamMaterial.                                                                                                                                                                                                         |
| [`MobileBeamRadius`](#Joint.MobileBeamRadius)                                       | Gets or sets the MobileBeamRadius.                                                                                                                                                                                                           |
| [`MobileBehavior`](#Joint.MobileBehavior)                                           | Gets or sets the MobileBehavior.                                                                                                                                                                                                             |
| [`MobileBody`](#Joint.MobileBody)                                                   | Gets the MobileBody.                                                                                                                                                                                                                         |
| [`MobileCoordinateSystem`](#Joint.MobileCoordinateSystem)                           | Gets or sets the MobileCoordinateSystem.                                                                                                                                                                                                     |
| [`MobileFormulation`](#Joint.MobileFormulation)                                     | Gets or sets the MobileFormulation.                                                                                                                                                                                                          |
| [`MobileLocation`](#Joint.MobileLocation)                                           | Gets or sets the MobileLocation.                                                                                                                                                                                                             |
| [`MobileNodeId`](#Joint.MobileNodeId)                                               | Returns Mobile Node Id.                                                                                                                                                                                                                      |
| [`MobilePinballRegion`](#Joint.MobilePinballRegion)                                 | Gets or sets the MobilePinballRegion.                                                                                                                                                                                                        |
| [`MobileRelaxationMethod`](#Joint.MobileRelaxationMethod)                           | Gets or sets the MobileRelaxationMethod.                                                                                                                                                                                                     |
| [`Name`](#Joint.Name)                                                               | Name property.                                                                                                                                                                                                                               |
| [`ObjectId`](#Joint.ObjectId)                                                       | ObjectId property.                                                                                                                                                                                                                           |
| [`ObjectState`](#Joint.ObjectState)                                                 | ObjectState property.                                                                                                                                                                                                                        |
| [`ObjectTags`](#Joint.ObjectTags)                                                   | ObjectTags property.                                                                                                                                                                                                                         |
| [`OuterRadius`](#Joint.OuterRadius)                                                 | Gets or sets the OuterRadius.                                                                                                                                                                                                                |
| [`Parent`](#Joint.Parent)                                                           | Parent property.                                                                                                                                                                                                                             |
| [`Properties`](#Joint.Properties)                                                   | Gets the list of properties for this object.                                                                                                                                                                                                 |
| [`RXMaximum`](#Joint.RXMaximum)                                                     | Gets or sets the RXMaximum.                                                                                                                                                                                                                  |
| [`RXMaximumType`](#Joint.RXMaximumType)                                             | Gets or sets the RXMaximumType.                                                                                                                                                                                                              |
| [`RXMinimum`](#Joint.RXMinimum)                                                     | Gets or sets the RXMinimum.                                                                                                                                                                                                                  |
| [`RXMinimumType`](#Joint.RXMinimumType)                                             | Gets or sets the RXMinimumType.                                                                                                                                                                                                              |
| [`RYMaximum`](#Joint.RYMaximum)                                                     | Gets or sets the RYMaximum.                                                                                                                                                                                                                  |
| [`RYMaximumType`](#Joint.RYMaximumType)                                             | Gets or sets the RYMaximumType.                                                                                                                                                                                                              |
| [`RYMinimum`](#Joint.RYMinimum)                                                     | Gets or sets the RYMinimum.                                                                                                                                                                                                                  |
| [`RYMinimumType`](#Joint.RYMinimumType)                                             | Gets or sets the RYMinimumType.                                                                                                                                                                                                              |
| [`RZMaximum`](#Joint.RZMaximum)                                                     | Gets or sets the RZMaximum.                                                                                                                                                                                                                  |
| [`RZMaximumType`](#Joint.RZMaximumType)                                             | Gets or sets the RZMaximumType.                                                                                                                                                                                                              |
| [`RZMinimum`](#Joint.RZMinimum)                                                     | Gets or sets the RZMinimum.                                                                                                                                                                                                                  |
| [`RZMinimumType`](#Joint.RZMinimumType)                                             | Gets or sets the RZMinimumType.                                                                                                                                                                                                              |
| [`RadialGapHeight`](#Joint.RadialGapHeight)                                         | Gets or sets the RadialGapHeight.                                                                                                                                                                                                            |
| [`RadialGapInnerDiameter`](#Joint.RadialGapInnerDiameter)                           | Gets or sets the RadialGapInnerDiameter.                                                                                                                                                                                                     |
| [`RadialGapType`](#Joint.RadialGapType)                                             | Gets or sets the RadialGapType.                                                                                                                                                                                                              |
| [`RadialOuterDiameter`](#Joint.RadialOuterDiameter)                                 | Gets or sets the RadialOuterDiameter.                                                                                                                                                                                                        |
| [`Radius`](#Joint.Radius)                                                           | Gets or sets the Radius.                                                                                                                                                                                                                     |
| [`ReadOnly`](#Joint.ReadOnly)                                                       | Gets or sets the ReadOnly.                                                                                                                                                                                                                   |
| [`ReferenceAppliedBy`](#Joint.ReferenceAppliedBy)                                   | Gets or sets the ReferenceAppliedBy.                                                                                                                                                                                                         |
| [`ReferenceBeamCoincidentLengthFactor`](#Joint.ReferenceBeamCoincidentLengthFactor) | Gets or sets the Coincident Length Factor on reference side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1. |
| [`ReferenceBeamMaterial`](#Joint.ReferenceBeamMaterial)                             | Gets or sets the ReferenceBeamMaterial.                                                                                                                                                                                                      |
| [`ReferenceBeamRadius`](#Joint.ReferenceBeamRadius)                                 | Gets or sets the ReferenceBeamRadius.                                                                                                                                                                                                        |
| [`ReferenceBehavior`](#Joint.ReferenceBehavior)                                     | Gets or sets the ReferenceBehavior.                                                                                                                                                                                                          |
| [`ReferenceBody`](#Joint.ReferenceBody)                                             | Gets the ReferenceBody.                                                                                                                                                                                                                      |
| [`ReferenceCoordinateSystem`](#Joint.ReferenceCoordinateSystem)                     | Gets or sets the ReferenceCoordinateSystem.                                                                                                                                                                                                  |
| [`ReferenceFormulation`](#Joint.ReferenceFormulation)                               | Gets or sets the ReferenceFormulation.                                                                                                                                                                                                       |
| [`ReferenceLocation`](#Joint.ReferenceLocation)                                     | Gets or sets the ReferenceLocation.                                                                                                                                                                                                          |
| [`ReferenceNodeId`](#Joint.ReferenceNodeId)                                         | Returns Reference Node Id.                                                                                                                                                                                                                   |
| [`ReferencePinballRegion`](#Joint.ReferencePinballRegion)                           | Gets or sets the ReferencePinballRegion.                                                                                                                                                                                                     |
| [`ReferenceRelaxationMethod`](#Joint.ReferenceRelaxationMethod)                     | Gets or sets the ReferenceRelaxationMethod.                                                                                                                                                                                                  |
| [`RestitutionFactor`](#Joint.RestitutionFactor)                                     | Gets or sets the RestitutionFactor.                                                                                                                                                                                                          |
| [`Rotations`](#Joint.Rotations)                                                     | Gets or sets the Rotations.                                                                                                                                                                                                                  |
| [`ScrewPitch`](#Joint.ScrewPitch)                                                   | Gets or sets the ScrewPitch.                                                                                                                                                                                                                 |
| [`SolverElementType`](#Joint.SolverElementType)                                     | Gets or sets the SolverElementType.                                                                                                                                                                                                          |
| [`State`](#Joint.State)                                                             | State property.                                                                                                                                                                                                                              |
| [`Suppressed`](#Joint.Suppressed)                                                   | Gets or sets the Suppressed.                                                                                                                                                                                                                 |
| [`SuppressedForSolve`](#Joint.SuppressedForSolve)                                   | Gets the SuppressedForSolve.                                                                                                                                                                                                                 |
| [`TorsionalDamping`](#Joint.TorsionalDamping)                                       | Gets or sets the TorsionalDamping.                                                                                                                                                                                                           |
| [`TorsionalStiffness`](#Joint.TorsionalStiffness)                                   | Gets or sets the TorsionalStiffness.                                                                                                                                                                                                         |
| [`TransferableObjectId`](#Joint.TransferableObjectId)                               | TransferableObjectId property.                                                                                                                                                                                                               |
| [`TranslationX`](#Joint.TranslationX)                                               | Gets or sets the TranslationX.                                                                                                                                                                                                               |
| [`TranslationY`](#Joint.TranslationY)                                               | Gets or sets the TranslationY.                                                                                                                                                                                                               |
| [`TranslationZ`](#Joint.TranslationZ)                                               | Gets or sets the TranslationZ.                                                                                                                                                                                                               |
| [`Type`](#Joint.Type)                                                               | Gets or sets the Type.                                                                                                                                                                                                                       |
| [`VisibleProperties`](#Joint.VisibleProperties)                                     | Gets the list of properties that are visible for this object.                                                                                                                                                                                |
| [`XMaximum`](#Joint.XMaximum)                                                       | Gets or sets the XMaximum.                                                                                                                                                                                                                   |
| [`XMaximumType`](#Joint.XMaximumType)                                               | Gets or sets the XMaximumType.                                                                                                                                                                                                               |
| [`XMinimum`](#Joint.XMinimum)                                                       | Gets or sets the XMinimum.                                                                                                                                                                                                                   |
| [`XMinimumType`](#Joint.XMinimumType)                                               | Gets or sets the XMinimumType.                                                                                                                                                                                                               |
| [`YMaximum`](#Joint.YMaximum)                                                       | Gets or sets the YMaximum.                                                                                                                                                                                                                   |
| [`YMaximumType`](#Joint.YMaximumType)                                               | Gets or sets the YMaximumType.                                                                                                                                                                                                               |
| [`YMinimum`](#Joint.YMinimum)                                                       | Gets or sets the YMinimum.                                                                                                                                                                                                                   |
| [`YMinimumType`](#Joint.YMinimumType)                                               | Gets or sets the YMinimumType.                                                                                                                                                                                                               |
| [`ZMaximum`](#Joint.ZMaximum)                                                       | Gets or sets the ZMaximum.                                                                                                                                                                                                                   |
| [`ZMaximumType`](#Joint.ZMaximumType)                                               | Gets or sets the ZMaximumType.                                                                                                                                                                                                               |
| [`ZMinimum`](#Joint.ZMinimum)                                                       | Gets or sets the ZMinimum.                                                                                                                                                                                                                   |
| [`ZMinimumType`](#Joint.ZMinimumType)                                               | Gets or sets the ZMinimumType.                                                                                                                                                                                                               |

<a id="property-detail"></a>

## Property detail

<a id="Joint.AttachedRefs"></a>

### *property* Joint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.BushingWorksheet"></a>

### *property* Joint.BushingWorksheet *: [Ansys.ACT.Interfaces.Common.IWorksheet](../../../Interfaces/Common/IWorksheet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IWorksheet) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the Bushing Coeffients worksheet associated with Bushing Joint.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Children"></a>

### *property* Joint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ClsId"></a>

### *property* Joint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Comments"></a>

### *property* Joint.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ConnectionType"></a>

### *property* Joint.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.JointScopingType](../../../../Mechanical/DataModel/Enums/JointScopingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointScopingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.CurveOrientationSurface"></a>

### *property* Joint.CurveOrientationSurface *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurveOrientationSurface.

<!-- !! processed by numpydoc !! -->

<a id="Joint.DataModelObjectCategory"></a>

### *property* Joint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Joint.EffectiveLength"></a>

### *property* Joint.EffectiveLength *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EffectiveLength.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ElementCoordinateSystem"></a>

### *property* Joint.ElementCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElementCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Figures"></a>

### *property* Joint.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Formulation"></a>

### *property* Joint.Formulation *: [Ansys.Mechanical.DataModel.Enums.JointFormulation](../../../../Mechanical/DataModel/Enums/JointFormulation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointFormulation) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

<a id="Joint.FrictionCoefficient"></a>

### *property* Joint.FrictionCoefficient *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrictionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GeneralPrimitiveType"></a>

### *property* Joint.GeneralPrimitiveType *: [Ansys.Mechanical.DataModel.Enums.JointGeneralPrimitiveType](../../../../Mechanical/DataModel/Enums/JointGeneralPrimitiveType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointGeneralPrimitiveType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeneralPrimitiveType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GloballyAvailable"></a>

### *property* Joint.GloballyAvailable *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GloballyAvailable.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GroupingFolder"></a>

### *property* Joint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.IconName"></a>

### *property* Joint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Images"></a>

### *property* Joint.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ImportableObjectSourceId"></a>

### *property* Joint.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.InitialPosition"></a>

### *property* Joint.InitialPosition *: [Ansys.Mechanical.DataModel.Enums.JointInitialPosition](../../../../Mechanical/DataModel/Enums/JointInitialPosition.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointInitialPosition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InitialPosition.

<!-- !! processed by numpydoc !! -->

<a id="Joint.InnerRadius"></a>

### *property* Joint.InnerRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InnerRadius.

<!-- !! processed by numpydoc !! -->

<a id="Joint.InternalObject"></a>

### *property* Joint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSJointAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Joint.JointElementAPDLName"></a>

### *property* Joint.JointElementAPDLName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the JointElementAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="Joint.JointFrictionType"></a>

### *property* Joint.JointFrictionType *: [Ansys.Mechanical.DataModel.Enums.JointFrictionType](../../../../Mechanical/DataModel/Enums/JointFrictionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointFrictionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the JointFrictionType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileAppliedBy"></a>

### *property* Joint.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileBeamCoincidentLengthFactor"></a>

### *property* Joint.MobileBeamCoincidentLengthFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coincident Length Factor on mobile side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileBeamMaterial"></a>

### *property* Joint.MobileBeamMaterial *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileBeamRadius"></a>

### *property* Joint.MobileBeamRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileBehavior"></a>

### *property* Joint.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileBody"></a>

### *property* Joint.MobileBody *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileCoordinateSystem"></a>

### *property* Joint.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileFormulation"></a>

### *property* Joint.MobileFormulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../../Mechanical/DataModel/Enums/RemotePointFormulation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RemotePointFormulation) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileFormulation.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileLocation"></a>

### *property* Joint.MobileLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileNodeId"></a>

### *property* Joint.MobileNodeId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns Mobile Node Id.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobilePinballRegion"></a>

### *property* Joint.MobilePinballRegion *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobilePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Joint.MobileRelaxationMethod"></a>

### *property* Joint.MobileRelaxationMethod *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileRelaxationMethod.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Name"></a>

### *property* Joint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ObjectId"></a>

### *property* Joint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ObjectState"></a>

### *property* Joint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ObjectTags"></a>

### *property* Joint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.OuterRadius"></a>

### *property* Joint.OuterRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OuterRadius.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Parent"></a>

### *property* Joint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Properties"></a>

### *property* Joint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RXMaximum"></a>

### *property* Joint.RXMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RXMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RXMaximumType"></a>

### *property* Joint.RXMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RXMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RXMinimum"></a>

### *property* Joint.RXMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RXMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RXMinimumType"></a>

### *property* Joint.RXMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RXMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RYMaximum"></a>

### *property* Joint.RYMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RYMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RYMaximumType"></a>

### *property* Joint.RYMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RYMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RYMinimum"></a>

### *property* Joint.RYMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RYMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RYMinimumType"></a>

### *property* Joint.RYMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RYMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RZMaximum"></a>

### *property* Joint.RZMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RZMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RZMaximumType"></a>

### *property* Joint.RZMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RZMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RZMinimum"></a>

### *property* Joint.RZMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RZMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RZMinimumType"></a>

### *property* Joint.RZMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RZMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RadialGapHeight"></a>

### *property* Joint.RadialGapHeight *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RadialGapHeight.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RadialGapInnerDiameter"></a>

### *property* Joint.RadialGapInnerDiameter *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RadialGapInnerDiameter.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RadialGapType"></a>

### *property* Joint.RadialGapType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RadialGapType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RadialOuterDiameter"></a>

### *property* Joint.RadialOuterDiameter *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RadialOuterDiameter.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Radius"></a>

### *property* Joint.Radius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReadOnly"></a>

### *property* Joint.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceAppliedBy"></a>

### *property* Joint.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceBeamCoincidentLengthFactor"></a>

### *property* Joint.ReferenceBeamCoincidentLengthFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coincident Length Factor on reference side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceBeamMaterial"></a>

### *property* Joint.ReferenceBeamMaterial *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceBeamRadius"></a>

### *property* Joint.ReferenceBeamRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceBehavior"></a>

### *property* Joint.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceBody"></a>

### *property* Joint.ReferenceBody *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReferenceBody.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceCoordinateSystem"></a>

### *property* Joint.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceFormulation"></a>

### *property* Joint.ReferenceFormulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../../Mechanical/DataModel/Enums/RemotePointFormulation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RemotePointFormulation) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceFormulation.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceLocation"></a>

### *property* Joint.ReferenceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceNodeId"></a>

### *property* Joint.ReferenceNodeId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns Reference Node Id.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferencePinballRegion"></a>

### *property* Joint.ReferencePinballRegion *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ReferenceRelaxationMethod"></a>

### *property* Joint.ReferenceRelaxationMethod *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceRelaxationMethod.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RestitutionFactor"></a>

### *property* Joint.RestitutionFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RestitutionFactor.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Rotations"></a>

### *property* Joint.Rotations *: [Ansys.Mechanical.DataModel.Enums.JointRotationDOFType](../../../../Mechanical/DataModel/Enums/JointRotationDOFType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointRotationDOFType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Rotations.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ScrewPitch"></a>

### *property* Joint.ScrewPitch *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScrewPitch.

<!-- !! processed by numpydoc !! -->

<a id="Joint.SolverElementType"></a>

### *property* Joint.SolverElementType *: [Ansys.Mechanical.DataModel.Enums.JointSolverElementType](../../../../Mechanical/DataModel/Enums/JointSolverElementType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointSolverElementType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverElementType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.State"></a>

### *property* Joint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Suppressed"></a>

### *property* Joint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Joint.SuppressedForSolve"></a>

### *property* Joint.SuppressedForSolve *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SuppressedForSolve.

<!-- !! processed by numpydoc !! -->

<a id="Joint.TorsionalDamping"></a>

### *property* Joint.TorsionalDamping *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TorsionalDamping.

<!-- !! processed by numpydoc !! -->

<a id="Joint.TorsionalStiffness"></a>

### *property* Joint.TorsionalStiffness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TorsionalStiffness.

<!-- !! processed by numpydoc !! -->

<a id="Joint.TransferableObjectId"></a>

### *property* Joint.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.TranslationX"></a>

### *property* Joint.TranslationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TranslationX.

<!-- !! processed by numpydoc !! -->

<a id="Joint.TranslationY"></a>

### *property* Joint.TranslationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TranslationY.

<!-- !! processed by numpydoc !! -->

<a id="Joint.TranslationZ"></a>

### *property* Joint.TranslationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TranslationZ.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Type"></a>

### *property* Joint.Type *: [Ansys.Mechanical.DataModel.Enums.JointType](../../../../Mechanical/DataModel/Enums/JointType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="Joint.VisibleProperties"></a>

### *property* Joint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Joint.XMaximum"></a>

### *property* Joint.XMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.XMaximumType"></a>

### *property* Joint.XMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.XMinimum"></a>

### *property* Joint.XMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.XMinimumType"></a>

### *property* Joint.XMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.YMaximum"></a>

### *property* Joint.YMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.YMaximumType"></a>

### *property* Joint.YMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.YMinimum"></a>

### *property* Joint.YMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.YMinimumType"></a>

### *property* Joint.YMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ZMaximum"></a>

### *property* Joint.ZMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ZMaximumType"></a>

### *property* Joint.ZMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ZMinimum"></a>

### *property* Joint.ZMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Joint.ZMinimumType"></a>

### *property* Joint.ZMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointStopType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Joint.Activate"></a>

### Joint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Joint.AddCommandSnippet"></a>

### Joint.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Joint.AddComment"></a>

### Joint.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Joint.AddFigure"></a>

### Joint.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Joint.AddImage"></a>

### Joint.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Joint.Copy"></a>

### Joint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Joint.CopyTo"></a>

### Joint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Joint.CreateObjRef"></a>

### Joint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.CreateParameter"></a>

### Joint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Cut"></a>

### Joint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Delete"></a>

### Joint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Duplicate"></a>

### Joint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Equals"></a>

### Joint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.FlipReferenceMobile"></a>

### Joint.FlipReferenceMobile() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FlipReferenceMobile action.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetAPIName"></a>

### Joint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetAllProperties"></a>

### Joint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetChildren"></a>

### Joint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Joint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetDetailsView"></a>

### Joint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetEnumName"></a>

### Joint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetHashCode"></a>

### Joint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetIconFile"></a>

### Joint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetLifetimeService"></a>

### Joint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetObjectData"></a>

### Joint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetParameter"></a>

### Joint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetPath"></a>

### Joint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetPropertyName"></a>

### Joint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetPropertyValue"></a>

### Joint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetTableGenerator"></a>

### Joint.GetTableGenerator() → Ansys.ACT.Automation.Mechanical.Connections.ConnectionsTableGenerator

GetTableGenerator method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetVisibleProperties"></a>

### Joint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GetVisiblePropertyNames"></a>

### Joint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GroupAllSimilarChildren"></a>

### Joint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Joint.GroupSimilarObjects"></a>

### Joint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Joint.InitializeLifetimeService"></a>

### Joint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.IsPropertyEditable"></a>

### Joint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Joint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.IsPropertyVisible"></a>

### Joint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Joint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.Paste"></a>

### Joint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Joint.PromoteToNamedSelection"></a>

### Joint.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Joint.PromoteToRemotePoint"></a>

### Joint.PromoteToRemotePoint() → Iterable[[Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint)]

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="Joint.PropertyByAPIName"></a>

### Joint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Joint.PropertyById"></a>

### Joint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Joint.PropertyByName"></a>

### Joint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RemoveFromGroup"></a>

### Joint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RemoveParameter"></a>

### Joint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Joint.RenameBasedOnDefinition"></a>

### Joint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

