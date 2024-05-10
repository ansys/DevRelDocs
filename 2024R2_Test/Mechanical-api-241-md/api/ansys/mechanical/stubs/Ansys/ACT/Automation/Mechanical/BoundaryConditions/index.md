<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions"></a>

<a id="the-boundaryconditions-package"></a>

# The `BoundaryConditions` package

<a id="summary"></a>

## Summary

### Classes

| [`AcousticMassSourceRate`](AcousticMassSourceRate.md#AcousticMassSourceRate)                               | Defines a AcousticMassSourceRate.           |
|------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [`Current`](Current.md#Current)                                                                            | Defines a Current.                          |
| [`EMTransducer`](EMTransducer.md#EMTransducer)                                                             | Defines a EMTransducer.                     |
| [`ElectricCharge`](ElectricCharge.md#ElectricCharge)                                                       | Defines a ElectricCharge.                   |
| [`HeatFlow`](HeatFlow.md#HeatFlow)                                                                         | Defines a HeatFlow.                         |
| [`HeatFlux`](HeatFlux.md#HeatFlux)                                                                         | Defines a HeatFlux.                         |
| [`InternalHeatGeneration`](InternalHeatGeneration.md#InternalHeatGeneration)                               | Defines a InternalHeatGeneration.           |
| [`LoadGroup`](LoadGroup.md#LoadGroup)                                                                      | Defines a LoadGroup.                        |
| [`PipeTemperature`](PipeTemperature.md#PipeTemperature)                                                    | Defines a PipeTemperature.                  |
| [`Radiation`](Radiation.md#Radiation)                                                                      | Defines a Radiation.                        |
| [`RotatingForce`](RotatingForce.md#RotatingForce)                                                          | Defines a RotatingForce.                    |
| [`Temperature`](Temperature.md#Temperature)                                                                | Defines a Temperature.                      |
| [`ThermalCondition`](ThermalCondition.md#ThermalCondition)                                                 | Defines a ThermalCondition.                 |
| [`Velocity`](Velocity.md#Velocity)                                                                         | Defines a Velocity.                         |
| [`Voltage`](Voltage.md#Voltage)                                                                            | Defines a Voltage.                          |
| [`VoltageGround`](VoltageGround.md#VoltageGround)                                                          | Defines a VoltageGround.                    |
| [`Acceleration`](Acceleration.md#Acceleration)                                                             | Defines a Acceleration.                     |
| [`AcousticDiffuseSoundField`](AcousticDiffuseSoundField.md#AcousticDiffuseSoundField)                      | Defines a AcousticDiffuseSoundField.        |
| [`BearingLoad`](BearingLoad.md#BearingLoad)                                                                | Defines a BearingLoad.                      |
| [`BodyControl`](BodyControl.md#BodyControl)                                                                | Defines a BodyControl.                      |
| [`BoltPretension`](BoltPretension.md#BoltPretension)                                                       | Defines a BoltPretension.                   |
| [`AcousticIncidentWaveSource`](AcousticIncidentWaveSource.md#AcousticIncidentWaveSource)                   | Defines a AcousticIncidentWaveSource.       |
| [`AcousticMassSource`](AcousticMassSource.md#AcousticMassSource)                                           | Defines a AcousticMassSource.               |
| [`ContactStepControl`](ContactStepControl.md#ContactStepControl)                                           | Defines a ContactStepControl.               |
| [`Convection`](Convection.md#Convection)                                                                   | Defines a Convection.                       |
| [`Coupling`](Coupling.md#Coupling)                                                                         | Defines a Coupling.                         |
| [`DetonationPoint`](DetonationPoint.md#DetonationPoint)                                                    | Defines a DetonationPoint.                  |
| [`Displacement`](Displacement.md#Displacement)                                                             | Defines a Displacement.                     |
| [`ElementControls`](ElementControls.md#ElementControls)                                                    | Defines a ElementControls.                  |
| [`GeneralizedPlaneStrain`](GeneralizedPlaneStrain.md#GeneralizedPlaneStrain)                               | Defines a GeneralizedPlaneStrain.           |
| [`GenericBoundaryCondition`](GenericBoundaryCondition.md#GenericBoundaryCondition)                         | Defines a GenericBoundaryCondition.         |
| [`HydrostaticPressure`](HydrostaticPressure.md#HydrostaticPressure)                                        | Defines a HydrostaticPressure.              |
| [`LegacyThermalCondition`](LegacyThermalCondition.md#LegacyThermalCondition)                               | Defines a LegacyThermalCondition.           |
| [`LinePressure`](LinePressure.md#LinePressure)                                                             | Defines a LinePressure.                     |
| [`NodalDisplacement`](NodalDisplacement.md#NodalDisplacement)                                              | Defines a NodalDisplacement.                |
| [`NodalForce`](NodalForce.md#NodalForce)                                                                   | Defines a NodalDisplacement.                |
| [`NodalOrientation`](NodalOrientation.md#NodalOrientation)                                                 | Defines a NodalOrientation.                 |
| [`NodalPressure`](NodalPressure.md#NodalPressure)                                                          | Defines a NodalPressure.                    |
| [`NonlinearAdaptiveRegion`](NonlinearAdaptiveRegion.md#NonlinearAdaptiveRegion)                            | Defines a NonlinearAdaptiveRegion.          |
| [`PipePressure`](PipePressure.md#PipePressure)                                                             | Defines a PipePressure.                     |
| [`Pressure`](Pressure.md#Pressure)                                                                         | Defines a Pressure.                         |
| [`RemoteForce`](RemoteForce.md#RemoteForce)                                                                | Defines a RemoteForce.                      |
| [`RotationalAcceleration`](RotationalAcceleration.md#RotationalAcceleration)                               | Defines a RotationalAcceleration.           |
| [`RotationBoundaryCondition`](RotationBoundaryCondition.md#RotationBoundaryCondition)                      | Defines a RotationBoundaryCondition.        |
| [`Force`](Force.md#Force)                                                                                  | Defines a Force.                            |
| [`RSLoad`](RSLoad.md#RSLoad)                                                                               | Defines a RSLoad.                           |
| [`PSDLoad`](PSDLoad.md#PSDLoad)                                                                            | Defines a PSDLoad.                          |
| [`Moment`](Moment.md#Moment)                                                                               | Defines a Moment.                           |
| [`RotationalVelocity`](RotationalVelocity.md#RotationalVelocity)                                           | Defines a RotationalVelocity.               |
| [`RemoteDisplacement`](RemoteDisplacement.md#RemoteDisplacement)                                           | Defines a RemoteDisplacement.               |
| [`JointLoad`](JointLoad.md#JointLoad)                                                                      | Defines a JointLoad.                        |
| [`AcousticPortInDuct`](AcousticPortInDuct.md#AcousticPortInDuct)                                           | Defines a AcousticPortInDuct.               |
| [`AcousticAbsorptionElement`](AcousticAbsorptionElement.md#AcousticAbsorptionElement)                      | Defines a AcousticAbsorptionElement.        |
| [`AcousticAbsorptionSurface`](AcousticAbsorptionSurface.md#AcousticAbsorptionSurface)                      | Defines a AcousticAbsorptionSurface.        |
| [`AcousticFarFieldRadationSurface`](AcousticFarFieldRadationSurface.md#AcousticFarFieldRadationSurface)    | Defines a AcousticFarFieldRadationSurface.  |
| [`AcousticFreeSurface`](AcousticFreeSurface.md#AcousticFreeSurface)                                        | Defines a AcousticFreeSurface.              |
| [`AcousticImpedanceBoundary`](AcousticImpedanceBoundary.md#AcousticImpedanceBoundary)                      | Defines a AcousticImpedanceBoundary.        |
| [`AcousticImpedanceSheet`](AcousticImpedanceSheet.md#AcousticImpedanceSheet)                               | Defines a AcousticImpedanceSheet.           |
| [`AcousticLowReducedFrequency`](AcousticLowReducedFrequency.md#AcousticLowReducedFrequency)                | Defines a AcousticLowReducedFrequency.      |
| [`AcousticPort`](AcousticPort.md#AcousticPort)                                                             | Defines a AcousticPort.                     |
| [`AcousticPressure`](AcousticPressure.md#AcousticPressure)                                                 | Defines a AcousticPressure.                 |
| [`AcousticRadiationBoundary`](AcousticRadiationBoundary.md#AcousticRadiationBoundary)                      | Defines a AcousticRadiationBoundary.        |
| [`AcousticRigidWall`](AcousticRigidWall.md#AcousticRigidWall)                                              | Defines a AcousticRigidWall.                |
| [`AcousticStaticPressure`](AcousticStaticPressure.md#AcousticStaticPressure)                               | Defines a AcousticStaticPressure.           |
| [`AcousticSurfaceAcceleration`](AcousticSurfaceAcceleration.md#AcousticSurfaceAcceleration)                | Defines a AcousticSurfaceAcceleration.      |
| [`AcousticSurfaceVelocity`](AcousticSurfaceVelocity.md#AcousticSurfaceVelocity)                            | Defines a AcousticSurfaceVelocity.          |
| [`AcousticSymmetryPlane`](AcousticSymmetryPlane.md#AcousticSymmetryPlane)                                  | Defines a AcousticSymmetryPlane.            |
| [`AcousticTemperature`](AcousticTemperature.md#AcousticTemperature)                                        | Defines a AcousticTemperature.              |
| [`AcousticThermoViscousBLIBoundary`](AcousticThermoViscousBLIBoundary.md#AcousticThermoViscousBLIBoundary) | Defines a AcousticThermoViscousBLIBoundary. |
| [`AcousticTransferAdmittanceMatrix`](AcousticTransferAdmittanceMatrix.md#AcousticTransferAdmittanceMatrix) | Defines a AcousticTransferAdmittanceMatrix. |
| [`CompressionOnlySupport`](CompressionOnlySupport.md#CompressionOnlySupport)                               | Defines a CompressionOnlySupport.           |
| [`ConstraintEquation`](ConstraintEquation.md#ConstraintEquation)                                           | Defines a ConstraintEquation.               |
| [`CoupledPhysicsHeatingObjects`](CoupledPhysicsHeatingObjects.md#CoupledPhysicsHeatingObjects)             | Defines a CoupledPhysicsHeatingObjects.     |
| [`CylindricalSupport`](CylindricalSupport.md#CylindricalSupport)                                           | Defines a CylindricalSupport.               |
| [`EarthGravity`](EarthGravity.md#EarthGravity)                                                             | Defines a EarthGravity.                     |
| [`ElasticSupport`](ElasticSupport.md#ElasticSupport)                                                       | Defines a ElasticSupport.                   |
| [`ElementBirthAndDeath`](ElementBirthAndDeath.md#ElementBirthAndDeath)                                     | Defines a ElementBirthAndDeath.             |
| [`FixedRotation`](FixedRotation.md#FixedRotation)                                                          | Defines a FixedRotation.                    |
| [`FixedSupport`](FixedSupport.md#FixedSupport)                                                             | Defines a FixedSupport.                     |
| [`FluidSolidInterface`](FluidSolidInterface.md#FluidSolidInterface)                                        | Defines a FluidSolidInterface.              |
| [`FrictionlessSupport`](FrictionlessSupport.md#FrictionlessSupport)                                        | Defines a FrictionlessSupport.              |
| [`GeometryBasedAdaptivity`](GeometryBasedAdaptivity.md#GeometryBasedAdaptivity)                            | Defines a GeometryBasedAdaptivity.          |
| [`ImpedanceBoundary`](ImpedanceBoundary.md#ImpedanceBoundary)                                              | Defines a ImpedanceBoundary.                |
| [`ImportedCFDPressure`](ImportedCFDPressure.md#ImportedCFDPressure)                                        | Defines a ImportedCFDPressure.              |
| [`LimitBoundary`](LimitBoundary.md#LimitBoundary)                                                          | Defines a LimitBoundary.                    |
| [`MagneticFluxParallel`](MagneticFluxParallel.md#MagneticFluxParallel)                                     | Defines a MagneticFluxParallel.             |
| [`MassFlowRate`](MassFlowRate.md#MassFlowRate)                                                             | Defines a MassFlowRate.                     |
| [`NodalRotation`](NodalRotation.md#NodalRotation)                                                          | Defines a NodalRotation.                    |
| [`PerfectlyInsulated`](PerfectlyInsulated.md#PerfectlyInsulated)                                           | Defines a PerfectlyInsulated.               |
| [`PlasticHeating`](PlasticHeating.md#PlasticHeating)                                                       | Defines a PlasticHeating.                   |
| [`PSDAcceleration`](PSDAcceleration.md#PSDAcceleration)                                                    | Defines a PSDAcceleration.                  |
| [`PSDDisplacement`](PSDDisplacement.md#PSDDisplacement)                                                    | Defines a PSDDisplacement.                  |
| [`PSDGAcceleration`](PSDGAcceleration.md#PSDGAcceleration)                                                 | Defines a PSDGAcceleration.                 |
| [`PSDVelocity`](PSDVelocity.md#PSDVelocity)                                                                | Defines a PSDVelocity.                      |
| [`RSAcceleration`](RSAcceleration.md#RSAcceleration)                                                       | Defines a RSAcceleration.                   |
| [`RSDisplacement`](RSDisplacement.md#RSDisplacement)                                                       | Defines a RSDisplacement.                   |
| [`RSVelocity`](RSVelocity.md#RSVelocity)                                                                   | Defines a RSVelocity.                       |
| [`SimplySupported`](SimplySupported.md#SimplySupported)                                                    | Defines a SimplySupported.                  |
| [`SurfaceChargeDensity`](SurfaceChargeDensity.md#SurfaceChargeDensity)                                     | Defines a SurfaceChargeDensity.             |
| [`ViscoelasticHeating`](ViscoelasticHeating.md#ViscoelasticHeating)                                        | Defines a ViscoelasticHeating.              |
| [`VolumeChargeDensity`](VolumeChargeDensity.md#VolumeChargeDensity)                                        | Defines a VolumeChargeDensity.              |

<a id="description"></a>

## Description

BoundaryConditions subpackage.

<!-- !! processed by numpydoc !! -->
