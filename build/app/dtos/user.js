import { BaseModelDto } from '@adocasts.com/dto/base';
export default class UserDto extends BaseModelDto {
    constructor(user) {
        super();
        if (!user)
            return;
        this.id = user.id;
        this.fullName = user.fullName;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.createdAt = user.createdAt.toISO();
        this.updatedAt = user.updatedAt?.toISO();
    }
}
//# sourceMappingURL=user.js.map