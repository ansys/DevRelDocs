# Versioning

<a id="versioning"></a>

<a id="streamlined-api"></a>

## Streamlined API

The Streamlined API follows a versioning strategy similar to numpy’s [NEP 23 policy](https://numpy.org/neps/nep-0023-backwards-compatibility.html#nep23). Version numbers follow
the same MAJOR.MINOR.PATCH structure as with [Semantic Versioning](https://semver.org/), but whereas Semantic Versioning only
allows breaking changes with MAJOR releases, the Streamlined API may introduce breaking changes with MAJOR and MINOR
releases.

However, these changes are always deprecated for at least two MINOR releases prior to being introduced. The deprecation
is communicated in the API documentation, the changelog, and where possible by issuing an `APIDeprecationWarning` at
runtime when the deprecated functionality is used. This versioning strategy is intended to give a tradeoff between
stability and being able to rapidly evolve the API to meet user needs within a rigid release schedule.

[Planned changes and deprecations](../release_notes/deprecations.md#planned-changes) lists the latest planned breaking changes in upcoming releases of the Streamlined API. Historical
changes are documented in [Upgrading from earlier versions](../release_notes/breaking_changes.md#upgrading).

<a id="foundation-api"></a>

## Foundation API

The Foundation API does not follow Semantic Versioning, and breaking changes may be introduced with any Granta MI
release.

The version number includes the interface version of the underlying Service Layer SOAP API that it targets, for example
version `23.10.0.170` is based on the SOAP API version 23/10. The third and fourth version number elements `0.170`
can be considered equivalent to MAJOR and MINOR elements in Semantic Versioning. Breaking changes will trigger a new
MAJOR version, while new functionality that does not break existing functionality will trigger a new MINOR version.
