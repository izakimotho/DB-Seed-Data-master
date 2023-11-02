require('dotenv').config();

const lodash = require('lodash');
const { faker } = require('@faker-js/faker');
const { Client } = require('pg');
const { categories, scalesOfImpact, statuses, jobPerformanceImpacts, origin } = require('./model');
const client = new Client();
const seedTickets = async () => {
    try {
        await client.connect();

        const { rows: customers } = await client.query('select id from customer');

        for (const [i, { id }] of customers.entries()) {
            await Promise.all(Array.from({ length: i + 2 }, async (_, index) => {
                const category = lodash.sample(categories);
                const subcategory = lodash.sample(category.subcategories);
                const valueBindings = [
                    100002,
                    id,
                    lodash.sample(statuses),
                    'Web',
                    faker.lorem.words(),
                    faker.lorem.sentences(),
                    lodash.sample(jobPerformanceImpacts),
                    lodash.sample(scalesOfImpact),
                    faker.datatype.hexaDecimal(7),
                    index + 1
                ];
                const statement = `call ticketsave (${valueBindings.map((_, i) => '$' + (i + 1)).join()})`;

                await client.query(statement, valueBindings);
            }));
        }

        console.info('tickets inserted!');

    } catch (error) {

        console.error('Error:', error.message);
        console.trace(error.stack);

    } finally { await client.end(); }
};
const seedUsers = async () => {
    try {
        await client.connect();

        const { rows: customers } = await client.query('select id from customer');

        for (const [index, { id: customerId }] of customers.entries()) {
            const userId = 100004 + index;
            let statement = `INSERT INTO public."user" (
                id,
                usertypeid,
                firstname,
                lastname,
                workphone,
                mobilephone,
                addressline1,
                addressline2,
                city,
                statename,
                countrycode,
                timezone,
                postalcode,
                emailalt1,
                emailalt2,
                username,
                passwordhash,
                passwordresettoken,
                emailactivationtoken,
                activated,
                alarmcontactuser,
                lastlogindate,
                inserteddtm,
                insertedby,
                updateddtm,
                updatedby,
                preferredcontactmethod,
                isactive) OVERRIDING SYSTEM VALUE

                VALUES (
                    $1,
                    40,
                    'admin',
                    'admin',
                    NULL,
                    NULL,
                    NULL,
                    NULL,
                    NULL,
                    NULL,
                    NULL,
                    NULL,
                    NULL,
                    NULL,
                    NULL,
                    $2,
                    '$2b$10$XNBURGRLquIUw00bX7zMQe8LuSPHnL87YZALESVUSaWz/tCu/1fj.',
                    NULL,
                    NULL,
                    true,
                    NULL,
                    '2022-01-24 11:40:24.103',
                    '2022-01-17 09:09:07.1357',
                    100002,
                    '2022-01-24 11:40:24.103',
                    100002,
                    NULL,
                    true
                )`;

            await client.query(statement, [
                userId,
                faker.unique(faker.internet.email)
            ]);

            statement = `INSERT INTO customeruser (
                customerid,
                userid,
                roleid
            )
            VALUES (
                $1,
                $2,
                $3
            )`;

            await client.query(statement, [
                customerId,
                userId,
                index % 2 == 0 ? 1 : 2
            ]);
        }

        console.info('users inserted!');

    } catch (error) {

        console.error('Error:', error.message);
        console.trace(error.stack);

    } finally { await client.end(); }
};
const seedCustomers = async () => {
    try {
        await client.connect();
        await Promise.all(Array.from({ length: 15 }, async (_, index) => {
            const statement = `INSERT INTO public.customer (id, servicedesk, tenantid, parentcustomerid, name, email, firstname, lastname, domain, customerprofileurl, alternatename, customertypeid, addressline1, addressline2, city, statename, countrycode, postalcode, isactive, esi, esiaddedby, esiaddeddtm, esistartdtm, esienddtm, inserteddtm, insertedby, updateddtm, updatedby) OVERRIDING SYSTEM VALUE
            VALUES ($1,
                    66,
                    1,
                    NULL,
                    $2,
                    $3,
                    $4, 
                    $5,
                    $6,
                    $7,
                    NULL,
                    1,
                    NULL,
                    NULL,
                    NULL,
                    NULL,
                    NULL,
                    NULL,
                    true,
                    NULL,
                    NULL,
                    NULL,
                    NULL,
                    NULL,
                    '2022-01-17 09:43:44.049911',
                    100002,
                    '2022-01-17 07:00:37.115656',
                    100002)`;

            await client.query(statement, [
                1000020 + index,
                faker.company.companyName(),
                faker.unique(faker.internet.email),
                faker.name.firstName(),
                faker.name.lastName(),
                faker.internet.domainName(),
                faker.image.business()
            ]);
        }));

        console.info('customers inserted!')

    } catch (error) {

        console.error('Error:', error.message);
        console.trace(error.stack);

    } finally { await client.end(); }
};
const seedTicketAttachment = async () => {
    try {
        await client.connect();

        const { rows: tickets } = await client.query('select id from ticket');

        for (const { id } of tickets) {
            await Promise.all(Array.from({ length: 5 }, async (_, index) => {
                const valueBindings = [
                    id,
                    faker.datatype.number(),
                    faker.lorem.words(index + 1),
                    faker.internet.url(),
                    faker.datatype.number(),
                    'image/png',
                    faker.datatype.uuid(),
                    100002
                ];
                const statement = `call ticketAttachmentSave (${valueBindings.map((_, i) => '$' + (i + 1)).join()})`;

                await client.query(statement, valueBindings);
            }));
        }

        console.info('attachments inserted!');

    } catch (error) {

        console.error('Error:', error.message);
        console.trace(error.stack);

    } finally { await client.end(); }
};

switch (process.argv[2]) {

    case 'customer':
        seedCustomers();
        break;

    case 'ticket':
        seedTickets();
        break;

    case 'attachment':
        seedTicketAttachment();
        break;

    case 'user':
        seedUsers();
        break;
}