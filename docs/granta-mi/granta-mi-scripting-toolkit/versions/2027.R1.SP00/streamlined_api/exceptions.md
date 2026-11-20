# Exceptions

<a id="exceptions"></a>

<a id="ansys.grantami.core.mi_meta_classes.UnsupportedLinkGroupError"></a>

### *class* UnsupportedLinkGroupError

Raised when an operation is performed on a record link group which is incompatible with that operation.

<a id="ansys.grantami.core.mi_meta_classes.InvalidRecordStateError"></a>

### *class* InvalidRecordStateError

Raised when a record is in an invalid state for the requested operation.

<a id="ansys.grantami.core.mi_meta_classes.UnexportedBinaryDataError"></a>

### *class* UnexportedBinaryDataError

Raised when an operation requires binary data which has not been exported from the Granta MI database.

<a id="ansys.grantami.core._mi_bulk_utilities.RetryableException"></a>

### *class* RetryableException

Exception included in a [`ParallelOperationExceptionGroup`](#ansys.grantami.core._mi_bulk_utilities.ParallelOperationExceptionGroup) if the reason for the failure of a
parallel task is token expiry but all allowed retries have been exhausted.

<a id="ansys.grantami.core._mi_bulk_utilities.ParallelOperationExceptionGroup"></a>

### *class* ParallelOperationExceptionGroup

Raised during a parallel operation in which OIDC token refreshes have been allowed via
[`SessionBuilder.with_oidc()`](session.md#ansys.grantami.core.mi.SessionBuilder.with_oidc) argument `min_token_refresh_interval_for_parallelization`.

This exception group is raised if any of the parallel tasks raised an exception that isn’t a token expiry or if
the time elapsed since the last token refresh is less than the defined minimum interval.

<a id="warnings"></a>

## Warnings

<a id="ansys.grantami.core.mi_meta_classes.APIDeprecationWarning"></a>

### *class* APIDeprecationWarning

Warning displayed when a property, method, or function will be removed in a future release of MI Scripting Toolkit.

Users should update their scripts to make use of new features and to avoid breaking changes when the deprecated API
is removed.

<a id="ansys.grantami.core.mi_meta_classes.PrereleaseVersionWarning"></a>

### *class* PrereleaseVersionWarning

Warning displayed when a prerelease version of MI Scripting Toolkit is imported.
