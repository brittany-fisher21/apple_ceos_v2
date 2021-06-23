const db = require('./conn');

class ExecutiveModel {
    constructor(id, name, slug, first_year_active) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.first_year_active = first_year_active;
    }

    static async getAllCEOSData() {
        try {
            const response = await db.any(
             `SELECT name, first_year_active FROM ceos            
            ORDER BY name;`
            )
            console.log('SQL RESPONSE IS:', response);
            return response
        } catch (error) {
            console.error('ERROR', error);
            return error;
        }
    }
}

module.exports = ExecutiveModel;