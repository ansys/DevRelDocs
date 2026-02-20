# DPF server context

The server context drives the licensing logic a DPF server uses.

## Available licensing context

Two main licensing context type capabilities are available: 

- **Premium:** This default context allows DPF to perform license checkouts,
  making licensed DPF operators available.
- **Entry:** This context does not allow DPF to perform any license checkout,
  meaning that licensed DPF operators fail.

## Default context

The default context for the server is **Premium**. You can change the default context using
the **ANSYS_DPF_SERVER_CONTEXT** environment variable.

The **Entry** server context is only available in DPF 2023 R2 and later.
