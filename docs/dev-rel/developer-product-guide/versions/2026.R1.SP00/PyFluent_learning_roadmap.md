# PyFluent learning roadmap

This roadmap measures what you can do with PyFluent, not which pages you have read. Each milestone produces a demonstrable capability, an observable result, or a reusable artefact. PyFluent is the open-source Python interface to Ansys Fluent (computational fluid dynamics software), letting you automate meshing, setup, solving, and post-processing from Python. It is compatible with the Fluent versions officially supported at each PyFluent release; Fluent 2024 R2 and later are supported by current releases.

## Your learning journey

**1. Get it working**  
Install PyFluent, point it at your Fluent installation, and launch your first session.

**2. Understand the control model**  
Choose a session type and mode, and drive Fluent through settings objects.

**3. Modify an existing workflow**  
Run an official example unchanged, then change one input and observe the effect.

**4. Run and assess a meaningful operation**  
Mesh, set up, solve, and extract a real CFD result from Python.

**5. Build reusable automation**  
Turn a working script into a parameterised, journal-backed, batch-capable tool.

**6. Apply it to your own use case**  
Reproduce one of your existing Fluent cases from Python.

**7. Use AI-assisted capabilities**  
Drive Fluent from an AI assistant through the PyFluent-MCP server, then build a machine-learning model from PyFluent data, validating every step against the solver.

**8. Choose an advanced pathway**  
Pick a specialisation such as parallel and scheduler runs, containers, or visualization.

---

## 1. Get PyFluent working

> **Outcome:** A working Python environment that can find your Fluent installation and launch a session.

### □ Install PyFluent into a virtual environment

**Activity**

Create and activate a virtual environment, then install the core package. PyFluent supports Python 3.10 through 3.14 on Windows, Linux, and Mac.

**Example**

```console
python -m venv .venv
.venv\Scripts\activate
python -m pip install ansys-fluent-core
```

**Complete when**

`pip show ansys-fluent-core` reports an installed version inside your activated virtual environment.

**Keep**

A note of your environment name, Python version, and the installed package version.

[Installation](https://fluent.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Make PyFluent find your Fluent installation

**Activity**

Confirm the Ansys environment variable that points to your Fluent installation is set (for example `AWP_ROOT252`). On Windows the installer sets it; on Linux you set it yourself in the shell or `~/.profile`.

**Example**

```console
export AWP_ROOT252=/usr/ansys_inc/v252
```

**Complete when**

The `AWP_ROOT` variable for your release resolves to your Fluent installation directory.

**Keep**

The variable name and path you confirmed, for reuse in scripts and scheduler jobs.

[Fluent installation and location](https://fluent.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Launch your first Fluent session

**Activity**

Launch Fluent in solution mode from Python and confirm you have a live session object.

**Example**

```python
import ansys.fluent.core as pyfluent

solver_session = pyfluent.launch_fluent()
```

**Complete when**

`launch_fluent()` returns a session object without error and Fluent starts in the background.

**Keep**

The launch snippet and a note of the Fluent version that started.

[Launching and connecting to Fluent](https://fluent.docs.pyansys.com/version/stable/user_guide/session/launching_ansys_fluent.html)

**Stage outcome:** You can install PyFluent, prove it finds Fluent, and launch a live session.

---

## 2. Understand the control model

> **Outcome:** You can choose the right session type and mode, and read and modify Fluent settings through settings objects.

### □ Choose a session type and launch mode

**Activity**

Decide which Fluent mode your task needs (meshing, solution, or pre/post) and how to start it (`from_install`, `from_container`, `from_connection`, or `from_pim`). Launch in the mode you chose and confirm the session type.

**Example**

```python
import ansys.fluent.core as pyfluent

meshing_session = pyfluent.launch_fluent(mode=pyfluent.FluentMode.MESHING)
solver_session = pyfluent.launch_fluent(mode=pyfluent.FluentMode.SOLVER)
```

**Complete when**

You have launched the mode your task needs and can state why you chose that mode and launch method.

**Keep**

A one-line note mapping your task to its mode and launch method.

[Launching and connecting to Fluent](https://fluent.docs.pyansys.com/version/stable/user_guide/session/launching_ansys_fluent.html)

### □ Reach the settings hierarchy

**Activity**

From a solver session, reach the four top-level settings branches (`file`, `setup`, `solution`, `results`) and print the state of one settings object.

**Example**

```python
setup = solver_session.settings.setup
solution = solver_session.settings.solution
results = solver_session.settings.results

from ansys.fluent.core.solver import Models
Models(settings_source=solver_session).print_state()
```

**Complete when**

`print_state()` returns the current model settings for your loaded case.

**Keep**

The printed state block as a reference for the objects you will modify.

[Solver settings objects](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/solver_settings_contents.html)

### □ Read and modify one setting through a settings object

**Activity**

Instantiate a settings object with the concise constructor syntax, read its current state by calling it, then change it by assignment. Use `allowed_values()` to discover valid options first.

**Example**

```python
from ansys.fluent.core.solver import Viscous

viscous = Viscous(settings_source=solver_session)
viscous.model.allowed_values()      # discover valid options
viscous.model()                     # read current value
viscous.model = 'laminar'           # modify
```

**Complete when**

Reading the object back confirms your new value, and you chose it from the reported allowed values.

**Keep**

The before-and-after values and the allowed-values list you used.

[Solver settings objects](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/solver_settings_contents.html)

**Stage outcome:** You can pick the correct session type and read and modify Fluent settings through settings objects.

---

## 3. Modify an existing workflow

> **Outcome:** You can run an official example unchanged, then make a controlled change and predict its effect.

### □ Run one official example unchanged

**Activity**

Choose one end-to-end example from the PyFluent examples gallery, download it as a Python file or notebook, and run it without editing. The mixing elbow settings-API example is a good first choice.

**Example**

Run one example from the gallery, such as "Fluent setup and solution using settings objects".

**Complete when**

The example completes and produces the results shown in its documentation.

**Keep**

The unedited script and its captured output or result value.

[Examples gallery](https://fluent.docs.pyansys.com/version/stable/examples/index.html)

### □ Change one physical input and observe the effect

**Activity**

In the working example, change exactly one physical input, such as an inlet velocity, a turbulence model, or a material property. Predict the direction of the change first, then re-solve and compare with your saved baseline.

**Example**

```python
from ansys.fluent.core.solver import VelocityInlet

inlet = VelocityInlet(settings_source=solver_session, name="cold-inlet")
inlet.vmag.constant = 14   # change one input, then re-solve
```

**Complete when**

The result moves in the direction you predicted and differs from your baseline.

**Keep**

The modified script, your prediction, and the before-and-after result values.

[Examples gallery](https://fluent.docs.pyansys.com/version/stable/examples/index.html)

### □ Discover valid inputs with metadata and wildcards

**Activity**

For the input you changed, use metadata methods (`allowed_values()`, `min()`, `max()`, `is_active()`) to confirm your value is valid, and use a wildcard selection to apply a setting across several similarly named objects.

**Example**

```python
inlet = VelocityInlet(settings_source=solver_session, name="*inlet*")
inlet.vmag()   # inspect all matching inlets at once
```

**Complete when**

You can state the valid range or allowed values for your input and select multiple objects with one wildcard.

**Keep**

A short note of the metadata you queried and the wildcard pattern you used.

[Solver settings metadata and wildcards](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/solver_settings_contents.html)

**Stage outcome:** You can run, understand, and deliberately modify an official PyFluent workflow.

---

## 4. Run and assess a meaningful operation

> **Outcome:** You can drive a full mesh-setup-solve-extract cycle and read a CFD result into Python.

### □ Generate a volume mesh from geometry

**Activity**

Use a meshing session and the watertight guided workflow to import a geometry and create a volume mesh, then switch to the solver.

**Example**

```python
import ansys.fluent.core as pyfluent

meshing_session = pyfluent.Meshing.from_install(product_version=pyfluent.FluentVersion.v251)
watertight = meshing_session.watertight()
watertight.import_geometry.file_name = pyfluent.examples.download_file(
    "mixing_elbow.pmdb", "pyfluent/mixing_elbow")
watertight.import_geometry()
watertight.create_volume_mesh()
solver_session = meshing_session.switch_to_solver()
```

**Complete when**

A volume mesh is generated and you obtain a solver session from the meshing session.

**Keep**

The meshing script and a note of the mesh it produced.

[Meshing workflow](https://fluent.docs.pyansys.com/version/stable/user_guide/meshing/meshing_contents.html) · [User guide example](https://fluent.docs.pyansys.com/version/stable/user_guide/user_guide_contents.html)

### □ Set up boundary conditions, initialise, and solve

**Activity**

Set zone types and boundary conditions, initialise the solution, and run a fixed number of iterations.

**Example**

```python
setup, solution = solver_session.settings.setup, solver_session.settings.solution
setup.boundary_conditions.set_zone_type(zone_list=["cold-inlet", "hot-inlet"], new_type="velocity-inlet")
setup.boundary_conditions.set_zone_type(zone_list=["outlet"], new_type="pressure-outlet")
solution.initialization.hybrid_initialize()
solution.run_calculation.iterate(iter_count=100)
```

**Complete when**

The calculation runs the requested iterations without error.

**Keep**

The setup-and-solve script and a note of the convergence behaviour you observed.

[Simple end-to-end example](https://fluent.docs.pyansys.com/version/stable/user_guide/user_guide_contents.html)

### □ Extract a field result into Python

**Activity**

After solving, extract a field result, such as velocity on a surface, into a NumPy array using a field data request.

**Example**

```python
velocity_data = solver_session.fields.field_data.get_vector_field_data(
    field_name="velocity", surfaces=["cold-inlet"])
```

**Complete when**

The call returns field data (for example a NumPy array of the expected shape) for your chosen surface.

**Keep**

The extraction snippet and the returned array shape or summary values.

[Field data](https://fluent.docs.pyansys.com/version/stable/user_guide/fields/field_data.html)

**Stage outcome:** You can drive a full mesh-setup-solve-extract cycle and read CFD results into Python.

---

## 5. Build reusable automation

> **Outcome:** You can turn a working script into a parameterised tool that runs unattended and is reproducible.

### □ Parameterise your solve-and-extract script

**Activity**

Refactor your mesh-setup-solve-extract script into a function whose key physical inputs (such as inlet velocity, turbulence model, or iteration count) are arguments, returning the extracted result. Use `set_state()` with units where an object supports them.

**Example**

```python
def run_case(inlet_velocity, iters):
    inlet = VelocityInlet(settings_source=solver_session, name="cold-inlet")
    inlet.vmag.constant = inlet_velocity
    solution.initialization.hybrid_initialize()
    solution.run_calculation.iterate(iter_count=iters)
    return solver_session.fields.field_data.get_vector_field_data(
        field_name="velocity", surfaces=["cold-inlet"])
```

**Complete when**

Calling the function with two different input sets returns two different, correct results.

**Keep**

The parameterised function and a small table of inputs to outputs.

[Solver settings objects](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/solver_settings_contents.html) · [Units](https://fluent.docs.pyansys.com/version/stable/user_guide/units.html)

### □ Record and replay your workflow as a journal

**Activity**

Record your session to a journal so the sequence of commands is captured, and confirm you can convert or replay it. This makes your workflow reproducible and portable between runs.

**Example**

See the journaling guide for writing and replaying a PyFluent journal.

**Complete when**

You produce a journal from your session and use it to reproduce the same commands.

**Keep**

The generated journal file.

[Journaling](https://fluent.docs.pyansys.com/version/stable/user_guide/journal.html) · [Convert a journal](https://fluent.docs.pyansys.com/version/stable/user_guide/convert_journal.html)

### □ Run unattended in a container or under a scheduler

**Activity**

Run your script without a local interactive session, either in a container or as a scheduler job. For Slurm, submit a batch script that sets the Ansys root variable, activates your environment, and runs your Python file.

**Example**

```bash
#!/bin/bash
#SBATCH --job-name="pyfluent"
#SBATCH --nodes=8
#SBATCH --ntasks=32
export AWP_ROOT252=/apps/ansys_inc/v252
. ./venv/bin/activate
python run.py
```

**Complete when**

The job completes unattended and produces the same result as your interactive run.

**Keep**

The batch or container launch script and the captured job output.

[Scheduler support](https://fluent.docs.pyansys.com/version/stable/user_guide/session/launching_ansys_fluent.html) · [Make a container image](https://fluent.docs.pyansys.com/version/stable/user_guide/make_container_image.html)

**Stage outcome:** You can package your workflow as a parameterised, journal-backed, unattended tool.

---

## 6. Apply it to your own use case

> **Outcome:** You can reproduce one of your real Fluent cases from Python.

### □ Reproduce an existing case you already trust

**Activity**

Take a small case you have already run in the Fluent GUI, read its case file from PyFluent, run it, and extract a result you can compare against your known answer.

**Example**

```python
import ansys.fluent.core as pyfluent
from ansys.fluent.core import examples

solver_session = pyfluent.launch_fluent()
case_file_name = examples.download_file("mixing_elbow.cas.h5", "pyfluent/mixing_elbow")
solver_session.settings.file.read(file_name=case_file_name, file_type="case")
```

**Complete when**

Your PyFluent result matches your trusted GUI result within a tolerance you define. Substitute your own case file for the example file.

**Keep**

The reproduction script and a comparison of the PyFluent and GUI results.

[Launching and connecting to Fluent](https://fluent.docs.pyansys.com/version/stable/user_guide/session/launching_ansys_fluent.html)

### □ Work with your case data offline where possible

**Activity**

Use the offline `FileSession` tools to open case and data files and access field data without a live solver, for quick inspection or post-processing between solver runs.

**Example**

See the offline features guide for opening case and data files with `FileSession`.

**Complete when**

You read your own case and data files offline and access at least one field without launching the solver.

**Keep**

A short note of what you could inspect offline versus what needed a live session.

[Offline features](https://fluent.docs.pyansys.com/version/stable/user_guide/offline/offline_contents.html) · [Field data versus solution data](https://fluent.docs.pyansys.com/version/stable/user_guide/fields/field_vs_svars_data.html)

**Stage outcome:** You can migrate a real, trusted Fluent case into a reproducible PyFluent workflow.

---

## 7. Use AI-assisted capabilities

> **Outcome:** You can drive Fluent from an AI assistant through the PyFluent-MCP server using a discover-validate-execute-verify loop, and build a machine-learning model from PyFluent data, keeping the deterministic solver as the source of truth throughout.

PyFluent offers two distinct AI-related capabilities in the supplied material. First, **PyFluent-MCP** (`ansys.fluent.mcp`) is a Model Context Protocol server that lets an AI assistant, such as Claude Code or Visual Studio Code Copilot, drive Fluent through a set of deterministic tools. It is designed as a deterministic substrate: the AI assistant proposes actions, but Python never reaches the solver without passing an AST-sandbox validation, and every change is verified against live solver state. Second, PyFluent data can feed Python's own **machine-learning** libraries to build fast approximate models, which must always be checked against the solver. In both cases the Fluent solve is authoritative; the AI assistance is a drafting and orchestration aid that you verify.

### □ Install and connect the PyFluent-MCP server to your AI assistant

**Activity**

Install PyFluent-MCP with the PyFluent backend, register it with your MCP-compatible client (Claude Code, Visual Studio Code Copilot, Claude Desktop, or Cursor), and confirm the server starts. PyFluent-MCP requires Python 3.12 or later and a licensed local Fluent installation for live-session tools.

**Example**

```bash
pip install "ansys-fluent-mcp[pyfluent]"
ansys-fluent-mcp --help
```

Register with Claude Code for one project:

```bash
claude mcp add --transport stdio pyfluent -- uvx --from git+https://github.com/ansys/pyfluent-mcp ansys-fluent-mcp
```

**Complete when**

`ansys-fluent-mcp --help` prints the command-line help and your client lists the `pyfluent` MCP server as available.

**Keep**

Your client configuration snippet and a note of which client you registered.

[Installation](https://fluent-mcp.docs.pyansys.com/version/stable/getting_started/installation.html) · [IDE and client configuration](https://fluent-mcp.docs.pyansys.com/version/stable/getting_started/ide_configuration.html)

### □ Run one discover-validate-execute-verify loop through the assistant

**Activity**

Ask the assistant to connect to Fluent and make one small, well-defined setting change following the recommended loop. The loop is deterministic and self-checking: discovery reads the live tree, validation runs an AST pre-check, execution mutates the solver, and verification reads the state back. Always require `validate_code` before `run_code`.

**Example**

The official "Generate and apply a boundary condition change" usage example gives a complete documented transcript for one discover-validate-execute-verify loop.

**User prompt:** *"Set the velocity inlet `inlet-1` to 15 m/s."*

**Tool sequence the assistant follows:**

```text
1. Discover:  list_named_objects("setup.boundary_conditions.velocity_inlet")   # confirm the name
              get_state("setup.boundary_conditions.velocity_inlet")            # read current settings
2. Generate:  (a PyFluent settings snippet is produced in the orchestration layer)
3. Validate:  validate_code(<generated snippet>)                               # AST pre-check, no execution
4. Execute:   run_code(<validated snippet>)                                    # applies the settings API calls
5. Verify:    get_state("setup.boundary_conditions.velocity_inlet")           # confirms the new value
```

Note that `validate_code` runs before `run_code`, and the final `get_state` reads the value back from the live solver rather than trusting the assistant's narrative.

**Complete when**

The closing `get_state` confirms `inlet-1` is now 15 m/s, and you can show that `validate_code` ran and passed before `run_code` executed.

**Keep**

The prompt, the discovered named object, the validated snippet, and the before-and-after state read back from the solver.

[Usage examples](https://fluent-mcp.docs.pyansys.com/version/stable/examples/usage_examples.html) · [Tools and capabilities](https://fluent-mcp.docs.pyansys.com/version/stable/user_guide/tools_and_capabilities.html) · [Best practices](https://fluent-mcp.docs.pyansys.com/version/stable/user_guide/best_practices.html)

### □ Separate assistant-proposed actions from verified solver state

**Activity**

For one MCP-driven task, record which values the assistant proposed and which were confirmed by a deterministic tool (`get_state`, `summarize_setup`, `mesh_quality`, or `simulation_report`). Treat any code the assistant generates as untrusted until `validate_code` passes and the solver confirms the result. When `run_code` fails, re-discover with `get_state` and regenerate rather than retrying blindly.

**Example**

Use `mesh_quality(include_check=true)` to confirm a mesh claim, or `summarize_setup(scope="boundaries")` to confirm a boundary-condition change, rather than trusting the assistant's narrative.

**Complete when**

You can point to each proposed action and the deterministic tool output that confirmed or corrected it.

**Keep**

An annotated log of proposed versus solver-confirmed values, including any correction you made after a failed or inaccurate step.

[Best practices](https://fluent-mcp.docs.pyansys.com/version/stable/user_guide/best_practices.html) · [Overview](https://fluent-mcp.docs.pyansys.com/version/stable/user_guide/overview.html)

### □ Generate a design-of-experiments dataset with PyFluent

**Activity**

Sweep a small design of experiments over one or two inputs and record the solver result for each design point. Every data point comes from a deterministic Fluent solve. The official mixing elbow example varies cold-inlet and hot-inlet velocities and records the mass-weighted-average outlet temperature.

**Example**

```python
import numpy as np
import ansys.fluent.core as pyfluent

solver_session = pyfluent.launch_fluent(precision="double", processor_count=2, version="3d")
solver_session.settings.file.read_case(file_name=import_filename)

coldVelArr = np.array([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7])
hotVelArr = np.array([0.8, 1, 1.2, 1.4, 1.6, 1.8, 2.0])
resArr = np.zeros((coldVelArr.shape[0], hotVelArr.shape[0]))

for idx1, coldVel in np.ndenumerate(coldVelArr):
    for idx2, hotVel in np.ndenumerate(hotVelArr):
        solver_session.settings.setup.boundary_conditions.velocity_inlet[
            "cold-inlet"].momentum.velocity.value = coldVel
        solver_session.settings.setup.boundary_conditions.velocity_inlet[
            "hot-inlet"].momentum.velocity.value = hotVel
        solver_session.settings.solution.initialization.standard_initialize()
        solver_session.settings.solution.run_calculation.iterate(iter_count=200)
        res_tui = solver_session.scheme.exec(
            ('(ti-menu-load-string "/report/surface-integrals/mass-weighted-avg '
             'outlet () temperature no")',))
        resArr[idx1][idx2] = eval(res_tui.split(" ")[-1])
```

**Complete when**

`resArr` is fully populated with one Fluent-computed outlet temperature for each velocity combination.

**Keep**

The dataset (inputs and solver outputs) and the script that generated it.

[Design of Experiments and Machine Learning model building (example)](https://fluent.docs.pyansys.com/version/stable/examples/index.html)

### □ Build a machine-learning model and validate it against the solver

**Activity**

Train a machine-learning model on your PyFluent dataset, then validate it on solver-computed points the model never saw: split the data, fit the model, and score the held-out predictions against the Fluent results. The official example builds a Pandas dataframe from the DOE arrays, applies an 80/20 train-test split, fits an XGBoost regressor, and reports the R-squared score and the prediction-minus-ground-truth error in Kelvin. Treat the model as a fast approximation, never as a replacement for the solver.

**Example**

```python
import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import PolynomialFeatures, StandardScaler
from sklearn.metrics import r2_score
from xgboost import XGBRegressor

# Build the dataframe from the DOE arrays
rows = {"coldVel": [], "hotVel": [], "Result": []}
for idx1, coldVel in np.ndenumerate(coldVelArr):
    for idx2, hotVel in np.ndenumerate(hotVelArr):
        rows["coldVel"].append(coldVel)
        rows["hotVel"].append(hotVel)
        rows["Result"].append(resArr[idx1][idx2])
df = pd.DataFrame.from_dict(rows)

# Pre-process, then hold out 20% of solver points the model never sees
transformer = Pipeline([("poly", PolynomialFeatures(degree=2, include_bias=False)),
                        ("scale", StandardScaler())])
x_ct = ColumnTransformer([("t", transformer, ["coldVel", "hotVel"])], remainder="drop")
train_set, test_set = train_test_split(df, test_size=0.2, random_state=42)
X_train, X_test = x_ct.fit_transform(train_set), x_ct.fit_transform(test_set)
y_train, y_test = np.ravel(train_set["Result"]), np.ravel(test_set["Result"])

model = XGBRegressor(n_estimators=100, max_depth=10, eta=0.3, subsample=0.8, random_state=42)
model.fit(X_train, y_train)
test_predictions = model.predict(X_test)

# Validate against held-out solver results
print("Test Data R2 Score: %0.3f" % r2_score(test_predictions, y_test))
print("Predictions - Ground Truth (Kelvin): ", test_predictions - y_test)
```

**Complete when**

You can quote the test-set R-squared score and the per-point error in Kelvin against held-out Fluent solver results, and state where the model is and is not trustworthy.

**Keep**

The training script, the held-out comparison, the recorded R-squared and Kelvin errors, and your statement of the model's valid range.

[Design of Experiments and Machine Learning model building (example)](https://fluent.docs.pyansys.com/version/stable/examples/index.html) · [What can you do with PyFluent (FAQ)](https://fluent.docs.pyansys.com/version/stable/getting_started/faqs.html)

### □ Separate learned prediction from verified simulation

**Activity**

For one decision in your workflow, mark clearly which value came from the learned model and which came from a Fluent solve. Re-run the deciding point through the solver to confirm the model's recommendation before acting on it.

**Example**

An annotated note or script showing a model-predicted value beside its solver-confirmed value.

**Complete when**

You can point to each predicted value, its training data, and its independent solver confirmation.

**Keep**

The annotated comparison and your solver confirmation of the model's recommendation.

[Field data](https://fluent.docs.pyansys.com/version/stable/user_guide/fields/field_data.html)

**Stage outcome:** You can drive Fluent from an AI assistant through PyFluent-MCP and build a machine-learning model from PyFluent data, verifying every AI-assisted or learned result against the deterministic solver.

---

## 8. Choose an advanced pathway

> **Outcome:** You can select and begin one specialisation that matches your goals.

### □ Pick and scope one advanced pathway

**Activity**

Choose one specialisation and complete its first official guide or example:

- **Parallel and scheduler runs** using `processor_count`, `additional_arguments`, and `scheduler_options` for local, distributed, and Slurm execution.
- **Containers and remote connections** using `from_container`, Docker or Podman Compose, and `connect_to_fluent` across Windows, Linux, and WSL.
- **Parametric studies** using PyFluent-Parametric for Fluent's parametric workflows.
- **Visualization and reporting** using PyFluent-Visualization with PyVista and Matplotlib.

**Example**

For distributed parallel, adapt the launch call with `processor_count` and `additional_arguments="-t16 -cnf=m1:8,m2:8"`.

**Complete when**

You complete the first guide or example for your chosen pathway and can describe its next step.

**Keep**

The pathway you chose and the first artefact you produced in it.

[Parallel and scheduler support](https://fluent.docs.pyansys.com/version/stable/user_guide/session/launching_ansys_fluent.html) · [PyFluent-Parametric](https://parametric.fluent.docs.pyansys.com/version/stable/) · [PyFluent-Visualization](https://visualization.fluent.docs.pyansys.com/)

**Stage outcome:** You have entered a chosen specialisation with a working first artefact and a clear next step.

---

## Reference shelf

### Essential documentation

- [PyFluent documentation home](https://fluent.docs.pyansys.com/version/stable/)
- [Getting started](https://fluent.docs.pyansys.com/version/stable/getting_started/getting_started_contents.html)
- [User guide](https://fluent.docs.pyansys.com/version/stable/user_guide/user_guide_contents.html)
- [Solver settings objects](https://fluent.docs.pyansys.com/version/stable/user_guide/solver_settings/solver_settings_contents.html)
- [Field data](https://fluent.docs.pyansys.com/version/stable/user_guide/fields/field_data.html)
- [API reference](https://fluent.docs.pyansys.com/version/stable/api/index.html)

### Official examples

- [Examples gallery](https://fluent.docs.pyansys.com/version/stable/examples/index.html)

### Related PyAnsys libraries

- [PyFluent-Parametric](https://parametric.fluent.docs.pyansys.com/version/stable/)
- [PyFluent-Visualization](https://visualization.fluent.docs.pyansys.com/)

### Optional training

- [Getting Started With PyFluent (Ansys Learning Hub)](https://www.ansys.com/training-center/course-catalog/fluids/getting-started-with-pyfluent)
- [Getting Started With PyFluent (Ansys Innovation Courses)](https://innovationspace.ansys.com/product/getting-started-with-pyfluent/)
- [PyAnsys Training: Overview of PyFluent](https://www.youtube.com/watch?v=BY2FJ5qATCM)
- [A Guide to Streamlining CFD Simulations and Reporting](https://developer.synopsys.com/blog/guide-streamlining-cfd-simulations-and-reporting)
- [Automation of Fluent Using PyFluent (CADFEM)](https://www.cadfem.net/gb/en/shop/professional-development/training-elearning/fluid-dynamics/automation-of-fluent-using-pyfluent-18993.html)

### AI-related resources

- [PyFluent-MCP documentation](https://fluent-mcp.docs.pyansys.com/)
- [PyFluent-MCP overview](https://fluent-mcp.docs.pyansys.com/version/stable/user_guide/overview.html)
- [PyFluent-MCP tools and capabilities](https://fluent-mcp.docs.pyansys.com/version/stable/user_guide/tools_and_capabilities.html)
- [PyFluent-MCP IDE and client configuration](https://fluent-mcp.docs.pyansys.com/version/stable/getting_started/ide_configuration.html)
- [PyFluent-MCP best practices](https://fluent-mcp.docs.pyansys.com/version/stable/user_guide/best_practices.html)
- [PyFluent-MCP usage examples](https://fluent-mcp.docs.pyansys.com/version/stable/examples/usage_examples.html)
- [PyFluent-MCP repository](https://github.com/ansys/pyfluent-mcp)
- [Design of Experiments and Machine Learning model building (example)](https://fluent.docs.pyansys.com/version/stable/examples/index.html)
- [What can you do with PyFluent (FAQ)](https://fluent.docs.pyansys.com/version/stable/getting_started/faqs.html)

### Help and troubleshooting

- [FAQs](https://fluent.docs.pyansys.com/version/stable/getting_started/faqs.html)
- [Ansys developer forum](https://discuss.ansys.com)
- [Submit a bug report](https://github.com/ansys/pyfluent/issues)

### Source and contribution

- [PyFluent GitHub repository](https://github.com/ansys/pyfluent)
- [Contributing](https://fluent.docs.pyansys.com/version/stable/contributing/contributing_contents.html)
- [Changelog](https://fluent.docs.pyansys.com/version/stable/changelog.html)



