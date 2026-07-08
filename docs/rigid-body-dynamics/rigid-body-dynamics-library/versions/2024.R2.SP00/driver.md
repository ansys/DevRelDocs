# Driver

A driver is a position, velocity or acceleration, or translational or
rotational joint condition. Drivers derive from the [Actuator](actuator.md) class.

Corresponding ID table: `CS_Actuator`

### Constants

`E_Acceleration`, `E_Position`, `E_Velocity`

### Members

None

### Member functions

`CS_Driver(CS_Joint joint, int[] components, E_MotionType driverMotionType)`

Creation of a joint driver, on joint `joint`, degree of freedom `components`,
and with motion type `driverMotionType`. Note that the same driver can
prescribe more than one joint motion at the same time. This is useful if you
want to add the same condition to all components of a prescribed motion for
example. Components must be ordered, are zero based, and refer to the actual
free degrees of freedom of the joint.
