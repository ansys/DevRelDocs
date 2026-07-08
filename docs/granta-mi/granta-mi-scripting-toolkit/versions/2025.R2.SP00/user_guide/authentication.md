# Authentication

<a id="authentication"></a>

<a id="introduction"></a>

## Introduction

MI Scripting Toolkit supports three separate authentication schemes. These schemes are listed in the table below, alongside their
compatibility with available Granta MI server configurations:

|                          |                          | Scripting Toolkit<br/>authentication scheme   | Granta MI server configuration   |
|--------------------------|--------------------------|-----------------------------------------------|----------------------------------|
| Windows mode             | Mixed mode               | Standalone                                    | OIDC                             |
| [Autologon]()            | Yes <sup>[1](#id3)</sup> | Yes <sup>[1](#id3)</sup>                      | No                               |
| [Basic authentication]() | Yes                      | Yes                                           | Yes                              |
| [OIDC]()                 | No                       | No                                            | No                               |
* <a id='id3'>**[1]**</a> Available on Windows only

This guide describes best practice around the different authentication schemes, both when running scripts interactively
and in batch mode.

<a id="autologon"></a>

## Autologon

To use autologon (also known as Integrated Windows Authentication), specify `autologon=True` in the [`Session`](../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session)
constructor:

```pycon
>>> mi = mpy.Session("https://my.server.name/mi_servicelayer", autologon=True)
```

Autologon uses the user’s current login session to authenticate with Granta MI, and so the user’s credentials are not
required.

#### NOTE
To use autologon with MI Scripting Toolkit your Granta MI server must be configured in Windows authentication mode.

<a id="windows-task-scheduler-and-autologon"></a>

### Windows Task Scheduler and autologon

When scheduling scripts to run periodically in a Windows environment, the Task Scheduler is commonly used. It can be
configured to set both the timing of the execution and the identity that the script runs as.

A Scheduled Task is typically configured to run as a stored identity. The password for the identity is stored as part of
the configuration, and when the task is executed, the script is run as that identity. This allows the Python script to
authenticate securely with Granta MI.

Additional configuration is available in the *Triggers* and *Actions* tabs.

*Triggers* define when the script executes. Generally this is specified in terms of the day of the week and the time.

*Actions* define the task itself, which for Python scripts is the execution of a specific executable. In Windows, the
Python executable is typically available either with `py` or `python`. If these are not available, specify the full
path to the executable (accessible in Python by running `sys.executable`).

Some additional recommendations:

* A service principal used as the account in a task must have the permission “Log On As Batch Job”.
* Select the radio button **Run whether user is logged on or not**, since in general the service principal is not logged
  in when the task executes.
* Uncheck the **Do not store password** box, since the session needs to access a remote Granta MI server. This means
  that if the password changes, it must be re-entered in Task Scheduler.

#### NOTE
If the Python script is executed within a virtual environment, write a batch or powershell script that first
activates the virtual environment before the script is run. In this case, the *Actions* tab would reference the
script, which in turn executes the Python script.

<a id="basic-authentication"></a>

## Basic authentication

To connect with basic authentication, specify the username, password, and optional domain in the [`Session`](../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session)
constructor:

```pycon
>>> mi = mpy.Session(
...   "https://my.server.name/mi_servicelayer",
...   user_name="user",
...   password="password",
...   domain="domain",
... )
```

Authenticating with Granta MI using basic authentication is supported with all Granta MI server configurations except
OIDC mode.

#### WARNING
Basic authentication does not define any encryption of credentials. As a result, it is **strongly recommended** to
use HTTPS when using basic authentication to ensure unencrypted credentials are not sent to the server.

Credentials should not be hard coded in scripts, and instead should be provided at runtime. Three common approaches
for managing credentials securely are described below. Use the approach which best fits your needs based on
interactive or batch execution and other security needs.

<a id="getpass"></a>

### getpass

The Python standard library includes the [`getpass`](https://docs.python.org/3/library/getpass.html#module-getpass) module, which prompts the user for the password in the command
prompt without displaying the entered text. An example of using `getpass` to prompt the user for the password is shown
below:

```pycon
>>> import getpass

>>> password = getpass.getpass()

>>> mi = mpy.Session(
...   "https://my.server.name/mi_servicelayer",
...   user_name="user",
...   password=password,
...   domain="domain",
... )
```

This approach is well-suited to interactive, console-based scripts. However, this approach is not suitable for batch
mode operation, since in batch mode there is no command prompt to enter the password. For batch mode operation, the
other options in this section should be used instead.

<a id="environment-variables"></a>

### Environment variables

Credentials can be injected into the script using environment variables. The [`os`](https://docs.python.org/3/library/os.html#module-os) standard library module provides
access to environment variables, and can be used with the [`Session`](../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) constructor as follows:

```pycon
>>> import os

>>> user_name = os.getenv("MI_USERNAME")
>>> password = os.getenv("MI_PASSWORD")
>>> domain = os.getenv("MI_DOMAIN")

>>> mi = mpy.Session(
...   "https://my.server.name/mi_servicelayer",
...   user_name=user_name,
...   password=password,
...   domain=domain,
... )
```

Environment variables are a standard and well-supported aspect of all operating systems, and can be set directly in the
command line, as part of the Integrated Development Environment (IDE), or with a dedicated tool designed to manage
environment variables.

Environment variables provide very limited security against other executing processes, so this approach should only be
used in a trusted environment.

<a id="keyring"></a>

### Keyring

[Keyring](https://pypi.org/project/keyring/) provides simple access to secure credential stores in Windows, Linux, and macOS in Python.
Keyring leverages the [Windows Credential Locker](https://docs.microsoft.com/en-us/windows/uwp/security/credential-locker) in Windows and the
[Secret Service API](https://www.gnu.org/software/emacs/manual/html_node/auth/Secret-Service-API.html) in Linux. Linux support relies on one of a number of different credential storage
methods depending on the Linux distribution. In Ubuntu 22.04, the GNOME Password Manager is used.

#### NOTE
The `keyring` package is installed automatically with the `[oidc]` extra.

Before proceeding, be aware of the following considerations when using `keyring`.

* `keyring` itself does not store the credentials, it relies on an external back end. Environments other than Windows
  and Ubuntu may provide these, but their configuration can be more complex. See the
  [keyring documentation](https://github.com/jaraco/keyring?tab=readme-ov-file) for more details.
* In Windows, all credentials stored by a user are visible to that user. As a result, any credentials stored by a
  shared or service account are visible to everyone with access to that account.
* In Ubuntu, credentials are only accessible if a password was used to log in. If the user was logged in automatically,
  the credential store must be unlocked before it can be accessed.
* `keyring` has a plug-in architecture, which is used to provide alternative (and potentially insecure) back ends.
  However, these require installing additional packages from PyPI and manually selecting an alternative back end.

<a id="installing-keyring"></a>

#### Installing `keyring`

Installing `keyring` is typically done in the same way in both Windows and Ubuntu 22.04, despite the different
credential storage back ends. The package is installed using pip:

```bash
>>> pip install keyring
```

The `keyring` package provides a command line interface, which can be accessed by entering `keyring` on the command
line directly. Confirm the back end in use by running the following on the command line:

```bash
>>> keyring --list-backends
```

In Windows, this produces the following output, which shows that the Windows Credential Locker is used by default. If
the Windows Credential Locker is unavailable, `keyring` fails, thus ensuring that credentials are not inadvertently
stored using an insecure method:

```bash
keyring.backends.Windows.WinVaultKeyring (priority: 5)
keyring.backends.fail.Keyring (priority: 0)
keyring.backends.chainer.ChainerBackend (priority: -1)
```

Running the same command on Ubuntu 22.04 produces a similar output:

```bash
keyring.backends.SecretService.Keyring (priority: 5)
keyring.backends.chainer.ChainerBackend (priority: -1)
keyring.backends.fail.Keyring (priority: 0)
```

<a id="managing-credentials-using-the-command-line"></a>

#### Managing credentials using the command line

The simplest way to store a credential using `keyring` is to use the command line directly.

The following command invokes the `keyring` Python package on the command line and creates a credential for the
username “granta-admin-user” and service “my-python-script”:

```bash
>>> keyring set my-python-script granta-admin-user
```

`keyring` then prompts for the user to enter a password, which is stored securely using either Windows Credential
Locker or Secret Service depending on the platform. To retrieve the stored credential, use the following:

```bash
>>> keyring get my-python-script granta-admin-user
```

The password is printed to the console.

Credentials are updated by setting the password for the same username and service to a different value. Passwords can be
deleted with the following command:

```bash
>>> keyring del my-python-script granta-admin-user
```

<a id="managing-credentials-programmatically"></a>

#### Managing credentials programmatically

It is sometimes useful to store credentials programmatically in Python. This approach is used in MI Scripting Toolkit to securely
persist OpenID Connect (OIDC) tokens. The cells below demonstrate how to perform the same operation as above, but in
Python:

```pycon
>>> import keyring

>>> keyring.set_password("my-python-script", "granta-admin-user", "my_secret_password")
```

In general, credentials should always retrieved programmatically and provided directly to the [`Session`](../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session)
constructor without them ever being visible on screen. To access a credential programmatically, use the following:

```pycon
>>> my_password = keyring.get_password("my-python-script", "granta-admin-user")

>>> print(my_password)
my_secret_password
```

#### NOTE
Since the same persistence backend is used for both the command line tool and Python interface, credentials can be
stored using the command line and accessed programmatically.

Credentials are updated by setting the password for the same username and service:

```pycon
>>> keyring.set_password("my-python-script", "granta-admin-user", "my_super_secret_password")
>>> my_password = keyring.get_password("my-python-script", "granta-admin-user")

>>> print(my_password)
my_super_secret_password
```

Passwords are deleted with the `delete_password` function:

```pycon
>>> keyring.delete_password("my-python-script", "granta-admin-user")
>>> my_password = keyring.get_password("my-python-script", "granta-admin-user")

>>> print(my_password)
None
```

<a id="oidc"></a>

## OIDC

Open ID Connect (OIDC) authentication is a modern, open approach to authentication which relies on federation to connect
disparate systems with shared identities.

#### NOTE
To use OIDC with MI Scripting Toolkit your Granta MI server must be configured in OIDC mode. For more information about
supported OIDC IdPs and for configuration and setup documentation, refer to Granta MI Administration and
Configuration on [Ansys help](https://ansyshelp.ansys.com/).

#### NOTE
To use OIDC with MI Scripting Toolkit you must install the `[oidc]` extra. See [Getting started](../getting_started/index.md) for more details.

<a id="interactive-mode"></a>

### Interactive mode

To use OIDC authentication interactively, specify `oidc=True` in the [`Session`](../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) constructor. The following
example loads the default web browser and redirects the user to their OIDC Identity Provider (IdP) login screen:

```pycon
>>> mi = mpy.Session('https://my.server.name/mi_servicelayer', oidc=True)
```

<a id="batch-mode-storing-refresh-tokens"></a>

### Batch mode: storing refresh tokens

In most cases, following a successful interactive authentication, the IdP returns both an access token and a refresh
token:

* Access token: Short lifetime, not transferable, not accessible on the [`Session`](../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object.
* Refresh token: Long lifetime, transferable between scripts, accessible via the [`Session.refresh_token`](../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.refresh_token)
  property.

#### WARNING
Refresh tokens are bearer tokens that grant access to the Granta MI server, and so should be treated as confidential.

For unattended use, the refresh token can be stored securely in the OS credential manager and used to login
automatically. This approach uses the `keyring` library, see the [Keyring](https://pypi.org/project/keyring/) section above for more details.

Tokens can be securely persisted with the [`Session.persist_oidc_token()`](../api/session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.persist_oidc_token) method:

```pycon
# Connect to Granta MI interactively
>>> mi = mpy.Session('https://my.server.name/mi_servicelayer', oidc=True)

# Store the refresh token in the credential store using keyring
>>> mi.persist_oidc_token()
```

Tokens can then be retrieved from the store and used to create a new Session object with no user interaction:

```pycon
>>> mi = mpy.Session("https://my.server.name/mi_servicelayer", oidc=True, use_stored_token=True)
```
