# Requests are blocked with a 403 Forbidden error

## Symptom
Requests to the Granta Integration Server are being blocked and a 403 forbidden error is displayed

## Possible cause

The Web Application Firewall (WAF) rules for Granta Cloud Connected Data require all HTTP requests to include a User-Agent header.

Many programming languages do not automatically add this header, and if your integration is not adding a valid User-Agent header, requests will be blocked with 403 Forbidden errors.

Although Python's requests library adds User-Agent header information automatically, the following languages and libraries are known to need extra work to provide valid requests:
- C#/.NET (HttpClient, WebRequest)
- Java (HttpURLConnection)
- Go (net/http)
- Node.js (native http/https, fetch)
- PHP (file_get_contents)

For example, to define a valid User-Agent header in C#:

`_httpClient.DefaultRequestHeaders.UserAgent.ParseAdd("YourAppName/Version");`

Where:
- YourAppName - an identifier for your integration (this should remain consistent through all versions of your integration)
- Version - a version number for your integration (where applicable, this can be the version of the application that you are integrating with)

Note: The Granta Integration Service does not currently use the information provided in the User-Agent value, but might use it in future to tailor the processing of requests.