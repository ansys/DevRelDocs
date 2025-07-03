# checkinOnFlush


public [checkinOnFlush](checkin-on-flush.md)(messsage: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))

Checkin with the specified message when the file is unpinned. It must be open for write, and will be placed under version control if it isn't already. If the medium does not support version control, this is a no-op.

#### Parameters



| | |
|---|---|
| messsage | the checkin message; may not be null |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
