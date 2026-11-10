# `ContactDefinition`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactDefinition"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.ContactDefinition(internalObject: Any)

<a id="ContactDefinition"></a>

### *class* ContactDefinition(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Represents a reusable collection of shared contact settings for one or more  objects.
Link ContactRegion objects to this definition to configure common contact behavior once and apply it consistently.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| [`Activate`](#ContactDefinition.Activate)                                           | Activate the current object.                                                                           |
| [`AddComment`](#ContactDefinition.AddComment)                                       | Creates a new child Comment.                                                                           |
| [`AddFigure`](#ContactDefinition.AddFigure)                                         | Creates a new child Figure.                                                                            |
| [`AddImage`](#ContactDefinition.AddImage)                                           | Creates a new child Image.                                                                             |
| [`Copy`](#ContactDefinition.Copy)                                                   | Copies the current DataModelObject.                                                                    |
| [`CopySettingsFrom`](#ContactDefinition.CopySettingsFrom)                           | Copies all non-scope-dependent settings from the given ContactRegion into this ContactDefinition.      |
| [`CopyTo`](#ContactDefinition.CopyTo)                                               | Copies all visible properties from this object to another.                                             |
| [`CreateObjRef`](#ContactDefinition.CreateObjRef)                                   | CreateObjRef method.                                                                                   |
| [`CreateParameter`](#ContactDefinition.CreateParameter)                             | Creates a new parameter for a Property.                                                                |
| [`Cut`](#ContactDefinition.Cut)                                                     | Cuts the current DataModelObject.                                                                      |
| [`Delete`](#ContactDefinition.Delete)                                               | Run the Delete action.                                                                                 |
| [`Duplicate`](#ContactDefinition.Duplicate)                                         | Creates a copy of the current DataModelObject.                                                         |
| [`Equals`](#ContactDefinition.Equals)                                               | Equals method.                                                                                         |
| [`Export`](#ContactDefinition.Export)                                               | Exports this ContactDefinition's settings to a ContactDefinition XML document.                         |
| [`GetAPIName`](#ContactDefinition.GetAPIName)                                       | Property name bound to dispId.                                                                         |
| [`GetAllProperties`](#ContactDefinition.GetAllProperties)                           | GetAllProperties method.                                                                               |
| [`GetChildren`](#ContactDefinition.GetChildren)                                     | Gets the list of children, filtered by type.                                                           |
| [`GetDetailsView`](#ContactDefinition.GetDetailsView)                               | GetDetailsView method.                                                                                 |
| [`GetEnumName`](#ContactDefinition.GetEnumName)                                     | Enum name bound to value                                                                               |
| [`GetHashCode`](#ContactDefinition.GetHashCode)                                     | GetHashCode method.                                                                                    |
| [`GetIconFile`](#ContactDefinition.GetIconFile)                                     | GetIconFile method.                                                                                    |
| [`GetLifetimeService`](#ContactDefinition.GetLifetimeService)                       | GetLifetimeService method.                                                                             |
| [`GetObjectData`](#ContactDefinition.GetObjectData)                                 | GetObjectData method.                                                                                  |
| [`GetParameter`](#ContactDefinition.GetParameter)                                   | Gets the parameter corresponding to the given property.                                                |
| [`GetPath`](#ContactDefinition.GetPath)                                             | GetPath method.                                                                                        |
| [`GetPropertyName`](#ContactDefinition.GetPropertyName)                             | GetPropertyName method.                                                                                |
| [`GetPropertyValue`](#ContactDefinition.GetPropertyValue)                           | GetPropertyValue method.                                                                               |
| [`GetVisibleProperties`](#ContactDefinition.GetVisibleProperties)                   | GetVisibleProperties method.                                                                           |
| [`GetVisiblePropertyNames`](#ContactDefinition.GetVisiblePropertyNames)             | GetVisiblePropertyNames method.                                                                        |
| [`GroupAllSimilarChildren`](#ContactDefinition.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                                                |
| [`GroupSimilarObjects`](#ContactDefinition.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                                                    |
| [`Import`](#ContactDefinition.Import)                                               | Imports ContactDefinition settings from the specified ContactDefinition XML document into this object. |
| [`InitializeLifetimeService`](#ContactDefinition.InitializeLifetimeService)         | InitializeLifetimeService method.                                                                      |
| [`IsPropertyEditable`](#ContactDefinition.IsPropertyEditable)                       | IsPropertyEditable method.                                                                             |
| [`IsPropertyVisible`](#ContactDefinition.IsPropertyVisible)                         | IsPropertyVisible method.                                                                              |
| [`NoSeparationSlidingWarning`](#ContactDefinition.NoSeparationSlidingWarning)       | NoSeparationSlidingWarning method.                                                                     |
| [`Paste`](#ContactDefinition.Paste)                                                 | Pastes to the current DataModelObject context.                                                         |
| [`ProjectedUncoupleUtoROTWaring`](#ContactDefinition.ProjectedUncoupleUtoROTWaring) | ProjectedUncoupleUtoROTWaring method.                                                                  |
| [`PropertyByAPIName`](#ContactDefinition.PropertyByAPIName)                         | Get a property by its API name.                                                                        |
| [`PropertyById`](#ContactDefinition.PropertyById)                                   | PropertyById method.                                                                                   |
| [`PropertyByName`](#ContactDefinition.PropertyByName)                               | Get a property by its unique name.                                                                     |
| [`RemoveFromGroup`](#ContactDefinition.RemoveFromGroup)                             | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.            |
| [`RemoveParameter`](#ContactDefinition.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property.                      |
| [`ResetToDefault`](#ContactDefinition.ResetToDefault)                               | Resets this ContactDefinition's settings to their default values.                                      |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#ContactDefinition.AttachedRefs)                                       | AttachedRefs property.                                                                                                                |
| [`AutomaticElectricCapacitance`](#ContactDefinition.AutomaticElectricCapacitance)       | Gets or sets the AutomaticElectricCapacitance.                                                                                        |
| [`AutomaticElectricConductance`](#ContactDefinition.AutomaticElectricConductance)       | Gets or sets the AutomaticElectricConductance.                                                                                        |
| [`AutomaticThermalConductance`](#ContactDefinition.AutomaticThermalConductance)         | Gets or sets the AutomaticThermalConductance.                                                                                         |
| [`BeamBeamModel`](#ContactDefinition.BeamBeamModel)                                     | Gets or sets the BeamBeamModel.                                                                                                       |
| [`BeamRadius`](#ContactDefinition.BeamRadius)                                           | Gets or sets the BeamRadius.                                                                                                          |
| [`Behavior`](#ContactDefinition.Behavior)                                               | Gets or sets the Behavior.                                                                                                            |
| [`BondedMaximumOffset`](#ContactDefinition.BondedMaximumOffset)                         | Gets or sets the BondedMaximumOffset.                                                                                                 |
| [`Breakable`](#ContactDefinition.Breakable)                                             | Gets or sets the Breakable.                                                                                                           |
| [`Children`](#ContactDefinition.Children)                                               | Gets the list of children.                                                                                                            |
| [`ClsId`](#ContactDefinition.ClsId)                                                     | ClsId property.                                                                                                                       |
| [`Comments`](#ContactDefinition.Comments)                                               | Gets the list of associated comments.                                                                                                 |
| [`ConstraintType`](#ContactDefinition.ConstraintType)                                   | Gets or sets the ConstraintType.                                                                                                      |
| [`ContactCenterPoint`](#ContactDefinition.ContactCenterPoint)                           | Gets or sets the ContactCenterPoint.                                                                                                  |
| [`ContactEndingPoint`](#ContactDefinition.ContactEndingPoint)                           | Gets or sets the ContactEndingPoint.                                                                                                  |
| [`ContactFormulation`](#ContactDefinition.ContactFormulation)                           | Gets or sets the ContactFormulation.                                                                                                  |
| [`ContactGeometryCorrection`](#ContactDefinition.ContactGeometryCorrection)             | Gets or sets the ContactGeometryCorrection.                                                                                           |
| [`ContactOrientation`](#ContactDefinition.ContactOrientation)                           | Gets or sets the ContactOrientation.                                                                                                  |
| [`ContactStartingPoint`](#ContactDefinition.ContactStartingPoint)                       | Gets or sets the ContactStartingPoint.                                                                                                |
| [`ContactToTarget`](#ContactDefinition.ContactToTarget)                                 | Specifies the ContactToTarget to filter the properties on Contact Definition.                                                         |
| [`ContactType`](#ContactDefinition.ContactType)                                         | ContactType property.                                                                                                                 |
| [`DataModelObjectCategory`](#ContactDefinition.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                                                                                          |
| [`DecayConstant`](#ContactDefinition.DecayConstant)                                     | Gets or sets the DecayConstant.                                                                                                       |
| [`DetectionMethod`](#ContactDefinition.DetectionMethod)                                 | Gets or sets the DetectionMethod.                                                                                                     |
| [`DynamicCoefficient`](#ContactDefinition.DynamicCoefficient)                           | Gets or sets the DynamicCoefficient.                                                                                                  |
| [`EdgeContactType`](#ContactDefinition.EdgeContactType)                                 | Gets or sets the EdgeContactType.                                                                                                     |
| [`ElasticSlipTolerance`](#ContactDefinition.ElasticSlipTolerance)                       | Gets or sets the ElasticSlipTolerance.                                                                                                |
| [`ElasticSlipToleranceFactor`](#ContactDefinition.ElasticSlipToleranceFactor)           | Gets or sets the ElasticSlipToleranceFactor.                                                                                          |
| [`ElasticSlipToleranceValue`](#ContactDefinition.ElasticSlipToleranceValue)             | Gets or sets the ElasticSlipToleranceValue.                                                                                           |
| [`ElectricCapacitanceValue`](#ContactDefinition.ElectricCapacitanceValue)               | Gets or sets the ElectricCapacitanceValue.                                                                                            |
| [`ElectricConductanceValue`](#ContactDefinition.ElectricConductanceValue)               | Gets or sets the ElectricConductanceValue.                                                                                            |
| [`Figures`](#ContactDefinition.Figures)                                                 | Gets the list of associated figures.                                                                                                  |
| [`FrictionCoefficient`](#ContactDefinition.FrictionCoefficient)                         | Gets or sets the FrictionCoefficient.                                                                                                 |
| [`FrictionWorksheet`](#ContactDefinition.FrictionWorksheet)                             | Returns the VelocityFrictionMultipleSpline worksheet associated                                                                       |
| [`GroupingFolder`](#ContactDefinition.GroupingFolder)                                   | GroupingFolder property.                                                                                                              |
| [`Handedness`](#ContactDefinition.Handedness)                                           | Gets or sets the Handedness.                                                                                                          |
| [`IconName`](#ContactDefinition.IconName)                                               | IconName property.                                                                                                                    |
| [`Images`](#ContactDefinition.Images)                                                   | Gets the list of associated images.                                                                                                   |
| [`ImportableObjectSourceId`](#ContactDefinition.ImportableObjectSourceId)               | ImportableObjectSourceId property.                                                                                                    |
| [`InitialClearance`](#ContactDefinition.InitialClearance)                               | Gets or sets the InitialClearance.                                                                                                    |
| [`InitialClearanceFactor`](#ContactDefinition.InitialClearanceFactor)                   | Gets or sets the InitialClearanceFactor.                                                                                              |
| [`InitialClearanceValue`](#ContactDefinition.InitialClearanceValue)                     | Gets or sets the InitialClearanceValue.                                                                                               |
| [`InterfaceTreatment`](#ContactDefinition.InterfaceTreatment)                           | Gets or sets the InterfaceTreatment.                                                                                                  |
| [`InternalObject`](#ContactDefinition.InternalObject)                                   | Gets the internal object. For advanced usage only.                                                                                    |
| [`LineLineDetection`](#ContactDefinition.LineLineDetection)                             | Gets or sets the LineLineDetection.                                                                                                   |
| [`Material`](#Material)                                                   | Gets or sets the Material.                                                                                                            |
| [`MeanPitchDiameter`](#ContactDefinition.MeanPitchDiameter)                             | Gets or sets the MeanPitchDiameter.                                                                                                   |
| [`ModelingOption`](#ContactDefinition.ModelingOption)                                   | Gets or sets the ModelingOption.                                                                                                      |
| [`Name`](#ContactDefinition.Name)                                                       | Name property.                                                                                                                        |
| [`NormalForceExponent`](#ContactDefinition.NormalForceExponent)                         | Gets or sets the NormalForceExponent.                                                                                                 |
| [`NormalForceLimit`](#ContactDefinition.NormalForceLimit)                               | Gets or sets the NormalForceLimit.                                                                                                    |
| [`NormalStiffnessFactor`](#ContactDefinition.NormalStiffnessFactor)                     | Gets or sets the NormalStiffnessFactor.                                                                                               |
| [`NormalStiffnessValue`](#ContactDefinition.NormalStiffnessValue)                       | Gets or sets the NormalStiffnessValue.                                                                                                |
| [`NormalStiffnessValueType`](#ContactDefinition.NormalStiffnessValueType)               | Gets or sets the NormalStiffnessValueType.                                                                                            |
| [`NormalStressExponent`](#ContactDefinition.NormalStressExponent)                       | Gets or sets the NormalStressExponent.                                                                                                |
| [`NormalStressLimit`](#ContactDefinition.NormalStressLimit)                             | Gets or sets the NormalStressLimit.                                                                                                   |
| [`ObjectId`](#ContactDefinition.ObjectId)                                               | ObjectId property.                                                                                                                    |
| [`ObjectState`](#ContactDefinition.ObjectState)                                         | ObjectState property.                                                                                                                 |
| [`ObjectTags`](#ContactDefinition.ObjectTags)                                           | ObjectTags property.                                                                                                                  |
| [`Parent`](#ContactDefinition.Parent)                                                   | Parent property.                                                                                                                      |
| [`PenetrationTolerance`](#ContactDefinition.PenetrationTolerance)                       | Gets or sets the PenetrationTolerance.                                                                                                |
| [`PenetrationToleranceFactor`](#ContactDefinition.PenetrationToleranceFactor)           | Gets or sets the PenetrationToleranceFactor.                                                                                          |
| [`PenetrationToleranceValue`](#ContactDefinition.PenetrationToleranceValue)             | Gets or sets the PenetrationToleranceValue.                                                                                           |
| [`PitchDistance`](#ContactDefinition.PitchDistance)                                     | Gets or sets the PitchDistance.                                                                                                       |
| [`PressureAtZeroPenetration`](#ContactDefinition.PressureAtZeroPenetration)             | Gets or sets the PressureAtZeroPenetration.                                                                                           |
| [`PressureAtZeroPenetrationFactor`](#ContactDefinition.PressureAtZeroPenetrationFactor) | Gets or sets the PressureAtZeroPenetrationFactor.                                                                                     |
| [`PressureAtZeroPenetrationValue`](#ContactDefinition.PressureAtZeroPenetrationValue)   | Gets or sets the PressureAtZeroPenetrationValue.                                                                                      |
| [`Properties`](#ContactDefinition.Properties)                                           | Gets the list of properties for this object.                                                                                          |
| [`RampStiffnessBy`](#ContactDefinition.RampStiffnessBy)                                 | Gets or sets the method used to ramp the contact stiffness when performing a static or transient analysis. Default: ProgramControlled |
| [`RampingEndTime`](#ContactDefinition.RampingEndTime)                                   | Gets or sets the end time of the time range during which the contact stiffness will be ramped in the analysis. Default: 0.0           |
| [`RampingLoadStep`](#ContactDefinition.RampingLoadStep)                                 | Gets or sets the load step number during which the contact stiffness will be ramped in the analysis. Default: 1                       |
| [`RampingStartTime`](#ContactDefinition.RampingStartTime)                               | Gets or sets the start time of the time range during which the contact stiffness will be ramped in the analysis. Default: 0.0         |
| [`ReadOnly`](#ContactDefinition.ReadOnly)                                               | Gets or sets the ReadOnly.                                                                                                            |
| [`RestitutionFactor`](#ContactDefinition.RestitutionFactor)                             | Gets or sets the RestitutionFactor.                                                                                                   |
| [`ShearForceExponent`](#ContactDefinition.ShearForceExponent)                           | Gets or sets the ShearForceExponent.                                                                                                  |
| [`ShearForceLimit`](#ContactDefinition.ShearForceLimit)                                 | Gets or sets the ShearForceLimit.                                                                                                     |
| [`ShearStressExponent`](#ContactDefinition.ShearStressExponent)                         | Gets or sets the ShearStressExponent.                                                                                                 |
| [`ShearStressLimit`](#ContactDefinition.ShearStressLimit)                               | Gets or sets the ShearStressLimit.                                                                                                    |
| [`SmallSliding`](#ContactDefinition.SmallSliding)                                       | Gets or sets the SmallSliding.                                                                                                        |
| [`StabilizationDampingFactor`](#ContactDefinition.StabilizationDampingFactor)           | Gets or sets the StabilizationDampingFactor.                                                                                          |
| [`State`](#ContactDefinition.State)                                                     | State property.                                                                                                                       |
| [`Suppressed`](#ContactDefinition.Suppressed)                                           | Gets or sets the Suppressed.                                                                                                          |
| [`TargetCenterPoint`](#ContactDefinition.TargetCenterPoint)                             | Gets or sets the TargetCenterPoint.                                                                                                   |
| [`TargetEndingPoint`](#ContactDefinition.TargetEndingPoint)                             | Gets or sets the TargetEndingPoint.                                                                                                   |
| [`TargetGeometryCorrection`](#ContactDefinition.TargetGeometryCorrection)               | Gets or sets the TargetGeometryCorrection.                                                                                            |
| [`TargetOrientation`](#ContactDefinition.TargetOrientation)                             | Gets or sets the TargetOrientation.                                                                                                   |
| [`TargetStartingPoint`](#ContactDefinition.TargetStartingPoint)                         | Gets or sets the TargetStartingPoint.                                                                                                 |
| [`ThermalConductanceValue`](#ContactDefinition.ThermalConductanceValue)                 | Gets or sets the ThermalConductanceValue.                                                                                             |
| [`ThreadAngle`](#ContactDefinition.ThreadAngle)                                         | Gets or sets the ThreadAngle.                                                                                                         |
| [`ThreadType`](#ContactDefinition.ThreadType)                                           | Gets or sets the ThreadType.                                                                                                          |
| [`TimeStepControls`](#ContactDefinition.TimeStepControls)                               | Gets or sets the TimeStepControls.                                                                                                    |
| [`TransferableObjectId`](#ContactDefinition.TransferableObjectId)                       | TransferableObjectId property.                                                                                                        |
| [`UpdateStiffness`](#ContactDefinition.UpdateStiffness)                                 | Gets or sets the UpdateStiffness.                                                                                                     |
| [`UserOffset`](#ContactDefinition.UserOffset)                                           | Gets or sets the UserOffset.                                                                                                          |
| [`VisibleProperties`](#ContactDefinition.VisibleProperties)                             | Gets the list of properties that are visible for this object.                                                                         |

<a id="property-detail"></a>

## Property detail

<a id="ContactDefinition.AttachedRefs"></a>

### *property* ContactDefinition.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.AutomaticElectricCapacitance"></a>

### *property* ContactDefinition.AutomaticElectricCapacitance *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AutomaticElectricCapacitance.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.AutomaticElectricConductance"></a>

### *property* ContactDefinition.AutomaticElectricConductance *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AutomaticElectricConductance.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.AutomaticThermalConductance"></a>

### *property* ContactDefinition.AutomaticThermalConductance *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AutomaticThermalConductance.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.BeamBeamModel"></a>

### *property* ContactDefinition.BeamBeamModel *: [Ansys.Mechanical.DataModel.Enums.BeamBeamModel](../../../../Mechanical/DataModel/Enums/BeamBeamModel.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BeamBeamModel) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamBeamModel.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.BeamRadius"></a>

### *property* ContactDefinition.BeamRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Behavior"></a>

### *property* ContactDefinition.Behavior *: [Ansys.Mechanical.DataModel.Enums.ContactBehavior](../../../../Mechanical/DataModel/Enums/ContactBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.BondedMaximumOffset"></a>

### *property* ContactDefinition.BondedMaximumOffset *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BondedMaximumOffset.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Breakable"></a>

### *property* ContactDefinition.Breakable *: [Ansys.Mechanical.DataModel.Enums.BondedBreakableType](../../../../Mechanical/DataModel/Enums/BondedBreakableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BondedBreakableType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Breakable.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Children"></a>

### *property* ContactDefinition.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ClsId"></a>

### *property* ContactDefinition.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Comments"></a>

### *property* ContactDefinition.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ConstraintType"></a>

### *property* ContactDefinition.ConstraintType *: [Ansys.Mechanical.DataModel.Enums.ContactConstraintType](../../../../Mechanical/DataModel/Enums/ContactConstraintType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactConstraintType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ConstraintType.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ContactCenterPoint"></a>

### *property* ContactDefinition.ContactCenterPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactCenterPoint.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ContactEndingPoint"></a>

### *property* ContactDefinition.ContactEndingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactEndingPoint.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ContactFormulation"></a>

### *property* ContactDefinition.ContactFormulation *: [Ansys.Mechanical.DataModel.Enums.ContactFormulation](../../../../Mechanical/DataModel/Enums/ContactFormulation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactFormulation) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactFormulation.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ContactGeometryCorrection"></a>

### *property* ContactDefinition.ContactGeometryCorrection *: [Ansys.Mechanical.DataModel.Enums.ContactCorrection](../../../../Mechanical/DataModel/Enums/ContactCorrection.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactCorrection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactGeometryCorrection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ContactOrientation"></a>

### *property* ContactDefinition.ContactOrientation *: [Ansys.Mechanical.DataModel.Enums.ContactOrientation](../../../../Mechanical/DataModel/Enums/ContactOrientation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactOrientation) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ContactStartingPoint"></a>

### *property* ContactDefinition.ContactStartingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactStartingPoint.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ContactToTarget"></a>

### *property* ContactDefinition.ContactToTarget *: Ansys.Mechanical.DataModel.MechanicalEnums.Connections.ContactToTargetType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the ContactToTarget to filter the properties on Contact Definition.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ContactType"></a>

### *property* ContactDefinition.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../Mechanical/DataModel/Enums/ContactType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ContactType property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.DataModelObjectCategory"></a>

### *property* ContactDefinition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.DecayConstant"></a>

### *property* ContactDefinition.DecayConstant *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DecayConstant.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.DetectionMethod"></a>

### *property* ContactDefinition.DetectionMethod *: [Ansys.Mechanical.DataModel.Enums.ContactDetectionPoint](../../../../Mechanical/DataModel/Enums/ContactDetectionPoint.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactDetectionPoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DetectionMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.DynamicCoefficient"></a>

### *property* ContactDefinition.DynamicCoefficient *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DynamicCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.EdgeContactType"></a>

### *property* ContactDefinition.EdgeContactType *: [Ansys.Mechanical.DataModel.Enums.EdgeContactType](../../../../Mechanical/DataModel/Enums/EdgeContactType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.EdgeContactType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EdgeContactType.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ElasticSlipTolerance"></a>

### *property* ContactDefinition.ElasticSlipTolerance *: [Ansys.Mechanical.DataModel.Enums.ContactElasticSlipToleranceType](../../../../Mechanical/DataModel/Enums/ContactElasticSlipToleranceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactElasticSlipToleranceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElasticSlipTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ElasticSlipToleranceFactor"></a>

### *property* ContactDefinition.ElasticSlipToleranceFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElasticSlipToleranceFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ElasticSlipToleranceValue"></a>

### *property* ContactDefinition.ElasticSlipToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElasticSlipToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ElectricCapacitanceValue"></a>

### *property* ContactDefinition.ElectricCapacitanceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElectricCapacitanceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ElectricConductanceValue"></a>

### *property* ContactDefinition.ElectricConductanceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElectricConductanceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Figures"></a>

### *property* ContactDefinition.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.FrictionCoefficient"></a>

### *property* ContactDefinition.FrictionCoefficient *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrictionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.FrictionWorksheet"></a>

### *property* ContactDefinition.FrictionWorksheet *: [Ansys.ACT.Interfaces.Common.IWorksheet](../../../Interfaces/Common/IWorksheet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IWorksheet) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the VelocityFrictionMultipleSpline worksheet associated
with this ContactDefinition (CoulombBasedType = VelocityMultipleSpline).
Each row exposes a NormalForce value and a spline table reference.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GroupingFolder"></a>

### *property* ContactDefinition.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Handedness"></a>

### *property* ContactDefinition.Handedness *: [Ansys.Mechanical.DataModel.Enums.ContactBoltThreadHand](../../../../Mechanical/DataModel/Enums/ContactBoltThreadHand.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactBoltThreadHand) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Handedness.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.IconName"></a>

### *property* ContactDefinition.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Images"></a>

### *property* ContactDefinition.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ImportableObjectSourceId"></a>

### *property* ContactDefinition.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.InitialClearance"></a>

### *property* ContactDefinition.InitialClearance *: [Ansys.Mechanical.DataModel.Enums.InitialClearanceType](../../../../Mechanical/DataModel/Enums/InitialClearanceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.InitialClearanceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InitialClearance.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.InitialClearanceFactor"></a>

### *property* ContactDefinition.InitialClearanceFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InitialClearanceFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.InitialClearanceValue"></a>

### *property* ContactDefinition.InitialClearanceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InitialClearanceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.InterfaceTreatment"></a>

### *property* ContactDefinition.InterfaceTreatment *: [Ansys.Mechanical.DataModel.Enums.ContactInitialEffect](../../../../Mechanical/DataModel/Enums/ContactInitialEffect.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactInitialEffect) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InterfaceTreatment.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.InternalObject"></a>

### *property* ContactDefinition.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactDefinitionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.LineLineDetection"></a>

### *property* ContactDefinition.LineLineDetection *: [Ansys.Mechanical.DataModel.Enums.LineLineContactDetectionType](../../../../Mechanical/DataModel/Enums/LineLineContactDetectionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LineLineContactDetectionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LineLineDetection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Material"></a>

### *property* ContactDefinition.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.MeanPitchDiameter"></a>

### *property* ContactDefinition.MeanPitchDiameter *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeanPitchDiameter.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ModelingOption"></a>

### *property* ContactDefinition.ModelingOption *: Ansys.Mechanical.DataModel.Enums.ModelingOption | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModelingOption.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Name"></a>

### *property* ContactDefinition.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.NormalForceExponent"></a>

### *property* ContactDefinition.NormalForceExponent *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalForceExponent.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.NormalForceLimit"></a>

### *property* ContactDefinition.NormalForceLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.NormalStiffnessFactor"></a>

### *property* ContactDefinition.NormalStiffnessFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalStiffnessFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.NormalStiffnessValue"></a>

### *property* ContactDefinition.NormalStiffnessValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalStiffnessValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.NormalStiffnessValueType"></a>

### *property* ContactDefinition.NormalStiffnessValueType *: [Ansys.Mechanical.DataModel.Enums.ElementControlsNormalStiffnessType](../../../../Mechanical/DataModel/Enums/ElementControlsNormalStiffnessType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ElementControlsNormalStiffnessType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalStiffnessValueType.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.NormalStressExponent"></a>

### *property* ContactDefinition.NormalStressExponent *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalStressExponent.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.NormalStressLimit"></a>

### *property* ContactDefinition.NormalStressLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalStressLimit.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ObjectId"></a>

### *property* ContactDefinition.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ObjectState"></a>

### *property* ContactDefinition.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ObjectTags"></a>

### *property* ContactDefinition.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Parent"></a>

### *property* ContactDefinition.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.PenetrationTolerance"></a>

### *property* ContactDefinition.PenetrationTolerance *: [Ansys.Mechanical.DataModel.Enums.ContactPenetrationToleranceType](../../../../Mechanical/DataModel/Enums/ContactPenetrationToleranceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactPenetrationToleranceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PenetrationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.PenetrationToleranceFactor"></a>

### *property* ContactDefinition.PenetrationToleranceFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PenetrationToleranceFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.PenetrationToleranceValue"></a>

### *property* ContactDefinition.PenetrationToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PenetrationToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.PitchDistance"></a>

### *property* ContactDefinition.PitchDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PitchDistance.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.PressureAtZeroPenetration"></a>

### *property* ContactDefinition.PressureAtZeroPenetration *: [Ansys.Mechanical.DataModel.Enums.PressureAtZeroPenetrationType](../../../../Mechanical/DataModel/Enums/PressureAtZeroPenetrationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PressureAtZeroPenetrationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PressureAtZeroPenetration.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.PressureAtZeroPenetrationFactor"></a>

### *property* ContactDefinition.PressureAtZeroPenetrationFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PressureAtZeroPenetrationFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.PressureAtZeroPenetrationValue"></a>

### *property* ContactDefinition.PressureAtZeroPenetrationValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PressureAtZeroPenetrationValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Properties"></a>

### *property* ContactDefinition.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.RampStiffnessBy"></a>

### *property* ContactDefinition.RampStiffnessBy *: [Ansys.Mechanical.DataModel.Enums.RampStiffnessBy](../../../../Mechanical/DataModel/Enums/RampStiffnessBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RampStiffnessBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the method used to ramp the contact stiffness when performing a static or transient analysis. Default: ProgramControlled

An exception is thrown if InterfaceTreatment is not set to AddOffsetRampedEffects or OffsetOnlyRampedEffects.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.RampingEndTime"></a>

### *property* ContactDefinition.RampingEndTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the end time of the time range during which the contact stiffness will be ramped in the analysis. Default: 0.0

An exception is thrown if RampStiffnessBy is not set to TimeRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.RampingLoadStep"></a>

### *property* ContactDefinition.RampingLoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load step number during which the contact stiffness will be ramped in the analysis. Default: 1

An exception is thrown if RampStiffnessBy is not set to LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.RampingStartTime"></a>

### *property* ContactDefinition.RampingStartTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the start time of the time range during which the contact stiffness will be ramped in the analysis. Default: 0.0

An exception is thrown if RampStiffnessBy is not set to TimeRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ReadOnly"></a>

### *property* ContactDefinition.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.RestitutionFactor"></a>

### *property* ContactDefinition.RestitutionFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RestitutionFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ShearForceExponent"></a>

### *property* ContactDefinition.ShearForceExponent *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearForceExponent.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ShearForceLimit"></a>

### *property* ContactDefinition.ShearForceLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ShearStressExponent"></a>

### *property* ContactDefinition.ShearStressExponent *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearStressExponent.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ShearStressLimit"></a>

### *property* ContactDefinition.ShearStressLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearStressLimit.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.SmallSliding"></a>

### *property* ContactDefinition.SmallSliding *: [Ansys.Mechanical.DataModel.Enums.ContactSmallSlidingType](../../../../Mechanical/DataModel/Enums/ContactSmallSlidingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactSmallSlidingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SmallSliding.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.StabilizationDampingFactor"></a>

### *property* ContactDefinition.StabilizationDampingFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StabilizationDampingFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.State"></a>

### *property* ContactDefinition.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Suppressed"></a>

### *property* ContactDefinition.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.TargetCenterPoint"></a>

### *property* ContactDefinition.TargetCenterPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TargetCenterPoint.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.TargetEndingPoint"></a>

### *property* ContactDefinition.TargetEndingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TargetEndingPoint.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.TargetGeometryCorrection"></a>

### *property* ContactDefinition.TargetGeometryCorrection *: [Ansys.Mechanical.DataModel.Enums.TargetCorrection](../../../../Mechanical/DataModel/Enums/TargetCorrection.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TargetCorrection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TargetGeometryCorrection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.TargetOrientation"></a>

### *property* ContactDefinition.TargetOrientation *: [Ansys.Mechanical.DataModel.Enums.TargetOrientation](../../../../Mechanical/DataModel/Enums/TargetOrientation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TargetOrientation) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TargetOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.TargetStartingPoint"></a>

### *property* ContactDefinition.TargetStartingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TargetStartingPoint.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ThermalConductanceValue"></a>

### *property* ContactDefinition.ThermalConductanceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalConductanceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ThreadAngle"></a>

### *property* ContactDefinition.ThreadAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThreadAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ThreadType"></a>

### *property* ContactDefinition.ThreadType *: [Ansys.Mechanical.DataModel.Enums.ContactBoltThreadType](../../../../Mechanical/DataModel/Enums/ContactBoltThreadType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactBoltThreadType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThreadType.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.TimeStepControls"></a>

### *property* ContactDefinition.TimeStepControls *: [Ansys.Mechanical.DataModel.Enums.ContactTimeStepControls](../../../../Mechanical/DataModel/Enums/ContactTimeStepControls.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactTimeStepControls) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeStepControls.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.TransferableObjectId"></a>

### *property* ContactDefinition.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.UpdateStiffness"></a>

### *property* ContactDefinition.UpdateStiffness *: [Ansys.Mechanical.DataModel.Enums.UpdateContactStiffness](../../../../Mechanical/DataModel/Enums/UpdateContactStiffness.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.UpdateContactStiffness) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UpdateStiffness.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.UserOffset"></a>

### *property* ContactDefinition.UserOffset *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UserOffset.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.VisibleProperties"></a>

### *property* ContactDefinition.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactDefinition.Activate"></a>

### ContactDefinition.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.AddComment"></a>

### ContactDefinition.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.AddFigure"></a>

### ContactDefinition.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.AddImage"></a>

### ContactDefinition.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Copy"></a>

### ContactDefinition.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.CopySettingsFrom"></a>

### ContactDefinition.CopySettingsFrom(source: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all non-scope-dependent settings from the given ContactRegion into this ContactDefinition.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.CopyTo"></a>

### ContactDefinition.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.CreateObjRef"></a>

### ContactDefinition.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.CreateParameter"></a>

### ContactDefinition.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Cut"></a>

### ContactDefinition.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Delete"></a>

### ContactDefinition.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Duplicate"></a>

### ContactDefinition.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Equals"></a>

### ContactDefinition.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Export"></a>

### ContactDefinition.Export(path: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Exports this ContactDefinition's settings to a ContactDefinition XML document.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetAPIName"></a>

### ContactDefinition.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetAllProperties"></a>

### ContactDefinition.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetChildren"></a>

### ContactDefinition.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactDefinition.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetDetailsView"></a>

### ContactDefinition.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetEnumName"></a>

### ContactDefinition.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetHashCode"></a>

### ContactDefinition.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetIconFile"></a>

### ContactDefinition.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetLifetimeService"></a>

### ContactDefinition.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetObjectData"></a>

### ContactDefinition.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetParameter"></a>

### ContactDefinition.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetPath"></a>

### ContactDefinition.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetPropertyName"></a>

### ContactDefinition.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetPropertyValue"></a>

### ContactDefinition.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetVisibleProperties"></a>

### ContactDefinition.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GetVisiblePropertyNames"></a>

### ContactDefinition.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GroupAllSimilarChildren"></a>

### ContactDefinition.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.GroupSimilarObjects"></a>

### ContactDefinition.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Import"></a>

### ContactDefinition.Import(path: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Imports ContactDefinition settings from the specified ContactDefinition XML document into this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.InitializeLifetimeService"></a>

### ContactDefinition.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.IsPropertyEditable"></a>

### ContactDefinition.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactDefinition.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.IsPropertyVisible"></a>

### ContactDefinition.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactDefinition.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.NoSeparationSlidingWarning"></a>

### ContactDefinition.NoSeparationSlidingWarning() → [None](https://docs.python.org/3/builtins/constants.html#None)

NoSeparationSlidingWarning method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.Paste"></a>

### ContactDefinition.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ProjectedUncoupleUtoROTWaring"></a>

### ContactDefinition.ProjectedUncoupleUtoROTWaring() → [None](https://docs.python.org/3/builtins/constants.html#None)

ProjectedUncoupleUtoROTWaring method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.PropertyByAPIName"></a>

### ContactDefinition.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.PropertyById"></a>

### ContactDefinition.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.PropertyByName"></a>

### ContactDefinition.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.RemoveFromGroup"></a>

### ContactDefinition.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.RemoveParameter"></a>

### ContactDefinition.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinition.ResetToDefault"></a>

### ContactDefinition.ResetToDefault() → [None](https://docs.python.org/3/builtins/constants.html#None)

Resets this ContactDefinition's settings to their default values.

<!-- !! processed by numpydoc !! -->

