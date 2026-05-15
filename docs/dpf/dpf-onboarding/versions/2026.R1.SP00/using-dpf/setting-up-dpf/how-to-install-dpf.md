# Installing DPF

As explained in the Introduction chapter, DPF uses a **client-server architecture**. You need:

- **DPF Server**: The processing engine that contains operators and manages data
- **DPF Client**: The programming interface (Python, C++, C#, or Mechanical Scripting) to interact with the server

For this learning path, we'll use **PyDPF-Core** (the Python client) for examples and exercises.

This page guides you through the three installation steps in order:

1. [Install Python](#step1-install-python)
2. [Install PyDPF-Core](#step2-install-pydpf-core)
3. [Set up the DPF server](#step3-set-up-the-dpf-server)

## Before you begin: license requirements

DPF requires a valid Ansys license to run most of its operators. What you need depends on your situation:

| Your setup | License requirement |
| ---------- | ------------------- |
| **Ansys is installed on your machine** | Your Ansys license is already configured. No action needed for licensing at this stage. |
| **No Ansys installation** | You must obtain either a **license file** (`.lic`) or access to a **running Ansys license server** on your network. |

> **Standalone DPF server requires an Ansys license**
> The standalone DPF server is not a free tool. It requires a valid Ansys license increment (such as `preppost`, `meba`, `mech_2`, or any other compatible increment). If you do not already have access to an Ansys license, contact your Ansys license administrator before proceeding with the standalone installation.
>
> Configuring DPF to use your license file or license server is covered in the next section: [Licensing](licensing.md).

## Install Python

PyDPF-Core requires **Python 3.10 or newer**.

If you don't have Python installed, download it from the [official Python website](https://www.python.org/downloads/).

Once installed, verify that Python and pip (shipped with most Python distributions) are available by opening a terminal and running:

```bash
python --version
pip --version
```

Both commands should return a version number without errors.

### Use a virtual environment (recommended)

A virtual environment is an isolated Python environment that keeps your project
dependencies separate from other projects and from your system Python installation.
This prevents version conflicts and makes your setup reproducible.

We strongly recommend creating a virtual environment before installing PyDPF-Core.
To create and activate one:

```bash
python -m venv .myvenv
# On Windows:
.myvenv\Scripts\activate
# On Linux/macOS:
source .myvenv/bin/activate
```

Your terminal prompt will change to show the active environment name. All packages you install from this point are limited to this environment.

> **Virtual environments in VS Code**
> VS Code has built-in support for selecting and managing Python virtual environments. See the [VS Code Python Environments documentation](https://code.visualstudio.com/docs/python/environments) to learn how to create, select, and switch between environments directly from the editor.

## Install PyDPF-Core

With your virtual environment active, install PyDPF-Core using pip:

**For the latest version** (recommended for Ansys 2024 R1 and newer):

```bash
pip install ansys-dpf-core
```

**For a specific version** (required for older Ansys installations):

```bash
pip install ansys-dpf-core==0.12.2
```

> **Version compatibility**
> PyDPF-Core version compatibility with Ansys:
>
>- **Ansys 2024 R1 (24.1) and newer**: Use the latest PyDPF-Core version
>- **Ansys 2023 R2 (23.2) and older**: Install a compatible PyDPF-Core version matching your DPF server version
>
>Check the [PyDPF-Core compatibility documentation](https://dpf.docs.pyansys.com/version/stable/getting_started/compatibility.html) to find the appropriate PyDPF-Core version for your specific Ansys installation.

## Set up the DPF server

PyDPF-Core is the client. It needs a DPF server to connect to. You have two options depending on whether you have Ansys installed on your machine.

### Option 1: Use DPF from your Ansys installation (recommended)

If you already have Ansys installed (2021 R1 or later), the DPF server is already included. There is nothing more to install.

PyDPF-Core automatically detects your Ansys DPF installation if Ansys was installed via the Ansys Unified Installer in the default location.

You can verify the DPF server is accessible by checking the following directory exists:

```powershell
C:\Program Files\ANSYS Inc\v{version}\dpf
```

Replace `{version}` with your Ansys version number (for example, `251` for 2025 R1).

### Option 2: Use a standalone DPF server

If you do not have Ansys installed, you can download and install the DPF server as a standalone package.

> **A license is still required**
>   The standalone DPF server still requires a valid Ansys license to operate. Either a license file must be present on your machine,
>    or your machine must be able to reach a license server on your network. Without a license, the server will start but refuse to run most operations.
>
> Licensing is covered in detail in the next section: [Licensing](licensing.md).

#### Step 1: Download the standalone DPF server

Download the DPF standalone server package from:

- [DPF Server Downloads](https://developer.ansys.com/docs/dpf-framework-2026-r1/getting-started/installation.md)

The standalone server is available from DPF 2023 R2 onwards.

#### Step 2: Extract the package

Extract the downloaded archive to a location on your system, for example:

```powershell
C:\DPF\Server
```

#### Step 3: Register the standalone DPF server with Python

Navigate to the extracted folder and install the DPF server Python package:

```bash
cd C:\DPF\Server
pip install -e .
```

This registers the standalone DPF server so that PyDPF-Core can detect and start it automatically.

> **Warning:**
> The standalone package may not include all specialized plugins available in the full Ansys installation.

---

After completing the installation, proceed to the next section to configure licensing.
