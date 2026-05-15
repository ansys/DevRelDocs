# Verifying your installation

After installing the DPF server and PyDPF-Core, it's important to verify that everything is set up correctly.
This section will guide you through testing your installation by starting a DPF local server using PyDPF-Core.

## Why verify your installation

Verifying your installation ensures that:

- The DPF server is correctly installed and accessible.
- PyDPF-Core can communicate with the server.
- Your licensing is properly configured.
- Your environment is ready for the exercises in the next chapter.

## Testing your installation

The simplest way to verify your installation is to start a DPF server session using PyDPF-Core.

### Step1: Open a Python environment

Open a Python interpreter, a Jupyter notebook, or create a Python script file.

### Step2: Import PyDPF-Core

Start by importing the PyDPF-Core library:

```python
import ansys.dpf.core as dpf
```

If this import succeeds without errors, PyDPF-Core is correctly installed.

### Step3: Start a DPF server

Create a DPF server instance by running:

```python
# Start a local DPF server
server = dpf.start_local_server()
print(server)
```

When you execute this command, PyDPF-Core will:

1. Locate the DPF server installation on your system.
2. Start a new server instance.
3. Establish a connection between the client (PyDPF-Core) and the server.

If the server starts successfully, you should see output displaying the server information, confirming the connection is established.

### Step4: Verify licensing

To confirm that your licensing is properly configured, test running an entry-level operator.
Entry operators don't require a premium license and are a good way to verify basic functionality:

```python
# Create a simple field and run an entry operator
field = dpf.Field()
field.append([1.0, 2.0, 3.0], 1)

# Use an entry operator to add a constant
add_op = dpf.operators.math.add_constant(field=field, weights=5.0)
result = add_op.eval()

print(f"✓ Entry operator executed successfully!")
print(f"  Original values: [1.0, 2.0, 3.0]")
print(f"  After adding 5.0: {result.data}")
```

If this executes without license errors, your basic DPF setup is complete and licensed correctly.

### Expected output for licensing test

```cmd
✓ Entry operator executed successfully!
  Original values: [1.0, 2.0, 3.0]
  After adding 5.0: [6. 7. 8.]
```

## What if something goes wrong

If you encounter errors during these steps, here are some common issues and solutions:

## Import error
**Error:** `ModuleNotFoundError: No module named 'ansys.dpf.core'`

**Solution:** PyDPF-Core is not installed or not in your Python path.
Reinstall PyDPF-Core using `pip install ansys-dpf-core` and make sure the expected Python environment is active.

## Server start error
**Error:** `ValueError: Unable to locate any Ansys installation.`

**Solution:** The DPF server is not installed or PyDPF-Core cannot find it.

- If using **Ansys installation**: Verify Ansys is installed and the `AWP_ROOT{version}` environment variable is set
  (e.g., `AWP_ROOT252` for 2025 R2)
- If using **standalone package**: Make sure you installed it with `pip install -e .` from the extracted folder
- **Alternative**: Set the `ANSYS_DPF_PATH` environment variable to point directly to your Ansys installation folder
  (e.g., `C:\Program Files\ANSYS Inc\v252`)

For advanced configuration options, see the [PyDPF-Core server documentation](https://dpf.docs.pyansys.com/version/stable/getting_started/dpf_server.html).

## Licensing error: license agreement not accepted
**Error:** `RuntimeError: DPF Preview License Agreement terms must be accepted using the ANSYS_DPF_ACCEPT_LA environment variable set to Y.`

**Solution:** The license agreement has not been accepted. Follow these steps:

1. Set the environment variable `ANSYS_DPF_ACCEPT_LA` to `Y` as described in [Licensing](licensing.md)

2. **Restart your environment**:
   - Close and reopen your terminal/command prompt
   - Restart your Python interpreter or IDE
   - This ensures the new environment variable is loaded

3. Verify the variable is set:
   - **Windows:** `$env:ANSYS_DPF_ACCEPT_LA` (should return `Y`)
   - **Linux/macOS:** `echo $ANSYS_DPF_ACCEPT_LA` (should return `Y`)

4. Try starting the server again

**Still having issues**

- Make sure you set the environment variable **permanently** (not just temporarily)
- Check that you're running Python in the same environment where you set the variable
- For virtual environments, you may need to set the variable within the activated environment

## Licensing error: no license source found
**Error:** `Exception: Failed to check out license` or `Unable to reach a license server`

**Solution:** DPF cannot find a valid Ansys license. The action to take depends on your setup:

- If using **DPF from an Ansys installation**: the license configuration is normally inherited from Ansys.
  Verify that your Ansys license is working (for example, try launching Ansys Mechanical).
  If the Ansys license itself is not reachable, contact your Ansys license administrator.

- If using the **standalone DPF server**: you must provide a license source explicitly via the `ANSYSLMD_LICENSE_FILE` environment variable,
  as described in [Licensing](licensing.md). Make sure you have:
    - A valid Ansys license file, **or**
    - Access to a running Ansys license server on your network

Contact your Ansys license administrator if you are unsure whether you have access to a compatible Ansys license increment.

For more detailed information,
see the [main DPF Licensing Documentation](https://developer.ansys.com/docs/dpf-framework-2026-r1/getting-started/licensing.md)
or the [PyDPF-Core Licensing Documentation](https://dpf.docs.pyansys.com/version/stable/getting_started/licensing.html).

## gRPC secure connection error (mTLS)
**Error:** `RuntimeError: grpc::stream_provider:0<-error code 10:DPF gRPC mTLS: Missing certificates directory on pin 7, define ANSYS_GRPC_CERTIFICATES or use --certs-dir`

**Cause:** Starting with Ansys 2026 R1 (and select service packs for Ansys 2025 R2, 2025 R1, and 2024 R2),
gRPC communication between a DPF client and a DPF server defaults to requiring
[mutual TLS (mTLS)](https://dpf.docs.pyansys.com/version/stable/getting_started/dpf_server.html#run-dpf-server-in-secure-mode-with-mtls)
authentication. Both the client and the server must have valid mTLS certificates configured.

**Solution:** Choose one of the following options:

- **Option A — Configure mTLS certificates (recommended for production):**
  Generate mTLS certificates and point both the client and the server to them
  by setting the `ANSYS_GRPC_CERTIFICATES` environment variable to the directory
  containing the certificates. See
  [Generating certificates for mTLS](https://tools.docs.pyansys.com/version/stable/user_guide/secure_grpc.html#generating-certificates-for-mtls)
  for detailed instructions.

- **Option B — Disable mTLS (simplest for local development):**
  Set the `DPF_DEFAULT_GRPC_MODE` environment variable to `insecure` on both
  the client machine and the server machine. This reverts to the previous
  unencrypted gRPC behavior.

  ```bash
  # Windows
  $env:DPF_DEFAULT_GRPC_MODE = "insecure"

  # Linux/macOS
  export DPF_DEFAULT_GRPC_MODE=insecure
  ```

Note that this error only applies when connecting over gRPC. The default
`InProcess` mode (used by `dpf.start_local_server()` without arguments) is
not affected.

## Complete test script

Here's a complete script you can use to test your installation:

```python
from ansys.dpf import core as dpf

try:
    # Start a local DPF server
    print("Starting DPF server...")
    server = dpf.start_local_server()
    print("✓ Server started successfully!")
    print(f"✓ Server: {server}")

    # Verify licensing with an entry operator
    print("\nTesting licensing...")
    field = dpf.Field()
    field.append([1.0, 2.0, 3.0], 1)
    add_op = dpf.operators.math.add_constant(field=field, weights=5.0)
    result = add_op.eval()
    print(f"✓ Entry operator executed successfully!")
    print(f"  Result: {result.data}")

    print("\n✅ Your DPF installation is working correctly!")

except Exception as e:
    print(f"✗ Error: {e}")
    print("\nPlease check your installation and licensing configuration.")
```

## Next steps

Once you've successfully verified your installation, you're ready to start using DPF!

In the next chapter, you'll learn about the core concepts and data structures in DPF.
