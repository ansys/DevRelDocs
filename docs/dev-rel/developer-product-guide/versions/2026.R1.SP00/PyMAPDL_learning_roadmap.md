# PyMAPDL learning roadmap

PyMAPDL (`ansys-mapdl-core`) is the open-source Python interface to Ansys Mechanical APDL (MAPDL), the finite element solver driven by the Ansys Parametric Design Language (APDL). It is used to automate and script MAPDL from Python, covering model building, meshing, loads and boundary conditions, solving, and results extraction. This roadmap builds the capability to drive a real MAPDL session from Python, one concrete step at a time.

PyMAPDL exposes each MAPDL command as a Python method on a session object. The APDL command is translated from its uppercase form to a Python-friendly name, so the `ESEL` command becomes the `mapdl.esel(...)` method. A session is started with `launch_mapdl()`, which starts MAPDL and connects to it over gRPC, or connects to an MAPDL instance that is already running.

## Your learning journey

**1. Get it working**  
PyMAPDL is installed and an MAPDL session is started from Python.

**2. Understand the control model**  
APDL commands are run as Python methods and their results are read back.

**3. Modify an existing workflow**  
An official example is run and then altered, and the effect is observed.

**4. Run and assess a meaningful operation**  
A model is solved and a result quantity is extracted and checked.

**5. Build reusable automation**  
A parameterized function drives a full build, solve, and extract from inputs.

**6. Apply it to a personal use case**  
The automation is pointed at a personal model and validated.

**7. Use AI-assisted capabilities**  
The MAPDL MCP server is used to launch, run commands, solve, and inspect, with every step verified.

**8. Choose an advanced pathway**  
A specialized direction such as a pool, high-performance computing, or DPF post-processing is selected.

---

## 1. Get PyMAPDL working

> **Outcome:** PyMAPDL is installed and an MAPDL session is started from Python.

A local Ansys installation that includes MAPDL is required, and the installed version determines the interface and features available. PyMAPDL can start MAPDL locally or connect to a session that is already running locally or on a remote machine.

### □ Install PyMAPDL into a virtual environment

**Activity**

Create and activate a virtual environment, then install the `ansys-mapdl-core` package. Python 3.10 through Python 3.13 on Windows, macOS, and Linux is supported.

**Example**

```bash
python -m venv .venv
# Windows
.venv\Scripts\activate
# Linux and macOS
source .venv/bin/activate
pip install ansys-mapdl-core
```

**Complete when**

The environment is active and `pip show ansys-mapdl-core` reports a version.

**Keep**

A short note recording the Python version and the installed PyMAPDL version.

[PyMAPDL installation guide](https://mapdl.docs.pyansys.com/version/stable/getting_started/install_pymapdl.html)

### □ Confirm the MAPDL installation and location

**Activity**

Confirm that a licensed Ansys installation that includes MAPDL is present. PyMAPDL finds the installation automatically through an Ansys environment variable such as `AWP_ROOT241`, and the location can be set with `PYMAPDL_MAPDL_EXEC` when the installation is non-standard.

**Example**

```bash
# Point PyMAPDL at an Ansys 2024 R1 installation
# Linux example
export AWP_ROOT241=/usr/ansys_inc
```

**Complete when**

The Ansys environment variable for the installed version is set or the installation path is otherwise known to PyMAPDL.

**Keep**

The exact environment variable name and path for the installed version.

[Setting the MAPDL location](https://mapdl.docs.pyansys.com/version/stable/getting_started/launcher.html)

### □ Start Python and import PyMAPDL

**Activity**

Open a Python interpreter in the active environment and import PyMAPDL. Importing is a separate, concrete step from starting a session.

**Example**

```python
from ansys.mapdl import core as pymapdl
```

**Complete when**

The import returns without error.

**Keep**

The import line, which begins every PyMAPDL script.

[PyMAPDL installation guide](https://mapdl.docs.pyansys.com/version/stable/getting_started/install_pymapdl.html)

### □ Start an MAPDL session

**Activity**

Start a local MAPDL session with `launch_mapdl()`, which starts MAPDL and connects to it automatically, then print the session to confirm it started.

**Example**

```python
from ansys.mapdl.core import launch_mapdl

mapdl = launch_mapdl()
print(mapdl)
# Product:             Ansys Mechanical Enterprise
# MAPDL Version:       24.1
# ansys.mapdl Version: 0.68.0
```

**Complete when**

The session prints its product name and MAPDL version.

**Keep**

The working session-start script.

[Launch PyMAPDL](https://mapdl.docs.pyansys.com/version/stable/getting_started/launcher.html)

**Stage outcome:** PyMAPDL is installed and an MAPDL session is started and confirmed from Python.

---

## 2. Understand the control model

> **Outcome:** APDL commands are run as Python methods and their results are read back.

### □ Run an APDL command as a Python method

**Activity**

Run an MAPDL command through its Python method. Each APDL command is available in a Python-friendly form, so the `/PREP7` preprocessor command is entered with `mapdl.prep7()`.

**Example**

```python
mapdl.prep7()   # enter the preprocessor, equivalent to the APDL /PREP7 command
print(mapdl.parameters.routine)
# 'PREP7'
```

**Complete when**

A command method runs and the resulting state is read back.

**Keep**

A short note mapping the APDL commands tried to their Python method names.

[PyMAPDL language and usage](https://mapdl.docs.pyansys.com/version/stable/user_guide/mapdl.html)

### □ Read values returned by selection methods

**Activity**

Run a selection command and use the array it returns. Selection methods such as `mapdl.nsel(...)` and `mapdl.esel(...)` return the identifiers of the selected entities.

**Example**

```python
selected_nodes = mapdl.nsel("S", "NODE", vmin=1, vmax=2000)   # select nodes 1 to 2000
print(selected_nodes)
# array([   1    2    3 ... 1998 1999 2000])
```

**Complete when**

A selection method is called and the returned array is printed.

**Keep**

A one-line record of the selection used and the count of entities returned.

[Selecting entities](https://mapdl.docs.pyansys.com/version/stable/user_guide/mapdl.html)

### □ Run a group of commands when a command is non-interactive

**Activity**

Understand that some commands run only inside a script. For a raw command string, the `mapdl.run(...)` method sends it directly, which is useful for a command such as `/SOLU` that has several equivalent methods.

**Example**

```python
# The following three calls are equivalent and enter the solution processor.
mapdl.run("/SOLU")
mapdl.slashsolu()
mapdl.solution()
```

**Complete when**

A command is entered through both a method and `mapdl.run(...)` without error.

**Keep**

A note of when `mapdl.run(...)` is preferred over a dedicated method.

[Running commands](https://mapdl.docs.pyansys.com/version/stable/user_guide/mapdl.html)

**Stage outcome:** MAPDL commands are driven from Python as methods and their returned values are used.

---

## 3. Modify an existing workflow

> **Outcome:** An official example is run unchanged, then altered, and the difference in result is observed.

### □ Run one official example unchanged

**Activity**

Run one end-to-end example from the PyMAPDL example gallery exactly as published and capture its reported output.

**Example**

```python
# Run one published PyMAPDL example from the example gallery unchanged,
# then record the result it reports.
```

**Complete when**

The example completes and its reported result is saved.

**Keep**

The unchanged script and a copy of its output.

[PyMAPDL examples](https://mapdl.docs.pyansys.com/version/stable/examples/index.html)

### □ Change one model input and observe the effect

**Activity**

In a copy of the example, change one documented input, such as a dimension, a material property, or a load value, and compare the result with the baseline run.

**Example**

Example input change required from the content owner, because the specific editable input depends on the chosen gallery example.

**Complete when**

The changed input is applied and the new result is compared with the baseline.

**Keep**

The modified script and a two-line before-and-after comparison.

[PyMAPDL examples](https://mapdl.docs.pyansys.com/version/stable/examples/index.html)

### □ Confirm a change took effect by reading state back

**Activity**

After making a change, read a related value back through a command method or a parameter to confirm it holds the expected value.

**Example**

```python
# Confirm the active processor after changing routine
mapdl.prep7()
print(mapdl.parameters.routine)
# 'PREP7'
```

**Complete when**

The change is applied and a read-back confirms the new state.

**Keep**

The before-and-after state of the value that was changed.

[PyMAPDL language and usage](https://mapdl.docs.pyansys.com/version/stable/user_guide/mapdl.html)

**Stage outcome:** An official workflow is modified with intent and the resulting change is verified.

---

## 4. Run and assess a meaningful operation

> **Outcome:** A model is solved and a result quantity is extracted and sanity-checked.

### □ Complete a minimal model setup

**Activity**

Starting from a built or loaded model, complete the minimum setup needed to solve, which is geometry, an element type and material, a mesh, and loads and boundary conditions. Setup steps that depend on a specific model are drawn from the matching gallery example.

**Example**

Example setup code required from the content owner, because a complete, runnable model setup depends on the specific geometry and element types used.

**Complete when**

The model has geometry, a mesh, materials, and loads defined.

**Keep**

The setup script up to the point of solving.

[PyMAPDL examples](https://mapdl.docs.pyansys.com/version/stable/examples/index.html)

### □ Solve the model

**Activity**

Enter the solution processor and run the solve, then confirm that it completes.

**Example**

```python
mapdl.slashsolu()   # enter the solution processor
mapdl.solve()       # run the solution
mapdl.finish()      # leave the solution processor
```

**Complete when**

The solve completes without error.

**Keep**

A note of the analysis solved and the solve outcome.

[PyMAPDL language and usage](https://mapdl.docs.pyansys.com/version/stable/user_guide/mapdl.html)

### □ Extract and sanity-check a result quantity

**Activity**

After solving, read a result quantity such as nodal displacement through the post-processing interface, and check that its values are physically reasonable. The post-processing interface streams only the needed data back from the solver.

**Example**

```python
mapdl.post1()                 # enter the general postprocessor
mapdl.set(1, 1)               # select the first load step and substep
disp_x = mapdl.post_processing.nodal_displacement("X")   # X displacement at each node
print(disp_x.max())
```

**Complete when**

A post-solution quantity is returned as an array and its maximum is confirmed to be reasonable.

**Keep**

The extracted quantity and a one-line reasonableness check.

[Postprocessing guide](https://mapdl.docs.pyansys.com/version/stable/user_guide/post.html)

**Stage outcome:** A model is solved from Python and a result quantity is extracted and assessed.

---

## 5. Build reusable automation

> **Outcome:** A parameterized function performs a full build, solve, and extract from explicit inputs.

### □ Wrap a build-and-solve in a function that takes the session

**Activity**

Write a function that receives the MAPDL session and the model inputs as explicit parameters rather than reading a module-level global. Passing the session in keeps the function reusable and testable.

**Example**

```python
def solve_and_get_displacement(mapdl, load_value):
    """Apply a load, solve, and return the maximum X displacement."""
    mapdl.slashsolu()
    # Loads and boundary conditions that use load_value are applied here.
    mapdl.solve()
    mapdl.finish()
    mapdl.post1()
    mapdl.set(1, 1)
    return mapdl.post_processing.nodal_displacement("X").max()
```

**Complete when**

The function runs end to end when given a session and an input and returns a result value.

**Keep**

The reusable function.

[PyMAPDL language and usage](https://mapdl.docs.pyansys.com/version/stable/user_guide/mapdl.html)

### □ Parameterize environment-specific inputs

**Activity**

Replace hard-coded executable paths, processor counts, and load values with parameters so the automation runs on other machines without edits.

**Example**

```python
from ansys.mapdl.core import launch_mapdl

def run_study(load_value, nproc=4):
    # nproc and load_value are supplied by the caller, not hard-coded
    mapdl = launch_mapdl(nproc=nproc)
    try:
        return solve_and_get_displacement(mapdl, load_value)
    finally:
        mapdl.exit()
```

**Complete when**

No environment-specific input is hard-coded inside the function body and all inputs arrive as arguments.

**Keep**

The parameterized entry point and an example call with sample inputs.

[Launch PyMAPDL](https://mapdl.docs.pyansys.com/version/stable/getting_started/launcher.html)

### □ Manage the session lifecycle cleanly

**Activity**

End the MAPDL session deterministically with `mapdl.exit()` when the work is complete, so no MAPDL process is left running.

**Example**

```python
from ansys.mapdl.core import launch_mapdl

mapdl = launch_mapdl()
try:
    solve_and_get_displacement(mapdl, load_value=100.0)
finally:
    mapdl.exit()   # close the MAPDL session
```

**Complete when**

The script completes and the MAPDL session is confirmed closed.

**Keep**

The lifecycle pattern as a reusable template.

[Launch PyMAPDL](https://mapdl.docs.pyansys.com/version/stable/getting_started/launcher.html)

**Stage outcome:** A reusable, parameterized automation performs a full workflow and cleans up after itself.

---

## 6. Apply it to a personal use case

> **Outcome:** The reusable automation is pointed at a personal model and its result is validated.

### □ Adapt the automation to a personal model

**Activity**

Supply a personal model, either built with commands or restored from a saved database, and adjust the element types, materials, mesh, and loads to match the intended physics.

**Example**

Example adaptation code required from the content owner, because it depends on the personal model and analysis chosen.

**Complete when**

The automation runs on the personal model and produces a result.

**Keep**

The adapted script and the list of settings that differ from the example.

[PyMAPDL examples](https://mapdl.docs.pyansys.com/version/stable/examples/index.html)

### □ Validate the personal result against expectation

**Activity**

Compare the extracted result with a known reference, a hand calculation, or a prior MAPDL run, and record whether it matches within tolerance.

**Example**

Example comparison data required from the content owner, because a personal reference value depends on the chosen model.

**Complete when**

The result is compared with a reference and the agreement or discrepancy is recorded.

**Keep**

The comparison record and any follow-up actions.

**Stage outcome:** A personally relevant simulation is automated and its result is validated.

---

## 7. Use AI-assisted capabilities

> **Outcome:** The MAPDL MCP server is used to launch, run commands, solve, and inspect MAPDL, with every generated step verified by the learner.

A tool built on PyMAPDL can add AI-assisted interaction on top of it. PyMAPDL-MCP is such a tool. It is a Model Context Protocol (MCP) server that connects an AI assistant to Ansys MAPDL through PyMAPDL, exposing PyMAPDL capabilities as standardized tools. The assistant discovers and calls tools such as `launch_mapdl_session`, `run_mapdl_command`, `run_python_code`, `open_results`, and `screenshot`, while the learner verifies every generated step.

### □ Install and start the MCP server and connect an assistant

**Activity**

Install and start PyMAPDL-MCP, then connect an MCP-compatible client. The detailed per-client setup is kept in the PyMAPDL-MCP documentation rather than reproduced here.

**Example**

```bash
pip install ansys-mapdl-mcp
ansys-mapdl-mcp
```

**Complete when**

The MCP server is running and a client reports the available tools.

**Keep**

A note of the client used and that the tool list was discovered.

[PyMAPDL-MCP quick start](https://mapdl-mcp.docs.pyansys.com/)

### □ Check status and start MAPDL through the assistant

**Activity**

Ask the assistant to confirm the installation with an offline-capable tool, then launch or connect to MAPDL. The MAPDL-specific tools become available only after a connection is established, which is expected behavior.

**Example prompt**

> "Check whether MAPDL is installed, then launch a new MAPDL instance with 4 processors."

The assistant calls `check_mapdl_installed` and then `launch_mapdl_session`. The learner confirms the reported status before continuing.

**Complete when**

An MAPDL session is launched or connected through the assistant and its status is confirmed.

**Keep**

The status output and the connection result.

[PyMAPDL-MCP tools and capabilities](https://mapdl-mcp.docs.pyansys.com/)

### □ Generate a command batch, review it, solve, and inspect

**Activity**

Ask the assistant to generate a batch of MAPDL commands, review every command against the PyMAPDL documentation before running it, run the batch with `run_multiple_mapdl_commands`, solve, then capture a plot with `screenshot` and query a result with `run_python_code`. Because these tools mutate and solve a live MAPDL session, each generated step is checked before it is trusted.

**Example prompt**

> "Generate the PREP7 commands to define a SOLID185 element type and a linear elastic material, show me the commands before running them, then mesh, solve, and show a plot of the mesh."

The assistant uses `get_guidelines_for` for the relevant topic, generates the commands, and the learner reviews them against the language-and-usage documentation. The batch is run with `run_multiple_mapdl_commands`, a plot is captured with `screenshot`, and a result is queried with `run_python_code`, and any corrections the learner made are recorded.

**Complete when**

The reviewed commands are applied, the model is solved, a plot is captured, and a result is queried, and any corrections are recorded.

**Keep**

The original prompt, the generated commands, the corrected commands, the plot, and the queried result.

[PyMAPDL-MCP best practices](https://mapdl-mcp.docs.pyansys.com/)

**Stage outcome:** The MAPDL MCP server is used to drive a full launch-to-result workflow, and every generated step is verified before it is trusted.

---

## 8. Choose an advanced pathway

> **Outcome:** One specialized direction is selected and a first concrete task in it is completed.

### □ Pathway: multiple instances with a pool

**Activity**

Explore running several MAPDL instances at once with a local pool for throughput, which suits parameter studies.

**Example**

Example pool code required from the content owner for a specific multi-instance task.

**Complete when**

More than one instance runs under a pool and a task is dispatched.

**Keep**

The chosen pool configuration and the first script produced.

[Pool guide](https://mapdl.docs.pyansys.com/version/stable/user_guide/pool.html)

### □ Pathway: high-performance computing

**Activity**

Explore running PyMAPDL within a high-performance computing (HPC) environment for larger jobs.

**Example**

Example HPC submission required from the content owner for a specific scheduler.

**Complete when**

A PyMAPDL job runs within the HPC environment.

**Keep**

The chosen HPC configuration and the first job script.

[HPC guide](https://mapdl.docs.pyansys.com/version/stable/user_guide/hpc/index.html)

### □ Pathway: result post-processing with DPF

**Activity**

Explore the Data Processing Framework (DPF) for a modern client-server interface to Ansys result files, which the PyMAPDL documentation recommends for result processing.

**Example**

Example DPF code required from the content owner for a specific result file.

**Complete when**

A result file is read and a quantity is extracted through DPF.

**Keep**

The chosen pathway and the first script produced.

[Postprocessing guide](https://mapdl.docs.pyansys.com/version/stable/user_guide/post.html)

**Stage outcome:** A specialized pathway is chosen and a first task in it is completed.

---

## Troubleshooting

For troubleshooting and support:

- **Documentation and resources:** The [Synopsys Developer Portal](https://developer.synopsys.com/) is the central entry point.
- **Usage questions:** Questions about how to use the library are posted on the [Synopsys Developer Forum](https://developerforum.synopsys.com/).
- **Development questions:** Questions about developing or contributing to the library are raised on the project's GitHub repository, [PyMAPDL on GitHub](https://github.com/ansys/pymapdl).

## Reference shelf

### Essential documentation

- [PyMAPDL documentation](https://mapdl.docs.pyansys.com/)
- [PyMAPDL installation guide](https://mapdl.docs.pyansys.com/version/stable/getting_started/install_pymapdl.html)
- [Launch PyMAPDL](https://mapdl.docs.pyansys.com/version/stable/getting_started/launcher.html)
- [PyMAPDL language and usage](https://mapdl.docs.pyansys.com/version/stable/user_guide/mapdl.html)
- [Postprocessing guide](https://mapdl.docs.pyansys.com/version/stable/user_guide/post.html)

### Official examples

- [PyMAPDL examples](https://mapdl.docs.pyansys.com/version/stable/examples/index.html)
- [PyMAPDL tutorial](https://tutorials.mapdl.docs.pyansys.com/tutorials/01-pymapdl.html)

### Optional training

- [Getting Started With Ansys PyMAPDL (Ansys Innovation Space)](https://innovationspace.ansys.com/product/getting-started-with-ansys-pymapdl/)
- [PyAnsys Training: Overview of PyMAPDL and PyMechanical](https://www.youtube.com/watch?v=Qh4Y07OZdms)
- [PyAnsys Training: PyMAPDL Examples and Use Cases](https://www.youtube.com/watch?v=H_i-O712wQE)

### AI-related resources

- [PyMAPDL-MCP documentation](https://mapdl-mcp.docs.pyansys.com/)

### Source and contribution

- [PyMAPDL GitHub repository](https://github.com/ansys/pymapdl)
- [PyMAPDL-MCP GitHub repository](https://github.com/ansys/pymapdl-mcp)
