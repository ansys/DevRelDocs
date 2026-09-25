# PyFluent learning roadmap

PyFluent is the open-source Python interface to Ansys Fluent, the computational fluid dynamics (CFD) software. This roadmap measures capability rather than page visits. Each milestone produces a demonstrable skill, an observable result, or a reusable artifact. PyFluent is compatible with the full set of Fluent versions officially supported at its release date, and Fluent versions before 2024 R2 are supported only by PyFluent 0.37 and earlier.

## Your learning journey

**1. Get it working**  
PyFluent is installed and a first Fluent session is obtained with a factory method and verified.

**2. Understand the control model**  
Meshing and solver sessions are distinguished, and settings are read and written through the object tree.

**3. Modify an existing workflow**  
A working official example is run unchanged and then adapted to a new requirement.

**4. Run and assess a meaningful operation**  
A case is read, initialized, solved, and a result quantity is extracted and checked.

**5. Build reusable automation**  
A parameterized, session-passing function is produced that captures a full case run.

**6. Apply it to a personal use case**  
The automation is retargeted to a learner-supplied case or mesh and requirement.

**7. Use AI-assisted capabilities**  
A tool built on PyFluent is used to drive Fluent from an AI assistant, with every generated action validated.

**8. Choose an advanced pathway**  
An advanced specialization is selected, such as containerized launch, parallel execution, or field-data post-processing.

---

## Prerequisites

> **Outcome:** The environment required by every later stage is confirmed present.

A licensed local installation of Ansys Fluent is required to benefit fully from PyFluent, and the installed version determines the available features. Python 3.10 through Python 3.14 is required on Windows, Linux, or macOS, and a virtual environment is recommended. PyFluent locates the Ansys installation through an environment variable, such as `AWP_ROOT252`. On Windows the Ansys installer sets this variable, and on Linux it is exported manually, for example `export AWP_ROOT252=/usr/ansys_inc/v252`.

---

## 1. Get PyFluent working

> **Outcome:** PyFluent is installed and a Fluent session is obtained with a factory method and confirmed from Python.

### □ Install PyFluent into a virtual environment

**Activity**

The `ansys-fluent-core` package is installed from PyPI into a virtual environment so that it does not conflict with other packages.

**Example**

```bash
python -m venv .venv
# Windows: .venv\Scripts\activate    Linux/macOS: source .venv/bin/activate
python -m pip install ansys-fluent-core
```

**Complete when**

The command completes without error and `pip show ansys-fluent-core` reports an installed version in the active virtual environment.

**Keep**

A record of the created virtual environment and the installed package version.

[PyFluent installation](https://fluent.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Confirm that Fluent is discoverable

**Activity**

The Ansys installation is made discoverable to PyFluent by confirming the Ansys root environment variable so that a session can be launched. The variable name encodes the release, for example `AWP_ROOT252` for Ansys 2025 R2.

**Example**

On Linux, the variable is exported for the current shell session:

```bash
export AWP_ROOT252=/usr/ansys_inc/v252
```

On Windows, the Ansys installer sets the variable, so its presence is confirmed rather than set.

**Complete when**

The Ansys root environment variable for the installed release is present in the shell that runs Python.

**Keep**

A note of the release and the environment variable used.

[Fluent installation and location](https://fluent.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Obtain a solver session with a factory method

**Activity**

A solver session is obtained with the recommended `from_install()` factory method so that Fluent is launched from the local installation. The factory methods on a session type are the recommended entry points for new code.

**Example**

```python
import ansys.fluent.core as pyfluent

solver_session = pyfluent.Solver.from_install()
print(solver_session)   # Confirms a live solver session
solver_session.exit()   # Ends the PyFluent session and the Fluent process
```

**Complete when**

The session object is created without error, printing it confirms a live session, and `exit()` cleanly ends it.

**Keep**

The script and the captured session confirmation.

[Launching and connecting to Fluent](https://fluent.docs.pyansys.com/version/stable/user_guide/session/launching_ansys_fluent.html)

**Stage outcome:** PyFluent is installed and a verified solver session can be obtained with a factory method.

---

## 2. Understand the control model

> **Outcome:** Meshing and solver sessions are distinguished, and settings are read and written through the object tree.

### □ Obtain a meshing session and a solver session

**Activity**

A meshing session and a solver session are obtained with factory methods so that the two session types are distinguished. Meshing prepares the mesh and the solver runs the calculation. A pure meshing session is available for minimal server images.

**Example**

```python
import ansys.fluent.core as pyfluent

meshing_session = pyfluent.Meshing.from_install()
solver_session = pyfluent.Solver.from_install()

# A meshing session can be switched to a solver session on the same Fluent instance
switched_solver = meshing_session.switch_to_solver()
```

**Complete when**

Both session types are created and a short note records that meshing prepares the mesh while the solver runs the calculation, and that `switch_to_solver()` reuses the same Fluent instance.

**Keep**

The note and the script that creates each session type.

[Using PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)

### □ Read and write a setting through the object tree with an enum value

**Activity**

A solver setting is read and written through the settings object tree so that the object-model control style is understood. An intermediate settings object is bound once and reused rather than repeating a long attribute chain, and allowed values are queried before writing.

**Example**

```python
import ansys.fluent.core as pyfluent

setup = pyfluent.solver.Setup(settings_source=solver_session)
solver_time = setup.general.solver.time      # Bind the settings object once
print(solver_time.get_state())               # 'steady'
print(solver_time.allowed_values())          # ['steady', 'unsteady-1st-order']
solver_time.set_state("unsteady-1st-order")  # Write a value from the allowed set
```

**Complete when**

A setting is read with `get_state()`, its permitted values are listed with `allowed_values()`, and a new value from that set is written and confirmed.

**Keep**

The script and the before-and-after states.

[Applying solution settings](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/solution.html)

### □ Use an active session with the context manager

**Activity**

The `using(session)` context manager is used so that top-level settings objects are called without passing the session on every call. The viscous model is set through its settings object, illustrating the enum-style API. Settings trees are inactive outside an active session, so the work is done inside the `with` block.

**Example**

```python
from ansys.fluent.core import using
from ansys.fluent.core.solver import ReadCase, Viscous

with using(solver_session):
    ReadCase()(file_name=case_file)      # Read a case with the dedicated object
    print(Viscous().model())             # Read the viscous model
    Viscous().model.set_state("laminar") # Set the viscous model
    print(Viscous().model())             # laminar
```

**Complete when**

A case is read and the viscous model is read and set inside a single `with using(solver_session)` block, and the changed value is printed.

**Keep**

The script and the printed model states.

[Using PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)

**Stage outcome:** Meshing and solver sessions are distinguished, and settings are read and written through the object tree.

---

## 3. Modify an existing workflow

> **Outcome:** An official example is run unchanged and then adapted to a new requirement.

### □ Run one official example unchanged and capture its output

**Activity**

One official example is run without modification so that a known-good baseline is established before any change is made. An example that uses settings objects is preferred, such as the mixing elbow or exhaust system settings-API examples.

**Example**

The example is selected from the official gallery and run in the verified environment. The mixing elbow settings-API example and the fault-tolerant exhaust system settings-API example are suitable starting points.

**Complete when**

The chosen example runs to completion in the verified environment and its documented output or a final result value is captured.

**Keep**

The unmodified example and the captured baseline output.

[PyFluent examples gallery](https://fluent.docs.pyansys.com/version/stable/examples/index.html)

### □ Change one setting in the example and observe the effect

**Activity**

A single setting in the working example is changed through the settings object tree, such as the turbulence model or a solver control, and its permitted values are checked before writing. Only one change is made so that its effect is isolated.

**Example**

```python
import ansys.fluent.core as pyfluent

methods = pyfluent.solver.Methods(settings_source=solver_session)
flow_scheme = methods.p_v_coupling.flow_scheme   # Bind once
print(flow_scheme.allowed_values())              # ['SIMPLE', 'SIMPLEC', 'PISO', 'Coupled']
flow_scheme.set_state("Coupled")                 # Single changed setting
```

**Complete when**

The modified example runs and the captured output differs from the baseline in a way that matches the single change made.

**Keep**

The modified example, a note of the one change, and the before-and-after output.

[Applying solution settings](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/solution.html)

### □ Locate the API behind one line of the example

**Activity**

One line of the example is traced to its settings path so that its required inputs are understood rather than copied. The Python `help()` function and `allowed_values()` are used to confirm the object and its permitted inputs.

**Example**

```python
# Inspect the dedicated read_case method used by the example
help(solver_session.settings.file.read_case)
```

**Complete when**

The settings object used by the selected line is identified and its required inputs are recorded from `help()` or `allowed_values()`.

**Keep**

A short note mapping the chosen line to its settings object and inputs.

[Using PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)

**Stage outcome:** An official example can be run, changed with intent, and traced back to its underlying settings API.

---

## 4. Run and assess a meaningful operation

> **Outcome:** A case is read, initialized, solved, and a result quantity is extracted and checked.

### □ Read a case and initialize the solution

**Activity**

A case file is read with the dedicated `file.read_case` method and the solution is initialized so that the model is ready to solve. The case file path is parameterized rather than hard-coded.

**Example**

```python
import ansys.fluent.core as pyfluent
from ansys.fluent.core.examples import download_file

case_file_name = download_file("mixing_elbow.cas.h5", "pyfluent/mixing_elbow")
solver_session = pyfluent.Solver.from_install()
solver_session.settings.file.read_case(file_name=case_file_name)
solver_session.settings.solution.initialization.hybrid_initialize()
```

**Complete when**

The case reads without error and hybrid initialization completes.

**Keep**

The setup script and a confirmation that initialization completed.

[Using PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)

### □ Run the calculation

**Activity**

The solver is run for a bounded number of iterations so that a converging solution is produced. The iteration count is parameterized.

**Example**

```python
solution = solver_session.settings.solution
solution.run_calculation.iterate(iter_count=100)
```

**Complete when**

The requested iterations complete without error and residual output is produced.

**Keep**

The iteration log or a note of the residual behavior.

[Applying solution settings](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/solution.html)

### □ Extract and record a result quantity

**Activity**

A field or reduction quantity is extracted from the solved case and recorded so that an engineering result is verified rather than assumed. Scalar field data is requested with a `VariableCatalog` descriptor rather than a raw field-name string.

**Example**

```python
from ansys.fluent.core import ScalarFieldDataRequest
from ansys.fluent.core.solver import VelocityInlet
from ansys.units import VariableCatalog

field_data = solver_session.fields.field_data
pressure_request = ScalarFieldDataRequest(
    field_name=VariableCatalog.ABSOLUTE_PRESSURE,
    surfaces=[VelocityInlet(settings_source=solver_session, name="inlet")],
)
pressure_data = field_data.get_field_data(pressure_request)
print(pressure_data["inlet"].shape)   # For example (389,)
```

**Complete when**

At least one result quantity is extracted from the solved case and recorded with its shape or value.

**Keep**

The recorded result and a short note on whether it matches expectation.

[Field data](https://fluent.docs.pyansys.com/version/stable/user_guide/fields/field_data.html)

**Stage outcome:** A case can be read, initialized, solved, and assessed from Python.

---

## 5. Build reusable automation

> **Outcome:** A parameterized, session-passing function is produced that captures a full case run.

### □ Wrap the case run in a function that takes the session as a parameter

**Activity**

The read, initialize, and solve steps are collected into a function that receives the session and other inputs as explicit parameters. The function does not rely on a captured global session, and file paths and iteration counts are parameterized.

**Example**

```python
import ansys.fluent.core as pyfluent


def run_case(solver_session, case_file_name: str, iter_count: int = 100):
    """Read a case, initialize, and iterate on the supplied solver session."""
    solver_session.settings.file.read_case(file_name=case_file_name)
    solver_session.settings.solution.initialization.hybrid_initialize()
    solver_session.settings.solution.run_calculation.iterate(iter_count=iter_count)
    return solver_session


solver_session = pyfluent.Solver.from_install()
run_case(solver_session, case_file_name="mixing_elbow.cas.h5", iter_count=50)
```

**Complete when**

The function runs with supplied arguments and completes the iterations, with the session passed in as a parameter rather than captured from the module scope.

**Keep**

The reusable function and an example call with its output.

[Using PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)

### □ Scope sessions cleanly with the active-session context manager

**Activity**

The automation is made robust for multiple sessions by scoping each session with `using(session)` so that top-level settings objects act on the intended session. Each session is made active only within its own `with` block.

**Example**

```python
import ansys.fluent.core as pyfluent
from ansys.fluent.core import using
from ansys.fluent.core.examples import download_file
from ansys.fluent.core.solver import ReadCase, Viscous

solver_session_1 = pyfluent.Solver.from_install()
solver_session_2 = pyfluent.Solver.from_install()
case_file = download_file("mixing_elbow.cas.h5", "pyfluent/mixing_elbow")

with using(solver_session_1):
    ReadCase()(file_name=case_file)
    Viscous().model.set_state("laminar")

with using(solver_session_2):
    ReadCase()(file_name=case_file)
    Viscous().model.set_state("k-omega")
```

**Complete when**

Two sessions are configured independently, each inside its own `with using(...)` block, and the distinct settings are confirmed.

**Keep**

The script and the confirmed per-session settings.

[Using PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)

### □ End sessions deterministically

**Activity**

Sessions are ended explicitly with `exit()` so that Fluent processes are released deterministically rather than relying on garbage collection. This keeps reruns clean.

**Example**

```python
solver_session_1.exit()
solver_session_2.exit()
```

**Complete when**

The automation ends each session it launched, and no orphaned Fluent process remains after the script completes.

**Keep**

The final automation script with explicit session teardown.

[Ending PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)

**Stage outcome:** A parameterized, session-passing, cleanly scoped automation script is available.

---

## 6. Apply it to a personal use case

> **Outcome:** The automation is retargeted to a learner-supplied case or mesh and requirement.

### □ Define a personal analysis goal and inputs

**Activity**

A personal analysis goal is written down with its case or mesh file, models, boundary conditions, and the result quantity of interest. This turns the automation into a concrete CFD task.

**Example**

Example required from the content owner, because the case or mesh and requirement are supplied by the learner. The goal statement lists the input file, the turbulence model, the boundary conditions, and the target result.

**Complete when**

A written goal states the input file, models, boundary conditions, and the result quantity to be reported.

**Keep**

The goal statement and the input file reference.

[Using PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)

### □ Retarget the automation to the personal case

**Activity**

The `run_case` function from stage 5 is called with the personal inputs so that the automation runs against the learner's case. Only the parameter values change, not the automation structure.

**Example**

Example required from the content owner, because the case file and parameter values are learner-specific. The stage 5 function is called with the personal case file name and iteration count.

**Complete when**

The automation runs against the personal case and produces the target result quantity.

**Keep**

The parameter set used and the produced result.

[PyFluent examples gallery](https://fluent.docs.pyansys.com/version/stable/examples/index.html)

### □ Validate the personal result against expectation

**Activity**

The personal result is checked against a hand calculation, a known reference, or engineering judgement so that the automation is trusted. Any discrepancy is investigated and recorded.

**Example**

Example required from the content owner, because the reference value depends on the learner's case and boundary conditions.

**Complete when**

The personal result is compared against a reference and the comparison and any corrections are recorded.

**Keep**

The validation note comparing the computed result with the reference.

[Field data](https://fluent.docs.pyansys.com/version/stable/user_guide/fields/field_data.html)

**Stage outcome:** The automation is trusted for a real, learner-supplied CFD task.

---

## 7. Use AI-assisted capabilities

> **Outcome:** A tool built on PyFluent is used to drive Fluent from an AI assistant, with every generated action validated before it is trusted.

Tools built on PyFluent enable AI assistants to drive Fluent. PyFluent-MCP is one such tool, a Model Context Protocol (MCP) server built on top of PyFluent that exposes PyFluent capabilities as standardized, deterministic tools. The dependency runs from the tool to PyFluent, and PyFluent does not depend on it. In this stage the AI assistant suggests tool calls, and the tool executes and verifies the underlying PyFluent operations. These two roles are kept separate throughout.

For installation, client configuration, and the full tool reference, see the authoritative documentation:

- [PyFluent-MCP documentation](https://fluent-mcp.docs.pyansys.com/)

### □ Set up a tool built on PyFluent and discover its offline tools

**Activity**

A tool built on PyFluent is set up so that an MCP-compatible client can reach it, and its offline-capable tools are exercised first. PyFluent-MCP requires the local PyFluent backend for live sessions and offers offline discovery without a solver.

**Example**

Installation and startup follow the authoritative documentation. Offline discovery is exercised through the assistant, for example asking it to run `find_api("turbulence model")` and `get_help` on a returned path, which search the bundled settings schema without a live session.

**Complete when**

The server starts, an MCP-compatible client lists the tools, and an offline discovery call such as `find_api` returns ranked settings paths without a live Fluent session.

**Keep**

The client configuration and a record of the discovered paths.

[PyFluent-MCP documentation](https://fluent-mcp.docs.pyansys.com/)

### □ Connect to Fluent and inspect the live setup through the assistant

**Activity**

A Fluent session is established through the assistant so that live-session tools become available, and the setup is inspected. Session status is checked before mutating operations.

**Example**

The assistant is asked to `connect` and launch a new solver session, then to load a case and call `summarize_setup` for a compact digest of models, boundary conditions, and materials. `session_status` and `solver_status` confirm the connection and iteration state.

**Complete when**

A session is established, a case is loaded, and `summarize_setup` returns a digest of the current setup.

**Keep**

A record of the connection method and the setup digest.

[PyFluent-MCP documentation](https://fluent-mcp.docs.pyansys.com/)

### □ Apply a change with the discover, validate, execute, verify loop

**Activity**

A single bounded setting change is applied through the assistant using the documented loop so that every generated snippet is validated before it mutates the solver. Generated code is validated in the AST sandbox before execution, and the result is verified independently.

**Example**

The loop is followed for one change, for example an under-relaxation update:

1. **Discover:** `find_api("under-relaxation pressure")` and `get_state("solution.controls")`.
2. **Validate:** `validate_code(python_snippet)` performs an AST and signature pre-check.
3. **Execute:** `run_code(python_snippet)` applies the change to the live solver.
4. **Verify:** `summarize_setup()` or `get_state()` confirms the result.

**Complete when**

The change is discovered, validated, executed, and verified, and every generated snippet passed `validate_code` before `run_code`, with any corrections recorded.

**Keep**

The original request, the generated snippet, the validation result, and the verified state.

[PyFluent-MCP documentation](https://fluent-mcp.docs.pyansys.com/)

**Human verification is required.** Generated code, tool arguments, engineering assumptions, and numerical results are verified by the learner. `validate_code` is run before `run_code`, and `summarize_setup` or `get_state` confirms the outcome before any result is trusted. Tool-suggested actions are treated as drafts, and verified PyFluent execution is treated as the source of truth. Because `run_code` mutates the live solver, untrusted code is always validated first.

**Stage outcome:** An AI assistant can drive a bounded Fluent change through a tool built on PyFluent, with the learner validating every generated action.

---

## 8. Choose an advanced pathway

> **Outcome:** An advanced specialization is selected and its first capability is demonstrated.

### □ Optional pathway: launch Fluent in a container

**Activity**

Fluent is launched in a container with the `from_container()` factory method so that runs are isolated and reproducible. Port mappings are parameterized, and Docker Compose or Podman Compose is selected explicitly.

**Example**

```python
import ansys.fluent.core as pyfluent
from ansys.fluent.core.utils.networking import get_free_port

port_1 = get_free_port()
port_2 = get_free_port()
container_dict = {"ports": {f"{port_1}": port_1, f"{port_2}": port_2}}

solver = pyfluent.Solver.from_container(
    container_dict=container_dict,
    product_version=pyfluent.FluentVersion.v252,
    use_docker_compose=True,
)
```

**Complete when**

A containerized solver session launches and a case reads or a setting is queried without error.

**Keep**

The container launch script and the run confirmation.

[Launch in a container](https://fluent.docs.pyansys.com/version/stable/user_guide/session/launching_ansys_fluent.html)

### □ Optional pathway: extract vector field data for post-processing

**Activity**

Vector field data is extracted with a `VariableCatalog` descriptor so that results are analyzed programmatically. The descriptor form is used rather than a raw field-name string.

**Example**

```python
from ansys.fluent.core import VectorFieldDataRequest
from ansys.fluent.core.solver import VelocityInlets
from ansys.units import VariableCatalog

field_data = solver_session.fields.field_data
velocity_request = VectorFieldDataRequest(
    field_name=VariableCatalog.VELOCITY,
    surfaces=VelocityInlets(settings_source=solver_session),
)
velocity_vector_data = field_data.get_field_data(velocity_request)
print(velocity_vector_data["inlet"].shape)   # For example (262, 3)
```

**Complete when**

Vector field data is retrieved as a NumPy array and its shape is confirmed.

**Keep**

The extraction script and the returned array shape.

[Field data](https://fluent.docs.pyansys.com/version/stable/user_guide/fields/field_data.html)

### □ Optional pathway: run in parallel or under a job scheduler

**Activity**

A run is scaled with parallel processing or submitted to a job scheduler so that larger cases run efficiently. The processor count is parameterized, and the supported schedulers include Slurm, PBS, LSF, SGE, and Altair Grid Engine.

**Example**

Example required from the content owner for a complete scheduler submission against a specific cluster. Local parallel execution sets the processor count through the launcher, and scheduler submission is described in the launching guide.

**Complete when**

A parallel or scheduler-submitted run completes a bounded calculation and produces residual output.

**Keep**

The submission script or launcher configuration and the run log.

[Scheduler support](https://fluent.docs.pyansys.com/version/stable/user_guide/session/launching_ansys_fluent.html)

**Stage outcome:** An advanced specialization is selected and its first capability is demonstrated.

---

## Troubleshooting

For troubleshooting and support:

- **Documentation and resources:** The [Synopsys Developer Portal](https://developer.synopsys.com/) is the central entry point.
- **Usage questions:** Questions about how to use the library are posted on the [Synopsys Developer Forum](https://developerforum.synopsys.com/).
- **Development questions:** Questions about developing or contributing to the library are raised on the project's [GitHub repository](https://github.com/ansys/pyfluent).

Frequently asked questions, including how PyFluent locates a Fluent installation, are also covered in the PyFluent FAQ.

[PyFluent FAQ](https://fluent.docs.pyansys.com/version/stable/getting_started/faqs.html)

## Reference shelf

### Essential documentation

- [PyFluent documentation](https://fluent.docs.pyansys.com/)
- [PyFluent getting started](https://fluent.docs.pyansys.com/version/stable/getting_started/getting_started_contents.html)
- [Launching and connecting to Fluent](https://fluent.docs.pyansys.com/version/stable/user_guide/session/launching_ansys_fluent.html)
- [Using PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)
- [Applying solution settings](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/solution.html)
- [Field data](https://fluent.docs.pyansys.com/version/stable/user_guide/fields/field_data.html)

### Official examples

- [PyFluent examples gallery](https://fluent.docs.pyansys.com/version/stable/examples/index.html)

### AI-related resources

- [PyFluent-MCP documentation](https://fluent-mcp.docs.pyansys.com/)

### Related PyAnsys packages

- [PyFluent-Parametric documentation](https://parametric.fluent.docs.pyansys.com/)
- [PyFluent-Visualization documentation](https://visualization.fluent.docs.pyansys.com/)

### Source and contribution

- [PyFluent GitHub repository](https://github.com/ansys/pyfluent)
- [PyFluent-MCP GitHub repository](https://github.com/ansys/pyfluent-mcp)
- [Submit a PyFluent bug report](https://github.com/ansys/pyfluent/issues)

## Sources

- PyFluent documentation (https://fluent.docs.pyansys.com/): index, getting started, installation, launching and connecting to Fluent, using PyFluent sessions, applying solution settings, field data, and the examples gallery.
- PyFluent-MCP documentation (https://fluent-mcp.docs.pyansys.com/): index, overview, installation, quick start, tools and capabilities, and best practices.
- Ansys Developer Product Guide, Fluids section, Fluent developer tools.

