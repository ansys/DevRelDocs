# What’s new in 5.1

<a id="whats-new"></a>

<a id="what-s-new-in-version"></a>

MI Scripting Toolkit 5.1 is a minor release.

<a id="linux-autologon"></a>

## Linux autologon

Autologon ([`SessionBuilder.with_autologon()`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionBuilder.with_autologon)) is now supported on Linux using the MIT Kerberos library
(`libkrb5`) provided by the system. The client machine must have valid Kerberos credentials for the realm used by
Granta MI. For more information, see [Runtime dependency (Linux)](../user_guide/authentication.md#linux-autologon-runtime-dependency).

Autologon is not available on macOS.

<a id="macos-support"></a>

## macOS support

MI Scripting Toolkit 5.1 adds support for macOS. MI Scripting Toolkit is supported on macOS 11 and later. For installation instructions,
see the [Getting started](../getting_started/index.md) page. Only Mac computers with Apple silicon are supported.

<a id="oidc-enhancements"></a>

## OIDC enhancements

<a id="client-credentials-flow"></a>

### Client credentials flow

Support has been added for the Client Credentials grant type in the OIDC authentication flow. This allows applications
to authenticate without user interaction, using their own credentials.

Use [`OIDCSessionBuilder.with_client_credentials_flow()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_client_credentials_flow) to configure the OIDC session builder for client
credentials authentication.

#### NOTE
The client credentials grant type is typically used for server-to-server communication, where an application
needs to access resources on behalf of itself rather than a user. Granta MI will report the application as the user in
this case, not the user running the script.

#### NOTE
The client credentials flow requires additional server-side and IdP configuration. In particular, a custom
application configuration must be created for each set of client credentials used with MI Scripting Toolkit. Contact your ACE
representative for more information.

Support for the Device Code flow has been enhanced. If console output is not available or the user code and verification
URL are required programmatically, use [`OIDCSessionBuilder.with_device_code_flow_non_blocking()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_device_code_flow_non_blocking) to create the
login request. The returned object provides the user code and verification URL that can be used in custom login flows.
Once the authentication has been completed, use [`OIDCDeviceCodeFlowSession.complete_authentication()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCDeviceCodeFlowSession.complete_authentication) to
generate the [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session) object.

<a id="device-code-flow-with-pkce"></a>

### Device code flow with PKCE

Support has also been added for Proof Key for Code Exchange (PKCE) in the OIDC Device Code authentication flow, to
provide additional protection against interception of the authorization code.

<a id="external-token-providers"></a>

### External token providers

For use cases where an access token is provided on-demand by an external tool rather than obtained directly by
MI Scripting Toolkit, use [`OIDCSessionBuilder.with_external_token_provider()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_external_token_provider) to configure the session builder with an
external token provider.

<a id="token-renewal"></a>

### Token renewal

A new [`GRANTA_InvalidTokenError`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_InvalidTokenError) exception is raised if an OIDC access token has expired and cannot be
automatically renewed, and [`GRANTA_ServiceLayerError`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError) now exposes a `headers` property to help diagnose these
and other server error scenarios.

OIDC authentication is now more resilient during bulk and parallel operations. Use the [`SessionBuilder.with_oidc()`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionBuilder.with_oidc)
`min_token_refresh_interval_for_parallelization` argument to configure how bulk operations such as
[`Table.bulk_fetch()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch) called with `parallelize=True` renew their OIDC access tokens in the event of token expiry.

<a id="standard-names-support"></a>

## Standard Names support

Support has been added for Standard Names. Standard Names that map to Record Link Groups or Parameters are available on
databases using the [`record_link_groups_by_standard_name`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database.record_link_groups_by_standard_name) and
[`parameters_by_standard_name`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database.parameters_by_standard_name) properties. Standard Names that map to Attributes are available at a
table level, using the property [`attributes_by_standard_name`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.attributes_by_standard_name).

<a id="copying-attribute-and-cell-values"></a>

## Copying attribute and cell values

Added [`AttributeValue.copy_value_from()`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.copy_value_from) and [`EditableTabularCell.copy_value_from()`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.EditableTabularCell.copy_value_from) to support copying
values between attributes and between local tabular cells respectively. These methods simplify duplicating data within
Granta MI, without requiring type-specific handling of each attribute’s underlying storage.
