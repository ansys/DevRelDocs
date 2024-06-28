# Asset file reference

> ##### Summary
> 
> Use GLOW’s `AssetFileReference` class to pre-populate a solution with script files to avoid file transfers and automate decryption tasks when accessing solution asset files.
> 
> <!-- Source code for this example is in the `tutorial-geometry-manipulation <https://github.com/ansys-internal/tutorial-geometry-manipulation>`_  repository. -->

<a id="saf-ex-asset-file-ref-objective"></a>

<a id="svg-version-4-0-0-63c5cb3-width-1-25em-height-1-25em-class-sd-material-icon-sd-material-icon-ads-click-sd-text-secondary-viewbox-0-0-20-20-aria-hidden-true-rect-fill-none-height-20-width-20-rect-path-d-m17-09-18-5l-3-47-3-47l12-5-18l10-10l8-2-5l-2-97-1-11l3-47-3-47l17-09-18-5z-m10-3-5c-3-58-0-6-5-2-92-6-5-6-5-s2-92-6-5-6-5-6-5c0-15-0-0-3-0-01-0-45-0-02l0-46-1-46c10-61-17-98-10-31-18-10-18c-4-42-0-8-3-58-8-8s3-58-8-8-8l0-0-c4-42-0-8-3-58-8-8c0-0-31-0-02-0-61-0-05-0-91l-1-46-0-46c0-01-0-15-0-02-0-3-0-02-0-45c16-5-6-42-13-58-3-5-10-3-5-m10-6-5-c-1-93-0-3-5-1-57-3-5-3-5c0-1-76-1-31-3-23-3-01-3-47l10-15c0-0-0-01-0-0-01-0c7-23-15-5-12-76-5-10c0-2-76-2-24-5-5-5l0-0-c2-76-0-5-2-23-5-4-99c0-0-0-0-01-0-0-01l-1-53-0-49c13-23-7-81-11-76-6-5-10-6-5-path-svg-objective"></a>

## <svg version="4.0.0.63c5cb3" width="1.25em" height="1.25em" class="sd-material-icon sd-material-icon-ads_click sd-text-secondary" viewBox="0 0 20 20" aria-hidden="true"><rect fill="none" height="20" width="20"></rect><path d="M17.09,18.5l-3.47-3.47L12.5,18L10,10l8,2.5l-2.97,1.11l3.47,3.47L17.09,18.5z M10,3.5c-3.58,0-6.5,2.92-6.5,6.5 s2.92,6.5,6.5,6.5c0.15,0,0.3-0.01,0.45-0.02l0.46,1.46C10.61,17.98,10.31,18,10,18c-4.42,0-8-3.58-8-8s3.58-8,8-8l0,0 c4.42,0,8,3.58,8,8c0,0.31-0.02,0.61-0.05,0.91l-1.46-0.46c0.01-0.15,0.02-0.3,0.02-0.45C16.5,6.42,13.58,3.5,10,3.5 M10,6.5 c-1.93,0-3.5,1.57-3.5,3.5c0,1.76,1.31,3.23,3.01,3.47L10,15c0,0-0.01,0-0.01,0C7.23,15,5,12.76,5,10c0-2.76,2.24-5,5-5l0,0 c2.76,0,5,2.23,5,4.99c0,0,0,0.01,0,0.01l-1.53-0.49C13.23,7.81,11.76,6.5,10,6.5"></path></svg> Objective

A solution can contain *asset files* that are read (but not modified or deleted) by transaction methods. Asset files are not transferred to the method dataspace when a referencing transaction method is executed, and they are often encrypted to protect Ansys intellectual property.

Further, asset files are:

* part of a solution,
* shipped with a packaged solution for deployment and
* common to all projects of a solution.

A good example of an asset file is a script that is passed to a solver. This example demonstrates
how to use the GLOW API’s [AssetFileReference](https://saf.docs.solutions.ansys.com/version/stable/api/solution.html#ansys.saf.glow.solution.AssetFileReference) class to access method asset files in such a way that both avoids file transfers and automates the decryption of the encrypted asset.

<!-- When you complete this example, you can expect the following output in the solution UI: -->
<!-- .. _saf-ex-asset-file-ref-output-1: -->
<!-- .. figure:: /_static/usage/file_upload/output_1.png -->
<!-- :width: 100% -->
<!-- <Static plot for the **Compute** step> -->
<!-- .. _saf-ex-asset-file-ref-prerequisites: -->
<!-- :material-outlined:`task;1.25em;sd-text-secondary` Prerequisites -->
<!-- ========================================================================= -->
<!-- List any prerequisite packages or SAF usage examples that should be completed first. -->
<!-- If none exist, delete the section. -->
<!-- Packages -->
<!-- <To render any Plotly-powered data visualization, you need the ``dcc.Graph`` component from **Dash Core Components**. For more information, see the `Plotly Dash documentation <https://dash.plotly.com/dash-core-components/graph>`_.> -->
<!-- Usage examples -->
<!-- Make sure that you have already completed the following prerequisite examples: -->
<!-- * <LINK_TO_EXAMPLE_1> -->
<!-- * <LINK_TO_EXAMPLE_2> -->

<a id="saf-ex-asset-file-ref-solution"></a>

<a id="svg-version-1-1-width-1-0em-height-1-0em-class-sd-octicon-sd-octicon-code-square-sd-text-secondary-viewbox-0-0-16-16-aria-hidden-true-path-d-m0-1-75c0-784-784-0-1-75-0h12-5c15-216-0-16-784-16-1-75v12-5a1-75-1-75-0-0-1-14-25-16h1-75a1-75-1-75-0-0-1-0-14-25zm1-75-25a-25-25-0-0-0-25-25v12-5c0-138-112-25-25-25h12-5a-25-25-0-0-0-25-25v1-75a-25-25-0-0-0-25-25zm7-47-3-97a-75-75-0-0-1-1-06-0l2-2a-75-75-0-0-1-0-1-06l-2-2a-749-749-0-0-1-1-275-326-749-749-0-0-1-215-734l10-69-8-9-22-6-53a-75-75-0-0-1-0-1-06zm6-78-6-53-5-31-8l1-47-1-47a-749-749-0-0-1-326-1-275-749-749-0-0-1-734-215l-2-2a-75-75-0-0-1-0-1-06l2-2a-751-751-0-0-1-1-042-018-751-751-0-0-1-018-1-042z-path-svg-solution"></a>

## <svg version="1.1" width="1.0em" height="1.0em" class="sd-octicon sd-octicon-code-square sd-text-secondary" viewBox="0 0 16 16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg> Solution

To explore different methods of using the `AssetFileReference` to populate scripts to your application, work through the sequence of tabs provided.

### 1️⃣Context

Blah blah blah

To continue, click the **2️⃣Backend** tab above.

### 2️⃣Backend

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

To continue, click the **3️⃣Frontend** tab above.

### 3️⃣Frontend

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
      Output("wait-asset-file-ref-outputs", "children"),
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

To display the computation, use the second callback, as shown in the following example. This callback is attached to the Calculate
button and simply uploads the content of the uploaded file into the project folder. With this code:

* The first output is the widget responsible for closing the animated spinner.
* The second output is a table showing the list of files in the project’s results folder.
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

### <Trigger the backend processes>

<In the `layout` function, create a button to trigger the backend coordinates computation from the frontend.>

```bash
html.Div(
    dbc.Button(
        "Compute",
        id="compute",
        disabled=False,
        style = {
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "fontSize": "100%",
            "background-color": "rgba(0, 0, 0, 1)",
            "border-color": "rgba(0, 0, 0, 1)",
            "height": "30px",
        }
    ),
    className="d-grid gap-2 col-5 mx-auto",
```

Now that your implementation is complete, continue to the   [Testing](#saf-ex-asset-file-ref-testing) section.

<a id="saf-ex-asset-file-ref-testing"></a>

<a id="svg-version-1-1-width-1-0em-height-1-0em-class-sd-octicon-sd-octicon-verified-sd-text-secondary-viewbox-0-0-16-16-aria-hidden-true-path-d-m9-585-52-929-68c-153-112-331-186-518-215l1-138-175a2-678-2-678-0-0-1-2-24-2-24l-174-1-139c-029-187-103-365-215-518l-68-928a2-677-2-677-0-0-1-0-3-17l-68-928a1-174-1-174-0-0-0-215-518l-175-1-138a2-678-2-678-0-0-1-2-241-2-241l-1-138-175a1-17-1-17-0-0-0-518-215l-928-68a2-677-2-677-0-0-1-3-17-0l-928-68a1-174-1-174-0-0-0-518-215l3-83-14-41a2-678-2-678-0-0-1-2-24-2-24l-175-1-138a1-17-1-17-0-0-0-215-518l-68-928a2-677-2-677-0-0-1-0-3-17l-68-928c-112-153-186-331-215-518l-175-1-14a2-678-2-678-0-0-1-2-24-2-24l1-139-175c-187-029-365-103-518-215l-928-68a2-677-2-677-0-0-1-3-17-0zm7-303-1-728l-927-68a2-67-2-67-0-0-1-1-18-489l-1-137-174a1-179-1-179-0-0-0-987-987l-174-1-136a2-677-2-677-0-0-1-489-1-18l-68-928a1-18-1-18-0-0-0-0-1-394l-68-927c-256-348-424-753-489-1-18l-174-1-137c-078-509-478-909-987-987l1-136-174a2-67-2-67-0-0-1-1-18-489l-928-68c-414-305-979-305-1-394-0l-927-68a2-67-2-67-0-0-1-1-18-489l1-137-174a1-18-1-18-0-0-0-987-987l-174-1-136a2-67-2-67-0-0-1-489-1-18l-68-928a1-176-1-176-0-0-0-0-1-394l-68-927a2-686-2-686-0-0-1-489-1-18l-174-1-137a1-179-1-179-0-0-0-987-987l-1-136-174a2-677-2-677-0-0-1-1-18-489l-928-68a1-176-1-176-0-0-0-1-394-0zm11-28-6-78l-3-75-3-75a-75-75-0-0-1-1-06-0l4-72-8-78a-751-751-0-0-1-018-1-042-751-751-0-0-1-1-042-018l7-8-94l3-22-3-22a-751-751-0-0-1-1-042-018-751-751-0-0-1-018-1-042z-path-svg-testing"></a>

## <svg version="1.1" width="1.0em" height="1.0em" class="sd-octicon sd-octicon-verified sd-text-secondary" viewBox="0 0 16 16" aria-hidden="true"><path d="m9.585.52.929.68c.153.112.331.186.518.215l1.138.175a2.678 2.678 0 0 1 2.24 2.24l.174 1.139c.029.187.103.365.215.518l.68.928a2.677 2.677 0 0 1 0 3.17l-.68.928a1.174 1.174 0 0 0-.215.518l-.175 1.138a2.678 2.678 0 0 1-2.241 2.241l-1.138.175a1.17 1.17 0 0 0-.518.215l-.928.68a2.677 2.677 0 0 1-3.17 0l-.928-.68a1.174 1.174 0 0 0-.518-.215L3.83 14.41a2.678 2.678 0 0 1-2.24-2.24l-.175-1.138a1.17 1.17 0 0 0-.215-.518l-.68-.928a2.677 2.677 0 0 1 0-3.17l.68-.928c.112-.153.186-.331.215-.518l.175-1.14a2.678 2.678 0 0 1 2.24-2.24l1.139-.175c.187-.029.365-.103.518-.215l.928-.68a2.677 2.677 0 0 1 3.17 0ZM7.303 1.728l-.927.68a2.67 2.67 0 0 1-1.18.489l-1.137.174a1.179 1.179 0 0 0-.987.987l-.174 1.136a2.677 2.677 0 0 1-.489 1.18l-.68.928a1.18 1.18 0 0 0 0 1.394l.68.927c.256.348.424.753.489 1.18l.174 1.137c.078.509.478.909.987.987l1.136.174a2.67 2.67 0 0 1 1.18.489l.928.68c.414.305.979.305 1.394 0l.927-.68a2.67 2.67 0 0 1 1.18-.489l1.137-.174a1.18 1.18 0 0 0 .987-.987l.174-1.136a2.67 2.67 0 0 1 .489-1.18l.68-.928a1.176 1.176 0 0 0 0-1.394l-.68-.927a2.686 2.686 0 0 1-.489-1.18l-.174-1.137a1.179 1.179 0 0 0-.987-.987l-1.136-.174a2.677 2.677 0 0 1-1.18-.489l-.928-.68a1.176 1.176 0 0 0-1.394 0ZM11.28 6.78l-3.75 3.75a.75.75 0 0 1-1.06 0L4.72 8.78a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L7 8.94l3.22-3.22a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg>  Testing

Finally, test your implementation to confirm it works as expected.

Run the solution and compare your results with the results shown in the  [Objective](#saf-ex-asset-file-ref-objective) section.

<!-- .. tab-item:: 1️⃣ Logic -->
<!-- :name: saf-ex-asset-file-ref-logic-tab -->
<!-- First, write the business logic. -->
<!-- .. dropdown:: <Create a method to generate the data> -->
<!-- :name: saf-ex-asset-file-ref-logic-drop-1 -->
<!-- :open: -->
<!-- <In the ``logic`` folder, create a module named ``parametric_curves.py``.> -->
<!-- <In this module, create a ``compute_rd_curve`` method to generate the set of points.> -->
<!-- .. code-block:: bash -->
<!-- :caption: <logic/parametric_curves.py> -->
<!-- def compute_rd_curve(points: int = 10000) -> tuple: -->
<!-- t = np.linspace(-6, 6, points) -->
<!-- x_s = 10*np.sin(9.9*t)*np.round(np.sqrt(np.cos(np.cos(10*t)))) -->
<!-- y_s = 9*np.cos(9.9*t)**2*np.sin(np.sin(10*t)) -->
<!-- x, y = np.empty(0), np.empty(0) -->
<!-- for alpha in np.linspace(0, 360, 6): -->
<!-- alpha = np.radians(alpha) -->
<!-- x = np.append(x, x_s*np.cos(alpha) + y_s*np.sin(alpha), axis=0) -->
<!-- y = np.append(y, -x_s*np.sin(alpha) + y_s*np.cos(alpha), axis=0) -->
<!-- d = np.sqrt(x**2 + y**2) -->
<!-- return x.tolist(), y.tolist(), d.tolist() -->
<!-- Click the :ref:`Backend <saf-ex-asset-file-ref-backend-tab>` tab to continue. -->
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
