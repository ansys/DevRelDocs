# Configuring licensing

Run DPF requires two licensing steps:

1. **Accept the license agreement** - required for the standalone DPF server; already covered by the Ansys installer if you have a full Ansys installation.
2. **Point DPF to a license source** - required when no Ansys installation is present on your machine.

## Step1: Accept the license agreement

When using the DPF server from a full Ansys installation, you already agreed to the licensing terms when installing Ansys.
No additional action is needed for this step.

When using the **standalone DPF server**, you must explicitly accept the DPF Preview License Agreement by setting an environment variable.

> **Read the license agreement**
>
>Before accepting, you can read the [DPF Preview License Agreement](https://download.ansys.com/assets/media/DPFPreviewLicenseAgreement.txt) on the Ansys Customer Portal.

Set the environment variable `ANSYS_DPF_ACCEPT_LA` to `Y`:

**On Windows:**

```powershell
# Temporarily (current session only)
$env:ANSYS_DPF_ACCEPT_LA="Y"

# Permanently (for all sessions)
[System.Environment]::SetEnvironmentVariable('ANSYS_DPF_ACCEPT_LA', 'Y', 'User')
```

> **Alternatively, use the Windows GUI:** Open the Start menu, search for **"Edit environment variables for your account"**, and add or update the variable from there. This avoids needing PowerShell permissions and is available on all Windows versions.

**On Linux:**

```bash
# Temporarily (current session only)
export ANSYS_DPF_ACCEPT_LA=Y

# Permanently (add to ~/.bashrc or ~/.bash_profile)
echo 'export ANSYS_DPF_ACCEPT_LA=Y' >> ~/.bashrc
source ~/.bashrc
```

> **Note:**
> You can verify that the environment variable is set correctly by checking it in your terminal:
>
> **Windows (PowerShell):** `$env:ANSYS_DPF_ACCEPT_LA`
> **Linux/macOS:** `echo $ANSYS_DPF_ACCEPT_LA`
>
> Both should return `Y`.

## Step2: Point DPF to a license source

DPF must be able to reach a valid Ansys license to run most of its operators.
The way this is configured depends on your setup.

### Using DPF from a full Ansys installation

If Ansys is installed on your machine, DPF automatically uses the license configuration that Ansys itself uses.
No additional environment variable is needed.
If DPF cannot find a license, consult your Ansys license administrator to ensure the standard Ansys license is reachable.

### Using the standalone DPF server

With the standalone DPF server, there is no Ansys installation to rely on.
You must provide a license yourself, and tell DPF where to find it using the `ANSYSLMD_LICENSE_FILE` environment variable.

You need either:

- A **local Ansys license file** (`.lic` file) obtained from your Ansys license administrator or the Ansys Customer Portal.
- Access to a **running Ansys license server** on your network, provided by your organization.

## You cannot run the standalone DPF server without a valid Ansys license
The standalone DPF server is not a fully free tool.
It still requires a valid Ansys license increment (such as `preppost`, `meba`, `mech_2`, or any other compatible increment).
Contact your Ansys license administrator if you are unsure whether you have access to a compatible license.

**To use a local license file**, set `ANSYSLMD_LICENSE_FILE` to the path of your license file:

```powershell
# Windows
[System.Environment]::SetEnvironmentVariable('ANSYSLMD_LICENSE_FILE', 'C:\path\to\your\license.lic', 'User')
```

> **Alternatively, use the Windows GUI:** Open the Start menu, search for **"Edit environment variables for your account"**, and add or update the variable from there.

```bash
# Linux
echo 'export ANSYSLMD_LICENSE_FILE=/path/to/your/license.lic' >> ~/.bashrc
source ~/.bashrc
```

**To use a remote license server**, set `ANSYSLMD_LICENSE_FILE` to `1055@<server_name>`, where `1055` is the default FlexLM port
and `<server_name>` is the hostname or IP address of your license server:

```powershell
# Windows
[System.Environment]::SetEnvironmentVariable('ANSYSLMD_LICENSE_FILE', '1055@mylicenseserver', 'User')
```

> **Alternatively, use the Windows GUI:** Open the Start menu, search for **"Edit environment variables for your account"**, and add or update the variable from there.

```bash
# Linux
echo 'export ANSYSLMD_LICENSE_FILE=1055@mylicenseserver' >> ~/.bashrc
source ~/.bashrc
```

For more details, see the [main DPF Licensing Documentation](https://developer.ansys.com/docs/dpf-framework-2026-r1/getting-started/licensing.md)
or the [PyDPF-Core licensing documentation](https://dpf.docs.pyansys.com/version/stable/getting_started/licensing.html).

---

Once licensing is configured, proceed to the next section to verify your complete DPF installation.
If you encounter any licensing errors during verification, troubleshooting steps are provided in the next section.
