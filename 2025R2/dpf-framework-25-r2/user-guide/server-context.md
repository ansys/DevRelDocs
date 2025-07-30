# DPF server context

The server context drives the licensing logic a DPF server uses.

## Available licensing context

Two main licensing context type capabilities are available: 

- **Premium:** This default context allows DPF to perform license checkouts,
  making licensed DPF operators available.
- **Entry:** This context does not allow DPF to perform any license checkout,
  meaning that licensed DPF operators fail.


## Change the default server licensing context

The default context for the server is **Premium**. You can change the context using
the **ANSYS_DPF_SERVER_CONTEXT** environment variable.


## Default context

The **Entry** server context is available in DPF 2023 R2 and later. 

With a server older than 2023 R2, **Premium** is the default server
context and all **Premium** operators can run, depending only on their availability in your version of DPF.
