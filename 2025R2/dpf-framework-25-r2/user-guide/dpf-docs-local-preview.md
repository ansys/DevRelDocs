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
- How to create a local website to view your custom documentation.
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

You first get the sources for the official documentation at https://github.com/ansys/DevRelDocs, then update them locally, and generate a local website. 

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

Follow these steps to create DPF operators documentation files. These are the Markdown source files for the DPF operators section of the documentation.

### Step 1: Set up your working environment

This step prepares your computer with the necessary software and files.

#### Download the pydpf-core project

1. **Open your command line** (see instructions above if you need help).

2. **Navigate to a folder where you want to work**. For example, to work in your tmp folder, type:

   ```powershell
   cd C:\Users\$env:USERNAME\tmp
   ```

   **What this does:** Changes your current location to your tmp folder.

3. **Download the pydpf-core** by typing:

   ```powershell
   git clone https://github.com/ansys/pydpf-core.git
   ```

   **What this does:** Downloads all the pydpf-core source code to your computer.

#### Create a Python environment

Python environments keep your project separate from other Python installations on your computer.

1. **Create a new Python environment** by typing:

   ```powershell
   python -m venv .venv
   ```

   **What this does:** Creates a folder called `.venv` with a clean Python environment

2. **Activate your Python environment** by typing:

   ```powershell
   .venv\Scripts\activate.ps1
   ```

   **What this does:** Switches to using your new Python environment.

   **What you'll see:** Your command prompt will now show `(.venv)` at the beginning.

#### Set up DPF permissions

1. **Tell DPF you accept the licensing terms** by typing:

   ```powershell
   $env:ANSYS_DPF_ACCEPT_LA = "Y"
   ```

1. **Set your license server** by typing:

   ```powershell
   $env:ANSYSLMD_LICENSE_FILE = "1055@your-license-address" 
   ```

   **What these do:** Configure DPF to work with your license and permissions. See [Licensing](../getting-started/licensing.md) section for more information.

### Step 2: Install DPF server

You need to install the DPF server software. Select the installation method that best fits your setup. For detailed instructions, see [Installation](../getting-started/installation.md).

### Step 3: Install pydpf-core and required tools

Next, install the main pydpf-core software and a tool needed for documentation generation.

1. **Move to the pydpf-core foler** by typing:

   ```powershell
   cd pydpf-core
   ```

   **What this does:** Moves down one level to the `pydpf-core` folder

2. **Install pydpf-core** by typing:

   ```powershell
   pip install -e .
   ```

   **What this does:** Installs pydpf-core in development mode so you can generate DPF operators documentation.

   **What you'll see:** Text showing installation progress, which may take a few minutes.

3. **Install the documentation tool** by typing:

   ```powershell
   pip install jinja2
   ```

   **What this does:** Installs Jinja2, which is needed to create the documentation files.

   **What you'll see:** Confirmation that Jinja2 was installed successfully.

### Step 4: Generate DPF operators documentation

Next, generate the DPF operators Markdown documentation files. Choose the option that fits your needs.

#### Option A: Generate DPF operators documentation for everything

This creates documentation for all DPF operators (recommended for most users).

**Type this command:**

```powershell
python .\.ci\generate_operators_doc.py
```

**What this does:** Creates documentation files for all available DPF operators.

**What you'll see:** Text showing progress as each operator is processed. This may take several minutes.

**Wait for completion:** The command is finished when you see your command prompt again (with `(.venv)` at the beginning).

#### Option B: Generate DPF operators documentation for one specific plugin

This creates DPF operators documentation for only one plugin (faster, but incomplete).

**Type this command:**

```powershell
python .\.ci\generate_operators_doc.py --plugin "<plugin_name>"
```

**Important:** Replace `<plugin_name>` with your actual plugin name (keep the quotes).

**Examples:**

For the CFF plugin:

```powershell
python .\.ci\generate_operators_doc.py --plugin "cff"
```

For the Mesh plugin:

```powershell
python .\.ci\generate_operators_doc.py --plugin "mesh"
```

**What this does:** Creates documentation only for the specified plugin.

**What you'll see:** Progress text, but much faster than generating all operators.

### Step 5: Find the DPF operators generated documentation

DPF operators new documentation files have been created. Here's where to find them.

**DPF operators documentation is located in:**

```text
pydpf-core/doc/source/operators-doc/
```

**What's in this folder:**

- An `operator-specifications` folder containing multiple `.md` files (these contain your operator documentation).
- A `toc.yml` file (this creates the table of contents for your website).

**To see these files:**

1. Open File Explorer (Windows key + E).
2. Navigate to your pydpf-core folder.
3. Open the folders: `pydpf-core` → `source` → `operators-doc`→ `operator-specifications`.
4. You should see many `.md` files with names like operator names.

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
