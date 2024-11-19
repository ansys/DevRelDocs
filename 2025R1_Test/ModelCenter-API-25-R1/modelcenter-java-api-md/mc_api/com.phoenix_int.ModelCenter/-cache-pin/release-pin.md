//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[CachePin](index.md)/[releasePin](release-pin.md)

# releasePin


public [releasePin](release-pin.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Unpin the current file if a file is pinned. Does not guarantee that the file will be flushed unless this was the last active pin on the file.

#### Return

true if a file was previously pinned, otherwise, false

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
