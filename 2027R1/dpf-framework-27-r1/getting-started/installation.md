# Installation

DPF is available with the **Ansys installer** in Ansys 2021 R1 and later, or as a pre-release **DPF Server** standalone package for DPF 2023 R2 and later.


## Install with the **Ansys installer**

To install DPF using the Ansys installer, download the standard Ansys installation using your preferred
distribution channel, and install any physics-based Ansys software following the installer instructions.

Starting with Ansys 2021 R1, DPF is automatically installed along with **Ansys Workbench**.

**Ansys Workbench** is included with all physics-based Ansys software bundles.

Check the list of applications included with each product on the Ansys Help website to know which ones include **Ansys Workbench**:

- [on Windows](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v252/en/installation/win_product_table.html)
- [in Linux](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v252/en/installation/lin_product_table.html)
  
For information on getting a licensed copy of Ansys, visit the [Ansys website](https://www.ansys.com/).


## Install a standalone **DPF Server**

### Get a **DPF Server**

The **DPF Server** package provides pre-releases of DPF in the form of a Python package and is independent from the Ansys installer.

It is available on the [DPF Pre-Release page](https://download.ansys.com/Others/DPF%20Pre-Release) of the Ansys Customer Portal.

The first standalone version of **DPF Server** available is a pre-release of DPF for Ansys 2023 R2 (_DPF v2023.2.pre0_).

> Starting with **DPF Server v2023.2.pre1**, the **composites** plugin is also available for Linux.
>
> Starting with **DPF Server v2024.1.pre0**, the **composites** plugin is also available for Linux and Windows.
>
> Starting with **DPF Server v2024.2.pre0**, the **sound** plugin is also available for Windows.

### Installation steps

To install a standalone **DPF Server**:

1. Download the **ansys_dpf_server_win_v20XX.Y.preZ.zip** or **ansys_dpf_server_lin_v20XX.Y.preZ.zip** file as appropriate.
2. Unzip the package.
3. Optional: download any other plugin ZIP file as appropriate and unzip the package. For example, to access the **composites** plugin for Linux, download **ansys_dpf_composites_lin_v20XX.Y.preZ.zip** and unzip the package in the same location as **ansys_dpf_server_lin_v20XX.Y.preZ.zip**.
4. Open a terminal and move to the root folder (**ansys_dpf_server_win_v20XX.Y.preZ**) of the unzipped package.
5. Activate your Python environment and run this command:

```py
pip install -e .
```

### License agreement

As detailed in [Licensing](licensing.md#license-terms), a standalone DPF Server is protected using the license terms specified in the
**DPFPreviewLicenseAgreement** file, which is available on the [DPF Pre-Release page](https://download.ansys.com/Others/DPF%20Pre-Release)
of the Ansys Customer Portal.

To accept these terms, you must set this environment variable:

```sh
ANSYS_DPF_ACCEPT_LA=Y
```

## Licensing

To use [licensed DPF capabilities](licensing.md#licensing-strategy) you must set the
**ANSYSLMD_LICENSE_FILE** environment variable to point to a valid local or remote license
following indications in [Configure licensing](licensing.md#configure-licensing).
