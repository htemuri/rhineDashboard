import { Migration } from '@mikro-orm/migrations';

export class Migration20210330003235 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_age_check";');
    this.addSql('alter table "user" alter column "age" type int4 using ("age"::int4);');
    this.addSql('alter table "user" alter column "age" drop not null;');

    this.addSql('drop table if exists "post" cascade;');
  }

}
