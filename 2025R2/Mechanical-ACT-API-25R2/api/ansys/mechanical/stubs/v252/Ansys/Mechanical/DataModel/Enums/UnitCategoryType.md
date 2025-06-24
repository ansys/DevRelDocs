# `UnitCategoryType`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.UnitCategoryType"></a>

#### *class* Ansys.Mechanical.DataModel.Enums.UnitCategoryType(\*args, \*\*kwds)

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

Specifies the WB Unit Category Type.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| -------------------------------------------------------------------------------------- |
| [`AWeightedDecibel`](#UnitCategoryType.AWeightedDecibel) |
| [`Acceleration`](#UnitCategoryType.Acceleration) |
| [`AcousticAdmittance`](#UnitCategoryType.AcousticAdmittance) |
| [`Angle`](#UnitCategoryType.Angle) |
| [`AngularAcceleration`](#UnitCategoryType.AngularAcceleration) |
| [`AngularVelocity`](#UnitCategoryType.AngularVelocity) |
| [`Area`](#UnitCategoryType.Area) |
| [`Capacitance`](#UnitCategoryType.Capacitance) |
| [`Charge`](#UnitCategoryType.Charge) |
| [`ChargeDensity`](#UnitCategoryType.ChargeDensity) |
| [`Conductivity`](#UnitCategoryType.Conductivity) |
| [`Current`](#UnitCategoryType.Current) |
| [`CurrentDensity`](#UnitCategoryType.CurrentDensity) |
| [`DecayConstant`](#UnitCategoryType.DecayConstant) |
| [`Decibel`](#UnitCategoryType.Decibel) |
| [`Density`](#UnitCategoryType.Density) |
| [`Displacement`](#UnitCategoryType.Displacement) |
| [`ElectricCapacitancePerArea`](#UnitCategoryType.ElectricCapacitancePerArea) |
| [`ElectricChargeDensity`](#UnitCategoryType.ElectricChargeDensity) |
| [`ElectricConductancePerUnitArea`](#UnitCategoryType.ElectricConductancePerUnitArea) |
| [`ElectricConductivity`](#UnitCategoryType.ElectricConductivity) |
| [`ElectricField`](#UnitCategoryType.ElectricField) |
| [`ElectricFluxDensity`](#UnitCategoryType.ElectricFluxDensity) |
| [`ElectricResistance`](#UnitCategoryType.ElectricResistance) |
| [`ElectricResistivity`](#UnitCategoryType.ElectricResistivity) |
| [`Energy`](#UnitCategoryType.Energy) |
| [`EnergyDensityMass`](#UnitCategoryType.EnergyDensityMass) |
| [`EnergyPerVolume`](#UnitCategoryType.EnergyPerVolume) |
| [`FilmCoeff`](#UnitCategoryType.FilmCoeff) |
| [`Force`](#UnitCategoryType.Force) |
| [`ForceIntensity`](#UnitCategoryType.ForceIntensity) |
| [`ForcePerAngularUnit`](#UnitCategoryType.ForcePerAngularUnit) |
| [`FractureEnergy`](#UnitCategoryType.FractureEnergy) |
| [`FractureEnergyRate`](#UnitCategoryType.FractureEnergyRate) |
| [`Frequency`](#UnitCategoryType.Frequency) |
| [`FrequencyRate`](#UnitCategoryType.FrequencyRate) |
| [`GasketStiffness`](#UnitCategoryType.GasketStiffness) |
| [`HeatFlux`](#UnitCategoryType.HeatFlux) |
| [`HeatGeneration`](#UnitCategoryType.HeatGeneration) |
| [`HeatTransferRate`](#UnitCategoryType.HeatTransferRate) |
| [`Impulse`](#UnitCategoryType.Impulse) |
| [`ImpulsePerAngularUnit`](#UnitCategoryType.ImpulsePerAngularUnit) |
| [`Inductance`](#UnitCategoryType.Inductance) |
| [`InverseAngle`](#UnitCategoryType.InverseAngle) |
| [`InverseLength`](#UnitCategoryType.InverseLength) |
| [`InverseStress`](#UnitCategoryType.InverseStress) |
| [`Length`](#UnitCategoryType.Length) |
| [`MagneticFieldIntensity`](#UnitCategoryType.MagneticFieldIntensity) |
| [`MagneticFlux`](#UnitCategoryType.MagneticFlux) |
| [`MagneticFluxDensity`](#UnitCategoryType.MagneticFluxDensity) |
| [`Mass`](#UnitCategoryType.Mass) |
| [`MassFlowRate`](#UnitCategoryType.MassFlowRate) |
| [`MassFlowRatePerArea`](#UnitCategoryType.MassFlowRatePerArea) |
| [`MassFlowRatePerLength`](#UnitCategoryType.MassFlowRatePerLength) |
| [`MassFlowRatePerVolume`](#UnitCategoryType.MassFlowRatePerVolume) |
| [`MassMoment`](#UnitCategoryType.MassMoment) |
| [`MassPerArea`](#UnitCategoryType.MassPerArea) |
| [`MassSourceRate`](#UnitCategoryType.MassSourceRate) |
| [`MassSourceRatePerArea`](#UnitCategoryType.MassSourceRatePerArea) |
| [`MassSourceRatePerLength`](#UnitCategoryType.MassSourceRatePerLength) |
| [`MassSourceRatePerVolume`](#UnitCategoryType.MassSourceRatePerVolume) |
| [`MaterialImpedance`](#UnitCategoryType.MaterialImpedance) |
| [`Moment`](#UnitCategoryType.Moment) |
| [`MomentInertia`](#UnitCategoryType.MomentInertia) |
| [`MomentInertiaMass`](#UnitCategoryType.MomentInertiaMass) |
| [`NoUnits`](#UnitCategoryType.NoUnits) |
| [`NormalizedValue`](#UnitCategoryType.NormalizedValue) |
| [`PSDAcceleration`](#UnitCategoryType.PSDAcceleration) |
| [`PSDAccelerationGrav`](#UnitCategoryType.PSDAccelerationGrav) |
| [`PSDDisplacement`](#UnitCategoryType.PSDDisplacement) |
| [`PSDForce`](#UnitCategoryType.PSDForce) |
| [`PSDMoment`](#UnitCategoryType.PSDMoment) |
| [`PSDPressure`](#UnitCategoryType.PSDPressure) |
| [`PSDStrain`](#UnitCategoryType.PSDStrain) |
| [`PSDStress`](#UnitCategoryType.PSDStress) |
| [`PSDVelocity`](#UnitCategoryType.PSDVelocity) |
| [`Permeability`](#UnitCategoryType.Permeability) |
| [`Permittivity`](#UnitCategoryType.Permittivity) |
| [`Poisson`](#UnitCategoryType.Poisson) |
| [`Power`](#UnitCategoryType.Power) |
| [`PowerSpectralDensity`](#UnitCategoryType.PowerSpectralDensity) |
| [`Pressure`](#UnitCategoryType.Pressure) |
| [`RSAcceleration`](#UnitCategoryType.RSAcceleration) |
| [`RSAccelerationGrav`](#UnitCategoryType.RSAccelerationGrav) |
| [`RSDisplacement`](#UnitCategoryType.RSDisplacement) |
| [`RSVelocity`](#UnitCategoryType.RSVelocity) |
| [`RelativePermeability`](#UnitCategoryType.RelativePermeability) |
| [`RelativePermittivity`](#UnitCategoryType.RelativePermittivity) |
| [`RotationalDamping`](#UnitCategoryType.RotationalDamping) |
| [`RotationalStiffness`](#UnitCategoryType.RotationalStiffness) |
| [`SectionModulus`](#UnitCategoryType.SectionModulus) |
| [`SeebeckCoefficient`](#UnitCategoryType.SeebeckCoefficient) |
| [`ShearRate`](#UnitCategoryType.ShearRate) |
| [`ShearStrain`](#UnitCategoryType.ShearStrain) |
| [`ShockVelocity`](#UnitCategoryType.ShockVelocity) |
| [`SpecificHeat`](#UnitCategoryType.SpecificHeat) |
| [`SpecificWeight`](#UnitCategoryType.SpecificWeight) |
| [`SquareRootOfLength`](#UnitCategoryType.SquareRootOfLength) |
| [`Stiffness`](#UnitCategoryType.Stiffness) |
| [`Strain`](#UnitCategoryType.Strain) |
| [`Strength`](#UnitCategoryType.Strength) |
| [`Stress`](#UnitCategoryType.Stress) |
| [`StressIntensityFactor`](#UnitCategoryType.StressIntensityFactor) |
| [`SurfaceTension`](#UnitCategoryType.SurfaceTension) |
| [`Temperature`](#UnitCategoryType.Temperature) |
| [`TemperatureDifference`](#UnitCategoryType.TemperatureDifference) |
| [`ThermalCapacitance`](#UnitCategoryType.ThermalCapacitance) |
| [`ThermalCompliance`](#UnitCategoryType.ThermalCompliance) |
| [`ThermalConductance`](#UnitCategoryType.ThermalConductance) |
| [`ThermalExpansion`](#UnitCategoryType.ThermalExpansion) |
| [`ThermalGradient`](#UnitCategoryType.ThermalGradient) |
| [`Time`](#UnitCategoryType.Time) |
| [`TranslationalDamping`](#UnitCategoryType.TranslationalDamping) |
| [`Undefined`](#UnitCategoryType.Undefined) |
| [`Unitless`](#UnitCategoryType.Unitless) |
| [`Velocity`](#UnitCategoryType.Velocity) |
| [`Viscosity`](#UnitCategoryType.Viscosity) |
| [`Voltage`](#UnitCategoryType.Voltage) |
| [`Volume`](#UnitCategoryType.Volume) |
| [`WarpingFactor`](#UnitCategoryType.WarpingFactor) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="UnitCategoryType.AWeightedDecibel"></a>

### UnitCategoryType.AWeightedDecibel *= 107*

<a id="UnitCategoryType.Acceleration"></a>

### UnitCategoryType.Acceleration *= 0*

<a id="UnitCategoryType.AcousticAdmittance"></a>

### UnitCategoryType.AcousticAdmittance *= 104*

<a id="UnitCategoryType.Angle"></a>

### UnitCategoryType.Angle *= 1*

<a id="UnitCategoryType.AngularAcceleration"></a>

### UnitCategoryType.AngularAcceleration *= 63*

<a id="UnitCategoryType.AngularVelocity"></a>

### UnitCategoryType.AngularVelocity *= 2*

<a id="UnitCategoryType.Area"></a>

### UnitCategoryType.Area *= 3*

<a id="UnitCategoryType.Capacitance"></a>

### UnitCategoryType.Capacitance *= 4*

<a id="UnitCategoryType.Charge"></a>

### UnitCategoryType.Charge *= 5*

<a id="UnitCategoryType.ChargeDensity"></a>

### UnitCategoryType.ChargeDensity *= 6*

<a id="UnitCategoryType.Conductivity"></a>

### UnitCategoryType.Conductivity *= 7*

<a id="UnitCategoryType.Current"></a>

### UnitCategoryType.Current *= 8*

<a id="UnitCategoryType.CurrentDensity"></a>

### UnitCategoryType.CurrentDensity *= 9*

<a id="UnitCategoryType.DecayConstant"></a>

### UnitCategoryType.DecayConstant *= 65*

<a id="UnitCategoryType.Decibel"></a>

### UnitCategoryType.Decibel *= 106*

<a id="UnitCategoryType.Density"></a>

### UnitCategoryType.Density *= 10*

<a id="UnitCategoryType.Displacement"></a>

### UnitCategoryType.Displacement *= 11*

<a id="UnitCategoryType.ElectricCapacitancePerArea"></a>

### UnitCategoryType.ElectricCapacitancePerArea *= 110*

<a id="UnitCategoryType.ElectricChargeDensity"></a>

### UnitCategoryType.ElectricChargeDensity *= 109*

<a id="UnitCategoryType.ElectricConductancePerUnitArea"></a>

### UnitCategoryType.ElectricConductancePerUnitArea *= 69*

<a id="UnitCategoryType.ElectricConductivity"></a>

### UnitCategoryType.ElectricConductivity *= 12*

<a id="UnitCategoryType.ElectricField"></a>

### UnitCategoryType.ElectricField *= 13*

<a id="UnitCategoryType.ElectricFluxDensity"></a>

### UnitCategoryType.ElectricFluxDensity *= 14*

<a id="UnitCategoryType.ElectricResistance"></a>

### UnitCategoryType.ElectricResistance *= 111*

<a id="UnitCategoryType.ElectricResistivity"></a>

### UnitCategoryType.ElectricResistivity *= 15*

<a id="UnitCategoryType.Energy"></a>

### UnitCategoryType.Energy *= 16*

<a id="UnitCategoryType.EnergyDensityMass"></a>

### UnitCategoryType.EnergyDensityMass *= 68*

<a id="UnitCategoryType.EnergyPerVolume"></a>

### UnitCategoryType.EnergyPerVolume *= 94*

<a id="UnitCategoryType.FilmCoeff"></a>

### UnitCategoryType.FilmCoeff *= 17*

<a id="UnitCategoryType.Force"></a>

### UnitCategoryType.Force *= 18*

<a id="UnitCategoryType.ForceIntensity"></a>

### UnitCategoryType.ForceIntensity *= 19*

<a id="UnitCategoryType.ForcePerAngularUnit"></a>

### UnitCategoryType.ForcePerAngularUnit *= 75*

<a id="UnitCategoryType.FractureEnergy"></a>

### UnitCategoryType.FractureEnergy *= 66*

<a id="UnitCategoryType.FractureEnergyRate"></a>

### UnitCategoryType.FractureEnergyRate *= 98*

<a id="UnitCategoryType.Frequency"></a>

### UnitCategoryType.Frequency *= 20*

<a id="UnitCategoryType.FrequencyRate"></a>

### UnitCategoryType.FrequencyRate *= 108*

<a id="UnitCategoryType.GasketStiffness"></a>

### UnitCategoryType.GasketStiffness *= 54*

<a id="UnitCategoryType.HeatFlux"></a>

### UnitCategoryType.HeatFlux *= 21*

<a id="UnitCategoryType.HeatGeneration"></a>

### UnitCategoryType.HeatGeneration *= 22*

<a id="UnitCategoryType.HeatTransferRate"></a>

### UnitCategoryType.HeatTransferRate *= 23*

<a id="UnitCategoryType.Impulse"></a>

### UnitCategoryType.Impulse *= 76*

<a id="UnitCategoryType.ImpulsePerAngularUnit"></a>

### UnitCategoryType.ImpulsePerAngularUnit *= 77*

<a id="UnitCategoryType.Inductance"></a>

### UnitCategoryType.Inductance *= 24*

<a id="UnitCategoryType.InverseAngle"></a>

### UnitCategoryType.InverseAngle *= 87*

<a id="UnitCategoryType.InverseLength"></a>

### UnitCategoryType.InverseLength *= 86*

<a id="UnitCategoryType.InverseStress"></a>

### UnitCategoryType.InverseStress *= 25*

<a id="UnitCategoryType.Length"></a>

### UnitCategoryType.Length *= 26*

<a id="UnitCategoryType.MagneticFieldIntensity"></a>

### UnitCategoryType.MagneticFieldIntensity *= 27*

<a id="UnitCategoryType.MagneticFlux"></a>

### UnitCategoryType.MagneticFlux *= 28*

<a id="UnitCategoryType.MagneticFluxDensity"></a>

### UnitCategoryType.MagneticFluxDensity *= 29*

<a id="UnitCategoryType.Mass"></a>

### UnitCategoryType.Mass *= 30*

<a id="UnitCategoryType.MassFlowRate"></a>

### UnitCategoryType.MassFlowRate *= 90*

<a id="UnitCategoryType.MassFlowRatePerArea"></a>

### UnitCategoryType.MassFlowRatePerArea *= 102*

<a id="UnitCategoryType.MassFlowRatePerLength"></a>

### UnitCategoryType.MassFlowRatePerLength *= 103*

<a id="UnitCategoryType.MassFlowRatePerVolume"></a>

### UnitCategoryType.MassFlowRatePerVolume *= 101*

<a id="UnitCategoryType.MassMoment"></a>

### UnitCategoryType.MassMoment *= 96*

<a id="UnitCategoryType.MassPerArea"></a>

### UnitCategoryType.MassPerArea *= 97*

<a id="UnitCategoryType.MassSourceRate"></a>

### UnitCategoryType.MassSourceRate *= 115*

<a id="UnitCategoryType.MassSourceRatePerArea"></a>

### UnitCategoryType.MassSourceRatePerArea *= 113*

<a id="UnitCategoryType.MassSourceRatePerLength"></a>

### UnitCategoryType.MassSourceRatePerLength *= 114*

<a id="UnitCategoryType.MassSourceRatePerVolume"></a>

### UnitCategoryType.MassSourceRatePerVolume *= 112*

<a id="UnitCategoryType.MaterialImpedance"></a>

### UnitCategoryType.MaterialImpedance *= 79*

<a id="UnitCategoryType.Moment"></a>

### UnitCategoryType.Moment *= 31*

<a id="UnitCategoryType.MomentInertia"></a>

### UnitCategoryType.MomentInertia *= 32*

<a id="UnitCategoryType.MomentInertiaMass"></a>

### UnitCategoryType.MomentInertiaMass *= 55*

<a id="UnitCategoryType.NoUnits"></a>

### UnitCategoryType.NoUnits *= -2*

<a id="UnitCategoryType.NormalizedValue"></a>

### UnitCategoryType.NormalizedValue *= 89*

<a id="UnitCategoryType.PSDAcceleration"></a>

### UnitCategoryType.PSDAcceleration *= 56*

<a id="UnitCategoryType.PSDAccelerationGrav"></a>

### UnitCategoryType.PSDAccelerationGrav *= 57*

<a id="UnitCategoryType.PSDDisplacement"></a>

### UnitCategoryType.PSDDisplacement *= 58*

<a id="UnitCategoryType.PSDForce"></a>

### UnitCategoryType.PSDForce *= 72*

<a id="UnitCategoryType.PSDMoment"></a>

### UnitCategoryType.PSDMoment *= 73*

<a id="UnitCategoryType.PSDPressure"></a>

### UnitCategoryType.PSDPressure *= 74*

<a id="UnitCategoryType.PSDStrain"></a>

### UnitCategoryType.PSDStrain *= 71*

<a id="UnitCategoryType.PSDStress"></a>

### UnitCategoryType.PSDStress *= 70*

<a id="UnitCategoryType.PSDVelocity"></a>

### UnitCategoryType.PSDVelocity *= 59*

<a id="UnitCategoryType.Permeability"></a>

### UnitCategoryType.Permeability *= 33*

<a id="UnitCategoryType.Permittivity"></a>

### UnitCategoryType.Permittivity *= 34*

<a id="UnitCategoryType.Poisson"></a>

### UnitCategoryType.Poisson *= 35*

<a id="UnitCategoryType.Power"></a>

### UnitCategoryType.Power *= 36*

<a id="UnitCategoryType.PowerSpectralDensity"></a>

### UnitCategoryType.PowerSpectralDensity *= 105*

<a id="UnitCategoryType.Pressure"></a>

### UnitCategoryType.Pressure *= 37*

<a id="UnitCategoryType.RSAcceleration"></a>

### UnitCategoryType.RSAcceleration *= 80*

<a id="UnitCategoryType.RSAccelerationGrav"></a>

### UnitCategoryType.RSAccelerationGrav *= 81*

<a id="UnitCategoryType.RSDisplacement"></a>

### UnitCategoryType.RSDisplacement *= 82*

<a id="UnitCategoryType.RSVelocity"></a>

### UnitCategoryType.RSVelocity *= 83*

<a id="UnitCategoryType.RelativePermeability"></a>

### UnitCategoryType.RelativePermeability *= 38*

<a id="UnitCategoryType.RelativePermittivity"></a>

### UnitCategoryType.RelativePermittivity *= 39*

<a id="UnitCategoryType.RotationalDamping"></a>

### UnitCategoryType.RotationalDamping *= 60*

<a id="UnitCategoryType.RotationalStiffness"></a>

### UnitCategoryType.RotationalStiffness *= 61*

<a id="UnitCategoryType.SectionModulus"></a>

### UnitCategoryType.SectionModulus *= 40*

<a id="UnitCategoryType.SeebeckCoefficient"></a>

### UnitCategoryType.SeebeckCoefficient *= 64*

<a id="UnitCategoryType.ShearRate"></a>

### UnitCategoryType.ShearRate *= 99*

<a id="UnitCategoryType.ShearStrain"></a>

### UnitCategoryType.ShearStrain *= 43*

<a id="UnitCategoryType.ShockVelocity"></a>

### UnitCategoryType.ShockVelocity *= 67*

<a id="UnitCategoryType.SpecificHeat"></a>

### UnitCategoryType.SpecificHeat *= 41*

<a id="UnitCategoryType.SpecificWeight"></a>

### UnitCategoryType.SpecificWeight *= 42*

<a id="UnitCategoryType.SquareRootOfLength"></a>

### UnitCategoryType.SquareRootOfLength *= 93*

<a id="UnitCategoryType.Stiffness"></a>

### UnitCategoryType.Stiffness *= 44*

<a id="UnitCategoryType.Strain"></a>

### UnitCategoryType.Strain *= 45*

<a id="UnitCategoryType.Strength"></a>

### UnitCategoryType.Strength *= 47*

<a id="UnitCategoryType.Stress"></a>

### UnitCategoryType.Stress *= 46*

<a id="UnitCategoryType.StressIntensityFactor"></a>

### UnitCategoryType.StressIntensityFactor *= 92*

<a id="UnitCategoryType.SurfaceTension"></a>

### UnitCategoryType.SurfaceTension *= 118*

<a id="UnitCategoryType.Temperature"></a>

### UnitCategoryType.Temperature *= 49*

<a id="UnitCategoryType.TemperatureDifference"></a>

### UnitCategoryType.TemperatureDifference *= 78*

<a id="UnitCategoryType.ThermalCapacitance"></a>

### UnitCategoryType.ThermalCapacitance *= 88*

<a id="UnitCategoryType.ThermalCompliance"></a>

### UnitCategoryType.ThermalCompliance *= 116*

<a id="UnitCategoryType.ThermalConductance"></a>

### UnitCategoryType.ThermalConductance *= 85*

<a id="UnitCategoryType.ThermalExpansion"></a>

### UnitCategoryType.ThermalExpansion *= 48*

<a id="UnitCategoryType.ThermalGradient"></a>

### UnitCategoryType.ThermalGradient *= 95*

<a id="UnitCategoryType.Time"></a>

### UnitCategoryType.Time *= 50*

<a id="UnitCategoryType.TranslationalDamping"></a>

### UnitCategoryType.TranslationalDamping *= 62*

<a id="UnitCategoryType.Undefined"></a>

### UnitCategoryType.Undefined *= -1*

<a id="UnitCategoryType.Unitless"></a>

### UnitCategoryType.Unitless *= 91*

<a id="UnitCategoryType.Velocity"></a>

### UnitCategoryType.Velocity *= 51*

<a id="UnitCategoryType.Viscosity"></a>

### UnitCategoryType.Viscosity *= 100*

<a id="UnitCategoryType.Voltage"></a>

### UnitCategoryType.Voltage *= 52*

<a id="UnitCategoryType.Volume"></a>

### UnitCategoryType.Volume *= 53*

<a id="UnitCategoryType.WarpingFactor"></a>

### UnitCategoryType.WarpingFactor *= 84*


