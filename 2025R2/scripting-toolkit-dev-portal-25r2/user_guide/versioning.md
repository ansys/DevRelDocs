<a id="versioning"></a>

# Versioning

The Streamlined API has a stable interface and changes follow [Semantic Versioning](https://semver.org/) where-ever
possible. Outside of major releases, only backwards-compatible changes will be made. It is sometimes necessary to make
backwards-incompatible changes without a new major release, but the old will always be deprecated for at least
two versions before the changes are implemented. Deprecated behavior will be documented in the [API reference](../api/index.md) and
will raise an `APIDeprecationWarning` when the behavior is encountered.

Historical changes to the Streamlined API are documented in [Planned changes and deprecations](../changelog.md#upgrading).
