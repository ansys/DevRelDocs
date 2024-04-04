# ProbeResultType

### *class* ProbeResultType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the ProbeResultType.

> <!-- !! processed by numpydoc !! -->

## Overview

### Attributes

| [`AccelerationProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/AccelerationProbe.md#AccelerationProbe)                                                          |    |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| [`AngularAccelerationProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/AngularAccelerationProbe.md#AngularAccelerationProbe)                                     |    |
| [`AngularVelocityProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/AngularVelocityProbe.md#AngularVelocityProbe)                                                 |    |
| [`BeamProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/BeamProbe.md#BeamProbe)                                                                                  |    |
| [`BearingProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/BearingProbe.md#BearingProbe)                                                                         |    |
| [`ChargeReaction`](#ProbeResultType.ChargeReaction)                                                                                                                            |    |
| [`ConstraintForce`](#ProbeResultType.ConstraintForce)                                                                                                                          |    |
| [`ConstraintMoment`](#ProbeResultType.ConstraintMoment)                                                                                                                        |    |
| [`ContactDistanceProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/ContactDistanceProbe.md#ContactDistanceProbe)                                                 |    |
| [`CurrentDensityProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/CurrentDensityProbe.md#CurrentDensityProbe)                                                    |    |
| [`DampingForce`](#ProbeResultType.DampingForce)                                                                                                                                |    |
| [`DampingMoment`](#ProbeResultType.DampingMoment)                                                                                                                              |    |
| [`DeformationProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/DeformationProbe.md#DeformationProbe)                                                             |    |
| [`MagneticFluxProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/MagneticFluxProbe.md#MagneticFluxProbe)                                                          |    |
| [`ElasticForce`](#ProbeResultType.ElasticForce)                                                                                                                                |    |
| [`ElasticMoment`](#ProbeResultType.ElasticMoment)                                                                                                                              |    |
| [`ElasticPlusFrictionMoment`](#ProbeResultType.ElasticPlusFrictionMoment)                                                                                                      |    |
| [`Impedance`](#ProbeResultType.Impedance)                                                                                                                                      |    |
| [`FieldIntensity`](#ProbeResultType.FieldIntensity)                                                                                                                            |    |
| [`VoltageProbe`](#ProbeResultType.VoltageProbe)                                                                                                                                |    |
| [`ElectromechanicalCouplingCoefficient`](../../../ACT/Automation/Mechanical/Results/ProbeResults/ElectromechanicalCouplingCoefficient.md#ElectromechanicalCouplingCoefficient) |    |
| [`EmagReactionProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/EmagReactionProbe.md#EmagReactionProbe)                                                          |    |
| [`Energy`](#ProbeResultType.Energy)                                                                                                                                            |    |
| [`FieldIntensityProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/FieldIntensityProbe.md#FieldIntensityProbe)                                                    |    |
| [`FlexibleRotationProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/FlexibleRotationProbe.md#FlexibleRotationProbe)                                              |    |
| [`FluxDensityProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/FluxDensityProbe.md#FluxDensityProbe)                                                             |    |
| [`FrictionForceProbe`](#ProbeResultType.FrictionForceProbe)                                                                                                                    |    |
| [`FrictionMomentProbe`](#ProbeResultType.FrictionMomentProbe)                                                                                                                  |    |
| [`GeneralizedPlaneStrainProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/GeneralizedPlaneStrainProbe.md#GeneralizedPlaneStrainProbe)                            |    |
| [`HeatFluxProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/HeatFluxProbe.md#HeatFluxProbe)                                                                      |    |
| [`JointProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/JointProbe.md#JointProbe)                                                                               |    |
| [`JouleHeatProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/JouleHeatProbe.md#JouleHeatProbe)                                                                   |    |
| [`Position`](../../../ACT/Automation/Mechanical/Results/ProbeResults/Position.md#Position)                                                                                     |    |
| [`BoltPretension`](../../../ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension)                                                                     |    |
| [`QualityFactor`](../../../ACT/Automation/Mechanical/Results/ProbeResults/QualityFactor.md#QualityFactor)                                                                      |    |
| [`RadiationProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/RadiationProbe.md#RadiationProbe)                                                                   |    |
| [`ReactionProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/ReactionProbe.md#ReactionProbe)                                                                      |    |
| [`ForceReaction`](../../../ACT/Automation/Mechanical/Results/ProbeResults/ForceReaction.md#ForceReaction)                                                                      |    |
| [`MomentReaction`](../../../ACT/Automation/Mechanical/Results/ProbeResults/MomentReaction.md#MomentReaction)                                                                   |    |
| [`ResponsePSD`](../../../ACT/Automation/Mechanical/Results/ProbeResults/ResponsePSD.md#ResponsePSD)                                                                            |    |
| [`RotationProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/RotationProbe.md#RotationProbe)                                                                      |    |
| [`SpringProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/SpringProbe.md#SpringProbe)                                                                            |    |
| [`ProbeStatus`](#ProbeResultType.ProbeStatus)                                                                                                                                  |    |
| [`StrainProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/StrainProbe.md#StrainProbe)                                                                            |    |
| [`StressProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/StressProbe.md#StressProbe)                                                                            |    |
| [`TemperatureProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/TemperatureProbe.md#TemperatureProbe)                                                             |    |
| [`VelocityProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/VelocityProbe.md#VelocityProbe)                                                                      |    |
| [`VolumeProbe`](../../../ACT/Automation/Mechanical/Results/ProbeResults/VolumeProbe.md#VolumeProbe)                                                                            |    |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums import ProbeResultType
```

## Attribute detail

### ProbeResultType.AccelerationProbe *= 11*

### ProbeResultType.AngularAccelerationProbe *= 19*

### ProbeResultType.AngularVelocityProbe *= 18*

### ProbeResultType.BeamProbe *= 28*

### ProbeResultType.BearingProbe *= 36*

### ProbeResultType.ChargeReaction *= 52*

### ProbeResultType.ConstraintForce *= 29*

### ProbeResultType.ConstraintMoment *= 32*

### ProbeResultType.ContactDistanceProbe *= 58*

### ProbeResultType.CurrentDensityProbe *= 25*

### ProbeResultType.DampingForce *= 31*

### ProbeResultType.DampingMoment *= 34*

### ProbeResultType.DeformationProbe *= 3*

### ProbeResultType.MagneticFluxProbe *= 27*

### ProbeResultType.ElasticForce *= 30*

### ProbeResultType.ElasticMoment *= 33*

### ProbeResultType.ElasticPlusFrictionMoment *= 56*

### ProbeResultType.Impedance *= 53*

### ProbeResultType.FieldIntensity *= 26*

### ProbeResultType.VoltageProbe *= 24*

### ProbeResultType.ElectromechanicalCouplingCoefficient *= 55*

### ProbeResultType.EmagReactionProbe *= 17*

### ProbeResultType.Energy *= 14*

### ProbeResultType.FieldIntensityProbe *= 7*

### ProbeResultType.FlexibleRotationProbe *= 39*

### ProbeResultType.FluxDensityProbe *= 6*

### ProbeResultType.FrictionForceProbe *= 37*

### ProbeResultType.FrictionMomentProbe *= 38*

### ProbeResultType.GeneralizedPlaneStrainProbe *= 22*

### ProbeResultType.HeatFluxProbe *= 5*

### ProbeResultType.JointProbe *= 12*

### ProbeResultType.JouleHeatProbe *= 40*

### ProbeResultType.Position *= 20*

### ProbeResultType.BoltPretension *= 21*

### ProbeResultType.QualityFactor *= 54*

### ProbeResultType.RadiationProbe *= 35*

### ProbeResultType.ReactionProbe *= 9*

### ProbeResultType.ForceReaction *= 15*

### ProbeResultType.MomentReaction *= 16*

### ProbeResultType.ResponsePSD *= 23*

### ProbeResultType.RotationProbe *= 8*

### ProbeResultType.SpringProbe *= 13*

### ProbeResultType.ProbeStatus *= 57*

### ProbeResultType.StrainProbe *= 2*

### ProbeResultType.StressProbe *= 1*

### ProbeResultType.TemperatureProbe *= 4*

### ProbeResultType.VelocityProbe *= 10*

### ProbeResultType.VolumeProbe *= 51*
