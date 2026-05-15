# Namespace OpenTD.Dimension

### Classes

 [Angle](OpenTD.Dimension.Angle.md)

 [Area](OpenTD.Dimension.Area.md)

 [CondPerArea](OpenTD.Dimension.CondPerArea.md)

 [CondPerLength](OpenTD.Dimension.CondPerLength.md)

 [Conductance](OpenTD.Dimension.Conductance.md)

 [Current](OpenTD.Dimension.Current.md)

 [Density](OpenTD.Dimension.Density.md)

 [DimensionalIfPositiveList<T\>](OpenTD.Dimension.DimensionalIfPositiveList\-1.md)

A list of DimensionalIfPositives.

 [DimensionalList<T\>](OpenTD.Dimension.DimensionalList\-1.md)

A list of Dimensionals.

 [DimensionalList2<T\>](OpenTD.Dimension.DimensionalList2\-1.md)

A 2D list of Dimensionals.

 [Dimensionless](OpenTD.Dimension.Dimensionless.md)

 [DynamicViscosity](OpenTD.Dimension.DynamicViscosity.md)

 [Energy](OpenTD.Dimension.Energy.md)

 [EnergyPerArea](OpenTD.Dimension.EnergyPerArea.md)

 [EnergyPerLength](OpenTD.Dimension.EnergyPerLength.md)

 [EnergyPerMass](OpenTD.Dimension.EnergyPerMass.md)

 [Enthalpy](OpenTD.Dimension.Enthalpy.md)

 [Entropy](OpenTD.Dimension.Entropy.md)

 [Flux](OpenTD.Dimension.Flux.md)

 [Force](OpenTD.Dimension.Force.md)

 [Gravity](OpenTD.Dimension.Gravity.md)

 [HeatRate](OpenTD.Dimension.HeatRate.md)

 [HeatRatePerVolume](OpenTD.Dimension.HeatRatePerVolume.md)

 [Inertial](OpenTD.Dimension.Inertial.md)

 [InversePressure](OpenTD.Dimension.InversePressure.md)

 [InverseVolume](OpenTD.Dimension.InverseVolume.md)

 [Mass](OpenTD.Dimension.Mass.md)

 [MassFlowRate](OpenTD.Dimension.MassFlowRate.md)

 [MassFlowratePerEnthalpy](OpenTD.Dimension.MassFlowratePerEnthalpy.md)

 [MassFlowratePerPressure](OpenTD.Dimension.MassFlowratePerPressure.md)

 [MassFlux](OpenTD.Dimension.MassFlux.md)

 [MassPerLength](OpenTD.Dimension.MassPerLength.md)

 [ModelLength](OpenTD.Dimension.ModelLength.md)

 [MomentOfInertia](OpenTD.Dimension.MomentOfInertia.md)

 [OrbitLength](OpenTD.Dimension.OrbitLength.md)

 [OrbitVelocity](OpenTD.Dimension.OrbitVelocity.md)

 [Pressure](OpenTD.Dimension.Pressure.md)

 [PressurePerVolume](OpenTD.Dimension.PressurePerVolume.md)

 [Resistivity](OpenTD.Dimension.Resistivity.md)

 [Rotation](OpenTD.Dimension.Rotation.md)

 [SpecificHeat](OpenTD.Dimension.SpecificHeat.md)

 [StefanBoltzmann](OpenTD.Dimension.StefanBoltzmann.md)

 [SurfaceTension](OpenTD.Dimension.SurfaceTension.md)

 [Temp](OpenTD.Dimension.Temp.md)

 [TempAbs](OpenTD.Dimension.TempAbs.md)

 [ThermalMass](OpenTD.Dimension.ThermalMass.md)

 [Time](OpenTD.Dimension.Time.md)

 [Torque](OpenTD.Dimension.Torque.md)

 [Unknown](OpenTD.Dimension.Unknown.md)

 [Velocity](OpenTD.Dimension.Velocity.md)

 [Voltage](OpenTD.Dimension.Voltage.md)

 [VoltsPerTemp](OpenTD.Dimension.VoltsPerTemp.md)

 [Volume](OpenTD.Dimension.Volume.md)

 [VolumeFlowRate](OpenTD.Dimension.VolumeFlowRate.md)

### Structs

 [Dimensional<T\>](OpenTD.Dimension.Dimensional\-1.md)

Dimensionals represent dimensional quantities, like endTime or initialTemperature.
When set or get, dimensional values reflect the current Units.WorkingUnits system.
For example, if you set WorkingUnits.temp to C, then set a Dimensional{Temperature}
to 0, then set WorkingUnits.temp to F, the Dimensional would now return 32.
Dimensionals implicitly convert to/from doubles.

 [DimensionalIfPositive<T\>](OpenTD.Dimension.DimensionalIfPositive\-1.md)

Works like a dimensional, but only for positive values. Negative values
act like doubles.

### Interfaces

 [IDimension](OpenTD.Dimension.IDimension.md)

Represents a physical dimension, e.g., density


