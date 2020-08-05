# Asana Points From Status POC
Extract points completed in Sprint from an Asana status update.

### Usage
The command:
```sh
ASANA_PROJECT=xxx ASANA_TOKEN=yyy node ./asana-status.js
```

produces output like this:
```sh
2020-07-29	9
2020-07-23	6
2020-07-16	0
2020-01-13	0
```

### Notes
It assumes that you have a custom field named `Sprint points complete` for tracking points completed in a Sprint.
