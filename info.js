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
            useLOCALHOSTsql: false, // Unaffected by production flag. See My.Zero Documentation for more information and setup (Recommended for large amounts of user data and credentials.)
            usePreDefinedSQL: false, // Unaffected by production flag. See My.Zero Documentation for more information and setup (Recommended for large amounts of user data and credentials.)



            production: false, // Sets all other values to false.

            // Edulink Specifics
            edulinkUsername: '',
            edulinkSchoolId: '',
            edulinkPassword: '',

            // SQL - LOCALHOST
            useLocal: true,
            isTunneled: true,
            localTunnel: 'https://tw78er6tcs89w.loca.lt',

            // SQL - PRE-DEFINED
            useFile: false,
            databasePrefixPath: './.sqlite/',
            usersDB: 'users.db',
            timetablesDB: 'timetables.db',
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
