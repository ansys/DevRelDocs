# Known issues

<a id="known-issues"></a>

<a id="oidc-known-issue"></a>

<a id="oidc-and-parallel-operation"></a>

## OIDC and parallel operation

`parallelize=True` should not be used for bulk methods when authenticating with OIDC if the script is expected to
run for longer than the lifetime of the issued access token. Authentication issues may occur if the access token
expires during parallel operation. Access tokens typically have a lifetime of 1 hour, though this may vary depending
on the identity provider configuration.

This impacts the following methods:

* [`Session.bulk_fetch_release_states()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.bulk_fetch_release_states)
* [`Session.bulk_delete_or_withdraw_records()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.bulk_delete_or_withdraw_records)
* [`Table.bulk_fetch()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch)
* [`Table.bulk_link_fetch()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_link_fetch)
* [`Table.bulk_fetch_associated_records()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_associated_records)
* [`Table.bulk_fetch_data_revision_history()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_data_revision_history)
* [`Table.bulk_fetch_all_record_versions()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_all_record_versions)

<a id="other-known-issues"></a>

## Other known issues

* If an attribute is exported with the [`Table.bulk_fetch()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch) method with `include_binary_data=False`, subsequent
  values returned by the `AttributePicture.mime_file_type` property will always return `image/png`, regardless of
  the actual image format. The header returned when accessing the URL is unaffected and should be used instead.
* The behavior of [`Table.get_record_by_lookup_value()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.get_record_by_lookup_value) when a non-unique lookup value is provided is dependent on
  the Granta MI version. In Granta MI 2025 R2 and later, if multiple matches are detected, no results are returned. In
  earlier Granta MI versions, an exception is raised.
* If an attribute is removed from the Granta MI database after the parent [`Database`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database) is first accessed, calls to
  [`Table.refresh_attributes()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.refresh_attributes) raise a [`GRANTA_ServiceLayerError`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError). Use [`Database.refresh_tables()`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database.refresh_tables)
  instead.
* In version-controlled tables, [`DataRevisionHistory`](../streamlined_api/supporting.md#ansys.grantami.core.mi_meta_classes.DataRevisionHistory) objects have an ambiguous meaning. The
  `history.last_modified_date` for the following attribute types is updated when the release state of the parent
  record is modified:
  - Date
  - Hyperlink
  - Integer
  - Logical
  - Range
  - Short text

  The `history.last_modified_date` for the following attribute types is *not* updated when the release state of the
  parent record is modified:
  - Discrete
  - File
  - Functional
  - Long text
  - Picture
  - Point
  - Tabular
* The following hyperlink display options available in MI Viewer are not supported by
  [`AttributeHyperlink.hyperlink_display`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.hyperlink_display) or [`LocalHyperlinkValue.hyperlink_display`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalHyperlinkValue.hyperlink_display):
  - Current pane
  - Left browse pane
  - Both panes below toolbar

  If a hyperlink attribute value or cell with one of these three display options is exported, the
  [`hyperlink_display`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.hyperlink_display) or
  [`hyperlink_display`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalHyperlinkValue.hyperlink_display) will be set to
  `Content`.
  If the attribute is subsequently re-imported, the display option in MI Viewer will be changed to “Right content pane”.
* Point and range local tabular data cells do not currently support trailing zeros. Any values with significant figures
  information that are imported by setting
  [`PointValueWithParameters.sig_figs_for_import`](../foundation_api.md#ansys.grantami.backend.soap.PointValueWithParameters.PointValueWithParameters.sig_figs_for_import),
  [`RangeDataType.low_value_sig_figs_for_import`](../foundation_api.md#ansys.grantami.backend.soap.RangeDataType.RangeDataType.low_value_sig_figs_for_import),
  or [`RangeDataType.high_value_sig_figs_for_import`](../foundation_api.md#ansys.grantami.backend.soap.RangeDataType.RangeDataType.high_value_sig_figs_for_import)
  as part of a tabular data import operation, will have the significant figures information removed.
* [`Session.persist_oidc_token()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.persist_oidc_token) raises a `win32ctypes.pywin32.pywintypes.error` when it is used to persist
  a refresh token longer than 1280 characters in the Windows Credential Manager. If this error is raised, use an
  alternative keyring backend. A list of alternative backends are available on the [keyring PyPI page](https://pypi.org/project/keyring/).
