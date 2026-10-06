# PyFluent learning roadmap

PyFluent (`ansys-fluent-core`) is the open-source Python interface to Ansys Fluent. It is used to automate, customize, and streamline computational fluid dynamics (CFD) workflows from Python, covering simulation setup, execution, monitoring, and results extraction. This roadmap builds the capability to drive a real Fluent session from Python, one concrete step at a time.

## Your learning journey

**1. Get it working**  
A Fluent solver session is created from Python and a case file is loaded.

**2. Understand the control model**  
The settings tree and field data objects are navigated and read with confidence.

**3. Modify an existing workflow**  
An official example is changed and the effect is observed.

**4. Run and assess a meaningful operation**  
A case is solved and a result quantity is extracted and checked.

**5. Build reusable automation**  
A parameterized function drives a full setup-and-solve from inputs.

**6. Apply it to a personal use case**  
The automation is pointed at a personal case and validated.

**7. Use AI-assisted capabilities**  
A tool built on PyFluent is used to discover, generate, and validate settings code.

**8. Choose an advanced pathway**  
A specialized direction such as meshing, field data, or parametric study is selected.

---

## 1. Get PyFluent working

> **Outcome:** A Fluent solver session is created from Python and a case file is read.

A licensed installation of Ansys Fluent is required to benefit fully from PyFluent, and the installed Fluent version determines which features are available. PyFluent also connects to remote and containerized Fluent, so the installation is not assumed to be on the same machine as every workflow.

### □ Install PyFluent into a clean environment

**Activity**

Create and activate a virtual environment, then install the `ansys-fluent-core` package. Python 3.10 through Python 3.14 on Windows, macOS, and Linux is supported.

**Example**

```console
python -m venv .venv
# Windows
.venv\Scripts\activate
# Linux and macOS
source .venv/bin/activate
python -m pip install ansys-fluent-core
```

**Complete when**

The environment is active and `pip show ansys-fluent-core` reports a version.

**Keep**

A short note recording the Python version and the installed PyFluent version.

[PyFluent installation guide](https://fluent.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Confirm that Fluent can be located

**Activity**

Confirm that a licensed Ansys Fluent installation is present and that PyFluent can find it. PyFluent locates the installation through an Ansys environment variable such as `AWP_ROOT252`. On Windows the installer sets this variable and on Linux it is set in the shell.

**Example**

```console
# Linux: point PyFluent at the Fluent 2025 R2 installation
export AWP_ROOT252=/usr/ansys_inc/v252
```

**Complete when**

The environment variable for the installed Fluent version is set and points at the installation directory.

**Keep**

The exact environment variable name and path for the installed version.

[Fluent installation and location](https://fluent.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Start Python and import PyFluent

**Activity**

Open a Python interpreter in the active environment and import PyFluent. Importing the package is a separate, concrete step from creating a session.

**Example**

```python
import ansys.fluent.core as pyfluent
```

**Complete when**

The import returns without error.

**Keep**

The import line, which begins every PyFluent script.

### □ Create a solver session and read a case

**Activity**

Create a solver session from the installed Fluent, then read a downloaded example case. The promoted way to obtain a session is the `from_install()` call on the session type. A failed launch raises an exception rather than returning a status to check, so no return value is tested to decide whether Fluent started.

**Example**

```python
import ansys.fluent.core as pyfluent
from ansys.fluent.core.examples import download_file

case_file_name = download_file("mixing_elbow.cas.h5", "pyfluent/mixing_elbow")
solver_session = pyfluent.Solver.from_install(case_file_name=case_file_name)

# Confirm the case is loaded by reading a known setting
energy = pyfluent.solver.Energy(settings_source=solver_session)
print(energy.enabled.get_state())
# True
```

**Complete when**

A solver session object exists and a setting such as the energy model state is printed.

**Keep**

The working session-creation script.

[Using PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)

**Stage outcome:** A Fluent solver session is created from Python and an example case is loaded.

---

## 2. Understand the control model

> **Outcome:** The settings tree and field data objects are navigated, read, and changed through the documented API.

### □ Explore the settings tree of a live session

**Activity**

List the children of a session to see the `settings` and `fields` branches, then read a setting through a settings object. Binding an intermediate settings object once keeps code readable and avoids repeating long attribute chains.

**Example**

```python
# Bind the setup object once, then read from it
setup = pyfluent.solver.Setup(settings_source=solver_session)
solver_time = setup.general.solver.time
print(solver_time.get_state())
# 'steady'
print(solver_time.allowed_values())
# ['steady', 'unsteady-1st-order']
```

**Complete when**

A setting value and its allowed values are printed from a bound settings object.

**Keep**

A short list of the settings paths explored and their current values.

[Using PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)

### □ Use the active-session context manager

**Activity**

Use `using(session)` to make a session active inside a `with` block so top-level settings objects operate on it without being passed each time. The active session is restored when the block exits, including when an exception is raised.

**Example**

```python
from ansys.fluent.core import using
from ansys.fluent.core.solver import ReadCase, Energy

with using(solver_session):
    ReadCase()(file_name=case_file_name)
    print(Energy().enabled())
# True
```

**Complete when**

A setting is read and a value is printed from inside a `with using(solver_session)` block.

**Keep**

The context-manager snippet as a template for later scripts.

[Context manager for active sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)

### □ Request field data with typed descriptors

**Activity**

Read a scalar field through a request object and name the variable with the `VariableCatalog` descriptor rather than a raw string. Typed descriptors are the form used prominently in the documentation and are discoverable by editor autocomplete.

**Example**

```python
from ansys.fluent.core import ScalarFieldDataRequest
from ansys.fluent.core.solver import VelocityInlet
from ansys.units import VariableCatalog

field_data = solver_session.fields.field_data

absolute_pressure_request = ScalarFieldDataRequest(
    field_name=VariableCatalog.ABSOLUTE_PRESSURE,
    surfaces=[VelocityInlet(settings_source=solver_session, name="inlet")],
)
absolute_pressure_data = field_data.get_field_data(absolute_pressure_request)
print(absolute_pressure_data["inlet"].shape)
# (389,)
```

**Complete when**

A field-data array is returned and its shape is printed.

**Keep**

The field-data request script and the printed array shape.

[Field data guide](https://fluent.docs.pyansys.com/version/stable/user_guide/fields/field_data.html)

**Stage outcome:** Settings and field data are navigated and read through the documented, typed API.

---

## 3. Modify an existing workflow

> **Outcome:** An official example is run unchanged, then altered, and the difference in result is observed.

### □ Run one official example unchanged

**Activity**

Run one end-to-end example, such as the mixing elbow settings-API example, exactly as published and capture its documented output.

**Example**

```python
# Run the published "Fluent setup and solution using settings objects" example
# unchanged from the PyFluent example gallery, then record its reported output.
```

**Complete when**

The example completes without error and its reported result is saved.

**Keep**

The unchanged script and a copy of its output.

[PyFluent example gallery](https://fluent.docs.pyansys.com/version/stable/examples/index.html)

### □ Change one boundary condition and observe the effect

**Activity**

In a copy of the example, change one documented boundary-condition input, such as the cold inlet velocity, and compare the result with the baseline run. Bind the inlet object once and set state through it.

**Example**

```python
import ansys.fluent.core as pyfluent
from ansys.fluent.core import examples

file_name = examples.download_file("mixing_elbow.cas.h5", "pyfluent/mixing_elbow")
solver_session = pyfluent.Solver.from_install()
solver_session.settings.file.read_case(file_name=file_name)

cold_inlet = pyfluent.solver.VelocityInlet(settings_source=solver_session, name="cold-inlet")
cold_inlet.momentum.velocity.set_state(0.4)   # inlet velocity in m/s
cold_inlet.thermal.temperature.set_state(293.15)  # inlet temperature in K
```

**Complete when**

The changed input is applied and the new result is compared with the baseline.

**Keep**

The modified script and a two-line before-and-after comparison.

[Boundary conditions guide](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/set_up/boundary_conditions.html)

### □ Switch a model setting and confirm it took effect

**Activity**

Change a documented model setting and confirm the change by reading the state back. The energy model is a cleanly documented example with clear sub-settings.

**Example**

```python
energy = pyfluent.solver.Energy(settings_source=solver_session)
energy.viscous_dissipation.set_state(True)   # include viscous heating
print(energy.viscous_dissipation.get_state())
# True
```

**Complete when**

The model state is set and the read-back confirms the new value.

**Keep**

The before-and-after state of the setting that was changed.

[Energy model guide](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/set_up/models/energy.html)

**Stage outcome:** An official workflow is modified with intent and the resulting change is verified.

---

## 4. Run and assess a meaningful operation

> **Outcome:** A case is solved and a result quantity is extracted and sanity-checked.

### □ Run the calculation for a fixed number of iterations

**Activity**

Run the solver for a set iteration count. Default initialization is applied at solve when the flow is uninitialized, so an explicit initialization call is included only when a specific initialization is actually needed.

**Example**

```python
solution = solver_session.settings.solution
solution.run_calculation.iterate(iter_count=100)  # 100 iterations
```

**Complete when**

The iteration call completes and the solver reports the iterations performed.

**Keep**

The iteration count used and the final residual summary.

[Applying solution settings](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/solution.html)

### □ Apply a specific initialization when it is required

**Activity**

When a defined starting state is needed, apply hybrid initialization explicitly before solving and state why it was used.

**Example**

```python
solution = solver_session.settings.solution
solution.initialization.hybrid_initialize()   # defined start state before solving
solution.run_calculation.iterate(iter_count=100)
```

**Complete when**

Initialization runs and the subsequent solve proceeds from the initialized state.

**Keep**

A note of when explicit initialization is needed versus relying on the default at solve.

[Applying solution settings](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/solution.html)

### □ Extract and sanity-check a result quantity

**Activity**

After solving, extract a quantity of interest, such as a vector field on an inlet, and check that its shape and values are physically reasonable.

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
print(velocity_vector_data["inlet"].shape)
# (262, 3)
```

**Complete when**

A post-solution quantity is returned as an inspectable array and its shape is confirmed.

**Keep**

The extracted quantity and a one-line reasonableness check.

[Field data guide](https://fluent.docs.pyansys.com/version/stable/user_guide/fields/field_data.html)

**Stage outcome:** A case is solved from Python and a result quantity is extracted and assessed.

---

## 5. Build reusable automation

> **Outcome:** A parameterized function performs a full read, setup, solve, and result extraction from explicit inputs.

### □ Wrap a setup-and-solve in a function that takes the session

**Activity**

Write a function that receives the session and the case path as explicit parameters rather than reading a module-level global. Passing dependencies in keeps the function reusable across sessions and safe in multi-session scripts.

**Example**

```python
def run_case(solver_session, case_file_name, iter_count=100):
    """Read a case, solve it, and return the inlet velocity field."""
    solver_session.settings.file.read_case(file_name=case_file_name)
    solver_session.settings.solution.run_calculation.iterate(iter_count=iter_count)

    from ansys.fluent.core import VectorFieldDataRequest
    from ansys.fluent.core.solver import VelocityInlets
    from ansys.units import VariableCatalog

    request = VectorFieldDataRequest(
        field_name=VariableCatalog.VELOCITY,
        surfaces=VelocityInlets(settings_source=solver_session),
    )
    return solver_session.fields.field_data.get_field_data(request)
```

**Complete when**

The function runs end to end when given a session and a case path and returns a result object.

**Keep**

The reusable `run_case` function.

[Using PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)

### □ Parameterize environment-specific inputs

**Activity**

Replace hard-coded file paths, processor counts, and iteration counts with parameters or configuration values so the automation runs on other machines without edits.

**Example**

```python
def solve_from_inputs(solver_session, case_file_name, iter_count):
    # case_file_name and iter_count are supplied by the caller, not hard-coded
    return run_case(solver_session, case_file_name, iter_count=iter_count)
```

**Complete when**

No simulation input is hard-coded inside the function body and all inputs arrive as arguments.

**Keep**

The parameterized entry point and an example call with sample inputs.

### □ Manage the session lifecycle cleanly

**Activity**

End sessions deterministically. A session created with a `from_<...>` method terminates the connected Fluent process on `exit()`, so call `exit()` when the work is complete.

**Example**

```python
solver_session = pyfluent.Solver.from_install()
try:
    solve_from_inputs(solver_session, case_file_name, iter_count=100)
finally:
    solver_session.exit()   # terminates the connected Fluent process
```

**Complete when**

The script completes and the Fluent process is confirmed to have exited.

**Keep**

The lifecycle pattern as a reusable template.

[Ending PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)

**Stage outcome:** A reusable, parameterized automation performs a full workflow and cleans up after itself.

---

## 6. Apply it to a personal use case

> **Outcome:** The reusable automation is pointed at a personal case and its result is validated.

### □ Adapt the automation to a personal case file

**Activity**

Supply a personal case file to the parameterized function and adjust boundary conditions and models to match the intended physics, using `allowed_values()` to confirm valid inputs before setting them.

**Example**

```python
# Discover valid options before setting a value
turbulence = cold_inlet.turbulence.turbulence_specification
print(turbulence.allowed_values())
# ['K and Omega', 'Intensity and Length Scale', ...]
turbulence.set_state("Intensity and Hydraulic Diameter")
```

**Complete when**

The automation runs on the personal case and produces a result.

**Keep**

The adapted script and the list of settings that differ from the example.

[Boundary conditions guide](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/set_up/boundary_conditions.html)

### □ Validate the personal result against expectation

**Activity**

Compare the extracted result with a known reference, a hand calculation, or a prior GUI run, and record whether it matches within tolerance.

**Example**

Example comparison data required from the content owner, because a personal reference value depends on the chosen case.

**Complete when**

The result is compared with a reference and the agreement or discrepancy is recorded.

**Keep**

The comparison record and any follow-up actions.

**Stage outcome:** A personally relevant simulation is automated and its result is validated.

---

## 7. Use AI-assisted capabilities

> **Outcome:** A tool built on PyFluent is used to discover, generate, validate, and apply settings code, with every generated step verified by the learner.

Tools built on PyFluent can add AI-assisted interaction on top of the deterministic PyFluent API. PyFluent-MCP is one such tool. It is a Model Context Protocol (MCP) server that exposes PyFluent capabilities as standardized tools so that an MCP-compatible assistant can inspect a live Fluent session, generate settings code, validate it, and run it. The dependency runs from the tool to PyFluent, and PyFluent itself does not require it. The AI assistant suggests and generates, while PyFluent executes and the engineering result is verified by the learner.

### □ Start the MCP server and connect an assistant

**Activity**

Install and start PyFluent-MCP, then connect an MCP-compatible client. The detailed per-client setup is kept in the PyFluent-MCP documentation rather than reproduced here.

**Example**

```bash
ansys-fluent-mcp
# equivalent
python -m ansys.fluent.mcp
```

**Complete when**

The MCP server is running and a client reports the available tools.

**Keep**

A note of the client used and that the tool list was discovered.

[PyFluent-MCP quick start](https://fluent-mcp.docs.pyansys.com/)

### □ Discover a settings path with the assistant and verify it

**Activity**

Ask the assistant to discover a settings path, then confirm the path against PyFluent documentation or a live read before relying on it. The recommended loop is discover, validate, execute, and verify.

**Example prompt**

> "Find API paths related to boundary condition velocity inlet, then show the current state of that path."

The assistant uses `find_api` and `get_state`. The returned path is verified by reading the same value through PyFluent or by checking `get_help` before any change is made.

**Complete when**

A discovered path is confirmed to exist and its live value is read back.

**Keep**

The discovered path and the confirming read.

[PyFluent-MCP tools and capabilities](https://fluent-mcp.docs.pyansys.com/)

### □ Generate and validate a settings change before running it

**Activity**

Ask the assistant to generate a PyFluent snippet for a specific change, run `validate_code` to pre-check it, then `run_code` to apply it, and finally confirm the result. Every generated line is compared with the documentation before execution, because `run_code` mutates the live solver.

**Example prompt**

> "Generate PyFluent code to set the cold inlet velocity to 0.4 m/s, validate it, and show me the code before running it."

The generated snippet is checked with `validate_code`, reviewed by the learner against the boundary-condition documentation, applied with `run_code`, and confirmed with `summarize_setup` or a `get_state` read.

**Complete when**

The validated snippet is applied and the result is confirmed, and any corrections the learner made are recorded.

**Keep**

The original prompt, the generated snippet, the validation result, the corrected code, and the confirmation read.

[PyFluent-MCP best practices](https://fluent-mcp.docs.pyansys.com/)

**Stage outcome:** An assistant built on PyFluent is used to discover, generate, and validate settings code, and every generated step is verified before it is trusted.

---

## 8. Choose an advanced pathway

> **Outcome:** One specialized direction is selected and a first concrete task in it is completed.

### □ Pathway: meshing workflows

**Activity**

Create a meshing session and run a guided watertight-geometry workflow task on an example geometry.

**Example**

```python
import ansys.fluent.core as pyfluent

meshing_session = pyfluent.Meshing.from_install()
watertight = meshing_session.watertight()
```

**Complete when**

A meshing session is created and a workflow task runs.

**Keep**

The meshing script and the task that was executed.

[Using PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)

### □ Pathway: advanced field data and reductions

**Activity**

Batch several field-data requests in one call, or compute a reduction such as a weighted sum over a boundary.

**Example**

```python
batch = solver_session.fields.field_data.new_batch()
# add multiple requests, then: batch.get_fields()
```

**Complete when**

A batched request or a reduction returns a result.

**Keep**

The batched or reduction script and its output.

[Field data guide](https://fluent.docs.pyansys.com/version/stable/user_guide/fields/field_data.html)

### □ Pathway: parametric and visualization companions

**Activity**

Explore the companion libraries for parametric studies and visualization, which build on PyFluent.

**Example**

Example required from the content owner for a specific parametric or visualization task.

**Complete when**

A first task in the chosen companion library runs.

**Keep**

The chosen pathway and the first script produced.

[PyFluent-Parametric documentation](https://parametric.fluent.docs.pyansys.com/) · [PyFluent-Visualization documentation](https://visualization.fluent.docs.pyansys.com/)

**Stage outcome:** A specialized pathway is chosen and a first task in it is completed.

---

## Troubleshooting

For troubleshooting and support:

- **Documentation and resources:** The [Synopsys Developer Portal](https://developer.synopsys.com/) is the central entry point.
- **Usage questions:** Questions about how to use the library are posted on the [Synopsys Developer Forum](https://developerforum.synopsys.com/).
- **Development questions:** Questions about developing or contributing to the library are raised on the project's GitHub repository, [PyFluent on GitHub](https://github.com/ansys/pyfluent).

## Reference shelf

### Essential documentation

- [PyFluent documentation](https://fluent.docs.pyansys.com/version/stable/)
- [PyFluent installation guide](https://fluent.docs.pyansys.com/version/stable/getting_started/installation.html)
- [Using PyFluent sessions](https://fluent.docs.pyansys.com/version/stable/user_guide/session/session.html)
- [Launching and connecting to Fluent](https://fluent.docs.pyansys.com/version/stable/user_guide/session/launching_ansys_fluent.html)
- [Field data guide](https://fluent.docs.pyansys.com/version/stable/user_guide/fields/field_data.html)
- [Applying solution settings](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/solution.html)

### Official examples

- [PyFluent example gallery](https://fluent.docs.pyansys.com/version/stable/examples/index.html)

### Optional training

- [Getting Started With PyFluent (Ansys Learning Hub)](https://www.ansys.com/training-center/course-catalog/fluids/getting-started-with-pyfluent)
- [Getting Started With PyFluent (Ansys Innovation Space)](https://innovationspace.ansys.com/product/getting-started-with-pyfluent/)
- [PyAnsys Training: Overview of PyFluent](https://www.youtube.com/watch?v=BY2FJ5qATCM)

### AI-related resources

- [PyFluent-MCP documentation](https://fluent-mcp.docs.pyansys.com/)

### Source and contribution

- [PyFluent GitHub repository](https://github.com/ansys/pyfluent)
- [PyFluent-Parametric documentation](https://parametric.fluent.docs.pyansys.com/)
- [PyFluent-Visualization documentation](https://visualization.fluent.docs.pyansys.com/)

## Sources

- PyFluent documentation (https://fluent.docs.pyansys.com/) — installation, sessions, launching, field data, boundary conditions, models, and solution settings pages.
- PyFluent-MCP documentation (https://fluent-mcp.docs.pyansys.com/) — overview, quick start, tools and capabilities, and best practices.
- Developer Product Guide, Fluids section — Fluent and PyFluent developer tooling, companion libraries, and training links.
