# UnitCategoryType

### *class* UnitCategoryType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the WB Unit Category Type.

> <!-- !! processed by numpydoc !! -->

## Overview

### Attributes

| [`NoUnits`](#UnitCategoryType.NoUnits)                                                                                 |    |
|------------------------------------------------------------------------------------------------------------------------|----|
| [`Undefined`](#UnitCategoryType.Undefined)                                                                             |    |
| [`Acceleration`](../../../ACT/Automation/Mechanical/BoundaryConditions/Acceleration.md#Acceleration)                   |    |
| [`Angle`](#UnitCategoryType.Angle)                                                                                     |    |
| [`AngularVelocity`](#UnitCategoryType.AngularVelocity)                                                                 |    |
| [`Area`](#UnitCategoryType.Area)                                                                                       |    |
| [`Capacitance`](#UnitCategoryType.Capacitance)                                                                         |    |
| [`Charge`](#UnitCategoryType.Charge)                                                                                   |    |
| [`ChargeDensity`](#UnitCategoryType.ChargeDensity)                                                                     |    |
| [`Conductivity`](#UnitCategoryType.Conductivity)                                                                       |    |
| [`Current`](../../../ACT/Automation/Mechanical/BoundaryConditions/Current.md#Current)                                  |    |
| [`CurrentDensity`](../../../ACT/Automation/Mechanical/Results/ElectromagneticResults/CurrentDensity.md#CurrentDensity) |    |
| [`Density`](#UnitCategoryType.Density)                                                                                 |    |
| [`Displacement`](../../../ACT/Automation/Mechanical/BoundaryConditions/Displacement.md#Displacement)                   |    |
| [`ElectricConductivity`](#UnitCategoryType.ElectricConductivity)                                                       |    |
| [`ElectricField`](#UnitCategoryType.ElectricField)                                                                     |    |
| [`ElectricFluxDensity`](#UnitCategoryType.ElectricFluxDensity)                                                         |    |
| [`ElectricResistivity`](#UnitCategoryType.ElectricResistivity)                                                         |    |
| [`Energy`](#UnitCategoryType.Energy)                                                                                   |    |
| [`FilmCoeff`](#UnitCategoryType.FilmCoeff)                                                                             |    |
| [`Force`](../../../ACT/Automation/Mechanical/BoundaryConditions/Force.md#Force)                                        |    |
| [`ForceIntensity`](#UnitCategoryType.ForceIntensity)                                                                   |    |
| [`Frequency`](#UnitCategoryType.Frequency)                                                                             |    |
| [`HeatFlux`](../../../ACT/Automation/Mechanical/BoundaryConditions/HeatFlux.md#HeatFlux)                               |    |
| [`HeatGeneration`](#UnitCategoryType.HeatGeneration)                                                                   |    |
| [`HeatTransferRate`](#UnitCategoryType.HeatTransferRate)                                                               |    |
| [`Inductance`](../../../ACT/Automation/Mechanical/Results/ElectromagneticResults/Inductance.md#Inductance)             |    |
| [`InverseStress`](#UnitCategoryType.InverseStress)                                                                     |    |
| [`Length`](#UnitCategoryType.Length)                                                                                   |    |
| [`MagneticFieldIntensity`](#UnitCategoryType.MagneticFieldIntensity)                                                   |    |
| [`MagneticFlux`](#UnitCategoryType.MagneticFlux)                                                                       |    |
| [`MagneticFluxDensity`](#UnitCategoryType.MagneticFluxDensity)                                                         |    |
| [`Mass`](#UnitCategoryType.Mass)                                                                                       |    |
| [`Moment`](../../../ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment)                                     |    |
| [`MomentInertia`](#UnitCategoryType.MomentInertia)                                                                     |    |
| [`Permeability`](#UnitCategoryType.Permeability)                                                                       |    |
| [`Permittivity`](#UnitCategoryType.Permittivity)                                                                       |    |
| [`Poisson`](#UnitCategoryType.Poisson)                                                                                 |    |
| [`Power`](#UnitCategoryType.Power)                                                                                     |    |
| [`Pressure`](../../../ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure)                               |    |
| [`RelativePermeability`](#UnitCategoryType.RelativePermeability)                                                       |    |
| [`RelativePermittivity`](#UnitCategoryType.RelativePermittivity)                                                       |    |
| [`SectionModulus`](#UnitCategoryType.SectionModulus)                                                                   |    |
| [`SpecificHeat`](#UnitCategoryType.SpecificHeat)                                                                       |    |
| [`SpecificWeight`](#UnitCategoryType.SpecificWeight)                                                                   |    |
| [`ShearStrain`](#UnitCategoryType.ShearStrain)                                                                         |    |
| [`Stiffness`](#UnitCategoryType.Stiffness)                                                                             |    |
| [`Strain`](#UnitCategoryType.Strain)                                                                                   |    |
| [`Stress`](#UnitCategoryType.Stress)                                                                                   |    |
| [`Strength`](#UnitCategoryType.Strength)                                                                               |    |
| [`ThermalExpansion`](#UnitCategoryType.ThermalExpansion)                                                               |    |
| [`Temperature`](../../../ACT/Automation/Mechanical/BoundaryConditions/Temperature.md#Temperature)                      |    |
| [`Time`](#UnitCategoryType.Time)                                                                                       |    |
| [`Velocity`](../../../ACT/Automation/Mechanical/BoundaryConditions/Velocity.md#Velocity)                               |    |
| [`Voltage`](../../../ACT/Automation/Mechanical/BoundaryConditions/Voltage.md#Voltage)                                  |    |
| [`Volume`](../../../ACT/Automation/Mechanical/Results/Volume.md#Volume)                                                |    |
| [`GasketStiffness`](#UnitCategoryType.GasketStiffness)                                                                 |    |
| [`MomentInertiaMass`](#UnitCategoryType.MomentInertiaMass)                                                             |    |
| [`PSDAcceleration`](../../../ACT/Automation/Mechanical/BoundaryConditions/PSDAcceleration.md#PSDAcceleration)          |    |
| [`PSDAccelerationGrav`](#UnitCategoryType.PSDAccelerationGrav)                                                         |    |
| [`PSDDisplacement`](../../../ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement)          |    |
| [`PSDVelocity`](../../../ACT/Automation/Mechanical/BoundaryConditions/PSDVelocity.md#PSDVelocity)                      |    |
| [`RotationalDamping`](#UnitCategoryType.RotationalDamping)                                                             |    |
| [`RotationalStiffness`](#UnitCategoryType.RotationalStiffness)                                                         |    |
| [`TranslationalDamping`](#UnitCategoryType.TranslationalDamping)                                                       |    |
| [`AngularAcceleration`](#UnitCategoryType.AngularAcceleration)                                                         |    |
| [`SeebeckCoefficient`](#UnitCategoryType.SeebeckCoefficient)                                                           |    |
| [`DecayConstant`](#UnitCategoryType.DecayConstant)                                                                     |    |
| [`FractureEnergy`](#UnitCategoryType.FractureEnergy)                                                                   |    |
| [`ShockVelocity`](#UnitCategoryType.ShockVelocity)                                                                     |    |
| [`EnergyDensityMass`](#UnitCategoryType.EnergyDensityMass)                                                             |    |
| [`ElectricConductancePerUnitArea`](#UnitCategoryType.ElectricConductancePerUnitArea)                                   |    |
| [`PSDStress`](#UnitCategoryType.PSDStress)                                                                             |    |
| [`PSDStrain`](#UnitCategoryType.PSDStrain)                                                                             |    |
| [`PSDForce`](#UnitCategoryType.PSDForce)                                                                               |    |
| [`PSDMoment`](#UnitCategoryType.PSDMoment)                                                                             |    |
| [`PSDPressure`](#UnitCategoryType.PSDPressure)                                                                         |    |
| [`ForcePerAngularUnit`](#UnitCategoryType.ForcePerAngularUnit)                                                         |    |
| [`Impulse`](#UnitCategoryType.Impulse)                                                                                 |    |
| [`ImpulsePerAngularUnit`](#UnitCategoryType.ImpulsePerAngularUnit)                                                     |    |
| [`TemperatureDifference`](#UnitCategoryType.TemperatureDifference)                                                     |    |
| [`MaterialImpedance`](#UnitCategoryType.MaterialImpedance)                                                             |    |
| [`RSAcceleration`](../../../ACT/Automation/Mechanical/BoundaryConditions/RSAcceleration.md#RSAcceleration)             |    |
| [`RSAccelerationGrav`](#UnitCategoryType.RSAccelerationGrav)                                                           |    |
| [`RSDisplacement`](../../../ACT/Automation/Mechanical/BoundaryConditions/RSDisplacement.md#RSDisplacement)             |    |
| [`RSVelocity`](../../../ACT/Automation/Mechanical/BoundaryConditions/RSVelocity.md#RSVelocity)                         |    |
| [`WarpingFactor`](#UnitCategoryType.WarpingFactor)                                                                     |    |
| [`ThermalConductance`](#UnitCategoryType.ThermalConductance)                                                           |    |
| [`InverseLength`](#UnitCategoryType.InverseLength)                                                                     |    |
| [`InverseAngle`](#UnitCategoryType.InverseAngle)                                                                       |    |
| [`ThermalCapacitance`](#UnitCategoryType.ThermalCapacitance)                                                           |    |
| [`NormalizedValue`](#UnitCategoryType.NormalizedValue)                                                                 |    |
| [`MassFlowRate`](../../../ACT/Automation/Mechanical/BoundaryConditions/MassFlowRate.md#MassFlowRate)                   |    |
| [`Unitless`](#UnitCategoryType.Unitless)                                                                               |    |
| [`StressIntensityFactor`](#UnitCategoryType.StressIntensityFactor)                                                     |    |
| [`SquareRootOfLength`](#UnitCategoryType.SquareRootOfLength)                                                           |    |
| [`EnergyPerVolume`](#UnitCategoryType.EnergyPerVolume)                                                                 |    |
| [`ThermalGradient`](#UnitCategoryType.ThermalGradient)                                                                 |    |
| [`MassMoment`](#UnitCategoryType.MassMoment)                                                                           |    |
| [`MassPerArea`](#UnitCategoryType.MassPerArea)                                                                         |    |
| [`FractureEnergyRate`](#UnitCategoryType.FractureEnergyRate)                                                           |    |
| [`ShearRate`](#UnitCategoryType.ShearRate)                                                                             |    |
| [`Viscosity`](#UnitCategoryType.Viscosity)                                                                             |    |
| [`MassFlowRatePerVolume`](#UnitCategoryType.MassFlowRatePerVolume)                                                     |    |
| [`MassFlowRatePerArea`](#UnitCategoryType.MassFlowRatePerArea)                                                         |    |
| [`MassFlowRatePerLength`](#UnitCategoryType.MassFlowRatePerLength)                                                     |    |
| [`AcousticAdmittance`](#UnitCategoryType.AcousticAdmittance)                                                           |    |
| [`PowerSpectralDensity`](#UnitCategoryType.PowerSpectralDensity)                                                       |    |
| [`Decibel`](#UnitCategoryType.Decibel)                                                                                 |    |
| [`AWeightedDecibel`](#UnitCategoryType.AWeightedDecibel)                                                               |    |
| [`FrequencyRate`](#UnitCategoryType.FrequencyRate)                                                                     |    |
| [`ElectricChargeDensity`](#UnitCategoryType.ElectricChargeDensity)                                                     |    |
| [`ElectricCapacitancePerArea`](#UnitCategoryType.ElectricCapacitancePerArea)                                           |    |
| [`ElectricResistance`](#UnitCategoryType.ElectricResistance)                                                           |    |
| [`MassSourceRatePerVolume`](#UnitCategoryType.MassSourceRatePerVolume)                                                 |    |
| [`MassSourceRatePerArea`](#UnitCategoryType.MassSourceRatePerArea)                                                     |    |
| [`MassSourceRatePerLength`](#UnitCategoryType.MassSourceRatePerLength)                                                 |    |
| [`MassSourceRate`](#UnitCategoryType.MassSourceRate)                                                                   |    |
| [`ThermalCompliance`](#UnitCategoryType.ThermalCompliance)                                                             |    |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums import UnitCategoryType
```

## Attribute detail

### UnitCategoryType.NoUnits

### UnitCategoryType.Undefined

### UnitCategoryType.Acceleration *= 0*

### UnitCategoryType.Angle *= 1*

### UnitCategoryType.AngularVelocity *= 2*

### UnitCategoryType.Area *= 3*

### UnitCategoryType.Capacitance *= 4*

### UnitCategoryType.Charge *= 5*

### UnitCategoryType.ChargeDensity *= 6*

### UnitCategoryType.Conductivity *= 7*

### UnitCategoryType.Current *= 8*

### UnitCategoryType.CurrentDensity *= 9*

### UnitCategoryType.Density *= 10*

### UnitCategoryType.Displacement *= 11*

### UnitCategoryType.ElectricConductivity *= 12*

### UnitCategoryType.ElectricField *= 13*

### UnitCategoryType.ElectricFluxDensity *= 14*

### UnitCategoryType.ElectricResistivity *= 15*

### UnitCategoryType.Energy *= 16*

### UnitCategoryType.FilmCoeff *= 17*

### UnitCategoryType.Force *= 18*

### UnitCategoryType.ForceIntensity *= 19*

### UnitCategoryType.Frequency *= 20*

### UnitCategoryType.HeatFlux *= 21*

### UnitCategoryType.HeatGeneration *= 22*

### UnitCategoryType.HeatTransferRate *= 23*

### UnitCategoryType.Inductance *= 24*

### UnitCategoryType.InverseStress *= 25*

### UnitCategoryType.Length *= 26*

### UnitCategoryType.MagneticFieldIntensity *= 27*

### UnitCategoryType.MagneticFlux *= 28*

### UnitCategoryType.MagneticFluxDensity *= 29*

### UnitCategoryType.Mass *= 30*

### UnitCategoryType.Moment *= 31*

### UnitCategoryType.MomentInertia *= 32*

### UnitCategoryType.Permeability *= 33*

### UnitCategoryType.Permittivity *= 34*

### UnitCategoryType.Poisson *= 35*

### UnitCategoryType.Power *= 36*

### UnitCategoryType.Pressure *= 37*

### UnitCategoryType.RelativePermeability *= 38*

### UnitCategoryType.RelativePermittivity *= 39*

### UnitCategoryType.SectionModulus *= 40*

### UnitCategoryType.SpecificHeat *= 41*

### UnitCategoryType.SpecificWeight *= 42*

### UnitCategoryType.ShearStrain *= 43*

### UnitCategoryType.Stiffness *= 44*

### UnitCategoryType.Strain *= 45*

### UnitCategoryType.Stress *= 46*

### UnitCategoryType.Strength *= 47*

### UnitCategoryType.ThermalExpansion *= 48*

### UnitCategoryType.Temperature *= 49*

### UnitCategoryType.Time *= 50*

### UnitCategoryType.Velocity *= 51*

### UnitCategoryType.Voltage *= 52*

### UnitCategoryType.Volume *= 53*

### UnitCategoryType.GasketStiffness *= 54*

### UnitCategoryType.MomentInertiaMass *= 55*

### UnitCategoryType.PSDAcceleration *= 56*

### UnitCategoryType.PSDAccelerationGrav *= 57*

### UnitCategoryType.PSDDisplacement *= 58*

### UnitCategoryType.PSDVelocity *= 59*

### UnitCategoryType.RotationalDamping *= 60*

### UnitCategoryType.RotationalStiffness *= 61*

### UnitCategoryType.TranslationalDamping *= 62*

### UnitCategoryType.AngularAcceleration *= 63*

### UnitCategoryType.SeebeckCoefficient *= 64*

### UnitCategoryType.DecayConstant *= 65*

### UnitCategoryType.FractureEnergy *= 66*

### UnitCategoryType.ShockVelocity *= 67*

### UnitCategoryType.EnergyDensityMass *= 68*

### UnitCategoryType.ElectricConductancePerUnitArea *= 69*

### UnitCategoryType.PSDStress *= 70*

### UnitCategoryType.PSDStrain *= 71*

### UnitCategoryType.PSDForce *= 72*

### UnitCategoryType.PSDMoment *= 73*

### UnitCategoryType.PSDPressure *= 74*

### UnitCategoryType.ForcePerAngularUnit *= 75*

### UnitCategoryType.Impulse *= 76*

### UnitCategoryType.ImpulsePerAngularUnit *= 77*

### UnitCategoryType.TemperatureDifference *= 78*

### UnitCategoryType.MaterialImpedance *= 79*

### UnitCategoryType.RSAcceleration *= 80*

### UnitCategoryType.RSAccelerationGrav *= 81*

### UnitCategoryType.RSDisplacement *= 82*

### UnitCategoryType.RSVelocity *= 83*

### UnitCategoryType.WarpingFactor *= 84*

### UnitCategoryType.ThermalConductance *= 85*

### UnitCategoryType.InverseLength *= 86*

### UnitCategoryType.InverseAngle *= 87*

### UnitCategoryType.ThermalCapacitance *= 88*

### UnitCategoryType.NormalizedValue *= 89*

### UnitCategoryType.MassFlowRate *= 90*

### UnitCategoryType.Unitless *= 91*

### UnitCategoryType.StressIntensityFactor *= 92*

### UnitCategoryType.SquareRootOfLength *= 93*

### UnitCategoryType.EnergyPerVolume *= 94*

### UnitCategoryType.ThermalGradient *= 95*

### UnitCategoryType.MassMoment *= 96*

### UnitCategoryType.MassPerArea *= 97*

### UnitCategoryType.FractureEnergyRate *= 98*

### UnitCategoryType.ShearRate *= 99*

### UnitCategoryType.Viscosity *= 100*

### UnitCategoryType.MassFlowRatePerVolume *= 101*

### UnitCategoryType.MassFlowRatePerArea *= 102*

### UnitCategoryType.MassFlowRatePerLength *= 103*

### UnitCategoryType.AcousticAdmittance *= 104*

### UnitCategoryType.PowerSpectralDensity *= 105*

### UnitCategoryType.Decibel *= 106*

### UnitCategoryType.AWeightedDecibel *= 107*

### UnitCategoryType.FrequencyRate *= 108*

### UnitCategoryType.ElectricChargeDensity *= 109*

### UnitCategoryType.ElectricCapacitancePerArea *= 110*

### UnitCategoryType.ElectricResistance *= 111*

### UnitCategoryType.MassSourceRatePerVolume *= 112*

### UnitCategoryType.MassSourceRatePerArea *= 113*

### UnitCategoryType.MassSourceRatePerLength *= 114*

### UnitCategoryType.MassSourceRate *= 115*

### UnitCategoryType.ThermalCompliance *= 116*
