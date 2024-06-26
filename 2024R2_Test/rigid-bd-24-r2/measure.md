# Measure

Most useful measures are pre-existing in the Rigid Dynamics model, and can be
accessed using other object get functions. Additional measures can be
created before solving for use in custom post-processing or as input values
for joint conditions. For example, measures can be created to express
conditions. In this case, the measure must be added to the system to be
computed at each time step (see component measure example below).

ID table: `CS_Measure`

### Constants 

For the measure type (`E_MeasureType`):

`E_1DRotationJoint`, `E_3DRotationBody`, `E_3DRotationJoint`,
`E_Acceleration`, `E_ActuatorStatus`, `E_ActuatorEnergy`,
`E_AnsysJointForceAndTorque`, `E_AXPY`, `E_BodyAcceleration`,
`E_BodyIntertialBCSQuaternion`, `E_BodyRotation`, `E_BodyTranslation`,
`E_CenterOfGravity`, `E_Component`, `E_Constant`, `E_Contact`,
`E_ContactForce`, `E_ContactVelocity`, `E_Counter`, `E_Displacement`,
`E_Distance`, `E_DistanceDot`, `E_Divides`, `E_EigenValue`,
`E_DOFSensitivity`, `E_Dot`, `E_ElasticEnergy`, `E_Energy`, `E_EulerAngles`,
`E_ForceMagnitude`, `E_Forces`, `E_IntegratedOmega`, `E_JointAcceleration`,
`E_JointDOFFrictionCone`, `E_JointDriverForce`, `E_JointForce`,
`E_JointMBDVelocity`, `E_JointNormalForce`, `E_JointTranslation`,
`E_JointRotation`, `E_JointVelocity`, `E_KineticEnergy`,
`E_MassMomentsOfInertia`, `E_MeasureDotInDirectionOfLoad`, `E_Minus`,
`E_Modulus`, `E_Multiplies`, `E_Norm`, `E_Omega`, `E_OmegaDot`,
`E_OutputContactForce`, `E_Plus`, `E_PointOnCurveGeometryMeasure`,
`E_PointOnCurveJointSigmaMeasure`, `E_PointToPointRotation`,
`E_PointToPointRotationDot`, `E_Position`, `E_PotentialEnergy`, `E_RadialGap`,
`E_ReferenceEnergy`, `E_RelativeAcceleration`, `E_RelativePosition`,
`E_RelativeVelocity`, `E_RotationalRelativeDOF`, `E_RotationMatrix`,
`E_SphericalStop`, `E_StopVelocity`, `E_StopStatus`, `E_Time`, `E_TimeStep`,
`E_TranslationalJoint`, `E_UniversalAngles`, `E_UnknownType`, `E_User`,
`E_Velocity`, `E_Violation`, `E_XYZAnsysRotationAngles`,
`E_ZYXRotationAngles`, `E_AngularMomentum`

### Members

`Length`

Number of components of the measure

Example:
  
    nbValues = Measure.Length

`Type`

Measure type

`CalculationMethod`

A measure can use direct calculation or be time integrated. On a measure that
uses direct calculation, it is possible to retrieve the measure value through
time. On a measure that is time-integrated, both values and time derivatives
can be retrieved.

`Name`

Measure Name

### Member functions

`FillValuesThroughTime()`

Returns a two dimensional array. This function is to be called after the
solution has been performed. The first dimension of the returned array is the
number of time values in the transient. The second dimension is the size of
the measure plus one. The first column contains the time values, while the
subsequent columns contain the corresponding measure values.

Example:

    jointRotation = J1.GetRotation()
    jointVelocity = J1.GetVelocity()
    jointAcceleration = J1.GetAcceleration()
    jointForce = J1.GetForce()
    
    jointRotationValues =jointRotation.FillValuesThroughTime()
    jointVelocityValues =jointVelocity.FillValuesThroughTime()
    jointAccelerationValues =jointAcceleration.FillValuesThroughTime()
    jointForceValues =jointForce.FillValuesThroughTime()
    
    nbValues = jointRotationValues.GetLength(0)
    
    print jointRotation.Id
    
    print '  Time     Rotation Velocity Acceleration'
    for i in range(0,nbValues):
        print jointRotationValues[i,0],jointRotationValues[i,1],jointVelocityValues[i,1],jointAccelerationValues[i,1]
    
    fich.close()

`FillDerivativesThroughTime()`

Returns a two dimensional array. This function is to be called after the
solution has been performed. The first dimension of the returned array is the
number of time values in the transient. The second dimension is the size of
the measure plus one: the first column contains the time values, while the
subsequent columns contain the corresponding measure derivatives. These
derivatives are available on measures that are time integrated. To know if a
measure is time integrated, use the `CalculationMethod` member.

### Derived classes

`CS_JointVelocityMeasure`

Both translational and rotational joint velocities are expressed in the joint
reference coordinate system. The number of components is the number of
translational degrees of freedom plus the number of rotational degrees of
freedom. For example, the size of the joint velocity measure for a revolute
joint is 1. It contains the relative joint rotation velocity along the z axis
of the joint reference coordinate system. The size of the measure for a slot
joint is 4: one component for the relative translational velocity, and the 3
components of the relative rotational velocity. The joint velocity measure can
be obtained from the joint using the `GetVelocity` function. Rotational
velocities are expressed in radians/second.

`CS_JointAccelerationMeasure`

Both translational and rotational joint accelerations are expressed in the
joint reference coordinate system. The number of components is the number of
translational degrees of freedom plus the number of rotational degrees of
freedom. The joint acceleration measure can be obtained from the joint using
the `GetAcceleration` function.

`CS_JointRotationMeasure`

* For revolute joints, cylindrical joints, or single rotation general joints, this measure has only one component: the relative angle between the reference and the moving coordinate system of the joint. Rotations are expressed in radians.

* For slots, spherical joints, bushing joints, and 3 rotation vectors, this measure contains values that are not directly usable.

* For universal joints, this measure contains the two joint axis rotational velocities. (The first one along the X axis of the reference coordinate system and the second along the Z axis of the moving coordinate system.) These angles are expressed in radians.

`CS_JointTranslationMeasure`

This measure contains only the joint relative translations, expressed in the
joint reference coordinate system. The joint translation measure can be
obtained from the joint using the `GetTranslation`function.

`CS_JointForceMeasure`

This measure contains the total forces and moment that develop in the joint.
This includes constraint forces, elastic forces, and external forces. The
joint velocity measure can be obtained from the joint using the
`GetForce`function.

`CS_PositionMeasure`

This measure allows for tracking of the position of a Body Coordinate System
over time.

Example:

    CoMBCS = OneBody.InertiaBodyCoordinateSystem
    Pos = CS_PositionMeasure(CoMBCS)
    Env=CS_Environment.FindFirstNonNull()
    Sys = Env.System
    Sys.AddMeasure(Pos)

`CS_ComponentMeasure`

This measure allows the extraction of one component of an existing measure.
This component can be expressed in a non default coordinate system. A
component of -2 will compute the norm 2 of the vector of values of the
measure.

Example:

    Planar = CS_Joint.Find(_jid)
    Vel = Planar.GetVelocity()
    Xglobaldirection = 0
    VelX = CS_ComponentMeasure(Vel,Xglobaldirection)
    Sys.AddMeasure(VelX)

`CS_AXPYMeasure`

This measure allows a linear transformation from another measure with a
scaling factor and an offset. This can be useful to transform an internal
rotation measure that is expressed in radians to a measure in degrees used as
an input to a load calculation, for example.

Example:

    Revolute = CS_Joint.Find(_jid)
    Rot = Revolute.GetRotation()
    RotInDegrees = CS_AXPYMeasure( Rot, 180.0/math.pi, 0. )
    Sys.AddMeasure(RotInDegrees)

`CS_ModulusMeasure`

This measure allows you to compute the floating point remainder of
value/modulus.

Example:

    Revolute = CS_Joint.Find(_jid)
    Rot = Revolute.GetRotation()
    Rot02pi = CS_ModulusMeasure( Rot, 2.0*math.pi )
    Sys.AddMeasure(Rot02pi)

`CS_OutputContactForceMeasure`

This measure contains four 3D vectors:

* Values 0 to 2 are the total contact force components between the two bodies, including the normal and tangential contributions.

* Values 3 to 5 are the coordinates of the point where the interaction between the two bodies is reduced to a force; in other words, the total torque is zero.

* Values 6 to 8 are the frictional force between the two bodies.

* Values 9 to 11 are frictional moment components at the reduction point.

`CS_AngularMomentumMeasure`

This measure computes the Angular Momentum of a list of bodies. Its value is a
3D vector.

Example:

    FlyWheel= CS_Body.Find(_bid)
    FlyWheelAngularMomentumMeasure = CS_AngularMomentumMeasure()
    FlyWheelAngularMomentumMeasure.AddBody(FlyWheel)
    Sys.AddMeasure(FlyWheelAngularMomentumMeasure)
