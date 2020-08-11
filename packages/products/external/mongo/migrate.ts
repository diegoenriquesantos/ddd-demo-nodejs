import { mongo } from './index';

import { firstMigration } from './migrations/first-migration';

const executeMigrations = async () => {
    const client = await mongo;

    const firstMigrationExists = client.collection('migrations').findOne({ migrationName: 'firstMigration'},
    //,
    async () => {
        
        try {
            await firstMigration(client);
            console.log('product collection is loaded');
          } catch (err) {
            console.error('Monitoring collection existence:', err);
          }

/*         if(err) throw err;
        console.log('resulttt ', result);
        if(result == null) {
            await firstMigration(client);
            console.log('client ' , client); 
        } */


    });
    
    
    // ? 'migrate' : 'noMigrate';
    //console.log(' que pachoooo ',firstMigrationExists);
    //if (!firstMigrationExists || Promise { <pending> }) {
    //    await firstMigration(client);
    //    console.log('client ' , client);
    //}

};   

executeMigrations().catch((err) => console.log('Error in the mongo migration', err));