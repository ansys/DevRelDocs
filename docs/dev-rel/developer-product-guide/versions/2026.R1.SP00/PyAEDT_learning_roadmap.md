# PyAEDT learning roadmap

PyAEDT is the open-source Python client library that interacts directly with the Ansys Electronics Desktop (AEDT) API, enabling automation of electromagnetic, thermal, and electronics design workflows. This roadmap measures capability rather than page visits. Each milestone produces a demonstrable skill, an observable result, or a reusable artifact. PyAEDT requires Ansys Electronics Desktop 2022 R1 or later, and the AEDT Student Version is supported.

PyAEDT spans many AEDT applications, including HFSS, Maxwell 2D and 3D, Q3D Extractor, Icepak, Circuit (Nexxim), and Twin Builder. The class and method structures are reused across these applications, so a skill learned in one application transfers to the others. This roadmap uses HFSS as the worked example, and every milestone notes where the same pattern applies to other applications.

## Your learning journey

**1. Get it working**  
PyAEDT is installed and a first AEDT session is launched non-graphically and verified.

**2. Understand the control model**  
The `Desktop` session lifecycle is understood and one target application is chosen and instantiated.

**3. Modify an existing workflow**  
A working official example is run unchanged and then adapted to a new requirement.

**4. Run and assess a meaningful operation**  
A design is built, a setup is created, the design is solved, and a result is extracted and checked.

**5. Build reusable automation**  
A parameterized function is produced that captures a full design-to-result run with deterministic cleanup.

**6. Apply it to a personal use case**  
The automation is retargeted to a learner-supplied design and requirement.

**7. Use AI-assisted capabilities**  
A tool built on PyAEDT is used to drive AEDT from an AI assistant, with every generated action validated.

**8. Choose an advanced pathway**  
An advanced specialization is selected, such as a second application, parametric variables, or remote client-server.

---

## Prerequisites

> **Outcome:** The environment required by every later stage is confirmed present.

A licensed local installation of Ansys Electronics Desktop 2022 R1 or later is required, because PyAEDT interacts directly with the AEDT API. Python 3.10 through Python 3.13 is supported on CPython, and a virtual environment is recommended. On Linux, environment variables must be set before launching Python, for example `export ANSYSEM_ROOT261=/path/to/AnsysEM/v261/AnsysEM` and the matching `LD_LIBRARY_PATH`, where the version suffix matches the installed AEDT release.

---

## 1. Get PyAEDT working

> **Outcome:** PyAEDT is installed and a first AEDT session is launched non-graphically and verified.

### □ Install PyAEDT into a virtual environment

**Activity**

PyAEDT is installed from PyPI into a virtual environment so that it does not conflict with other packages. The `[all]` extra pulls in optional components.

**Example**

```bash
python -m venv .venv
# Windows: .venv\Scripts\activate    Linux: source .venv/bin/activate
python -m pip install --upgrade pip
pip install pyaedt[all]
```

**Complete when**

The command completes without error and `pip show pyaedt` reports an installed version in the active virtual environment.

**Keep**

A record of the created virtual environment and the installed package version.

[PyAEDT installation](https://aedt.docs.pyansys.com/version/stable/Getting_started/Installation.html)

### □ Confirm the AEDT installation and version

**Activity**

The AEDT installation is confirmed and the target release is identified so that a session can be launched against the correct version. On Linux, the AEDT root environment variable is confirmed present.

**Example**

On Linux, the environment variables are set for the installed release, for example AEDT 2026 R1:

```bash
export ANSYSEM_ROOT261=/path/to/AnsysEM/v261/AnsysEM
export LD_LIBRARY_PATH=$ANSYSEM_ROOT261:$LD_LIBRARY_PATH
```

On Windows, the Ansys installer sets the environment, so the installed release is confirmed rather than set.

**Complete when**

The target AEDT release is identified and, on Linux, the `ANSYSEM_ROOT<XYZ>` variable for that release is present in the shell that runs Python.

**Keep**

A note of the AEDT release and version string, such as `2026.1`.

[Versions and interfaces](https://aedt.docs.pyansys.com/version/stable/Getting_started/versioning.html)

### □ Launch a first AEDT session non-graphically

**Activity**

A first AEDT session is launched in non-graphical mode with the `Desktop` context manager so that startup is verified without opening the graphical user interface. The context manager ensures the session closes deterministically.

**Example**

```python
import ansys.aedt.core

with ansys.aedt.core.Desktop(
    version="2026.1",
    non_graphical=True,
    new_desktop=True,
    close_on_exit=True,
) as desktop:
    print(desktop.aedt_version_id)   # Confirms a live AEDT session
# AEDT is automatically closed here.
```

**Complete when**

The session launches without error, the AEDT version identifier prints, and AEDT closes automatically on leaving the context manager.

**Keep**

The script and the captured version identifier.

[Basic tutorial](https://aedt.docs.pyansys.com/version/stable/User_guide/intro.html)

**Stage outcome:** PyAEDT is installed and a verified AEDT session can be launched non-graphically.

---

## 2. Understand the control model

> **Outcome:** The `Desktop` session lifecycle is understood and one target application is chosen and instantiated.

### □ Understand the Desktop session lifecycle

**Activity**

The `Desktop` session model is understood so that AEDT is started or attached deliberately and released cleanly. The `close_on_exit`, `new_desktop`, and `non_graphical` arguments are examined, and the difference between a context manager and direct construction is recorded.

**Example**

Inside a context manager, cleanup is deterministic:

```python
from ansys.aedt.core import Desktop, Hfss

with Desktop(version="2026.1", non_graphical=True, new_desktop=True) as desktop:
    hfss = Hfss()   # Application is created within the managed session
    # Work with AEDT here.
# AEDT is automatically closed here.
```

Used directly, the session is released explicitly:

```python
import ansys.aedt.core

desktop = ansys.aedt.core.Desktop(version="2026.1", non_graphical=True, new_desktop=False)
hfss = ansys.aedt.core.Hfss()
# Work with AEDT here.
desktop.release_desktop(close_projects=False, close_desktop=False)
```

**Complete when**

A short note records that a context manager closes AEDT on exit, that `new_desktop=True` starts a new session while `new_desktop=False` attaches to an existing one, and that `release_desktop()` gives explicit control.

**Keep**

The note and both launch patterns.

[Desktop sessions](https://aedt.docs.pyansys.com/version/stable/User_guide/desktop_sessions.html)

### □ Choose one target application and instantiate it

**Activity**

One target AEDT application is chosen so that later stages have a concrete focus, and its class is instantiated. The application classes share a consistent structure, so the chosen application transfers to the others. HFSS is used as the worked example, and the same pattern applies to `Maxwell3d`, `Icepak`, `Circuit`, and other applications.

**Example**

```python
from ansys.aedt.core import Desktop, Hfss

with Desktop(version="2026.1", non_graphical=True, new_desktop=True):
    hfss = Hfss(designname="MyFirstDesign")   # Swap Hfss for Maxwell3d, Icepak, Circuit, etc.
    print(hfss.design_name)
```

**Complete when**

The chosen application is instantiated, a design is created, and a design property such as the design name prints.

**Keep**

A note of the chosen application and the script that instantiates it.

[Basic tutorial](https://aedt.docs.pyansys.com/version/stable/User_guide/intro.html)

### □ Create and save a project, then release the desktop

**Activity**

A project is created, saved, and the desktop is released so that the full open-work-release cycle is exercised. Saving before release ensures the work persists.

**Example**

```python
import ansys.aedt.core

cir = ansys.aedt.core.Circuit(non_graphical=True)
cir.save_project(my_path)
# Work with the design here.
cir.release_desktop(close_projects=True, close_desktop=True)
# Desktop is released here.
```

**Complete when**

A project is saved to a chosen path and the desktop is released without leaving an orphaned AEDT process.

**Keep**

The saved project path and the release confirmation.

[Basic tutorial](https://aedt.docs.pyansys.com/version/stable/User_guide/intro.html)

**Stage outcome:** The `Desktop` lifecycle is understood, and one target application is chosen, instantiated, saved, and released.

---

## 3. Modify an existing workflow

> **Outcome:** An official example is run unchanged and then adapted to a new requirement.

### □ Run one official example unchanged and capture its output

**Activity**

One official example is run without modification so that a known-good baseline is established before any change is made. An example for the chosen application is selected from the official examples gallery.

**Example**

The example is selected from the official gallery for the chosen application, such as an HFSS antenna example, and run in the verified environment.

**Complete when**

The chosen example runs to completion in the verified environment and its documented output or a final result value is captured.

**Keep**

The unmodified example and the captured baseline output.

[PyAEDT examples gallery](https://examples.aedt.docs.pyansys.com/)

### □ Change one geometry or setup input and observe the effect

**Activity**

A single input in the working example is changed, such as a geometry dimension, a material, or a setup property. Only one change is made so that its effect is isolated. Setup properties are edited through the `props` dictionary.

**Example**

```python
from ansys.aedt.core import Hfss

hfss = Hfss()
setup = hfss.setups[0]
setup.props["MaximumPasses"] = 10   # Single changed setup input
setup.update()
```

**Complete when**

The modified example runs and the captured output differs from the baseline in a way that matches the single change made.

**Keep**

The modified example, a note of the one change, and the before-and-after output.

[Setup](https://aedt.docs.pyansys.com/version/stable/User_guide/setup.html)

### □ Locate the API behind one line of the example

**Activity**

One line of the example is traced to its PyAEDT method so that its required inputs are understood rather than copied. The API reference is used to confirm the class, method, and parameters.

**Example**

A modeler or setup call from the example is selected, such as `hfss.modeler.create_box(...)` or `hfss.create_setup(...)`, and its parameters are confirmed in the API reference.

**Complete when**

The method used by the selected line is identified and its required inputs and return value are recorded from the API reference.

**Keep**

A short note mapping the chosen line to its documented method and inputs.

[PyAEDT API reference](https://aedt.docs.pyansys.com/version/stable/API/index.html)

**Stage outcome:** An official example can be run, changed with intent, and traced back to its underlying PyAEDT API.

---

## 4. Run and assess a meaningful operation

> **Outcome:** A design is built, a setup is created, the design is solved, and a result is extracted and checked.

### □ Build geometry and assign boundaries

**Activity**

Geometry is created through the modeler and boundaries are assigned so that a solvable design is defined. Dimensions and materials are parameterized as strings with units.

**Example**

```python
from ansys.aedt.core import Hfss

hfss = Hfss(non_graphical=True)
substrate = hfss.modeler.create_box(
    origin=[0, 0, 0],
    sizes=["40mm", "40mm", "1.6mm"],
    name="Substrate",
    material="FR4_epoxy",
)
ground = hfss.modeler.create_rectangle(
    orientation="XY", origin=[0, 0, 0], sizes=["40mm", "40mm"], name="Ground"
)
hfss.assign_perfecte_to_sheets(ground.name)
```

**Complete when**

The geometry objects are created and at least one boundary is assigned, confirmed by listing the modeler objects.

**Keep**

The geometry script and the list of created objects.

[Modeler](https://aedt.docs.pyansys.com/version/stable/User_guide/modeler.html)

### □ Create a setup and solve the design

**Activity**

An analysis setup is created and the design is solved so that a result is produced. The project is saved before the solve so that the work persists.

**Example**

```python
from ansys.aedt.core import Hfss

hfss = Hfss(non_graphical=True)
setup = hfss.create_setup(name="Setup1")
setup.props["Frequency"] = "2.4GHz"
setup.props["MaximumPasses"] = 6
setup.update()

hfss.save_project()
solved = hfss.analyze()
print(solved)
```

**Complete when**

The setup is created, the design is solved without error, and the solve returns a success result.

**Keep**

The setup script and the solve confirmation.

[Setup](https://aedt.docs.pyansys.com/version/stable/User_guide/setup.html)

### □ Create a report and extract a result

**Activity**

A report is created from the solved design and a result quantity is extracted so that an engineering result is verified rather than assumed. The solution data is read into Python for inspection.

**Example**

```python
from ansys.aedt.core import Hfss

hfss = Hfss(non_graphical=True)
report = hfss.post.create_report(["db(S11)"])
solution = report.get_solution_data()
print(solution.expressions)   # Inspect the extracted trace names
```

**Complete when**

A report is created and at least one result quantity is read into Python and recorded.

**Keep**

The recorded result and a short note on whether it matches expectation.

[Postprocessing](https://aedt.docs.pyansys.com/version/stable/User_guide/postprocessing.html)

**Stage outcome:** A design can be built, solved, and assessed from Python.

---

## 5. Build reusable automation

> **Outcome:** A parameterized function is produced that captures a full design-to-result run with deterministic cleanup.

### □ Wrap the design run in a parameterized function

**Activity**

The build, setup, solve, and extract steps are collected into a function whose inputs are passed as parameters rather than hard-coded. Dimensions, frequency, and the AEDT version are parameterized.

**Example**

```python
from ansys.aedt.core import Hfss


def run_patch(hfss: Hfss, frequency: str = "2.4GHz", max_passes: int = 6):
    """Create a setup on the supplied HFSS design, solve it, and return the report."""
    setup = hfss.create_setup(name="Setup1")
    setup.props["Frequency"] = frequency
    setup.props["MaximumPasses"] = max_passes
    setup.update()
    hfss.save_project()
    hfss.analyze()
    return hfss.post.create_report(["db(S11)"])
```

**Complete when**

The function runs with supplied arguments, solves the design, and returns a report, with the application passed in as a parameter rather than constructed from a global.

**Keep**

The reusable function and an example call with its output.

[Setup](https://aedt.docs.pyansys.com/version/stable/User_guide/setup.html)

### □ Guarantee deterministic cleanup with a context manager

**Activity**

The automation is wrapped in a `Desktop` context manager so that AEDT is released deterministically even when an error occurs. This keeps reruns clean and avoids orphaned processes.

**Example**

```python
from ansys.aedt.core import Desktop, Hfss

with Desktop(version="2026.1", non_graphical=True, new_desktop=True):
    hfss = Hfss(designname="PatchRun")
    report = run_patch(hfss, frequency="2.4GHz")
    # Inspect results here.
# AEDT is automatically closed here, even if run_patch raised.
```

**Complete when**

The automation runs inside the context manager and AEDT closes automatically on exit, with no orphaned process remaining.

**Keep**

The wrapped automation script.

[Desktop sessions](https://aedt.docs.pyansys.com/version/stable/User_guide/desktop_sessions.html)

### □ Make the run rerunnable and save a recovery point

**Activity**

The automation is made rerunnable by saving the project after expensive geometry or setup steps so that a rerun can resume from a recovery point. The project path is parameterized.

**Example**

```python
hfss.save_project()   # Recovery point after geometry and setup, before solving
```

**Complete when**

The automation runs twice in succession without error and a saved project recovery point is produced.

**Keep**

The rerunnable script and the saved recovery point.

[Basic tutorial](https://aedt.docs.pyansys.com/version/stable/User_guide/intro.html)

**Stage outcome:** A parameterized, cleanly released, rerunnable automation script is available.

---

## 6. Apply it to a personal use case

> **Outcome:** The automation is retargeted to a learner-supplied design and requirement.

### □ Define a personal analysis goal and inputs

**Activity**

A personal analysis goal is written down with its application, geometry, materials, setup, and the result quantity of interest. This turns the automation into a concrete electronics design task.

**Example**

Example required from the content owner, because the design and requirement are supplied by the learner. The goal statement lists the AEDT application, the geometry, the materials, the setup, and the target result.

**Complete when**

A written goal states the application, geometry, materials, setup, and the result quantity to be reported.

**Keep**

The goal statement and the input design reference.

[Basic tutorial](https://aedt.docs.pyansys.com/version/stable/User_guide/intro.html)

### □ Retarget the automation to the personal design

**Activity**

The stage 5 function is called with the personal inputs so that the automation runs against the learner's design. Only the parameter values change, not the automation structure.

**Example**

Example required from the content owner, because the design and parameter values are learner-specific. The stage 5 function is called with the personal frequency, dimensions, and design name.

**Complete when**

The automation runs against the personal design and produces the target result quantity.

**Keep**

The parameter set used and the produced result.

[PyAEDT examples gallery](https://examples.aedt.docs.pyansys.com/)

### □ Validate the personal result against expectation

**Activity**

The personal result is checked against a hand calculation, a known reference, or engineering judgement so that the automation is trusted. Any discrepancy is investigated and recorded.

**Example**

Example required from the content owner, because the reference value depends on the learner's design and setup.

**Complete when**

The personal result is compared against a reference and the comparison and any corrections are recorded.

**Keep**

The validation note comparing the computed result with the reference.

[Postprocessing](https://aedt.docs.pyansys.com/version/stable/User_guide/postprocessing.html)

**Stage outcome:** The automation is trusted for a real, learner-supplied electronics design task.

---

## 7. Use AI-assisted capabilities

> **Outcome:** A tool built on PyAEDT is used to drive AEDT from an AI assistant, with every generated action validated before it is trusted.

PyAEDT-MCP is a Model Context Protocol (MCP) server that lets an AI client work with AEDT. It acts as a bridge between the AI client and AEDT, backed by a persistent PyAEDT Python session. The AI assistant suggests tool calls and generated PyAEDT code, and AEDT executes and verifies the underlying operations. These two roles are kept separate throughout this stage.

### □ Set up the PyAEDT-MCP server and check the environment

**Activity**

PyAEDT-MCP is set up so that an MCP-compatible client can reach it, and its always-available tools are exercised first. The server uses STDIO by default, and the connection-independent tools work before any AEDT session exists.

**Example**

The server is started, for example with `ansys-aedt-mcp`, and the environment is checked through the assistant with `check_aedt_installed` and `check_aedt_status`, which are available before any connection.

**Complete when**

The server starts, an MCP-compatible client lists the tools, and `check_aedt_installed` reports the installed AEDT version without a live session.

**Keep**

The client configuration and the reported installation details.

[PyAEDT-MCP installation](https://aedt-mcp.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Launch or connect to AEDT through the assistant

**Activity**

An AEDT session is established through the assistant so that connection-dependent tools become available. Status is checked first to decide between launching and connecting.

**Example**

The typical first workflow is followed through the assistant:

1. Call `check_aedt_installed`.
2. Call `check_aedt_status`.
3. Use `launch_aedt` for a new session or `connect_to_aedt` for a running gRPC session.
4. Create a design, for example asking the assistant to create an HFSS design.

An existing gRPC session is started with `ansysedt.exe -grpcsrv 50051` and attached with `connect_to_aedt` on the matching port.

**Complete when**

A session is established and connection-dependent tools, such as `create_design`, `analyze_design`, and `run_python_code`, become available in the client.

**Keep**

A record of which tool established the session and the resulting available tool set.

[PyAEDT-MCP tools and capabilities](https://aedt-mcp.docs.pyansys.com/version/stable/user_guide/tools_and_capabilities.html)

### □ Drive a bounded workflow and validate every generated action

**Activity**

A single bounded workflow is driven through the assistant, and every generated action is validated before it is trusted. The HFSS patch antenna workflow is a suitable bounded task. Design validation is run before solving, the project is saved before screenshots, and results are confirmed independently.

**Example**

The documented HFSS patch antenna workflow is followed through the tools: `create_design` for the HFSS design, `run_python_code` for geometry, boundaries, setup, and sweep, `validate_design` before solving, `run_python_code` or `analyze_design` to solve, `screenshot` for a visual checkpoint, and `export_results` for a Touchstone file. `get_model_info` confirms the design summary, and `get_guidelines_for` with topic `hfss` is called before generating code when the server runs with `--include-context`.

**Complete when**

The workflow completes, the design validates and solves, a result such as the S-parameter resonance is extracted, and every generated snippet was checked before execution with any corrections recorded.

**Keep**

The original request, the generated code, the validation result, the solved-design summary, and the exported result or screenshot.

[HFSS patch antenna workflow](https://aedt-mcp.docs.pyansys.com/version/stable/examples/hfss_patch_antenna_workflow.html)

**Human verification is required.** Generated code, tool arguments, engineering assumptions, and numerical results are verified by the learner. Design validation is run before solving, `get_model_info` confirms the design state, and the project is saved before screenshots and larger generated blocks, because AI-generated code can destabilize a project. Tool-suggested actions are treated as drafts, and verified AEDT execution is treated as the source of truth.

**Stage outcome:** An AI assistant can drive a bounded AEDT workflow through PyAEDT-MCP, with the learner validating every generated action.

---

## 8. Choose an advanced pathway

> **Outcome:** An advanced specialization is selected and its first capability is demonstrated.

### □ Optional pathway: transfer the skill to a second application

**Activity**

The design-to-result skill is transferred to a second AEDT application so that the reuse across applications is realized. The same `Desktop` and setup patterns are applied to a different application class, such as `Maxwell3d`, `Icepak`, or `Circuit`.

**Example**

```python
from ansys.aedt.core import Desktop, Maxwell3d

with Desktop(version="2026.1", non_graphical=True, new_desktop=True):
    m3d = Maxwell3d()
    setup = m3d.create_setup("New_Setup")
    setup.props["MaximumPasses"] = 10
    setup.update()
```

**Complete when**

A second application is instantiated and a setup is created and updated, demonstrating that the pattern transfers.

**Keep**

The second-application script and the setup confirmation.

[Setup](https://aedt.docs.pyansys.com/version/stable/User_guide/setup.html)

### □ Optional pathway: parameterize with design variables

**Activity**

Design variables are used so that a model is driven parametrically for sweeps and optimization. Variables are defined and referenced by name in geometry and setup.

**Example**

Example required from the content owner for a complete parametric sweep against a specific design. The variables guide describes defining variables and running optimizations.

**Complete when**

At least one design variable drives a geometry or setup value, and changing the variable changes the model.

**Keep**

The parametric script and a note of the variable that was driven.

[Variables](https://aedt.docs.pyansys.com/version/stable/User_guide/variables.html)

### □ Optional pathway: run PyAEDT in a client-server configuration

**Activity**

PyAEDT is run on a client machine to control AEDT on a remote server so that heavy solves run on dedicated hardware. The client-server guide describes the connection setup.

**Example**

Example required from the content owner for a specific remote server configuration. The client-server guide describes launching PyAEDT on a client and controlling AEDT on a remote server.

**Complete when**

A client-server session controls a remote AEDT instance and completes a bounded operation.

**Keep**

The client-server configuration and the run confirmation.

[Client-Server](https://aedt.docs.pyansys.com/version/stable/Getting_started/ClientServer.html)

**Stage outcome:** An advanced specialization is selected and its first capability is demonstrated.

---

## Troubleshooting

For troubleshooting and support:

- **Documentation and resources:** The [Synopsys Developer Portal](https://developer.synopsys.com/) is the central entry point.
- **Usage questions:** Questions about how to use the library are posted on the [Synopsys Developer Forum](https://developerforum.synopsys.com/).
- **Development questions:** Questions about developing or contributing to the library are raised on the project's [GitHub repository](https://github.com/ansys/pyaedt).

Common launch, licensing, and panel issues are also covered in the PyAEDT troubleshooting guide.

[PyAEDT troubleshooting](https://aedt.docs.pyansys.com/version/stable/Getting_started/Troubleshooting.html)

## Reference shelf

### Essential documentation

- [PyAEDT documentation](https://aedt.docs.pyansys.com/)
- [PyAEDT getting started](https://aedt.docs.pyansys.com/version/stable/Getting_started/index.html)
- [PyAEDT user guide](https://aedt.docs.pyansys.com/version/stable/User_guide/index.html)
- [Desktop sessions](https://aedt.docs.pyansys.com/version/stable/User_guide/desktop_sessions.html)
- [Setup](https://aedt.docs.pyansys.com/version/stable/User_guide/setup.html)
- [Postprocessing](https://aedt.docs.pyansys.com/version/stable/User_guide/postprocessing.html)
- [PyAEDT API reference](https://aedt.docs.pyansys.com/version/stable/API/index.html)

### Official examples

- [PyAEDT examples gallery](https://examples.aedt.docs.pyansys.com/)

### AI-related resources

- [PyAEDT-MCP documentation](https://aedt-mcp.docs.pyansys.com/)
- [PyAEDT-MCP tools and capabilities](https://aedt-mcp.docs.pyansys.com/version/stable/user_guide/tools_and_capabilities.html)
- [PyAEDT-MCP best practices](https://aedt-mcp.docs.pyansys.com/version/stable/user_guide/best_practices.html)
- [HFSS patch antenna workflow](https://aedt-mcp.docs.pyansys.com/version/stable/examples/hfss_patch_antenna_workflow.html)

### Related PyAnsys packages

- [PyEDB documentation](https://edb.docs.pyansys.com/version/stable/)
- [PyAEDT Common Toolkit documentation](https://aedt.common.toolkit.docs.pyansys.com/)

### Source and contribution

- [PyAEDT GitHub repository](https://github.com/ansys/pyaedt)
- [PyAEDT-MCP GitHub repository](https://github.com/ansys/pyaedt-mcp)
- [PyAEDT discussions](https://github.com/ansys/pyaedt/discussions)

## Sources

- PyAEDT documentation (https://aedt.docs.pyansys.com/): index, getting started, installation, versioning, basic tutorial, desktop sessions, user guide index, setup, modeler, postprocessing, variables, and client-server.
- PyAEDT-MCP documentation (https://aedt-mcp.docs.pyansys.com/): index, overview, installation, tools and capabilities, best practices, and the HFSS patch antenna workflow example.
- Ansys Developer Product Guide, Electronics and Semiconductors section, AEDT developer tools.

