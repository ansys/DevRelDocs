

# RACFDCoupling

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RACFDCoupling"></a>

### *class* RACFDCoupling

Rocky PrePost Scripting wrapper to configure the CFD coupling mode in a project.

This wrapper can be accessed directly via the project’s [`RAStudy`](RAStudy.md#generated.RAStudy):

```python
cfd_coupling = study.GetCFDCoupling()
cfd_coupling.SetupFluentTwoWay('fluent.cas')
two_way_process = cfd_coupling.GetCouplingProcess()
```

**Methods:**

| Name | Description |
|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`GetCouplingMode`](#generated.RACFDCoupling.GetCouplingMode)()                                         |                                                             |
| [`GetCouplingProcess`](#generated.RACFDCoupling.GetCouplingProcess)()                                   |                                                             |
| [`GetOneWayLBM`](#generated.RACFDCoupling.GetOneWayLBM)()                                               | Get the PrePost Scripting wrapper for 1-Way LBM properties. |
| [`SetupFluentTwoWaySemiResolved`](#generated.RACFDCoupling.SetupFluentTwoWaySemiResolved)(cas_filename) | Configure the project to use Fluent Two-Way Semi Resolved.  |
| [`SetupNoCoupling`](#generated.RACFDCoupling.SetupNoCoupling)()                                         | Configure the project to use no CFD coupling.               |
| [`SetupOneWayConstant`](#generated.RACFDCoupling.SetupOneWayConstant)()                                 | Configure the project to use 1-Way Constant.                |
| [`SetupOneWayFluent`](#generated.RACFDCoupling.SetupOneWayFluent)(f2r_filename)                         | Configure the project to use 1-Way Fluent.                  |
| [`SetupOneWayLBM`](#generated.RACFDCoupling.SetupOneWayLBM)()                                           | Configure the project to use 1-Way LBM.                     |
| [`SetupTwoWayFluent`](#generated.RACFDCoupling.SetupTwoWayFluent)(cas_filename)                         | Configure the project to use 2-Way Fluent.                  |

<a id="generated.RACFDCoupling.GetCouplingMode"></a>

#### GetCouplingMode()

* **Return type:**
  unicode
* **Returns:**
  The current coupling mode

<a id="generated.RACFDCoupling.GetCouplingProcess"></a>

#### GetCouplingProcess()

* **Returns:**
  The configured coupling process

<a id="generated.RACFDCoupling.GetOneWayLBM"></a>

#### GetOneWayLBM()

Get the PrePost Scripting wrapper for 1-Way LBM properties.

Returns None if the current CFD coupling mode isn’t Air Flow.

* **Return type:**
  [RAAirFlow](RAAirFlow.md#generated.RAAirFlow)

<a id="generated.RACFDCoupling.SetupFluentTwoWaySemiResolved"></a>

#### SetupFluentTwoWaySemiResolved(cas_filename: str)

Configure the project to use Fluent Two-Way Semi Resolved.

* **Parameters:**
  **cas_filename** – The filename describing the Fluent simulation

<a id="generated.RACFDCoupling.SetupNoCoupling"></a>

#### SetupNoCoupling()

Configure the project to use no CFD coupling.

<a id="generated.RACFDCoupling.SetupOneWayConstant"></a>

#### SetupOneWayConstant()

Configure the project to use 1-Way Constant.

<a id="generated.RACFDCoupling.SetupOneWayFluent"></a>

#### SetupOneWayFluent(f2r_filename: str)

Configure the project to use 1-Way Fluent.

* **Parameters:**
  **f2r_filename** – str
  The exported file name describing the Fluent simulation

<a id="generated.RACFDCoupling.SetupOneWayLBM"></a>

#### SetupOneWayLBM()

Configure the project to use 1-Way LBM.

<a id="generated.RACFDCoupling.SetupTwoWayFluent"></a>

#### SetupTwoWayFluent(cas_filename: str)

Configure the project to use 2-Way Fluent.

* **Parameters:**
  **cas_filename** – str
  The Fluent file name describing the Fluent simulation
