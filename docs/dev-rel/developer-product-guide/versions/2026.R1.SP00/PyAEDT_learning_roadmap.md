# PyAEDT learning roadmap

PyAEDT (`pyaedt`, imported as `ansys.aedt.core`) is the open-source Python client library for the Ansys Electronics Desktop (AEDT) application programming interface. It is used to automate and script AEDT from Python across its applications, including HFSS, Maxwell, Icepak, and Circuit, covering design creation, geometry, setup, solving, and results. This roadmap builds capability one concrete step at a time, using a single target application for the beginner path.

AEDT spans several applications reached through one desktop session. PyAEDT starts or connects to an AEDT desktop with the `Desktop` object, then works with an application object such as `Hfss`, `Maxwell3d`, `Icepak`, or `Circuit`. The beginner path in this roadmap uses HFSS (High Frequency Structure Simulator) as the target application, because the library is tested on it and the documented guidance covers it. The same steps transfer to the other applications by swapping the application object.

## Your learning journey

**1. Get it working**  
PyAEDT is installed and an AEDT desktop session is started from Python.

**2. Understand the control model**  
The desktop session and an application design object are navigated and controlled.

**3. Modify an existing workflow**  
An official example is run and then altered, and the effect is observed.

**4. Run and assess a meaningful operation**  
A design is solved and a result is exported and checked.

**5. Build reusable automation**  
A parameterized function drives a full design, solve, and export from inputs.

**6. Apply it to a personal use case**  
The automation is pointed at a personal design and validated.

**7. Use AI-assisted capabilities**  
The AEDT MCP server is used to connect, script, solve, and inspect, with every step verified.

**8. Choose an advanced pathway**  
A specialized direction such as another application, extensions, or remote sessions is selected.

---

## 1. Get PyAEDT working

> **Outcome:** PyAEDT is installed and an AEDT desktop session is started from Python.

A licensed Ansys Electronics Desktop installation is required, and PyAEDT requires AEDT 2022 R1 or later. The AEDT Student Version is also supported. The installed AEDT version determines the available applications and features.

### □ Install PyAEDT into a virtual environment

**Activity**

Create and activate a virtual environment, then install the `pyaedt` package. The `[all]` extra adds the optional components. PyAEDT works with CPython 3.10 through 3.13.

**Example**

```bash
python -m venv .venv
# Windows
.venv\Scripts\activate
# Linux and macOS
source .venv/bin/activate
pip install pyaedt[all]
```

**Complete when**

The environment is active and `pip show pyaedt` reports a version.

**Keep**

A short note recording the Python version and the installed PyAEDT version.

[PyAEDT installation guide](https://aedt.docs.pyansys.com/version/stable/Getting_started/Installation.html)

### □ Confirm the AEDT installation and version

**Activity**

Confirm that a licensed AEDT installation is present and note the version string used to target it, such as `2026.1`. On Linux, the `ANSYSEM_ROOT<XYZ>` and `LD_LIBRARY_PATH` environment variables are set before Python starts.

**Example**

```bash
# Linux: point PyAEDT at the AEDT 2026 R1 installation before starting Python
export ANSYSEM_ROOT261=/opt/AnsysEM/v261/AnsysEM
export LD_LIBRARY_PATH=$ANSYSEM_ROOT261:$LD_LIBRARY_PATH
```

**Complete when**

The target AEDT version string is recorded and, on Linux, the environment variables are set.

**Keep**

The AEDT version string used to launch sessions.

[PyAEDT installation guide](https://aedt.docs.pyansys.com/version/stable/Getting_started/Installation.html)

### □ Start Python and import PyAEDT

**Activity**

Open a Python interpreter in the active environment and import PyAEDT. Importing is a separate, concrete step from starting a desktop session.

**Example**

```python
import ansys.aedt.core
```

**Complete when**

The import returns without error.

**Keep**

The import line, which begins every PyAEDT script.

[Basic tutorial](https://aedt.docs.pyansys.com/version/stable/User_guide/intro.html)

### □ Start an AEDT desktop session

**Activity**

Start a new AEDT desktop session with the `Desktop` object inside a `with` block, which starts non-graphical and closes cleanly when the block ends. Non-graphical mode runs AEDT without its window, which suits scripting and automation.

**Example**

```python
from ansys.aedt.core import Desktop

with Desktop(version="2026.1", non_graphical=True, new_desktop=True) as desktop:
    print(desktop.aedt_version_id)
    # 2026.1
# AEDT is automatically closed here.
```

**Complete when**

The desktop session starts and its version identifier is printed.

**Keep**

The working session-start script.

[Desktop sessions](https://aedt.docs.pyansys.com/version/stable/User_guide/desktop_sessions.html)

**Stage outcome:** PyAEDT is installed and an AEDT desktop session is started and confirmed from Python.

---

## 2. Understand the control model

> **Outcome:** The desktop session and an application design object are navigated and controlled.

### □ Create an HFSS design in a session

**Activity**

Within a desktop session, create an HFSS design by constructing the `Hfss` application object. The application object is the entry point for geometry, setup, and results for that design.

**Example**

```python
from ansys.aedt.core import Desktop, Hfss

with Desktop(version="2026.1", non_graphical=True, new_desktop=True):
    hfss = Hfss()
    print(hfss.design_name)
```

**Complete when**

The HFSS design object is created and its design name is printed.

**Keep**

The script that creates an application design object.

[Basic tutorial](https://aedt.docs.pyansys.com/version/stable/User_guide/intro.html)

### □ Create geometry through the modeler

**Activity**

Create a geometric object through the design modeler and read a property back. The 3D modeler uses object-oriented access, so the created object can be inspected and modified directly.

**Example**

```python
box = hfss.modeler.create_box(
    origin=[0, 0, 0],
    sizes=[10, 10, 10],   # box dimensions in model units
    name="mybox",
    material="aluminum",
)
print(box.faces)      # inspect the faces of the created box
box.material_name = "copper"
print(box.material_name)
# copper
```

**Complete when**

A geometric object is created and one of its properties is read back.

**Keep**

A short list of the modeler calls used and what each returned.

[Modeler guide](https://aedt.docs.pyansys.com/version/stable/User_guide/modeler.html)

### □ Control the desktop lifecycle explicitly

**Activity**

Understand how a session ends. A `with Desktop(...)` block closes AEDT when it exits. When the `Desktop` object is used directly, the session is released with `release_desktop()`, which gives finer control over whether projects and the desktop are closed.

**Example**

```python
import ansys.aedt.core

desktop = ansys.aedt.core.Desktop(version="2026.1", non_graphical=True, new_desktop=True)
hfss = ansys.aedt.core.Hfss()
# Work with the design here.
desktop.release_desktop(close_projects=True, close_desktop=True)
# The AEDT session is released here.
```

**Complete when**

A session is started and then released explicitly without error.

**Keep**

A one-line note of when a context manager is preferred over explicit release.

[Desktop sessions](https://aedt.docs.pyansys.com/version/stable/User_guide/desktop_sessions.html)

**Stage outcome:** A desktop session and an application design object are created, used, and released with control.

---

## 3. Modify an existing workflow

> **Outcome:** An official example is run unchanged, then altered, and the difference in result is observed.

### □ Run one official example unchanged

**Activity**

Run one end-to-end example from the PyAEDT example gallery exactly as published and capture its reported output. An example may use an application that requires a specific AEDT license level.

**Example**

```python
# Run one published PyAEDT example from the example gallery unchanged,
# then record the result it reports.
```

**Complete when**

The example completes and its reported result is saved.

**Keep**

The unchanged script and a copy of its output.

[PyAEDT examples](https://examples.aedt.docs.pyansys.com/)

### □ Change one geometry or material input

**Activity**

In a copy of the example, change one documented input, such as a box dimension or an assigned material, and compare the result with the baseline run.

**Example**

```python
box = hfss.modeler.create_box(
    origin=[0, 0, 0],
    sizes=[20, 10, 10],   # changed the first dimension from 10 to 20
    name="mybox",
    material="copper",     # changed material from aluminum to copper
)
```

**Complete when**

The changed input is applied and the new result is compared with the baseline.

**Keep**

The modified script and a two-line before-and-after comparison.

[Modeler guide](https://aedt.docs.pyansys.com/version/stable/User_guide/modeler.html)

### □ Add or edit an analysis setup

**Activity**

Create or edit an analysis setup on the design and confirm the change by reading a setup property back. Setup and sweeps are the last operations before running an analysis.

**Example**

```python
from ansys.aedt.core import Maxwell3d

m3d = Maxwell3d()
new_setup = m3d.create_setup("New_Setup")
new_setup.props["MaximumPasses"] = 10   # adaptive mesh passes
print(new_setup.props["MaximumPasses"])
# 10
```

**Complete when**

A setup is created or edited and the changed property is read back.

**Keep**

The before-and-after value of the setup property that was changed.

[Setup guide](https://aedt.docs.pyansys.com/version/stable/User_guide/setup.html)

**Stage outcome:** An official workflow is modified with intent and the resulting change is verified.

---

## 4. Run and assess a meaningful operation

> **Outcome:** A design is solved and a result is exported and sanity-checked.

### □ Complete a minimal design setup

**Activity**

Starting from a created design, complete the minimum setup needed to solve, which is geometry, boundaries, and an analysis setup. Setup steps that depend on a specific design are drawn from the matching gallery example.

**Example**

Example setup code required from the content owner, because a complete, runnable setup depends on the specific design and license level used.

**Complete when**

The design has geometry, boundaries, and an analysis setup defined.

**Keep**

The setup script up to the point of solving.

[PyAEDT examples](https://examples.aedt.docs.pyansys.com/)

### □ Solve the design

**Activity**

Run the configured analysis on the design and confirm that the solve completes. The application object drives the solve.

**Example**

```python
# Solve the active design's analysis setup
hfss.analyze_setup("Setup1")   # name of the analysis setup to run
```

**Complete when**

The solve completes without error.

**Keep**

A note of the design solved and the solve outcome.

[Setup guide](https://aedt.docs.pyansys.com/version/stable/User_guide/setup.html)

### □ Export and sanity-check a result

**Activity**

After solving, export a result and check that its values are reasonable. For a high-frequency design, a common export is a Touchstone file of scattering parameters.

**Example**

Example result-export code required from the content owner, because the exact export call depends on the design and solution type set up in the preceding milestone.

**Complete when**

A post-solution result is exported and its values are confirmed to be reasonable.

**Keep**

The exported result and a one-line reasonableness check.

[PyAEDT examples](https://examples.aedt.docs.pyansys.com/)

**Stage outcome:** A design is solved from Python and a result is exported and assessed.

---

## 5. Build reusable automation

> **Outcome:** A parameterized function performs a full design, solve, and export from explicit inputs.

### □ Wrap a design-and-solve in a function that takes the session

**Activity**

Write a function that receives the desktop session or the application object and the design inputs as explicit parameters rather than reading a module-level global. Passing the session in keeps the function reusable and testable.

**Example**

```python
def build_box_design(hfss, box_name, box_sizes):
    """Create a box in the given HFSS design and return the created object."""
    box = hfss.modeler.create_box(
        origin=[0, 0, 0],
        sizes=box_sizes,   # [x, y, z] dimensions in model units
        name=box_name,
        material="copper",
    )
    return box
```

**Complete when**

The function runs end to end when given an application object and inputs and returns the created object.

**Keep**

The reusable function.

[Modeler guide](https://aedt.docs.pyansys.com/version/stable/User_guide/modeler.html)

### □ Parameterize environment-specific inputs

**Activity**

Replace hard-coded AEDT versions, file paths, and dimensions with parameters so the automation runs on other machines and AEDT releases without edits.

**Example**

```python
def run_design(aedt_version, box_sizes):
    from ansys.aedt.core import Desktop, Hfss

    with Desktop(version=aedt_version, non_graphical=True, new_desktop=True):
        hfss = Hfss()
        return build_box_design(hfss, box_name="mybox", box_sizes=box_sizes)
```

**Complete when**

No environment-specific input is hard-coded inside the function body and all inputs arrive as arguments.

**Keep**

The parameterized entry point and an example call with sample inputs.

### □ Manage the desktop lifecycle cleanly

**Activity**

Use a `with Desktop(...)` block so the session closes deterministically when the work is complete, or release it explicitly with `release_desktop()` when direct construction is used.

**Example**

```python
from ansys.aedt.core import Desktop, Hfss

with Desktop(version="2026.1", non_graphical=True, new_desktop=True):
    hfss = Hfss()
    build_box_design(hfss, box_name="mybox", box_sizes=[10, 10, 10])
# The session closes here, so no AEDT process is left running.
```

**Complete when**

The script completes and the AEDT session is confirmed closed.

**Keep**

The lifecycle pattern as a reusable template.

[Desktop sessions](https://aedt.docs.pyansys.com/version/stable/User_guide/desktop_sessions.html)

**Stage outcome:** A reusable, parameterized automation performs a full workflow and manages its session cleanly.

---

## 6. Apply it to a personal use case

> **Outcome:** The reusable automation is pointed at a personal design and its result is validated.

### □ Adapt the automation to a personal design

**Activity**

Open a personal AEDT project or build a personal design, and adjust the application, geometry, boundaries, and setup to match the intended physics.

**Example**

Example adaptation code required from the content owner, because it depends on the personal design and application chosen.

**Complete when**

The automation runs on the personal design and produces a result.

**Keep**

The adapted script and the list of settings that differ from the example.

[PyAEDT examples](https://examples.aedt.docs.pyansys.com/)

### □ Validate the personal result against expectation

**Activity**

Compare the exported result with a known reference, a hand calculation, or a prior AEDT GUI run, and record whether it matches within tolerance.

**Example**

Example comparison data required from the content owner, because a personal reference value depends on the chosen design.

**Complete when**

The result is compared with a reference and the agreement or discrepancy is recorded.

**Keep**

The comparison record and any follow-up actions.

**Stage outcome:** A personally relevant simulation is automated and its result is validated.

---

## 7. Use AI-assisted capabilities

> **Outcome:** The AEDT MCP server is used to connect, script, solve, and inspect AEDT, with every generated step verified by the learner.

A tool built on PyAEDT can add AI-assisted interaction on top of it. PyAEDT-MCP is such a tool. It is a Model Context Protocol (MCP) server for AEDT that provides a focused set of tools and a persistent PyAEDT-backed Python session, and it connects to AEDT over gRPC. The assistant discovers and calls tools such as `launch_aedt`, `connect_to_aedt`, `create_design`, `run_python_code`, `analyze_design`, and `get_model_info`, while the learner verifies every generated step. AI-generated code can close or destabilize a project in some cases, so the project is saved and backed up before larger generated blocks are run.

### □ Install and start the MCP server and connect an assistant

**Activity**

Install and start PyAEDT-MCP, then connect an MCP-compatible client. The detailed per-client setup is kept in the PyAEDT-MCP documentation rather than reproduced here.

**Example**

```bash
pip install git+https://github.com/ansys/pyaedt-mcp.git
ansys-aedt-mcp
```

**Complete when**

The MCP server is running and a client reports the available tools.

**Keep**

A note of the client used and that the tool list was discovered.

[PyAEDT-MCP installation](https://aedt-mcp.docs.pyansys.com/)

### □ Check status and connect AEDT through the assistant

**Activity**

Ask the assistant to confirm the installation and connection state with offline-capable tools, then launch or connect to AEDT. Checking status first decides between launching a new session and connecting to an existing one.

**Example prompt**

> "Check whether AEDT is installed and the current connection status, then launch a new AEDT session."

The assistant calls `check_aedt_installed`, `check_aedt_status`, and then `launch_aedt`. The learner confirms the reported status before continuing.

**Complete when**

An AEDT session is launched or connected through the assistant and its status is confirmed.

**Keep**

The status output and the connection result.

[PyAEDT-MCP tools and capabilities](https://aedt-mcp.docs.pyansys.com/)

### □ Generate a design script, review it, solve, and inspect

**Activity**

Ask the assistant to create a design and generate PyAEDT code for a step, review every line against the PyAEDT documentation before running it, apply it with `run_python_code`, validate and solve with `validate_design` and `analyze_design`, then inspect with `get_model_info`. Because these tools mutate and solve a live AEDT session, each generated step is checked before it is trusted.

**Example prompt**

> "Create an HFSS design named PatchAntenna, generate the code to add a box, show me the code before running it, then validate and analyze the design and summarize it."

The assistant uses `get_guidelines_for` with the relevant topic (available when the server starts with `--include-context`), generates the code, and the learner reviews it against the modeler documentation. The code is applied with `run_python_code`, checked with `validate_design`, solved with `analyze_design`, and verified with `get_model_info`, and any corrections the learner made are recorded.

**Complete when**

The reviewed code is applied, the design is validated and solved, and the model summary confirms the result, and any corrections are recorded.

**Keep**

The original prompt, the generated code, the corrected code, the solve outcome, and the `get_model_info` summary.

[PyAEDT-MCP best practices](https://aedt-mcp.docs.pyansys.com/)

**Stage outcome:** The AEDT MCP server is used to drive a full connect-to-solve workflow, and every generated step is verified before it is trusted.

---

## 8. Choose an advanced pathway

> **Outcome:** One specialized direction is selected and a first concrete task in it is completed.

### □ Pathway: a second AEDT application

**Activity**

Apply the same session-and-design pattern to a different application, such as Maxwell for low-frequency electromagnetics or Icepak for electronics cooling.

**Example**

```python
from ansys.aedt.core import Desktop, Icepak

with Desktop(version="2026.1", non_graphical=True, new_desktop=True):
    ipk = Icepak()
    print(ipk.design_name)
```

**Complete when**

A design in a second application is created and inspected.

**Keep**

The script for the second application and what differed from HFSS.

[Basic tutorial](https://aedt.docs.pyansys.com/version/stable/User_guide/intro.html)

### □ Pathway: PyAEDT extensions and toolkits

**Activity**

Explore the Extension Manager and the open-source PyAEDT toolkits, which package automation workflows inside AEDT.

**Example**

Example extension code required from the content owner for a specific extension task.

**Complete when**

An extension or toolkit is launched or a custom extension is registered.

**Keep**

The chosen extension and the first script produced.

[Extensions guide](https://aedt.docs.pyansys.com/version/stable/User_guide/extensions.html)

### □ Pathway: layout designs with PyEDB

**Activity**

Explore the Ansys Electronics Database (EDB) layout format with PyEDB, a companion library for complex and large layout designs that AEDT uses.

**Example**

```python
import pyedb

edb = pyedb.Edb("mylayout.aedb")
```

**Complete when**

A layout is opened through PyEDB.

**Keep**

The chosen pathway and the first script produced.

[PyEDB documentation](https://edb.docs.pyansys.com/version/stable/)

**Stage outcome:** A specialized pathway is chosen and a first task in it is completed.

---

## Troubleshooting

For troubleshooting and support:

- **Documentation and resources:** The [Synopsys Developer Portal](https://developer.synopsys.com/) is the central entry point.
- **Usage questions:** Questions about how to use the library are posted on the [Synopsys Developer Forum](https://developerforum.synopsys.com/).
- **Development questions:** Questions about developing or contributing to the library are raised on the project's GitHub repository, [PyAEDT on GitHub](https://github.com/ansys/pyaedt).

## Reference shelf

### Essential documentation

- [PyAEDT documentation](https://aedt.docs.pyansys.com/)
- [PyAEDT installation guide](https://aedt.docs.pyansys.com/version/stable/Getting_started/Installation.html)
- [Basic tutorial](https://aedt.docs.pyansys.com/version/stable/User_guide/intro.html)
- [Desktop sessions](https://aedt.docs.pyansys.com/version/stable/User_guide/desktop_sessions.html)
- [Modeler guide](https://aedt.docs.pyansys.com/version/stable/User_guide/modeler.html)
- [Setup guide](https://aedt.docs.pyansys.com/version/stable/User_guide/setup.html)

### Official examples

- [PyAEDT examples](https://examples.aedt.docs.pyansys.com/)

### Optional training

- [Ansys Electronics Desktop Automation with PyAEDT getting started (Ansys Learning Hub)](https://www.ansys.com/training-center/course-catalog/electronics/ansys-electronics-desktop-automation-with-pyeadt-getting-started)
- [Introduction to PyAEDT (Synopsys Developer Portal)](https://developer.synopsys.com/blog/introduction-pyaedt)
- [Overview of PyAEDT: Drive innovation in virtual prototyping with PyAEDT](https://www.youtube.com/watch?v=yFUboNyJeGk)

### AI-related resources

- [PyAEDT-MCP documentation](https://aedt-mcp.docs.pyansys.com/)

### Source and contribution

- [PyAEDT GitHub repository](https://github.com/ansys/pyaedt)
- [PyEDB documentation](https://edb.docs.pyansys.com/version/stable/)
- [PyAEDT-MCP GitHub discussions](https://github.com/ansys/pyaedt-mcp/discussions)

## Sources

- PyAEDT documentation (https://aedt.docs.pyansys.com/) — index, installation, basic tutorial, desktop sessions, modeler, and setup pages.
- PyAEDT-MCP documentation (https://aedt-mcp.docs.pyansys.com/) — index, overview, installation, tools and capabilities, and best practices pages.
- Developer Product Guide, Electronics and Semiconductors section — AEDT and PyAEDT developer tooling, companion libraries, and training links.
