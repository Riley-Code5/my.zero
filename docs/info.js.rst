info.js
=======

Flags
______
.. code-block:: javascript

  const info = {
  schoolId: '',
  schIdContext: '',
  schNameShortHand: '',
  version: '',
  schoolLinks: [],
  emailSuffix: '',
  emailUsernameCorrelation: true,
  flags: {
    startLoggedIn: false,
    persistentEmail: '',
    exampleTimeTable: true,
    persistentPassword: '',
    verbose: true,
    useEdulinkAPI: false, // Unaffected by production flag. See My.Zero Documentation for more information and setup. (Recommended for transition stages from EduLink.)
    useLOCALHOSTsql: true, // Unaffected by production flag. See My.Zero Documentation for more information and setup (Recommended for large amounts of user data and credentials.)



    production: false, // Sets all other values to false.

    //Edulink Specifics
    edulinkUsername: '',
    edulinkSchoolId: '',
    edulinkPassword: '',
        }}

| ``schoolId``: The My.Zero school ID, shown at the bottom of the page when logged in.
| ``schIdContext``: Appended after the ``schoolID`` paramater. If using, you may want to enclose in brackets.
| ``schNameShortHand``: Shown on the log in screen, next to My.Zero. If using, you may want to enclose in brackets.
| ``version``: The version number shown under the School ID.
| ``schoolLinks``: An array of URLs as strings, without the trailing forward slash or the http(s):// protocol.
| ``emailSuffix``: To be used in-collaboration with ``emailUsernameCorrelation``. It is the email suffix of all users in the system.
| ``emailUsernameCorrelation``: To be used in-collaboration with ``emailSuffix``. If true, the username will always be the prefix of the email (eg. [username]@[``emailSuffix``])
| 
| ``flags``:
|     A set of debugging tools (or production features) for smooth deployment.
| ``startLoggedIn``: Starts the application logged in (with details from ``persistentEmail`` and ``persistentPassword``)
| ``persistentEmail``: Pre-fills the email state variable to the value, needed for the ``startLoggedIn`` flag or for ease of testing the log in screen.
| ``exampleTimeTable``: Fills the timetable tab with an example 2-week timetable.
| ``persistentPassword``: Pre-fills the password state variable to the value, needed for the ``startLoggedIn`` flag or for ease of testing the log in screen.
| ``verbose``: Gives enhanced debugging tools (eg. longer errors).
| ``useEdulinkAPI``: Explained in :doc:`transition`.
| ``useLOCALHOSTsql``: Recommended method for most scenarios, more information can be found in :doc:`datamethods`
| ``production``: Sets other values to false or empty, for ease of production testing.
| ``edulinkUsername``: Explained in :doc:`transition`.
| ``edulinkSchoolId``: Explained in :doc:`transition`.
| ``edulinkPassword``: Explained in :doc:`transition`.
