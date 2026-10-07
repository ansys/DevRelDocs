# PyLumerical learning roadmap

PyLumerical (`ansys-lumerical-core`, imported as `ansys.lumerical.core`) is the Python automation library for Ansys Lumerical photonics simulation software. It is used to control the Lumerical products from Python, including Ansys Lumerical FDTD, Ansys Lumerical MODE, Ansys Lumerical Multiphysics, and Ansys Lumerical INTERCONNECT. It covers simulation setup, geometry and materials, running simulations, and retrieving results. This roadmap builds the capability to drive a real Lumerical simulation from Python, one concrete step at a time, using FDTD as the beginner path.

PyLumerical works by exposing the Lumerical Scripting Language commands as Python methods on a session object. A session is created with a product constructor such as `FDTD()`, and script commands such as `addfdtd()` and `run()` are then called as methods on it. The beginner path uses FDTD (Finite-Difference Time-Domain), because the getting-started material and the primary examples use it, and the same pattern transfers to MODE, DEVICE, and INTERCONNECT by swapping the constructor.

## Your learning journey

**1. Get it working**  
PyLumerical is installed and an FDTD session is started from Python.

**2. Understand the control model**  
Script commands are run as Python methods and simulation objects are created.

**3. Modify an existing workflow**  
An official example is run and then altered, and the effect is observed.

**4. Run and assess a meaningful operation**  
A simulation is run and a result dataset is retrieved and checked.

**5. Build reusable automation**  
A parameterized function drives a full build, run, and result retrieval from inputs.

**6. Apply it to a personal use case**  
The automation is pointed at a personal design and validated.

**7. Use AI-assisted capabilities**  
The Lumerical MCP server is used to drive a session by generating PyLumerical scripts, with every step verified.

**8. Choose an advanced pathway**  
A specialized direction such as another product, inverse design, or custom script commands is selected.

---

## 1. Get PyLumerical working

> **Outcome:** PyLumerical is installed and an FDTD session is started from Python.

An Ansys Lumerical graphical user interface (GUI) license and a supported Lumerical installation are required. PyLumerical is available since Lumerical 2025 R2.3. On import, PyLumerical locates the Lumerical installation automatically, and the `LUMERICAL_HOME` environment variable is set before import if that autodiscovery fails.

### □ Install PyLumerical into a virtual environment

**Activity**

Create and activate a virtual environment, then install the `ansys-lumerical-core` package. The supported Python versions are listed on the installation page.

**Example**

```bash
python -m venv .venv
# Linux
source .venv/bin/activate
# Windows Command Prompt
.venv\Scripts\activate.bat
python -m pip install -U pip
python -m pip install ansys-lumerical-core
```

**Complete when**

The environment is active and `pip show ansys-lumerical-core` reports a version.

**Keep**

A short note recording the Python version and the installed PyLumerical version.

[PyLumerical installation guide](https://lumerical.docs.pyansys.com/version/stable/getting_started/index.html)

### □ Confirm the Lumerical installation is found

**Activity**

Confirm that a licensed Lumerical installation is present. PyLumerical finds it automatically on import. If autodiscovery fails, set the `LUMERICAL_HOME` environment variable before import and start a new Python session.

**Example**

```bash
# Set only if autodiscovery fails, then restart Python
# Linux example
export LUMERICAL_HOME=/opt/lumerical/v251
```

**Complete when**

PyLumerical imports without an autodiscovery error, or `LUMERICAL_HOME` is set and a new session is started.

**Keep**

A note of whether autodiscovery worked or the `LUMERICAL_HOME` value used.

[Requirements and autodiscovery](https://lumerical.docs.pyansys.com/version/stable/getting_started/index.html)

### □ Start Python and import PyLumerical

**Activity**

Open a Python interpreter in the active environment and import PyLumerical as `lumapi`. Importing is a separate, concrete step from starting a session. Importing this way keeps scripts written with the legacy `lumapi` module working.

**Example**

```python
import ansys.lumerical.core as lumapi
```

**Complete when**

The import returns without error.

**Keep**

The import line, which begins every PyLumerical script.

[Importing modules](https://lumerical.docs.pyansys.com/version/stable/getting_started/index.html)

### □ Start an FDTD session

**Activity**

Start a Lumerical FDTD session by calling the `FDTD()` constructor. Each Lumerical product has its own constructor, so `FDTD()`, `MODE()`, `DEVICE()`, and `INTERCONNECT()` start the corresponding product.

**Example**

```python
import ansys.lumerical.core as lumapi

fdtd = lumapi.FDTD()   # start a local Lumerical FDTD session
```

**Complete when**

An FDTD session object exists without error.

**Keep**

The working session-start script.

[Session management](https://lumerical.docs.pyansys.com/version/stable/user_guide/session_management.html)

**Stage outcome:** PyLumerical is installed and an FDTD session is started from Python.

---

## 2. Understand the control model

> **Outcome:** Script commands are run as Python methods and simulation objects are created.

### □ Run a script command as a Python method

**Activity**

Call a Lumerical script command as a method on the session object. Almost all Lumerical Scripting Language commands are available as methods with the same name. Using a `with` block gives the session a clean start and end, and it closes the session even if an error occurs.

**Example**

```python
import ansys.lumerical.core as lumapi

with lumapi.FDTD() as fdtd:
    fdtd.addfdtd()            # add an FDTD simulation region
    fdtd.set("x span", 1e-6)  # set a property by name and value
```

**Complete when**

A command method runs and a property is set without error.

**Keep**

A short note of the commands used and what each did.

[Script commands as methods](https://lumerical.docs.pyansys.com/version/stable/user_guide/script_commands_as_methods.html)

### □ Create a simulation object with keyword arguments

**Activity**

Create a simulation object in the Python style by passing properties as keyword arguments to an `add` command. A property name with a space uses an underscore instead, so `x span` becomes `x_span`.

**Example**

```python
# Create a 3D FDTD region centered at the origin with a 1 micrometer span
fdtd.addfdtd(x=0, y=0, z=0, x_span=1e-6, y_span=1e-6, z_span=1e-6)
```

**Complete when**

An object is created with keyword-argument properties and appears in the simulation.

**Keep**

The object-creation call and the property values used.

[Working with simulation objects](https://lumerical.docs.pyansys.com/version/stable/user_guide/working_with_simulation_objects.html)

### □ Set dependent properties in order

**Activity**

When a property depends on another, set the properties in a defined order so they apply as intended. An ordered dictionary passed as `properties` guarantees the order, which a plain dictionary does not.

**Example**

```python
from collections import OrderedDict

# 'override global monitor settings' must be True before 'frequency points' can be set
props = OrderedDict([
    ("name", "power"),
    ("override global monitor settings", True),
    ("x", 0.0), ("y", 0.4e-6),
    ("monitor type", "linear x"),
    ("frequency points", 10.0),
])
fdtd.addpower(properties=props)
```

**Complete when**

An object with order-dependent properties is created correctly.

**Keep**

The ordered-dictionary pattern as a template for dependent properties.

[Working with simulation objects](https://lumerical.docs.pyansys.com/version/stable/user_guide/working_with_simulation_objects.html)

**Stage outcome:** Script commands are driven as Python methods and simulation objects are created with ordered, named properties.

---

## 3. Modify an existing workflow

> **Outcome:** An official example is run unchanged, then altered, and the difference in result is observed.

### □ Run one official example unchanged

**Activity**

Run one end-to-end example from the PyLumerical example gallery, such as the basic FDTD simulation, exactly as published and capture its reported output.

**Example**

```python
# Run one published PyLumerical example, such as the basic FDTD simulation,
# unchanged, then record the result it reports.
```

**Complete when**

The example completes and its reported result is saved.

**Keep**

The unchanged script and a copy of its output.

[PyLumerical examples](https://lumerical.docs.pyansys.com/version/stable/examples.html)

### □ Change one source or geometry input

**Activity**

In a copy of the example, change one documented input, such as a source wavelength or a geometry dimension, and compare the result with the baseline run.

**Example**

```python
# Change the source wavelength range, then rerun and compare with the baseline
fdtd.setglobalsource("wavelength start", 1.2e-6)   # meters
fdtd.setglobalsource("wavelength stop", 1.6e-6)    # meters
```

**Complete when**

The changed input is applied and the new result is compared with the baseline.

**Keep**

The modified script and a two-line before-and-after comparison.

[Script commands as methods](https://lumerical.docs.pyansys.com/version/stable/user_guide/script_commands_as_methods.html)

### □ Save the project and inspect it in the GUI

**Activity**

Save the simulation to a project file and open it in the Lumerical GUI to confirm the setup matches intent. Saving produces a shareable project artifact.

**Example**

```python
fdtd.save("fdtd_tutorial.fsp")   # save the project to the working directory
```

**Complete when**

The project file is written and opens in the Lumerical GUI with the expected setup.

**Keep**

The saved project file.

[Script commands as methods](https://lumerical.docs.pyansys.com/version/stable/user_guide/script_commands_as_methods.html)

**Stage outcome:** An official workflow is modified with intent and the resulting change is verified.

---

## 4. Run and assess a meaningful operation

> **Outcome:** A simulation is run and a result dataset is retrieved and sanity-checked.

### □ Run a simulation

**Activity**

Run the configured simulation with the `run()` method inside a session and confirm it completes.

**Example**

```python
import ansys.lumerical.core as lumapi

with lumapi.FDTD("fdtd_file.fsp") as fdtd:
    fdtd.run()   # run the FDTD simulation
```

**Complete when**

The run completes without error.

**Keep**

A note of the simulation run and its completion.

[Script commands as methods](https://lumerical.docs.pyansys.com/version/stable/user_guide/script_commands_as_methods.html)

### □ Retrieve a result dataset

**Activity**

Retrieve a monitor result as a dataset with the `getresult` method. PyLumerical returns the dataset as a dictionary whose values are NumPy arrays.

**Example**

```python
with lumapi.FDTD("fdtd_file.fsp") as fdtd:
    fdtd.run()
    transmission = fdtd.getresult("power", "T")   # transmission dataset from the "power" monitor

print(type(transmission), transmission.keys())
# <class 'dict'> dict_keys(['lambda', 'f', 'T', 'Lumerical_dataset'])
```

**Complete when**

A result dataset is retrieved and its keys are printed.

**Keep**

The retrieval call and the dataset keys returned.

[Accessing simulation results](https://lumerical.docs.pyansys.com/version/stable/user_guide/accessing_simulation_results.html)

### □ Sanity-check the result

**Activity**

Inspect the retrieved arrays and check that the values are physically reasonable, such as a transmission between zero and one across the wavelength range.

**Example**

```python
import numpy as np

t_values = transmission["T"]
print(np.min(t_values), np.max(t_values))   # expect values within a physical range
```

**Complete when**

A result quantity is inspected and confirmed to be reasonable.

**Keep**

The extracted quantity and a one-line reasonableness check.

[Accessing simulation results](https://lumerical.docs.pyansys.com/version/stable/user_guide/accessing_simulation_results.html)

**Stage outcome:** A simulation is run from Python and a result dataset is retrieved and assessed.

---

## 5. Build reusable automation

> **Outcome:** A parameterized function performs a full build, run, and result retrieval from explicit inputs.

### □ Wrap a build-run-retrieve in a function

**Activity**

Write a function that builds the simulation, runs it, and returns the result, so the workflow can be reused. The session is created inside the function with a `with` block so it closes cleanly.

**Example**

```python
import ansys.lumerical.core as lumapi

def run_transmission(wavelength_start, wavelength_stop):
    """Build and run an FDTD simulation, then return the transmission dataset."""
    with lumapi.FDTD(hide=True) as fdtd:
        fdtd.addfdtd(x=0, y=0, z=0, x_span=1e-6, y_span=1e-6, z_span=1e-6)
        fdtd.addgaussian(injection_axis="z")
        fdtd.setglobalsource("wavelength start", wavelength_start)
        fdtd.setglobalsource("wavelength stop", wavelength_stop)
        fdtd.addpower(name="power")
        fdtd.save("sweep_case.fsp")
        fdtd.run()
        return fdtd.getresult("power", "T")
```

**Complete when**

The function runs end to end when given inputs and returns a result dataset.

**Keep**

The reusable function.

[Advanced session management](https://lumerical.docs.pyansys.com/version/stable/user_guide/session_management.html)

### □ Parameterize environment-specific inputs

**Activity**

Replace hard-coded wavelengths, dimensions, and file paths with parameters so the automation runs across cases without edits. Wrapping a session in a function suits parameter sweeps where some values stay constant and others change.

**Example**

```python
# Sweep the source wavelength range over several cases
wavelength_ranges = [(1.0e-6, 1.2e-6), (1.3e-6, 1.5e-6)]
results = [run_transmission(start, stop) for start, stop in wavelength_ranges]
```

**Complete when**

No simulation input is hard-coded inside the function body and all inputs arrive as arguments.

**Keep**

The parameterized entry point and an example sweep call.

[Wrapping the session in a function](https://lumerical.docs.pyansys.com/version/stable/user_guide/session_management.html)

### □ Manage the session lifecycle cleanly

**Activity**

Let the `with` block close the session automatically, which happens even when an error occurs. When a session is created without a `with` block, it is closed explicitly with `close()`.

**Example**

```python
import ansys.lumerical.core as lumapi

inc = lumapi.INTERCONNECT()
# Work with the session here.
inc.close()   # explicitly close when not using a with block
```

**Complete when**

The script completes and the session is confirmed closed.

**Keep**

The lifecycle pattern as a reusable template.

[Closing the session](https://lumerical.docs.pyansys.com/version/stable/user_guide/session_management.html)

**Stage outcome:** A reusable, parameterized automation performs a full build, run, and retrieve and manages its session cleanly.

---

## 6. Apply it to a personal use case

> **Outcome:** The reusable automation is pointed at a personal design and its result is validated.

### □ Adapt the automation to a personal design

**Activity**

Supply a personal geometry, source, and monitors, and adjust the simulation region and materials to match the intended photonics design, using the built-in docstrings with `help()` to confirm command syntax.

**Example**

```python
# Confirm a command's syntax from its docstring before using it
help(fdtd.addfdtd)
```

**Complete when**

The automation runs on the personal design and produces a result.

**Keep**

The adapted script and the list of settings that differ from the example.

[Local documentation](https://lumerical.docs.pyansys.com/version/stable/user_guide/script_commands_as_methods.html)

### □ Validate the personal result against expectation

**Activity**

Compare the retrieved result with a known reference, an analytic estimate, or a prior Lumerical GUI run, and record whether it matches within tolerance.

**Example**

Example comparison data required from the content owner, because a personal reference value depends on the chosen design.

**Complete when**

The result is compared with a reference and the agreement or discrepancy is recorded.

**Keep**

The comparison record and any follow-up actions.

**Stage outcome:** A personally relevant simulation is automated and its result is validated.

---

## 7. Use AI-assisted capabilities

> **Outcome:** The Lumerical MCP server is used to drive a Lumerical session by generating PyLumerical scripts, with every generated step verified by the learner.

A tool built on PyLumerical can add AI-assisted interaction on top of it. PyLumerical-MCP is such a tool. It is a Model Context Protocol (MCP) server that lets an AI agent connect to a live Lumerical session and write PyLumerical scripts to control the simulation. It manages multiple live sessions that persist across chats, and sessions open with the GUI by default so the setup can be watched as it is built. The agent generates and runs PyLumerical scripts, while the learner reviews every generated script before trusting its result. A frontier large language model is recommended for the best results.

### □ Install and start the MCP server and connect an agent

**Activity**

Install and start PyLumerical-MCP, then connect an MCP-compatible agentic client over STDIO or Streamable HTTP. The detailed per-client setup is kept in the PyLumerical-MCP documentation rather than reproduced here.

**Example**

```bash
pip install ansys-lumerical-mcp
ansys-lumerical-mcp
```

**Complete when**

The MCP server is running and a client is connected to it.

**Keep**

A note of the client used and the transport chosen.

[PyLumerical-MCP installation](https://lumerical-mcp.docs.pyansys.com/)

### □ Open sessions through the agent

**Activity**

Ask the agent to open one or more Lumerical sessions, choosing whether each opens with the GUI shown or hidden. Watching the GUI while the agent builds the simulation helps catch setup errors early.

**Example prompt**

> "Please open one INTERCONNECT and one FDTD session."

The agent opens the two sessions. The learner confirms that both sessions opened and that the GUI state matches the request before continuing.

**Complete when**

The requested sessions are opened through the agent and confirmed.

**Keep**

A note of the sessions opened and their GUI state.

[PyLumerical-MCP overview](https://lumerical-mcp.docs.pyansys.com/)

### □ Generate a setup script, review it, and run it

**Activity**

Ask the agent to build part of a simulation, review the generated PyLumerical script against the documentation before it runs, let the agent run it in the live session, then confirm the result. Because the script runs in a live Lumerical session, each generated script is reviewed before it is trusted.

**Example prompt**

> "In the FDTD session, add an FDTD region with a 1 micrometer span, add a Gaussian source, show me the PyLumerical script before running it, then run the simulation and summarize the transmission result."

The agent generates the PyLumerical script, and the learner compares every command and argument with the script-commands and simulation-objects documentation. The script is run in the live session, the transmission result is retrieved, and any corrections the learner made are recorded.

**Complete when**

The reviewed script runs in the session, a result is produced, and any corrections are recorded.

**Keep**

The original prompt, the generated script, the corrected script, and the result.

[PyLumerical-MCP user guide](https://lumerical-mcp.docs.pyansys.com/)

**Stage outcome:** The Lumerical MCP server is used to drive a session through generated PyLumerical scripts, and every generated step is verified before it is trusted.

---

## 8. Choose an advanced pathway

> **Outcome:** One specialized direction is selected and a first concrete task in it is completed.

### □ Pathway: a second Lumerical product

**Activity**

Apply the same session-and-command pattern to a different product, such as MODE for waveguide mode analysis, DEVICE for Multiphysics, or INTERCONNECT for photonic circuits.

**Example**

```python
import ansys.lumerical.core as lumapi

with lumapi.MODE() as mode:
    # Build and run a waveguide mode analysis here.
    ...
```

**Complete when**

A simulation in a second product is created and run.

**Keep**

The script for the second product and what differed from FDTD.

[Session management](https://lumerical.docs.pyansys.com/version/stable/user_guide/session_management.html)

### □ Pathway: photonic inverse design with lumopt2

**Activity**

Explore inverse design with the `lumopt2` module, which specifies the desired response first and uses optimization algorithms to find the structure that produces it. The module is distributed with Ansys Lumerical FDTD and is imported through PyLumerical.

**Example**

```python
import ansys.lumerical.core.lumopt2 as lmpt
# Define a parametrization and figure of merit, then run the optimization.
```

**Complete when**

An inverse-design optimization is defined and started.

**Keep**

The chosen parametrization and figure of merit.

[Photonic inverse design with lumopt2](https://lumerical.docs.pyansys.com/version/stable/user_guide/photonic_inverse_design_with_lumopt2.html)

### □ Pathway: custom script commands

**Activity**

Import custom functions defined in a Lumerical script file (.lsf) and call them as methods, which reuses existing Lumerical scripting in a Python workflow.

**Example**

```python
with lumapi.FDTD(script=["MyFunctions.lsf"]) as fdtd:
    print(fdtd.customAdd(1, 2))   # a function defined in MyFunctions.lsf
```

**Complete when**

A custom function from a script file is called from Python.

**Keep**

The chosen pathway and the first script produced.

[Importing custom script commands](https://lumerical.docs.pyansys.com/version/stable/user_guide/script_commands_as_methods.html)

**Stage outcome:** A specialized pathway is chosen and a first task in it is completed.

---

## Troubleshooting

For troubleshooting and support:

- **Documentation and resources:** The [Synopsys Developer Portal](https://developer.synopsys.com/) is the central entry point.
- **Usage questions:** Questions about how to use the library are posted on the [Synopsys Developer Forum](https://developerforum.synopsys.com/).
- **Development questions:** Questions about developing or contributing to the library are raised on the project's GitHub repository, [PyLumerical on GitHub](https://github.com/ansys/pylumerical).

## Reference shelf

### Essential documentation

- [PyLumerical documentation](https://lumerical.docs.pyansys.com/)
- [PyLumerical installation and getting started](https://lumerical.docs.pyansys.com/version/stable/getting_started/index.html)
- [Session management](https://lumerical.docs.pyansys.com/version/stable/user_guide/session_management.html)
- [Script commands as methods](https://lumerical.docs.pyansys.com/version/stable/user_guide/script_commands_as_methods.html)
- [Working with simulation objects](https://lumerical.docs.pyansys.com/version/stable/user_guide/working_with_simulation_objects.html)
- [Accessing simulation results](https://lumerical.docs.pyansys.com/version/stable/user_guide/accessing_simulation_results.html)

### Official examples

- [PyLumerical examples](https://lumerical.docs.pyansys.com/version/stable/examples.html)

### Optional training

- [Ansys Lumerical Scripting (Ansys Innovation Courses)](https://innovationspace.ansys.com/courses/learning-track/ansys-lumerical-scripting/)
- [Scripting Basics Using Ansys Lumerical - Lesson 1 (Ansys Innovation Courses)](https://innovationspace.ansys.com/courses/index.php/courses/lumerical-scripting-first-scripting/lessons/scripting-basics-using-ansys-lumerical-scripting-lesson-1/)

### AI-related resources

- [PyLumerical-MCP documentation](https://lumerical-mcp.docs.pyansys.com/)

### Source and contribution

- [PyLumerical GitHub repository](https://github.com/ansys/pylumerical)
- [PyLumerical-MCP GitHub repository](https://github.com/ansys/pylumerical-mcp)
- [Lumerical for developers (Synopsys Developer Portal)](https://developer.synopsys.com/docs/lumerical)
