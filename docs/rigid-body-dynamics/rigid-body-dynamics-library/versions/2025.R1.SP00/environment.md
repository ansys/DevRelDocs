# Environment

This is the top level of the Rigid Dynamics model.

ID table: `CS_Environment`

### Members

`System`

Corresponding system.

Example:
    
    Env=CS_Environment.FindFirstNonNull()
    Sys = Env.System
    
`Ground`

Ground body.

Example:
    
    Env = CS_Environment.FindFirstNonNull()
    Ground = Env.Ground

`Loads`

The vector of existing loads. This includes Springs that are considered by the
solver as loads, as well as force and torque joint conditions.

Example:
    
    Xdof = 0
    Friction=CS_JointDOFLoad(PlanarJoint,Xdof)
    Env.Loads.Add(Friction)

`BodyLoads`

The vector of Body Loads.

Example:
    
    MyBodyLoad = CS_BodyLoad()
    …
    Env.BodyLoads.Add(MyBodyLoad)

`Relations`

The vector of external constraint equations.

Example:
    
    rel3=CS_Relation()
    rel3.MotionType=CS_Relation.E_MotionType.E_Velocity
    
    var30=CS_ConstantVariable()
    var30.SetConstantValues(System.Array[float]([0.]))
    
    var31=CS_ConstantVariable()
    var31.SetConstantValues(System.Array[float]([23.]))
    
    var32=CS_ConstantVariable()
    var32.SetConstantValues(System.Array[float]([37.]))
    
    var33=CS_ConstantVariable()
    var33.SetConstantValues(System.Array[float]([-60.+37.]))
    
    rel3.SetVariable(var30)
    rel3.AddTerm(jp,0,var31)
    rel3.AddTerm(js3,0,var32)
    rel3.AddTerm(jps,0,var33)
    
    Env.Relations.Add(rel3)
    
`Drivers`

The vector of Displacements, Velocity and Acceleration joint conditions.

`InitialConditions`

The vector of Displacements, Velocity, and Acceleration joint conditions to be
used only at time=`0`.

`PotentialEnergy`

Gets the Potential Energy Measure.

`KineticEnergy`

Gets the Kinetic Energy Measure.

`TotalEnergy`

Gets the Total Energy Measure.

`ActuatorEnergy`

Gets the Actuator Energy Measure.

`RestartTime`

Specifies the starting time in a restart analysis

### Member functions

`FindFirstNonNull()`:

Returns the first environment in the global list. The table usually contains
only one environment, thus it is a common way to access the current
environment.

Example:

    Env=CS_Environment.FindFirstNonNull()

`AlterSimulationEndTime(endTime)`

Overwrites the end time of the simulation.

`Solve()`

Solves the current analysis.

### Derived classes

None
