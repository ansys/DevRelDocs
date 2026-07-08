# SolverOptions

The SolverOptions object allows you to customize the behaviour of the RBD
solver. The option uses a group of numerical values (real or integer) that can
be get or set. When used as a switch, 0 means off and 1 is on.

Corresponding ID table: `CS_SolverOptions`

### Constants

None

### Member functions

`VelocityToleranceFactor`

Multiplicative factor used to determine zero velocity tolerance (=100.0 by
default);

`ContactRadiusFactor`

Contact radius factor used in contact failsafe mode (=2.0 by default);

`MaximumNumberOfCorrectionAttempts`

Number of external loops for geometric correction (=2 by default));

`FrictionForShock`

Enable friction for shock solve (=0, disabled by default);

`MaximumNumberOfDiagnostics`

Number of diagnostics messages given in Mechanical UI (=10 by default);

`InactiveTouchingInDynamics`

Prevent inactive contact pair from being violated (=1, enabled by default);

`DisablePolygonEvent`

Disable polygon event for contact (=0, active by default);

`PrintDynamicSystem`

Print the dynamics system (=0 by default);

`PurgeGST`

Purge GST file every n steps (=0, never by default);

`PrintErrorEstimation`

Force output of error estimation (=0, disabled by default);

`ExportXLSFileForCMS`

Export generalized coordinates for CMS bodies in a CSV file (=0, disabled by
default)

`HandlePOCTransitionsWithEnergyMinimization`

When point on curve joints are used, different solutions (depending on the
topology) may be found when crossing curve connections. Furthermore, these
solutions do not guarantee the conservation of the kinetic energy at the
transition. To remedy this issue, this option makes the transitions using a
method that minimizes the kinetic energy in a way similar to the assembly
process using the inertia matrix.
This solution works well for explicit time integration schemes, but it is not
guaranteed for implicit ones. (=0, disabled by default)

Example:

    sOpts=CS_SolverOptions()
    sOpts.ExportXLSFileForCMS=1
