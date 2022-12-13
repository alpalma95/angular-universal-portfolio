const bcrypt = require('bcryptjs');

export class User {
  constructor(
    public email: string,
    public password: string,
    public passwordConfirm: string,
    public name?: string,
    public secret?: string
  ) {}

  checkPasswordMatch(): boolean {
    return this.password === this.passwordConfirm;
  }

  encryptPassword(): void {
    if (this.checkPasswordMatch()) {
      const salt = bcrypt.genSaltSync(12);
      const hash = bcrypt.hashSync(this.password, salt);
      this.password = hash;
      this.passwordConfirm = '';
    }
  }
}
