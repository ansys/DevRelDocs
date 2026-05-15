# Setting up DPF

This chapter guides you through setting up DPF to ensure you can start working with the framework quickly and smoothly.

## Expected Time
**30-45 minutes** - This includes downloading, installing, configuring, and verifying your DPF setup. Actual time may vary depending on download speeds and your system configuration.

## Prerequisites

Before starting, ensure you have:

- **Python 3.10 or later** installed (if you're new to Python, see [Python.org download instructions](https://www.python.org/downloads/))
- **pip** (Python package manager, typically included with Python 3.4+)
- Either:
    - An existing **Ansys installation (2021 R1 or later)** - recommended for most users, OR
    - Ability to download and install the **standalone DPF package** (for development or non-Ansys environments)
- **Administrator/sudo privileges** for installing software and setting environment variables

## Setup overview

As explained in the Introduction chapter, DPF uses a **client-server architecture**. You'll need both components:

- **DPF Server**: The processing engine (comes with Ansys Workbench or as standalone package)
- **DPF Client**: The programming interface (we'll use PyDPF-Core for Python)

To use DPF effectively, you'll need to:

1. **Install** the DPF server and PyDPF-Core client
2. **Configure** licensing by accepting the license agreement
3. **Verify** your installation is working correctly

> **Note:**
> This learning path focuses on setting up PyDPF-Core (Python client) since all exercises and examples use Python.
> If you need to use C++ or C# clients, refer to each associated [DPF documentation](https://developer.ansys.com/docs/dpf)
> for specific setup instructions.

## What you will learn

This chapter provides step-by-step guidance on:

## How to install DPF
- Choose between using DPF from your Ansys installation (recommended) or installing the standalone package
- Understand version compatibility: 2024 R1+ vs 2023 R2-
- Install the PyDPF-Core Python client using pip

## Licensing
- Accept the DPF Preview License Agreement using the `ANSYS_DPF_ACCEPT_LA` environment variable
- Configure the variable permanently for your system
- Understand when and why this step is required

## Verify your installation
- Test your installation by starting a local DPF server
- Verify licensing is correctly configured by running entry operators
- Troubleshoot common installation and licensing errors

By the end of this chapter, you will have a fully functional DPF environment ready for the exercises in the next chapter. Let's get started!
