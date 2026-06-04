# System

Corresponding ID table: `CS_System`

### Members

`Bodies`

Gets the list of bodies.

`Joints`

Gets the list of joints.

### Member functions

`AddBody(body)`

Adds a body to the system.

`AddJoint(joint)`

Adds a joint to the system.

`PrintTopology()`

Prints the topology of the systems (parent/child relation).

`AddMeasure(measure)`

Adds a measure to the system, to be calculated during the simulation. This
function must be called prior to solving so that the measure values through
time can be retrieved.

`(istat,found,measure)=FindOrCreateInternalMeasure( MeasureType)`

Extracts an existing global measure on the system. Supported measure types
are: E_Energy, E_PotentialEnergy, E_ElasticEnergy, E_KineticEnergy, and
E_Time.

### Derived Cclasses

None
