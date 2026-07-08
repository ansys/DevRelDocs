# Body

A body corresponds to a Part in the geometry node of the Mechanical tree, or
can be created by a command snippet. The preset `_bid` variable can be used to
find a corresponding body.

ID table: `CS_Body`

Example:

    MyBody = CS_Body.Find(_bid)
    print MyBody.Name

### Constructors

`CS_Body()`

`CS_Body(Id)`

### Members

`Name`

Name of the body.

`Origin`

Origin Coordinate System of the body. This Coordinate System is the moving
coordinate system of one of the joints connected to the body. The choice of
this joint, called parent joint, is the result of an optimization that
minimizes the number of degrees of freedom of the system.

`InertiaBodyCoordinateSystem`

Inertia body coordinate system of the body.

`BodyType`

Type of body, values in `E_UnknownType`, `E_Ground`, `E_Rigid`, `E_CMS`,
`E_General`, `E_Fictitious`, `E_RigidLeaf`, `E_RigidSubModel`, `E_PointMass`,
`E_Beam`

### Member functions

`SetMassAndInertia(double mass, double Ixx, double Iyy, double Izz, double Ixy, double Iyz, double Ixz)`

Overwrites the mass and inertia values of a body.

`SetCenterOfMassAndOrientationAngles(double Xg, double Yg, double Zg, double
XYAngle, double YZAngle, double XZAngle) and
SetCenterOfMassAndOrientationMatrix(double Xg, double Yg, double Zg, double
mxx, double mxy, double mxz, double myx, double myy, double myz, double mzx,
double mzy, double mzz)`

Overwrites the position of the center of mass and the orientation of the
inertia coordinate system.

`SetVariableMassAndPrincipalInertia(CS_Variable mass, CS_Variable Ixx,
CS_Variable Iyy, CS_Variable Izz)`

Overwrites the constant mass and principal inertia properties by variable
properties. During the solution process, the mass and inertia variation rate
needs to be evaluated. Therefore, only Point Table, Polynomial and Function
can be used to define the variation. Python user tables cannot be used to
define kinetic properties variations. You can make some of the properties
(mass, Ixx, Iyy and Izz) constants by using constant variables.

**Note**
The principal axis needs to be defined when the principal inertia is being
assigned. If the body is created by a command,
`SetCenterOfMassAndOrientationAngles` or `SetCenterOfMassAndOrientationMatrix`
must be called before calling `SetVariableMassAndPrincipalInertia`.  
  
This function only applies to rigid bodies.

**Note**
All quantities used in the solver must use a consistent unit system, which
sometimes differs from the user interface unit system. For example if the user
interface unit system is "mm,kg,N,s", the solver unit system will be
"mm,t,N,s". When using `SetMassAndInertia` or
`SetVariableMassAndPrincipalInertia`, the values of mass and inertia have to
be entered using the solver unit system.  
  
### Derived classes

`CS_FlexibleBody`
