import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm";

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
})

if(process.env.NODE_ENV === 'producion'){
    Object.assign(
        AppDataSource,
        {
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        }
    )
}