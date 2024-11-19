//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[IModelCenter](index.md)/[createJobManager](create-job-manager.md)

# createJobManager


abstract fun [createJobManager](create-job-manager.md)(): [JobManager](../-job-manager/index.md)

creates a JobManager object for performing trade study runs

#### Return

a JobManager object

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |


abstract fun [createJobManager](create-job-manager.md)(showProgressDialog: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)): [JobManager](../-job-manager/index.md)

Creates a JobManager for performing trade study runs.

#### Return

a JobManager object

#### Parameters



| | |
|---|---|
| showProgressDialog | if true, show a progress dialog when creating the job manager and attempt to parent it to the main ModelCenter window. If false, don't show a progress dialog. |

#### Throws

| | |
|---|---|
| [ModelCenterException](../-model-center-exception/index.md) | if something goes wrong creating a job manager |


abstract fun [createJobManager](create-job-manager.md)(progressDialogParent: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [JobManager](../-job-manager/index.md)

Creates a JobManager for performing trade study runs.

#### Return

a JobManager object

#### Parameters



| | |
|---|---|
| progressDialogParent | the ID of the window that should own the progress dialog that will be shown when creating the job manager. |

#### Throws

| | |
|---|---|
| [ModelCenterException](../-model-center-exception/index.md) | if something goes wrong creating a job manager |
