//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[JobManager](index.md)/[resume](resume.md)

# resume


public [resume](resume.md)(dh: [DataHistory](../-data-history/index.md))

Pick up from the last checkpoint in a data history. If you subsequently pass a data collector, data explorer, or data history to submit(), you should be sure to pass one with the same data history or all restored runs will be lost.

#### Parameters



| | |
|---|---|
| dh | the Data History to restore from; if null uses the current data history; if non-null this becomes the current data history; you may pass a data explorer or data collector instead |
