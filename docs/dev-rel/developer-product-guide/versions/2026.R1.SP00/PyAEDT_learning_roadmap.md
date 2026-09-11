# PyAEDT learning roadmap

This roadmap measures what you can do with PyAEDT, not which pages you have read. Each milestone produces a demonstrable capability, an observable result, or a reusable artefact. PyAEDT is the open-source Python client library for the Ansys Electronics Desktop (AEDT) API, letting you automate HFSS, Maxwell, Icepak, Q3D, Circuit, and other AEDT applications from Python. It requires a licensed local AEDT installation (2022 R1 or later; the student version is supported).

## Your learning journey

**1. Get it working**  
Install PyAEDT into a virtual environment and launch your first AEDT session.

**2. Understand the control model**  
Manage the Desktop session lifecycle and reach an application's object model.

**3. Modify an existing workflow**  
Run an official example unchanged, then change one input and observe the effect.

**4. Run and assess a meaningful operation**  
Build geometry, set up, solve, and read back a real electromagnetic result.

**5. Build reusable automation**  
Turn a working script into a parameterised, CLI-driven, batch-capable tool.

**6. Apply it to your own use case**  
Reproduce one of your existing AEDT designs from Python.

**7. Use AI-assisted capabilities**  
Drive AEDT from an AI assistant through the PyAEDT-MCP server, verifying every step.

**8. Choose an advanced pathway**  
Pick a specialisation such as extensions, PyEDB layout, or postprocessing and reporting.

---

## 1. Get PyAEDT working

> **Outcome:** A working Python environment that can launch AEDT and open an application.

### □ Install PyAEDT into a virtual environment

**Activity**

Create and activate a virtual environment, then install PyAEDT with all extras. PyAEDT works with CPython 3.10 through 3.13 and requires a licensed AEDT 2022 R1 or later. The recommended flow uses `venv` plus `uv` for fast installs.

**Example**

```powershell
python -m venv C:\path\to\pyaedt_venv
C:\path\to\pyaedt_venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install uv
uv pip install pyaedt[all]
```

**Complete when**

`pip show pyaedt` reports an installed version inside your activated virtual environment.

**Keep**

A note of your environment path, Python version, and the installed PyAEDT version.

[Installation](https://aedt.docs.pyansys.com/version/stable/Getting_started/Installation.html)

### □ Confirm PyAEDT sees your AEDT installation

**Activity**

Check which AEDT versions PyAEDT detects on your machine using the command line interface. On Linux, first set the `ANSYSEM_ROOT<XYZ>` and `LD_LIBRARY_PATH` environment variables for your release.

**Example**

```bash
pyaedt aedt-versions
```

**Complete when**

`pyaedt aedt-versions` lists at least one installed AEDT release.

**Keep**

The AEDT version string you will pass to `Desktop(version=...)`.

[Command line interface](https://aedt.docs.pyansys.com/version/stable/Getting_started/cli.html)

### □ Launch your first AEDT session and create a design

**Activity**

Launch AEDT from Python in non-graphical mode using a context manager, create one design, and let AEDT close cleanly on exit.

**Example**

```python
import ansys.aedt.core

with ansys.aedt.core.Desktop(
    version="2026.1",
    non_graphical=True,
    new_desktop=True,
    close_on_exit=True,
):
    circuit = ansys.aedt.core.Circuit()
    # Work with AEDT here.
# AEDT is automatically closed here.
```

**Complete when**

The block runs without error, a Circuit design is created, and AEDT closes when the context manager exits.

**Keep**

The launch snippet and a note of the AEDT version that started.

[Basic tutorial](https://aedt.docs.pyansys.com/version/stable/User_guide/intro.html)

**Stage outcome:** You can install PyAEDT, confirm it finds AEDT, and launch a session that creates a design.

---

## 2. Understand the control model

> **Outcome:** You can manage the AEDT session lifecycle and reach an application's object model deliberately.

### □ Control the Desktop session lifecycle

**Activity**

Use both patterns for managing an AEDT session: a context manager for deterministic cleanup, and a direct `Desktop` object with an explicit `release_desktop`. Understand how `close_on_exit`, `new_desktop`, and being inside or outside a context manager decide whether AEDT closes.

**Example**

```python
import ansys.aedt.core

# Direct control: attach without closing on exit
d = ansys.aedt.core.Desktop(version="2026.1", non_graphical=False, new_desktop=False)
hfss = ansys.aedt.core.Hfss()
# Work with AEDT here.
d.release_desktop(close_projects=False, close_desktop=False)
```

**Complete when**

You can predict, for a given call, whether AEDT stays open or closes, and you have released a session explicitly.

**Keep**

A one-line note of the lifecycle rule you will rely on (context manager versus direct control).

[Desktop sessions](https://aedt.docs.pyansys.com/version/stable/User_guide/desktop_sessions.html)

### □ Create and manipulate a geometry object

**Activity**

Open one AEDT application (for example HFSS) and use the object-oriented modeler to create a primitive, then read and change its properties with getters and setters.

**Example**

```python
from ansys.aedt.core import Hfss

hfss = Hfss()
box = hfss.modeler.create_box(
    origin=[0, 0, 0], sizes=[10, 10, 10], name="mybox", material="aluminum"
)
print(box.faces)
box.material_name = "copper"
box.transparency = 0.4
```

**Complete when**

Reading `box.material_name` returns your new value and you can enumerate the box faces.

**Keep**

The snippet and the printed face or property values.

[Modeler](https://aedt.docs.pyansys.com/version/stable/User_guide/modeler.html)

### □ Drive a design with variables and parameters

**Activity**

Create design and project variables through the app's dictionary interface, then evaluate an expression. Note that a `$` prefix creates a project-wide variable.

**Example**

```python
from ansys.aedt.core import Hfss

hfss = Hfss()
hfss["dim"] = "1mm"          # design variable
hfss["$dim"] = "1mm"         # project variable
hfss["$PrjVar1"] = "2*pi"
hfss.evaluate_expression(hfss["$PrjVar1"])
```

**Complete when**

`evaluate_expression` returns the numeric value of a variable you defined.

**Keep**

The variables you created and their evaluated values.

[Variables](https://aedt.docs.pyansys.com/version/stable/User_guide/variables.html)

**Stage outcome:** You can manage the AEDT session lifecycle and reach and modify an application's model through PyAEDT.

---

## 3. Modify an existing workflow

> **Outcome:** You can run an official example unchanged, then make a controlled change and predict its effect.

### □ Run one official example unchanged

**Activity**

Choose one end-to-end example from the PyAEDT examples site that matches an application you use (for example an HFSS antenna or a Maxwell motor), download it, and run it without editing.

**Example**

Run one example from the PyAEDT examples site for your application.

**Complete when**

The example completes and produces the results shown in its documentation.

**Keep**

The unedited script and its captured output or result.

[PyAEDT examples](https://examples.aedt.docs.pyansys.com/)

### □ Change one physical input and observe the effect

**Activity**

In the working example, change exactly one physical input, such as a dimension, a material, a frequency, or an excitation value. Predict the direction of the change first, then re-run and compare with your saved baseline.

**Example**

```python
# In an HFSS example, change one dimension variable, then re-analyze
hfss["patch_width"] = "26mm"
hfss.analyze()
```

**Complete when**

The result moves in the direction you predicted and differs from your baseline.

**Keep**

The modified script, your prediction, and the before-and-after result values.

[PyAEDT examples](https://examples.aedt.docs.pyansys.com/)

### □ Trace one line of the example to its API

**Activity**

Pick one line of the example that performs a meaningful action and find the class or method it calls in the PyAEDT API reference. Record its required inputs and return type.

**Example**

For a line that creates a setup, find the `create_setup` method and note its arguments and the setup object it returns.

**Complete when**

You can state, for that one line, which API is called and what inputs it needs.

**Keep**

A short note linking the example line to its API reference entry.

[API reference](https://aedt.docs.pyansys.com/version/stable/API/index.html)

**Stage outcome:** You can run, understand, and deliberately modify an official PyAEDT workflow.

---

## 4. Run and assess a meaningful operation

> **Outcome:** You can drive a full build-setup-solve-read cycle and extract an electromagnetic result into Python.

### □ Build geometry and assign boundaries

**Activity**

In an HFSS design, create the geometry your analysis needs and assign the boundaries and excitations (for example perfect-E surfaces, a port, and a radiation boundary).

**Example**

```python
from ansys.aedt.core import Hfss

hfss = Hfss()
substrate = hfss.modeler.create_box(
    origin=[0, 0, 0], sizes=["40mm", "40mm", "1.6mm"],
    name="Substrate", material="FR4_epoxy")
patch = hfss.modeler.create_rectangle(
    orientation="XY", origin=["8mm", "8mm", "1.6mm"],
    sizes=["24mm", "24mm"], name="Patch")
hfss.assign_perfecte_to_sheets(patch.name)
```

**Complete when**

Your geometry and boundaries are created, confirmed by listing `hfss.modeler.objects`.

**Keep**

The build script and the list of created objects.

[Modeler](https://aedt.docs.pyansys.com/version/stable/User_guide/modeler.html)

### □ Create a setup and solve

**Activity**

Create an analysis setup (and optionally a frequency sweep), then solve. Access setups through the `setups` list and edit properties through the `props` dictionary.

**Example**

```python
setup = hfss.create_setup(name="Setup1")
setup.props["Frequency"] = "2.4GHz"
setup.props["MaximumPasses"] = 6
setup.update()
hfss.analyze()
```

**Complete when**

The solve completes and the setup reports a solution.

**Keep**

The setup-and-solve script and a note of the solve time and convergence.

[Setup](https://aedt.docs.pyansys.com/version/stable/User_guide/setup.html)

### □ Create a report and read results into Python

**Activity**

Create a report of a solved quantity (for example an S-parameter), then pull the solution data into Python for external plotting with Matplotlib.

**Example**

```python
traces = hfss.get_traces_for_plot(second_element_filter="P1*")
report = hfss.post.create_report(traces)
solution = report.get_solution_data()
plt = solution.plot(solution.expressions)   # Matplotlib axes object
```

**Complete when**

`get_solution_data()` returns data and you can plot or read at least one result value in Python.

**Keep**

The report script and the extracted result values or plot.

[Postprocessing](https://aedt.docs.pyansys.com/version/stable/User_guide/postprocessing.html)

**Stage outcome:** You can drive a full build-setup-solve-read cycle and extract results into Python.

---

## 5. Build reusable automation

> **Outcome:** You can turn a working script into a parameterised tool that runs unattended.

### □ Parameterise your build-solve-read script

**Activity**

Refactor your build-setup-solve-read script into a function whose key inputs (dimensions, materials, frequency) are arguments, returning the extracted result. Drive geometry sweeps through design variables or Optimetrics parametric setups.

**Example**

```python
from ansys.aedt.core import Maxwell3d

m3d = Maxwell3d()
m3d.parametrics.add("Rload", 0.1, 1, 0.1)   # parametric sweep of a variable
```

**Complete when**

Calling your function with two different input sets returns two different, correct results.

**Keep**

The parameterised function and a small table of inputs to outputs.

[Variables and Optimetrics](https://aedt.docs.pyansys.com/version/stable/User_guide/variables.html)

### □ Run PyAEDT from the command line against a session

**Activity**

Start an AEDT session and run a Python script against it using the PyAEDT CLI. The script runs with an attached `desktop` object available. Add `--json` to any command for machine-readable output.

**Example**

```bash
pyaedt session start --non-graphical --port 50051
pyaedt run my_script.py --port 50051
pyaedt session stop --port 50051
```

**Complete when**

Your script runs to completion against the CLI-started session and produces the same result as your interactive run.

**Keep**

The batch script and the captured console output.

[Command line interface](https://aedt.docs.pyansys.com/version/stable/Getting_started/cli.html)

### □ Package a workflow as a PDF report

**Activity**

Turn your results into a shareable artefact using the `AnsysReport` class, which builds a PDF with chapters, images, tables, and charts.

**Example**

```python
from ansys.aedt.core.visualization.plot.pdf import AnsysReport

report = AnsysReport()
report.aedt_version = "2026.1"
report.template_name = "AnsysTemplate"
report.create()
report.add_chapter("Results")
report.add_text("Summary of the analysis.")
report.save_pdf(r"c:\temp", "report_example.pdf")
```

**Complete when**

A PDF report is written to disk containing at least one result section.

**Keep**

The generated PDF and the script that produced it.

[Postprocessing and reporting](https://aedt.docs.pyansys.com/version/stable/User_guide/postprocessing.html)

**Stage outcome:** You can package your workflow as a parameterised, CLI-driven, report-generating tool.

---

## 6. Apply it to your own use case

> **Outcome:** You can reproduce one of your real AEDT designs from Python.

### □ Reproduce an existing design you already trust

**Activity**

Take a small design you have already run in the AEDT GUI, open its project from PyAEDT (or rebuild its key steps), run it, and extract a result you can compare against your known answer.

**Example**

```python
import ansys.aedt.core

cir = ansys.aedt.core.Circuit(non_graphical=False)
cir.save_project(my_path)
# ... reproduce your design steps ...
cir.release_desktop(close_projects=True, close_desktop=True)
```

**Complete when**

Your PyAEDT result matches your trusted GUI result within a tolerance you define. Substitute your own project for the example.

**Keep**

The reproduction script and a comparison of the PyAEDT and GUI results.

[Basic tutorial](https://aedt.docs.pyansys.com/version/stable/User_guide/intro.html)

### □ Export your design configuration for review and reuse

**Activity**

Export the setup and sweep configuration of your design to JSON with the CLI (or a screenshot of the model), so the configuration is reviewable and portable between projects.

**Example**

```bash
pyaedt export config --port 50051 --project MyProject --design MyDesign --output config.json
pyaedt export screenshot --port 50051 --project MyProject --design MyDesign
```

**Complete when**

You have a JSON configuration file (and optionally a screenshot) for your own design.

**Keep**

The exported configuration file and image.

[Command line interface](https://aedt.docs.pyansys.com/version/stable/Getting_started/cli.html)

**Stage outcome:** You can migrate a real, trusted AEDT design into a reproducible, exportable PyAEDT workflow.

---

## 7. Use AI-assisted capabilities

> **Outcome:** You can drive AEDT from an AI assistant through the PyAEDT-MCP server, following a connect-build-validate-analyze-verify loop, and confirm every AI-assisted result against AEDT.

PyAEDT-MCP (`ansys-aedt-mcp`) is a Model Context Protocol server that lets an AI client, such as Claude Code, Visual Studio Code Copilot, Cursor, or Codex, drive AEDT through a focused set of tools backed by a persistent PyAEDT Python session. The AI assistant proposes actions and generates PyAEDT code, but AEDT executes it and you verify the result. Validate designs before solving, save often, and treat generated code as untrusted until it runs and AEDT confirms the outcome.

### □ Install and connect the PyAEDT-MCP server to your AI assistant

**Activity**

Run the PyAEDT-MCP server and register it with your MCP-compatible client. PyAEDT-MCP requires Python 3.12 or later and AEDT 2022 R2 or later for gRPC workflows. You can run it with `uvx` without cloning the repository.

**Example**

```bash
uvx --from git+https://github.com/ansys/pyaedt-mcp.git ansys-aedt-mcp
```

Register with Claude Code for one project:

```bash
claude mcp add --transport stdio pyaedt-mcp -- \
  uvx --index-strategy unsafe-best-match \
  --from git+https://github.com/ansys/pyaedt-mcp.git ansys-aedt-mcp
```

**Complete when**

The server starts and your client lists the `pyaedt-mcp` server as available.

**Keep**

Your client configuration snippet and a note of which client you registered.

[Installation](https://aedt-mcp.docs.pyansys.com/version/stable/getting_started/installation.html) · [IDE and client configuration](https://aedt-mcp.docs.pyansys.com/version/stable/getting_started/ide_configuration.html)

### □ Run the first connect-and-inspect loop through the assistant

**Activity**

Follow the documented first workflow: check installation, check connection status, then launch or connect to AEDT, and create a design. Always check status first so the assistant chooses between `launch_aedt` and `connect_to_aedt` correctly.

**Example**

The documented HFSS patch antenna workflow shows the real tool calls and responses. The opening sequence is:

```text
check_aedt_installed  -> "AEDT is installed ... Version: 2026.1"
launch_aedt           -> "Successfully launched AEDT ... gRPC Port: 59661"
create_design         -> app_type="Hfss", design_name="PatchAntenna_Validation"
                         "Successfully created Hfss design ... Solution Type: Terminal"
```

A natural-language prompt that triggers this, such as: *"Check whether AEDT is installed, launch it, and create an HFSS design called PatchAntenna."*

**Complete when**

The assistant reports an active AEDT session and a created design, confirmed by `check_aedt_status`.

**Keep**

The prompt and the tool responses showing the created design.

[Tools and capabilities](https://aedt-mcp.docs.pyansys.com/version/stable/user_guide/tools_and_capabilities.html) · [HFSS patch antenna workflow](https://aedt-mcp.docs.pyansys.com/version/stable/examples/hfss_patch_antenna_workflow.html)

### □ Build, validate, solve, and report through generated PyAEDT code

**Activity**

Have the assistant generate PyAEDT code that it runs with `run_python_code` in the persistent session, then run `validate_design` before `analyze_design`, and finally create a report. Take screenshots after geometry and after the solve as visual checkpoints. When `--include-context` is enabled, ask for `get_guidelines_for` the relevant topic before generating code.

**Example**

From the validated HFSS patch antenna workflow, the build-validate-solve sequence produces real, checkable responses:

```text
run_python_code   -> "Geometry and boundaries created. Objects: ['Substrate', 'Ground', 'Patch']"
validate_design   -> "Design validation passed."
run_python_code   -> "Solved: True, Time: 81s"
run_python_code   -> "S11 Report created! Resonance: 2.8000 GHz, S11 = -5.22 dB"
```

**Complete when**

`validate_design` passes, `analyze_design` (or an `analyze()` call) completes, and you obtain a report value read back from AEDT.

**Keep**

The generated code, the validation and solve responses, and the report or screenshot artefacts.

[HFSS patch antenna workflow](https://aedt-mcp.docs.pyansys.com/version/stable/examples/hfss_patch_antenna_workflow.html) · [Workflows](https://aedt-mcp.docs.pyansys.com/version/stable/user_guide/workflows.html)

### □ Separate assistant-proposed actions from verified AEDT state

**Activity**

For one MCP-driven task, record which values the assistant proposed and which AEDT confirmed with a tool (`get_model_info`, `validate_design`, `screenshot`, or `export_results`). Check the text every tool returns for error messages before proceeding, and save the project before large generated code blocks so you can recover.

**Example**

Use `get_model_info` to confirm a design summary, and `screenshot` (after saving the project) as a visual checkpoint, rather than trusting the assistant's narrative.

**Complete when**

You can point to each proposed action and the AEDT tool output that confirmed or corrected it.

**Keep**

An annotated log of proposed versus AEDT-confirmed values, including any correction after a failed step.

[Best practices](https://aedt-mcp.docs.pyansys.com/version/stable/user_guide/best_practices.html) · [Overview](https://aedt-mcp.docs.pyansys.com/version/stable/user_guide/overview.html)

**Stage outcome:** You can drive AEDT from an AI assistant through PyAEDT-MCP and verify every AI-assisted result against AEDT before trusting it.

---

## 8. Choose an advanced pathway

> **Outcome:** You can select and begin one specialisation that matches your goals.

### □ Pick and scope one advanced pathway

**Activity**

Choose one specialisation and complete its first official guide or example:

- **Extensions and toolkits** using the Extension Manager to build or install automated AEDT workflows with a GUI.
- **PyEDB layout automation** for complex, large layout designs in the Ansys Electronics Database format.
- **Advanced postprocessing** with PyVista field plots, animations, and the `AnsysReport` PDF builder.
- **Remote and client-server** execution to control AEDT on a remote machine from a client.

**Example**

For extensions, register a custom extension from the PyAEDT Console:

```python
from ansys.aedt.core.extensions.installer.pyaedt_installer import add_extension_manager
add_extension_manager("YourPersonalLibPath")
```

**Complete when**

You complete the first guide or example for your chosen pathway and can describe its next step.

**Keep**

The pathway you chose and the first artefact you produced in it.

[Extensions](https://aedt.docs.pyansys.com/version/stable/User_guide/extensions.html) · [PyEDB documentation](https://edb.docs.pyansys.com/version/stable/) · [Client-server](https://aedt.docs.pyansys.com/version/stable/Getting_started/ClientServer.html)

**Stage outcome:** You have entered a chosen specialisation with a working first artefact and a clear next step.

---

## Reference shelf

### Essential documentation

- [PyAEDT documentation home](https://aedt.docs.pyansys.com/)
- [Getting started](https://aedt.docs.pyansys.com/version/stable/Getting_started/index.html)
- [User guide](https://aedt.docs.pyansys.com/version/stable/User_guide/index.html)
- [Desktop sessions](https://aedt.docs.pyansys.com/version/stable/User_guide/desktop_sessions.html)
- [Command line interface](https://aedt.docs.pyansys.com/version/stable/Getting_started/cli.html)
- [API reference](https://aedt.docs.pyansys.com/version/stable/API/index.html)
- [PyAEDT API cheat sheet](https://cheatsheets.docs.pyansys.com/pyaedt_API_cheat_sheet.pdf)

### Official examples

- [PyAEDT examples](https://examples.aedt.docs.pyansys.com/)

### Related PyAnsys libraries and toolkits

- [PyEDB documentation](https://edb.docs.pyansys.com/version/stable/)
- [PyAEDT Common Toolkit](https://aedt.common.toolkit.docs.pyansys.com/)
- [Magnet Segmentation Toolkit](https://magnet.segmentation.toolkit.docs.pyansys.com/version/stable/index.html)

### Optional training

- [Ansys Electronics Desktop Automation with PyAEDT getting started (Ansys Learning Hub)](https://www.ansys.com/training-center/course-catalog/electronics/ansys-electronics-desktop-automation-with-pyeadt-getting-started)
- [Introduction to PyAEDT](https://developer.synopsys.com/blog/introduction-pyaedt)
- [Overview of PyAEDT: Drive innovation in virtual prototyping with PyAEDT](https://www.youtube.com/watch?v=yFUboNyJeGk)
- [PyAEDT examples and use cases: Virtual compliance framework](https://www.youtube.com/watch?v=MnACOZ1Axd4)

### AI-related resources

- [PyAEDT-MCP documentation](https://aedt-mcp.docs.pyansys.com/)
- [PyAEDT-MCP overview](https://aedt-mcp.docs.pyansys.com/version/stable/user_guide/overview.html)
- [PyAEDT-MCP tools and capabilities](https://aedt-mcp.docs.pyansys.com/version/stable/user_guide/tools_and_capabilities.html)
- [PyAEDT-MCP IDE and client configuration](https://aedt-mcp.docs.pyansys.com/version/stable/getting_started/ide_configuration.html)
- [PyAEDT-MCP best practices](https://aedt-mcp.docs.pyansys.com/version/stable/user_guide/best_practices.html)
- [PyAEDT-MCP HFSS patch antenna workflow](https://aedt-mcp.docs.pyansys.com/version/stable/examples/hfss_patch_antenna_workflow.html)
- [PyAEDT-MCP repository](https://github.com/ansys/pyaedt-mcp)

### Help and troubleshooting

- [Troubleshooting](https://aedt.docs.pyansys.com/version/stable/Getting_started/Troubleshooting.html)
- [Ansys developer forum for interface questions](https://discuss.ansys.com/)
- [PyAEDT GitHub discussions for development questions](https://github.com/ansys/pyaedt/discussions)

### Source and contribution

- [PyAEDT repository](https://github.com/ansys/pyaedt)
- [Issues](https://github.com/ansys/PyAEDT/issues)
- [Contributing](https://aedt.docs.pyansys.com/version/stable/Getting_started/Contributing.html)


