
exports.up = function(knex) {
    return knex.schema
        .createTable('client', table => {
            table.increments('id');
            table.string('email').notNullable().unique();
            table.string('name').notNullable();

        })
        .createTable('client_product', table => {
            table.increments('id');
            table.integer('client_id').notNullable().references('id').inTable('client').onDelete('CASCADE');
            table.uuid('product_id').notNullable();
            table.string('title').notNullable();
            table.string('image').notNullable();
            table.float('price').notNullable();
            table.float('review_score');
            table.unique(['client_id', 'product_id']);
        })
        .createTable('user', table => {
            table.increments('id');
            table.string('login').unique();
            table.string('password');
        })
};

exports.down = function(knex) {
    return knex.schema        
        .dropTable('client_product')
        .dropTable('client')
        .dropTable('user')
};
