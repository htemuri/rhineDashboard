import { Migration } from '@mikro-orm/migrations';

export class Migration20210329184052 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "client" drop constraint "client_username_unique";');
    this.addSql('alter table "client" drop column "username";');
    this.addSql('alter table "client" drop column "first_name";');
    this.addSql('alter table "client" drop column "last_name";');
    this.addSql('alter table "client" drop column "age";');
  }

}
