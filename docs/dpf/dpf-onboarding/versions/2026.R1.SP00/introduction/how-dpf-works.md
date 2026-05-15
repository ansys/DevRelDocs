# How DPF works

## DPF architecture: server and client

DPF uses a **client-server architecture**, which means it's split into two parts that work together:

![alt text](../images/dpf-client-server-logic.drawio.svg)

**The DPF Server:**

- Contains all the data processing capabilities (operators, plugins)
- Loads and manages your simulation data in memory
- Performs all the computational work
- Can process data locally on your machine or remotely on more powerful hardware

**The DPF Client:**

- Provides the programming interface you interact with (Python, C++, or C#)
- Sends your processing requests to the server
- Receives results back from the server
- Makes it easy to build workflows without worrying about the underlying complexity

**Why this separation matters:**

This architecture gives you flexibility in how you use DPF. You write your scripts using the client library in your preferred language, and the server handles the heavy computational work. The client and server can run on the same machine for local work, or you can connect to a remote server for processing large datasets on more powerful hardware.

<details>
<summary>Advanced readers: How the DPF server loads plugins</summary>

When the DPF server starts, it loads the `DataProcessingCore` shared library (`.dll` or `.so`) as the core entry point. This core library bootstraps the server and loads all registered plugins. Each plugin is a shared library that registers a set of operators with the server. When you call an operator from your client code, the server routes the request to the operator implementation provided by the appropriate plugin.

This modular design means you can extend DPF by writing new plugins that register custom operators, without modifying the core server.

</details>

## Where to get a DPF server

The DPF server is distributed to customers in two ways:

**1. DPF Included with Ansys Installation**

When you install Ansys Workbench (which comes with any Ansys physical simulation product) using the Ansys Installer, DPF server is automatically included in the installation.

This means you don't need a separate DPF installation - it's already there as part of your Ansys installation. You can:

- Use it from within Mechanical's scripting environment
- Connect to it from external Python, C++, or C# scripts
- Access it just like you would with the standalone package described below

**2. DPF Standalone Package**

A self-contained installation package that includes:

- The DPF server with all core plugins
- Everything needed to run DPF independently

This package can be downloaded separately and installed on any machine. You can then connect to it using any of the DPF client libraries (Python, C++, or C#).

**Key difference between the two options:**

The DPF server installed through the Ansys Installer includes **all official Ansys plugins** (core plugins, composites, sound processing, etc.). The standalone package includes core functionality but may not include all specialized plugins. For access to the complete set of DPF capabilities, use the version that comes with your Ansys installation.

## Client libraries: choose your language

DPF client libraries are available in multiple programming languages, all providing the same capabilities:

- **PyDPF-Core (Python)**: The most popular choice for scripting and automation. Easy to learn, excellent for data analysis and integration with scientific Python tools (NumPy, Matplotlib, Pandas).

- **DPF C++ API**: For high-performance applications or integration with C++ codebases.

- **DPF C# API**: For integration with .NET applications or Windows-based tools.

All these libraries communicate with the same DPF server, so you can choose the language that best fits your workflow and existing tools. Core DPF concepts - operators, fields, and workflows - are available across all client languages, as they reflect the server's capabilities directly.

<details>
<summary>Advanced readers: API surface differences between client languages</summary>

While the core server APIs are exposed consistently across all client libraries, the level of abstraction each library offers can differ. Higher-level convenience objects that bundle common operations together may be available in one library but implemented differently in another. When in doubt, refer to the API documentation for your chosen language to check what is available.

</details>

<details>
<summary>Advanced readers: How a client call reaches the server</summary>

When you call an operator or access a DPF object from a client library, here is what happens step by step:

1. **Client call:** Your code calls a method on a client-side object (Python, C++, or C#).
2. **Transport:** The client library forwards the request to the DPF server. The default mode for Python, C#, and C++ (HGP) is **InProcess**, where the server runs inside the same process as your client and communication bypasses any network layer entirely. Alternatively, a **gRPC** remote mode is available for Python and C++ clients when you need to connect to a server running on a separate machine or process.
3. **Server dispatch:** The server receives the request, identifies the target operator, and executes the operation in the kernel (native code loaded from the appropriate plugin).
4. **Result return:** The result is returned to your client and deserialized into the appropriate object for your language.

</details>

## DPF in Mechanical (MechDPF)

Ansys Mechanical provides built-in access to DPF through its scripting environment, allowing you to perform custom data processing without installing additional software.

**How to access DPF in Mechanical (MechDPF):**

- Use the [Mechanical Scripting View](https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/corp/v261/en/act_script/mech_script_view.html) for interactive MechDPF scripts or to debug and validate a script.
- Use the [Python Code objects](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v261/en/wb_sim/ds_python_code_sect.html) to execute MechDPF scripts in response to events occurring in the Mechanical application for a given workflow
- Use [Python Result objects](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v261/en/wb_sim/ds_python_result.html) to evaluate and visualize output quantities by executing MechDPF scripts

The [MechDPF API](https://ansyshelp.ansys.com/public/account/secured?returnurl=//Views/Secured/corp/v261/en/act_script/mech_apis_data_process_frame.html) is based on the DPF C# API, but presents a Python syntax through IronPython, making it accessible to Python users without learning C#.
