# Spring

Corresponding ID table: `CS_Actuator`

### Members

None

### Member functions

`ToggleCompressionOnly()`

Calling this function on a translational spring will make the spring develop
elastic forces only if its length is less than the spring free length. The
free length must be defined in the regular spring properties.

`ToggleTensionOnly()`

Calling this function on a translational spring will make the spring develop
elastic forces only if its length is greater than the free length of spring.
The free length must be defined in the regular spring properties.

`SetLinearSpringProperties(system, stiffness, freeLength)`

Enables you to overwrite the stiffness and free length of a translational
spring. This can be useful to parameterize these properties. In the example
above, system is the system object, stiffness and freeLength are the double
precision values of stiffness and free length.

`SetNonLinearSpringProperties(table_id)`

Enables you to replace the constant stiffness of a spring with a table of ID
`table_id` that gives the force as a function of the elongation of the spring.
The table gives the relation between the force and the relative position of
the two ends.

`GetDamper()`

The user interface sets stiffness and damping properties for the spring.
Internally, the Spring is made of two objects; a spring and a damper. This
function enables you to access the internal damper using the Spring object in
the GUI.

### Derived classes

None
