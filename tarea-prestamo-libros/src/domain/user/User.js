import { UserId } from "./UserId.js";
import { UserEmail } from "./UserEmail.js";
import { UserName } from "./UserName.js";
import { UserAge } from "./UserAge.js";
import { UserValid } from "./UserValid.js";
import { UserDto } from "./UserDto.js";

export class User {
  constructor(id, email, name, age, valid) {
    this.id = new UserId(id);
    this.email = new UserEmail(email);
    this.name = new UserName(name);
    this.age = new UserAge(age);
    this.valid = new UserValid(valid);
  }

  toDto() {
    return new UserDto(
      this.id.value,
      this.email.value,
      this.name.value,
      this.age.value,
      this.valid.value
    );
  }

  static fromDto(dto) {
    return new User(dto.id, dto.email, dto.name, dto.age, dto.valid);
  }
}
