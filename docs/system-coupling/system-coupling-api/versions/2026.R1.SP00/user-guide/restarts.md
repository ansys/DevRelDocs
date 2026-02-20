# Creating restart points and restarting a coupled analysis

System Coupling supports creating restart points during the coupled analysis
and, subsequently, restarting the coupled analysis from any previously
created restart point.
See the System Coupling User's Guide for more information.

System Coupling participant library provides the APIs to create restart
points.

## Setup stage

During the setup stage, the participant should indicate whether
the restarts are supported.

When using the participant library to setup the participant,
the `restartsSupported` flag can be set in the Setup Info
structure. Once that structure is created, the setup can
be completed. See
[Completing the System Coupling participant setup](participant-setup.md)
for more details.

## Creating restart points

During the coupled analysis, if the participant solver supports restarts,
a callback function that can be called to create
the restart points should be registered. This function will be called during outputs update
if a restart point needs to be created.
The callback function should be implemented and registered prior
to the coupled analysis initialization.
The function is expected to return a string that identifies
that restart point. This string will in turn be provided to the
participant solver during a restart run.

### C++

```cpp
...
// sample implementation of the restart callback function
std::string createRestartPoint()
{
  std::string restartPoint;
  ... // solver-specific implementation, sets string value
  return restartPoint;
}
...
// System Coupling object
sysc::SystemCoupling sc(host, port, name);
...
// register restart point creation callback
sc.registerRestartPointCreation(&createRestartPoint);
...
```

### C

```c
char restartPoint[STRING_MAX_SIZE];
...
/* sample implementation of the restart callback function */
const char* createRestartPoint()
{
  /* solver-specific implementation, sets string value */
  ...
  return restartPoint;
}
...
/* register restart point creation callback */
syscRegisterRestartPointCreation(&createRestartPoint);
...
```

### Fortran

```fortran
...
! sample implementation of the restart callback function
function createRestartPoint() result(restartPoint)
  character(len=SyscFilePathLen) :: restartPoint
  ! solver-specific implementation, sets string value
  ...
end function createRestartPoint
...
! register restart point creation callback
syscRegisterRestartPointCreationF(createRestartPoint)
```

### Python

```python
from pyExt import SystemCouplingParticipant as sysc
...
def createRestartPoint():
    """ sample implementation of the restart callback function """
    restartPoint = str()
    # solver-specific implementation, sets string value
    ...
    return restartPoint
...
# System Coupling object
sysc.SystemCoupling sc(host, port, name);
...
# register restart point creation callback
sc.registerRestartPointCreation(createRestartPoint)
...
```

## Restarting the analysis from a restart point

When restarting the coupled analysis, System Coupling will provide
the string that was returned when the restart point was created.
This string will be passed into the participant solver via the
following command line argument:

```text
--screstart RESTART_STRING
```

The participant solver is expected to resume the analysis from its state
when the restart point was created.
The participant steps in a coupled analysis are the same as for
the initial run. See
[Participant steps in a coupled analysis](participant-steps-in-coupled-analysis.md)
for more details.
