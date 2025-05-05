info.js
=======

Flags
______

.. codeblock:: javascript
 :linenos:
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
        },
}
