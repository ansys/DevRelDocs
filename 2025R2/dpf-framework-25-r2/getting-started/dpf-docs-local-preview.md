# DPF documentation: Generation and local preview

This section details how to:

- Generate the DPF Framework documentation including operator specifications, as Markdown files using command-line tools.
- Build and serve a local HTML website to view the generated documentation using a static site generator such as Docfx.

## Generating Documentation

Follow the steps below to generate the DPF operator documentation in Markdown format.

### 1. Set up the environment

1. Clone the `pydpf-core` repository:

   ```bash
   git clone <repo-url>
   ```

2. Create and activate a virtual environment:

   ```bash
   python -m venv .venv
   .venv\Scripts\activate.ps1
   ```

3. Set the required environment variables:

   ```powershell
   $env:ANSYS_DPF_ACCEPT_LA = "Y"
   $env:ANSYSLMD_LICENSE_FILE = "1055@lyolmserv1.win.ansys.com"
   ```

### 2. Install the DPF server

Navigate to the `ansys_dpf_server_win_v2025.1.pre0` folder and install the package in editable mode:

```bash
pip install -e .
```

Then return to the `pydpf-core` folder:

```bash
cd ..
```

### 3. Generating Documentation

Follow these steps to generate DPF operator documentation in Markdown format.

#### Generate documentation for all operators

To generate documentation for **all available DPF operators**, run:

```bash
python .\.ci\generate_operators_doc.py
```

#### Generate documentation for a specific plugin

You can also generate documentation for a **specific plugin** using the `--plugin` option:

```bash
python .\.ci\generate_operators_doc.py --plugin "<plugin_name>"
```

Replace `<plugin_name>` with the name of the plugin.

#### Examples

- **CFF plugin:**

  ```bash
  python .\.ci\generate_operators_doc.py --plugin "cff"
  ```

- **Mesh plugin:**

  ```bash
  python .\.ci\generate_operators_doc.py --plugin "mesh"
  ```

### 4. Locate the generated documentation

The Markdown files and a `toc.yml` (necessary to build a local documentation website with Docfx) will be generated in:

```
doc/source/operators-doc
```

You can now copy these files into a Docfx project to preview the documentation locally. The next section explains how to install Docfx and build a local documentation website.

Would you like me to make it **more action-oriented (step-like)** or **more formal/documentation-style**?


## Viewing documentation locally

This guide explains how to install **Docfx** and use it to generate and serve a local HTML documentation site from your Markdown files.

### Install Docfx

#### Prerequisites

Before installing Docfx, make sure you have the following installed:

- [.NET SDK (6.0 or later)](https://dotnet.microsoft.com/download)

#### Installation steps

You can install Docfx as a global .NET tool:

```bash
dotnet tool install -g docfx
```

> ✅ This makes the `docfx` command available globally from the terminal.

To verify the installation:

```bash
docfx --version
```

### Set up the documentation site

#### Initialize a Docfx project

Navigate to the root folder of your documentation and run:

```bash
docfx init -q
```

This creates a basic Docfx project structure with a `docfx.json` configuration file.

#### Customize the configuration

Edit the `docfx.json` file to point to your Markdown documentation files. For example:

```json
{
  "metadata": [],
  "build": {
    "content": [
      {
        "files": ["**/*.md"],
        "exclude": ["obj/**", "_site/**"]
      }
    ],
    "destination": "_site"
  }
}
```

Make sure your Markdown files are located in the correct folders relative to the configuration.

### Copy the DPF documentation

Replace the files in the `Articles` folder of the Docfx project with the DPF documentation generated in `doc/source/operators-doc`.

### Build the documentation

To generate the static HTML site:

```bash
docfx build
```

The site will be generated in the `_site` directory (or the path specified in `docfx.json`).

### Serve the documentation locally

To view the documentation in your browser:

```bash
docfx serve _site
```

Then open your browser and go to:
`http://localhost:8080`


**Notes**

- You can add a custom theme or use templates to improve the design of the documentation.
- Consider placing your `docfx.json` in the root of your documentation project for easier builds.
- For more advanced configuration, see the official [Docfx documentation](https://dotnet.github.io/docfx/).
