# # JobQueue and MI Scripting Toolkit
#
# ## Introduction
#
# This example demonstrates how to use the Granta MI JobQueue library with the Scripting
# Toolkit. The JobQueue library replaces the AsyncJobQueue component previously available within
# the MI Scripting Toolkit, and allows interaction with the Granta MI Job Queue via Python.
#
# The JobQueue library supports import and export operations. This example demonstrates how to use
# the MI Scripting Toolkit to define the records exported to Excel using an Excel template.
#
# This example does not cover all aspects of the JobQueue package. Full API documentation
# and additional examples are available [here](https://jobqueue.grantami.docs.pyansys.com).

# <div class="alert alert-info">
#
# **Info:**
#
# Running this notebook requires the `ansys-grantami-jobqueue` package.
# See the 'PyGranta Dependencies' section of the 'Example Notebooks'
# documentation page for more details.
# </div>

# ## Define the records to export

# First create an MI Scripting Toolkit session.

import ansys.grantami.core as mpy

SERVICE_LAYER_URL = "http://my.server.name/mi_servicelayer"
mi = mpy.SessionBuilder(SERVICE_LAYER_URL).with_autologon()

# Next, access all records in a specific tree location. We will need the database key later, so
# store it in a constant.

DB_KEY = "MI_Training"
db = mi.get_db(db_key=DB_KEY)
tensile_test_data = db.get_table("Tensile Test Data")

records = tensile_test_data.get_records_from_path(
    starting_node=None, tree_path=["High Alloy Steels", "AMS 6520", "Plate", "300°F"]
)
records

# ## Create an 'ansys-grantami-jobqueue' client
# Use the `Connection` class to connect to create a JobQueue client.

from ansys.grantami.jobqueue import Connection, ExcelExportJobRequest, ExportRecord

api_client = Connection(SERVICE_LAYER_URL).with_autologon().connect()
api_client

# ## Export the records to Excel
# All JobQueue operations are performed by first creating a `JobRequest` object, and then submitting
# that object to the server.
#
# An ``ExcelExportJobRequest`` object requires the following:
#
# * A name and description
# * The path to an Excel export template, provided as either a string or a `pathlib.Path` object
# * A list of `ExportRecord` objects, which contain a record history identity and optionally a
#   record version
# * The database key for the provided `ExportRecord` objects

# First, create the list of `ExportRecord` objects from the list of `Record` objects.

export_records = [ExportRecord(r.history_identity) for r in records]
export_records

# Next, create the Excel export request.

from pathlib import Path

request = ExcelExportJobRequest(
    name="Example export",
    description="A demonstration of how to export data to Excel using Granta MI JobQueue",
    template_file=Path("supporting_files/18_Export_Template.xlsx"),
    database_key=DB_KEY,
    records=export_records,
)
request

# Finally, use the `JobQueue.create_job_and_wait` method to submit the `ExcelExportJobRequest`
# object to the server. This method returns once the job is complete.

job = api_client.create_job_and_wait(job_request=request)
job

# ## Access the exported data
# Once the job is complete, the list of files generated as part of the operation can be accessed via
# the ``output_file_names`` property.

job.output_file_names

# The binary content of an individual file can be accessed with the ``get_file_content`` method, or
# alternatively the file can be saved to disk with the ``download_file`` method. See the JobQueue
# API documentation for a demonstration of these methods.

api_client.delete_jobs([job])
