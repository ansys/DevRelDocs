---
uid: Ans.DataProcessing.Changelog
---

# *class* Changelog(container: GenericDataContainer)

 Represents the version-history changelog of a DPF operator.

**Parameters:**

* **container**

**Example:**

```python
<code>

 // Read the changelog of a loaded operator:

 var op = new Operator("my_operator");

 Changelog cl = op.GetChangelog();

 foreach (string ver in cl.GetVersionsAsStrings())

     Console.WriteLine(ver + " -> " + cl.GetChangesForVersion(ver));



 // Build a changelog manually and attach it to a spec:

 var cl2 = new Changelog();

 cl2.Append("1.0.0", "Initial release.");

 cl2.Append("1.1.0", "Added new feature.");

 </code>
```

**Notes:**

<para>

 A `Changelog` wraps a  that uses the

 canonical DPF changelog schema, the same layout used by both C++ operators and

 operators authored in Python via pydpf-core:

 </para><list type="bullet"><item><description>`"versions"` a  whose data entries

     (in insertion order) are the semantic-version strings.

   </description></item><item><description>`"changes"` a parallel  whose entry

     at index <em>i</em> describes the changes for the version at index <em>i</em>.

   </description></item><item><description>`"class"` the literal string `"Changelog"`, required by the

     C++ `Changelog(const GenericDataContainer&)` constructor.

   </description></item></list><para>

 This is the schema returned by `Operator_specification_GetChangelog` and the

 same schema that pydpf-core's `set_changelog` stores on the server, so a

  obtained through either path is handled identically.

 </para>

## Methods

#### Append(version: str, changes: str) -> None

Appends a new version entry to this .

**Parameters:**

* **version** - Semantic-version string (e.g. `"1.1.0"`).
* **changes** - Free-text description of the changes in that version.

#### GetChangesForVersion(version: str) -> str

Returns the changes description for the given version string.

**Parameters:**

* **version**

#### GetGenericDataContainer() -> GenericDataContainer

Returns the underlying , e.g. for passing

to `Operator_specification_SetChangelog`.

#### GetLastVersion() -> str

Returns the last-appended version string, matching the C++

`Changelog::getLastVersion()` behaviour.

Returns `null` when the changelog is empty.

#### GetVersionsAsStrings() -> List

Returns the list of version strings in insertion order.

Returns an empty list when the changelog GDC has no entries.

#### ToMap() -> Dictionary

Returns a dictionary mapping every version string to its changes text.

#### ToString() -> str
