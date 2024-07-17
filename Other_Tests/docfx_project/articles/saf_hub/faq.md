# SAF FAQ

This is a list of frequently asked questions about **SAF**. Feel free to suggest new entries.

<a id="faq-definition"></a>

<a id="what-is-saf"></a>

## What is SAF?

SAF is the **Ansys Solution Applications Framework**.

To learn more about SAF, use the other resources on the [SAF hub](index.md#saf-hub-index):

* For a high-level introduction, see [SAF overview](overview.md#saf-hub-intro).
* For more detailed information on SAF components, go to [SAF documentation](doc.md#saf-hub-doc) and follow
  the links provided.

<a id="faq-support"></a>

<a id="what-does-saf-support"></a>

## What does SAF support?

<a id="backend-programming-languages"></a>

### Backend programming languages

What backend programming languages does SAF support?\*\*
: GLOW, the backend engine of SAF, is a Python-based framework. By design, it only supports writing solutions in Python.

<a id="frontend-frameworks"></a>

<a id="id2"></a>

### Frontend frameworks

What frontend frameworks does SAF support?\*\*
: GLOW is a RESTful API service, so it supports any UI framework that can invoke REST API calls.
  However, the recommended frontend framework is [Plotly Dash](https://dash.plotly.com/).

Is there a plan to provide solution templates for Angular or React frontends instead of Dash?
: No.

<a id="ironpython"></a>

### IronPython

Can SAF be called with IronPython?
: No. IronPython is not compatible with SAF.
  <br/>
  However, you can use an Ansys solver (such as Ansys Mechanical) to call/execute backend IronPython scripts within SAF.

<a id="operating-systems"></a>

### Operating systems

What operating systems does SAF support?
: For OS and version details, see the [Ansys SAF Desktop](https://saf.docs.solutions.ansys.com/version/stable/) documentation. Development for additional Linux distributions is in progress.

<a id="containerization"></a>

### Containerization

Does SAF support containerization?
: Partially. You can already launch a containerized solution with `docker-compose`. The SAF team is currently working on brining the rest of services that allow the full SAF containerized stack deployment for both one node and multiple nodes.

<a id="deployment"></a>

### Deployment

What types of deployment does SAF currently support?
: Currently, only desktop deployment is supported. Development for private customers’ cloud tenants and customers’ datacenters are in progress.

Will SAF support cloud deployment?
: Cloud deployment is an important milestone for 2024.

<a id="faq-features"></a>

<a id="what-are-some-saf-features"></a>

## What are some SAF features?

<a id="concurrent-projects"></a>

### Concurrent projects

In the same user session, can I launch multiple projects concurrently?\*\*
: Yes.

<a id="remote-monitoring"></a>

### Remote monitoring

Does SAF provide monitoring capabilities for simulation processes executed remotely?
: No. SAF does not provide a built-in way to track the status of a simulation process with remote execution.

<!-- For this, it relies on existing STCs such as Ansys HPC Platform Services (previously Remote Execution Platform [REP]). -->

<a id="solution-resume"></a>

### Solution resume

Can I start a solve in a solution and then come back to it?
: Yes. You may start a solution solve, exit the project, and then return to the project to check its progress.
  <br/>
  However, to keep the solve running, you must keep both the *SAF portal* and *the console from which you started the solution* open. Closing either of these shuts down the solution, thus terminating the solve operation.

<a id="unit-handling"></a>

### Unit handling

Does SAF have built-in units handing for inputs and unit conversions?
: No. The PyAnsys team uses a third-party library, [pint](https://github.com/hgrecco/pint), for unit handling. SAF solutions can use this, as well.

<a id="saf-minerva-overlap"></a>

### SAF / Minerva overlap

Should I use SAF or Minerva to build a solution application?
: It depends on the customer and their use case. SAF and Minerva are complementary, and both teams will work together during 2024 to enhance the integration.
  <br/>
  If the customer has already Minerva and a solution can be built with a simple form that just performs a batch execution, then Minerva alone could serve this need.
  <br/>
  However, if a more complex UI/UX with several callbacks to the flagship products is needed, then SAF might be more appropriate.
  <br/>
  Note that it is already possible to:
  <br/>
  * Develop a SAF solution and to use the Minerva CLI to store data in Minerva
  * Add a SAF-solution entry point in the Minerva Portal, so that you can launch the
    SAF solution from there.
  <br/>
  For more information about this, reach out to your Ansys Solutions support representative.

<a id="faq-plans"></a>

<a id="what-is-planned-for-saf"></a>

## What is planned for SAF?

<a id="release-timeline"></a>

### Release timeline

What is the release schedule for SAF?
: SAF is already available for desktop deployment. Other deployments and features will be released as development is completed.

<a id="closed-vs-open-source"></a>

### Closed vs. open source

Will SAF ever be open-source?
: Ansys Product Management is considering this question.

<a id="optislang-apps"></a>

### optiSLang apps

Is there a plan to replace optiSLang (oSL) apps with SAF-based apps?
: Yes, there is a plan to replace optiSLang Web Services (OWS) and PyOWA by SAF-based optiSLang apps.

<a id="act-wizards"></a>

### ACT wizards

Is there a plan to replace ACT wizards with SAF-based apps?
: No. There is currently no plan in place for replace the ACT wizards by SAF.

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
