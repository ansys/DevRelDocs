# Setup Ansys License Manager

Before using simulation framework, you need to connect with `Ansys License Manager` where a valid license has been appended and verified. To set the address of license file, the environment variable `ANSYSLMD_LICENSE_FILE` needs to be specified based on where your license file is.

## Installation of Ansys License Manager

You can explore the Ansys Customer Portal [download center](https://download.ansys.com/Current%20Release) for Linux x64 platform. The download link for Ansys License Manager is located under `Tools` tag.
A complete documentation guide for installation you can find [here](https://download.ansys.com/Installation%20and%20Licensing%20Help%20and%20Tutorials) (login required) or contact customer support.

For quick hands-on, after downloading the package for Linux, unpack it and run following command in terminal under the unpacked directory:

``` bash
bash INSTALL -silent -LM
```

## Add a license to Ansys License Manager

Please ask your customer support to have the detailed documentation.

## Using Ansys License Manager remotely

If the license file has been set up and runs remotely, you can also use simulation framework by setting the environment variable `ANSYSLMD_LICENSE_FILE`, once the connection or proxy allows. i.e.

``` bash
export ANSYSLMD_LICENSE_FILE=1055@customer-abcd.ansys.com
```

Then simulation framework is allowed to be executed.
