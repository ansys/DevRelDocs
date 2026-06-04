# BodyCoordinateSystem

The body coordinate system is used to connect a body to joints, hold the
center of mass, or define a load. See
[Joint](joint.md) or
[Body](body.md) to access existing coordinate
systems. Coordinate systems can also be created.

ID table: `CS_BodyCoordinateSystem`

### Constructors

     CS_BodyCoordinateSystem(body, type, xyz, basis)

### Members

[Basis](basis.md)

### Member functions

`RotateArrayThroughTimeToLocal(MeasureValues)`

Rotates the transient values of a measure to a coordinate system.
`MeasureValues` is a python two-dimensional array, such as that coming out of
`FillValuesThroughTime` or `FillDerivativesThroughTime`. This function works
for 3D vectors such as relative translation between two coordinate systems or
6-D vectors such as forces/moments.

`RotateArrayThroughTimeToGlobal(MeasureValues)`

Rotates the transient values of a measure from a coordinate system to the
global coordinate system.

`Type`

Type of coordinate system, values in `E_Unknown`, `E_Ground`, `E_Part`,
`E_Joint`, `E_Inertia`, `E_BodyTransform`, `E_Contact`, `E_SplitJoint`.

### Derived classes

None

### Example

    forceInGlobal=joint.GetForce()
    
    valuesInGlobal=forceInGlobal.FillValuesThroughTime()
    
    for i in range(0,valuesInGlobal.GetLength(0)):
        print '{0:e} {1:e} {2:e} {3:e}'.format(valuesInGlobal[i,0],
    	valuesInGlobal[i,1],valuesInGlobal[i,2],valuesInGlobal[i,3])
    
    mobileCS=joint.MobileCoordinateSystem
    
    valuesInLocal=valuesInGlobal.Clone()
    
    mobileCS.RotateArrayThroughTimeToLocal(valuesInLocal)
    
    for i in range(0,valuesInGlobal.GetLength(0)):
        print '{0:e} {1:e} {2:e} {3:e}'.format(valuesInLocal[i,0],
        valuesInLocal[i,1],valuesInLocal[i,2],valuesInLocal[i,3])
