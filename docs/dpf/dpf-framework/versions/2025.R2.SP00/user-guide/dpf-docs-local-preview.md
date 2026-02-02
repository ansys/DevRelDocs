# Generate and preview DPF Framework documentation locally

This guide shows you how to create your own local copy of the DPF Framework documentation that includes specifications for custom operators and development versions.

## Before you begin

**For most users:** If you're using a standard DPF installation, the published documentation on the [Ansys Developer Portal](https://developer.ansys.com/docs/dpf) is sufficient.

**Use this guide if you need to:**

- Document custom operators you've developed.
- Work with plugins that don't have published documentation.
- View documentation for development versions of DPF.
- Test changes to the DPF Framework documentation.

## What this guide covers

This step-by-step guide walks you through:

- How to use basic command-line tools.
- How to create a local website to view your DPF Framework HTML documentation.
- How to update the "Operator specifications" section of your documentation based on a custom DPF installation.

## About the command line

This guide uses the **command line** (also called terminal or PowerShell on Windows).

**How to open the command line on Windows:**

1. Press `Windows key + R` to open the Run dialog.
2. Type `powershell` and press Enter.
3. A black or blue window will open, this is your command line.

**Important tips:**

- Type commands exactly as shown (including spaces and punctuation).
- Press **Enter** after typing each command.
- If you see an error, double-check your typing and try again.

## Create your DPF Framework HTML documentation

Create a local website to view DPF Framework documentation in a user-friendly format (like a regular website with navigation and search).
The DPF Framework documentation includes both general reference material and the DPF operators documentation.

First, install the DocFX website builder. Next, clone the official documentation source from [github.com/ansys/DevRelDocs](https://github.com/ansys/DevRelDocs). Use DocFX to generate a local version of the website.


### Step 1: Install the website builder (DocFX)

DocFX is a tool that converts your documentation files into a website.

**Open your command line** (see instructions above if you need help).

#### Check if you have .NET installed

First, check if your computer has the required software.

**Type this command:**

```powershell
dotnet --version
```

**What you should see:** A version number like `8.0` or higher

**If you see an error:** You need to install .NET SDK 8.0 or later from [Microsoft's website](https://dotnet.microsoft.com/download). Download and install it, then try the command again.

#### Install DocFX

**Type this command:**

```powershell
dotnet tool update -g docfx
```

**What this does:** Downloads and installs DocFX on your computer.

**What you'll see:** Progress text showing the installation.

**Verify it worked** by typing:

```powershell
docfx --version
```

**What you should see:** A version number like `2.78.3` or higher.

**If you see an error:** Try the installation command again, or ask your IT support for help.


### Step 2: Get the DPF Framework documentation source files

To get the source files of the DPF Framework documentation (the basis for your custom documentation), follow these steps.

1. **Clone the DPF Framework documentation** by typing:

   ```powershell
   git clone --filter=blob:none --sparse --depth 1 https://github.com/ansys/DevRelDocs.git
   cd DevRelDocs
   ```

   **What this does:** Prepares to download just the DPF Framework documentation from the repository.

2. **Download the files** by typing:

   ```powershell
   git sparse-checkout add 2025R2/dpf-framework-25-r2
   cd 2025R2/dpf-framework-25-r2
   ```

   **What this does:** Actually downloads the documentation files of interest and puts you at the documentation root.

### Step 3: Generate a local website

Turn your documentation files into a viewable website.

A default DocFX configuration file ``docfx_local.json`` is available for local documentation generation.
You can edit it to change [DocFX configuration options](https://dotnet.github.io/docfx/reference/docfx-json-reference.html) for your custom website.

1. **Build and start your website** by typing:

   ```powershell
   docfx docfx_local.json --serve
   ```

   **What this does:**
   - Converts all your documentation files into a website.
   - Starts a web server so you can view it.

2. **View your documentation:**
   - Open your web browser.
   - Go to: <http://localhost:8080>.
   - Use the search box to find specific operators or topics.

3. **When you're done viewing:**
   - Press `Ctrl + C` in the command line to stop the web server.

## How to update the "Operator specifications" section

Follow these steps to update the documentation section for DPF operators.

It shows how to generate up-to-date Markdown source files for the DPF operators based on a given DPF installation using CPython and the ansys-dpf-core library.

### Step 1: Install ansys-dpf-core

This step prepares your computer with the necessary software and files.

#### Install Python

Download and install the latest stable version of Python from the https://www.python.org/downloads.

If you want to use older versions of Python, the minimum version supported by ansys-dpf-core is 3.10.

 **Test your Python installation** by typing:

   ```powershell
   python --version
   ```

   **What this does:** Shows the version of your current default Python interpreter.

#### Create a Python virtual environment

Python virtual environments keep your projects separate from other Python installations on your computer.
It removes the risk from incompatibilities between dependencies.

1. **Create a new Python environment** by typing:

   ```powershell
   python -m venv .my_venv
   ```

   **What this does:** Creates a folder called `.my_venv` with a clean Python environment

2. **Activate your Python environment** by typing:

   ```powershell
   .my_venv\Scripts\activate.ps1
   ```

   **What this does:** Switches to using your new Python environment.

   **What you'll see:** Your command prompt will now show `(.my_venv)` at the beginning.


#### Install ansys-dpf-core

1. **Install the latest stable version of PyDPF-Core** by typing:

   ```powershell
   pip install ansys-dpf-core[operator_doc]
   ```

    This installs the ansys-dpf-core Python package with its dependencies for generating the operator documentation files.
    It also enables a command on the terminal to generate the operator documentation (see the next step).

    See the [PyDPF-Core documentation](https://dpf.docs.pyansys.com/version/stable/getting_started/install.html) for further details on how you can install ansys-dpf-core. 

2. **Check your installation** with:

   ```powershell
   dpf_generate_operators_doc.exe -h
   ```

   **What this does:** Checks the command for generating the operator documentation is correctly installed by ansys-dpf-core.

   **What you'll see:** Your terminal shows a description and available options for the command.

### Step 2: Install DPF server

You need to install the DPF server software. Select the installation method that best fits your setup. For detailed instructions, see [Installation](../getting-started/installation.md).

#### Set up DPF permissions

1. **Tell DPF you accept the licensing terms** by typing:

   ```powershell
   $env:ANSYS_DPF_ACCEPT_LA = "Y"
   ```

2. **Set your license server** by typing:

   ```powershell
   $env:ANSYSLMD_LICENSE_FILE = "1055@your-license-address" 
   ```

   **What these do:** Configure DPF to work with your license and permissions. See [Licensing](../getting-started/licensing.md) section for more information.

### Step 3: Update the DPF operators documentation

Next, generate the DPF operators Markdown documentation files. Choose the option that fits your needs.

**Update the current documentation with the default DPF installation:**

Move to the root folder of the ``dpf-framework`` documentation downloaded in section ``Create your DPF Framework HTML documentation``, step ``Get the DPF Framework documentation source files``.

```powershell
dpf_generate_operators_doc.exe -v
```

**What this does:** Creates documentation files at the current location for all DPF operators of the default DPF installation picked by PyDPF-Core.

**What you'll see:** Text showing progress as each operator is processed. This may take several minutes.

**Wait for completion:** The command is finished when you see your command prompt again (with `(.venv)` at the beginning).

The ``-v`` argument is used here to show progress information but can be omitted for the command to run without any output to the terminal.

When targeting the location of the DPF Framework documentation, it updates the source files for the DPF operator specifications section.

To learn how PyDPF-Core selects the default DPF installation, see the [PyDPF-Core documentation](https://dpf.docs.pyansys.com/version/stable/getting_started/dpf_server.html#manage-multiple-dpf-server-installations).

#### Optional: Select the DPF installation of interest

Update the documentation for operators of a specific DPF installation with the ``--ansys_path`` command argument:

```powershell
dpf_generate_operators_doc.exe --ansys_path "%PATH_TO_MY_DPF_INSTALL%"
```

**What this does:** Creates documentation files for available DPF operators of a given DPF installation.

#### Optional: Set the output path

Generate the output files at a location different than the current folder with the ``--output_path`` command argument:

```powershell
dpf_generate_operators_doc.exe --output_path "%PATH_TO_OUTPUT%"
```

**What this does:** Creates documentation files for available DPF operators in the default DPF installation at the given location.

#### Optional: Document private operators

Generate the output files for all operators including private operators with the ``--include_private`` command argument:

```powershell
dpf_generate_operators_doc.exe --include_private
```

#### Optional: Document Composites operators

Generate the output files for all operators including operators of the ``Composites`` DPF plugin with the ``--include_composites`` command argument:

```powershell
dpf_generate_operators_doc.exe --include_composites
```

This is useful for installations where the ``Composites`` plugin is present but not loaded by default.
This tells the script to try and load the plugin when starting DPF.

#### Optional: Document Sound operators

Generate the output files for all operators including operators of the ``Sound`` DPF plugin with the ``--include_sound`` command argument:

```powershell
dpf_generate_operators_doc.exe --include_sound
```

This is useful for installations where the ``Sound`` plugin is present but not loaded by default.
This tells the script to try and load the plugin when starting DPF.

#### Optional: Document operators of a specific plugin

This creates DPF operators documentation for only one plugin (faster, but incomplete).

**Type this command:**

```powershell
dpf_generate_operators_doc.exe --plugin "<plugin_name>"
```

**Important:** Replace `<plugin_name>` with your actual plugin name (keep the quotes).

You can find the name of the plugin an operator belongs to on its page in the [Operator specifications](https://developer.ansys.com/docs/dpf-framework-2025-r2/operator-specifications/operator-specifications.md) section of the DPF Framework documentation under property ``plugin``.

**Examples:**

For the ``CFF`` plugin:

```powershell
dpf_generate_operators_doc.exe --plugin "cff"
```

For the ``Mesh`` plugin:

```powershell
dpf_generate_operators_doc.exe --plugin "mesh"
```

**What this does:** Creates documentation only for the specified plugin.

### Step 4: Rebuild the documentation

Refer to the previous main section [Create your DPF Framework HTML documentation](#create-your-dpf-framework-html-documentation) and **Step 3: Generate a local website** to update the HTML documentation with the new content for DPF operators.

## Troubleshooting

**Problem:** Command not found errors.
**Solution:** Make sure you typed the command exactly as shown, including spaces and punctuation.

**Problem:** Permission errors.
**Solution:** Try running your command line as Administrator (right-click PowerShell and select "Run as Administrator").

**Problem:** Website shows errors or missing content.
**Solution:** Make sure you copied all files correctly and that your documentation generation completed successfully.

**Problem:** Can't access the website.
**Solution:** Make sure the `docfx serve` command is still running and check that you're using <http://localhost:8080>.

## Additional options

With your working documentation website:

- **Bookmark <http://localhost:8080>** for easy access (when the server is running).
- **Re-run the generation steps** whenever you update your operators or plugins.
- **Explore customization options** in the [DocFX documentation](https://dotnet.github.io/docfx/) if you want to change the appearance.
