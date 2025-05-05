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
    useEdulinkAPI: false, // Unaffected by production flag. See My.Zero Documentation for more information and setup. (Recommended for transition stages from EduLink.)
    useLOCALHOSTsql: true, // Unaffected by production flag. See My.Zero Documentation for more information and setup (Recommended for large amounts of user data and credentials.)



    production: false, // Sets all other values to false.

    //Edulink Specifics
    edulinkUsername: '',
    edulinkSchoolId: '',
    edulinkPassword: '',
        }}

``schoolId``: The My.Zero school ID, shown at the bottom of the page when logged in.
``schIdContext``: Appended after the ``schoolID`` paramater. If using, you may want to enclose in brackets.
``schNameShortHand``: Shown on the log in screen, next to My.Zero. If using, you may want to enclose in brackets.
``version``: The version number shown under the School ID.
`schoolLinks`: An array of URLs as strings, without the trailing forward slash or the http(s):// protocol.
``emailSuffix``: To be used in-collaboration with ``emailUsernameCorrelation``. It is the email suffix of all users in the system.
``emailUsernameCorrelation``: To be used in-collaboration with ``emailSuffix``. If true, the username will always be the prefix of the email (eg. [username]@[``emailSuffix``])

``flags``:

