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

Create a local website to view DPF Framework documentation in a user-friendly format (like a regular website with navigation and search). The DPF Framework documentation includes both general reference material and the DPF operators documentation you generated.

### Step 1: Install the website builder (DocFX)

DocFX is a tool that converts your documentation files into a website.

#### Check if you have .NET installed

First, check if your computer has the required software.

**Type this command:**

```bash
dotnet --version
```

**What you should see:** A version number like `8.0` or higher

**If you see an error:** You need to install .NET SDK 8.0 or later from [Microsoft's website](https://dotnet.microsoft.com/download). Download and install it, then try the command again.

#### Install DocFX

**Type this command:**

```bash
dotnet tool update -g docfx
```

**What this does:** Downloads and installs DocFX on your computer.

**What you'll see:** Progress text showing the installation.

**Verify it worked** by typing:

```bash
docfx --version
```

**What you should see:** A version number like `2.78.3` or higher.

**If you see an error:** Try the installation command again, or ask your IT support for help.

### Step 2: Create your website project

Create a new project that turns your documentation files into a website.

#### Create a folder for your website

1. **Create a new folder** for your website project. Type this command (replace `MyDPFDocs` with any name you prefer):

   ```bash
   mkdir MyDPFDocs
   ```

   **What this does:** Creates a new folder called `MyDPFDocs`.

1. **Enter your new folder** by typing:

   ```bash
   cd MyDPFDocs
   ```

   **What this does:** Moves into your new folder so all the next steps happen there.

#### Set up the website structure

1. **Create the website structure** by typing:

   ```bash
   docfx init
   ```

   **What this does:** Asks you questions to set up your website.

2. **Answer the questions** that appear. Here's what to type for each:

   - **What's the name of your site?** Type something like `My DPF Documentation` and press **Enter**.
   - **Generate .NET API documentation? (y/n)** Type `n` and press Enter.
   - **Where are your docs? (docs)** Just press Enter to accept the default.
   - **Enable search? (y/n)** Type `y` and press Enter (this adds a search box to your website).
   - **Enable PDF? (y/n)** Type `n` and press Enter (this keeps things simple).
   - **Is this OK? (y/n)** Type `y` and press Enter.

**What you'll see:** DocFX creates several files and folders for your website.

**Files created:**

- `docfx.json` - Website configuration.
- `docs` folder - Where your documentation will go.
- `toc.yml` - Website navigation menu.

#### Test your website setup

Let's make sure everything is working before adding DPF Framework documentation.

1. **Build and start your website** by typing:

   ```bash
   docfx docfx.json --serve
   ```

   **What this does:** Creates your website and starts a local web server.

   **What you'll see:** Text ending with something like "Serving at <http://localhost:8080>".

2. **View your test website:**
   - Open your web browser (Chrome, Firefox, Edge, etc.).
   - Go to: `http://localhost:8080`.
   - You should see a sample website with navigation.

3. **Test the documentation section:**
   - Click **docs** in the top navigation.
   - You should see some sample documentation pages.

4. **Stop the website** when you're done testing:
   - Go back to your command line.
   - Press `Ctrl + C` to stop the web server.

### Step 3: Add DPF operators documentation

Replace the sample content with your actual DPF operators documentation.

#### Copy DPF operators documentation files

**Copy the generated files:**

1. Navigate to `pydpf-core/doc/source/operators-doc/`
2. Copy all contents to your website's `docs` folder

### Step 4: Add complete DPF Framework documentation

To include the complete DPF Framework documentation (beyond just the operator specifications), follow these steps.

#### Download the complete DPF Framework documentation

1. **Download the full DPF Framework documentation** by typing:

   ```bash
   git clone --no-checkout https://github.com/ansys/DevRelDocs.git
   cd DevRelDocs
   ```

   **What this does:** Prepares to download just the DPF Framework documentation from the full repository.

2. **Set up to download only what you need** by typing:

   ```bash
   git sparse-checkout init --cone
   ```

3. **Choose which documentation to download** by typing:

   ```bash
   git sparse-checkout set 2025R2/dpf-framework-25-r2
   ```

   **What this does:** Tells Git to only download the DPF Framework documentation folder.

4. **Download the files** by typing:

   ```bash
   git checkout
   ```

   **What this does:** Actually downloads the documentation files.

#### Combine with your DPF operators documentation

1. **Open File Explorer and navigate to:**
   - Your `DevRelDocs/2025R2/dpf-framework-25-r2` folder (source).
   - Your website project's `docs` folder (destination).

2. **Copy the documentation carefully:**
   - **Important:** Do NOT copy the `operator-specifications` folder from the source, as this would overwrite your custom DPF operators documentation.
   - Select all other files and folders from the source (excluding `operator-specifications`).
   - Copy and paste them into your website's `docs` folder.

**Result:** You now have complete DPF Framework documentation plus your custom operator specifications.

### Step 5: Build and view your final documentation

Now you're ready to create and view your complete documentation website.

1. **Make sure you're in your website folder** by typing:

   ```bash
   cd MyDPFDocs
   ```

   (Replace `MyDPFDocs` with your actual folder name if different).

2. **Build and start your documentation website** by typing:

   ```bash
   docfx docfx.json --serve
   ```

   **What this does:**
   - Converts all your documentation files into a website.
   - Starts a web server so you can view it.
   - Creates search functionality.

3. **View your documentation:**
   - Open your web browser.
   - Go to: <http://localhost:8080>.
   - Click **docs** to browse your documentation.
   - Use the search box to find specific operators or topics.

4. **When you're done viewing:**
   - Press `Ctrl + C` in the command line to stop the web server.

## Update the "Operator specifications" section

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

   ```bash
   git clone https://github.com/ansys/pydpf-core.git
   ```

   **What this does:** Downloads all the pydpf-core source code to your computer.

#### Create a Python environment

Python environments keep your project separate from other Python installations on your computer.

1. **Create a new Python environment** by typing:

   ```bash
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

   ```bash
   cd pydpf-core
   ```

   **What this does:** Moves down one level to the `pydpf-core` folder

2. **Install pydpf-core** by typing:

   ```bash
   pip install -e .
   ```

   **What this does:** Installs pydpf-core in development mode so you can generate DPF operators documentation.

   **What you'll see:** Text showing installation progress, which may take a few minutes.

3. **Install the documentation tool** by typing:

   ```bash
   pip install jinja2
   ```

   **What this does:** Installs Jinja2, which is needed to create the documentation files.

   **What you'll see:** Confirmation that Jinja2 was installed successfully.

### Step 4: Generate DPF operators documentation

Next, generate the DPF operators Markdown documentation files. Choose the option that fits your needs.

#### Option A: Generate DPF operators documentation for everything

This creates documentation for all DPF operators (recommended for most users).

**Type this command:**

```bash
python .\.ci\generate_operators_doc.py
```

**What this does:** Creates documentation files for all available DPF operators.

**What you'll see:** Text showing progress as each operator is processed. This may take several minutes.

**Wait for completion:** The command is finished when you see your command prompt again (with `(.venv)` at the beginning).

#### Option B: Generate DPF operators documentation for one specific plugin

This creates DPF operators documentation for only one plugin (faster, but incomplete).

**Type this command:**

```bash
python .\.ci\generate_operators_doc.py --plugin "<plugin_name>"
```

**Important:** Replace `<plugin_name>` with your actual plugin name (keep the quotes).

**Examples:**

For the CFF plugin:

```bash
python .\.ci\generate_operators_doc.py --plugin "cff"
```

For the Mesh plugin:

```bash
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
