# Install Simulation Framework

The Simulation Framework includes a robust installation script to streamline setup, dependency management, license configuration, and example integration. The installer supports interactive and non-interactive modes, allowing flexibility across local environments and containerized deployments.

## Requirements

* **Operating System**: Ubuntu 24.04
* **Privileges**: Root privileges may be required (via `sudo`) to install system packages and write to `/bin/` or `/ansys_inc`
* **Dependencies**: Installed automatically by the script if not already present:

  * `build-essential`, `manpages-dev`, `doxygen`, `graphviz`, `proj-bin`
  * `gcc-11`, `g++-11`, `wget`, `software-properties-common`
  * Bazelisk v1.5.0 or newer

---

## Installation Options

Run the installer script with one or more of the following options:

```bash
./install.sh [options]
```

### Basic Options

| Option               | Description                                        |
| -------------------- | -------------------------------------------------- |
| `-h, --help`         | Display help and exit                              |
| `-i, --input=<file>` | Path to the SimFwk `.deb` package                  |
| `-o, --output=<dir>` | Destination directory for installing the framework |
| `-y, --yes`          | Auto-confirm all prompts (non-interactive mode)    |

### Installation Step Flags

You may select specific steps or run the full installer:

| Flag                  | Step                                                      |
| --------------------- | --------------------------------------------------------- |
| `-a, --all`           | Run all steps (default when no specific step is selected) |
| `-s, --simfwk`        | Unpack Simulation Framework `.deb` package                |
| `-e, --example`       | Unpack `simfwk_examples.tar.gz` if found                  |
| `-l, --license`       | Setup Ansys Licensing Client in system only               |
| `-d, --dependencies`  | Install required system and build dependencies            |
| `-g, --documentation` | Generate Doxygen API documentation from installed sources |

---

## Example Full Installation

To run a full installation with default locations and all steps:

```bash
./install.sh --all --yes
```

This performs the following:

1. Installs required dependencies
2. Unpacks the `.deb` package (auto-detected or provided)
3. Sets up Ansys license client
4. Configures Bazel (Bazelisk v1.5.0)
5. Unpacks examples (if found)
6. Generates Doxygen documentation

---

## License Configuration

After installation, ensure the Ansys license environment variable is set before running any simulation:

```bash
export ANSYSLMD_LICENSE_FILE=1055@your-license-host
```

The installer also attempts to copy Ansys Licensing Client under corresponding folder:

```
/ansys_inc/v261/licensingclient → $INSTALL_PATH/lib/external/anslic_client/licensingclient
```

---

## Output

Once complete, you will find:

* The core framework under: `simulation_framework/`
* Examples (if installed): `simfwk_examples/`
* Doxygen docs (if generated): `simulation_framework/documentation/doxygen/html/index.xhtml`

---

## Verifying the Installation

After installation, verify that the framework runs properly by executing a default simulation:

```bash
cd simulation_framework/bin
./simfwk_cli -s ./solver_setting_configuration.json
```

Make sure:
- A valid license is configured (`ANSYSLMD_LICENSE_FILE` is set)
- Your system can connect to the Ansys License Manager

If successful, you’ll see execution logs in the console. Simulation output will be written to:

```
/tmp/simfwk-out
```

This default output directory can be changed via the `output_directory` setting in `solver_setting_configuration.json`.
