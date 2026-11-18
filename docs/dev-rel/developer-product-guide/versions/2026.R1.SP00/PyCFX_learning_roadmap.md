# PyCFX learning roadmap

PyCFX (`ansys-cfx-core`) is the open-source Python interface to Ansys CFX, the computational fluid dynamics (CFD) software. It is used to automate and script CFX from Python, covering simulation setup, solving, and results post-processing. PyCFX connects to the three CFX apps through three session types, and this roadmap builds the capability to drive a real CFX workflow from Python, one concrete step at a time.

PyCFX provides three session types that match the three stages of a CFX study:

- **PreProcessing:** Connects to CFX-Pre to set up a simulation.
- **Solver:** Controls the CFX-Solver to run the simulation.
- **PostProcessing:** Connects to CFD-Post to review results.

Each session exposes a hierarchy of settings objects that mirror the CFX Command Language (CCL) structure, so a setup is read and changed through typed Python objects rather than text commands. A session is created with `from_install()`, and a later session can be started from an earlier one with `from_session()`.

## Your learning journey

**1. Get it working**  
PyCFX is installed and a CFX-Pre session is started from Python.

**2. Understand the control model**  
The settings-object hierarchy is navigated and a setup value is read and changed.

**3. Modify an existing workflow**  
A setup is opened and one physics setting is changed with the effect observed.

**4. Run and assess a meaningful operation**  
A solver run is started, waited for, and its results are opened for review.

**5. Build reusable automation**  
A parameterized function drives a full pre, solve, and post workflow from inputs.

**6. Apply it to a personal use case**  
The automation is pointed at a personal case and validated.

**7. Use AI-assisted capabilities**  
The CFX MCP server is used to inspect context, route workflow actions, and run reviewed code, with every step verified.

**8. Choose an advanced pathway**  
A specialized direction such as expressions, physics validation, or post-processing objects is selected.

---

## 1. Get PyCFX working

> **Outcome:** PyCFX is installed and a CFX-Pre session is started from Python.

A licensed Ansys CFX installation is required, and PyCFX supports Ansys CFX 2025 R2 Service Pack 3 and later. The installed version determines the available features. The initial release runs CFX sessions only on the local machine, which is the same machine where Python runs.

### □ Install PyCFX into a virtual environment

**Activity**

Create and activate a virtual environment, then install the `ansys-cfx-core` package. Python 3.10 through Python 3.14 on Windows and Linux is supported.

**Example**

```bash
python -m venv .venv
# Windows
.venv\Scripts\activate
# Linux
source .venv/bin/activate
pip install ansys-cfx-core
```

**Complete when**

The environment is active and `pip show ansys-cfx-core` reports a version.

**Keep**

A short note recording the Python version and the installed PyCFX version.

[PyCFX installation guide](https://cfx.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Confirm that CFX can be located

**Activity**

Confirm that a licensed Ansys CFX installation is present and that PyCFX can find it. PyCFX locates the installation through an Ansys environment variable such as `AWP_ROOT252`. On Windows the installer sets this variable and on Linux it is set in the shell.

**Example**

```bash
# Linux: point PyCFX at the Ansys 2025 R2 installation
export AWP_ROOT252=/usr/ansys_inc/v252
```

**Complete when**

The Ansys environment variable for the installed version is set and points at the installation directory.

**Keep**

The exact environment variable name and path for the installed version.

[Install Ansys CFX](https://cfx.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Start Python and import PyCFX

**Activity**

Open a Python interpreter in the active environment and import PyCFX. Importing is a separate, concrete step from starting a session.

**Example**

```python
import ansys.cfx.core as pycfx
```

**Complete when**

The import returns without error.

**Keep**

The import line, which begins every PyCFX script.

[PyCFX installation guide](https://cfx.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Start a CFX-Pre session

**Activity**

Start a CFX-Pre session with `from_install()`, which launches CFX-Pre from the local installation. This PreProcessing session is the starting point for setting up a simulation.

**Example**

```python
import ansys.cfx.core as pycfx

pypre = pycfx.PreProcessing.from_install()
```

**Complete when**

A PreProcessing session object exists without error.

**Keep**

The working session-start script.

[Launch CFX](https://cfx.docs.pyansys.com/version/stable/user_guide/launching_cfx.html)

**Stage outcome:** PyCFX is installed and a CFX-Pre session is started from Python.

---

## 2. Understand the control model

> **Outcome:** The settings-object hierarchy is navigated and a setup value is read and changed.

### □ Open a case and read a setup value

**Activity**

Open an example case in the PreProcessing session, then read a setup value through the settings hierarchy. The hierarchy mirrors the CFX Command Language structure, so names are lowercase with spaces replaced by underscores while named objects keep their original names.

**Example**

```python
import ansys.cfx.core as pycfx

pypre = pycfx.PreProcessing.from_install()
pypre.file.open_case(file_name=case_name)

analysis_option = pypre.setup.flow["Flow Analysis 1"].analysis_type.option
print(analysis_option())
# 'Steady State'
```

**Complete when**

A setup value is read and printed from the settings hierarchy.

**Keep**

A short note of the settings path read and its value.

[Use PyCFX sessions](https://cfx.docs.pyansys.com/version/stable/user_guide/session.html)

### □ Discover the allowed values before changing a setting

**Activity**

Before changing a setting, read its allowed values so a valid value is chosen. String settings provide an `allowed_values()` method.

**Example**

```python
analysis_option = pypre.setup.flow["Flow Analysis 1"].analysis_type.option
print(analysis_option.allowed_values())
# ['Steady State', 'Transient', 'Transient Blade Row']
```

**Complete when**

The allowed values for a setting are printed.

**Keep**

The setting and its list of allowed values.

[Use PyCFX sessions](https://cfx.docs.pyansys.com/version/stable/user_guide/session.html)

### □ Change a setting and confirm it took effect

**Activity**

Set a value through the settings object and read it back to confirm. Invalid values are rejected, which gives immediate feedback.

**Example**

```python
analysis_type = pypre.setup.flow["Flow Analysis 1"].analysis_type
analysis_type.option = "Transient"
print(analysis_type.option.get_state())
# 'Transient'
```

**Complete when**

A setting is changed and the read-back confirms the new value.

**Keep**

The before-and-after state of the setting that was changed.

[Use PyCFX sessions](https://cfx.docs.pyansys.com/version/stable/user_guide/session.html)

**Stage outcome:** The settings hierarchy is navigated and a setup value is read, validated, and changed.

---

## 3. Modify an existing workflow

> **Outcome:** An official example setup is opened, then one physics setting is changed, and the effect of the physics update is observed.

### □ Run one official example unchanged

**Activity**

Run one end-to-end example from the PyCFX example gallery, such as the static mixer example, exactly as published and capture its reported output.

**Example**

```python
# Run one published PyCFX example from the example gallery unchanged,
# then record the result it reports.
```

**Complete when**

The example completes and its reported result is saved.

**Keep**

The unchanged script and a copy of its output.

[PyCFX examples](https://cfx.docs.pyansys.com/version/stable/examples/index.html)

### □ Change a turbulence model and observe the physics update

**Activity**

Change a physics setting such as the turbulence model and observe that PreProcessing automatically updates dependent settings. For example, changing the turbulence model updates the wall-function option to the only value valid for the new model.

**Example**

```python
fluid_models = pypre.setup.flow["Flow Analysis 1"].domain["Default Domain"].fluid_models
fluid_models.turbulence_model.option = "SST"   # Shear Stress Transport model
print(fluid_models.turbulent_wall_functions.option.get_state())
# 'Automatic'  # updated automatically by the physics update
```

**Complete when**

A physics setting is changed and a dependent setting is confirmed to have updated.

**Keep**

The before-and-after state of the changed setting and the dependent setting.

[Physics updates](https://cfx.docs.pyansys.com/version/stable/user_guide/session.html)

### □ Check the setup for physics messages

**Activity**

Check whether the setup is physically valid by reading the physics messages from a settings object under `setup`. Messages can be filtered by severity.

**Example**

```python
messages = pypre.setup.get_physics_messages()   # validity messages for the whole setup
print(messages)
```

**Complete when**

The physics messages are returned and reviewed for warnings or errors.

**Keep**

A note of any warnings or errors found and how they were resolved.

[Physics messages](https://cfx.docs.pyansys.com/version/stable/user_guide/session.html)

**Stage outcome:** An official workflow is modified with intent and the resulting physics update is verified.

---

## 4. Run and assess a meaningful operation

> **Outcome:** A solver run is started, waited for, and its results are opened for review.

### □ Write a solver input file from the setup

**Activity**

From the PreProcessing session, write a solver input file that captures the current setup. This file is the input to the CFX-Solver.

**Example**

Example solver-input call required from the content owner, because the exact `file` command and arguments for writing the solver input file depend on the case used.

**Complete when**

A solver input file is written from the current setup.

**Keep**

The path of the written solver input file.

[Use PyCFX sessions](https://cfx.docs.pyansys.com/version/stable/user_guide/session.html)

### □ Start a solver run and wait for it

**Activity**

Start a Solver session from the solver input file, start the run, and wait for it to finish. The Solver session can also be started directly from the PreProcessing session with `from_session()`.

**Example**

```python
import ansys.cfx.core as pycfx

pysolve = pycfx.Solver.from_install(solver_input_file_name=solver_input_file_name)
pysolve.solution.start_run()
pysolve.solution.wait_for_run()   # block until the run completes
print(pysolve.solution.is_running())
# False
```

**Complete when**

The run starts and `wait_for_run()` returns after the solver finishes.

**Keep**

A note of the run started and its completion status.

[Solver session details](https://cfx.docs.pyansys.com/version/stable/user_guide/session.html)

### □ Open the results in CFD-Post

**Activity**

Start a PostProcessing session and load the results file, then confirm the results are available for review. The PostProcessing session can also be started from the Solver session with `from_session()`, which waits for the run to finish if needed.

**Example**

```python
import ansys.cfx.core as pycfx

pypost = pycfx.PostProcessing.from_install()
pypost.file.load_results(file_name=results_name)
```

**Complete when**

The results file is loaded into a PostProcessing session without error.

**Keep**

The results file path and a note that it loaded successfully.

[PostProcessing session details](https://cfx.docs.pyansys.com/version/stable/user_guide/session.html)

**Stage outcome:** A solver run is driven to completion from Python and its results are opened for review.

---

## 5. Build reusable automation

> **Outcome:** A parameterized function performs a full pre, solve, and post workflow from explicit inputs.

### □ Chain the three sessions in one function

**Activity**

Write a function that receives the case path as a parameter, sets up the case, solves it, and opens the results, chaining the sessions with `from_session()`. Passing inputs in keeps the function reusable.

**Example**

```python
import ansys.cfx.core as pycfx

def run_study(case_name):
    """Open a case, solve it, and return a PostProcessing session on the results."""
    pypre = pycfx.PreProcessing.from_install()
    pypre.file.open_case(file_name=case_name)

    pysolve = pycfx.Solver.from_session(pypre)
    pysolve.solution.start_run()
    pysolve.solution.wait_for_run()

    pypost = pycfx.PostProcessing.from_session(pysolve)
    return pypost
```

**Complete when**

The function runs end to end when given a case path and returns a PostProcessing session.

**Keep**

The reusable function.

[Launch from an existing session](https://cfx.docs.pyansys.com/version/stable/user_guide/launching_cfx.html)

### □ Parameterize environment-specific inputs

**Activity**

Replace hard-coded case paths and the CFX version with parameters so the automation runs on other machines without edits. The CFX version is passed with the `product_version` argument and is inherited by sessions chained from it.

**Example**

```python
import ansys.cfx.core as pycfx

def run_study(case_name, product_version=None):
    # case_name and product_version are supplied by the caller, not hard-coded
    pypre = pycfx.PreProcessing.from_install(product_version=product_version)
    pypre.file.open_case(file_name=case_name)
    return pypre
```

**Complete when**

No environment-specific input is hard-coded inside the function body and all inputs arrive as arguments.

**Keep**

The parameterized entry point and an example call with sample inputs.

[Launch CFX](https://cfx.docs.pyansys.com/version/stable/user_guide/launching_cfx.html)

### □ Reduce unneeded post-processing recalculations

**Activity**

When building a post-processing object such as a plane, set all its parameters in one step, or suspend the object while configuring it, so the result is calculated once rather than after each change.

**Example**

```python
# Set all plane parameters in a single step so it is calculated once
pypost.results.plane["Plane 1"] = {
    "option": "ZX Plane",
    "plane_type": "Slice",
}
```

**Complete when**

A post-processing object is built with a single calculation rather than several.

**Keep**

The efficient object-creation pattern as a reusable template.

[Long calculations](https://cfx.docs.pyansys.com/version/stable/user_guide/session.html)

**Stage outcome:** A reusable, parameterized automation performs a full pre, solve, and post workflow efficiently.

---

## 6. Apply it to a personal use case

> **Outcome:** The reusable automation is pointed at a personal case and its result is validated.

### □ Adapt the automation to a personal case

**Activity**

Supply a personal CFX case and adjust the domains, boundaries, and physics models to match the intended simulation, using `allowed_values()` and the physics messages to keep the setup valid.

**Example**

Example adaptation code required from the content owner, because it depends on the personal case and physics chosen.

**Complete when**

The automation runs on the personal case and produces a result.

**Keep**

The adapted script and the list of settings that differ from the example.

[Use PyCFX sessions](https://cfx.docs.pyansys.com/version/stable/user_guide/session.html)

### □ Validate the personal result against expectation

**Activity**

Compare the extracted result with a known reference, a hand calculation, or a prior CFX run, and record whether it matches within tolerance.

**Example**

Example comparison data required from the content owner, because a personal reference value depends on the chosen case.

**Complete when**

The result is compared with a reference and the agreement or discrepancy is recorded.

**Keep**

The comparison record and any follow-up actions.

**Stage outcome:** A personally relevant simulation is automated and its result is validated.

---

## 7. Use AI-assisted capabilities

> **Outcome:** The CFX MCP server is used to inspect context, route workflow actions, and run reviewed code, with every generated step verified by the learner.

A tool built on PyCFX can add AI-assisted interaction on top of it. PyCFX-MCP is such a tool. It is a compact Model Context Protocol (MCP) server that connects an AI assistant to CFX through PyCFX. It is a deterministic server that does not call a server-side language model, so code authoring belongs in the MCP host or a higher-level agent and the server validates and executes reviewed Python through `validate_code` and `run_code`. The assistant discovers and calls tools such as `session_status`, `connect`, `cfx_model_context`, `cfx_workflow`, `validate_code`, and `run_code`, while the learner reviews every generated step.

### □ Install and start the MCP server and connect an assistant

**Activity**

Install and start PyCFX-MCP, then connect an MCP-compatible client. The detailed per-client setup is kept in the PyCFX-MCP documentation rather than reproduced here.

**Example**

```bash
pip install ansys-cfx-mcp
ansys-cfx-mcp
```

**Complete when**

The MCP server is running and a client reports the available tools.

**Keep**

A note of the client used and that the tool list was discovered.

[PyCFX-MCP quick start](https://cfx-mcp.docs.pyansys.com/)

### □ Check status and inspect bounded model context

**Activity**

Ask the assistant to check the session status, connect to CFX, and return bounded model context such as named objects or allowed values. Asking for targeted context rather than a broad dump keeps the response small and relevant.

**Example prompt**

> "Check the session status, connect to CFX, and find the named boundary objects that contain inlet."

The assistant calls `session_status`, then `connect`, then `cfx_model_context` for the targeted query. The learner confirms the returned context before continuing.

**Complete when**

A session is connected through the assistant and a bounded context query returns the expected names.

**Keep**

The status output and the returned context.

[PyCFX-MCP tools and capabilities](https://cfx-mcp.docs.pyansys.com/)

### □ Route a solver workflow, then validate and run reviewed code

**Activity**

Ask the assistant to route a lifecycle action with `cfx_workflow`, such as importing a mesh, writing solver input, and running the solver. When a task needs custom PyCFX code, review the generated snippet, pre-check it with `validate_code`, and run it with `run_code` only after approval. Because `run_code` runs against the live CFX backend, each generated snippet is reviewed before it is run.

**Example prompt**

> "Import this mesh into CFX-Pre, write the solver input file, start the solver, and wait for it to finish."

The assistant routes these steps through `cfx_workflow` using the documented actions `import_mesh`, `write_def`, `start_solver`, and `wait_solver`. For a custom inspection, a generated PyCFX snippet is checked with `validate_code` and run with `run_code` only after the learner reviews and approves it, and any corrections are recorded.

**Complete when**

The routed workflow actions complete and any reviewed snippet is validated and run with its result confirmed.

**Keep**

The routed actions used, the original prompt, any generated snippet, its validation result, and the outcome.

[PyCFX-MCP best practices](https://cfx-mcp.docs.pyansys.com/)

**Stage outcome:** The CFX MCP server is used to inspect context and route a workflow, and every generated step is reviewed before it is run.

---

## 8. Choose an advanced pathway

> **Outcome:** One specialized direction is selected and a first concrete task in it is completed.

### □ Pathway: expressions with the CFX Expression Language

**Activity**

Create and use expressions through the expressions container, which represents CFX Expression Language (CEL) parameters in the setup.

**Example**

```python
pypre.setup.library.cel.expressions.create("MyPressure")
pypre.setup.library.cel.expressions["MyPressure"].definition = "2 * OpeningPressure"
pypre.setup.library.cel.expressions["OpeningPressure"] = {"definition": "101325 [Pa]"}
```

**Complete when**

An expression is created and its definition is set and read back.

**Keep**

The expressions created and their definitions.

[Expressions, expert parameters, and user data](https://cfx.docs.pyansys.com/version/stable/user_guide/session.html)

### □ Pathway: post-processing objects in CFD-Post

**Activity**

Create post-processing objects such as planes or contours in a PostProcessing session and configure them efficiently.

**Example**

```python
pypost.results.plane.create("Plane 1")
plane = pypost.results.plane["Plane 1"]
plane.suspend()            # pause recalculation while configuring
plane.option = "ZX Plane"
plane.plane_type = "Slice"
plane.unsuspend()          # recalculated once here
```

**Complete when**

A post-processing object is created and configured.

**Keep**

The post-processing script and the object produced.

[PostProcessing session details](https://cfx.docs.pyansys.com/version/stable/user_guide/session.html)

### □ Pathway: optional objects and parameters

**Activity**

Add and remove optional parameters and objects in a setup, which change what the setup contains. An optional parameter is removed by setting it to `None`, and an optional object is enabled or disabled explicitly.

**Example**

```python
in1 = pypre.setup.flow["Flow Analysis 1"].domain["Default Domain"].boundary["in1"]
in1.coord_frame = "Coord 0"   # add the optional Coord Frame parameter
in1.coord_frame = None         # remove the optional Coord Frame parameter
```

**Complete when**

An optional parameter or object is added and then removed.

**Keep**

The chosen pathway and the first script produced.

[Optional objects and parameters](https://cfx.docs.pyansys.com/version/stable/user_guide/session.html)

**Stage outcome:** A specialized pathway is chosen and a first task in it is completed.

---

## Troubleshooting

For troubleshooting and support:

- **Documentation and resources:** The [Synopsys Developer Portal](https://developer.synopsys.com/) is the central entry point.
- **Usage questions:** Questions about how to use the library are posted on the [Synopsys Developer Forum](https://developerforum.synopsys.com/).
- **Development questions:** Questions about developing or contributing to the library are raised on the project's GitHub repository, [PyCFX on GitHub](https://github.com/ansys/pycfx).

## Reference shelf

### Essential documentation

- [PyCFX documentation](https://cfx.docs.pyansys.com/)
- [PyCFX installation guide](https://cfx.docs.pyansys.com/version/stable/getting_started/installation.html)
- [Launch CFX](https://cfx.docs.pyansys.com/version/stable/user_guide/launching_cfx.html)
- [Use PyCFX sessions](https://cfx.docs.pyansys.com/version/stable/user_guide/session.html)

### Official examples

- [PyCFX examples](https://cfx.docs.pyansys.com/version/stable/examples/index.html)

### Optional training

- [Ansys CFX Customization (Ansys Learning Hub)](https://www.ansys.com/training-center/course-catalog/fluids/ansys-cfx-customization)
- [Ansys 2026 R1: Ansys Fluids What's New (Webinar)](https://www.ansys.com/en-gb/webinars/ansys-2026-r1-ansys-fluids)

### AI-related resources

- [PyCFX-MCP documentation](https://cfx-mcp.docs.pyansys.com/)

### Source and contribution

- [PyCFX GitHub repository](https://github.com/ansys/pycfx)
- [PyCFX-MCP GitHub repository](https://github.com/ansys/pycfx-mcp)
