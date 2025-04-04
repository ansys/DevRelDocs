# File upload

> ##### Summary
> 
> Use SAF GLOW to upload files to a solution and use them to do a simple computation.
> 
> <!-- Source code for this example is in the `simple-upload-example <https://github.com/ansys-internal/simple-upload-example>`_ repository. -->

<a id="saf-ex-file-upload-objective"></a>

<a id="svg-version-4-0-0-63c5cb3-width-1-25em-height-1-25em-class-sd-material-icon-sd-material-icon-ads-click-sd-text-secondary-viewbox-0-0-20-20-aria-hidden-true-rect-fill-none-height-20-width-20-rect-path-d-m17-09-18-5l-3-47-3-47l12-5-18l10-10l8-2-5l-2-97-1-11l3-47-3-47l17-09-18-5z-m10-3-5c-3-58-0-6-5-2-92-6-5-6-5-s2-92-6-5-6-5-6-5c0-15-0-0-3-0-01-0-45-0-02l0-46-1-46c10-61-17-98-10-31-18-10-18c-4-42-0-8-3-58-8-8s3-58-8-8-8l0-0-c4-42-0-8-3-58-8-8c0-0-31-0-02-0-61-0-05-0-91l-1-46-0-46c0-01-0-15-0-02-0-3-0-02-0-45c16-5-6-42-13-58-3-5-10-3-5-m10-6-5-c-1-93-0-3-5-1-57-3-5-3-5c0-1-76-1-31-3-23-3-01-3-47l10-15c0-0-0-01-0-0-01-0c7-23-15-5-12-76-5-10c0-2-76-2-24-5-5-5l0-0-c2-76-0-5-2-23-5-4-99c0-0-0-0-01-0-0-01l-1-53-0-49c13-23-7-81-11-76-6-5-10-6-5-path-svg-objective"></a>

## <svg version="4.0.0.63c5cb3" width="1.25em" height="1.25em" class="sd-material-icon sd-material-icon-ads_click sd-text-secondary" viewBox="0 0 20 20" aria-hidden="true"><rect fill="none" height="20" width="20"></rect><path d="M17.09,18.5l-3.47-3.47L12.5,18L10,10l8,2.5l-2.97,1.11l3.47,3.47L17.09,18.5z M10,3.5c-3.58,0-6.5,2.92-6.5,6.5 s2.92,6.5,6.5,6.5c0.15,0,0.3-0.01,0.45-0.02l0.46,1.46C10.61,17.98,10.31,18,10,18c-4.42,0-8-3.58-8-8s3.58-8,8-8l0,0 c4.42,0,8,3.58,8,8c0,0.31-0.02,0.61-0.05,0.91l-1.46-0.46c0.01-0.15,0.02-0.3,0.02-0.45C16.5,6.42,13.58,3.5,10,3.5 M10,6.5 c-1.93,0-3.5,1.57-3.5,3.5c0,1.76,1.31,3.23,3.01,3.47L10,15c0,0-0.01,0-0.01,0C7.23,15,5,12.76,5,10c0-2.76,2.24-5,5-5l0,0 c2.76,0,5,2.23,5,4.99c0,0,0,0.01,0,0.01l-1.53-0.49C13.23,7.81,11.76,6.5,10,6.5"></path></svg> Objective

This example provides instructions on using GLOW for the following file-handling tasks:

| Task        | Component      | Description                                                 |
|-------------|----------------|-------------------------------------------------------------|
| File upload | Step model     | Upload files to a project.                                  |
|             | User interface | Display a list of the uploaded files in the UI.             |
| Computation | Step model     | Use a button to trigger a computation using uploaded files. |
|             | User interface | Display a summary of the computed result in the UI.         |
<!-- When you complete this example, you can expect the following output in the solution UI: -->
<!-- .. _saf-ex-file-upload-output-1: -->
<!-- .. image:: /../_static/usage/file_upload/output_1.png -->
<!-- :width: 100% -->
<!-- .. _saf-ex-file-upload-prerequisites: -->
<!-- :material-outlined:`task;1.25em;sd-text-secondary` Prerequisites -->
<!-- ========================================================================= -->
<!-- List any prerequisite packages or SAF usage examples that should be completed first. -->
<!-- If none exist, delete the section. -->
<!-- Packages -->
<!-- <To render any Plotly-powered data visualization, you need the ``dcc.Graph`` component from **Dash Core Components** library. For more information, see the `Plotly Dash documentation <https://dash.plotly.com/dash-core-components/graph>`_.> -->
<!-- Usage examples -->
<!-- Make sure that you have already completed the following prerequisite examples: -->
<!-- * <LINK_TO_EXAMPLE_1> -->
<!-- * <LINK_TO_EXAMPLE_2> -->

<a id="saf-ex-file-upload-solution"></a>

<a id="svg-version-1-1-width-1-0em-height-1-0em-class-sd-octicon-sd-octicon-code-square-sd-text-secondary-viewbox-0-0-16-16-aria-hidden-true-path-d-m0-1-75c0-784-784-0-1-75-0h12-5c15-216-0-16-784-16-1-75v12-5a1-75-1-75-0-0-1-14-25-16h1-75a1-75-1-75-0-0-1-0-14-25zm1-75-25a-25-25-0-0-0-25-25v12-5c0-138-112-25-25-25h12-5a-25-25-0-0-0-25-25v1-75a-25-25-0-0-0-25-25zm7-47-3-97a-75-75-0-0-1-1-06-0l2-2a-75-75-0-0-1-0-1-06l-2-2a-749-749-0-0-1-1-275-326-749-749-0-0-1-215-734l10-69-8-9-22-6-53a-75-75-0-0-1-0-1-06zm6-78-6-53-5-31-8l1-47-1-47a-749-749-0-0-1-326-1-275-749-749-0-0-1-734-215l-2-2a-75-75-0-0-1-0-1-06l2-2a-751-751-0-0-1-1-042-018-751-751-0-0-1-018-1-042z-path-svg-solution"></a>

## <svg version="1.1" width="1.0em" height="1.0em" class="sd-octicon sd-octicon-code-square sd-text-secondary" viewBox="0 0 16 16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg> Solution

<!-- Replace the placeholder with what the example does. -->

To upload a file and perform a simple computation on it, work through the sequence of tabs provided.

### 1️⃣Backend

In the `first_step.py` module, define the step model for a simple step named `FirstStep`.

A simple step manages its inputs and its outputs. Some of the inputs may be simple scalar values, but a step usually involves at least one heavy asset. To simplify this example, assume that:

* All inputs are in existing files that need to be uploaded.
* All generated outputs are written to files.

### Upload files

First, upload your files. The code shown in the following example defines the file upload as follows:

* The input files are uploaded to a project folder called `inputs`.
* The input files are uploaded using the user interface.
* The output files, which generated by running some trivial code, are to be
  managed in a project folder called `results`.
  ```python
  import json
  from ansys.saf.glow.solution import StepModel, StepSpec, transaction, FileGroupReference

  class FirstStep(StepModel):
      project_assets: FileGroupReference = FileGroupReference("inputs/*")
      results: FileGroupReference = FileGroupReference("results/*")
  ```

### Perform a computation

Next, perform a simple computation on the files you just uploaded. The code shown in the following example defines the computation as follows:

* The computation is implemented as a single transaction which generates a single file
  from the list of input files.
* The transaction inputs are specified as `project_assets` in the `download` section
  of the step specification.
* Similarly, the transaction outputs are specified as `results` in the `upload`
  section of the step specification.

The transaction creates the folder called `results` in the transaction folder. When the transaction finishes, this `results` folder is moved into the project folder.

```python
    @transaction(
        self=StepSpec(
                upload=["results"],
                download=["project_assets"]
        )
    )
    def calculate(self):
        transaction_folder = self.results.project_path
        results_folder = transaction_folder / "results"
        results_folder.mkdir(exist_ok=True, parents=True)
        json.dump(
            [file.path for file in self.project_assets.list_files()],
            open(results_folder / "assets.json", "w"),
        )
```

Click the **2️⃣Frontend** tab to continue.

### 2️⃣Frontend

In the `first_page.py` module, define the page layout for the simple step called `FirstStep`.

Note that the definition of the user interface is more verbose, as the code mixes layout and behavior. It is helpful to use structured programming to break up the difference pieces of the layout. This example contains:

* a title section,
* an upload area,
* a list of files, including a thumbnail for files using the `.png` format,
* a button triggering the step calculation, and
* a table containing the list of files with their size, and
* upload and calculate actions that both trigger the display of a spinning animation,
  blocking all interaction with the UI.

The page definition involves two callbacks, discussed below.

### Display uploaded files

To display the uploaded files, use the first callback, as shown in the following example. This callback is attached to the upload widget and simply uploads the content of the uploaded file into the project folder. With this code:

* **Inputs**:
  * Several of the callback inputs come from the Dash widget being used. (In its current
    version, this widget does support the upload of multiple files.)
  * Another callback input is the page URL, which allows retrieval of the GLOW project
    and associated step.
* **Outputs**
  * The first output is the HTML widget displaying the list of all files uploaded
    to the project.
  * The second output is the widget used to close the spinning animation.

  ```python
  @callback(
      Output("project-file-name", "children"),
      Output("wait-file-upload-outputs", "children"),
      Input("dash-uploader-file", "isCompleted"),
      State("dash-uploader-file", "fileNames"),
      State("dash-uploader-file", "upload_id"),
      State("url", "pathname"),
      prevent_initial_call=True,
  )
  def upload_file(is_completed, filenames, upload_id, pathname):
      project = DashClient[SampleSolution].get_project(pathname)
      if is_completed and filenames and len(filenames):
          for filename in filenames:  # for now, loop body is only executed once.
              project.upload_file(f"inputs/{str(filename)}", open(Path(UPLOAD_DIRECTORY) / upload_id / filename, "rb"))
          return _get_input_files(project.steps.first_step), html.Div()
      raise PreventUpdate
  ```

### Display the computation

Use the second callback to display the computation. This callback is attached to the
Calculate
button and uploads the content of the uploaded file into the project folder.

With this code:

* The first output is the widget responsible for closing the animated spinner.
* The second output is a table showing the list of files in the project’s `results` folder.
  In this simple implementation, there in only one row to this table.
  ```python
      @callback(
      Output("wait-calculate-hourglass-outputs", "children"),
      Output("results", "children"),
      Input("calculate", "n_clicks"),
      State("url", "pathname"),
      prevent_initial_call=True,
  )
  def calculate(n_clicks, pathname):
      if n_clicks > 0:
          step = DashClient[SampleSolution].get_project(pathname).steps.first_step
          step.calculate()
          return html.Div(), _get_results(step)
      raise PreventUpdate
  ```

<!-- .. _saf-ex-file-upload-testing: -->
<!-- :octicon:`verified;1em;sd-text-secondary`  Testing -->
<!-- ================================================== -->
<!-- Finally, test your implementation to confirm it works as expected. -->
<!-- Run the solution and compare your results with the results shown in the :ref:`saf-ex-file-upload-objective` section. -->
<!-- Definitions of interpreted text roles (classes) for S5/HTML data. -->
<!-- This data file has been placed in the public domain. -->
<!-- Colours
======= -->
<!-- Text Sizes
========== -->
<!-- Display in Slides (Presentation Mode) Only
========================================== -->
<!-- Display in Outline Mode Only
============================ -->
<!-- Display in Print Only
===================== -->
<!-- Display in Handout Mode Only
============================ -->
<!-- Incremental Display
=================== -->
