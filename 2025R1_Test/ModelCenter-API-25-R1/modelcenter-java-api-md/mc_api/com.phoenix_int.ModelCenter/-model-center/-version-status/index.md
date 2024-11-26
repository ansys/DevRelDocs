# VersionStatus


enum [VersionStatus](index.md)

Ways to version a file

## Entries

| | |
|---|---|
| [DoVersioning](-do-versioning/index.md) | [DoVersioning](-do-versioning/index.md)<br>Version the file and all subordinant files. Error if any file cannot be versioned. |
| [DoNotVersion](-do-not-version/index.md) | [DoNotVersion](-do-not-version/index.md)<br>Do not version file or subordinant files. |
| [DoVersioningIfPossible](-do-versioning-if-possible/index.md) | [DoVersioningIfPossible](-do-versioning-if-possible/index.md)<br>Version the file and subordinant files if possible. |

## Functions

| Name | Summary |
|---|---|
| [valueOf](value-of.md) | public [valueOf](value-of.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [ModelCenter.VersionStatus](index.md)<br>Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.) |
| [values](values.md) | public [values](values.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[ModelCenter.VersionStatus](index.md)&gt;<br>Returns an array containing the constants of this enum type, in the order they're declared. This method may be used to iterate over the constants. |
