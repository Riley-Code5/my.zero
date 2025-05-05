Transition
==========

My.Zero supports a handful of transition methods from other educative systems.

EduLink One (Overnet Data)
__________________________

Based on the unofficial APIs for EduLink One on Github, there is support for using data from Overnet Data's EduLink One educative system.

In info.js, there is the following content inside the info constant:

.. code-block:: javascript

        flags: {
            startLoggedIn: false,
            persistentEmail: '',
            exampleTimeTable: true,
            persistentPassword: '',
            useEdulinkAPI: false,
            useLOCALHOSTsql: true,



            production: false, // Sets all other values to false.

            // Edulink Specifics
            edulinkUsername: '',
            edulinkSchoolId: '',
            edulinkPassword: '',
        },


We can ignore all but the following fields:

| ``edulinkUsername``

| ``edulinkSchoolId``

| ``edulinkPassword``

| ``useEdulinkAPI``


| Each of these fields has a purpose for using the API, allowing for easy use of pre-existing data.
| 
| 
| They should contain the following data:
| ``edulinkUsername`` - EduLink account username.
| ``edulinkSchoolId`` - EduLink school ID ([schID].edulinkone.com)
| ``edulinkPassword`` - EduLink account password.
| ``useEdulinkAPI`` - The EduLink API switch. Set to ``true`` if using.

.. note::
In testing, we have found that some schools do not have a custom URL and hence will not work. If this is a problem, maybe use the :doc:`datamethods` page to host the appropriate data.
