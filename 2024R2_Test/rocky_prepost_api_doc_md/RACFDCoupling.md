# RACFDCoupling

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RACFDCoupling

Rocky API wrapper to configure the CFD coupling mode in a project.

This wrapper can be accessed directly via the project’s [`RAStudy`](RAStudy.md#generated.RAStudy):

```python
cfd_coupling = study.GetCFDCoupling()
cfd_coupling.SetupFluentTwoWay('fluent.cas')
two_way_process = cfd_coupling.GetCouplingProcess()
```

**Methods:**

| [`GetAirFlow`](#generated.RACFDCoupling.GetAirFlow)()                                                       | Deprecated: Use GetOneWayLBM instead.                      |
|-------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`GetCouplingMode`](#generated.RACFDCoupling.GetCouplingMode)()                                             | * **rtype:**<br/>  unicode                                 |
| [`GetCouplingProcess`](#generated.RACFDCoupling.GetCouplingProcess)()                                       | * **return:**                                              |
| [`GetOneWayLBM`](#generated.RACFDCoupling.GetOneWayLBM)()                                                   | Get the API wrapper for 1-Way LBM properties.              |
| [`SetupAirFlow`](#generated.RACFDCoupling.SetupAirFlow)()                                                   | Deprecated: Use SetupOneWayLBM instead.                    |
| [`SetupCFDConstantOneWayCouplingProcess`](#generated.RACFDCoupling.SetupCFDConstantOneWayCouplingProcess)() | Deprecated: Use SetupOneWayConstant instead.               |
| [`SetupConstantOneWay`](#generated.RACFDCoupling.SetupConstantOneWay)()                                     | Deprecated: Use SetupOneWayConstant instead.               |
| [`SetupFluentOneWaySteadyState`](#generated.RACFDCoupling.SetupFluentOneWaySteadyState)(f2r_filename)       | Deprecated: Use SetupOneWayFluent instead.                 |
| [`SetupFluentTwoWay`](#generated.RACFDCoupling.SetupFluentTwoWay)(cas_filename)                             | Deprecated: Use SetupTwoWayFluent instead.                 |
| [`SetupFluentTwoWaySemiResolved`](#generated.RACFDCoupling.SetupFluentTwoWaySemiResolved)(cas_filename)     | Configure the project to use Fluent Two-Way Semi Resolved. |
| [`SetupNoCoupling`](#generated.RACFDCoupling.SetupNoCoupling)()                                             | Configure the project to use no CFD coupling.              |
| [`SetupOneWayConstant`](#generated.RACFDCoupling.SetupOneWayConstant)()                                     | Configure the project to use 1-Way Constant.               |
| [`SetupOneWayFluent`](#generated.RACFDCoupling.SetupOneWayFluent)(f2r_filename)                             | Configure the project to use 1-Way Fluent.                 |
| [`SetupOneWayFluentSteadyState`](#generated.RACFDCoupling.SetupOneWayFluentSteadyState)(f2r_filename)       | Deprecated: Use SetupOneWayFluent instead.                 |
| [`SetupOneWayLBM`](#generated.RACFDCoupling.SetupOneWayLBM)()                                               | Configure the project to use 1-Way LBM.                    |
| [`SetupTwoWayFluent`](#generated.RACFDCoupling.SetupTwoWayFluent)(cas_filename)                             | Configure the project to use 2-Way Fluent.                 |

#### GetAirFlow()

Deprecated: Use GetOneWayLBM instead.

#### GetCouplingMode()

* **Return type:**
  unicode
* **Returns:**
  The current coupling mode

#### GetCouplingProcess()

* **Returns:**
  The configured coupling process

#### GetOneWayLBM()

Get the API wrapper for 1-Way LBM properties.

Returns None if the current CFD coupling mode isn’t Air Flow.

* **Return type:**
  [RAAirFlow](RAAirFlow.md#generated.RAAirFlow)

#### SetupAirFlow()

Deprecated: Use SetupOneWayLBM instead.

#### SetupCFDConstantOneWayCouplingProcess()

Deprecated: Use SetupOneWayConstant instead.

#### SetupConstantOneWay()

Deprecated: Use SetupOneWayConstant instead.

#### SetupFluentOneWaySteadyState(f2r_filename)

Deprecated: Use SetupOneWayFluent instead.

#### SetupFluentTwoWay(cas_filename)

Deprecated: Use SetupTwoWayFluent instead.

#### SetupFluentTwoWaySemiResolved(cas_filename: str)

Configure the project to use Fluent Two-Way Semi Resolved.

* **Parameters:**
  **cas_filename** – The filename describing the Fluent simulation

#### SetupNoCoupling()

Configure the project to use no CFD coupling.

#### SetupOneWayConstant()

Configure the project to use 1-Way Constant.

#### SetupOneWayFluent(f2r_filename)

Configure the project to use 1-Way Fluent.

* **Parameters:**
  **f2r_filename** – str
  The exported file name describing the Fluent simulation

#### SetupOneWayFluentSteadyState(f2r_filename)

Deprecated: Use SetupOneWayFluent instead.

#### SetupOneWayLBM()

Configure the project to use 1-Way LBM.

#### SetupTwoWayFluent(cas_filename)

Configure the project to use 2-Way Fluent.

* **Parameters:**
  **cas_filename** – str
  The Fluent file name describing the Fluent simulation
