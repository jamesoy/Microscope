/**
 * Created by james on 3/11/15.
 */
Accounts.onCreateUser(function(options, user) {
    user.intercomHash = IntercomHash(user, '12345678');

    if (options.profile)
        user.profile = options.profile;

    return user;
});
