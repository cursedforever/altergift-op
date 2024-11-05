import Gift from '#models/gift';
import factory from '@adonisjs/lucid/factories';
export const GiftFactory = factory
    .define(Gift, async ({ faker }) => {
    return {
        username: faker.person.firstName(),
        email: faker.internet.email(),
        message: faker.lorem.sentence(),
        amount: faker.number.int({ min: 1, max: 1000 }),
        isAmountHidden: faker.datatype.boolean(),
        isAnonymous: faker.datatype.boolean(),
    };
})
    .build();
//# sourceMappingURL=gift_factory.js.map