# Authentication

<a id="authentication"></a>

<a id="introduction"></a>

## Introduction

MI Scripting Toolkit supports three separate authentication schemes. These schemes are listed in the table below, alongside their
compatibility with available Granta MI server configurations:

#### Table 1: Available authentication schemes

|                          |                          | Scripting Toolkit<br/>authentication scheme   | Granta MI server configuration   |
|--------------------------|--------------------------|-----------------------------------------------|----------------------------------|
| Windows mode             | Mixed mode               | Standalone                                    | OIDC                             |
| [Autologon]()            | Yes <sup>[1](#id3)</sup> | Yes <sup>[1](#id3)</sup>                      | No                               |
| [Basic authentication]() | Yes                      | Yes                                           | Yes                              |
| [OIDC]()                 | No                       | No                                            | No                               |
* <a id='id3'>**[1]**</a> Supported on Windows and Linux when client and server Kerberos prerequisites are met. Autologon is not available on macOS.

This guide describes best practice around the different authentication schemes, both when running scripts interactively
and in batch mode.

<a id="autologon"></a>

## Autologon

To use autologon (also known as Integrated Windows Authentication), use [`SessionBuilder.with_autologon()`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionBuilder.with_autologon):

```pycon
>>> mi = mpy.SessionBuilder("https://my.server.name/mi_servicelayer").with_autologon()
```

Autologon uses an external authentication mechanism to connect to Granta MI without prompting for a
username and password in your script.

#### NOTE
To use autologon with MI Scripting Toolkit your Granta MI server must be configured in Windows authentication mode.

<a id="platform-support"></a>

### Platform support

On **Windows**, autologon uses the logged-in user’s Windows security context (SSPI).

On **Linux**, autologon is implemented using the MIT Kerberos libraries (`libkrb5`) provided by the system. The
machine must participate in the same Kerberos realm as the Granta MI server, and a valid ticket-granting ticket must
be available for the user running the script.

Autologon is not available on macOS. On macOS, use [basic authentication](#basic-authentication) or
[OIDC](#oidc-authentication) instead.

<a id="linux-autologon-runtime-dependency"></a>

<a id="runtime-dependency-linux"></a>

### Runtime dependency (Linux)

`libkrb5` is a **system** runtime dependency: it is not installed by pip or conda with MI Scripting Toolkit. For autologon to
work on Linux, the MIT Kerberos client library must be present on the machine (typically as `libkrb5.so`).

The table below lists the usual distribution package that provides that library. Exact package names can vary by
release; use your package manager to search if the name differs on your system.

#### Table 2: Typical Linux kerberos client libraries

| Linux distribution       | Typical package providing `libkrb5`   |
|--------------------------|---------------------------------------|
| Ubuntu                   | `krb5-user`                           |
| Rocky Linux              | `krb5-libs`                           |
| Red Hat Enterprise Linux | `krb5-libs`                           |
| SUSE Linux Enterprise    | `krb5`                                |

<a id="checking-for-kerberos-tickets-linux"></a>

### Checking for Kerberos tickets (Linux)

A quick way to see whether the current user has Kerberos credentials that MI Scripting Toolkit can use is the `klist` command
(often installed with a `krb5-user` or distribution-equivalent client-tools package). If `klist` lists a valid
ticket-granting ticket for the expected realm and principal, autologon may succeed; if it reports no credentials or
only expired tickets, autologon will not work until new tickets are obtained (for example via your organization’s
normal login or `kinit` flow).

`klist` can only be used to confirm correct client configuration, it does not confirm that Granta MI is reachable, or
that the server trusts your realm. Investigating connection failures still requires checking connectivity to the server,
for example confirming the service layer URL, network access, and server configuration.

<a id="kerberos-configuration"></a>

### Kerberos configuration

Kerberos configuration depends on the environment in which it is deployed. Refer to the main Granta MI documentation and
to the documentation provided by your identity provider for details.

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

<a id="id4"></a>

## Basic authentication

To connect with basic authentication, use [`SessionBuilder.with_credentials()`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionBuilder.with_credentials) to specify the username, password,
and optional domain:

```pycon
>>> mi = mpy.SessionBuilder(
...     service_layer_url="https://my.server.name/mi_servicelayer",
... ).with_credentials(
...     username="user",
...     password="password",
...     domain="domain",
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

>>> mi = mpy.SessionBuilder(
...     service_layer_url="https://my.server.name/mi_servicelayer",
... ).with_credentials(
...     username="user",
...     password=password,
...     domain="domain",
... )
```

This approach is well-suited to interactive, console-based scripts. However, this approach is not suitable for batch
mode operation, since in batch mode there is no command prompt to enter the password. For batch mode operation, the
other options in this section should be used instead.

<a id="environment-variables"></a>

### Environment variables

Credentials can be injected into the script using environment variables. The [`os`](https://docs.python.org/3/library/os.html#module-os) standard library module provides
access to environment variables, and can be used with [`SessionBuilder.with_credentials()`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionBuilder.with_credentials) as follows:

```pycon
>>> import os

>>> user_name = os.getenv("MI_USERNAME")
>>> password = os.getenv("MI_PASSWORD")
>>> domain = os.getenv("MI_DOMAIN")

>>> mi = mpy.SessionBuilder(
...     service_layer_url="https://my.server.name/mi_servicelayer",
... ).with_credentials(
...     username=user_name,
...     password=password,
...     domain=domain,
... )
```

Environment variables are a standard and well-supported aspect of all operating systems, and can be set directly in the
command line, as part of the Integrated Development Environment (IDE), or with a dedicated tool designed to manage
environment variables.

Environment variables provide very limited security against other executing processes, so this approach should only be
used in a trusted environment.

<a id="keyring"></a>

<a id="id5"></a>

### Keyring

[Keyring](https://pypi.org/project/keyring/) provides simple access to secure credential stores in Windows, Linux, and macOS in Python.
Keyring leverages the [Windows Credential Locker](https://docs.microsoft.com/en-us/windows/uwp/security/credential-locker) in Windows, the [Keychain](https://developer.apple.com/documentation/security/keychain_services)
in macOS, and the [Secret Service API](https://www.gnu.org/software/emacs/manual/html_node/auth/Secret-Service-API.html) in Linux. Linux support relies on one of a number of different
credential storage methods depending on the Linux distribution. In Ubuntu 22.04, the GNOME Password Manager is used.

#### NOTE
The `keyring` package is installed automatically with the `[oidc]` extra.

Before proceeding, be aware of the following considerations when using `keyring`.

* `keyring` itself does not store the credentials, it relies on an external back end. Environments other than Windows,
  macOS, and Ubuntu may provide these, but their configuration can be more complex. See the
  [keyring documentation](https://github.com/jaraco/keyring?tab=readme-ov-file) for more details.
* In Windows, all credentials stored by a user are visible to that user. As a result, any credentials stored by a
  shared or service account are visible to everyone with access to that account.
* In macOS, credentials are stored in the login keychain. By default, only the application that created the credential
  is able to access it. For Python scripts, this is the specific Python executable used to run the script.
* In Ubuntu 22.04, credentials are only accessible if a password was used to log in. If the user was logged in
  automatically, the credential store must be unlocked before it can be accessed. Other restrictions may exist for other
  supported Linux platforms.
* `keyring` has a plug-in architecture, which is used to provide alternative (and potentially insecure) back ends.
  However, these require installing additional packages from PyPI and manually selecting an alternative back end.

<a id="installing-keyring"></a>

#### Installing `keyring`

Installing `keyring` is typically done in the same way in all supported platforms, despite the different credential
storage back ends. The package is installed using pip:

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

In macOS, this produces a similar output, but with the Windows backend replaced with the macOS keyring backend:

```bash
keyring.backends.macOS.Keyring (priority: 5)
keyring.backends.fail.Keyring (priority: 0)
keyring.backends.chainer.ChainerBackend (priority: -1)
```

Running the same command on Ubuntu 22.04 again produces a similar output, with the SecretService keyring backend:

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

In general, credentials should always be retrieved programmatically and provided directly to
[`SessionBuilder.with_credentials()`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionBuilder.with_credentials) without being visible on screen. To access a credential programmatically, use
the following:

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

<a id="oidc-authentication"></a>

<a id="oidc"></a>

## OIDC

Open ID Connect (OIDC) authentication is a modern, open approach to authentication which relies on federation to connect
disparate systems with shared identities.

#### NOTE
To use OIDC with MI Scripting Toolkit your Granta MI server must be configured in OIDC mode. For more information about
supported OIDC Identity Providers (IdPs) and for configuration and setup documentation, refer to Granta MI
Administration and Configuration on [Ansys help](https://ansyshelp.ansys.com/).

There are many different OIDC flows defined in the OIDC specification, and support for these flows can vary between
IdPs. However, all OIDC flows rely on the same underlying mechanism of access tokens and refresh tokens:

* Access tokens: Short lifetime (typically hours), not accessible on the [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session) object. Used to authenticate
  with the Granta MI server.
* Refresh tokens: Long lifetime (typically days to months), transferable between scripts, accessible via the
  [`Session.refresh_token`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.refresh_token) property. Used to obtain new access tokens. *May be disabled by the IdP.*

If the IdP supports refresh tokens, MI Scripting Toolkit uses both refresh and access tokens to automatically manage token expiry.
When a session is created, MI Scripting Toolkit obtains an access token and a refresh token. The access token is used to
authenticate with the Granta MI server. When the access token expires, MI Scripting Toolkit uses the refresh token to obtain a new
access token. This process is transparent to the user, and allows for long-running sessions that remain authenticated
for long periods.

If the IdP does not support refresh tokens, MI Scripting Toolkit will be unable to request a new access token when it expires. Once
the access token expires, all requests will fail with a 401 Unauthorized error. See [User provided access token](#manual-access-token) for
recommended ways of working with MI Scripting Toolkit in this scenario.

MI Scripting Toolkit supports the following ways of connecting to Granta MI with OIDC authentication:

#### Table 3: OIDC authentication methods

| Flow name                                            | Method(s)                                                                                                                                                                                                                                                                              | Description                                                                                                         | Use case                 |
|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|--------------------------|
| [Authorization code flow](#auth-code-flow)           | [`with_authorization_code_flow()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_authorization_code_flow)                                                                                                                                               | MI Scripting Toolkit loads the default browser and loads a login page.                                              | Interactive              |
| [Device code flow](#device-code-flow)                | [`with_device_code_flow()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_device_code_flow) or<br/>[`with_device_code_flow_non_blocking()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_device_code_flow_non_blocking) | MI Scripting Toolkit provides the user with a URL and code. The user uses these to authenticate on a second device. | Interactive              |
| [Persisted refresh token](#persisted-refresh-token)  | [`Session.persist_oidc_token()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.persist_oidc_token) and [`with_stored_token()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_stored_token)                                               | A refresh token obtained from a previous successful authentication is stored securely and used to authenticate.     | Unattended               |
| [User provided refresh token](#manual-refresh-token) | [`with_refresh_token()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_refresh_token)                                                                                                                                                                   | Refresh token obtained from an external provider is provided directly to the session builder.                       | Unattended               |
| [User provided access token](#manual-access-token)   | [`with_external_token_provider()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_external_token_provider)                                                                                                                                               | Access tokens are generated by an external provider. MI Scripting Toolkit does not interact with the IdP directly.  | Interactive / Unattended |
| [Client credentials flow](#client-credentials-flow)  | [`with_client_credentials_flow()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_client_credentials_flow)                                                                                                                                               | Authentication is performed with a client ID and secret.                                                            | Unattended               |

<a id="interactive-vs-unattended-use"></a>

### Interactive vs unattended use

The choice of OIDC authentication method is typically driven by whether the script is run interactively or unattended.

Interactive scripts typically use [Authorization code flow](#auth-code-flow) or [Device code flow](#device-code-flow), which both provide access tokens and
refresh tokens following a successful authentication.

Unattended scripts use either a [Persisted refresh token](#persisted-refresh-token) (which may have been obtained from a previous successful
interactive authentication), an [external token provider](#manual-access-token), or [Client credentials flow](#client-credentials-flow).

<a id="auth-code-flow"></a>

<a id="authorization-code-flow"></a>

### Authorization code flow

To use OIDC authentication interactively, use [`SessionBuilder.with_oidc()`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionBuilder.with_oidc) to obtain a [`OIDCSessionBuilder`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder)
object, and then use [`OIDCSessionBuilder.with_authorization_code_flow()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_authorization_code_flow).

The following example loads the default web browser and redirects the user to their IdP login page:

```pycon
>>> mi = mpy.SessionBuilder('https://my.server.name/mi_servicelayer').with_oidc().with_authorization_code_flow()
```

The login will complete without interaction if the user has an active session with the IdP. Otherwise, the user is
prompted to enter their credentials and complete any multi-factor authentication (MFA) steps required by the IdP. Once
the authentication process is complete, the browser can be closed and the script continues executing.

<a id="device-code-flow"></a>

<a id="id7"></a>

### Device code flow

If a browser is not available on the machine running MI Scripting Toolkit, use [`OIDCSessionBuilder.with_device_code_flow()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_device_code_flow)
instead. Device code flow (also referred to as device authorization flow or device authorization grant) defines a
procedure where the user authenticates via a browser on a second device, in this case by navigating to a URL and
entering a code. When using [`OIDCSessionBuilder.with_device_code_flow()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_device_code_flow), MI Scripting Toolkit prints a URL and code to the
console, which are used to authenticate instead:

```pycon
>>> mi = mpy.SessionBuilder('https://my.server.name/mi_servicelayer').with_oidc().with_device_code_flow()
```

When using the [`OIDCSessionBuilder.with_device_code_flow()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_device_code_flow) method, the script will pause while the user
authenticates with the IdP. If the script needs to continue running while waiting for the user to authenticate, use
the non-blocking version of the device code flow:

```pycon
>>> device_code_flow_session = (
...     mpy.SessionBuilder('https://my.server.name/mi_servicelayer')
...     .with_oidc()
...     .with_device_code_flow_non_blocking()
... )
>>> # The URL and code are available on the device_code_flow_session object:
>>> print(device_code_flow_session.verification_url)
https://my.identity.provider/verification-url
>>> print(device_code_flow_session.user_code)
U53R-C0D3
>>> # Once the URL and code have been presented to the user, await the completion of the authentication process:
>>> mi = device_code_flow_session.complete_authentication()
```

<a id="persisted-refresh-token"></a>

<a id="id8"></a>

### Persisted refresh token

Typically, the IdP returns both an access token and a refresh token following a successful interactive authentication.

For unattended use, the refresh token can be stored securely in the OS credential manager and used to login
automatically. Refresh tokens can be securely persisted with the [`Session.persist_oidc_token()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.persist_oidc_token) method:

```pycon
# Connect to Granta MI interactively
>>> mi = mpy.SessionBuilder('https://my.server.name/mi_servicelayer').with_oidc().with_authorization_code_flow()

# Store the refresh token in the credential store using keyring
>>> mi.persist_oidc_token()
```

Refresh tokens can then be retrieved from the store and used to create a new Session object with no user interaction:

```pycon
>>> mi = mpy.SessionBuilder("https://my.server.name/mi_servicelayer").with_oidc().with_stored_token()
```

Both the [`Session.persist_oidc_token()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.persist_oidc_token) and [`with_stored_token()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_stored_token) methods rely on the
availability of the `keyring` library. A compatible version can be installed with the `[oidc]` extra. See
[Getting started](../getting_started/index.md) for guidance on installing the extra, and the [Keyring](#keyring) section above for more
information on the `keyring` library.

<a id="manual-refresh-token"></a>

<a id="user-provided-refresh-token"></a>

### User provided refresh token

If possible, scripts should use MI Scripting Toolkit to generate access tokens automatically, either via authorization code flow or
device code flow, or by securely persisting and using a refresh token as described in the preceding sections.

However, in some cases it is required to manually provide a refresh token obtained from an external token provider. In
this case, use the [`with_refresh_token()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_refresh_token) method:

```pycon
>>> refresh_token = "my-refresh-token"
>>> mi = mpy.SessionBuilder("https://my.server.name/mi_servicelayer").with_oidc().with_refresh_token(refresh_token)
```

It is the responsibility of the user to determine how this token is obtained from the external token provider and how it
is securely stored and passed to the script.

#### WARNING
Refresh tokens are bearer tokens that grant access to the Granta MI server, and so should be treated as confidential.

<a id="manual-access-token"></a>

<a id="user-provided-access-token"></a>

### User provided access token

If the interactive authentication flows described above cannot be used and refresh tokens are not available, an external
access token provider can be used instead.

Since access tokens have a limited lifetime and cannot be refreshed, MI Scripting Toolkit must be able to obtain new access tokens
when they expire. To allow MI Scripting Toolkit to re-generate an access token, define a function which returns an access token,
and pass the function to the [`with_external_token_provider()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_external_token_provider) method. MI Scripting Toolkit will call the
function whenever an access token is required, for example when the session is first created or when the access token
expires.

The example below shows a scenario where a command line tool is used to obtain access tokens from the IdP. However, this
approach is flexible; the `my_access_token_provider` function can perform any task as long as it requires no arguments
and returns a valid access token as a string:

```pycon
>>> import subprocess
>>> # Define a callback function which calls an external command-line tool and returns the generated access token.
>>> def my_access_token_provider():
...     result = subprocess.run(
...         ["my-sso-cli", "token", "--output", "raw"],
...         capture_output=True, text=True, check=True,
...     )
...     return result.stdout.strip()
>>> # Provide the callback function to the session builder.
>>> mi = (
...     mpy.SessionBuilder("https://my.server.name/mi_servicelayer")
...     .with_oidc()
...     .with_external_token_provider(my_access_token_provider)
... )
```

You can also provide an access token to [`with_access_token()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_access_token) directly. This method
is included only for development and testing purposes, and should not be used in production systems as the token is not
refreshed on expiry:

```pycon
>>> access_token = "my-access-token"
>>> mi = mpy.SessionBuilder("https://my.server.name/mi_servicelayer").with_oidc().with_access_token(access_token)
```

#### WARNING
Sessions created with access tokens are only functional for the lifetime of the access token, which may be as short
as 5 minutes. Once the access token expires, all requests will fail with a 401 Unauthorized error. To continue using
Scripting Toolkit, a new session must be created.

<a id="client-credentials-flow"></a>

<a id="id9"></a>

### Client credentials flow

For unattended scripts, the client credentials flow can be used if supported by the IdP. In this flow, a client ID and
secret are used to authenticate directly with the IdP and obtain access tokens without any user interaction. To use the
client credentials flow, use the [`with_client_credentials_flow()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_client_credentials_flow) method:

```pycon
>>> client_id = "my-client_id"
>>> client_secret = "my-client_secret"
>>> mi = (
...     mpy.SessionBuilder("https://my.server.name/mi_servicelayer")
...     .with_oidc()
...     .with_client_credentials_flow(client_id, client_secret)
... )
```

#### WARNING
The client secret is the sole proof of trust between the script and the IdP, and so should be treated as
confidential. The client secret should be stored securely, for example using the [Keyring](#keyring) approach described
above.

#### NOTE
The client credentials flow requires additional server-side and IdP configuration, which is outside the scope of
this guide. In particular, a custom application configuration entry must be created for each set of client
credentials used with MI Scripting Toolkit. Contact your ACE representative for more information.
