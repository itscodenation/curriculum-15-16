# API documentation

## Requests

### /complaints/get

| PARAMETER        | TYPE           | DESCRIPTION  |
| ------------- |:-------------:| -----:|
| apikey      | string | API key user got after registration. (**required**) |
| complaint-type      | string      |   The type of complaint. Case sensitive. (optional) |
| agency | string      |    The agency that reported the complaint. Case sensitive. (optional) |
| descriptor | string      |    The description of the complaint; must be lower case. (optional) |
| limit | integer      |    The maximum number of results to be returned. Will return all results if none specified. (optional) |

### /complainttypes/get

| PARAMETER        | TYPE           | DESCRIPTION  |
| ------------- |:-------------:| -----:|
| apikey      | string | API key user got after registration (**required**) |
| limit | integer      |    The maximum number of results to be returned. Will return all results if none specified. (optional) |

### /agencies/get

| PARAMETER        | TYPE           | DESCRIPTION  |
| ------------- |:-------------:| -----:|
| apikey      | string | API key user got after registration (**required**) |
| limit | integer      |    The maximum number of results to be returned. Will return all results if none specified. (optional) |

## Sample request

This gets 10 complaints reported by the NYPD:

http://clownfish.io/complaints/get?apikey=PUT_KEY_HERE&agency=NYPD&limit=10
