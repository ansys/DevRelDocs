# ProbeResultType

<a id="ProbeResultType"></a>

### *class* ProbeResultType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the ProbeResultType.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`AccelerationProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/AccelerationProbe.md#AccelerationProbe) |
| [`AngularAccelerationProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/AngularAccelerationProbe.md#AngularAccelerationProbe) |
| [`AngularVelocityProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/AngularVelocityProbe.md#AngularVelocityProbe) |
| [`BeamProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/BeamProbe.md#BeamProbe) |
| [`BearingProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/BearingProbe.md#BearingProbe) |
| [`ChargeReaction`](#ProbeResultType.ChargeReaction) |
| [`ConstraintForce`](#ProbeResultType.ConstraintForce) |
| [`ConstraintMoment`](#ProbeResultType.ConstraintMoment) |
| [`ContactDistanceProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/ContactDistanceProbe.md#ContactDistanceProbe) |
| [`CurrentDensityProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/CurrentDensityProbe.md#CurrentDensityProbe) |
| [`DampingForce`](#ProbeResultType.DampingForce) |
| [`DampingMoment`](#ProbeResultType.DampingMoment) |
| [`DeformationProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/DeformationProbe.md#DeformationProbe) |
| [`MagneticFluxProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/MagneticFluxProbe.md#MagneticFluxProbe) |
| [`ElasticForce`](#ProbeResultType.ElasticForce) |
| [`ElasticMoment`](#ProbeResultType.ElasticMoment) |
| [`ElasticPlusFrictionMoment`](#ProbeResultType.ElasticPlusFrictionMoment) |
| [`Impedance`](#ProbeResultType.Impedance) |
| [`FieldIntensity`](#ProbeResultType.FieldIntensity) |
| [`VoltageProbe`](#ProbeResultType.VoltageProbe) |
| [`ElectromechanicalCouplingCoefficient`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/ElectromechanicalCouplingCoefficient.md#ElectromechanicalCouplingCoefficient) |
| [`EmagReactionProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/EmagReactionProbe.md#EmagReactionProbe) |
| [`Energy`](#ProbeResultType.Energy) |
| [`FieldIntensityProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/FieldIntensityProbe.md#FieldIntensityProbe) |
| [`FlexibleRotationProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/FlexibleRotationProbe.md#FlexibleRotationProbe) |
| [`FluxDensityProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/FluxDensityProbe.md#FluxDensityProbe) |
| [`FrictionForceProbe`](#ProbeResultType.FrictionForceProbe) |
| [`FrictionMomentProbe`](#ProbeResultType.FrictionMomentProbe) |
| [`GeneralizedPlaneStrainProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/GeneralizedPlaneStrainProbe.md#GeneralizedPlaneStrainProbe) |
| [`HeatFluxProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/HeatFluxProbe.md#HeatFluxProbe) |
| [`JointProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/JointProbe.md#JointProbe) |
| [`JouleHeatProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/JouleHeatProbe.md#JouleHeatProbe) |
| [`Position`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/Position.md#Position) |
| [`BoltPretension`](./../../../ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension) |
| [`QualityFactor`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/QualityFactor.md#QualityFactor) |
| [`RadiationProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/RadiationProbe.md#RadiationProbe) |
| [`ReactionProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/ReactionProbe.md#ReactionProbe) |
| [`ForceReaction`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/ForceReaction.md#ForceReaction) |
| [`MomentReaction`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/MomentReaction.md#MomentReaction) |
| [`ResponsePSD`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/ResponsePSD.md#ResponsePSD) |
| [`RotationProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/RotationProbe.md#RotationProbe) |
| [`SpringProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/SpringProbe.md#SpringProbe) |
| [`ProbeStatus`](#ProbeResultType.ProbeStatus) |
| [`StrainProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/StrainProbe.md#StrainProbe) |
| [`StressProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/StressProbe.md#StressProbe) |
| [`TemperatureProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/TemperatureProbe.md#TemperatureProbe) |
| [`VelocityProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/VelocityProbe.md#VelocityProbe) |
| [`VolumeProbe`](./../../../ACT/Automation/Mechanical/Results/ProbeResults/VolumeProbe.md#VolumeProbe) |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums import ProbeResultType
```

<a id="attribute-detail"></a>

## Attribute detail

<a id="ProbeResultType.AccelerationProbe"></a>

### ProbeResultType.AccelerationProbe *= 11*

<a id="ProbeResultType.AngularAccelerationProbe"></a>

### ProbeResultType.AngularAccelerationProbe *= 19*

<a id="ProbeResultType.AngularVelocityProbe"></a>

### ProbeResultType.AngularVelocityProbe *= 18*

<a id="ProbeResultType.BeamProbe"></a>

### ProbeResultType.BeamProbe *= 28*

<a id="ProbeResultType.BearingProbe"></a>

### ProbeResultType.BearingProbe *= 36*

<a id="ProbeResultType.ChargeReaction"></a>

### ProbeResultType.ChargeReaction *= 52*

<a id="ProbeResultType.ConstraintForce"></a>

### ProbeResultType.ConstraintForce *= 29*

<a id="ProbeResultType.ConstraintMoment"></a>

### ProbeResultType.ConstraintMoment *= 32*

<a id="ProbeResultType.ContactDistanceProbe"></a>

### ProbeResultType.ContactDistanceProbe *= 58*

<a id="ProbeResultType.CurrentDensityProbe"></a>

### ProbeResultType.CurrentDensityProbe *= 25*

<a id="ProbeResultType.DampingForce"></a>

### ProbeResultType.DampingForce *= 31*

<a id="ProbeResultType.DampingMoment"></a>

### ProbeResultType.DampingMoment *= 34*

<a id="ProbeResultType.DeformationProbe"></a>

### ProbeResultType.DeformationProbe *= 3*

<a id="ProbeResultType.MagneticFluxProbe"></a>

### ProbeResultType.MagneticFluxProbe *= 27*

<a id="ProbeResultType.ElasticForce"></a>

### ProbeResultType.ElasticForce *= 30*

<a id="ProbeResultType.ElasticMoment"></a>

### ProbeResultType.ElasticMoment *= 33*

<a id="ProbeResultType.ElasticPlusFrictionMoment"></a>

### ProbeResultType.ElasticPlusFrictionMoment *= 56*

<a id="ProbeResultType.Impedance"></a>

### ProbeResultType.Impedance *= 53*

<a id="ProbeResultType.FieldIntensity"></a>

### ProbeResultType.FieldIntensity *= 26*

<a id="ProbeResultType.VoltageProbe"></a>

### ProbeResultType.VoltageProbe *= 24*

<a id="ProbeResultType.ElectromechanicalCouplingCoefficient"></a>

### ProbeResultType.ElectromechanicalCouplingCoefficient *= 55*

<a id="ProbeResultType.EmagReactionProbe"></a>

### ProbeResultType.EmagReactionProbe *= 17*

<a id="ProbeResultType.Energy"></a>

### ProbeResultType.Energy *= 14*

<a id="ProbeResultType.FieldIntensityProbe"></a>

### ProbeResultType.FieldIntensityProbe *= 7*

<a id="ProbeResultType.FlexibleRotationProbe"></a>

### ProbeResultType.FlexibleRotationProbe *= 39*

<a id="ProbeResultType.FluxDensityProbe"></a>

### ProbeResultType.FluxDensityProbe *= 6*

<a id="ProbeResultType.FrictionForceProbe"></a>

### ProbeResultType.FrictionForceProbe *= 37*

<a id="ProbeResultType.FrictionMomentProbe"></a>

### ProbeResultType.FrictionMomentProbe *= 38*

<a id="ProbeResultType.GeneralizedPlaneStrainProbe"></a>

### ProbeResultType.GeneralizedPlaneStrainProbe *= 22*

<a id="ProbeResultType.HeatFluxProbe"></a>

### ProbeResultType.HeatFluxProbe *= 5*

<a id="ProbeResultType.JointProbe"></a>

### ProbeResultType.JointProbe *= 12*

<a id="ProbeResultType.JouleHeatProbe"></a>

### ProbeResultType.JouleHeatProbe *= 40*

<a id="ProbeResultType.Position"></a>

### ProbeResultType.Position *= 20*

<a id="ProbeResultType.BoltPretension"></a>

### ProbeResultType.BoltPretension *= 21*

<a id="ProbeResultType.QualityFactor"></a>

### ProbeResultType.QualityFactor *= 54*

<a id="ProbeResultType.RadiationProbe"></a>

### ProbeResultType.RadiationProbe *= 35*

<a id="ProbeResultType.ReactionProbe"></a>

### ProbeResultType.ReactionProbe *= 9*

<a id="ProbeResultType.ForceReaction"></a>

### ProbeResultType.ForceReaction *= 15*

<a id="ProbeResultType.MomentReaction"></a>

### ProbeResultType.MomentReaction *= 16*

<a id="ProbeResultType.ResponsePSD"></a>

### ProbeResultType.ResponsePSD *= 23*

<a id="ProbeResultType.RotationProbe"></a>

### ProbeResultType.RotationProbe *= 8*

<a id="ProbeResultType.SpringProbe"></a>

### ProbeResultType.SpringProbe *= 13*

<a id="ProbeResultType.ProbeStatus"></a>

### ProbeResultType.ProbeStatus *= 57*

<a id="ProbeResultType.StrainProbe"></a>

### ProbeResultType.StrainProbe *= 2*

<a id="ProbeResultType.StressProbe"></a>

### ProbeResultType.StressProbe *= 1*

<a id="ProbeResultType.TemperatureProbe"></a>

### ProbeResultType.TemperatureProbe *= 4*

<a id="ProbeResultType.VelocityProbe"></a>

### ProbeResultType.VelocityProbe *= 10*

<a id="ProbeResultType.VolumeProbe"></a>

### ProbeResultType.VolumeProbe *= 51*
