# LoadVariableVariationType

### *class* LoadVariableVariationType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the LoadVariableVariationType.

> <!-- !! processed by numpydoc !! -->

## Overview

### Attributes

| [`Acceleration`](../../../ACT/Automation/Mechanical/BoundaryConditions/Acceleration.md#Acceleration)                               |    |
|------------------------------------------------------------------------------------------------------------------------------------|----|
| [`Reactance`](#LoadVariableVariationType.Reactance)                                                                                |    |
| [`Resistance`](#LoadVariableVariationType.Resistance)                                                                              |    |
| [`AxisComponentX`](#LoadVariableVariationType.AxisComponentX)                                                                      |    |
| [`AxisComponentY`](#LoadVariableVariationType.AxisComponentY)                                                                      |    |
| [`AxisComponentZ`](#LoadVariableVariationType.AxisComponentZ)                                                                      |    |
| [`AxisLocationX`](#LoadVariableVariationType.AxisLocationX)                                                                        |    |
| [`AxisLocationY`](#LoadVariableVariationType.AxisLocationY)                                                                        |    |
| [`AxisLocationZ`](#LoadVariableVariationType.AxisLocationZ)                                                                        |    |
| [`BearingDampingC11`](#LoadVariableVariationType.BearingDampingC11)                                                                |    |
| [`BearingDampingC12`](#LoadVariableVariationType.BearingDampingC12)                                                                |    |
| [`BearingDampingC21`](#LoadVariableVariationType.BearingDampingC21)                                                                |    |
| [`BearingDampingC22`](#LoadVariableVariationType.BearingDampingC22)                                                                |    |
| [`BearingPropertiesBegin`](#LoadVariableVariationType.BearingPropertiesBegin)                                                      |    |
| [`BearingPropertiesEnd`](#LoadVariableVariationType.BearingPropertiesEnd)                                                          |    |
| [`BearingStiffnessK11`](#LoadVariableVariationType.BearingStiffnessK11)                                                            |    |
| [`BearingStiffnessK12`](#LoadVariableVariationType.BearingStiffnessK12)                                                            |    |
| [`BearingStiffnessK21`](#LoadVariableVariationType.BearingStiffnessK21)                                                            |    |
| [`BearingStiffnessK22`](#LoadVariableVariationType.BearingStiffnessK22)                                                            |    |
| [`Behavior`](#LoadVariableVariationType.Behavior)                                                                                  |    |
| [`BoltBegin`](#LoadVariableVariationType.BoltBegin)                                                                                |    |
| [`BoltEnd`](#LoadVariableVariationType.BoltEnd)                                                                                    |    |
| [`BoltIncrement`](#LoadVariableVariationType.BoltIncrement)                                                                        |    |
| [`BoltLoadDefineBy`](BoltLoadDefineBy.md#BoltLoadDefineBy)                                                                         |    |
| [`BulkTemperature`](#LoadVariableVariationType.BulkTemperature)                                                                    |    |
| [`BushingNonlinStiffness`](#LoadVariableVariationType.BushingNonlinStiffness)                                                      |    |
| [`Capacitance`](#LoadVariableVariationType.Capacitance)                                                                            |    |
| [`ComponentX`](#LoadVariableVariationType.ComponentX)                                                                              |    |
| [`ComponentY`](#LoadVariableVariationType.ComponentY)                                                                              |    |
| [`ComponentZ`](#LoadVariableVariationType.ComponentZ)                                                                              |    |
| [`ConvectionCoefficient`](#LoadVariableVariationType.ConvectionCoefficient)                                                        |    |
| [`Current`](../../../ACT/Automation/Mechanical/BoundaryConditions/Current.md#Current)                                              |    |
| [`HarmonicIndex`](#LoadVariableVariationType.HarmonicIndex)                                                                        |    |
| [`SectorNumber`](#LoadVariableVariationType.SectorNumber)                                                                          |    |
| [`Damping`](#LoadVariableVariationType.Damping)                                                                                    |    |
| [`DependentDataIndex`](#LoadVariableVariationType.DependentDataIndex)                                                              |    |
| [`DependentsBegin`](#LoadVariableVariationType.DependentsBegin)                                                                    |    |
| [`DependentsEnd`](#LoadVariableVariationType.DependentsEnd)                                                                        |    |
| [`Displacement`](../../../ACT/Automation/Mechanical/BoundaryConditions/Displacement.md#Displacement)                               |    |
| [`ElementFace`](#LoadVariableVariationType.ElementFace)                                                                            |    |
| [`ElementType`](#LoadVariableVariationType.ElementType)                                                                            |    |
| [`EMagBegin`](#LoadVariableVariationType.EMagBegin)                                                                                |    |
| [`EMagEnd`](#LoadVariableVariationType.EMagEnd)                                                                                    |    |
| [`Emissivity`](#LoadVariableVariationType.Emissivity)                                                                              |    |
| [`End`](#LoadVariableVariationType.End)                                                                                            |    |
| [`Energy`](#LoadVariableVariationType.Energy)                                                                                      |    |
| [`EntityId`](#LoadVariableVariationType.EntityId)                                                                                  |    |
| [`ExternalBegin`](#LoadVariableVariationType.ExternalBegin)                                                                        |    |
| [`ExternalEnd`](#LoadVariableVariationType.ExternalEnd)                                                                            |    |
| [`ExternalEnhancedModelBegin`](#LoadVariableVariationType.ExternalEnhancedModelBegin)                                              |    |
| [`ExternalEnhancedModelEnd`](#LoadVariableVariationType.ExternalEnhancedModelEnd)                                                  |    |
| [`ExternalImagValue`](#LoadVariableVariationType.ExternalImagValue)                                                                |    |
| [`ExternalImagValueX`](#LoadVariableVariationType.ExternalImagValueX)                                                              |    |
| [`ExternalImagValueY`](#LoadVariableVariationType.ExternalImagValueY)                                                              |    |
| [`ExternalImagValueZ`](#LoadVariableVariationType.ExternalImagValueZ)                                                              |    |
| [`ExternalImagVectorI`](#LoadVariableVariationType.ExternalImagVectorI)                                                            |    |
| [`ExternalImagVectorJ`](#LoadVariableVariationType.ExternalImagVectorJ)                                                            |    |
| [`ExternalImagVectorK`](#LoadVariableVariationType.ExternalImagVectorK)                                                            |    |
| [`ExternalRealValue`](#LoadVariableVariationType.ExternalRealValue)                                                                |    |
| [`ExternalRealValueX`](#LoadVariableVariationType.ExternalRealValueX)                                                              |    |
| [`ExternalRealValueX2`](#LoadVariableVariationType.ExternalRealValueX2)                                                            |    |
| [`ExternalRealValueY`](#LoadVariableVariationType.ExternalRealValueY)                                                              |    |
| [`ExternalRealValueY2`](#LoadVariableVariationType.ExternalRealValueY2)                                                            |    |
| [`ExternalRealValueZ`](#LoadVariableVariationType.ExternalRealValueZ)                                                              |    |
| [`ExternalRealValueZ2`](#LoadVariableVariationType.ExternalRealValueZ2)                                                            |    |
| [`ExternalRealVectorI`](#LoadVariableVariationType.ExternalRealVectorI)                                                            |    |
| [`ExternalRealVectorJ`](#LoadVariableVariationType.ExternalRealVectorJ)                                                            |    |
| [`ExternalRealVectorK`](#LoadVariableVariationType.ExternalRealVectorK)                                                            |    |
| [`ExternalTemperature`](#LoadVariableVariationType.ExternalTemperature)                                                            |    |
| [`ExtLayeredSectionID`](#LoadVariableVariationType.ExtLayeredSectionID)                                                            |    |
| [`ExtLayeredSectionOffset`](#LoadVariableVariationType.ExtLayeredSectionOffset)                                                    |    |
| [`FluidBegin`](#LoadVariableVariationType.FluidBegin)                                                                              |    |
| [`FluidDensity`](#LoadVariableVariationType.FluidDensity)                                                                          |    |
| [`FluidEnd`](#LoadVariableVariationType.FluidEnd)                                                                                  |    |
| [`Force`](../../../ACT/Automation/Mechanical/BoundaryConditions/Force.md#Force)                                                    |    |
| [`ForceIntensity`](#LoadVariableVariationType.ForceIntensity)                                                                      |    |
| [`FoundationStiffness`](#LoadVariableVariationType.FoundationStiffness)                                                            |    |
| [`Frequency`](#LoadVariableVariationType.Frequency)                                                                                |    |
| [`Friction`](#LoadVariableVariationType.Friction)                                                                                  |    |
| [`GraphEnd`](#LoadVariableVariationType.GraphEnd)                                                                                  |    |
| [`GraphPSDFittedValue`](#LoadVariableVariationType.GraphPSDFittedValue)                                                            |    |
| [`HeatFlow`](../../../ACT/Automation/Mechanical/BoundaryConditions/HeatFlow.md#HeatFlow)                                           |    |
| [`HeatFlux`](../../../ACT/Automation/Mechanical/BoundaryConditions/HeatFlux.md#HeatFlux)                                           |    |
| [`HeatGenerationRate`](#LoadVariableVariationType.HeatGenerationRate)                                                              |    |
| [`IndependentsBegin`](#LoadVariableVariationType.IndependentsBegin)                                                                |    |
| [`IndependentsEnd`](#LoadVariableVariationType.IndependentsEnd)                                                                    |    |
| [`IndexBegin`](#LoadVariableVariationType.IndexBegin)                                                                              |    |
| [`IndexEnd`](#LoadVariableVariationType.IndexEnd)                                                                                  |    |
| [`LocationX`](#LoadVariableVariationType.LocationX)                                                                                |    |
| [`LocationY`](#LoadVariableVariationType.LocationY)                                                                                |    |
| [`LocationZ`](#LoadVariableVariationType.LocationZ)                                                                                |    |
| [`Mass`](#LoadVariableVariationType.Mass)                                                                                          |    |
| [`MassFlowRate`](../../../ACT/Automation/Mechanical/BoundaryConditions/MassFlowRate.md#MassFlowRate)                               |    |
| [`MaterialID`](#LoadVariableVariationType.MaterialID)                                                                              |    |
| [`Moment`](../../../ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment)                                                 |    |
| [`NodeId0`](#LoadVariableVariationType.NodeId0)                                                                                    |    |
| [`NodeId1`](#LoadVariableVariationType.NodeId1)                                                                                    |    |
| [`NodeId10`](#LoadVariableVariationType.NodeId10)                                                                                  |    |
| [`NodeId11`](#LoadVariableVariationType.NodeId11)                                                                                  |    |
| [`NodeId12`](#LoadVariableVariationType.NodeId12)                                                                                  |    |
| [`NodeId13`](#LoadVariableVariationType.NodeId13)                                                                                  |    |
| [`NodeId14`](#LoadVariableVariationType.NodeId14)                                                                                  |    |
| [`NodeId15`](#LoadVariableVariationType.NodeId15)                                                                                  |    |
| [`NodeId16`](#LoadVariableVariationType.NodeId16)                                                                                  |    |
| [`NodeId17`](#LoadVariableVariationType.NodeId17)                                                                                  |    |
| [`NodeId18`](#LoadVariableVariationType.NodeId18)                                                                                  |    |
| [`NodeId19`](#LoadVariableVariationType.NodeId19)                                                                                  |    |
| [`NodeId2`](#LoadVariableVariationType.NodeId2)                                                                                    |    |
| [`NodeId3`](#LoadVariableVariationType.NodeId3)                                                                                    |    |
| [`NodeId4`](#LoadVariableVariationType.NodeId4)                                                                                    |    |
| [`NodeId5`](#LoadVariableVariationType.NodeId5)                                                                                    |    |
| [`NodeId6`](#LoadVariableVariationType.NodeId6)                                                                                    |    |
| [`NodeId7`](#LoadVariableVariationType.NodeId7)                                                                                    |    |
| [`NodeId8`](#LoadVariableVariationType.NodeId8)                                                                                    |    |
| [`NodeId9`](#LoadVariableVariationType.NodeId9)                                                                                    |    |
| [`NonlinearAdaptivity`](#LoadVariableVariationType.NonlinearAdaptivity)                                                            |    |
| [`NonlinearAdaptivityBegin`](#LoadVariableVariationType.NonlinearAdaptivityBegin)                                                  |    |
| [`NonlinearAdaptivityEnd`](#LoadVariableVariationType.NonlinearAdaptivityEnd)                                                      |    |
| [`NonlinearStiffnessBegin`](#LoadVariableVariationType.NonlinearStiffnessBegin)                                                    |    |
| [`NonlinearStiffnessEnd`](#LoadVariableVariationType.NonlinearStiffnessEnd)                                                        |    |
| [`NormalizedS`](#LoadVariableVariationType.NormalizedS)                                                                            |    |
| [`Offset`](#LoadVariableVariationType.Offset)                                                                                      |    |
| [`PathLength`](#LoadVariableVariationType.PathLength)                                                                              |    |
| [`PhaseAngle`](#LoadVariableVariationType.PhaseAngle)                                                                              |    |
| [`Preadjustment`](#LoadVariableVariationType.Preadjustment)                                                                        |    |
| [`Preload`](#LoadVariableVariationType.Preload)                                                                                    |    |
| [`Pressure`](../../../ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure)                                           |    |
| [`PSDAcceleration`](../../../ACT/Automation/Mechanical/BoundaryConditions/PSDAcceleration.md#PSDAcceleration)                      |    |
| [`PSDBegin`](#LoadVariableVariationType.PSDBegin)                                                                                  |    |
| [`PSDDisplacement`](../../../ACT/Automation/Mechanical/BoundaryConditions/PSDDisplacement.md#PSDDisplacement)                      |    |
| [`PSDEnd`](#LoadVariableVariationType.PSDEnd)                                                                                      |    |
| [`PSDGAcceleration`](../../../ACT/Automation/Mechanical/BoundaryConditions/PSDGAcceleration.md#PSDGAcceleration)                   |    |
| [`PSDVelocity`](../../../ACT/Automation/Mechanical/BoundaryConditions/PSDVelocity.md#PSDVelocity)                                  |    |
| [`RefId`](#LoadVariableVariationType.RefId)                                                                                        |    |
| [`RotatingForceBegin`](#LoadVariableVariationType.RotatingForceBegin)                                                              |    |
| [`RotatingForceEnd`](#LoadVariableVariationType.RotatingForceEnd)                                                                  |    |
| [`RotatingRadius`](#LoadVariableVariationType.RotatingRadius)                                                                      |    |
| [`Rotation`](#LoadVariableVariationType.Rotation)                                                                                  |    |
| [`RotationalAcceleration`](../../../ACT/Automation/Mechanical/BoundaryConditions/RotationalAcceleration.md#RotationalAcceleration) |    |
| [`RotationalVelocity`](../../../ACT/Automation/Mechanical/BoundaryConditions/RotationalVelocity.md#RotationalVelocity)             |    |
| [`RotationX`](#LoadVariableVariationType.RotationX)                                                                                |    |
| [`RotationY`](#LoadVariableVariationType.RotationY)                                                                                |    |
| [`RotationZ`](#LoadVariableVariationType.RotationZ)                                                                                |    |
| [`RSAcceleration`](../../../ACT/Automation/Mechanical/BoundaryConditions/RSAcceleration.md#RSAcceleration)                         |    |
| [`RSBegin`](#LoadVariableVariationType.RSBegin)                                                                                    |    |
| [`RSDisplacement`](../../../ACT/Automation/Mechanical/BoundaryConditions/RSDisplacement.md#RSDisplacement)                         |    |
| [`RSEnd`](#LoadVariableVariationType.RSEnd)                                                                                        |    |
| [`RSGAcceleration`](#LoadVariableVariationType.RSGAcceleration)                                                                    |    |
| [`RSVelocity`](../../../ACT/Automation/Mechanical/BoundaryConditions/RSVelocity.md#RSVelocity)                                     |    |
| [`Scale`](#LoadVariableVariationType.Scale)                                                                                        |    |
| [`Sector`](#LoadVariableVariationType.Sector)                                                                                      |    |
| [`ShellThickness`](#LoadVariableVariationType.ShellThickness)                                                                      |    |
| [`ShellThicknessEnd`](#LoadVariableVariationType.ShellThicknessEnd)                                                                |    |
| [`SpringNonLinearStiffness`](#LoadVariableVariationType.SpringNonLinearStiffness)                                                  |    |
| [`Step`](#LoadVariableVariationType.Step)                                                                                          |    |
| [`StructuralBegin`](#LoadVariableVariationType.StructuralBegin)                                                                    |    |
| [`StructuralEnd`](#LoadVariableVariationType.StructuralEnd)                                                                        |    |
| [`SynchronousRatio`](#LoadVariableVariationType.SynchronousRatio)                                                                  |    |
| [`Temperature`](../../../ACT/Automation/Mechanical/BoundaryConditions/Temperature.md#Temperature)                                  |    |
| [`ThermalBegin`](#LoadVariableVariationType.ThermalBegin)                                                                          |    |
| [`ThermalCompliance`](#LoadVariableVariationType.ThermalCompliance)                                                                |    |
| [`ThermalEnd`](#LoadVariableVariationType.ThermalEnd)                                                                              |    |
| [`Time`](#LoadVariableVariationType.Time)                                                                                          |    |
| [`UnbalancedForce`](#LoadVariableVariationType.UnbalancedForce)                                                                    |    |
| [`UnbalancedMass`](#LoadVariableVariationType.UnbalancedMass)                                                                      |    |
| [`Value`](#LoadVariableVariationType.Value)                                                                                        |    |
| [`Velocity`](../../../ACT/Automation/Mechanical/BoundaryConditions/Velocity.md#Velocity)                                           |    |
| [`Voltage`](../../../ACT/Automation/Mechanical/BoundaryConditions/Voltage.md#Voltage)                                              |    |
| [`XValue`](#LoadVariableVariationType.XValue)                                                                                      |    |
| [`YValue`](#LoadVariableVariationType.YValue)                                                                                      |    |
| [`ZValue`](#LoadVariableVariationType.ZValue)                                                                                      |    |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums import LoadVariableVariationType
```

## Attribute detail

### LoadVariableVariationType.Acceleration *= 201*

### LoadVariableVariationType.Reactance *= 843*

### LoadVariableVariationType.Resistance *= 842*

### LoadVariableVariationType.AxisComponentX *= 767*

### LoadVariableVariationType.AxisComponentY *= 768*

### LoadVariableVariationType.AxisComponentZ *= 769*

### LoadVariableVariationType.AxisLocationX *= 764*

### LoadVariableVariationType.AxisLocationY *= 765*

### LoadVariableVariationType.AxisLocationZ *= 766*

### LoadVariableVariationType.BearingDampingC11 *= 780*

### LoadVariableVariationType.BearingDampingC12 *= 782*

### LoadVariableVariationType.BearingDampingC21 *= 783*

### LoadVariableVariationType.BearingDampingC22 *= 781*

### LoadVariableVariationType.BearingPropertiesBegin *= 775*

### LoadVariableVariationType.BearingPropertiesEnd *= 784*

### LoadVariableVariationType.BearingStiffnessK11 *= 776*

### LoadVariableVariationType.BearingStiffnessK12 *= 778*

### LoadVariableVariationType.BearingStiffnessK21 *= 779*

### LoadVariableVariationType.BearingStiffnessK22 *= 777*

### LoadVariableVariationType.Behavior *= 1014*

### LoadVariableVariationType.BoltBegin *= 575*

### LoadVariableVariationType.BoltEnd *= 580*

### LoadVariableVariationType.BoltIncrement *= 579*

### LoadVariableVariationType.BoltLoadDefineBy *= 576*

### LoadVariableVariationType.BulkTemperature *= 303*

### LoadVariableVariationType.BushingNonlinStiffness *= 754*

### LoadVariableVariationType.Capacitance *= 308*

### LoadVariableVariationType.ComponentX *= 151*

### LoadVariableVariationType.ComponentY *= 152*

### LoadVariableVariationType.ComponentZ *= 153*

### LoadVariableVariationType.ConvectionCoefficient *= 302*

### LoadVariableVariationType.Current *= 402*

### LoadVariableVariationType.HarmonicIndex *= 47*

### LoadVariableVariationType.SectorNumber *= 48*

### LoadVariableVariationType.Damping *= 211*

### LoadVariableVariationType.DependentDataIndex *= 676*

### LoadVariableVariationType.DependentsBegin *= 150*

### LoadVariableVariationType.DependentsEnd *= 678*

### LoadVariableVariationType.Displacement *= 202*

### LoadVariableVariationType.ElementFace *= 20*

### LoadVariableVariationType.ElementType *= 21*

### LoadVariableVariationType.EMagBegin *= 400*

### LoadVariableVariationType.EMagEnd *= 403*

### LoadVariableVariationType.Emissivity *= 307*

### LoadVariableVariationType.End *= 1010*

### LoadVariableVariationType.Energy *= 215*

### LoadVariableVariationType.EntityId *= 19*

### LoadVariableVariationType.ExternalBegin *= 600*

### LoadVariableVariationType.ExternalEnd *= 619*

### LoadVariableVariationType.ExternalEnhancedModelBegin *= 650*

### LoadVariableVariationType.ExternalEnhancedModelEnd *= 668*

### LoadVariableVariationType.ExternalImagValue *= 605*

### LoadVariableVariationType.ExternalImagValueX *= 613*

### LoadVariableVariationType.ExternalImagValueY *= 614*

### LoadVariableVariationType.ExternalImagValueZ *= 615*

### LoadVariableVariationType.ExternalImagVectorI *= 606*

### LoadVariableVariationType.ExternalImagVectorJ *= 607*

### LoadVariableVariationType.ExternalImagVectorK *= 608*

### LoadVariableVariationType.ExternalRealValue *= 601*

### LoadVariableVariationType.ExternalRealValueX *= 610*

### LoadVariableVariationType.ExternalRealValueX2 *= 616*

### LoadVariableVariationType.ExternalRealValueY *= 611*

### LoadVariableVariationType.ExternalRealValueY2 *= 617*

### LoadVariableVariationType.ExternalRealValueZ *= 612*

### LoadVariableVariationType.ExternalRealValueZ2 *= 618*

### LoadVariableVariationType.ExternalRealVectorI *= 602*

### LoadVariableVariationType.ExternalRealVectorJ *= 603*

### LoadVariableVariationType.ExternalRealVectorK *= 604*

### LoadVariableVariationType.ExternalTemperature *= 609*

### LoadVariableVariationType.ExtLayeredSectionID *= 45*

### LoadVariableVariationType.ExtLayeredSectionOffset *= 652*

### LoadVariableVariationType.FluidBegin *= 500*

### LoadVariableVariationType.FluidDensity *= 501*

### LoadVariableVariationType.FluidEnd *= 503*

### LoadVariableVariationType.Force *= 203*

### LoadVariableVariationType.ForceIntensity *= 209*

### LoadVariableVariationType.FoundationStiffness *= 210*

### LoadVariableVariationType.Frequency *= 16*

### LoadVariableVariationType.Friction *= 212*

### LoadVariableVariationType.GraphEnd *= 1013*

### LoadVariableVariationType.GraphPSDFittedValue *= 1012*

### LoadVariableVariationType.HeatFlow *= 304*

### LoadVariableVariationType.HeatFlux *= 306*

### LoadVariableVariationType.HeatGenerationRate *= 305*

### LoadVariableVariationType.IndependentsBegin *= 10*

### LoadVariableVariationType.IndependentsEnd *= 49*

### LoadVariableVariationType.IndexBegin *= 675*

### LoadVariableVariationType.IndexEnd *= 677*

### LoadVariableVariationType.LocationX *= 1019*

### LoadVariableVariationType.LocationY *= 1020*

### LoadVariableVariationType.LocationZ *= 1021*

### LoadVariableVariationType.Mass *= 214*

### LoadVariableVariationType.MassFlowRate *= 502*

### LoadVariableVariationType.MaterialID *= 651*

### LoadVariableVariationType.Moment *= 204*

### LoadVariableVariationType.NodeId0 *= 23*

### LoadVariableVariationType.NodeId1 *= 24*

### LoadVariableVariationType.NodeId10 *= 33*

### LoadVariableVariationType.NodeId11 *= 34*

### LoadVariableVariationType.NodeId12 *= 35*

### LoadVariableVariationType.NodeId13 *= 36*

### LoadVariableVariationType.NodeId14 *= 37*

### LoadVariableVariationType.NodeId15 *= 38*

### LoadVariableVariationType.NodeId16 *= 39*

### LoadVariableVariationType.NodeId17 *= 40*

### LoadVariableVariationType.NodeId18 *= 41*

### LoadVariableVariationType.NodeId19 *= 42*

### LoadVariableVariationType.NodeId2 *= 25*

### LoadVariableVariationType.NodeId3 *= 26*

### LoadVariableVariationType.NodeId4 *= 27*

### LoadVariableVariationType.NodeId5 *= 28*

### LoadVariableVariationType.NodeId6 *= 29*

### LoadVariableVariationType.NodeId7 *= 30*

### LoadVariableVariationType.NodeId8 *= 31*

### LoadVariableVariationType.NodeId9 *= 32*

### LoadVariableVariationType.NonlinearAdaptivity *= 801*

### LoadVariableVariationType.NonlinearAdaptivityBegin *= 800*

### LoadVariableVariationType.NonlinearAdaptivityEnd *= 802*

### LoadVariableVariationType.NonlinearStiffnessBegin *= 752*

### LoadVariableVariationType.NonlinearStiffnessEnd *= 755*

### LoadVariableVariationType.NormalizedS *= 44*

### LoadVariableVariationType.Offset *= 155*

### LoadVariableVariationType.PathLength *= 43*

### LoadVariableVariationType.PhaseAngle *= 18*

### LoadVariableVariationType.Preadjustment *= 578*

### LoadVariableVariationType.Preload *= 577*

### LoadVariableVariationType.Pressure *= 205*

### LoadVariableVariationType.PSDAcceleration *= 552*

### LoadVariableVariationType.PSDBegin *= 550*

### LoadVariableVariationType.PSDDisplacement *= 553*

### LoadVariableVariationType.PSDEnd *= 555*

### LoadVariableVariationType.PSDGAcceleration *= 551*

### LoadVariableVariationType.PSDVelocity *= 554*

### LoadVariableVariationType.RefId *= 22*

### LoadVariableVariationType.RotatingForceBegin *= 760*

### LoadVariableVariationType.RotatingForceEnd *= 771*

### LoadVariableVariationType.RotatingRadius *= 770*

### LoadVariableVariationType.Rotation *= 206*

### LoadVariableVariationType.RotationalAcceleration *= 213*

### LoadVariableVariationType.RotationalVelocity *= 207*

### LoadVariableVariationType.RotationX *= 1016*

### LoadVariableVariationType.RotationY *= 1017*

### LoadVariableVariationType.RotationZ *= 1018*

### LoadVariableVariationType.RSAcceleration *= 702*

### LoadVariableVariationType.RSBegin *= 700*

### LoadVariableVariationType.RSDisplacement *= 703*

### LoadVariableVariationType.RSEnd *= 705*

### LoadVariableVariationType.RSGAcceleration *= 701*

### LoadVariableVariationType.RSVelocity *= 704*

### LoadVariableVariationType.Scale *= 154*

### LoadVariableVariationType.Sector *= 15*

### LoadVariableVariationType.ShellThickness *= 750*

### LoadVariableVariationType.ShellThicknessEnd *= 751*

### LoadVariableVariationType.SpringNonLinearStiffness *= 753*

### LoadVariableVariationType.Step *= 17*

### LoadVariableVariationType.StructuralBegin *= 200*

### LoadVariableVariationType.StructuralEnd *= 224*

### LoadVariableVariationType.SynchronousRatio *= 763*

### LoadVariableVariationType.Temperature *= 301*

### LoadVariableVariationType.ThermalBegin *= 300*

### LoadVariableVariationType.ThermalCompliance *= 309*

### LoadVariableVariationType.ThermalEnd *= 310*

### LoadVariableVariationType.Time *= 11*

### LoadVariableVariationType.UnbalancedForce *= 762*

### LoadVariableVariationType.UnbalancedMass *= 761*

### LoadVariableVariationType.Value *= 1015*

### LoadVariableVariationType.Velocity *= 208*

### LoadVariableVariationType.Voltage *= 401*

### LoadVariableVariationType.XValue *= 12*

### LoadVariableVariationType.YValue *= 13*

### LoadVariableVariationType.ZValue *= 14*
