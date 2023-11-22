# Asynchronous Job Queue
## Connect to MI
Connect to Granta MI and create an **AsyncJobQueue** object.


```python
from GRANTA_MIScriptingToolkit import granta as mpy
import datetime
import pathlib

mi = mpy.connect('http://my.server.name/mi_servicelayer', autologon=True)
job_queue = mi.get_async_job_queue()
```

## Get server information
You can request information about which actions you can perform, or the current configuration of the server.


```python
print("The current user is an administrator: {}\nThe current user can write jobs: {}"
      .format(job_queue.is_admin_user, job_queue.can_write_job))
print(job_queue.processing_configuration)
```

    The current user is an administrator: True
    The current user can write jobs: True
    {'concurrency': 1,
     'polling_interval_in_milliseconds': 1000,
     'purge_interval_in_milliseconds': 86400000,
     'purge_job_age_in_milliseconds': 2592000000}
    

## Create a new import job
Create import jobs using **ImportRequest** class objects. You can also set an (optional) execution date, deferring execution of your job into the future. 

Different job types require different input files. For example, an Excel import can use a 'template' and one or more 'data' files, or a single 'combined' file. These can be provided as relative or absolute paths, as
`pathlib.Path` objects, or as IO buffers (`fileIO` or `stringIO` for example).


```python
text_import_request = mpy.TextImportJobRequest(name='Text Import', description='An example text import job',
                                               data_files=['./text_import_data.txt', './text_import_data.RLT'],
                                               template_files=[pathlib.Path('./text_import_template.xml')])

tomorrow = datetime.datetime.utcnow() + datetime.timedelta(days=1)
with open('./excel_importer.xlsx', 'rb') as fd:
     excel_import_request = mpy.ExcelImportJobRequest(name='Excel Import', description='An example excel import job',
                                                 	  scheduled_execution_date=tomorrow, combined_files=[fd])

print(text_import_request)
print(excel_import_request)
```

    <TextImportJobRequest 'Text Import'>
    <ExcelImportJobRequest 'Excel Import'>
    

## Submit jobs
Once a job is prepared it can be submitted to the server. At this point, you can choose to receive a reference to the running job, or wait until the job has completed or failed.


```python
text_import_job = job_queue.create_import_job_and_wait(text_import_request)
print(text_import_job)

job_id = text_import_job.id
print(job_id)

excel_import_job = job_queue.create_import_job(excel_import_request)
print(excel_import_job)
```

    <AsyncJob 'Text Import' status 'Succeeded'>
    a71d1975-248a-4cf3-9697-2b21040f2f71
    <AsyncJob 'Excel Import' status 'Pending'>
    

## Edit existing jobs
You can edit the properties of a running or completed job through the **AsyncJob** object. For example, a scheduled job can be brought forward, or you can change the name and description.


```python
excel_import_job.update_name("Updated Excel Import")
excel_import_job.update_description("A new description for an import job")
excel_import_job.update_scheduled_execution_date_time(datetime.datetime.utcnow())
print(job_queue.jobs)
```

    [<AsyncJob 'Updated Excel Import' status 'Pending'>, <AsyncJob 'Text Import' status 'Succeeded'>, <AsyncJob 'Updated Excel Import' status 'Succeeded'>, <AsyncJob 'Text Import' status 'Succeeded'>, <AsyncJob 'Updated Excel Import' status 'Succeeded'>, <AsyncJob 'Text Import' status 'Succeeded'>, <AsyncJob 'Comparison Table' status 'Succeeded'>, <AsyncJob 'Comparison Table' status 'Succeeded'>]
    

## Retrieve long-running jobs
If your job may take a long time to complete, you can save the Job ID to disk and check its status later using the `AsyncJobQueue.get_job_by_id()` method. 


```python
retrieved_job = job_queue.get_job_by_id(job_id)
print(retrieved_job)
```

    <AsyncJob 'Text Import' status 'Succeeded'>
    


```python
import time
while excel_import_job.status not in ['Succeeded', 'Failed']:
    time.sleep(1)
    excel_import_job.update()

print(excel_import_job.status)
```

    Succeeded
    

## View output files
Import jobs usually create log files - the exact kind of files generated varies between importers.


```python
print(excel_import_job.get_file_content(excel_import_job.output_file_names[0]))
output_path = pathlib.Path('./output.log')
excel_import_job.download_file(excel_import_job.output_file_names[1], output_path)

print(text_import_job.output_file_names)
```

    {'NumberOfTasks': 1, 'NumberOfRecordsNotImported': 0, 'NumberOfErrors': 0, 'NumberOfRecordsCreated': 0, 'NumberOfRecordsUpdated': 4, 'FinishedSuccessfully': True, 'ImportErrors': []}
    ['summary.json', 'Text Import.log']
    

## Manage the Job Queue
You can also delete jobs or promote them to the top of the queue, if you have the correct permissions.


```python
"""
# Uncomment this code to clear the job queue
job_queue.delete_jobs(job_queue.jobs)
"""
print(job_queue.jobs)
```

    [<AsyncJob 'Text Import' status 'Succeeded'>, <AsyncJob 'Updated Excel Import' status 'Succeeded'>, <AsyncJob 'Updated Excel Import' status 'Succeeded'>, <AsyncJob 'Text Import' status 'Succeeded'>, <AsyncJob 'Updated Excel Import' status 'Succeeded'>, <AsyncJob 'Text Import' status 'Succeeded'>, <AsyncJob 'Comparison Table' status 'Succeeded'>, <AsyncJob 'Comparison Table' status 'Succeeded'>]
    
