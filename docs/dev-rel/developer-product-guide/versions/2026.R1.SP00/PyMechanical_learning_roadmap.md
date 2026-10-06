# PyMechanical learning roadmap

PyMechanical (`ansys-mechanical-core`) is the open-source Python interface to Ansys Mechanical, the finite element analysis software for structural engineering. It is used to automate and script Mechanical from Python, covering model setup, meshing, boundary conditions, solving, and results review. PyMechanical offers two modes of working with Mechanical, and this roadmap builds capability one concrete step at a time, starting with the mode best suited to interactive learning.

PyMechanical provides two modes:

- **Embedding mode:** Mechanical runs inside the Python process through the `App` class, giving direct access to the Mechanical object model with fast startup. It is well suited to notebooks and interactive scripting and runs in batch mode only.
- **Remote session mode:** Mechanical runs as a separate server process reached over gRPC through `launch_mechanical()`, with optional graphical user interface (GUI) support. It is well suited to continuous integration, Docker, and automation, and Python is sent as script strings.

The beginner path in this roadmap uses embedding mode, because it gives direct object-model access for interactive learning. Remote session mode is introduced where it is the better fit, and the AI-assisted stage uses it because the Mechanical MCP server is built on remote session mode.

## Your learning journey

**1. Get it working**  
PyMechanical is installed and an embedded Mechanical session is created from Python.

**2. Understand the control model**  
The Mechanical object model is navigated and read through the `App` entry points.

**3. Modify an existing workflow**  
An official example is run and then altered, and the effect is observed.

**4. Run and assess a meaningful operation**  
An analysis is solved and a result quantity is extracted and checked.

**5. Build reusable automation**  
A parameterized function drives a full setup-and-solve from inputs.

**6. Apply it to a personal use case**  
The automation is pointed at a personal model and validated.

**7. Use AI-assisted capabilities**  
The Mechanical MCP server is used to launch, script, solve, and inspect, with every step verified.

**8. Choose an advanced pathway**  
A specialized direction such as remote sessions, pools, or the command-line interface is selected.

---

## 1. Get PyMechanical working

> **Outcome:** PyMechanical is installed and an embedded Mechanical session is created from Python.

A licensed copy of Ansys Mechanical must be installed, and the installed version determines the available interface and features. PyMechanical is compatible with Mechanical 2024 R2 and later on Windows and Linux.

### □ Install PyMechanical into a virtual environment

**Activity**

Create and activate a virtual environment, then install the `ansys-mechanical-core` package. Python 3.12 through Python 3.14 on Windows, Linux, and macOS is supported.

**Example**

```bash
python -m venv .venv
# Windows
.venv\Scripts\activate
# Linux and macOS
source .venv/bin/activate
pip install ansys-mechanical-core
```

**Complete when**

The environment is active and `pip show ansys-mechanical-core` reports a version.

**Keep**

A short note recording the Python version and the installed PyMechanical version.

[PyMechanical installation guide](https://mechanical.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Confirm that Mechanical can be located

**Activity**

Confirm that a licensed Ansys Mechanical installation is present and that PyMechanical can find it. The installed version determines the features that are available.

**Example**

```python
from ansys.tools.common.path import find_mechanical

find_mechanical()
# ('C:/Program Files/ANSYS Inc/v261/aisol/bin/winx64/AnsysWBU.exe', 26.1)  # Windows
```

**Complete when**

`find_mechanical()` returns a path and a version number.

**Keep**

The reported Mechanical path and version.

[Verify your installation](https://mechanical.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Start Python and import PyMechanical

**Activity**

Open a Python interpreter in the active environment and import the `App` class. Importing is a separate, concrete step from creating a session. On Linux, Python is started with `mechanical-env python` so the required environment is set before Python starts.

**Example**

```python
from ansys.mechanical.core import App
```

**Complete when**

The import returns without error.

**Keep**

The import line, which begins every embedding script.

[Running Mechanical](https://mechanical.docs.pyansys.com/version/stable/getting_started/running_mechanical.html)

### □ Create an embedded Mechanical session

**Activity**

Create an embedded Mechanical instance with the `App` class and print it to confirm it started. Passing `globals()` to the constructor makes the Mechanical scripting entry points such as `Model` and `DataModel` available without the `app.` prefix.

**Example**

```python
from ansys.mechanical.core import App

app = App(globals=globals())
print(app)
# Ansys Mechanical [Ansys Mechanical Enterprise]
# Product Version: 261
```

**Complete when**

The session prints its product name and version.

**Keep**

The working session-creation script.

[Embedding mode overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/overview.html)

**Stage outcome:** PyMechanical is installed and an embedded Mechanical session is created and confirmed from Python.

---

## 2. Understand the control model

> **Outcome:** The Mechanical object model is navigated and read through the `App` entry points.

### □ Add an analysis and read the model tree

**Activity**

Add a static structural analysis to the model, which creates the tree branches used by every later step. The `Model` entry point is available because `globals()` was passed to the `App` constructor.

**Example**

```python
from ansys.mechanical.core import App

app = App(globals=globals())
analysis = Model.AddStaticStructuralAnalysis()
print(analysis.Name)
# Static Structural
```

**Complete when**

The analysis is added and its name is printed.

**Keep**

The script that adds an analysis and the printed name.

[Embedding mode overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/overview.html)

### □ Create and rename a named selection

**Activity**

Create a named selection through the object model and set a property on it. Direct object access is the defining feature of embedding mode.

**Example**

```python
named_selection = Model.AddNamedSelection()
named_selection.Name = "fixed_face"   # readable name used later for scoping
print(named_selection.Name)
# fixed_face
```

**Complete when**

The named selection is created and its new name is read back.

**Keep**

A short list of the object-model entry points used and what each returned.

[Globals and scripting entry points](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/globals.html)

### □ Choose the mode that fits the task

**Activity**

Review the two modes so later work uses the right one. Embedding mode gives direct object access in-process. Remote session mode runs Mechanical as a separate server over gRPC, supports the GUI, and sends Python as script strings through `run_python_script()`.

**Example**

```python
# Remote session mode, for GUI, isolation, or automation
from ansys.mechanical.core import launch_mechanical

mechanical = launch_mechanical()   # separate server process over gRPC
result = mechanical.run_python_script("2+3")
print(result)
# 5
```

**Complete when**

The difference between the two modes is recorded and the mode for the next task is chosen.

**Keep**

A one-line note of which mode fits the intended workflow and why.

[Choose your mode](https://mechanical.docs.pyansys.com/version/stable/getting_started/choose_your_mode.html)

**Stage outcome:** The Mechanical object model is navigated and read, and the right mode for a task is chosen with reason.

---

## 3. Modify an existing workflow

> **Outcome:** An official example is run unchanged, then altered, and the difference in result is observed.

### □ Run one official embedding example unchanged

**Activity**

Run one end-to-end embedding example from the example gallery exactly as published and capture its reported output. Some examples require a specific Mechanical license level, so a license-related failure does not necessarily indicate a PyMechanical setup problem.

**Example**

```python
# Run one published embedding-mode example from the PyMechanical example gallery
# unchanged, then record the result it reports.
```

**Complete when**

The example completes and its reported result is saved.

**Keep**

The unchanged script and a copy of its output.

[PyMechanical examples](https://mechanical.docs.pyansys.com/version/stable/examples/index.html)

### □ Change one input and observe the effect

**Activity**

In a copy of the example, change one documented input, such as a load value or a material assignment, and compare the result with the baseline run.

**Example**

Example input change required from the content owner, because the specific editable input depends on the chosen gallery example.

**Complete when**

The changed input is applied and the new result is compared with the baseline.

**Keep**

The modified script and a two-line before-and-after comparison.

[PyMechanical examples](https://mechanical.docs.pyansys.com/version/stable/examples/index.html)

### □ Confirm a change took effect through the object model

**Activity**

After making a change, read the affected property back through the object model to confirm it holds the expected value.

**Example**

```python
named_selection.Name = "support_face"
print(named_selection.Name)   # confirm the change was applied
# support_face
```

**Complete when**

The property is set and the read-back confirms the new value.

**Keep**

The before-and-after value of the property that was changed.

[Globals and scripting entry points](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/globals.html)

**Stage outcome:** An official workflow is modified with intent and the resulting change is verified.

---

## 4. Run and assess a meaningful operation

> **Outcome:** An analysis is solved and a result quantity is extracted and sanity-checked.

### □ Complete a minimal analysis setup

**Activity**

Starting from a loaded or imported model, complete the minimum setup needed to solve, which is an analysis, a material assignment, a mesh, and boundary conditions. Setup steps that depend on a specific model are drawn from the matching gallery example.

**Example**

Example setup code required from the content owner, because a complete, runnable setup depends on the specific geometry and license level used.

**Complete when**

The model has an analysis, a mesh, and boundary conditions defined.

**Keep**

The setup script up to the point of solving.

[PyMechanical examples](https://mechanical.docs.pyansys.com/version/stable/examples/index.html)

### □ Solve the analysis

**Activity**

Solve the configured analysis and confirm that the solve completes. In remote session mode, the solve is driven by sending the Mechanical solve command through `run_python_script()`.

**Example**

```python
# Remote session mode example: solve through a Mechanical script string
from ansys.mechanical.core import launch_mechanical

mechanical = launch_mechanical()
mechanical.run_python_script("Model.Analyses[0].Solution.Solve(True)")
```

**Complete when**

The solve completes without error.

**Keep**

A note of the analysis type solved and the solve outcome.

[Remote session overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/remote_session/overview.html)

### □ Extract and sanity-check a result quantity

**Activity**

After solving, read a result quantity such as a maximum deformation or stress, and check that its value and units are physically reasonable.

**Example**

Example result-extraction code required from the content owner, because the exact result object depends on the analysis set up in the preceding milestone.

**Complete when**

A post-solution quantity is returned and its value is confirmed to be reasonable.

**Keep**

The extracted quantity and a one-line reasonableness check.

[PyMechanical examples](https://mechanical.docs.pyansys.com/version/stable/examples/index.html)

**Stage outcome:** An analysis is solved from Python and a result quantity is extracted and assessed.

---

## 5. Build reusable automation

> **Outcome:** A parameterized function performs a full setup, solve, and result extraction from explicit inputs.

### □ Wrap a setup-and-solve in a function that takes the app

**Activity**

Write a function that receives the `App` instance and model inputs as explicit parameters rather than reading a module-level global. Passing the app in keeps the function reusable and testable.

**Example**

```python
def run_static_analysis(app, named_selection_name):
    """Add a static structural analysis and a named selection, then return them."""
    analysis = app.DataModel.Project.Model.AddStaticStructuralAnalysis()
    named_selection = app.DataModel.Project.Model.AddNamedSelection()
    named_selection.Name = named_selection_name
    return analysis, named_selection
```

**Complete when**

The function runs end to end when given an app and an input and returns the created objects.

**Keep**

The reusable function.

[Embedding mode overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/overview.html)

### □ Parameterize environment-specific inputs

**Activity**

Replace hard-coded file paths, names, and solve options with parameters so the automation runs on other machines without edits.

**Example**

```python
def setup_from_inputs(app, geometry_path, support_name):
    # geometry_path and support_name are supplied by the caller, not hard-coded
    return run_static_analysis(app, support_name)
```

**Complete when**

No model input is hard-coded inside the function body and all inputs arrive as arguments.

**Keep**

The parameterized entry point and an example call with sample inputs.

### □ Manage the session lifecycle cleanly

**Activity**

Start one embedded session per Python process, because embedding mode supports a single instance per process, and let the process end cleanly when the work is complete. For remote sessions, `cleanup_on_exit` controls whether Mechanical exits at the end of the script.

**Example**

```python
from ansys.mechanical.core import App

app = App(globals=globals())
setup_from_inputs(app, geometry_path="model.agdb", support_name="fixed_face")
# One embedded instance per Python process; the session ends when the process exits.
```

**Complete when**

The script completes and the embedded session ends with the process.

**Keep**

The lifecycle pattern as a reusable template.

[Choose your mode](https://mechanical.docs.pyansys.com/version/stable/getting_started/choose_your_mode.html)

**Stage outcome:** A reusable, parameterized automation performs a full workflow and manages its session cleanly.

---

## 6. Apply it to a personal use case

> **Outcome:** The reusable automation is pointed at a personal model and its result is validated.

### □ Adapt the automation to a personal model

**Activity**

Supply a personal geometry and adjust the analysis type, material, and boundary conditions to match the intended physics, confirming object names against the model tree as the script runs.

**Example**

Example adaptation code required from the content owner, because it depends on the personal geometry and analysis chosen.

**Complete when**

The automation runs on the personal model and produces a result.

**Keep**

The adapted script and the list of settings that differ from the example.

[PyMechanical examples](https://mechanical.docs.pyansys.com/version/stable/examples/index.html)

### □ Validate the personal result against expectation

**Activity**

Compare the extracted result with a known reference, a hand calculation, or a prior Mechanical GUI run, and record whether it matches within tolerance.

**Example**

Example comparison data required from the content owner, because a personal reference value depends on the chosen model.

**Complete when**

The result is compared with a reference and the agreement or discrepancy is recorded.

**Keep**

The comparison record and any follow-up actions.

**Stage outcome:** A personally relevant simulation is automated and its result is validated.

---

## 7. Use AI-assisted capabilities

> **Outcome:** The Mechanical MCP server is used to launch, script, solve, and inspect Mechanical, with every generated step verified by the learner.

A tool built on PyMechanical can add AI-assisted interaction on top of it. PyMechanical-MCP is such a tool. It is a Model Context Protocol (MCP) server that connects an AI assistant to Ansys Mechanical through PyMechanical, and it uses PyMechanical remote session mode over gRPC rather than embedding mode. The assistant discovers and calls tools such as `launch_mechanical`, `run_python_script`, `solve_analysis`, and `get_model_info`, while the learner verifies every generated step. The PyMechanical-MCP integration is also installable through the `mcp` optional extra of PyMechanical.

### □ Install and start the MCP server and connect an assistant

**Activity**

Install the MCP integration and start the server, then connect an MCP-compatible client. The detailed per-client setup is kept in the PyMechanical-MCP documentation rather than reproduced here.

**Example**

```bash
pip install ansys-mechanical-core[mcp]
ansys-mechanical-mcp
```

**Complete when**

The MCP server is running and a client reports the available tools.

**Keep**

A note of the client used and that the tool list was discovered.

[PyMechanical-MCP quick start](https://mechanical-mcp.docs.pyansys.com/)

### □ Check status and connect Mechanical through the assistant

**Activity**

Ask the assistant to check the installation and status with offline-capable tools, then launch or connect to Mechanical. Live-session tools stay hidden until a connection is established, which is expected behavior.

**Example prompt**

> "Check whether Mechanical is installed and its current status, then launch a new Mechanical session in batch mode."

The assistant calls `check_mechanical_installed`, `check_mechanical_status`, and then `launch_mechanical`. The learner confirms the reported status before continuing.

**Complete when**

A Mechanical session is launched or connected through the assistant and its status is confirmed.

**Keep**

The status output and the connection result.

[PyMechanical-MCP tools and capabilities](https://mechanical-mcp.docs.pyansys.com/)

### □ Generate a setup script, review it, and solve

**Activity**

Ask the assistant to generate a Mechanical setup script, review every line against the PyMechanical documentation before running it, apply it with `run_python_script`, solve with `solve_analysis`, then verify with `get_model_info`. Because these tools mutate and solve a live Mechanical session, each generated step is checked before it is trusted.

**Example prompt**

> "Generate a Mechanical script that adds a static structural analysis and a fixed support, show me the script before running it, then solve and summarize the model."

The assistant uses `get_guidelines_for` for the relevant topic, generates the script, and the learner reviews it against the object-model documentation. The script is applied with `run_python_script`, solved with `solve_analysis`, and verified with `get_model_info`, and any corrections the learner made are recorded.

**Complete when**

The reviewed script is applied, the analysis is solved, and the model summary confirms the result, and any corrections are recorded.

**Keep**

The original prompt, the generated script, the corrected script, the solve outcome, and the `get_model_info` summary.

[PyMechanical-MCP best practices](https://mechanical-mcp.docs.pyansys.com/)

**Stage outcome:** The Mechanical MCP server is used to drive a full launch-to-solve workflow, and every generated step is verified before it is trusted.

---

## 8. Choose an advanced pathway

> **Outcome:** One specialized direction is selected and a first concrete task in it is completed.

### □ Pathway: remote sessions and the GUI

**Activity**

Launch Mechanical as a remote session with the GUI enabled and send a command through `run_python_script()`.

**Example**

```python
from ansys.mechanical.core import launch_mechanical

mechanical = launch_mechanical(batch=False)   # GUI session
print(mechanical.run_python_script("ExtAPI.DataModel.Project.ProjectDirectory"))
```

**Complete when**

A remote GUI session starts and a command returns a result.

**Keep**

The remote-session script and its output.

[Remote session overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/remote_session/overview.html)

### □ Pathway: multiple instances with a pool

**Activity**

Explore running several Mechanical instances at once with a local pool for throughput.

**Example**

Example pool code required from the content owner for a specific multi-instance task.

**Complete when**

More than one instance runs under a pool and a task is dispatched.

**Keep**

The chosen pool configuration and the first script produced.

[Remote session user guide](https://mechanical.docs.pyansys.com/version/stable/user_guide/remote_session/overview.html)

### □ Pathway: the command-line interface

**Activity**

Run a PyMechanical embedding script from the command line with the `ansys-mechanical` command, which is useful for batch and automation.

**Example**

```bash
ansys-mechanical -i file.py
```

**Complete when**

A script runs to completion through the command-line interface.

**Keep**

The command used and the script it ran.

[Embedding mode overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/overview.html)

**Stage outcome:** A specialized pathway is chosen and a first task in it is completed.

---

## Troubleshooting

For troubleshooting and support:

- **Documentation and resources:** The [Synopsys Developer Portal](https://developer.synopsys.com/) is the central entry point.
- **Usage questions:** Questions about how to use the library are posted on the [Synopsys Developer Forum](https://developerforum.synopsys.com/).
- **Development questions:** Questions about developing or contributing to the library are raised on the project's GitHub repository, [PyMechanical on GitHub](https://github.com/ansys/pymechanical).

## Reference shelf

### Essential documentation

- [PyMechanical documentation](https://mechanical.docs.pyansys.com/)
- [PyMechanical installation guide](https://mechanical.docs.pyansys.com/version/stable/getting_started/installation.html)
- [Choose your mode](https://mechanical.docs.pyansys.com/version/stable/getting_started/choose_your_mode.html)
- [Running Mechanical](https://mechanical.docs.pyansys.com/version/stable/getting_started/running_mechanical.html)
- [Embedding mode overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/overview.html)
- [Remote session overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/remote_session/overview.html)

### Official examples

- [PyMechanical examples](https://mechanical.docs.pyansys.com/version/stable/examples/index.html)

### Optional training

- [Exploring PyMechanical access methods: a brief overview (Synopsys Developer Portal)](https://developer.synopsys.com/blog/exploring-pymechanical-access-methods-brief-overview)
- [PyAnsys Training: Overview of PyMAPDL and PyMechanical](https://www.youtube.com/watch?v=Qh4Y07OZdms)

### AI-related resources

- [PyMechanical-MCP documentation](https://mechanical-mcp.docs.pyansys.com/)

### Source and contribution

- [PyMechanical GitHub repository](https://github.com/ansys/pymechanical)
- [PyMechanical-MCP GitHub discussions](https://github.com/ansys/pymechanical-mcp/discussions)

## Sources

- PyMechanical documentation (https://mechanical.docs.pyansys.com/) — index, installation, choose your mode, running Mechanical, embedding overview, globals, remote session overview, and examples pages.
- PyMechanical-MCP documentation (https://mechanical-mcp.docs.pyansys.com/) — index, overview, quick start, tools and capabilities, and best practices pages.
- Developer Product Guide, Structures section — Ansys Mechanical and MAPDL developer tooling and training links.
