# PyMechanical learning roadmap

PyMechanical is the open-source Python interface to Ansys Mechanical, the finite element analysis (FEA) software for structural engineering. This roadmap measures capability rather than page visits. Each milestone produces a demonstrable skill, an observable result, or a reusable artifact. The roadmap covers Ansys Mechanical 2024 R2 and later.

## Your learning journey

**1. Get it working**  
PyMechanical is installed and a first Mechanical session is started and verified.

**2. Understand the control model**  
The embedding and remote session models are distinguished and the correct mode is chosen for a workflow.

**3. Modify an existing workflow**  
A working official example is run unchanged and then adapted to a new requirement.

**4. Run and assess a meaningful operation**  
A complete structural analysis is set up, solved, and its results are inspected.

**5. Build reusable automation**  
A parameterized, rerunnable script is produced that captures a full analysis.

**6. Apply it to a personal use case**  
The automation is retargeted to a learner-supplied geometry and requirement.

**7. Use AI-assisted capabilities**  
PyMechanical-MCP is used to drive Mechanical from an AI assistant, with every generated action validated.

**8. Choose an advanced pathway**  
An advanced specialization is selected, such as remote pools, licensing control, or CI/CD.

---

## Prerequisites

> **Outcome:** The environment required by every later stage is confirmed present.

A licensed local installation of Ansys Mechanical 2024 R2 or later is required, because the installed version determines the available interface and features. Python 3.12 through Python 3.14 is required, and a virtual environment is recommended. On Linux, embedding mode requires the `mechanical-env` script that ships with PyMechanical to be run before Python starts.

---

## 1. Get PyMechanical working

> **Outcome:** PyMechanical is installed and a Mechanical session is started and confirmed from Python.

### □ Install PyMechanical into a virtual environment

**Activity**

The `ansys-mechanical-core` package is installed from PyPI into a virtual environment. Optional extras are added only when the associated capability is needed.

**Example**

```bash
python -m venv .venv
# Windows: .venv\Scripts\activate    Linux/macOS: source .venv/bin/activate
pip install ansys-mechanical-core
```

Optional extras are installed with the base package when needed:

```bash
pip install ansys-mechanical-core[graphics]   # 3D visualization support
pip install ansys-mechanical-core[mcp]        # AI assistant integration via PyMechanical-MCP
```

**Complete when**

The command completes without error and `pip show ansys-mechanical-core` reports an installed version in the active virtual environment.

**Keep**

A record of the created virtual environment and the installed package version.

[PyMechanical installation guide](https://mechanical.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Verify that PyMechanical finds the Mechanical installation

**Activity**

The Mechanical installation is located from Python so that later launches resolve the correct executable. When Ansys is installed in a non-default location, the path is saved once.

**Example**

```python
from ansys.tools.common.path import find_mechanical

# Returns the executable path and the numeric version, for example 26.1
executable_path, version = find_mechanical()
print(executable_path, version)
```

**Complete when**

`find_mechanical()` returns a valid executable path and a version number that matches the installed Ansys Mechanical release.

**Keep**

The resolved executable path and version for reuse in later launch calls.

[Verify your installation](https://mechanical.docs.pyansys.com/version/stable/getting_started/installation.html#verify-your-installation)

### □ Start a first Mechanical session and print its banner

**Activity**

A first session is started in the chosen mode and the returned object is printed to confirm a live connection. Embedding mode is started with the `App` class and remote session mode is started with the `launch_mechanical` function.

**Example**

Embedding mode starts Mechanical inside the Python process:

```python
from ansys.mechanical.core import App

app = App()
print(app)   # Prints the Mechanical banner, product, and version
```

Remote session mode starts Mechanical as a separate server process:

```python
from ansys.mechanical.core import launch_mechanical

mechanical = launch_mechanical()
print(mechanical)   # Prints the Mechanical banner, product, and version
```

On Linux, embedding mode requires `mechanical-env` before Python starts:

```shell
mechanical-env python
```

**Complete when**

The printed banner shows the Ansys Mechanical product name and a version that matches the installed release.

**Keep**

The captured banner output as evidence of a working session.

[Launching PyMechanical](https://mechanical.docs.pyansys.com/version/stable/getting_started/running_mechanical.html)

**Stage outcome:** PyMechanical is installed and a verified Mechanical session can be started from Python.

---

## 2. Understand the control model

> **Outcome:** The embedding and remote session models are distinguished and the correct mode is chosen for a given workflow.

### □ Compare embedding mode and remote session mode

**Activity**

The two interaction models are compared so that a mode is chosen deliberately. Embedding mode runs Mechanical inside the Python process through .NET interop and exposes the full create, read, update, and delete (CRUD) object model directly. Remote session mode runs Mechanical as a separate server process over gRPC and sends commands as strings through `run_python_script()`.

**Example**

Embedding mode reads and writes the object model directly:

```python
from ansys.mechanical.core import App

app = App(globals=globals())
named_selection = Model.AddNamedSelection()   # Direct object access
named_selection.Name = "Inlet_face"
print(named_selection.Name)                    # Reads a property back
```

Remote session mode sends a script string and receives a string result:

```python
from ansys.mechanical.core import launch_mechanical

mechanical = launch_mechanical()
project_directory = mechanical.run_python_script(
    "ExtAPI.DataModel.Project.ProjectDirectory"
)
print(project_directory)
```

**Complete when**

A short written note records at least three differences, such as process model, application programming interface (API) style, and graphical user interface (GUI) support, and states which mode exposes the full object model.

**Keep**

The comparison note recording the chosen mode and the reason.

[Choose your mode](https://mechanical.docs.pyansys.com/version/stable/getting_started/choose_your_mode.html)

### □ Access the scripting entry points in embedding mode

**Activity**

The Mechanical scripting entry points are accessed from Python so that the object model can be traversed. Passing `globals()` to the `App` constructor promotes the entry points to the top level, matching built-in Mechanical scripting.

**Example**

```python
from ansys.mechanical.core import App

app = App(globals=globals())
# Entry points now available without the app prefix:
# ExtAPI, DataModel, Model, Tree, Graphics
analysis = Model.AddStaticStructuralAnalysis()
print(analysis.Name)
```

**Complete when**

The script adds an analysis through a promoted entry point and prints a property that confirms the object was created in the data model.

**Keep**

The script and the printed confirmation of the created analysis.

[Embedding mode overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/overview.html)

### □ Explain the string-based remote session model

**Activity**

The remote session control model is explained by observing that commands and results are exchanged as strings and that errors are raised Pythonically. This clarifies why the full object model is not exposed remotely.

**Example**

```python
from ansys.mechanical.core import launch_mechanical

mechanical = launch_mechanical()
result = mechanical.run_python_script("2 + 3")
print(result)   # Returns the string result of the evaluated command
```

An invalid command raises an error immediately:

```python
mechanical.run_python_script("2****3")   # Raises grpc.RpcError: unexpected token
```

**Complete when**

A short note records that remote commands and results are strings, that errors surface immediately, and that the object model is exposed directly only in embedding mode.

**Keep**

The note and the captured result and error behavior.

[Remote session overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/remote_session/overview.html)

**Stage outcome:** The correct interaction mode can be chosen and its control model explained for a given workflow.

---

## 3. Modify an existing workflow

> **Outcome:** An official example is run unchanged and then adapted to a new requirement.

### □ Run one official example unchanged and capture its output

**Activity**

One official example is run without modification so that a known-good baseline is established before any change is made. An embedding example uses the `App` class and a remote example uses `launch_mechanical()` and `run_python_script()`.

**Example**

The example is selected from the official galleries and run in the verified environment. An embedding example is chosen from the embedding gallery and a remote example is chosen from the remote gallery.

**Complete when**

The chosen example runs to completion in the verified environment and its documented output or result value is captured.

**Keep**

The unmodified example and the captured baseline output.

[PyMechanical examples](https://mechanical.docs.pyansys.com/version/stable/examples/index.html)

### □ Change one input in the example and observe the effect

**Activity**

A single input in the working example is changed, such as a named selection name, a load magnitude, or a material assignment. Only one change is made so that its effect is isolated.

**Example**

Starting from an embedding example, one property is changed and read back:

```python
from ansys.mechanical.core import App

app = App(globals=globals())
named_selection = Model.AddNamedSelection()
named_selection.Name = "Fixed_end"   # Changed input, previously a default name
print(named_selection.Name)
```

**Complete when**

The modified example runs and the captured output differs from the baseline in a way that matches the single change made.

**Keep**

The modified example, a note of the one change, and the before-and-after output.

[Scripting fundamentals](https://mechanical.docs.pyansys.com/version/stable/user_guide/scripting/overview.html)

### □ Locate the API behind one line of the example

**Activity**

One line of the example is traced to its Mechanical API so that its required inputs are understood rather than copied. The Mechanical scripting API documentation is used to confirm the object, method, or property.

**Example**

Example required from the content owner. The learner selects one line from the example being modified and records the API it calls, using the Mechanical scripting API documentation.

**Complete when**

The API used by the selected line is identified and its required inputs and return value are recorded from the documentation.

**Keep**

A short note mapping the chosen line to its documented API and inputs.

[Mechanical scripting API documentation](https://scripting.mechanical.docs.pyansys.com/)

**Stage outcome:** An official example can be run, changed with intent, and traced back to its underlying Mechanical API.

---

## 4. Run and assess a meaningful operation

> **Outcome:** A complete structural analysis is set up, solved, and its results are inspected.

### □ Add and configure a static structural analysis

**Activity**

A static structural analysis is added to the model and its objects are created through the data model. Units are set explicitly before loads and material parameters are defined.

**Example**

```python
from ansys.mechanical.core import App

app = App(globals=globals())
analysis = Model.AddStaticStructuralAnalysis()
print(analysis.Name)   # Confirms the analysis exists in the data model
```

**Complete when**

The analysis appears in the model tree and its name is printed back from the data model.

**Keep**

The setup script and the confirmation that the analysis was created.

[Embedding mode overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/overview.html)

### □ Solve the analysis

**Activity**

The configured analysis is solved after boundary conditions and loads are confirmed complete. Solving is performed only once the analysis settings are verified.

**Example**

Example required from the content owner for a complete, runnable solve sequence against a specific geometry. The solve step follows the model setup and precedes result inspection.

**Complete when**

The solver completes without error and the solved state is reflected in the model.

**Keep**

The solver log or completion status.

[PyMechanical examples](https://mechanical.docs.pyansys.com/version/stable/examples/index.html)

### □ Inspect and record the results

**Activity**

Results are read from the solved model so that engineering quantities are verified rather than assumed. The result values are recorded and sanity-checked against expectation.

**Example**

Example required from the content owner for reading specific result objects, such as total deformation and equivalent stress, from the solved model.

**Complete when**

At least one result quantity is read from the solved model and recorded with its units.

**Keep**

The recorded result values and a short note on whether they match expectation.

[Scripting fundamentals](https://mechanical.docs.pyansys.com/version/stable/user_guide/scripting/overview.html)

**Stage outcome:** A complete analysis can be set up, solved, and assessed from Python.

---

## 5. Build reusable automation

> **Outcome:** A parameterized, rerunnable script is produced that captures a full analysis.

### □ Turn the analysis into a parameterized function

**Activity**

The analysis steps are collected into a function whose inputs are passed as parameters rather than captured from the global scope. Environment-specific values, such as file paths and the Mechanical version, are parameterized.

**Example**

```python
from ansys.mechanical.core import App


def build_static_structural(app: App, selection_name: str):
    """Add a static structural analysis and a named selection to the model."""
    analysis = app.DataModel.Project.Model.AddStaticStructuralAnalysis()
    named_selection = app.DataModel.Project.Model.AddNamedSelection()
    named_selection.Name = selection_name
    return analysis, named_selection


app = App()
analysis, selection = build_static_structural(app, selection_name="Fixed_end")
print(analysis.Name, selection.Name)
```

**Complete when**

The function runs with supplied arguments and returns objects whose properties are printed to confirm creation, with no reliance on captured globals.

**Keep**

The reusable function and an example call with its output.

[Embedding mode overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/overview.html)

### □ Run a script from the command line

**Activity**

A script that omits the PyMechanical import statements is run inside Mechanical using the `ansys-mechanical` command line interface. This confirms the automation runs outside an interactive session.

**Example**

A script file contains only the object-model statements:

```python
# file.py
ns = DataModel.Project.Model.AddNamedSelection()
ns.Name = "Jarvis"
```

The script is run from the activated virtual environment:

```bash
ansys-mechanical -i file.py
```

The `-r` flag selects a specific Mechanical version when several are installed, and `-h` lists all options.

**Complete when**

The command runs the script inside Mechanical without error and the named selection is created.

**Keep**

The script file and the command output.

[ansys-mechanical command line interface](https://mechanical.docs.pyansys.com/version/stable/user_guide/cli/ansys-mechanical.html)

### □ Make the script rerunnable and save a checkpoint

**Activity**

The script is made idempotent where possible so that reruns do not corrupt state, and a project checkpoint is saved after expensive setup. This supports reliable reruns.

**Example**

Example required from the content owner for a project save call against a specific project. The checkpoint is saved after the setup steps complete.

**Complete when**

The script runs twice in succession without error and a saved project checkpoint is produced.

**Keep**

The rerunnable script and the saved checkpoint file.

[PyMechanical user guide](https://mechanical.docs.pyansys.com/version/stable/user_guide/index.html)

**Stage outcome:** A parameterized, command line runnable, rerunnable automation script is available.

---

## 6. Apply it to a personal use case

> **Outcome:** The automation is retargeted to a learner-supplied geometry and requirement.

### □ Define a personal analysis goal and inputs

**Activity**

A personal analysis goal is written down with its geometry, material, boundary conditions, and the result quantity of interest. This turns the automation into a concrete engineering task.

**Example**

Example required from the content owner, because the geometry and requirement are supplied by the learner. The goal statement lists the geometry file, material, supports, loads, and the target result.

**Complete when**

A written goal states the geometry, material, boundary conditions, and the result quantity to be reported.

**Keep**

The goal statement and the input geometry reference.

[Choose your mode](https://mechanical.docs.pyansys.com/version/stable/getting_started/choose_your_mode.html)

### □ Retarget the automation to the personal geometry

**Activity**

The parameterized function from stage 5 is called with the personal inputs so that the automation runs against the learner's geometry. Only the parameter values change, not the automation structure.

**Example**

Example required from the content owner, because the geometry and parameter values are learner-specific. The stage 5 function is called with the personal selection names, material, and loads.

**Complete when**

The automation runs against the personal geometry and produces the target result quantity.

**Keep**

The parameter set used and the produced result.

[PyMechanical examples](https://mechanical.docs.pyansys.com/version/stable/examples/index.html)

### □ Validate the personal result against expectation

**Activity**

The personal result is checked against a hand calculation, a known reference, or engineering judgement so that the automation is trusted. Any discrepancy is investigated and recorded.

**Example**

Example required from the content owner, because the reference value depends on the learner's geometry and loading.

**Complete when**

The personal result is compared against a reference and the comparison and any corrections are recorded.

**Keep**

The validation note comparing the computed result with the reference.

[Scripting fundamentals](https://mechanical.docs.pyansys.com/version/stable/user_guide/scripting/overview.html)

**Stage outcome:** The automation is trusted for a real, learner-supplied engineering task.

---

## 7. Use AI-assisted capabilities

> **Outcome:** PyMechanical-MCP is used to drive Mechanical from an AI assistant, with every generated action validated before it is trusted.

PyMechanical-MCP is a Model Context Protocol (MCP) server that connects AI assistants to Ansys Mechanical through PyMechanical. It uses PyMechanical remote session mode over gRPC and does not use embedding mode. The AI assistant suggests tool calls, and Mechanical executes and verifies the underlying operations. These two roles are kept separate throughout this stage.

### □ Install and start the PyMechanical-MCP server

**Activity**

PyMechanical-MCP is installed and started so that an MCP-compatible client can reach it. The default STDIO transport is used for clients such as Visual Studio Code and Claude Code, and the Streamable HTTP transport is used for remote deployments.

**Example**

```bash
pip install ansys-mechanical-mcp
ansys-mechanical-mcp                 # Default STDIO transport
```

The Streamable HTTP transport is used for remote or server-style deployments:

```bash
ansys-mechanical-mcp --transport http --http-host 127.0.0.1 --http-port 8080
```

**Complete when**

The server starts without error and an MCP-compatible client lists the offline-capable tools, such as `check_mechanical_installed` and `check_mechanical_status`.

**Keep**

The client configuration and a record of the discovered tool list.

[PyMechanical-MCP installation](https://mechanical-mcp.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Launch or connect to Mechanical through the assistant

**Activity**

A Mechanical session is established through the assistant so that live-session tools become available. The assistant is asked to check status first and then to launch or connect. Connection-dependent tools remain hidden until a session is established.

**Example**

The recommended first workflow is followed through the assistant:

1. The assistant calls `check_mechanical_status`.
2. The assistant calls `launch_mechanical` or `connect_to_mechanical`.

To connect to an existing gRPC-enabled session, the assistant calls `connect_to_mechanical` with a host and port, for example `ip=127.0.0.1` and `port=50053`.

**Complete when**

A session is established and live-session tools, such as `run_python_script` and `solve_analysis`, become available in the client.

**Keep**

A record of which tool established the session and the resulting available tool set.

[PyMechanical-MCP quick start](https://mechanical-mcp.docs.pyansys.com/version/stable/getting_started/quick_start.html)

### □ Drive a bounded workflow and validate every generated action

**Activity**

A single bounded workflow is driven through the assistant, and every generated tool call is validated against the documentation before it is trusted. The cantilever beam workflow is a suitable bounded task. Each generated `run_python_script` call is checked, the solved state is verified, and results are confirmed independently.

**Example**

The documented cantilever beam prompt drives the workflow, and each step maps to a named tool:

```text
Perform a static structural analysis of a cantilever beam.
Upload the geometry file beam.step.

- Material: Structural Steel (default)
- Mesh: default mesh with element size 5 mm
- Fixed support on the YZ face at X = -100 mm
- Pressure load of 1,000,000 pascals on the top face (XY face at Z = +5 mm)
- Results: Total Deformation and equivalent stress
- Take a screenshot of the equivalent stress result
```

The tool sequence is `upload_file`, then `run_python_script` for material, mesh, supports, and loads, then `solve_analysis`, then `screenshot`. After the run, `get_model_info` verifies the solved state and `get_mechanical_logs` surfaces warnings and errors. The `get_guidelines_for` tool is called at workflow boundaries, such as `meshing` and `analysis_setup`, to keep generated commands aligned with Mechanical practice.

**Complete when**

The workflow completes, the maximum deformation is observed at the free end with stress concentrated at the fixed support, and every generated tool call has been checked against the documentation with any corrections recorded.

**Keep**

The original prompt, the generated tool calls, the corrections made, the solved-state check from `get_model_info`, and the exported result or screenshot.

[PyMechanical-MCP tools and capabilities](https://mechanical-mcp.docs.pyansys.com/version/stable/user_guide/tools_and_capabilities.html)

**Human verification is required.** Generated code, tool arguments, engineering assumptions, numerical results, and screenshots are verified by the learner. `get_model_info` and `get_mechanical_logs` are used to confirm the solved state and to surface warnings before any result is trusted. MCP-suggested actions are treated as drafts, and Mechanical execution is treated as the source of truth.

**Stage outcome:** An AI assistant can drive a bounded Mechanical workflow through PyMechanical-MCP, with the learner validating every generated action.

---

## 8. Choose an advanced pathway

> **Outcome:** An advanced specialization is selected and its first capability is demonstrated.

### □ Optional pathway: run multiple instances with a remote pool

**Activity**

Multiple simultaneous Mechanical instances are managed with `LocalMechanicalPool` so that batches of analyses run concurrently in remote session mode.

**Example**

Example required from the content owner for a complete pool workflow. Remote session mode supports multiple instances through `LocalMechanicalPool`, unlike embedding mode, which allows one instance per Python process.

**Complete when**

More than one Mechanical instance is launched through a pool and a task is dispatched to each.

**Keep**

The pool script and the per-instance results.

[Remote session pool](https://mechanical.docs.pyansys.com/version/stable/user_guide/remote_session/pool.html)

### □ Optional pathway: control licensing programmatically

**Activity**

License checkout is controlled with the `LicenseManager` class so that specific licenses are selected and idle licenses are released. License management features require Ansys Mechanical 2025 R2 or later.

**Example**

```python
from ansys.mechanical.core import App

# Start in read-only mode without checking out a license
app = App(readonly=True)
app.license_manager.show()                       # List licenses and status
app.license_manager.enable_session_license("Ansys Mechanical Premium")
print(app.readonly)                              # False once a license is checked out
```

**Complete when**

A license is inspected, checked out for the session, and released, with the read-only status confirmed at each step.

**Keep**

The licensing script and the recorded read-only status transitions.

[License management](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/licensing.html)

### □ Optional pathway: deploy in Docker or CI/CD

**Activity**

Remote session mode is deployed in a container or continuous integration pipeline so that analyses run in an isolated, reproducible environment. Remote session mode is the recommended mode for CI/CD and Docker.

**Example**

Example required from the content owner for a specific container or pipeline definition. The Docker setup guide provides the container configuration for remote session mode.

**Complete when**

A containerized or pipeline run launches Mechanical in remote session mode and completes an analysis without manual intervention.

**Keep**

The container or pipeline definition and the run log.

[Docker setup](https://mechanical.docs.pyansys.com/version/stable/getting_started/docker.html)

**Stage outcome:** An advanced specialization is selected and its first capability is demonstrated.

---

## Troubleshooting

For troubleshooting and support:

- **Documentation and resources:** The [Synopsys Developer Portal](https://developer.synopsys.com/) is the central entry point.
- **Usage questions:** Questions about how to use the library are posted on the [Synopsys Developer Forum](https://developerforum.synopsys.com/).
- **Development questions:** Questions about developing or contributing to the library are raised on the project's [GitHub repository](https://github.com/ansys/pymechanical).

Product-specific launch, licensing, and connection issues are also covered in the PyMechanical troubleshooting guide.

[PyMechanical troubleshooting](https://mechanical.docs.pyansys.com/version/stable/getting_started/troubleshooting.html)

## Reference shelf

### Essential documentation

- [PyMechanical documentation](https://mechanical.docs.pyansys.com/)
- [PyMechanical getting started](https://mechanical.docs.pyansys.com/version/stable/getting_started/index.html)
- [PyMechanical user guide](https://mechanical.docs.pyansys.com/version/stable/user_guide/index.html)
- [PyMechanical architecture](https://mechanical.docs.pyansys.com/version/stable/architecture.html)
- [Mechanical scripting API documentation](https://scripting.mechanical.docs.pyansys.com/)

### Official examples

- [PyMechanical examples](https://mechanical.docs.pyansys.com/version/stable/examples/index.html)
- [Embedding mode examples](https://embedding.examples.mechanical.docs.pyansys.com/examples/index.html)
- [Remote session mode examples](https://examples.mechanical.docs.pyansys.com/examples/index.html)

### AI-related resources

- [PyMechanical-MCP documentation](https://mechanical-mcp.docs.pyansys.com/)
- [PyMechanical-MCP overview](https://mechanical-mcp.docs.pyansys.com/version/stable/user_guide/overview.html)
- [PyMechanical-MCP tools and capabilities](https://mechanical-mcp.docs.pyansys.com/version/stable/user_guide/tools_and_capabilities.html)
- [PyMechanical-MCP best practices](https://mechanical-mcp.docs.pyansys.com/version/stable/user_guide/best_practices.html)

### Source and contribution

- [PyMechanical GitHub repository](https://github.com/ansys/pymechanical)
- [PyMechanical-MCP GitHub repository](https://github.com/ansys/pymechanical-mcp)
- [PyMechanical discussions](https://github.com/ansys/pymechanical/discussions)

## Sources

- PyMechanical documentation (https://mechanical.docs.pyansys.com/): index, getting started, installation, choose your mode, running Mechanical, architecture, embedding overview, remote session overview, scripting fundamentals, licensing, command line interface, examples index, and user guide index.
- PyMechanical-MCP documentation (https://mechanical-mcp.docs.pyansys.com/): index, installation, quick start, overview, tools and capabilities, best practices, and the cantilever beam workflow example.
- Ansys Developer Product Guide, Structures section, Ansys Mechanical and MAPDL developer tools.