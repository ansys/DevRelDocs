# `LoadVariableVariationType`

<a id="ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType"></a>

#### *class* Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

Specifies the LoadVariableVariationType.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| --------------------------------------------------------------------------------------- |
| [`Acceleration`](#LoadVariableVariationType.Acceleration) |
| [`AxisComponentX`](#LoadVariableVariationType.AxisComponentX) |
| [`AxisComponentY`](#LoadVariableVariationType.AxisComponentY) |
| [`AxisComponentZ`](#LoadVariableVariationType.AxisComponentZ) |
| [`AxisLocationX`](#LoadVariableVariationType.AxisLocationX) |
| [`AxisLocationY`](#LoadVariableVariationType.AxisLocationY) |
| [`AxisLocationZ`](#LoadVariableVariationType.AxisLocationZ) |
| [`BearingDampingC11`](#LoadVariableVariationType.BearingDampingC11) |
| [`BearingDampingC12`](#LoadVariableVariationType.BearingDampingC12) |
| [`BearingDampingC21`](#LoadVariableVariationType.BearingDampingC21) |
| [`BearingDampingC22`](#LoadVariableVariationType.BearingDampingC22) |
| [`BearingPropertiesBegin`](#LoadVariableVariationType.BearingPropertiesBegin) |
| [`BearingPropertiesEnd`](#LoadVariableVariationType.BearingPropertiesEnd) |
| [`BearingStiffnessK11`](#LoadVariableVariationType.BearingStiffnessK11) |
| [`BearingStiffnessK12`](#LoadVariableVariationType.BearingStiffnessK12) |
| [`BearingStiffnessK21`](#LoadVariableVariationType.BearingStiffnessK21) |
| [`BearingStiffnessK22`](#LoadVariableVariationType.BearingStiffnessK22) |
| [`Behavior`](#LoadVariableVariationType.Behavior) |
| [`BoltBegin`](#LoadVariableVariationType.BoltBegin) |
| [`BoltEnd`](#LoadVariableVariationType.BoltEnd) |
| [`BoltIncrement`](#LoadVariableVariationType.BoltIncrement) |
| [`BoltLoadDefineBy`](#LoadVariableVariationType.BoltLoadDefineBy) |
| [`BulkTemperature`](#LoadVariableVariationType.BulkTemperature) |
| [`BushingNonlinStiffness`](#LoadVariableVariationType.BushingNonlinStiffness) |
| [`Capacitance`](#LoadVariableVariationType.Capacitance) |
| [`ComponentX`](#LoadVariableVariationType.ComponentX) |
| [`ComponentY`](#LoadVariableVariationType.ComponentY) |
| [`ComponentZ`](#LoadVariableVariationType.ComponentZ) |
| [`ConvectionCoefficient`](#LoadVariableVariationType.ConvectionCoefficient) |
| [`Current`](#LoadVariableVariationType.Current) |
| [`Damping`](#LoadVariableVariationType.Damping) |
| [`DependentDataIndex`](#LoadVariableVariationType.DependentDataIndex) |
| [`DependentsBegin`](#LoadVariableVariationType.DependentsBegin) |
| [`DependentsEnd`](#LoadVariableVariationType.DependentsEnd) |
| [`Displacement`](#LoadVariableVariationType.Displacement) |
| [`EMagBegin`](#LoadVariableVariationType.EMagBegin) |
| [`EMagEnd`](#LoadVariableVariationType.EMagEnd) |
| [`ElementFace`](#LoadVariableVariationType.ElementFace) |
| [`ElementType`](#LoadVariableVariationType.ElementType) |
| [`Emissivity`](#LoadVariableVariationType.Emissivity) |
| [`End`](#LoadVariableVariationType.End) |
| [`Energy`](#LoadVariableVariationType.Energy) |
| [`EntityId`](#LoadVariableVariationType.EntityId) |
| [`ExtLayeredSectionID`](#LoadVariableVariationType.ExtLayeredSectionID) |
| [`ExtLayeredSectionOffset`](#LoadVariableVariationType.ExtLayeredSectionOffset) |
| [`ExternalBegin`](#LoadVariableVariationType.ExternalBegin) |
| [`ExternalEnd`](#LoadVariableVariationType.ExternalEnd) |
| [`ExternalEnhancedModelBegin`](#LoadVariableVariationType.ExternalEnhancedModelBegin) |
| [`ExternalEnhancedModelEnd`](#LoadVariableVariationType.ExternalEnhancedModelEnd) |
| [`ExternalImagValue`](#LoadVariableVariationType.ExternalImagValue) |
| [`ExternalImagValueX`](#LoadVariableVariationType.ExternalImagValueX) |
| [`ExternalImagValueY`](#LoadVariableVariationType.ExternalImagValueY) |
| [`ExternalImagValueZ`](#LoadVariableVariationType.ExternalImagValueZ) |
| [`ExternalImagVectorI`](#LoadVariableVariationType.ExternalImagVectorI) |
| [`ExternalImagVectorJ`](#LoadVariableVariationType.ExternalImagVectorJ) |
| [`ExternalImagVectorK`](#LoadVariableVariationType.ExternalImagVectorK) |
| [`ExternalRealValue`](#LoadVariableVariationType.ExternalRealValue) |
| [`ExternalRealValueX`](#LoadVariableVariationType.ExternalRealValueX) |
| [`ExternalRealValueX2`](#LoadVariableVariationType.ExternalRealValueX2) |
| [`ExternalRealValueY`](#LoadVariableVariationType.ExternalRealValueY) |
| [`ExternalRealValueY2`](#LoadVariableVariationType.ExternalRealValueY2) |
| [`ExternalRealValueZ`](#LoadVariableVariationType.ExternalRealValueZ) |
| [`ExternalRealValueZ2`](#LoadVariableVariationType.ExternalRealValueZ2) |
| [`ExternalRealVectorI`](#LoadVariableVariationType.ExternalRealVectorI) |
| [`ExternalRealVectorJ`](#LoadVariableVariationType.ExternalRealVectorJ) |
| [`ExternalRealVectorK`](#LoadVariableVariationType.ExternalRealVectorK) |
| [`ExternalTemperature`](#LoadVariableVariationType.ExternalTemperature) |
| [`FluidBegin`](#LoadVariableVariationType.FluidBegin) |
| [`FluidDensity`](#LoadVariableVariationType.FluidDensity) |
| [`FluidEnd`](#LoadVariableVariationType.FluidEnd) |
| [`Force`](#LoadVariableVariationType.Force) |
| [`ForceIntensity`](#LoadVariableVariationType.ForceIntensity) |
| [`FoundationStiffness`](#LoadVariableVariationType.FoundationStiffness) |
| [`Frequency`](#LoadVariableVariationType.Frequency) |
| [`Friction`](#LoadVariableVariationType.Friction) |
| [`GraphEnd`](#LoadVariableVariationType.GraphEnd) |
| [`GraphPSDFittedValue`](#LoadVariableVariationType.GraphPSDFittedValue) |
| [`HarmonicIndex`](#LoadVariableVariationType.HarmonicIndex) |
| [`HeatFlow`](#LoadVariableVariationType.HeatFlow) |
| [`HeatFlux`](#LoadVariableVariationType.HeatFlux) |
| [`HeatGenerationRate`](#LoadVariableVariationType.HeatGenerationRate) |
| [`IndependentsBegin`](#LoadVariableVariationType.IndependentsBegin) |
| [`IndependentsEnd`](#LoadVariableVariationType.IndependentsEnd) |
| [`IndexBegin`](#LoadVariableVariationType.IndexBegin) |
| [`IndexEnd`](#LoadVariableVariationType.IndexEnd) |
| [`LocationX`](#LoadVariableVariationType.LocationX) |
| [`LocationY`](#LoadVariableVariationType.LocationY) |
| [`LocationZ`](#LoadVariableVariationType.LocationZ) |
| [`Mass`](#LoadVariableVariationType.Mass) |
| [`MassFlowRate`](#LoadVariableVariationType.MassFlowRate) |
| [`MaterialID`](#LoadVariableVariationType.MaterialID) |
| [`Moment`](#LoadVariableVariationType.Moment) |
| [`NodeId0`](#LoadVariableVariationType.NodeId0) |
| [`NodeId1`](#LoadVariableVariationType.NodeId1) |
| [`NodeId10`](#LoadVariableVariationType.NodeId10) |
| [`NodeId11`](#LoadVariableVariationType.NodeId11) |
| [`NodeId12`](#LoadVariableVariationType.NodeId12) |
| [`NodeId13`](#LoadVariableVariationType.NodeId13) |
| [`NodeId14`](#LoadVariableVariationType.NodeId14) |
| [`NodeId15`](#LoadVariableVariationType.NodeId15) |
| [`NodeId16`](#LoadVariableVariationType.NodeId16) |
| [`NodeId17`](#LoadVariableVariationType.NodeId17) |
| [`NodeId18`](#LoadVariableVariationType.NodeId18) |
| [`NodeId19`](#LoadVariableVariationType.NodeId19) |
| [`NodeId2`](#LoadVariableVariationType.NodeId2) |
| [`NodeId3`](#LoadVariableVariationType.NodeId3) |
| [`NodeId4`](#LoadVariableVariationType.NodeId4) |
| [`NodeId5`](#LoadVariableVariationType.NodeId5) |
| [`NodeId6`](#LoadVariableVariationType.NodeId6) |
| [`NodeId7`](#LoadVariableVariationType.NodeId7) |
| [`NodeId8`](#LoadVariableVariationType.NodeId8) |
| [`NodeId9`](#LoadVariableVariationType.NodeId9) |
| [`NonlinearAdaptivity`](#LoadVariableVariationType.NonlinearAdaptivity) |
| [`NonlinearAdaptivityBegin`](#LoadVariableVariationType.NonlinearAdaptivityBegin) |
| [`NonlinearAdaptivityEnd`](#LoadVariableVariationType.NonlinearAdaptivityEnd) |
| [`NonlinearStiffnessBegin`](#LoadVariableVariationType.NonlinearStiffnessBegin) |
| [`NonlinearStiffnessEnd`](#LoadVariableVariationType.NonlinearStiffnessEnd) |
| [`NormalizedS`](#LoadVariableVariationType.NormalizedS) |
| [`Offset`](#LoadVariableVariationType.Offset) |
| [`PSDAcceleration`](#LoadVariableVariationType.PSDAcceleration) |
| [`PSDBegin`](#LoadVariableVariationType.PSDBegin) |
| [`PSDDisplacement`](#LoadVariableVariationType.PSDDisplacement) |
| [`PSDEnd`](#LoadVariableVariationType.PSDEnd) |
| [`PSDGAcceleration`](#LoadVariableVariationType.PSDGAcceleration) |
| [`PSDVelocity`](#LoadVariableVariationType.PSDVelocity) |
| [`PathLength`](#LoadVariableVariationType.PathLength) |
| [`PhaseAngle`](#LoadVariableVariationType.PhaseAngle) |
| [`Preadjustment`](#LoadVariableVariationType.Preadjustment) |
| [`Preload`](#LoadVariableVariationType.Preload) |
| [`Pressure`](#LoadVariableVariationType.Pressure) |
| [`RSAcceleration`](#LoadVariableVariationType.RSAcceleration) |
| [`RSBegin`](#LoadVariableVariationType.RSBegin) |
| [`RSDisplacement`](#LoadVariableVariationType.RSDisplacement) |
| [`RSEnd`](#LoadVariableVariationType.RSEnd) |
| [`RSGAcceleration`](#LoadVariableVariationType.RSGAcceleration) |
| [`RSVelocity`](#LoadVariableVariationType.RSVelocity) |
| [`Reactance`](#LoadVariableVariationType.Reactance) |
| [`RefId`](#LoadVariableVariationType.RefId) |
| [`Resistance`](#LoadVariableVariationType.Resistance) |
| [`RotatingForceBegin`](#LoadVariableVariationType.RotatingForceBegin) |
| [`RotatingForceEnd`](#LoadVariableVariationType.RotatingForceEnd) |
| [`RotatingRadius`](#LoadVariableVariationType.RotatingRadius) |
| [`Rotation`](#LoadVariableVariationType.Rotation) |
| [`RotationX`](#LoadVariableVariationType.RotationX) |
| [`RotationY`](#LoadVariableVariationType.RotationY) |
| [`RotationZ`](#LoadVariableVariationType.RotationZ) |
| [`RotationalAcceleration`](#LoadVariableVariationType.RotationalAcceleration) |
| [`RotationalVelocity`](#LoadVariableVariationType.RotationalVelocity) |
| [`Scale`](#LoadVariableVariationType.Scale) |
| [`Sector`](#LoadVariableVariationType.Sector) |
| [`SectorNumber`](#LoadVariableVariationType.SectorNumber) |
| [`ShellThickness`](#LoadVariableVariationType.ShellThickness) |
| [`ShellThicknessEnd`](#LoadVariableVariationType.ShellThicknessEnd) |
| [`SpringNonLinearStiffness`](#LoadVariableVariationType.SpringNonLinearStiffness) |
| [`Step`](#LoadVariableVariationType.Step) |
| [`StructuralBegin`](#LoadVariableVariationType.StructuralBegin) |
| [`StructuralEnd`](#LoadVariableVariationType.StructuralEnd) |
| [`SynchronousRatio`](#LoadVariableVariationType.SynchronousRatio) |
| [`Temperature`](#LoadVariableVariationType.Temperature) |
| [`ThermalBegin`](#LoadVariableVariationType.ThermalBegin) |
| [`ThermalCompliance`](#LoadVariableVariationType.ThermalCompliance) |
| [`ThermalEnd`](#LoadVariableVariationType.ThermalEnd) |
| [`Time`](#LoadVariableVariationType.Time) |
| [`UnbalancedForce`](#LoadVariableVariationType.UnbalancedForce) |
| [`UnbalancedMass`](#LoadVariableVariationType.UnbalancedMass) |
| [`Value`](#LoadVariableVariationType.Value) |
| [`Velocity`](#LoadVariableVariationType.Velocity) |
| [`Voltage`](#LoadVariableVariationType.Voltage) |
| [`XValue`](#LoadVariableVariationType.XValue) |
| [`YValue`](#LoadVariableVariationType.YValue) |
| [`ZValue`](#LoadVariableVariationType.ZValue) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="LoadVariableVariationType.Acceleration"></a>

### LoadVariableVariationType.Acceleration *= 201*

<a id="LoadVariableVariationType.AxisComponentX"></a>

### LoadVariableVariationType.AxisComponentX *= 767*

<a id="LoadVariableVariationType.AxisComponentY"></a>

### LoadVariableVariationType.AxisComponentY *= 768*

<a id="LoadVariableVariationType.AxisComponentZ"></a>

### LoadVariableVariationType.AxisComponentZ *= 769*

<a id="LoadVariableVariationType.AxisLocationX"></a>

### LoadVariableVariationType.AxisLocationX *= 764*

<a id="LoadVariableVariationType.AxisLocationY"></a>

### LoadVariableVariationType.AxisLocationY *= 765*

<a id="LoadVariableVariationType.AxisLocationZ"></a>

### LoadVariableVariationType.AxisLocationZ *= 766*

<a id="LoadVariableVariationType.BearingDampingC11"></a>

### LoadVariableVariationType.BearingDampingC11 *= 780*

<a id="LoadVariableVariationType.BearingDampingC12"></a>

### LoadVariableVariationType.BearingDampingC12 *= 782*

<a id="LoadVariableVariationType.BearingDampingC21"></a>

### LoadVariableVariationType.BearingDampingC21 *= 783*

<a id="LoadVariableVariationType.BearingDampingC22"></a>

### LoadVariableVariationType.BearingDampingC22 *= 781*

<a id="LoadVariableVariationType.BearingPropertiesBegin"></a>

### LoadVariableVariationType.BearingPropertiesBegin *= 775*

<a id="LoadVariableVariationType.BearingPropertiesEnd"></a>

### LoadVariableVariationType.BearingPropertiesEnd *= 784*

<a id="LoadVariableVariationType.BearingStiffnessK11"></a>

### LoadVariableVariationType.BearingStiffnessK11 *= 776*

<a id="LoadVariableVariationType.BearingStiffnessK12"></a>

### LoadVariableVariationType.BearingStiffnessK12 *= 778*

<a id="LoadVariableVariationType.BearingStiffnessK21"></a>

### LoadVariableVariationType.BearingStiffnessK21 *= 779*

<a id="LoadVariableVariationType.BearingStiffnessK22"></a>

### LoadVariableVariationType.BearingStiffnessK22 *= 777*

<a id="LoadVariableVariationType.Behavior"></a>

### LoadVariableVariationType.Behavior *= 1014*

<a id="LoadVariableVariationType.BoltBegin"></a>

### LoadVariableVariationType.BoltBegin *= 575*

<a id="LoadVariableVariationType.BoltEnd"></a>

### LoadVariableVariationType.BoltEnd *= 580*

<a id="LoadVariableVariationType.BoltIncrement"></a>

### LoadVariableVariationType.BoltIncrement *= 579*

<a id="LoadVariableVariationType.BoltLoadDefineBy"></a>

### LoadVariableVariationType.BoltLoadDefineBy *= 576*

<a id="LoadVariableVariationType.BulkTemperature"></a>

### LoadVariableVariationType.BulkTemperature *= 303*

<a id="LoadVariableVariationType.BushingNonlinStiffness"></a>

### LoadVariableVariationType.BushingNonlinStiffness *= 754*

<a id="LoadVariableVariationType.Capacitance"></a>

### LoadVariableVariationType.Capacitance *= 308*

<a id="LoadVariableVariationType.ComponentX"></a>

### LoadVariableVariationType.ComponentX *= 151*

<a id="LoadVariableVariationType.ComponentY"></a>

### LoadVariableVariationType.ComponentY *= 152*

<a id="LoadVariableVariationType.ComponentZ"></a>

### LoadVariableVariationType.ComponentZ *= 153*

<a id="LoadVariableVariationType.ConvectionCoefficient"></a>

### LoadVariableVariationType.ConvectionCoefficient *= 302*

<a id="LoadVariableVariationType.Current"></a>

### LoadVariableVariationType.Current *= 402*

<a id="LoadVariableVariationType.Damping"></a>

### LoadVariableVariationType.Damping *= 211*

<a id="LoadVariableVariationType.DependentDataIndex"></a>

### LoadVariableVariationType.DependentDataIndex *= 676*

<a id="LoadVariableVariationType.DependentsBegin"></a>

### LoadVariableVariationType.DependentsBegin *= 150*

<a id="LoadVariableVariationType.DependentsEnd"></a>

### LoadVariableVariationType.DependentsEnd *= 678*

<a id="LoadVariableVariationType.Displacement"></a>

### LoadVariableVariationType.Displacement *= 202*

<a id="LoadVariableVariationType.EMagBegin"></a>

### LoadVariableVariationType.EMagBegin *= 400*

<a id="LoadVariableVariationType.EMagEnd"></a>

### LoadVariableVariationType.EMagEnd *= 403*

<a id="LoadVariableVariationType.ElementFace"></a>

### LoadVariableVariationType.ElementFace *= 20*

<a id="LoadVariableVariationType.ElementType"></a>

### LoadVariableVariationType.ElementType *= 21*

<a id="LoadVariableVariationType.Emissivity"></a>

### LoadVariableVariationType.Emissivity *= 307*

<a id="LoadVariableVariationType.End"></a>

### LoadVariableVariationType.End *= 1010*

<a id="LoadVariableVariationType.Energy"></a>

### LoadVariableVariationType.Energy *= 215*

<a id="LoadVariableVariationType.EntityId"></a>

### LoadVariableVariationType.EntityId *= 19*

<a id="LoadVariableVariationType.ExtLayeredSectionID"></a>

### LoadVariableVariationType.ExtLayeredSectionID *= 45*

<a id="LoadVariableVariationType.ExtLayeredSectionOffset"></a>

### LoadVariableVariationType.ExtLayeredSectionOffset *= 652*

<a id="LoadVariableVariationType.ExternalBegin"></a>

### LoadVariableVariationType.ExternalBegin *= 600*

<a id="LoadVariableVariationType.ExternalEnd"></a>

### LoadVariableVariationType.ExternalEnd *= 619*

<a id="LoadVariableVariationType.ExternalEnhancedModelBegin"></a>

### LoadVariableVariationType.ExternalEnhancedModelBegin *= 650*

<a id="LoadVariableVariationType.ExternalEnhancedModelEnd"></a>

### LoadVariableVariationType.ExternalEnhancedModelEnd *= 668*

<a id="LoadVariableVariationType.ExternalImagValue"></a>

### LoadVariableVariationType.ExternalImagValue *= 605*

<a id="LoadVariableVariationType.ExternalImagValueX"></a>

### LoadVariableVariationType.ExternalImagValueX *= 613*

<a id="LoadVariableVariationType.ExternalImagValueY"></a>

### LoadVariableVariationType.ExternalImagValueY *= 614*

<a id="LoadVariableVariationType.ExternalImagValueZ"></a>

### LoadVariableVariationType.ExternalImagValueZ *= 615*

<a id="LoadVariableVariationType.ExternalImagVectorI"></a>

### LoadVariableVariationType.ExternalImagVectorI *= 606*

<a id="LoadVariableVariationType.ExternalImagVectorJ"></a>

### LoadVariableVariationType.ExternalImagVectorJ *= 607*

<a id="LoadVariableVariationType.ExternalImagVectorK"></a>

### LoadVariableVariationType.ExternalImagVectorK *= 608*

<a id="LoadVariableVariationType.ExternalRealValue"></a>

### LoadVariableVariationType.ExternalRealValue *= 601*

<a id="LoadVariableVariationType.ExternalRealValueX"></a>

### LoadVariableVariationType.ExternalRealValueX *= 610*

<a id="LoadVariableVariationType.ExternalRealValueX2"></a>

### LoadVariableVariationType.ExternalRealValueX2 *= 616*

<a id="LoadVariableVariationType.ExternalRealValueY"></a>

### LoadVariableVariationType.ExternalRealValueY *= 611*

<a id="LoadVariableVariationType.ExternalRealValueY2"></a>

### LoadVariableVariationType.ExternalRealValueY2 *= 617*

<a id="LoadVariableVariationType.ExternalRealValueZ"></a>

### LoadVariableVariationType.ExternalRealValueZ *= 612*

<a id="LoadVariableVariationType.ExternalRealValueZ2"></a>

### LoadVariableVariationType.ExternalRealValueZ2 *= 618*

<a id="LoadVariableVariationType.ExternalRealVectorI"></a>

### LoadVariableVariationType.ExternalRealVectorI *= 602*

<a id="LoadVariableVariationType.ExternalRealVectorJ"></a>

### LoadVariableVariationType.ExternalRealVectorJ *= 603*

<a id="LoadVariableVariationType.ExternalRealVectorK"></a>

### LoadVariableVariationType.ExternalRealVectorK *= 604*

<a id="LoadVariableVariationType.ExternalTemperature"></a>

### LoadVariableVariationType.ExternalTemperature *= 609*

<a id="LoadVariableVariationType.FluidBegin"></a>

### LoadVariableVariationType.FluidBegin *= 500*

<a id="LoadVariableVariationType.FluidDensity"></a>

### LoadVariableVariationType.FluidDensity *= 501*

<a id="LoadVariableVariationType.FluidEnd"></a>

### LoadVariableVariationType.FluidEnd *= 503*

<a id="LoadVariableVariationType.Force"></a>

### LoadVariableVariationType.Force *= 203*

<a id="LoadVariableVariationType.ForceIntensity"></a>

### LoadVariableVariationType.ForceIntensity *= 209*

<a id="LoadVariableVariationType.FoundationStiffness"></a>

### LoadVariableVariationType.FoundationStiffness *= 210*

<a id="LoadVariableVariationType.Frequency"></a>

### LoadVariableVariationType.Frequency *= 16*

<a id="LoadVariableVariationType.Friction"></a>

### LoadVariableVariationType.Friction *= 212*

<a id="LoadVariableVariationType.GraphEnd"></a>

### LoadVariableVariationType.GraphEnd *= 1013*

<a id="LoadVariableVariationType.GraphPSDFittedValue"></a>

### LoadVariableVariationType.GraphPSDFittedValue *= 1012*

<a id="LoadVariableVariationType.HarmonicIndex"></a>

### LoadVariableVariationType.HarmonicIndex *= 47*

<a id="LoadVariableVariationType.HeatFlow"></a>

### LoadVariableVariationType.HeatFlow *= 304*

<a id="LoadVariableVariationType.HeatFlux"></a>

### LoadVariableVariationType.HeatFlux *= 306*

<a id="LoadVariableVariationType.HeatGenerationRate"></a>

### LoadVariableVariationType.HeatGenerationRate *= 305*

<a id="LoadVariableVariationType.IndependentsBegin"></a>

### LoadVariableVariationType.IndependentsBegin *= 10*

<a id="LoadVariableVariationType.IndependentsEnd"></a>

### LoadVariableVariationType.IndependentsEnd *= 49*

<a id="LoadVariableVariationType.IndexBegin"></a>

### LoadVariableVariationType.IndexBegin *= 675*

<a id="LoadVariableVariationType.IndexEnd"></a>

### LoadVariableVariationType.IndexEnd *= 677*

<a id="LoadVariableVariationType.LocationX"></a>

### LoadVariableVariationType.LocationX *= 1019*

<a id="LoadVariableVariationType.LocationY"></a>

### LoadVariableVariationType.LocationY *= 1020*

<a id="LoadVariableVariationType.LocationZ"></a>

### LoadVariableVariationType.LocationZ *= 1021*

<a id="LoadVariableVariationType.Mass"></a>

### LoadVariableVariationType.Mass *= 214*

<a id="LoadVariableVariationType.MassFlowRate"></a>

### LoadVariableVariationType.MassFlowRate *= 502*

<a id="LoadVariableVariationType.MaterialID"></a>

### LoadVariableVariationType.MaterialID *= 651*

<a id="LoadVariableVariationType.Moment"></a>

### LoadVariableVariationType.Moment *= 204*

<a id="LoadVariableVariationType.NodeId0"></a>

### LoadVariableVariationType.NodeId0 *= 23*

<a id="LoadVariableVariationType.NodeId1"></a>

### LoadVariableVariationType.NodeId1 *= 24*

<a id="LoadVariableVariationType.NodeId10"></a>

### LoadVariableVariationType.NodeId10 *= 33*

<a id="LoadVariableVariationType.NodeId11"></a>

### LoadVariableVariationType.NodeId11 *= 34*

<a id="LoadVariableVariationType.NodeId12"></a>

### LoadVariableVariationType.NodeId12 *= 35*

<a id="LoadVariableVariationType.NodeId13"></a>

### LoadVariableVariationType.NodeId13 *= 36*

<a id="LoadVariableVariationType.NodeId14"></a>

### LoadVariableVariationType.NodeId14 *= 37*

<a id="LoadVariableVariationType.NodeId15"></a>

### LoadVariableVariationType.NodeId15 *= 38*

<a id="LoadVariableVariationType.NodeId16"></a>

### LoadVariableVariationType.NodeId16 *= 39*

<a id="LoadVariableVariationType.NodeId17"></a>

### LoadVariableVariationType.NodeId17 *= 40*

<a id="LoadVariableVariationType.NodeId18"></a>

### LoadVariableVariationType.NodeId18 *= 41*

<a id="LoadVariableVariationType.NodeId19"></a>

### LoadVariableVariationType.NodeId19 *= 42*

<a id="LoadVariableVariationType.NodeId2"></a>

### LoadVariableVariationType.NodeId2 *= 25*

<a id="LoadVariableVariationType.NodeId3"></a>

### LoadVariableVariationType.NodeId3 *= 26*

<a id="LoadVariableVariationType.NodeId4"></a>

### LoadVariableVariationType.NodeId4 *= 27*

<a id="LoadVariableVariationType.NodeId5"></a>

### LoadVariableVariationType.NodeId5 *= 28*

<a id="LoadVariableVariationType.NodeId6"></a>

### LoadVariableVariationType.NodeId6 *= 29*

<a id="LoadVariableVariationType.NodeId7"></a>

### LoadVariableVariationType.NodeId7 *= 30*

<a id="LoadVariableVariationType.NodeId8"></a>

### LoadVariableVariationType.NodeId8 *= 31*

<a id="LoadVariableVariationType.NodeId9"></a>

### LoadVariableVariationType.NodeId9 *= 32*

<a id="LoadVariableVariationType.NonlinearAdaptivity"></a>

### LoadVariableVariationType.NonlinearAdaptivity *= 801*

<a id="LoadVariableVariationType.NonlinearAdaptivityBegin"></a>

### LoadVariableVariationType.NonlinearAdaptivityBegin *= 800*

<a id="LoadVariableVariationType.NonlinearAdaptivityEnd"></a>

### LoadVariableVariationType.NonlinearAdaptivityEnd *= 802*

<a id="LoadVariableVariationType.NonlinearStiffnessBegin"></a>

### LoadVariableVariationType.NonlinearStiffnessBegin *= 752*

<a id="LoadVariableVariationType.NonlinearStiffnessEnd"></a>

### LoadVariableVariationType.NonlinearStiffnessEnd *= 755*

<a id="LoadVariableVariationType.NormalizedS"></a>

### LoadVariableVariationType.NormalizedS *= 44*

<a id="LoadVariableVariationType.Offset"></a>

### LoadVariableVariationType.Offset *= 155*

<a id="LoadVariableVariationType.PSDAcceleration"></a>

### LoadVariableVariationType.PSDAcceleration *= 552*

<a id="LoadVariableVariationType.PSDBegin"></a>

### LoadVariableVariationType.PSDBegin *= 550*

<a id="LoadVariableVariationType.PSDDisplacement"></a>

### LoadVariableVariationType.PSDDisplacement *= 553*

<a id="LoadVariableVariationType.PSDEnd"></a>

### LoadVariableVariationType.PSDEnd *= 555*

<a id="LoadVariableVariationType.PSDGAcceleration"></a>

### LoadVariableVariationType.PSDGAcceleration *= 551*

<a id="LoadVariableVariationType.PSDVelocity"></a>

### LoadVariableVariationType.PSDVelocity *= 554*

<a id="LoadVariableVariationType.PathLength"></a>

### LoadVariableVariationType.PathLength *= 43*

<a id="LoadVariableVariationType.PhaseAngle"></a>

### LoadVariableVariationType.PhaseAngle *= 18*

<a id="LoadVariableVariationType.Preadjustment"></a>

### LoadVariableVariationType.Preadjustment *= 578*

<a id="LoadVariableVariationType.Preload"></a>

### LoadVariableVariationType.Preload *= 577*

<a id="LoadVariableVariationType.Pressure"></a>

### LoadVariableVariationType.Pressure *= 205*

<a id="LoadVariableVariationType.RSAcceleration"></a>

### LoadVariableVariationType.RSAcceleration *= 702*

<a id="LoadVariableVariationType.RSBegin"></a>

### LoadVariableVariationType.RSBegin *= 700*

<a id="LoadVariableVariationType.RSDisplacement"></a>

### LoadVariableVariationType.RSDisplacement *= 703*

<a id="LoadVariableVariationType.RSEnd"></a>

### LoadVariableVariationType.RSEnd *= 705*

<a id="LoadVariableVariationType.RSGAcceleration"></a>

### LoadVariableVariationType.RSGAcceleration *= 701*

<a id="LoadVariableVariationType.RSVelocity"></a>

### LoadVariableVariationType.RSVelocity *= 704*

<a id="LoadVariableVariationType.Reactance"></a>

### LoadVariableVariationType.Reactance *= 843*

<a id="LoadVariableVariationType.RefId"></a>

### LoadVariableVariationType.RefId *= 22*

<a id="LoadVariableVariationType.Resistance"></a>

### LoadVariableVariationType.Resistance *= 842*

<a id="LoadVariableVariationType.RotatingForceBegin"></a>

### LoadVariableVariationType.RotatingForceBegin *= 760*

<a id="LoadVariableVariationType.RotatingForceEnd"></a>

### LoadVariableVariationType.RotatingForceEnd *= 771*

<a id="LoadVariableVariationType.RotatingRadius"></a>

### LoadVariableVariationType.RotatingRadius *= 770*

<a id="LoadVariableVariationType.Rotation"></a>

### LoadVariableVariationType.Rotation *= 206*

<a id="LoadVariableVariationType.RotationX"></a>

### LoadVariableVariationType.RotationX *= 1016*

<a id="LoadVariableVariationType.RotationY"></a>

### LoadVariableVariationType.RotationY *= 1017*

<a id="LoadVariableVariationType.RotationZ"></a>

### LoadVariableVariationType.RotationZ *= 1018*

<a id="LoadVariableVariationType.RotationalAcceleration"></a>

### LoadVariableVariationType.RotationalAcceleration *= 213*

<a id="LoadVariableVariationType.RotationalVelocity"></a>

### LoadVariableVariationType.RotationalVelocity *= 207*

<a id="LoadVariableVariationType.Scale"></a>

### LoadVariableVariationType.Scale *= 154*

<a id="LoadVariableVariationType.Sector"></a>

### LoadVariableVariationType.Sector *= 15*

<a id="LoadVariableVariationType.SectorNumber"></a>

### LoadVariableVariationType.SectorNumber *= 48*

<a id="LoadVariableVariationType.ShellThickness"></a>

### LoadVariableVariationType.ShellThickness *= 750*

<a id="LoadVariableVariationType.ShellThicknessEnd"></a>

### LoadVariableVariationType.ShellThicknessEnd *= 751*

<a id="LoadVariableVariationType.SpringNonLinearStiffness"></a>

### LoadVariableVariationType.SpringNonLinearStiffness *= 753*

<a id="LoadVariableVariationType.Step"></a>

### LoadVariableVariationType.Step *= 17*

<a id="LoadVariableVariationType.StructuralBegin"></a>

### LoadVariableVariationType.StructuralBegin *= 200*

<a id="LoadVariableVariationType.StructuralEnd"></a>

### LoadVariableVariationType.StructuralEnd *= 226*

<a id="LoadVariableVariationType.SynchronousRatio"></a>

### LoadVariableVariationType.SynchronousRatio *= 763*

<a id="LoadVariableVariationType.Temperature"></a>

### LoadVariableVariationType.Temperature *= 301*

<a id="LoadVariableVariationType.ThermalBegin"></a>

### LoadVariableVariationType.ThermalBegin *= 300*

<a id="LoadVariableVariationType.ThermalCompliance"></a>

### LoadVariableVariationType.ThermalCompliance *= 309*

<a id="LoadVariableVariationType.ThermalEnd"></a>

### LoadVariableVariationType.ThermalEnd *= 310*

<a id="LoadVariableVariationType.Time"></a>

### LoadVariableVariationType.Time *= 11*

<a id="LoadVariableVariationType.UnbalancedForce"></a>

### LoadVariableVariationType.UnbalancedForce *= 762*

<a id="LoadVariableVariationType.UnbalancedMass"></a>

### LoadVariableVariationType.UnbalancedMass *= 761*

<a id="LoadVariableVariationType.Value"></a>

### LoadVariableVariationType.Value *= 1015*

<a id="LoadVariableVariationType.Velocity"></a>

### LoadVariableVariationType.Velocity *= 208*

<a id="LoadVariableVariationType.Voltage"></a>

### LoadVariableVariationType.Voltage *= 401*

<a id="LoadVariableVariationType.XValue"></a>

### LoadVariableVariationType.XValue *= 12*

<a id="LoadVariableVariationType.YValue"></a>

### LoadVariableVariationType.YValue *= 13*

<a id="LoadVariableVariationType.ZValue"></a>

### LoadVariableVariationType.ZValue *= 14*


