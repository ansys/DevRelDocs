# PyMechanical learning roadmap

This roadmap measures what you can do with PyMechanical, not which pages you have read. Each milestone produces a demonstrable capability, an observable result, or a reusable artefact. PyMechanical is the open-source Python interface to Ansys Mechanical (finite element analysis software for structural engineering), supported in Ansys 2024 R2 and later.

## Your learning journey

**1. Get it working**  
Install PyMechanical, confirm it finds Mechanical, and start your first session.

**2. Understand the control model**  
Choose between embedding and remote session modes and reach the same object model from either.

**3. Modify an existing workflow**  
Run an official example unchanged, then change one input and observe the effect.

**4. Run and assess a meaningful operation**  
Build, solve, and read back a real structural result.

**5. Build reusable automation**  
Turn a working script into a parameterised, batch-capable tool.

**6. Apply it to your own use case**  
Reproduce one of your existing Mechanical analyses from Python.

**7. Use AI-assisted capabilities**  
Drive Mechanical from an AI assistant through the PyMechanical-MCP server, following a connect-script-solve-verify loop and confirming every result.

**8. Choose an advanced pathway**  
Pick a specialisation such as pooled batch solving, CI/CD, or graphics and reporting.

---

## 1. Get PyMechanical working

> **Outcome:** A working Python environment that can find your local Mechanical installation and start a session.

### □ Install PyMechanical into a virtual environment

**Activity**

Create and activate a Python virtual environment, then install the core package from PyPI. A licensed local installation of Mechanical 2024 R2 or later is required. The package supports Python 3.12 through 3.14 on Windows, Linux, and Mac.

**Example**

```bash
pip install ansys-mechanical-core
```

**Complete when**

`pip show ansys-mechanical-core` reports an installed version inside your activated virtual environment.

**Keep**

A note of your environment name, Python version, and the installed package version.

[Installation guide](https://mechanical.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Confirm PyMechanical can locate Mechanical

**Activity**

From a Python prompt, ask the tools path helper to locate your Mechanical executable. If Mechanical is installed in a non-default location, save the path manually so PyMechanical can find it.

**Example**

```pycon
>>> from ansys.tools.common.path import find_mechanical
>>> find_mechanical()
('C:/Program Files/ANSYS Inc/v261/aisol/bin/winx64/AnsysWBU.exe', 26.1)
```

**Complete when**

`find_mechanical()` returns a path and version tuple for your installation.

**Keep**

The returned executable path and version, recorded for later use in `exec_file`.

[Verify your installation](https://mechanical.docs.pyansys.com/version/stable/getting_started/installation.html)

### □ Start your first Mechanical session

**Activity**

Start a session in whichever mode you expect to use, and print it to confirm a licence is checked out. On Linux, prepend `mechanical-env` before starting Python for embedding mode.

**Example**

```python
from ansys.mechanical.core import App

app = App()
print(app)
```

**Complete when**

The printed banner shows `Ansys Mechanical [Ansys Mechanical Enterprise]` (or your licence level) with a product version and build date. An empty pair of brackets means no licence was retrieved.

**Keep**

The printed banner text as evidence of a licensed session.

[Choose your mode and verify](https://mechanical.docs.pyansys.com/version/stable/getting_started/installation.html)

**Stage outcome:** You can install PyMechanical, prove it finds Mechanical, and open a licensed session.

---

## 2. Understand the control model

> **Outcome:** You can choose the right mode for a task and reach the same Mechanical object model from either mode.

### □ Choose between embedding and remote session mode

**Activity**

Read the at-a-glance comparison and answer the decision questions for one concrete task you care about, such as an interactive notebook study or a containerised batch job. Record which mode you chose and why. Embedding runs Mechanical inside your Python process with direct object access; remote session runs Mechanical as a separate gRPC server and sends scripts as strings.

**Example**

Decision input: "I need the Mechanical GUI and process isolation for a CI job" leads to remote session mode. "I need full object-model traversal in a Jupyter notebook" leads to embedding mode.

**Complete when**

You have written one or two sentences naming your chosen mode and the deciding factors.

**Keep**

Your mode decision note, to guide the rest of the roadmap.

[Choose your mode](https://mechanical.docs.pyansys.com/version/stable/getting_started/choose_your_mode.html)

### □ Reach the Mechanical object model in embedding mode

**Activity**

Create an embedded `App`, pass `globals()` so the scripting entry points such as `Model`, `DataModel`, and `ExtAPI` are available without a prefix, then create one object in the tree and rename it.

**Example**

```python
from ansys.mechanical.core import App

app = App(globals=globals())
ns = DataModel.Project.Model.AddNamedSelection()
ns.Name = "Jarvis"
```

**Complete when**

Reading back `ns.Name` returns `"Jarvis"`, confirming direct object access.

**Keep**

The short script and the confirmed object name.

[Embedding overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/overview.html) · [Globals](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/globals.html)

### □ Reach the same model in remote session mode

**Activity**

Launch a remote session and send an equivalent instruction as a string with `run_python_script()`. Observe that results and errors come back Pythonically.

**Example**

```python
from ansys.mechanical.core import launch_mechanical

mechanical = launch_mechanical()
result = mechanical.run_python_script("ExtAPI.DataModel.Project.ProjectDirectory")
print(result)
```

**Complete when**

The call returns the project directory string, and sending a deliberately invalid command raises an error you can catch.

**Keep**

The returned project directory and a note that the same API underlies both modes.

[Remote session overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/remote_session/overview.html)

### □ Map the core Mechanical entities to API entry points

**Activity**

Using the scripting fundamentals page, list the core entities (CAD, mesh, materials, objects, graphics, solvers, post) and identify the entry point you would use to reach each: `ExtAPI`, `DataModel`, `Model`, `Tree`, and `Graphics`.

**Example**

`Tree` is the Outline; `Graphics` is the 3D graphics engine; `DataModel` reaches CAD and mesh entities and Outline objects.

**Complete when**

You can name, from memory, which entry point reaches the Outline and which reaches the graphics engine.

**Keep**

A one-page entity-to-entry-point cheat note in your own words.

[Scripting fundamentals](https://mechanical.docs.pyansys.com/version/stable/user_guide/scripting/overview.html)

**Stage outcome:** You can pick the correct mode and reach the Mechanical object model through the right entry points in either mode.

---

## 3. Modify an existing workflow

> **Outcome:** You can run an official example unchanged, then make a controlled change and predict its effect.

### □ Run one official example unchanged

**Activity**

Choose one example from the PyMechanical examples gallery that matches your chosen mode. Run it end to end without editing it, and capture its documented output.

**Example**

Run one example required from the examples gallery for your mode.

**Complete when**

The example completes and produces the output shown in its documentation.

**Keep**

The unedited script and its captured output.

[Examples gallery](https://mechanical.docs.pyansys.com/version/stable/examples/index.html)

### □ Change one input and observe the effect

**Activity**

In the working example, change exactly one physical input, such as a load magnitude, a material assignment, or a mesh size. Predict the direction of the change first, then run and compare against the original output.

**Example**

Change a single applied pressure or force value in the example you ran, and re-solve.

**Complete when**

The result moves in the direction you predicted and differs from your saved baseline output.

**Keep**

The modified script, your prediction, and the before-and-after result values.

[Examples gallery](https://mechanical.docs.pyansys.com/version/stable/examples/index.html)

### □ Locate the API behind one line of the example

**Activity**

Pick one line of the example that performs a meaningful action and find the API it calls in the Mechanical API documentation. Record the required inputs and the return type.

**Example**

For a line that adds an analysis, find the corresponding data model method and note its arguments.

**Complete when**

You can state, for that one line, which API is called and what inputs it needs.

**Keep**

A short note linking the example line to its API reference entry.

[Mechanical API documentation](https://mechanical.docs.pyansys.com/version/stable/api/index.html) · [Mechanical scripting interface APIs (Developer Portal)](https://developer.synopsys.com/docs/mechanical-scripting-interface/index.md)

**Stage outcome:** You can run, understand, and deliberately modify an official PyMechanical workflow.

---

## 4. Run and assess a meaningful operation

> **Outcome:** You can build, solve, and read back a real structural result from Python.

### □ Build a minimal analysis from Python

**Activity**

Starting from an embedded `App` (or a remote session), add a static structural analysis to the model. Use the recording feature in the Mechanical Scripting View if you need to discover the exact APIs for a setup step.

**Example**

```python
from ansys.mechanical.core import App

app = App(globals=globals())
Model.AddStaticStructuralAnalysis()
```

**Complete when**

The analysis appears in the model tree, confirmed by traversing `Model` or `Tree`.

**Keep**

The setup script and a printed confirmation of the analysis in the tree.

[Embedding overview](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/overview.html) · [Recording in the Scripting View](https://mechanical.docs.pyansys.com/version/stable/user_guide/scripting/overview.html)

### □ Solve and read back a result

**Activity**

Complete the analysis with the inputs it needs (geometry or a named selection, materials, mesh, loads, and supports), solve it, and extract at least one numerical result back into Python.

**Example**

Worked setup and result extraction required from the examples gallery for your chosen physics.

**Complete when**

Your script returns a numerical result, such as a maximum deformation or stress value, into a Python variable.

**Keep**

The solved script and the extracted result value with its units.

[Examples gallery](https://mechanical.docs.pyansys.com/version/stable/examples/index.html)

### □ Defer background work for a faster setup

**Activity**

Wrap a block of repeated model edits in a `Transaction` so Mechanical defers its background tasks until the block completes, then compare the behaviour with the un-wrapped version.

**Example**

```python
with Transaction():
    for obj in Tree:
        obj.Name = obj.Name + " suffix"
```

**Complete when**

The block runs inside a `Transaction` and produces the same tree changes as the un-wrapped version.

**Keep**

The transaction-wrapped snippet and a note of where it is worth using.

[Scripting fundamentals](https://mechanical.docs.pyansys.com/version/stable/user_guide/scripting/overview.html)

**Stage outcome:** You can drive a full build-solve-read cycle and extract engineering results into Python.

---

## 5. Build reusable automation

> **Outcome:** You can turn a working script into a parameterised tool that runs unattended.

### □ Parameterise your solved script

**Activity**

Refactor your build-solve-read script so key inputs (such as load, material, or mesh size) are function arguments, and the function returns the result value. Add global scripting entry points with `update_globals()` if you did not pass `globals()` at construction.

**Example**

```python
from ansys.mechanical.core import App

app = App()
app.update_globals(globals())
```

**Complete when**

Calling your function with two different input sets returns two different, correct results.

**Keep**

The parameterised function and a small table of inputs to outputs you produced.

[Globals](https://mechanical.docs.pyansys.com/version/stable/user_guide/embedding/globals.html)

### □ Run a script unattended from the command line

**Activity**

Save an embedding script (without the PyMechanical import lines if you run it through Mechanical directly) and run it non-interactively with the `ansys-mechanical` CLI. Use `-r` to select a version when several are installed and `-h` to see all options.

**Example**

```bash
ansys-mechanical -i file.py
```

**Complete when**

The script runs to completion from the command line and produces the same result as your interactive run.

**Keep**

The batch script and the captured console output.

[ansys-mechanical CLI](https://mechanical.docs.pyansys.com/version/stable/user_guide/cli/ansys-mechanical.html)

### □ Solve many inputs with a pool of servers

**Activity**

Use `LocalMechanicalPool` to create several remote instances and run a batch of input files, or map a custom function over them. Confirm the self-healing pool restarts a failed instance when `restart_failed=True`.

**Example**

```pycon
>>> from ansys.mechanical.core import LocalMechanicalPool
>>> pool = LocalMechanicalPool(10, version="261")
>>> files = [f"test{index}.py" for index in range(1, 21)]
>>> outputs = pool.run_batch(files)
>>> len(outputs)
20
```

**Complete when**

`run_batch` (or `map`) returns one output per input file.

**Keep**

The pool script and the list of returned outputs.

[Create a pool of Mechanical servers](https://mechanical.docs.pyansys.com/version/stable/user_guide/remote_session/pool.html)

**Stage outcome:** You can package your workflow as a parameterised, batch-capable, unattended tool.

---

## 6. Apply it to your own use case

> **Outcome:** You can reproduce one of your real Mechanical analyses from Python.

### □ Reproduce an existing analysis you already trust

**Activity**

Pick a small analysis you have already run in the Mechanical GUI and rebuild it with PyMechanical. Use the Scripting View recording to capture unfamiliar setup steps, then port them into your script.

**Example**

Recorded API calls from your own Mechanical session, adapted into a PyMechanical script.

**Complete when**

Your PyMechanical result matches the GUI result within an acceptable tolerance you define.

**Keep**

The reproduction script and a comparison of the PyMechanical and GUI results.

[Recording in the Scripting View](https://mechanical.docs.pyansys.com/version/stable/user_guide/scripting/overview.html)

### □ Diagnose behaviour differences between GUI and batch

**Activity**

If a step works in the GUI but fails under embedding, run it through the CLI in batch mode to determine whether it is a Mechanical batch-mode limitation rather than a PyMechanical issue.

**Example**

```bash
ansys-mechanical -i script.py
```

**Complete when**

You can state whether a failing step is a batch-mode limitation or a scripting error in your code.

**Keep**

A short diagnosis note for any step that behaved differently in batch.

[FAQs](https://mechanical.docs.pyansys.com/version/stable/faq.html)

**Stage outcome:** You can migrate a real, trusted analysis from the GUI into a reproducible PyMechanical script.

---

## 7. Use AI-assisted capabilities

> **Outcome:** You can drive Mechanical from an AI assistant through the PyMechanical-MCP server, following a connect-script-solve-verify loop, and confirm every AI-assisted result against Mechanical.

PyMechanical-MCP (`ansys-mechanical-mcp`) is a Model Context Protocol server that connects AI assistants, such as Claude Code, Visual Studio Code Copilot, or Claude Desktop, to Ansys Mechanical through PyMechanical. It uses PyMechanical remote-session mode over gRPC (not embedding), maintains a persistent Python session across tool calls, and exposes tools for lifecycle, scripting, solving, inspection, and result export. The AI assistant proposes actions and generates PyMechanical code, but Mechanical executes it and you verify the result. Ask for `get_guidelines_for` before generating code, validate state with `get_model_info`, and treat generated code as untrusted until it runs and Mechanical confirms the outcome.

### □ Install and connect the PyMechanical-MCP server to your AI assistant

**Activity**

Install PyMechanical-MCP (a separate package from `ansys-mechanical-core`) and register it with your MCP-compatible client. PyMechanical-MCP requires Python 3.12 through 3.14 and a Mechanical installation reachable over a gRPC endpoint. You can run it directly, or launch it from your client with `uvx`.

**Example**

```bash
pip install ansys-mechanical-mcp
ansys-mechanical-mcp
```

Register with Claude Code for one project:

```bash
claude mcp add --transport stdio pymechanical-mcp -- \
  uvx --index-strategy unsafe-best-match \
  --from git+https://github.com/ansys/pymechanical-mcp \
  ansys-mechanical-mcp
```

**Complete when**

The server starts and your client lists the `pymechanical-mcp` server as available.

**Keep**

Your client configuration snippet and a note of which client you registered.

[Installation](https://mechanical-mcp.docs.pyansys.com/version/stable/getting_started/installation.html) · [IDE and client configuration](https://mechanical-mcp.docs.pyansys.com/version/stable/getting_started/ide_configuration.html)

### □ Run the first connect-and-inspect loop through the assistant

**Activity**

Follow the documented first workflow: check status, then launch or connect to Mechanical. Always check status first so the assistant chooses between `launch_mechanical` and `connect_to_mechanical` correctly. By default `launch_mechanical` prefers a visible GUI session; pass `batch=true` to force a background launch.

**Example**

The documented first-workflow checklist is:

```text
1. check_mechanical_status
2. launch_mechanical  (or connect_to_mechanical with ip and port)
3. upload_file        (geometry or script, as needed)
4. run_python_script  (model setup)
5. solve_analysis
6. get_model_info, export_results, and/or screenshot
```

A natural-language prompt that triggers the opening steps, such as: *"Check whether Mechanical is installed, then launch a new session."*

**Complete when**

The assistant reports an active Mechanical session, confirmed by `check_mechanical_status`.

**Keep**

The prompt and the tool responses showing the connected session.

[Quick start](https://mechanical-mcp.docs.pyansys.com/version/stable/getting_started/quick_start.html) · [Tools and capabilities](https://mechanical-mcp.docs.pyansys.com/version/stable/user_guide/tools_and_capabilities.html)

### □ Run an end-to-end analysis through generated PyMechanical code

**Activity**

Drive a complete analysis with the assistant using the tool workflow: upload geometry, set up the model with `run_python_script`, solve with `solve_analysis`, and capture a result with `screenshot` or `export_results`. Ask for `get_guidelines_for` the relevant topic (geometry, meshing, analysis setup, postprocessing) before each stage so generated commands follow Mechanical best practice, and save checkpoints with `save_project` after expensive setup steps.

**Example**

The official cantilever beam workflow is driven by a single documented prompt and this tool sequence:

```text
Prompt: "Perform a static structural analysis of a cantilever beam.
         Upload the geometry file beam.step.
         - Material: Structural Steel (default)
         - Mesh: default mesh with element size 5 mm
         - Fixed support on the YZ face at X = -100 mm
         - Pressure load of 1,000,000 pascals on the top face (XY face at Z = +5 mm)
         - Results: Total Deformation and equivalent stress
         - Take a screenshot of the equivalent stress result"

connect_to_mechanical / launch_mechanical  ->  session ready
upload_file (beam.step)                     ->  geometry uploaded
run_python_script (material, mesh, supports, load)
solve_analysis                              ->  solved
run_python_script (total deformation, equivalent stress)
screenshot                                  ->  equivalent-stress contour
```

**Complete when**

`solve_analysis` completes and you obtain a result (for example the equivalent-stress contour or a deformation value) read back from Mechanical.

**Keep**

The prompt, the generated scripts, the solve confirmation, and the screenshot or exported result.

[Cantilever beam workflow](https://mechanical-mcp.docs.pyansys.com/version/stable/examples/workflows/cantilever_beam.html) · [Best practices](https://mechanical-mcp.docs.pyansys.com/version/stable/user_guide/best_practices.html)

### □ Separate assistant-proposed actions from verified Mechanical state

**Activity**

For one MCP-driven task, record which values the assistant proposed and which Mechanical confirmed with a tool (`get_model_info`, `get_mechanical_logs`, `screenshot`, or `export_results`). Use `get_model_info` after setup and after solve to validate state, and check `get_mechanical_logs` for warnings and errors before trusting a result.

**Example**

Use `get_model_info` to confirm the solved state and `get_mechanical_logs` to check for solver warnings, rather than trusting the assistant's narrative. Re-read one result value independently with `run_python_code`.

**Complete when**

You can point to each proposed action and the Mechanical tool output that confirmed or corrected it.

**Keep**

An annotated log of proposed versus Mechanical-confirmed values, including any correction after a failed step.

[Best practices](https://mechanical-mcp.docs.pyansys.com/version/stable/user_guide/best_practices.html) · [Overview](https://mechanical-mcp.docs.pyansys.com/version/stable/user_guide/overview.html)

**Stage outcome:** You can drive Mechanical from an AI assistant through PyMechanical-MCP and verify every AI-assisted result against Mechanical before trusting it.

---

## 8. Choose an advanced pathway

> **Outcome:** You can select and begin one specialisation that matches your goals.

### □ Pick and scope one advanced pathway

**Activity**

Choose one specialisation and complete its first official example or guide:

- **Pooled and distributed batch solving** with `LocalMechanicalPool` for parameter sweeps.
- **CI/CD and containers** using remote session mode in Docker.
- **Advanced embedding examples** for deeper object-model workflows.
- **Graphics and reporting** using the graphics extra and the 3D graphics engine.

**Example**

For distributed solving, adapt the `pool.map` example to run your own parameterised function across instances.

**Complete when**

You complete the first example or guide for your chosen pathway and can describe its next step.

**Keep**

The pathway you chose and the first artefact you produced in it.

[Advanced embedding examples](https://embedding.examples.mechanical.docs.pyansys.com/examples/index.html) · [Remote session examples](https://examples.mechanical.docs.pyansys.com/index.html) · [Docker setup](https://mechanical.docs.pyansys.com/version/stable/getting_started/docker.html)

**Stage outcome:** You have entered a chosen specialisation with a working first artefact and a clear next step.

---

## Reference shelf

### Essential documentation

- [PyMechanical documentation home](https://mechanical.docs.pyansys.com/)
- [Getting started](https://mechanical.docs.pyansys.com/version/stable/getting_started/index.html)
- [User guide](https://mechanical.docs.pyansys.com/version/stable/user_guide/index.html)
- [Architecture](https://mechanical.docs.pyansys.com/version/stable/architecture.html)
- [Mechanical API documentation](https://mechanical.docs.pyansys.com/version/stable/api/index.html)
- [Mechanical scripting interface APIs (Developer Portal)](https://developer.synopsys.com/docs/mechanical-scripting-interface/index.md)

### Official examples

- [Examples gallery](https://mechanical.docs.pyansys.com/version/stable/examples/index.html)
- [Advanced examples: embedding mode](https://embedding.examples.mechanical.docs.pyansys.com/examples/index.html)
- [Basic examples: remote session mode](https://examples.mechanical.docs.pyansys.com/index.html)

### Optional training

- [PyAnsys Training: Overview of PyMAPDL and PyMechanical](https://www.youtube.com/watch?v=Qh4Y07OZdms)
- [Exploring PyMechanical access methods: a brief overview](https://developer.synopsys.com/blog/exploring-pymechanical-access-methods-brief-overview)
- [Create a report from a saved Mechanical session (.mechdb or .mechdat)](https://developer.synopsys.com/blog/create-report-saved-mechanical-session-mechdb-or-mechdat)
- [Ansys Mechanical Scripting (Ansys Learning Hub)](https://learninghub.ansys.com/learn/courses/902/ansys-mechanical-scripting)

### AI-related resources

- [PyMechanical-MCP documentation](https://mechanical-mcp.docs.pyansys.com/)
- [PyMechanical-MCP overview](https://mechanical-mcp.docs.pyansys.com/version/stable/user_guide/overview.html)
- [PyMechanical-MCP tools and capabilities](https://mechanical-mcp.docs.pyansys.com/version/stable/user_guide/tools_and_capabilities.html)
- [PyMechanical-MCP IDE and client configuration](https://mechanical-mcp.docs.pyansys.com/version/stable/getting_started/ide_configuration.html)
- [PyMechanical-MCP best practices](https://mechanical-mcp.docs.pyansys.com/version/stable/user_guide/best_practices.html)
- [PyMechanical-MCP cantilever beam workflow](https://mechanical-mcp.docs.pyansys.com/version/stable/examples/workflows/cantilever_beam.html)
- [PyMechanical-MCP repository](https://github.com/ansys/pymechanical-mcp)

### Help and troubleshooting

- [Troubleshooting](https://mechanical.docs.pyansys.com/version/stable/getting_started/troubleshooting.html)
- [Ansys developer forum for interface questions](https://discuss.ansys.com/)
- [FAQs](https://mechanical.docs.pyansys.com/version/stable/faq.html)
- [Known issues and limitations](https://mechanical.docs.pyansys.com/version/stable/kil/index.html)
- [Discussions for development questions](https://github.com/ansys/pymechanical/discussions)

### Source and contribution

- [PyMechanical repository](https://github.com/ansys/pymechanical)
- [Issues](https://github.com/ansys/PyMechanical/issues)
- [Contribute](https://mechanical.docs.pyansys.com/version/stable/contribute.html)

