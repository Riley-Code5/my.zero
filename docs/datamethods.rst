Data Methods
============

Port Exposing
_____________

First, create a database (above section) and deploy it on an alway's powered machine's localhost, setting the port in :doc:`info.js`.
Next, install localtunnel through npm.
.. code-block:: console

  $ npm install -g  localtunnel

Then, run the following command. You will be given a domain, place this in info.js and DO NOT finish the execution.
.. code-block:: console

  $ lt --port [PORT]
