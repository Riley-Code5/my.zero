// This file is important and it is recommended to read the documentation before making any changes.
// https://myzero.readthedocs.io/en/latest/info.js.html

const info = {
        schoolId: 'zp23809ffd',
        schIdContext: 'The Lenham',
        schNameShortHand: 'TLS',
        version: '1.0051.537',
        schoolLinks: ['teams.microsoft.com', 'thelenham.viat.org.uk'],
        emailSuffix: '@thelenham.viat.org.uk',
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

            // Edulink Specifics
            edulinkUsername: '',
            edulinkSchoolId: '',
            edulinkPassword: '',

            // SQL
            useLocal: true,
            port: 3290,
            isTunneled: false,
            localTunnel: '',
        },
    };
if (info.flags.production) {
    info.flags.startLoggedIn = false;
    info.flags.verbose = false;
    info.flags.persistentEmail = '';
    info.flags.exampleTimeTable = false;
    info.flags.persistentPassword = '';
}
export { info };
